const { withNxMetro } = require('@nx/expo');
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// remove withNxMetro and it works
module.exports = withNxMetro(defaultConfig)