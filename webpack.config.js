const path = require("path");

module.exports = {
    mode: "production",
    entry: "./index.ts",
    output: {
        filename: "LS.min.js",
        path: path.resolve(__dirname, "dist/lib-umd"),
        library: {
            name: 'LS',
            type: 'var',
            export: 'default',
        },
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/,
        }]
    }
};
