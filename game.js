///Initialization///////////

var username = 'none';
var account = 0;
var bet = 0;

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
    refresh();
});


///Guessing
$('.guess').click(function(e){

    var color = $(e.target).attr('data-color');
    if(color===random_color()){
        bet = bet*2;
    } else {
        bet = 0;
    }    
    refresh();
});




