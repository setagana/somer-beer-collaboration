module.exports = {
    entry: "./src/app.ts",
    output: {
        filename: "app.js",
        path: __dirname + "/dist"
    },

    devtool: "source-map",

    resolve: {
        extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            { test: /\.ts?$/, loader: "awesome-typescript-loader" },
            { test: /\.js$/, enforce: "pre", loader: "source-map-loader" }
        ]
    },

};