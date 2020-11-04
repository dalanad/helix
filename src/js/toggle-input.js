const htmlToggle = `<style>

.thumb {
    width: 1rem;
    border-radius: 3px;
    height: 1rem;
    background: #ffffff;
}

.spacer,helix-toggle {
    transition: all ease-in 100ms
}

helix-toggle {
    display: flex;
    width: 2.5rem;
    padding: 3px;
    border-radius: 3px;
    margin: 6px 6px 6px 0;
}

helix-toggle.disabled {
    pointer-events: none;
    cursor: not-allowed;
    display: inline-block;
}

</style>
    <div class="spacer"></div>
    <div class="thumb"></div>

 `;

class ToggleInputElement extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const template = document.createElement("template");
		template.innerHTML = htmlToggle;

		const input = document.createElement("input");
		this.appendChild(input);
		input.type = "hidden";

		input.name = this.getAttribute("name");
		input.value = this.getAttribute("value") || "0";

		this.isChecked = input.value == "1";

		this.appendChild(template.content.cloneNode(true));

		this.tabIndex = 0;
		this.update();
		input.value = this.isChecked ? 1 : 0;

		this.onclick = () => {
			this.focus();
			this.isChecked = !this.isChecked;
			input.value = this.isChecked ? 1 : 0;
			this.update();
		};
	}

	update() {
		this.querySelector(".spacer").style.flex = this.isChecked === true ? "1 1 0" : "0 ";
		this.style.background = this.isChecked ? "var(--primary)" : "var(--muted)";
	}
}

window.customElements.define("helix-toggle", ToggleInputElement);
