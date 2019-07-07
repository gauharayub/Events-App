var i=0;
var r=0;
var n;
var content = "";

//array to store urls of few images....
var imageURL=["./images/clouds-cloudy-conifers-247478.jpg","./images/event-1597531_640.jpg","./images/lead-singer-455750_640.jpg","./images/wedding-1937022_640.jpg",
"./images/motorcycle-sport-4287543_640.jpg","./images/new-year-3830890_640.jpg","./images/concert-768722_640.jpg","./images/soccer-768685_640.jpg","./images/microphone-2316268_640.jpg"];

//adds new card or saves existing card
function addevent(){
    if(i==0){
        alert('Please Select Image');
        return;
    }
    var name = $('#name').val();
    var eventType = $('#type').val();
    var description = $('#des').val();
    var rulebookURL = $('#rurl').val();
    var category = $('#cat').val();
    if(r==0){
//executes on adding new event
    $('#tempo')   
    .append('<div class="col-lg-4 col-md-6 division"><div class="card">'
    +'<div class="imgr"><img src="'+imageURL[i-1]+'" alt="loading" height="100%" width="100%"></div>'
    +'<div class="card-body"><h4 class="text-center">Coming Soon...</h4>'
    +'<h5 class="card-title text-center">'+eventType+'</h5>'
    +'<hr class="hr"><p class="card-text">'+description+'</p><hr class="hr">'
    +'<div><h5 class="card-heading">Categories :</h5><p class=" cat text-center">'+category+'</p></div>'
    +'<div class="event-details"><h5 class="card-heading">Days :</h5><div class="content">'+content+'</div></div>'
    +'<br><div class="url">RulebookURL: <a class="rulebook" href="#">'+rulebookURL+'</a></div><br>'
    +'<div class="r1 row justify-content-around">'+'<button data-toggle="modal" data-target="#exampleModal"  id="edit" class="btn btn-warning col-sm-4">EDIT</button>'
    +'<button id="delete" class="btn btn-danger col-sm-4">DELETE</button></div></div></div></div>');
    }
    else if(r==1){
//executes if save event button is clicked in the process of editing...        
        $('.modal-title').text('Add New Event');
        var typ = $('#type').val();
        n.find('.card-title').text(typ);
        n.find('img').attr('src',imageURL[i-1]);
        var descri = $('#des').val(); 
        n.find('.card-text').text(descri);
        var categ = $('#cat').val();
        n.find('.cat').text(categ);
        var rule = $('#rurl').val();
        n.find('.rulebook').text(rule);
        var daysContent = n.find('.content').html();
        daysContent = daysContent + content;
        n.find('.content').html(daysContent);
        r=0;
    }
$('.modal').modal('hide');
}

//iterate imageurl array to fetch image in a division
function imageBrowser(){
  $('#selector').attr('src',imageURL[i]);
   i++;
   if(i>9){ 
       i=i-10;
   }
}

//triggers when card is edited
$(document).on('click','#edit',function(){
    r=1;
    content="";
    $('.modal-title').text('Edit Event');
//n is parent of edit button which triggered the event    
    n = $(this).parent().parent().parent();
    var typeofevent = n.find('.card-title').text();
    $('#type').val(typeofevent);
    var descrip = n.find('.card-text').text();
    $('#des').val(descrip);
    var cate = n.find('.cat').text();
    $('#cat').val(cate);
    var ruleb = n.find('.rulebook').text();
    $('#rurl').val(ruleb);
});

//Add-event event handler
$(document).on('click','.evento',function(){
    $('input').val('');
    $('textarea').val('');
    $('.modal-title').text('Add New Event');
    content="";
    r=0;
});

//login-button event handler
$(document).on('click','#login',function(){
    var username = $('#user').val();
    var password = $('#pass').val();
    if(username=="" || password==""){
        if(username==""){
            $('#username').css('display','block');
        }
        else if(username!=""){
            $('#username').css('display','none');
        }
        if(password==""){
            $('#pas').css('display','block');
        }
        else if(password!=""){
            $('#pas').css('display','none');
        }
        var elem = $('.box');
        var elem1 = $('.box1'); 
        var alert = $('#username');
//poppers will be displayed on hovering over alert icon        
        var popper = new Popper(alert,elem,{
            placement:'top'
        });
        var passwordfield = $('#pas');
        var popper2 = new Popper(passwordfield,elem1,{
            placement:'top'
        });
    } 
    else{
        $('#login').attr('href','./event.html');
    }

});
//diplays popper over alert icon on username input field
$('#username').hover(function(){
    if($('.box').css('display')=="none"){
        $('.box').css('display','block');
    }
    else{
        $('.box').css('display','none');
    }
    
});

//displays popper over alert icon on password input field..
$('#pas').hover(function(){
    if($('.box1').css('display')=="none"){
        $('.box1').css('display','block');
    }
    else{
        $('.box1').css('display','none');
    }
});

//adds multiple events details(day,session,time,venue) , editing/deleting option not added.
$(document).on('click','.multiple',function(){
    var day = $('#day').val();
    var session = $('#sess').val();
    var time = $('#time').val();
    var venue = $('#venue').val();
    var dayString = '<div class="row"><div class="col-sm-3 day">'+day+
    '</div><div class="col-sm-3 sess">'+session+
    '</div><div class="col-sm-3 time">'+time+
    '</div><div class="col-sm-3 venue">'+venue+'</div></div>'
    content = content + dayString;
    alert('added details');

});

//deletes the div of which Delete button is a part.
$(document).on('click','#delete',function(){
    $(this).parent().parent().parent().parent().remove();
});
