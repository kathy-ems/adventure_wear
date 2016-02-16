angular
  .module('adventurewear.main', [])
    .controller('mainController', mainController)
    .filter('filterTemp', function() {
    return function(input, desiredTemp) {
      var out = [];
      if (isNaN(desiredTemp)) {
        out.push(desiredTemp);
      } else {
        angular.forEach(input, function(wardrobe) {
          if (wardrobe.temperature >= (desiredTemp-10) && wardrobe.temperature <= (desiredTemp + 10) ) {
            out.push(wardrobe);
          }
        })
      }
      return out;
    }
  });

mainController.$inject = ['$scope', '$filter'];

function mainController ( $scope ) {
  $scope.data = {};
  $scope.data.wardrobe = {};
  var vm = this;

  $scope.data.pageHeader = {
    title: 'Adventure Wear!',
    tagline: "Pick an outfit! Your Adventure Awaits!"
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
};

// WardrobeData.getWardrobe().then( function ( resp ) {
//   console.log("Response", resp);
//   $scope.data = resp;
// });
