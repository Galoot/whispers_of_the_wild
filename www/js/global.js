var isMobile  = {
    Android: function() {
        var isAndroid;
        if(
            (typeof(getURLParameter) == 'function') &&
            (getURLParameter('DEVICE') == 'ANDROID')
          ){
          isAndroid = true;
        }else{
          isAndroid = navigator.userAgent.match(/Android/i) ? true : false;
        }
        return isAndroid;
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
};

/* --------------------------------------- */
function report(level, msg) {
    console.log("Logger:" + level + ", Message:" + msg);
}

/* --------------------------------------- */
function getFullPath(orignalPath) {
    return fixLocalFilePathsForAndroid(orignalPath);
}

/* --------------------------------------- */
function fixLocalFilePathsForAndroid(originalPath){
  if(!isMobile.Android()) return originalPath;
  var fixedPath = originalPath;
  try{
      if(
          (isMobile.Android()) &&
          (originalPath.toLowerCase().indexOf('android_asset',0) == -1) &&
          (originalPath.toLowerCase().indexOf('http:',0) == -1)
        ){
        fixedPath = "file:///android_asset/www/" + originalPath;
      }
  }catch(e){
      report('ERROR','!! ERROR: fixLocalFilePathsForAndroid() (originalPath:[' + originalPath + '| fixedPath:[' + fixedPath + '])');
  }
  report('TEST','\t--> fixLocalFilePathsForAndroid() (originalPath:[' + originalPath + '| fixedPath:[' + fixedPath + '])');
  return fixedPath;
}

/* --------------------------------------- */
function hasWifiConnection(){
  var connectionType = getConnectionType();
  var hasWifi = (connectionType.toUpperCase().indexOf("WIFI",0) > -1);
  report('TEST','hasWifiConnection() =' + hasWifi);
  return hasWifi;
}

/* --------------------------------------- */
function isConnectedToInternet(){
  var connectionType = getConnectionType();
  report('TEST','isConnectedToInternet:' + connectionType);
  return (
      (connectionType.toUpperCase().indexOf("NO NETWORK",0) == -1) &&
      (connectionType.toUpperCase().indexOf("UNKNOWN",0) == -1)
      );
}

/* --------------------------------------- */
function getConnectionType() {
    try{

        if((!cordovaIsLoaded) || (!navigator.connection)){
          return "wifi";
        }

        var networkState = navigator.connection.type;//navigator.network.connection.type;
        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELLULAR] = 'Cellular generic connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        return states[networkState]; // alert('navigator.connection.type:' + navigator.connection.type + ' {states[networkState]=' + states[networkState] + '}');

    }catch(e){
        console.log('ERROR getConnectionType() [' + e.message + '] [lineNumber:' + e.lineNumber + ']');
    }

    return "wifi";

    // alert('Connection type: ' + states[networkState]);
}

/* --------------------------------------- */
function doAlert(message, title){

  var alertButtonLabel = 'OK';
  try{
    if(isValidString(jQuery.i18n.map._term_ok)){
      alertButtonLabel = jQuery.i18n.map._term_ok.toString();
    }
  }catch(e){
    // ignore if error thrown
  }

  try{
    report('TEST','doAlert() --> [' + message + ' | ' + title);

    var alertText = message;
    var alertTitle = title;
    if(navigator.notification){ //isMobile.any()){
      navigator.notification.alert(
      alertText,  // message
      alertDismissed,         // callback
      alertTitle,            // title
      alertButtonLabel                  // buttonName
      );
    }else{

      // for non-device testing
      alertText = alertTitle + ':\n\n' + alertText + '\n\nButton: [' + alertButtonLabel + ']';


      alert(alertTitle + "\n\n" + alertText);
    }

  }catch(e){ catchError('doAlert()',e); }

  // return false;
}

/* ---------------------------------------- */
function alertDismissed(e){
    // nothing - just stub function
    // return false;
}


/* --------------------------------------- */
function doConfirm(confirmText, confirmTitle, confirmCallback, confirmButtonLabels){

  var confirmButtonLabelYes = 'Yes';
  var confirmButtonLabelNo = 'No';
  try{
    if(isValidString(jQuery.i18n.map._term_yes)) confirmButtonLabelYes = jQuery.i18n.map._term_yes.toString();
    if(isValidString(jQuery.i18n.map._term_no)) confirmButtonLabelNo = jQuery.i18n.map._term_no.toString();
  }catch(e){
    // ignore if error thrown
  }

  try{

    if(typeof(confirmButtonLabels) == 'undefined') confirmButtonLabels = String(confirmButtonLabelYes + ',' + confirmButtonLabelNo).split(",");
    report('doConfirm() [confirmText:' + confirmText + ', confirmCallback:' + confirmCallback + ']');

    if(navigator.notification){ //usingMobileDevice() && isNativeAppMode()){

      //fadePageContentOutBeforePopup();
       navigator.notification.confirm(
        confirmText,
        confirmCallback,
        confirmTitle,
        confirmButtonLabels
      );
      //fadePageContentInAfterPopup();

    }else{

      // for non-device testing
      confirmText = confirmTitle + ':\n\n' + confirmText + '\n\nButtons: [' + confirmButtonLabels + ']';

      var confirmDecisionIndex = 2; // represents "false"
      if(confirm(confirmText)) confirmDecisionIndex = 1;
      confirmCallback(confirmDecisionIndex);
    }

  }catch(e){ catchError('doConfirm()',e); }

}


/* --------------------------------------- */
function doPrompt(promptText, promptTitle, promptDefaultText, promptCallback, promptButtonLabels){

  var promptButtonLabelYes = 'Yes';
  var promptButtonLabelNo = 'No';
  try{
    if(isValidString(jQuery.i18n.map._term_yes)) promptButtonLabelYes = jQuery.i18n.map._term_yes.toString();
    if(isValidString(jQuery.i18n.map._term_no)) promptButtonLabelNo = jQuery.i18n.map._term_no.toString();
  }catch(e){
    // ignore if error thrown
  }


  try{

    if(typeof(promptButtonLabels) == 'undefined') promptButtonLabels = String(promptButtonLabelYes + ',' + promptButtonLabelNo).split(",");
    report('doPrompt() [promptText:' + promptText + ', promptCallback:' + promptCallback + ']');

    if(navigator.notification){ //usingMobileDevice() && isNativeAppMode()){

      //fadePageContentOutBeforePopup();
       navigator.notification.prompt(
        promptText,
        promptCallback,
        promptTitle,
        promptButtonLabels,
        promptDefaultText
      );
      //fadePageContentInAfterPopup();

    }else{

      // for non-device testing
      promptText = promptTitle + ':\n\n' + promptText + '\n\nButtons: [' + promptButtonLabels + ']';

      var promptInputText = prompt(promptText,promptDefaultText);
      var promptData = new Object();
      promptData.input1 = promptInputText;
      if(isValidString(promptInputText)){
        promptData.buttonIndex = 1;
      }else{
        promptData.buttonIndex = 2;
    }

      promptCallback(promptData);
    }

  }catch(e){ catchError('doPrompt()',e); }

}

function zeroLeftPad(str, max) {
    str = str.toString();
    return str.length < max ? zeroLeftPad("0" + str, max) : str;
}

function openPage(url) {
    if (isMobile.iOS()) {
        window.open(url, '_system');
    } else {
        window.open(url);
    }
}