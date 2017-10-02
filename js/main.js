document.addEventListener("DOMContentLoaded", function() {

  var button = document.querySelector('button');
  var lighting = document.querySelector('body');
  var switchStatus = document.querySelector('.switch.on')
  var text = document.querySelector('.status');

  function clickButton() {
    if (lighting.className === 'light') {
      lighting.className = 'dark';
      switchStatus.className = 'switch off';
      text.innerHTML = 'Who turned off the lights?';
    } else {
      lighting.className = 'light';
      switchStatus.className = 'switch on';
      text.innerHTML = "It's so bright in here!";
    };
  };

  button.addEventListener('click', clickButton);

});
