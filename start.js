require("@babel/register")({
	presets: ["@babel/preset-env", "@babel/react"]
});

module.exports = require('./server.js') 
