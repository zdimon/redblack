///Initialization///////////

var username = 'none';
var account = 0;
var bet = 0;
var game_history = [];
var lot_history = [];

///////////////////////////

///Utilits//////////////

l = function(s){
    console.log(s);
};

random_color = function(){
   rand = Math.random();
    if(rand>0.5) {
        return 'red';
    } else {
        return 'black';
    };
   
};

refresh = function(){

    $('#account').html(account);
    $("#welcome").html('Wellcome '+username); 
    $('#account').html(account);
    $('#bet').html(bet);

    if(bet>0){
        $('.make_bet').hide();   
        $('#take_back').show();
        $('.guess').show();
    } else {
        $('#take_back').hide();
        $('.make_bet').show();   
        $('.guess').hide();
    }
    l(lot_history);


    for(var i=1; i<7; i++)
    {
        $( ".row"+i ).children().removeClass( "active" );
       
    }

    for(var i=1; i<lot_history.length+1; i++)
    {
        $( ".row"+i ).children().addClass( "active" );
       
    }
 
    $('#game_history').empty();
    $.each(game_history,function(i,v){
        $('#game_history').append('<div style="display:inline-block; margin: 5px; width: 20px; height: 20px; background: '+v+'"></div');
    })

};

/// Save name

$("#save_name").click(function(){

    username = $("#name").val();
    $("#save_name").hide();
    $("#name").hide();
    refresh();
   
});


//Adding coins

$('#add_coins').click(function(){

    account = account + 100;
    refresh();

});

///Making a bet

$('.make_bet').click(function(e){

    bet = $(e.target).attr('data-coins');
    account = account - bet;
    refresh();

});


///Taking back
$('#take_back').click(function(e){
    account = parseInt(account) + parseInt(bet);
    bet = 0;
    lot_history = [];
    refresh();
});


///Guessing
$('.guess').click(function(e){

    var color = $(e.target).attr('data-color');
    var rand = random_color();
    if(color===rand){
        bet = bet*2;
        lot_history.push(1);
    } else {
        bet = 0;
        lot_history = [];
    }    
    game_history.push(rand)
    refresh();
});




