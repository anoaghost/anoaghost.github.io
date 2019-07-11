//<![CDATA[
// == Start Cookie
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}
// == End Cookie

// == Your personal function
var expiredStyle = 7000,
    dbs = document.body.style;

// background switcher
function bgSwitch(v) {
    dbs.background = v;
    createCookie('bgstyle', v, expiredStyle);
}

// font switcher
function fontSwitch(v) {
    dbs.fontFamily = v;
    createCookie('fontstyle', v, expiredStyle);
}

// font sizer
function changeFontSize(v) {
    dbs.fontSize = v + 'px';
    createCookie('fontsize', v, expiredStyle);
}

// color switcher
function fontColor(v) {
    dbs.color = v;
    createCookie('fontcolor', v, expiredStyle);
}

// == If cookies are created... do something!
if (readCookie('bgstyle')) {
    dbs.background = readCookie('bgstyle');
}
if (readCookie('fontstyle')) {
    dbs.fontFamily = readCookie('fontstyle');
}
if (readCookie('fontsize')) {
    dbs.fontSize = readCookie('fontsize') + 'px';
    document.getElementById('fontSizer').value = readCookie('fontsize');
}
if (readCookie('fontcolor')) {
    dbs.color = readCookie('fontcolor');
    document.getElementById('fontColorer').value = readCookie('fontcolor');
}

// == Reset button
function resetStyle() {
    eraseCookie('bgstyle');
    eraseCookie('fontstyle');
    eraseCookie('fontsize');
    eraseCookie('fontcolor');
    window.location.reload(1);
}
//]]>
