/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'expo',
    'react-native',
    'expo-router',
    'react-native-web',
    'react-native-reanimated',
    'react-native-gesture-handler',
    'react-native-safe-area-context',
    '@expo/vector-icons',
    'expo-linking',
    'expo-constants',
    'expo-status-bar',
    'expo-modules-core',
    'expo-font',
    'expo-asset',
    'expo-splash-screen',
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];
    return config;
  },
};

module.exports = nextConfig;