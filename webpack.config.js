const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssWebpackPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "build"),
        filename: "index.bundle.js"
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        contentBase: path.join(__dirname, "src"),
        port: 3000,
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            {
                test: /.(css|scss)$/,
                use: [MiniCssWebpackPlugin.loader, "css-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        }),
        new MiniCssWebpackPlugin()
    ]
};