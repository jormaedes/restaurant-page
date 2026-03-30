import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
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
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: "asset/resource",
				generator: {
					filename: 'assets/images/[name][ext]'
				}
			},
			{
				test: /\.(mp4|webm|ogg)$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/videos/[name][ext]'
				}
			}
		],
	},
};
