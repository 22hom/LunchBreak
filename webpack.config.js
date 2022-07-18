// const path = require('path');
import path from 'path';

module.exports = {
   mode: 'development',
   target: 'node',
   type: 'module',
   externals: {
      express: 'express',
   },
   entry: path.resolve(__dirname, 'src/index.js'),
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
      ],
   },
};