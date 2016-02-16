(function () {

  angular
    .module('adventurewear')
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', wardrobeData];
  function mainController ($scope, wardrobeData ) {

    var vm = this;

    vm.pageHeader = {
      title: 'Adventure-Wear',
      strapline: 'Find places to work with wifi near you!'
    };

    $scope.data = wardrobeData();
  };
})();
