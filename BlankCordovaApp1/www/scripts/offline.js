var window, global = (function () { return this; }());
/*global global: true */
(function () {
    "use strict";

    var appCache = window.applicationCache;
    appCache.update();
    if (appCache.status == window.applicationCache.UPDATEREADY) {
        window.location.reload();
    }
}());