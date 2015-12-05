var webpack = require('webpack');
var webpackHtml = require('fishfront/webpack/webpack-html')
module.exports = webpackHtml({
    context:__dirname,
    entry:'src',
    output:'build',
    template:'index.html',
    option:{
        module:{
            loaders: [
                { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
                { test: /\.js$/ , exclude:/node_modules/,loader:"babel?cacheDirectory"},
                { test: /\.css$/, loader: "style!css" },
                { test: /Controller\.js$/, loader: "bundle?lazy!babel?cacheDirectory" }
            ]
        },
        resolve: {
            extensions: ['','.js']
        },
        plugins:[
            new webpack.OldWatchingPlugin()
        ]
    }
})
