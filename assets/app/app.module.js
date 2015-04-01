(function() {
    'use strict';

    angular.module('payname_lol', [
        
        /*
         * Shared
         */
        'app.shared.layout',
       
        /*
         * Components
         */
        'app.components.index',
       
         /*
         * other
         */
        'ui.router',
        'ngMaterial',
        'ngMessages'
    ]);
})();
