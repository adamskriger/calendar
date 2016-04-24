const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const TARGET = process.env.npm_lifecycle_event;


const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: {
    app: PATHS.app
  },
  // Add resolve.extensions
  // '' is needed to allow imports without an extension
  // note the .'s before the extension as it will fail to load without them
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // Test expects a RegExp! Notethe slashes!
        test: /\.css$/,
        loaders: ['style', 'css'],
        //Include accepts either a path or an array of paths
        include: PATHS.app
      },
      //set up JSX. This accepts js too thanks to RegExp
      {
      test: /\.(js|jsx)$/,
      //enable caching for improved performance during development
      //It uses default OS directory by default. If you need something more custom,
      //pass a path to it. ie: babel?cacheDirectory=<path>
      loaders: [
        'babel?cacheDirectory,presets[]=es2015,presets[]=survivejs-kanban'
    ],
      //parse only app files Without this it will go thru the entire project.
      //beside being slow this will likely result in an error
      include: PATHS.app
      }
    ]
  }
};

// Default configuration. We will return this if
// Webpack is called outside of npm.
if(TARGET === 'start' || !TARGET){
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,

      //enable history API fallback so HTML5 HISTORY API based
      // routing works. This is a good default that will come in handy in more
      // complicated setups.
      historyAPIFallback: true,
      hot: true,
      inline: true,
      progress: true,

      //display only errors to reduce output amount
      stats: 'errors only',

      //Parse host and port from env so this is easy to customize
      host: process.env.HOST,
      port: process.env.PORT

},

plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new NpmInstallPlugin({
    save: true //--save
  })
]
});
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}
