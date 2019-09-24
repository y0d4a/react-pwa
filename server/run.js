process.env.NODE_ENV = 'development';
require('@babel/register')({
    ignore: [/\/(public|node_modules)\//],
    presets: [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": "10"
                }
            }
        ],
        "@babel/preset-react"
    ]
});
// A @babel/register style hook to ignore style imports when running in Node. 
// This is for projects that use something like Webpack to enable CSS imports in JavaScript.
require('ignore-styles');
require('./server.js');