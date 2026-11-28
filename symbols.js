"use strict";

// =====================================
// QRENNT — MOBILE SYMBOL REPLACEMENT
// =====================================

const qrenntSymbols = {
  "↗": `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 18L18 6M8 6h10v10"
        fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round"/>
    </svg>
  `,

  "↓": `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v15M5 12l7 7 7-7"
        fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round"/>
    </svg>
  `,

  "★": `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5l2.9 6 6.6 1-4.8 4.7
        1.1 6.7-5.8-3.2-5.8 3.2 1.1-6.7
        -4.8-4.7 6.6-1z"
        fill="currentColor"/>
    </svg>
  `,

  "✳": `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2
        M19.1 4.9L4.9 19.1"
        fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round"/>
    </svg>
  `
};

function replaceQrenntSymbols() {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;

        if (!parent) return NodeFilter.FILTER_REJECT;

        if (
          parent.closest(
            "script, style, textarea, input, code, pre, .qrennt-symbol"
          )
        ) {
          return NodeFilter.FILTER_REJECT;
        }

        return /[↗↓★✳]/.test(node.textContent)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      }
    }
  );

  const nodes = [];

  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach(node => {
    const text = node.textContent;
    const fragment = document.createDocumentFragment();

    const parts = text.split(/([↗↓★✳])/g);

    parts.forEach(part => {
      if (!qrenntSymbols[part]) {
        fragment.appendChild(document.createTextNode(part));
        return;
      }

      const wrapper = document.createElement("span");
      wrapper.className = "qrennt-symbol";

      const original = document.createElement("span");
      original.className = "qrennt-symbol-original";
      original.textContent = part;

      const icon = document.createElement("span");
      icon.className = "qrennt-symbol-icon";
      icon.innerHTML = qrenntSymbols[part];

      wrapper.appendChild(original);
      wrapper.appendChild(icon);

      fragment.appendChild(wrapper);
    });

    node.parentNode.replaceChild(fragment, node);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", replaceQrenntSymbols);
} else {
  replaceQrenntSymbols();
}
