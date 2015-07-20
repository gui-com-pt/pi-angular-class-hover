(function(){
  angular
    .module('piClassHover', []);
})();

(function(){
  angular
    .module('piClassHover')
    .directive('piClassHover', [function(){

      return {
        link: function(scope, elem, attrs) {

          scope.$watch(attrs.piClassHover, function(newValue){
            if(_.isUndefined(newValue)) return;

            elem.bind('mouseover', function(e){
                elem.addClass(attrs.piClassHover);
            });

            elem.bind('mouseleave', function(e){
              elem.removeClass(attrs.piClassHover);
            })
          })
        }
      }
    }])
})();
