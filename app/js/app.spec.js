describe('app', function() {
    "use strict";

    var $rootScope, $window;

    beforeEach(module('app'));

    beforeEach(inject(function(_$window_, _$rootScope_) {
        $window = _$window_;
        $rootScope = _$rootScope_;

        spyOn($window, 'scrollTo');
    }));

    it('should scroll to the top of the page on $stateChangeSuccess', function() {
        $rootScope.$emit('$stateChangeSuccess');

        expect($window.scrollTo).toHaveBeenCalledWith(0, 0);
    });
});
