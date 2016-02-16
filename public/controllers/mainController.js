angular
  .module('adventurewear.main', [])
    .controller('mainController', mainController);

mainController.$inject = ['$scope'];

function mainController ( $scope ) {
  $scope.data = [];

  // var vm = this;
  //
  // vm.pageHeader = {
  //   title: 'adventurewear',
  //   strapline: 'Pick an outfit!'
  // };

  // WardrobeData.getWardrobe().then( function ( resp ) {
  //   console.log("Response", resp);
  //   $scope.data = resp;
  // });
};
