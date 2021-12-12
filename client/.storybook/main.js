const yaml = require('@rollup/plugin-yaml')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  viteFinal: (config, _options) => {
    config.plugins = [...config.plugins, yaml()]
    return config
  },
}
