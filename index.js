module.exports = log;

function log () {
    if (! performCheck()) return false;
    return window.console.log.apply(window.console, arguments);
}

log.log = log;

log.error = function () {
    if (! performCheck()) return false;
    return window.console.error.apply(window.console, arguments);
};

log.warn = function () {
    if (! performCheck()) return false;
    return window.console.warn.apply(window.console, arguments);
};

log.debug = function () {
    if (! performCheck()) return false;
    return window.console.debug.apply(window.console, arguments);
}

log.info = function () {
    if (! performCheck()) return false;
    return window.console.info.apply(window.console, arguments);
}

////////

function performCheck () {
    if (! window.WP_DEBUG) return false;
    if (! window.console) return false;
    return true;
}

