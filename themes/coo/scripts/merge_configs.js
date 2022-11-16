/**
 * Merge all `theme_config.*` options from main Hexo config into hexo.theme.config.
 * This fixes an issue with hexo-renderer-stylus, which otherwise ignores these
 * configuration overrides.
 */
hexo.on('generateBefore', function () {
    hexo.theme.config = Object.assign({}, hexo.theme.config, hexo.config.theme_config);
});
