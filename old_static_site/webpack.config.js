const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader', 
          'css-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!tippy).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }, 
  // Output gets saved to the static directory of the new gatsby site.
  output: {
    path: path.resolve(__dirname, '../covid-local-gatsby/static/dist')
  }
};
