const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'), //absolute path from the root of our computer like c/users/myproj....upto this project
    filename: 'bundle.js'
  },
  devServer: {
    contentBase : path.resolve(__dirname,'dist'),  //absolute path tells web server where the base dir is 
    publicPath: '/assets/'   //tells where the actual assets to be served and doesnt actually serve physical file but seerves virtual files that it stores in memory  //! it only creates virtual bundle.js and runs but do not re-write code like webpack so it is only good for dev. environment not for deploying
                              //*this speeds up the webpack dev server as we dont have to manually write a new file to our dist folder everytime we make change 
  },
  module:{
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use:{
        loader:'babel-loader',
        options:{
          presets:['@babel/preset-env']
        }
      }
    }]
  }
};