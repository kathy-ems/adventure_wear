angular
  .module('adventurewear.main', [])
    .controller('mainController', mainController);

mainController.$inject = ['$scope', wardrobeData];

function mainController ($scope, wardrobeData ) {

  var vm = this;

  vm.pageHeader = {
    title: 'adventurewear',
    strapline: 'Pick an outfit!'
  };

  // $scope.data = wardrobeData();
};
