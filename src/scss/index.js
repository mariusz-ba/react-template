const path = require('path');

const resources = [
  'variables.scss',
  'mixins.scss',
];

module.exports = resources.map(file => path.resolve(__dirname, file));