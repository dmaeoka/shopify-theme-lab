/**
 * imports
 */
import "./css/main.scss";
import Alpine from "alpinejs";

Alpine.data("header", () => ({
	open: false,

	init() {
		console.log("Alpine data");
	},
	toggle() {
		this.open = !this.open;
	},
}));

Alpine.data("banner", () => ({
	init() {
		console.log("Banner");
	},
}));

Alpine.data("banner", () => ({
	init() {
		console.log("Banner");
	},
}));

window.Alpine = Alpine;
Alpine.start();
