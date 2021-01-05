// 1.导入gulp这个第三方模块 
const gulp = require('gulp')

const cssmin = require('gulp-cssmin')  //压缩css文件
const autoprefixer = require('gulp-autoprefixer')  //给css属性添加前缀
// const sassChina = require('gulp-sass-china')  //sass编译成css
const sass = require('gulp-sass')  //sass编译成css
const less = require('gulp-less')  //编译less

const uglify = require('gulp-uglify')  //压缩js文件
const babel = require('gulp-babel')  //es6转es5

const htmlmin =  require('gulp-htmlmin')  //压缩HTML文件

const webserver = require('gulp-webserver')  //开启服务的模块

const del = require('del')  //删除文件夹的模块

// const fontmin = require('gulp-fontmin')  //压缩font
// const rename = require('gulp-rename')  //文件重命名

// 2 书写一个移动的images文件夹的方法
function imgHandler(){
    return gulp.src('./src/images/**')  //images文件夹下的所有文件
    .pipe(gulp.dest('./dist/images'))
}


// 3 书写一个移动的lib文件夹的方法
function libHandler(){
    return gulp.src('./src/lib/**')
    .pipe(gulp.dest('./dist/lib'))
}

// 4 书写一个压缩并移动css文件夹的方法
function cssHandler(){
    return gulp.src('./src/css/*.css') 
    .pipe(autoprefixer())  //加前缀
    .pipe(cssmin())  //压缩
    // .pipe(rename({suffix:'.min'}))  //重命名
    .pipe(gulp.dest('./dist/css'))  //移动
}

//5 sass编译成css
function sassHandler(){
    return gulp.src('./src/sass/**')
    .pipe(sass())  //编译sass
    .pipe(autoprefixer())  //加前缀
    .pipe(cssmin())  //压缩
    .pipe(gulp.dest('./dist/css'))  //移动
}

//6 less编译成css
function lessHandler(){
    return gulp.src('./src/less/**')
    .pipe(less())  //编译less
    .pipe(autoprefixer())  //加前缀
    .pipe(cssmin())  //压缩
    .pipe(gulp.dest('./dist/css'))
}

//7 移动font
function fontHandler(){
    return gulp.src('./src/font/**')
    // .pipe(fontmin()) 压缩 包的版本有问题
    .pipe(gulp.dest('./dist/font'))
}

// 5 书写一个移动并压缩js文件夹的方法
function jsHandler(){
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets:['@babel/env']
    })) //把es6转es5
    .pipe(uglify())  //压缩
    // .pipe(rename({suffix:'.min'})) //重命名
    .pipe(gulp.dest('./dist/js'))  //移动
}

// 8 书写一个压缩并移动HTML文件的方法
function htmlHandler(){
    return gulp.src('./src/pages/*.html')
    .pipe(htmlmin({
        collapseWhitespace:true,  //压缩所有空格变成一行
        removeAttributeQuotes:true,  //去除html属性值的引号
        minifyCSS:true,  //把HTML文件里面的style标签里面进行压缩
        minifyJS:true, //把html文件里面的script标签里面进行压缩
        collapseBooleanAttributes:true, //把布尔值的属性简写
        removeComments:true  //移除注释
    }))
    .pipe(gulp.dest('./dist/pages'))  //移动
}

// 移动data文件
function dataHandler(){
    return gulp.src('./src/data/**')
    .pipe(gulp.dest('./dist/data'))
}

// 9 书写一个开启静态服务的任务
// function serverHandler(){
//     return gulp.src('./dist')  //找到要开启服务的根目录
//     .pipe(webserver({  //需要一些配置项
//         port:8080, //端口号
//         open:'./pages/index.html',  //输入ip后自动打开的页面
//         livereload:true, //自动刷新浏览器
//     }))
// }

// 10 书写一个任务，删除dist文件夹
function delHandler(){
    return del(['./dist'])
}

// 11 自动监控文件
function watchHandler(){
    gulp.watch('./src/css/*.css',cssHandler); //监听css
    gulp.watch('./src/sass/**',sassHandler);  //监听sass
    gulp.watch('./src/less/**',lessHandler)  //监听less
    gulp.watch('./src/font/**',fontHandler)  //监听font
    gulp.watch('./src/pages/*.html',htmlHandler); //监听html
    gulp.watch('./src/js/*.js',jsHandler);  //监听js
    gulp.watch('./src/images/**',imgHandler); //监听img
    gulp.watch('./src/data/**',dataHandler)  //监听data
    gulp.watch('./src/lib/**',libHandler);  //监听lib
}


//12 整合导出
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(htmlHandler,jsHandler,cssHandler,sassHandler,imgHandler,fontHandler,libHandler,lessHandler,dataHandler),
    // serverHandler,
    watchHandler
)