class Video extends HTMLElement {
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
    const modifiedSource = this.source.includes("?") 
      ? `${this.source}&mute=1&rel=0` 
      : `${this.source}?mute=1&rel=0`;

    const div = document.createElement("div");
    div.innerHTML = `
    <iframe id="${this.tag}" width="100%" src="${modifiedSource}"
      allowfullscreen></iframe>
    <sub>${this.subtitle}</sub>
    <style>
      :host {
        display: block;
        text-align: center;
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }

      iframe {
        aspect-ratio: 16 / 9;
        display: block;
        margin: auto;
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("video-component", Video);
