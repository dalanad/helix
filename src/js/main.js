import "bootstrap/dist/js/bootstrap.bundle";
import "./toggle-input";
import "./button";

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

// Let the document know when the mouse is being used
document.addEventListener("mousedown", function () {
	document.body.classList.add("using-mouse");
});

// Re-enable focus styling when Tab is pressed
document.addEventListener("keydown", function (event) {
	if (event.keyCode === 9) {
		document.body.classList.remove("using-mouse");
	}
});

function InitSidebar() {
	const sidebar = document.querySelector(".sidebar");
	if (!sidebar) return;
	if (!localStorage.getItem("sidebar-mode")) {
		localStorage.setItem("sidebar-mode", "open");
	} else {
		sidebar.classList.add(localStorage.getItem("sidebar-mode"));
	}

	let toggle = document.querySelector(".sidebar-toggle");
	if (toggle) {
		toggle.addEventListener("click", function () {
			localStorage.setItem("sidebar-mode", localStorage.getItem("sidebar-mode") === "open" ? "collapsed" : "open");
			sidebar.classList.toggle("collapsed");
		});
	}
}

window.addEventListener("DOMContentLoaded", (event) => {
	InitSidebar();
	console.log("DOM fully loaded and parsed");
});
