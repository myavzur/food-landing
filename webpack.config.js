'use strict';

let path = require('path');

module.exports = {
    mode: 'development', // development production 
    entry: './js/script.js', 
    output: {
        filename: 'bundle.js',
        path: __dirname + '/js/dist'
    },
    watch: true, 

    devtool: 'source-map', 

    module: { 
        rules: [
            {
                test: /\.m?js$/, 
                exclude: /(node_modules|bower_components)/, 
                use: {
                    loader: 'babel-loader', 
                    options: { 
                        presets: [['@babel/preset-env', {
                            debug: false, 
                            corejs: 3, 
                            useBuiltIns: "usage" 
                        }]]
                    }
                }
            }
        ]
    } 
};