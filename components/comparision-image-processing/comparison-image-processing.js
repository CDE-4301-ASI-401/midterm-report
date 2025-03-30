new gridjs.Grid({
  columns: ["", "	On-board Image Processing", "	Off-board Image Processing"],
  data: [
    ["Power Consumption", "Higher", "Lower"],
    ["Computational Load", "Computationally intensive on GAP8", "Computationally intensive on GCS"],
    ["Feedback", "Immediate", "Delayed"],
    ["Risk of Failure", "No single point of failure", "Single point of failure due to Wi-Fi bandwidth issues between drone and GCS"],
    ["Image Quality", "Less noisy", "Noisier"],
  ],
}).render(document.getElementById("comparison-image-processing"));

class TableComponent extends HTMLElement {
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

customElements.define("comparison-image", TableComponent);
