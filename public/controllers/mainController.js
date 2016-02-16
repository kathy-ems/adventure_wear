angular
  .module('adventurewear.main', [])
    .controller('mainController', mainController);

mainController.$inject = ['$scope', WardrobeData];

function mainController ($scope, WardrobeData ) {

  var vm = this;

  vm.pageHeader = {
    title: 'adventurewear',
    strapline: 'Pick an outfit!'
  };

  $scope.data = [];
  WardrobeData.getWardrobe().then( function ( resp ) {
    $scope.data = resp;
  } );
  ;
};
