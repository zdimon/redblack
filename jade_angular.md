#Jade and Angular implementation.

##Installation

	npm install angular --save

Add library to template

	script(src='node_modules/angular/angular.min.js')

Define application in the body tag.

	body( ng-app='app' )
	
Create app.js and start a new application.

	var app = angular.module('app', []);

Add script to the end of the page.

	script(src='public/js/app.min.js')

##Minifycation

Install requirements.

    npm install gulp-concat gulp-uglify gulp-watch concurrently --save-dev
    sudo npm install -g gulp

Create gulpfile.js.

    var concat = require('gulp-concat');
    var gulp = require('gulp');
    var uglify = require('gulp-uglify');
    var watch = require('gulp-watch');

    gulp.task('default', function() {
      gulp.src(['./src/app.js'])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'))
    });


    gulp.task('watch', function () {
        gulp.watch('src/*.js', ['default']);
    });

Modify npm run watch command in package.json.

    ...
    "scripts": {
    "start": "python -m SimpleHTTPServer 8080",
    "watch": "concurrently --kill-others 'jade -w -o . src' 'gulp watch' "
    },...    

Add controller to template

    div( ng-controller="appCtrl" style="padding-top: 60px" class="container")
        h1 {{ message }}

Create controller.

    app.controller('appCtrl',['$scope', function($scope){

        $scope.message = 'Hello';

    }])	

Template

    div.col-md-4
        div(class="well")
            div(class='form-group')
                input(class="form-control" id="input_name")
            div(class='form-group')
                button(class="btn btn-success") You name
        div(class="well")
            h2 0 {{ account }} 
            button(class="btn btn-success") Add 100 coins


    div.col-md-4
        div.well
            h2 0{{ bet }}
            div.btn-group              
                button(class="btn btn-primary") Take back
                button(class="btn btn-danger") Red
                button(class="btn btn-default") Black  

        div(class="well")   
            div.btn-group              
                button(class="btn btn-success") 1
                button(class="btn btn-success") 2
                button(class="btn btn-success") 5
                button(class="btn btn-success") 10                  
    
    div.col-md-4
        div.well

    div.col-md-12
        div.well
            h3 History

> 
    Angular desigion

    button(class="btn btn-success" data-bet="{{ n }}" ng-repeat="n in [1,2,5,10,20,50]") {{ n }}

##Minify css

Requirements

    npm install uglifycss --save


####gulpfile.js

    var uglifycss = require('uglifycss');
    var fs = require('fs');

    gulp.task('mincss', function() {

        var uglified = uglifycss.processFiles(
            [ 'src/style.css' ],
            { maxLineLen: 500, expandVars: true }
        );
        fs.writeFileSync('./public/css/style.min.css',uglified);

    });

    gulp.task('watch', function () {
        gulp.watch('src/*.js', ['minjs']);
        gulp.watch('src/*.css', ['mincss']);
    });

###style.css

    .wrapper .row {
        font-size: 0px;
        text-align: center;
    }

    .wrapper .block {
        background-color: deeppink;
        color: #fff;
        text-align: center;
        display: inline-block;
        height: 15px;
        margin: 1%;
        margin-bottom: 2px;
        width: 10%;
    }

###Template

                    div.wrapper
                        div(class="row row1")
                            div.block
                        div(class="row row2")
                            div.block
                            div.block
                        div(class="row row3")
                            div.block
                            div.block
                            div.block
                        div(class="row row4")
                            div.block
                            div.block
                            div.block
                            div.block
                        div(class="row row5")
                            div.block
                            div.block
                            div.block
                            div.block
                            div.block
                        div(class="row row6")
                            div.block
                            div.block
                            div.block
                            div.block
                            div.block
                            div.block
                        div(class="row row7")
                            div.block
                            div.block
                            div.block
                            div.block
                            div.block
                            div.block
                            div.block
                        div(class="row row8")
                            div.block
                            div.block
                            div.block
                            div.block
                            div.block
                            div.block
                            div.block
                            div.block
Angular loop




