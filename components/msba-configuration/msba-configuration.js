new gridjs.Grid({
    columns: ["Drone ID", "1", "2", "3"],
    data: [
      ["Preferred Direction", "-60 deg", "0 deg", "60 deg"],
      ["Wall-Following Direction", "Left", "Right", "Right"],
      ["Wall Distance", "0.3m [Left]", "0.6 m [Right]", "0.6m [Right]"],
      ["Altitude", "0.3 m", "0.3 m", "0.3 m"],
      ["Flight Speed", "0.5 m/s", "0.5 m/s", "0.5 m/s"],
    ],
  }).render(document.getElementById("msba-configuration"));
  
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
  
  customElements.define("msba-configuration", TableComponent);
  