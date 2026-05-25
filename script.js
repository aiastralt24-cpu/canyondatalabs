const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const root = document.documentElement;
const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-world-menu]");
const menuButton = document.querySelector("[data-menu-button]");
const depthReadout = document.querySelector("[data-depth-readout]");
const preloader = document.querySelector("[data-preloader]");
const enterSite = document.querySelector("[data-enter-site]");

let pointerX = 0.5;
let pointerY = 0.5;
let targetPointerX = 0.5;
let targetPointerY = 0.5;

function setMenu(open) {
  if (!menu || !menuButton) return;
  menu.classList.toggle("is-open", open);
  menu.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

menu?.addEventListener("click", (event) => {
  const link = event.target instanceof Element ? event.target.closest("[data-menu-link]") : null;
  if (link) {
    setMenu(false);
  }
});

function hidePreloader() {
  preloader?.classList.add("is-hidden");
  document.body.classList.remove("is-loading");
}

if (preloader) {
  document.body.classList.add("is-loading");
  window.addEventListener("load", () => setTimeout(hidePreloader, 900), { once: true });
  setTimeout(hidePreloader, 2200);
  enterSite?.addEventListener("click", hidePreloader);
}

function updateScrollState() {
  const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, window.scrollY / max));
  const heroProgress = Math.min(1, Math.max(0, window.scrollY / Math.max(1, window.innerHeight)));
  root.style.setProperty("--scroll-progress", progress.toFixed(4));
  root.style.setProperty("--hero-progress", heroProgress.toFixed(4));
  header?.classList.toggle("is-scrolled", window.scrollY > 40);
  if (depthReadout) depthReadout.textContent = `${String(Math.round(progress * 840)).padStart(3, "0")}m`;
}

window.addEventListener("scroll", updateScrollState, { passive: true });
window.addEventListener("resize", updateScrollState);
updateScrollState();

window.addEventListener(
  "pointermove",
  (event) => {
    targetPointerX = event.clientX / Math.max(1, window.innerWidth);
    targetPointerY = event.clientY / Math.max(1, window.innerHeight);
  },
  { passive: true }
);

const revealItems = [...document.querySelectorAll(".reveal")];
if ("IntersectionObserver" in window && !reducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const canvas = document.getElementById("strata-canvas");

const vertexSource = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentSource = `
  precision highp float;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform float u_scroll;
  uniform vec2 u_pointer;
  varying vec2 v_uv;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float f = 0.0;
    float a = 0.55;
    for (int i = 0; i < 5; i++) {
      f += a * noise(p);
      p = p * 2.04 + 17.7;
      a *= 0.5;
    }
    return f;
  }

  float line(float value, float width) {
    return 1.0 - smoothstep(0.0, width, abs(value));
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    vec2 mouse = (u_pointer - 0.5);
    float t = u_time * 0.18;

    float y = uv.y + 0.18;
    float z = 1.0 / max(0.18, y + 1.05);
    float road = z * 2.35 + u_scroll * 2.2 + t;
    float bend = sin(road * 0.65) * 0.18 + sin(road * 0.21) * 0.25 + mouse.x * 0.22;
    float x = uv.x + bend * (1.0 - smoothstep(-0.9, 0.75, uv.y));

    float width = 0.18 + z * 0.24;
    float floorMask = 1.0 - smoothstep(width, width + 0.08 + z * 0.04, abs(x));
    float leftWall = smoothstep(width - 0.02, width + 0.58, -x);
    float rightWall = smoothstep(width - 0.02, width + 0.58, x);
    float wallMask = max(leftWall, rightWall) * smoothstep(-0.82, 0.85, uv.y + 0.26);

    float ridgeLeft = line(x + width + 0.035 * sin(road * 1.7), 0.015 + z * 0.015);
    float ridgeRight = line(x - width + 0.035 * cos(road * 1.4), 0.015 + z * 0.015);
    float ridge = (ridgeLeft + ridgeRight) * smoothstep(-0.9, 0.55, uv.y);

    float wallCoord = abs(x) - width;
    float strata = line(fract((road * 2.7 + wallCoord * 5.2 + fbm(vec2(wallCoord * 4.0, road)) * 0.8)) - 0.5, 0.035);
    float verticalCuts = line(fract((abs(x) * 4.0 + road * 0.2)) - 0.5, 0.035) * wallMask;
    float grain = fbm(vec2(x * 7.0, road * 2.0));

    vec3 rock = vec3(0.045, 0.030, 0.026);
    vec3 purple = vec3(0.095, 0.050, 0.105);
    vec3 rust = vec3(0.76, 0.33, 0.12);
    vec3 amber = vec3(0.94, 0.50, 0.20);
    vec3 ice = vec3(0.12, 0.72, 1.00);
    vec3 bone = vec3(0.94, 0.92, 0.88);

    vec3 col = mix(rock, purple, smoothstep(-0.4, 0.8, uv.y) * 0.45);
    col = mix(col, vec3(0.12, 0.065, 0.045), wallMask * (0.45 + grain * 0.35));
    col += rust * strata * wallMask * 0.22;
    col += amber * ridge * 0.58;

    float river = floorMask * line(x + sin(road * 1.8) * 0.025, 0.028 + z * 0.02) * smoothstep(0.74, -0.5, uv.y);
    col += ice * river * (0.55 + 0.35 * sin(u_time * 1.7 + road * 6.0));
    col += ice * floorMask * 0.035;

    float tunnel = smoothstep(0.92, -0.55, uv.y) * (1.0 - floorMask * 0.25);
    col *= 0.52 + tunnel * 0.52;
    col += vec3(0.055, 0.14, 0.18) * smoothstep(0.15, 0.95, uv.y + mouse.y * 0.22) * 0.6;
    col += rust * verticalCuts * 0.07;

    float dust = fbm(vec2(uv.x * 1.6 + t, uv.y * 1.2 - t)) * 0.08;
    col += dust * vec3(0.52, 0.22, 0.10);

    float vignette = smoothstep(1.52, 0.08, length(uv * vec2(0.76, 1.0)));
    col *= vignette;
    col = pow(col, vec3(0.82));
    gl_FragColor = vec4(col, 1.0);
  }
`;

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl, vertex, fragment) {
  const program = gl.createProgram();
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

function drawFallback2D(canvasEl) {
  const ctx = canvasEl.getContext("2d");
  if (!ctx) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = canvasEl.clientWidth;
  const h = canvasEl.clientHeight;
  canvasEl.width = Math.floor(w * dpr);
  canvasEl.height = Math.floor(h * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const gradient = ctx.createLinearGradient(0, 0, w, h);
  gradient.addColorStop(0, "#1a0f1e");
  gradient.addColorStop(0.45, "#120b0a");
  gradient.addColorStop(1, "#070504");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.moveTo(0, h);
    const base = h * (0.28 + i * 0.1);
    for (let x = 0; x <= w; x += 18) {
      const y = base + Math.sin(x * 0.006 + i) * (34 + i * 7);
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fillStyle = i === 2 ? "rgba(196, 92, 38, 0.2)" : `rgba(${22 + i * 8}, ${12 + i * 3}, ${18 + i * 2}, 0.68)`;
    ctx.fill();
  }
}

function initWebGLScene() {
  if (!canvas) return;
  const gl = canvas.getContext("webgl", {
    antialias: false,
    alpha: false,
    depth: false,
    stencil: false,
    powerPreference: "high-performance"
  });
  if (!gl) {
    drawFallback2D(canvas);
    return;
  }

  const vertex = createShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fragment = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertex || !fragment) {
    drawFallback2D(canvas);
    return;
  }
  const program = createProgram(gl, vertex, fragment);
  if (!program) {
    drawFallback2D(canvas);
    return;
  }

  const position = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, position);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

  const positionLocation = gl.getAttribLocation(program, "a_position");
  const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
  const timeLocation = gl.getUniformLocation(program, "u_time");
  const scrollLocation = gl.getUniformLocation(program, "u_scroll");
  const pointerLocation = gl.getUniformLocation(program, "u_pointer");

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 760 ? 1.35 : 1.75);
    const width = Math.floor(canvas.clientWidth * dpr);
    const height = Math.floor(canvas.clientHeight * dpr);
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    }
  }

  let frame = 0;
  function render(time = 0) {
    resize();
    pointerX += (targetPointerX - pointerX) * 0.06;
    pointerY += (targetPointerY - pointerY) * 0.06;
    root.style.setProperty("--pointer-x", pointerX.toFixed(4));
    root.style.setProperty("--pointer-y", pointerY.toFixed(4));

    const scroll = Math.min(1, Math.max(0, window.scrollY / Math.max(1, window.innerHeight * 2.2)));
    gl.useProgram(program);
    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, position);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    gl.uniform1f(timeLocation, reducedMotion ? 0 : time * 0.001);
    gl.uniform1f(scrollLocation, scroll);
    gl.uniform2f(pointerLocation, pointerX, pointerY);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    if (!reducedMotion) frame = requestAnimationFrame(render);
  }

  resize();
  render(0);
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", () => {
    if (reducedMotion) return;
    if (document.hidden) cancelAnimationFrame(frame);
    else frame = requestAnimationFrame(render);
  });
}

initWebGLScene();

const form = document.querySelector("[data-contact-form]");
const note = document.querySelector("[data-form-note]");
const aiPrompt = document.querySelector("[data-ai-prompt]");
form?.addEventListener("submit", () => {
  if (note) {
    note.textContent = "Opening your email client with the project details.";
  }
});

aiPrompt?.addEventListener("click", () => {
  const challenge = form?.querySelector("select[name='challenge']");
  const message = form?.querySelector("textarea[name='message']");
  if (challenge) {
    challenge.value = "Start with a Discovery";
  }
  if (message) {
    message.value = "We want help framing the first proof. The decision that deserves more speed, clarity, or value is:";
    message.focus();
  }
  if (note) note.textContent = "Start with the business goal. The workshop turns it into a scoped proof.";
});

const layerData = {
  data: {
    kicker: "01 / Discovery",
    title: "Find the decision worth proving",
    copy: "A structured 1-3 day workshop with functional heads to map systems, priorities, and the first proof worth building.",
    points: ["System map", "Priorities", "Proof scope"]
  },
  models: {
    kicker: "02 / Paid Proof",
    title: "Prove it on real data",
    copy: "A focused 4-8 week proof on one use case. Real intelligence, real constraints, real business value, ready for the next step.",
    points: ["Real data", "One use case", "Business value"]
  },
  systems: {
    kicker: "03 / Partnership",
    title: "Build the operating layer",
    copy: "A milestone-led build with defined deliverables, timelines and team allocation matched to the business case.",
    points: ["Milestones", "Delivery teams", "Clear timelines"]
  },
  strategy: {
    kicker: "04 / Evolution",
    title: "Keep improving the edge",
    copy: "We stay embedded as intelligence compounds. When you are ready, we transfer the system cleanly to your internal team.",
    points: ["Embedded partner", "Compounding intelligence", "Clean transfer"]
  }
};

const layerPanel = document.querySelector("[data-layer-panel]");
const layerClose = document.querySelector("[data-layer-close]");
const panelKicker = document.querySelector("[data-panel-kicker]");
const panelTitle = document.querySelector("[data-panel-title]");
const panelCopy = document.querySelector("[data-panel-copy]");
const panelPoints = document.querySelector("[data-panel-points]");

function setLayerPanel(open) {
  if (!layerPanel) return;
  layerPanel.classList.toggle("is-open", open);
  layerPanel.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("menu-open", open);
}

document.querySelectorAll("[data-layer-trigger]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const layer = layerData[trigger.getAttribute("data-layer-trigger")];
    if (!layer) return;
    if (panelKicker) panelKicker.textContent = layer.kicker;
    if (panelTitle) panelTitle.textContent = layer.title;
    if (panelCopy) panelCopy.textContent = layer.copy;
    if (panelPoints) {
      panelPoints.innerHTML = "";
      layer.points.forEach((point) => {
        const item = document.createElement("span");
        item.textContent = point;
        panelPoints.appendChild(item);
      });
    }
    setLayerPanel(true);
  });
});

layerClose?.addEventListener("click", () => setLayerPanel(false));
layerPanel?.addEventListener("click", (event) => {
  if (event.target === layerPanel) setLayerPanel(false);
});
document.querySelector("[data-layer-close-link]")?.addEventListener("click", () => setLayerPanel(false));
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
    setLayerPanel(false);
    hidePreloader();
  }
});
