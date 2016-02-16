(function (adventurewear) {
  angular
    .module('adventurewear.footer')
    .directive('footer', footer);
  function footer () {
    return {
      restrict: 'EA',
      templateUrl: 'templates/footer.tpl.html'
    }; }
})();
