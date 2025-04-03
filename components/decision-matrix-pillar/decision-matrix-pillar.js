new gridjs.Grid({
  columns: ["Solution", "A", "B", "C"],
  data: [
    ["Loop avoidance?", "No", "Yes", "Yes"],
    ["Maintains course?", "Yes", "Yes", "Yes"],
    ["Avoids collision?", "Yes", "Yes", "Yes"],
    ["Predictable flight path?", "No", "No", "Yes"],
  ],
}).render(document.getElementById("decision-matrix-pillar"));

class DecisionMatrixPillar extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <sub>${this.subtitle}</sub>
    <slot></slot>
    <style>
      :host {
        display: block;
        text-align: center;
        word-wrap: break-word;
        overflow: hidden;
        white-space: normal;
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("decision-matrix-pillar", DecisionMatrixPillar);
