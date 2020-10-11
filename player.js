import glsWrapper from './glsWrapper'


const urlGoogle = 'https://www.google.com/';
const urlJSONP ='https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&amp;refresh=true&amp;env=dev&amp;type=startPanel&amp;vars%5Btype%5D=startPanel&amp;sid=none&amp;_=1582203987867';

function runPlayer () {
    console.log("found player.js");
    window.guideRes = null;
    jQueryImport();
    console.log("succrsfully imported");
}

function handleJSONP(){
    //maybe new class?
}

function runGet(){
    $.ajax({url: urlJSONP, success: handleJSONP, dataType: 'jsonp'});
    //Jquery syntax to load the given url and upon success callback the handling function
}

function jQueryImport(){
    let script = document.createElement('script');
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
    script.onload(runGet)                    //this line is executing the callback to run the JSONP loading when the current page is loaded
    document.body.append(script);
}
// debugging
//if (window.location.href === 'https://www.google.com/'){
    runPlayer();
//}
