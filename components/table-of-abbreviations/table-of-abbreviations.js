new gridjs.Grid({
    columns: ["Abbreviation", "Description"],
    data: [
      ["LOS", "Line of Sight"],
      ["MSBA", "Modified Swarm Bug Algorithm"],
      ["ToF", "Time-of-Flight"],
      ["ROS", "Robot Operating System"],
      ["SLAM", "Simultaneous Localisation and Mapping"],
      ["FPS", "Frames Per Second"],
      ["WF", "Wall Following"],
    ],
  }).render(document.getElementById("table-of-abbreviation"));
  
  class TableOfAbbreviations extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const div = document.createElement("div");
      div.innerHTML = `
      <slot></slot>
      <style>
        :host {
          display: block;
          text-align: center;
        }
      </style>
    `;
  
      this.shadowRoot.appendChild(div);
    }
  }
  
  customElements.define("table-of-abbreviations", TableOfAbbreviations);
  