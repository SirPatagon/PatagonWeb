'use strict';
var components = [];

var params = new URLSearchParams(location.search);

function getTemplate(id) {
    return document.getElementById(id).innerHTML;
}

function getParameterValue(key) {
    return params.get(key);
}

function setParameterValue(key, value) {
    params.set(key, value);
    location.search = params.toString();
}

function isDarkMode() {
    var browserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return browserDarkMode && getParameterValue('mode') !== 'light' ||
           !browserDarkMode && getParameterValue('mode') === 'dark';
}
