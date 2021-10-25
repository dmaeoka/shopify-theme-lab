/**
 * imports
 */
import "./css/main.scss";
import Alpine from "alpinejs";

Alpine.data("header", () => ({
	open: false,

	init() {
		console.log("Alpine Header");
	},

	toggleMenu(e) {
		try {
			this.open = !this.open;
		} catch (error) {
			console.warn(error);
		}
	},
}));

Alpine.data("banner", () => ({
	init() {
		console.log("Banner");
	},
}));

window.Alpine = Alpine;
Alpine.start();
