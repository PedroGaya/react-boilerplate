const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.tsx",
	devtool: "inline-source-map",
	output: { path: path.join(__dirname, "/dist"), filename: "bundle.js" },
	devtool: "inline-source-map",
	devServer: { port: 9000, static: "./dist" },
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: "ts-loader",
			},
		],
	},
	resolve: { extensions: [".tsx", ".ts", ".jsx", ".js"] },
	plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};
