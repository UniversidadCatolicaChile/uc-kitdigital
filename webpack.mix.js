let mix = require('laravel-mix');

mix.js(['src/js/uc-kitdigital.js'], 'dist/js/precompile.js')
mix.babel('dist/js/precompile.js', 'dist/js/uc-kitdigital.js')
mix.sass('src/sass/uc-kitdigital.scss', 'dist/css')
mix.setPublicPath('dist');
