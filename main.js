function startMyRunning () {
    const myNewScript = document.createElement('script');
    myNewScript.type = 'module';
    myNewScript.src = 'https://peaceful-joliot-b94953.netlify.app/player.js';
    document.body.appendChild(myNewScript);
  }
  startMyRunning();
  var guideRes = window.guideRes;
