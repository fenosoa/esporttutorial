module.exports = function (api) {
  api.cache(false);  // Désactiver le cache Babel

  const presets = ['module:metro-react-native-babel-preset'];
  const plugins = [
    ['module:react-native-dotenv', {
      "moduleName": "@env",
      "path": ".env",
      "blocklist": null,
      "allowlist": null,
      "safe": false,
      "allowUndefined": true
    }]
  ];

  return {
    presets,
    plugins
  };
};