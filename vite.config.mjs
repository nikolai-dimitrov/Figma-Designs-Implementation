import { defineConfig } from "vite";
export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				startup:
					"./Figma-Designs/Responsive-Startup-Website/index.html",
				finance: "./Figma-Designs/Finance-Flow-Website/index.html",
				whitepace: "./Figma-Designs/Finance-Flow-Website/index.html",
			},
		},
	},
	server: {
		open: "/",
		watch: {
			usePolling: true,
		},
	},
});
