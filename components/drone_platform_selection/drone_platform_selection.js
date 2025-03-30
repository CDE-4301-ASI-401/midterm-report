new gridjs.Grid({
  columns: ["Platform", "DJI Tello", "Bitcraze Crazyflie 2.1+", "DEXI Drone(Level III)"],
  data: [
    ["Size and Weight", "4", "5", "2"],
    ["Software Modularity", "2", "4", "5"],
    ["Software Modularity", "2", "4", "5"],
    ["Sensor Capability", "1", "5", "5"],
    ["Cost", "5", "3", "2"],
    ["Availability", "5", "5", "2"],
    ["Total", "19", "26", "20"],
  ],
}).render(document.getElementById("drone_platform_selection"));

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

customElements.define("drone_platform_selection", TableComponent);
