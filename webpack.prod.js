const path = require('path');

module.exports = {
  mode: 'production',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist/js')
  }
};
