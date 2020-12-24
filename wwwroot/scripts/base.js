'use strict';
var components = [];

var params = location.search
    .substr(1)
    .split('&')
    .map(i => { return { key: i.split('=')[0], value: i.split('=')[1] } });

function getTemplate(id) {
    return document.getElementById(id).innerHTML;
}

function getParameterValue(key) {
    var find = params.find(i => i.key === key);
    if (find !== undefined)
        return find.value;
    return undefined;
}

function isDarkMode() {
    var browserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return browserDarkMode && getParameterValue('mode') !== 'light' ||
           !browserDarkMode && getParameterValue('mode') === 'dark';
}
