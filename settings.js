function home(){
  window.open('settings.html');
}

function osinfo(){
  window.open('osInfo.html');
}

function checkForUpdates(){
  document.getElementById('h1').innerHTML = 'Checking...';
  setTimeout(function(){
    document.getElementById('h1').innerHTML = ' ';
    alert('OS already has latest version');
  }, 2000);
}

function bios(){
  window.open('https://biosgws.operatingsyste.repl.co'); 
}

function Sboot(){
  window.open('Sboot.html')
}

function reboot(){
  window.open('https://gws4.operatingsyste.repl.co');
}

function framesTasking(){
  window.open('SframeTasking.html')
}

function fps120(){
  var a = confirm('120+ FPS needs more hadrware usage and that may harm your device . Do you really want to set 120+ fps. You can set 90 fps if you have a medium or high device if you have a normal device so 60 fps is better option');
  if(a){
    
  }
  else {
    document.getElementById('inpR').click();
  }
}