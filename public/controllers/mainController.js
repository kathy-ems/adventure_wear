angular
  .module('adventurewear.main', [])
    .controller('mainController', mainController)
    .filter('filterTemp', function() {
    return function(input, search) {
      var out = [];
      if(search.activity === undefined) {
        angular.forEach(input, function(wardrobe) {
          if(wardrobe.temperature >= (search.temp-10)
            && wardrobe.temperature <= (search.temp + 10)
          ){
            out.push(wardrobe);
          }
        })
      } else {
      angular.forEach(input, function(wardrobe) {
        if (
          wardrobe.temperature >= (search.temp-10)
          && wardrobe.temperature <= (search.temp + 10)
          && wardrobe.activity === search.activity
        ) {
          out.push(wardrobe);
        }
      })
    }
    return out;
    }
  })
  .filter('validate', function () {
    return function(input) {
      if(input === undefined){
        return "N/A";
      }
      return input;
    }
  })
  .filter('titleCase', function() {
    return function (input) {
      if(input === "N/A"){
        return input;
      }
        var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

        input = input.toLowerCase();
        return input.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title) {
            if (index > 0 && index + match.length !== title.length &&
                match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
                (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
                title.charAt(index - 1).search(/[^\s-]/) < 0) {
                return match.toLowerCase();
            }

            if (match.substr(1).search(/[A-Z]|\../) > -1) {
                return match;
            }

            return match.charAt(0).toUpperCase() + match.substr(1);
        });
    }
});

mainController.$inject = ['$scope', '$filter'];


function mainController ( $scope ) {
  $scope.data = {};
  $scope.data.wardrobe = {};
  var vm = this;

  $scope.getCSSClass = function(searchTemp) {
    if(searchTemp > 99 || searchTemp < -40){
      return "text-danger"
    }
  }
  $scope.data.pageHeader = {
    title: 'Adventure Wear',
    tagline: "Your Adventure Awaits!",
    subtagline: "Determine the best outfit for your next adventure",
    tempfilterlabel: "... based on this temperature: ",
    actfilterlabel: "and on activity"
  };

  $scope.data.wardrobe = {
    wardrobe: [
      {
        top: 't-shirt',
        bottom: 'capris',
        head: 'sunglasses',
        temperature: 53,
        conditions: 'sunny',
        humidity: 70,
        activity: 'running'
      },
      {
        top: 'teal long sleeved shirt',
        bottom: 'black capris',
        head: 'headband',
        temperature: 62,
        conditions: 'raining',
        humidity: 100,
        activity: 'running',
        hands: 'light gloves'
      },
      {
        top: 'Purple long sleeved shirt',
        bottom: 'grey pants',
        head: 'headband',
        temperature: 52,
        conditions: 'overcast',
        humidity: 30,
        activity: 'running',
        hands: 'light gloves'
      },
      {
        top: 'Favorite blue long sleeved shirt',
        bottom: 'Blue stripe pants',
        head: 'headband',
        temperature: 39,
        conditions: 'cloudy',
        humidity: 50,
        activity: 'running',
        hands: 'heavy gloves'
      },
      {
        top: 'light long sleeved shirt',
        bottom: 'pants',
        head: 'headband',
        temperature: 48,
        conditions: 'cloudy',
        humidity: 75,
        activity: 'hiking'
      },
      {
        top: 'long sleeved shirt',
        bottom: 'pants',
        head: 'buff',
        temperature: 44,
        conditions: 'cloudy',
        humidity: 50,
        activity: 'trail running',
        hands: 'heavy gloves'
      },
      {
        top: 'tank',
        bottom: 'shorts',
        head: 'hat',
        temperature: 72,
        conditions: 'sunny',
        humidity: 20,
        activity: 'trail running'
      },
      {
        top: 't-shirt',
        bottom: 'capris',
        head: 'sunglasses',
        temperature: 58,
        conditions: 'sunny',
        humidity: 70,
        activity: 'running'
      },
      {
        top: 't-shirt',
        bottom: 'hike skirt',
        head: 'hat',
        temperature: 55,
        conditions: 'sunny',
        humidity: 70,
        activity: 'hiking'
      },
      {
        top: 'Rainbow t-shirt',
        bottom: 'Black pants',
        head: 'headband',
        temperature: 49,
        conditions: 'cloudy',
        humidity: 75,
        activity: 'running'
      },
      {
        top: 'My Nike Tank',
        bottom: 'B&W bike shorts',
        head: 'sunglasses',
        temperature: 75,
        conditions: 'sunny',
        humidity: 30,
        activity: 'Biking'
      }
      ,
      {
        top: 'Racing long sleeved shirt',
        bottom: 'black bike pants',
        head: 'sunglasses',
        temperature: 40,
        conditions: 'sunny',
        humidity: 30,
        activity: 'Biking'
      }
    ]
  }
};

// WardrobeData.getWardrobe().then( function ( resp ) {
//   console.log("Response", resp);
//   $scope.data = resp;
// });
