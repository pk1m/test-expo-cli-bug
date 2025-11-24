const { withNxMetro } = require('@nx/expo');
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = withNxMetro(defaultConfig);