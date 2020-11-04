import { DropdownElement } from "./dropdown";
import "./toggle-input";

const htmltem = `<span> Select <span style="float:right">˅ &nbsp;</span></span>`;

class HelixSelectElement extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		const template = document.createElement("template");
		template.innerHTML = htmltem;
		this.appendChild(template.content.cloneNode(true));
		this.classList.add("ctrl");
		console.log(this);
		this.tabIndex = 0;
		this.onclick = () => {
			this.focus();
		};
	}
}

window.customElements.define("helix-select", HelixSelectElement);
window.customElements.define("helix-dropdown", DropdownElement);
