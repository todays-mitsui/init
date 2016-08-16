module.exports = {
  context: __dirname,

  entry: {
    javascript: './assets/main.js',
    html: './assets/index.html',
    css: './assets/style.scss',
  },

  output: {
    path: __dirname + '/dist',
    filename: 'js/app.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        }
      },

      {
        test: /\.html$/,
        loader: 'file?name=./[name].[ext]',
      },

      {
        test: /\.css$/,
        loader: 'file?name=css/[name].css',
      },

      {
        test: /\.(scss|sass)$/,
        loaders: ['file?name=css/[name].css', 'sass'],
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },

  devServer: {
    contentBase: 'dist/',
    port: 8080
  },
}
