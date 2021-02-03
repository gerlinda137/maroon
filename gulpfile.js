"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var imagemin = require("gulp-imagemin");
var server = require("browser-sync").create();
var del = require("del");
var webpack = require("webpack");
var webpackStream = require("webpack-stream");
var webpackConfig = require("./webpack.config.js");

gulp.task("compress", function () {
  return gulp
    .src("source/img/**")
    .pipe(imagemin())
    .pipe(gulp.dest("build/img"));
});

gulp.task("css", function () {
  return gulp
    .src("source/scss/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("js", function () {
  return gulp
    .src("./source/js/index.js")
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest("./build/js"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function () {
  return gulp
    .src(
      [
        "source/fonts/**/*.{woff,woff2}",
        "source/img/**",
        // "source/js/**",
        "source/*.html",
        "source/*.ico",
      ],
      {
        base: "source",
      }
    )
    .pipe(gulp.dest("build"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("server", function () {
  server.init({
    server: {
      baseDir: "build",
      routes: {
        "/node_modules": "node_modules",
      },
    },
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch("source/**", gulp.series("build_development", "refresh"));
});

gulp.task(
  "build_release",
  gulp.series("clean", "copy", "css", "js", "compress")
);

gulp.task("build_development", gulp.series("clean", "copy", "css", "js"));
gulp.task("start", gulp.series("build_development", "server"));
