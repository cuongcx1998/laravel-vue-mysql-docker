module.exports = function(mix) {
  // mix.copy('resources/src/assets/icomoon/fonts', 'public/fonts/icomoon');
	mix.js('resources/src/app.js', 'public/js');
	mix.sass('resources/src/assets/bootstrap.scss', 'public/css');
	mix.sass('resources/src/assets/app.scss', 'public/css');
}
