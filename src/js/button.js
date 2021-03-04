import { html, LitElement } from "lit-element";

const loadingIndicator = ` 
<div>
<svg style="height: 1.4em;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle cx="50" cy="50" fill="none" stroke="currentColor" stroke-width="10" r="30" stroke-dasharray="164 56">
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.5s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
</circle>
</div>`;

class HlxButtonElement extends LitElement {
	createRenderRoot() {
		return this;
	}

	content = "";
	_firstUpdateDone = false;

	static get properties() {
		return {
			loading: { type: Boolean },
			loadOnClick: { type: Boolean },
		};
	}

	async firstUpdated() {
		await new Promise((r) => setTimeout(r, 0));
		const btn = this.querySelector("#btx");
		btn.addEventListener("click", (e) => {
			if (this.loadOnClick) {
				setTimeout(() => this._handleClick(), 50);
			}
			return true;
		});
		this._firstUpdateDone = true;

		for (var i = 1; i < this.childNodes.length; i++) {
			if (!btn.isSameNode(this.childNodes[i])) {
				btn.appendChild(this.childNodes[i]);
			}
		}
		this.updateLoadingIndicator();
	}

	connectedCallback() {
		super.connectedCallback();
	}

	_handleClick() {
		this.loading = !this.loading;
	}

	updated(changedProperties) {
		if (this._firstUpdateDone) this.updateLoadingIndicator();
	}

	updateLoadingIndicator() {
		let btn = this.querySelector("#btx");

		if (this.content.trim() === "") {
			this.width = btn.offsetWidth;
			this.content = btn.innerHTML;
		}
		if (this.loading === true) {
			btn.innerHTML = loadingIndicator;
			btn.style.width = this.width + "px";
			btn.setAttribute("disabled", true);
		} else {
			btn.innerHTML = this.content;
			btn.removeAttribute("disabled");
		}
	}
	render() {
		return html`<button id="btx" class="btn"></button> `;
	}
}

customElements.define("hl-button", HlxButtonElement);
