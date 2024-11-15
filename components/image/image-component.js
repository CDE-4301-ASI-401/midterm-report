class ImageComponent extends HTMLElement {
  static get observedAttributes() {
    return ["tag", "source", "subtitle"];
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
    <div class="container">
      <img id="${this.tag}" src="${this.source}" alt="${this.subtitle}">
      <sub>${this.subtitle}</sub>
    </div>
    <style>
      :host {
        display: block;
        text-align: center;
      }

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      img {
        width: 50%;
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }
    </style>
  `;

    this.shadowRoot.innerHTML = ""; // Clear previous content
    this.shadowRoot.appendChild(div);
  }
}

customElements.define("image-component", ImageComponent);
