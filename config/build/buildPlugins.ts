import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import webpack from "webpack";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
    ]
}
