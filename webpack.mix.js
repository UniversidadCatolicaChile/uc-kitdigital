let mix = require('laravel-mix');
require('laravel-mix-ejs')

mix
  .js(['src/js/uc-kitdigital.js'], 'dist/js/precompile.js')
  .babel('dist/js/precompile.js', 'dist/js/uc-kitdigital.js')
  .sass('src/sass/uc-kitdigital.scss', 'dist/css')
  .ejs('examples/*', 'dist')
