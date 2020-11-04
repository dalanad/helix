const htmlToggle = `
<style>

 
</style>
    <div class="spacer"></div>
    <div class="thumb"></div>

 `;

export class DropdownElement extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const template = document.createElement("template");
		template.innerHTML = htmlToggle;

		const panel = document.createElement("div");
		const content = this.querySelector('[slot="trigger"]');
		console.log(this.children);

		panel.appendChild(content);
		this.appendChild(panel);

		this.appendChild(template.content.cloneNode(true));

		this.tabIndex = 0;

		this.onclick = () => {};
	}
}
