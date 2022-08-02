// const path = require('path');
// import path from 'path';
const path = require('path');

module.exports = {
   mode: 'development',
   target: 'node',
   type: 'module',
   externals: {
      express: 'express',
   },
   // entry: path.resolve(__dirname, 'src/index.js'),
   entry: './src/index.js',      //relative path
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),    //absolute path
   },
   module: {
      rules: [
         // {
         //    test: /\.css$/i,
         //    use: ['style-loader', 'css-loader'],
         // },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
      ],
   },
};