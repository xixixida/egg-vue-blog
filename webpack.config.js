
 const path = require('path');

 module.exports = {
 	entry: './app/view/index.js',
 	output: {
 		filename: 'app.js',
 		path: path.resolve(__dirname, './app/public'),
 	},
 	module: {
 		rules: [
 			{
 				test: /\.vue$/,
 				use: ['vue-loader']

       },
 			{
 				test: /\.css$/,
 				use: [
           'style-loader',
           'css-loader'
         ]
       },
 			{
 				test: /\.(png|svg|jpg|gif)$/,
 				use: [
           'url-loader'
         ]
       },
 			{
 				test: /\.(woff|woff2|eot|ttf|otf)$/,
 				use: [
           'url-loader'
         ]
       },
 			{
 				test: /\.(csv|tsv)$/,
 				use: [
           'csv-loader'
         ]
       },
 			{
 				test: /\.xml$/,
 				use: [
           'xml-loader'
         ]
       }
     ]
 	},
 	externals: [
 		(function () {
 			var IGNORES = [
        'electron'
      ];
 			return function (context, request, callback) {
 				if (IGNORES.indexOf(request) >= 0) {
 					return callback(null, "require('" + request + "')");
 				}
 				return callback();
 			};
 		})()
			]
 }
