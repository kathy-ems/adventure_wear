(function (adventurewear) {
  angular
    .module('adventurewear')
    .directive('footer', footer);
  function footer () {
    return {
      restrict: 'EA',
      templateUrl: 'templates/footer.tpl.html'
    }; }
})();
