const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		main: "./src/index.js",
		// vendor: "./src/vendor.js"
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[hash].[ext]",
						outputPath: "imgs",
					},
				},
			},

			// {
			// 	loader: "webpack-query-loader",
			// 	options: {
			// 		resourceQuery: "srcset", // run only if the url query has "srcset"
			// 		use: "webpack-image-resize-loader",
			// 	},
			// },
			// {
			// 	loader: "webpack-query-loader",
			// 	options: {
			// 		resourceQuery: "!srcset",
			// 		use: "file-loader", // use "file-loader" when the url query does not have "srcset"
			// 	},
			// },

			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: { loader: "babel-loader" },
			},
		],
	},
};
