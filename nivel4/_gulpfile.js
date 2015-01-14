//llamar a los modulos
var gulp = require('gulp');
var args = require('yargs').argv;
var uglify = require('gulp-uglifyjs');
var coffee = require('gulp-coffee');
var replace = require('gulp-replace');

var activity = args.activity;

function app(){
	gulp.src(['base/scripts/app.js'])
	.pipe(uglify('app.min.js'))
	.pipe(gulp.dest('base/scripts/'));
	console.log('App ready');
}
function clas(){
	gulp.src(['base/class/*.coffee',])
	.pipe(coffee({bare: true}))
	.pipe(uglify('classes.min.js'))
	.pipe(gulp.dest('base/scripts/'));
	console.log('Classes ready');
}
function deal(){
	gulp.src(['base/scripts/dealersjs.coffee'])
	.pipe(coffee({bare: true}))
	.pipe(uglify('dealersjs.min.js'))
	.pipe(gulp.dest('base/scripts/'))
	console.log('Dealersjs ready');
}
function main(activity){
	gulp.src([activity+'/js/main.coffee'])
	.pipe(coffee({bare: true}))
	.pipe(uglify('main.min.js'))
	.pipe(gulp.dest(activity+'/js/'));
	console.log('Activity ready');
}

gulp.task('dev', function(){
	app();
	clas();
	deal();
	main(activity);
});
gulp.task('production', function(){
	clas();
	deal();
	app();
	main(activity);
	gulp.src([
		'base/lib/*.*',
		'base/scripts/*.min.js'
		], {base: './'})
	.pipe(gulp.dest('build/'+activity));
	gulp.src([
		activity+'/assets/**/*.*',
		activity+'/imgs/**/*.*',
		activity+'/js/main.min.js',
		activity+'/sounds/**/*.*',
		activity+'/imgs/**/*.*',
		activity+'/fonts/**/*.*',
		activity+'/css/**/*.*'
		], {base: './'})
	.pipe(gulp.dest('build'));
	gulp.src([activity+'/index.html'], {base: './'})
	.pipe(replace('../','./'))
	.pipe(gulp.dest('build'));
	console.log('Activity '+activity+' Complete!');
});