#Workflow.


###.gitignore

    node_modules

### Initialize npm project.

    npm init

### Install jquery

    npm install jquery --save


### Install bootstrap

    npm install bootstrap --save
    
### Install minification tools

    npm install gulp  --save-dev
    npm install gulp-concat --save-dev
    npm install gulp-uglify --save-dev
   
    
###Example of gulpfile.js
    
    var concat = require('gulp-concat');
    var gulp = require('gulp');
    var uglify = require('gulp-uglify');


    gulp.task('default', function() {
      gulp.src(['./one.js', './two.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'))
    });
        

##Basic page.

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Red or Black</title>
        <script src="node_modules/jquery/dist/jquery.min.js"></script>
        <!-- Bootstrap -->
        <link href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
      </head>
      <body>

        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">Red or Black</a>
            </div>        
          </div>
        </nav>

        <div class="container" style="padding-top: 60px">

          <div class="starter-template">
            <h1 id='welcome'>Enter your name</h1> <input type="text" id="name" /> <button id="save_name" class="btn btn-success" /> Save </button>
          </div>

        </div><!-- /.container -->

        <script src="game.js"></script>
    </body>
    </html>  


###Runing server 

    python -m SimpleHTTPServer 8080


###Wellcome


    ///Initialization///////////

    var username = 'none';
    var account = 0;

    ///////////////////////////

    ///Utilits//////////////

    l = function(s){
        console.log(s);
    };

    /// Save name

    $("#save_name").click(function(){

        username = $("#name").val();
        $("#save_name").hide();
        $("#name").hide();
        $("#welcome").html('Wellcome '+username); 
       

    });





###Adding coins

*template*

      <div class="md-col-4">
            <h2> My account <span id="account"></span> </h2>
            <button id="add_coins" class="btn btn-success" /> Add 100 coins </button>
      </div>

      <div class="md-col-8"></div>    

    
*js*


    //Adding coins

    $('#add_coins').click(function(){

        account = account + 100;
        $('#account').html(account);

    });


###Making a bet


*template*

    <h3> Make a bet! </h3>
    <button data-coins="1" class="btn btn-warning make_bet" /> 1 </button>
    <button data-coins="2"  class="btn btn-warning make_bet" /> 2 </button>
    <button data-coins="5"  class="btn btn-warning make_bet" /> 5 </button>
    <button data-coins="10"  class="btn btn-warning make_bet" /> 10 </button>    


*js*

    ///Making a bet

    $('.make_bet').click(function(e){

        bet = $(e.target).attr('data-coins');
        $('#bet').html(bet);
        account = account - bet;
        $('#account').html(account);

    });


###Refactoring


    refresh = function(){

        $('#account').html(account);
        $("#welcome").html('Wellcome '+username); 
        $('#account').html(account);
        $('#bet').html(bet);

        if(bet>0){
            $('.make_bet').hide();   
        }

    };


##Taking the bet back

*tpl*

          <div class="col-md-5"> 
              <h3 id="bet" style="font-size: 140px"> </h3>
              <button id="take_back" class="btn btn-primary" style="display: none" /> Take back </button>
          </div>


*js*


            ///Taking back
        $('#take_back').click(function(e){
            account = parseInt(account) + parseInt(bet);
            bet = 0;
            refresh();
        });

    ....

    refresh = function(){

        ...

        if(bet>0){
            $('.make_bet').hide();   
            $('#take_back').show();
        } else {
            $('#take_back').hide();
            $('.make_bet').show();   
        }

    };



##Random colors

    random_color = function(){
       rand = Math.random();
        if(rand>0.5) {
            return 'red';
        } else {
            return 'black';
        };
       
    };


###Buttons

      <button data-color="red" class="btn btn-danger guess" style="display: none" /> Red </button>
      <button data-color="black" class="btn btn-secondary guess" style="display: none" /> Black </button>




###Guessing

    $('.guess').click(function(e){

        var color = $(e.target).attr('data-color');
        if(color===random_color()){
            bet = bet*2;
        } else {
            bet = 0;
        }    
        refresh();
    });


###History

    <div class="col-md-12 well" id="game_history"></div>


    var game_history = [];

     ....

    refresh = function(){

           ......

        $('#game_history').empty();
        $.each(game_history,function(i,v){
            $('#game_history').append('<div style="display:inline-block; margin: 5px; width: 20px; height: 20px; background: '+v+'"></div');
        })




        ///Guessing
        $('.guess').click(function(e){

            ...
            game_history.push(rand)
            refresh();
        });


###Pyramid




                <div class="wrapperp">
                    <div class="rowp row6">
                        <div class="block"></div>
                    </div>
                    <div class="rowp row5">
                        <div class="block"></div>
                        <div class="block"></div>
                    </div>
                    <div class="rowp row4">
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                    </div>
                    <div class="rowp row3">
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                    </div>
                    <div class="rowp row2">
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                    </div>
                    <div class="rowp row1">
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                    </div>
                </div>



            <style>


            .wrapperp {
                box-sizing: border-box;
                padding: 5px;
                width: 100%;
            }

            .wrapperp .rowp {
                font-size: 0px;
                text-align: center;
            }

            .wrapperp .rowp * {
                font-size: 14px;
            }

            .wrapperp .block {
                background-color: silver;
                color: #fff;
                text-align: center;
                
                display: inline-block;
                height: 10px;
                margin: 1%;
                margin-bottom: 5px;
                width: 13%;
            }

            .wrapperp .active{
               background-color: green !important;
            }

            </style>


*js*


    
        var lot_history = [];

        .....

        for(var i=1; i<7; i++)
        {
            $( ".row"+i ).children().removeClass( "active" );
           
        }

        for(var i=1; i<lot_history.length+1; i++)
        {
            $( ".row"+i ).children().addClass( "active" );
           
        }

        .....

        if(color===rand){
            bet = bet*2;
            lot_history.push(1);
        } else {
            bet = 0;
            lot_history = [];
        }  






