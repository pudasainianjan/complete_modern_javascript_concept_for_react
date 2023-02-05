const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
      },
      {                                                                               //*install this --> npm install css-loader style-loader --save-dev
        test:/\.css$/,  //dollar specifies "this must be at the end of filenamne"
        use:['style-loader','css-loader']     //order is imp here...it runs from right to left...so first it runs css-loader to collect the css form the css when we import them
                                                //and then we use style loader to add that css to the html documents...now when we import a css file to our javascript file its gonna 
                                                //*run that css through these loaders to add that css to the dom or to the html page
      }
    ]
  }
};