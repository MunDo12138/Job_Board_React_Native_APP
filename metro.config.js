const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// Expo Router requires this to work for the web.
config.resolver.alias = {
  // For development, we want to alias the entry file to Expo Router's entry for web.
  ...(config.resolver.alias || {}),
};

config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// Ensure proper asset resolution for web
config.resolver.assetExts.push('ttf');

module.exports = config;