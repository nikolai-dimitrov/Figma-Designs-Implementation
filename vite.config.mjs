import { defineConfig } from "vite";
export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				startup:
					"./Figma-Designs/Responsive-Startup-Website/src/index.html",
				finance: "./Figma-Designs/Finance-Flow-Website/src/index.html",
			},
		},
	},
	server: {
		open: "/",
	},
});
