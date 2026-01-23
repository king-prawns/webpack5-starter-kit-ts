// Use dynamic import for ESM-only modules
module.exports = async () => {
  const postcssPresetEnv = (await import('postcss-preset-env')).default;
  const cssnano = (await import('cssnano')).default;
  const postcssEasyImport = require('postcss-easy-import');
  const postcssResponsiveType = require('postcss-responsive-type');
  const postcssReporter = require('postcss-reporter');
  const stylelint = (await import('stylelint')).default;

  return {
    plugins: [
      stylelint(),
      postcssEasyImport({
        extensions: '.pcss',
        plugins: [stylelint()]
      }),
      postcssResponsiveType(),
      postcssPresetEnv({
        browsers: '> 0.25%, not dead, not ie 11',
        stage: 0,
        autoprefixer: {
          grid: true
        }
      }),
      cssnano({
        preset: ['advanced', { zindex: false }]
      }),
      postcssReporter({
        clearReportedMessages: true
      })
    ]
  };
};

