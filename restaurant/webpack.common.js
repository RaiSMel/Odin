const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        index: "./src/assets/js/home/index.js",
        menu: "./src/assets/js/menu/menu.js",
        contact: "./src/assets/js/contact/contact.js",
        header: "./src/assets/js/header.js",
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimize: true,
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant | Home',
            favicon: './src/assets/img/logo.png',
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            title: 'Restaurant | Menu',
            favicon: './src/assets/img/logo.png',
            filename: 'menu.html',
            template: './src/index.html',
            inject: 'body',
            chunks: ['menu'],
        }),
        new HtmlWebpackPlugin({
            title: 'Restaurant | Contact',
            favicon: './src/assets/img/logo.png',
            filename: 'contact.html',
            template: './src/index.html',
            inject: 'body',
            chunks: ['contact'],
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|avif)$/i,
                type: 'asset/resource',
            },
        ],
    },
}