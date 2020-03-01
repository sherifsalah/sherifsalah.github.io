// jQuery
import * as jQuery from '../../libs/jquery/dist/jquery.min.js';
window.$ = $;
window.jQuery = jQuery;
// Bootstrap
import * as bootstrap from '../../libs/bootstrap/dist/js/bootstrap.bundle.min.js';
// Custom
import * as logger from './assets/js/logger.js';
// Ready
$(function() {
    'use strict';
    // logger
    logger.log();
});
