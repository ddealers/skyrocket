//llamar a los modulos
var gulp = require('gulp');
var args = require('yargs').argv;
var uglify = require('gulp-uglifyjs');
var coffee = require('gulp-coffee');
var connect = require('gulp-connect');

gulp.task('main', function(){
	var activity = args.activity;
	gulp.src([activity+'/js/main.coffee'])
	.pipe(coffee({bare: true}))
	.pipe(uglify())
	.pipe(gulp.dest(activity+'/js/'))
	.pipe(connect.reload());
});

gulp.task('deal', function(){
	var activity = args.activity;
	gulp.src(['base/scripts/dealersjs.coffee'])
	.pipe(coffee({bare: true}))
	.pipe(uglify('dealersjs.min.js'))
	.pipe(gulp.dest(activity+'/js/lib/'))
	.pipe(connect.reload());
});

gulp.task('webserver', function(){
	connect.server({
		livereload: true
	});
});

gulp.task('watch', function(){
	var activity = args.activity;
	gulp.watch('base/scripts/dealersjs.coffee', ['deal']);
	gulp.watch(activity+'/js/main.coffee', ['main']);
})

gulp.task('dev', ['main', 'deal']);
gulp.task('server', ['main', 'deal', 'webserver', 'watch']);

gulp.task('production', function(){
	var activity = args.activity;
	gulp.src([
		activity+'/assets/**/*.*',
		activity+'/css/**/*.*',
		activity+'/fonts/**/*.*',
		activity+'/js/**/*.js',
		activity+'/js/**/*.min.js',
		activity+'/index.html',
		], {base: './'})
	.pipe(gulp.dest('build'));
	console.log('Activity '+activity+' Complete!');
});