module.exports = {
  stories: [
    '../__stories__/**/*.stories.mdx',
    '../__stories__/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss'
  ],
  babel: async (options) => ({
    ...options,
    plugins: [
      ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
      ['@babel/plugin-proposal-class-properties', { loose: false }]
    ]
  })
};
