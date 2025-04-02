new gridjs.Grid({
  columns: ["", "Run 1", "Run 2"],
  data: [
    ["Victims Rescued (+5)", "2/3", "3/3"],
    ["Bonus Victims Rescued (+15)", "0/2", "1/2"],
    ["Danger Zones landed near (-3)", "0/3", "1/2"],
    ["Total Score", "10", "27"],
  ],
}).render(document.getElementById("actual-test-scores"));

class ActualTestScores extends HTMLElement {
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

customElements.define("actual-test-scores", ActualTestScores);
