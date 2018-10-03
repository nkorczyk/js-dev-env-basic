const path = require('path');

let config = {
  entry: {
    main: path.resolve(__dirname, 'src/index')
  },
}

module.exports = function(env, argv) {
  if (argv.mode === 'development') {
    config = Object.assign({}, config, {
    });
  }

  if (argv.mode === 'production') {
    config = Object.assign({}, config, {
    });
  }

  return config;
}