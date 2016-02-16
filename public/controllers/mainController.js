angular
  .module('adventurewear.main', [])
    .controller('mainController', mainController);

mainController.$inject = ['$scope'];

function mainController ( $scope ) {
  $scope.data = {};
  $scope.data.wardrobe = {};
  $scope.data.tagline = "Your Adventure Awaits!";

  var vm = this;

  vm.pageHeader = {
    title: 'adventurewear',
    strapline: 'Pick an outfit!'
  };

  $scope.data.wardrobe = {
    wardrobe: [
      {
        top: 't-shirt',
        bottom: 'capris',
        head: 'sunglasses',
        temperature: 56,
        conditions: 'sunny',
        humidity: 70,
        activity: 'running'
      },
      {
        top: 't-shirt',
        bottom: 'pants',
        head: 'headband',
        temperature: 49,
        conditions: 'cloudy',
        humidity: 75,
        activity: 'running'
      },
      {
        top: 'long sleeved shirt',
        bottom: 'pants',
        head: 'headband',
        temperature: 44,
        conditions: 'cloudy',
        humidity: 50,
        activity: 'running'
      },
      {
        top: 'tank',
        bottom: 'shorts',
        head: 'hat',
        temperature: 72,
        conditions: 'sunny',
        humidity: 50,
        activity: 'trail running'
      }


    ]
  }

  // $scope.data.wardrobe = {
  //     wardrobe: [{
  //     top: 't-shirt',
  //     bottom: 'capris',
  //     head: 'sunglasses',
  //     temperature: 56,
  //     conditions: 'sunny',
  //     humidity: 70,
  //     activity: 'running'
  //   },
  //   {
  //     top: 't-shirt',
  //     bottom: 'pants',
  //     head: 'headband',
  //     temperature: 49,
  //     conditions: 'cloudy',
  //     humidity: 75,
  //     activity: 'running'
  //   },
  //   {
  //     top: 'long sleeved shirt',
  //     bottom: 'pants',
  //     head: 'headband',
  //     temperature: 44,
  //     conditions: 'cloudy',
  //     humidity: 50,
  //     activity: 'running'
  //   },
  //   {
  //     top: 'tank',
  //     bottom: 'shorts',
  //     head: 'hat',
  //     temperature: 72,
  //     conditions: 'sunny',
  //     humidity: 50,
  //     activity: 'trail running'
  //   }];
  // };
};

// WardrobeData.getWardrobe().then( function ( resp ) {
//   console.log("Response", resp);
//   $scope.data = resp;
// });
