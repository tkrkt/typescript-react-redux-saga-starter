const path = require('path');
module.exports = {
  entry: {
    bundle: path.join(__dirname, 'src', 'entry.tsx')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['tslint-loader'],
        exclude: /node_modules/,
        enforce: 'pre'
        // this causes ERROR! why???
        // options: {
        //   fix: true
        // }
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      }
    ]
  }
};
