//llamar a los modulos
var gulp = require('gulp');
var args = require('yargs').argv;
var uglify = require('gulp-uglifyjs');
var coffee = require('gulp-coffee');

var activity = args.activity;

function main(activity){
	gulp.src([activity+'/js/main.coffee',])
	.pipe(coffee({bare: true}))
	.pipe(uglify())
	.pipe(gulp.dest(activity+'/js/'));
}

function deal(activity){
	gulp.src(['base/scripts/dealersjs.coffee'])
	.pipe(coffee({bare: true}))
	.pipe(uglify('dealersjs.min.js'))
	.pipe(gulp.dest(activity+'/js/lib/'))
}

gulp.task('dev', function(){
	deal(activity);
	main(activity);
});

gulp.task('production', function(){
	//deal(activity);
	//main(activity);
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