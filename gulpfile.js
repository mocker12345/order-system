var gulp = require('gulp'),                 //基础库
  imagemin = require('gulp-imagemin'),       //图片压缩
  sass = require('gulp-ruby-sass'),          //sass
  minifycss = require('gulp-minify-css'),    //css压缩
  jshint = require('gulp-jshint'),           //js检查
  uglify = require('gulp-uglify'),          //js压缩
  rename = require('gulp-rename'),           //重命名
  concat = require('gulp-concat'),          //合并文件
  clean = require('gulp-clean'),             //清空文件夹
  tinylr = require('tiny-lr'),               //livereload
  server = tinylr(),
  port = 35729,
  livereload = require('gulp-livereload'),   //livereload
  connect = require('gulp-connect'),
  proxy = require('connect-modrewrite');
// HTML处理
gulp.task('html', function () {
  var htmlSrc = './src/**/**/*.html',
    htmlDst = './dist/';

  gulp.src(htmlSrc)
    .pipe(livereload(server))
    .pipe(gulp.dest(htmlDst))
    .pipe(connect.reload());
  gulp.src('./*html')
    .pipe(livereload(server))
    .pipe(gulp.dest(htmlDst))
    .pipe(connect.reload());
});

gulp.task('connect', function () {
  connect.server({
    //root: 'dist',
    livereload: true,
    middleware: function () {
      return [
        proxy([
          '^.*/ordersystem/(.*)$ http://localhost:8080/api/v1/$1 [P]'
        ])
      ]
    }
  });
});

// 样式处理
gulp.task('css', function () {
  var cssSrc = './src/**/*.scss',
    cssDst = './dist/css';

  return sass(cssSrc, {style: 'expanded'})
    .pipe(concat('all.css'))
    .pipe(gulp.dest(cssDst))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(cssDst))
    .pipe(connect.reload());
});

// 图片处理
gulp.task('images', function () {
  var imgSrc = './src/images/**/*',
    imgDst = './dist/images';
  gulp.src(imgSrc)
    .pipe(imagemin())
    .pipe(livereload(server))
    .pipe(gulp.dest(imgDst))
    .pipe(connect.reload());
});

// js处理
gulp.task('js', function () {
  var jsSrc = './src/**/**/*.js',
    jsMain = './src/user/index/index.js',
    jsDst = './dist/js';
  gulp.src([jsMain, jsSrc])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(jsDst))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(livereload(server))
    .pipe(gulp.dest(jsDst))
    .pipe(connect.reload());
});

// 清空图片、样式、js
gulp.task('clean', function () {
  gulp.src(['./dist/'], {read: false})
    .pipe(clean());
});

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', ['connect', 'watch'], function () {
  gulp.start('html', 'css', 'images', 'js');
});

// 监听任务 运行语句 gulp watch
gulp.task('watch', function () {

  server.listen(port, function (err) {
    if (err) {
      return console.log(err);
    }

    // 监听html
    gulp.watch('./src/**/**/*.html', function () {
      gulp.run('html');
    });

    // 监听css
    gulp.watch('./src/**/*.scss', function () {
      gulp.run('css');
    });

    // 监听images
    gulp.watch('./src/images/**/*', function () {
      gulp.run('images');
    });

    // 监听js
    gulp.watch('./src/**/**/*.js', function () {
      gulp.run('js');
    });

  });
});