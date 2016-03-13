angular
  .module('adventurewear.footer', [])
    .directive('footer', footer);

  function footer () {
    return {
      restrict: 'EA',
      templateUrl: '../common/footer.tpl.html'
    };
  };
