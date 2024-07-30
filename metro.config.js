const { getDefaultConfig } = require('@expo/metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname); 
defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;        
