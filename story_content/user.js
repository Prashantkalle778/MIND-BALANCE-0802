function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6IB9wHm2cMC":
        Script1();
        break;
      case "6bscYk2gOJf":
        Script2();
        break;
      case "5q18b2fogT3":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();
var r_sec = player.GetVar("max_sec"); 

var sec = r_sec % 60;
var min = Math.floor(r_sec / 60);

var d_min = min < 10 ? "0" + min : min; 
var d_sec = sec < 10 ? "0" + sec : sec;

player.SetVar("d_min", d_min);
player.SetVar("d_sec", d_sec);
}

window.Script2 = function()
{
  var player = GetPlayer();

var timer = player.GetVar("timer");

var sec = (timer - (timer%1000))/1000;

player.SetVar("sec",sec);
}

window.Script3 = function()
{
  const url = "https://script.google.com/macros/s/AKfycby29mwVJDFEgycmYraws7eCDcJAVJOdoFFzXtRuM9AcjagNJOnkMlrDFc34Mnq8Gb7w/exec";

const player = GetPlayer();
let feedBack = player.GetVar("email"); 
let feedBack2 = player.GetVar("attempts"); 
let feedBack3 = player.GetVar("success"); 
let feedBack4 = player.GetVar("error"); 

fetch(url,{
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({texta: feedBack, textb: feedBack2, textc: feedBack3, textd: feedBack4}) 
});
}

};
