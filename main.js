console.log('loggin');
var redClicked = 1;
var yellowClicked = 1;
var greenClicked = 1;
var blueClicked = 1;

$(document).ready(function(){
  console.log('On DOM');
  $('#redButton').on('click', redClick);
  $('#yellowButton').on('click', yellowClick);
  $('#greenButton').on('click', greenClick);
  $('#blueButton').on('click', blueClick);
  $('#redCount').text(redClicked);
  $('#yellowCount').text(yellowClicked);
  $('#greenCount').text(greenClicked);
  $('#blueCount').text(blueClicked);
});

function redClick(){
$('#blocks').append('<div class="red block"></div>');
redClicked++;
$('#redCount').text(redClicked);
}

function yellowClick(){
$('#blocks').append('<div class="yellow block"></div>');
yellowClicked++;
$('#yellowCount').text(yellowClicked);
}

function greenClick(){
$('#blocks').append('<div class="green block"></div>');
greenClicked++;
$('#greenCount').text(greenClicked);
}

function blueClick(){
$('#blocks').append('<div class="blue block"></div>');
blueClicked++;
$('#blueCount').text(blueClicked);
}
