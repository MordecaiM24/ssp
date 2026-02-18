// Style Switcher — auto-injected nav for all campaign site variants
(function () {
  const options = [
    { label: "Sign", file: "index.html" },
    { label: "Editorial", file: "site-option-b-editorial.html" },
    { label: "Brutalist", file: "site-option-c-brutalist.html" },
    { label: "Industrial", file: "site-option-l-industrial.html" },
    { label: "Minimal", file: "site-option-d-minimal.html" },
    { label: "Maximalist", file: "site-option-e-maximalist.html" },
    { label: "Playful", file: "site-option-i-playful.html" },
    { label: "Pastel", file: "site-option-k-pastel.html" },
  ];

  const currentFile = location.pathname.split("/").pop() || "index.html";

  const nav = document.createElement("nav");
  nav.id = "style-switcher";
  nav.innerHTML = `
    <button id="sw-toggle" aria-label="Switch style">
      <span id="sw-current"></span>
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <div id="sw-dropdown"></div>
  `;

  const dropdown = nav.querySelector("#sw-dropdown");
  const currentLabel = nav.querySelector("#sw-current");

  options.forEach((opt) => {
    const a = document.createElement("a");
    a.href = opt.file;
    a.textContent = opt.label;
    const isActive =
      currentFile === opt.file ||
      (currentFile === "index.html" && opt.file === "index.html") ||
      (currentFile === "site-option-a-sign.html" && opt.file === "index.html");
    if (isActive) {
      a.classList.add("active");
      currentLabel.textContent = opt.label;
    }
    dropdown.appendChild(a);
  });

  if (!currentLabel.textContent) currentLabel.textContent = "Styles";

  const style = document.createElement("style");
  style.textContent = `
    #style-switcher {
      position: fixed;
      top: 1rem;
      right: 1rem;
      z-index: 99999;
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 13px;
    }
    #sw-toggle {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      background: rgba(20, 20, 20, 0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      color: #fff;
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 8px;
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.04em;
      transition: border-color 0.2s;
      font-family: inherit;
    }
    #sw-toggle:hover { border-color: rgba(255,255,255,0.35); }
    #sw-toggle svg {
      transition: transform 0.2s;
    }
    #style-switcher.open #sw-toggle svg {
      transform: rotate(180deg);
    }
    #sw-dropdown {
      display: none;
      position: absolute;
      top: calc(100% + 6px);
      right: 0;
      background: rgba(20, 20, 20, 0.92);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 10px;
      padding: 6px;
      min-width: 160px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.4);
    }
    #style-switcher.open #sw-dropdown { display: block; }
    #sw-dropdown a {
      display: block;
      padding: 7px 12px;
      color: rgba(255,255,255,0.65);
      text-decoration: none;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 400;
      transition: all 0.15s;
    }
    #sw-dropdown a:hover {
      background: rgba(255,255,255,0.1);
      color: #fff;
    }
    #sw-dropdown a.active {
      background: rgba(255,255,255,0.15);
      color: #fff;
      font-weight: 600;
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(nav);

  const toggle = nav.querySelector("#sw-toggle");
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) nav.classList.remove("open");
  });
})();
