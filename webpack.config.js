import path from "node:path";
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(import.meta.dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template.html',
		}),
	],
	devtool: 'eval-source-map',
	devServer: {
		watchFiles: ['./src/template.html'],
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.html$/i,
				use: ['html-loader'],
			}
		],
	},
};
