(function () {
  angular
    .module('express-node-simple')
    .directive('footer', footer);
  function footer () {
    return {
      restrict: 'EA',
      templateUrl: 'templates/footer.tpl.html'
    }; }
})();
