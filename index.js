var log = performCheck() ? window.console.log : function () {};
log.log = log;
log.error = performCheck() ? window.console.error : function () {};
log.info = performCheck() ? window.console.info : function () {};
log.debug = performCheck() ? window.console.debug : function () {};
log.warn = performCheck() ? window.console.warn : function () {};
log.has_debug = performCheck();

module.exports = log;

////////

function performCheck () {
    if (! window.WP_DEBUG) return false;
    if (! window.console) return false;
    return true;
}

