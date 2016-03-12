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
    tempfilterlabel: "... based on this temperature (Fahrenheit): ",
    actfilterlabel: "and on activity"
  };

  $scope.data.wardrobe = {
    wardrobe: [
      {
        temperature: 55,
        feelsLike: 55,
        wind: 9,
        timeOfDay: '16:00:00',
        conditions: 'cloudy',
        humidity: null,
        outter: null,
        top: 't-shirt',
        bottom: 'capris',
        head: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good'
      },
      {
        temperature: 45,
        feelsLike: 36,
        wind: 16,
        timeOfDay: '07:00:00',
        conditions: 'cloudy',
        humidity: null,
        outter: 'jacket',
        top: 'long sleeved shirt',
        bottom: 'yoga pants',
        head: 'hat',
        hands: 'mittens',
        activity: 'Running',
        intensity: 'low'
      },
      {
        temperature: 49,
        feelsLike: 40,
        wind: 25,
        timeOfDay: '11:00:00',
        conditions: 'sunny',
        humidity: null,
        outter: 'jacket',
        top: 'shirt',
        bottom: 'yoga pants',
        head: 'hat',
        hands: 'mittens',
        activity: 'Running',
        intensity: 'low',
        rate: 'good'
      },
      {
        temperature: 54,
        feelsLike: 54,
        wind: 6,
        timeOfDay: '10:00:00',
        conditions: 'partly cloudy',
        humidity: null,
        outter: null,
        top: 't-shirt',
        bottom: 'running pants',
        head: 'headband',
        hands: 'mittens',
        activity: 'Running',
        intensity: 'low',
        rate: 'good'
      },
      {
        temperature: 58,
        feelsLike: 58,
        wind: 17,
        timeOfDay: '19:00:00',
        conditions: 'sunny',
        humidity: null,
        outter: null,
        top: 'long sleeved shirt',
        bottom: 'running pants',
        head: 'headband',
        hands: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good'
      },
      {
        temperature: 53,
        feelsLike: 53,
        wind: 8,
        timeOfDay: '07:00:00',
        conditions: 'cloudy',
        humidity: null,
        outter: null,
        top: 'long sleeved shirt',
        bottom: 'running pants',
        head: 'hat',
        hands: 'mittens',
        activity: 'Running',
        intensity: 'low',
        rate: 'warm'
      },
      {
        temperature: 54,
        feelsLike: 54,
        wind: 7,
        timeOfDay: '06:30:00',
        conditions: 'sunny',
        humidity: null,
        outter: null,
        top: 't-shirt',
        bottom: 'running pants',
        head: 'headband',
        hands: 'mittens',
        activity: 'Running',
        intensity: 'low',
        rate: 'good'
      },
      {
        temperature: 55,
        feelsLike: 55,
        wind: 11,
        humidity: 94,
        timeOfDay: '06:30:00',
        rain: 'light',
        conditions: 'cloudy',
        outter: null,
        top: 'long sleeved shirt',
        bottom: 'running pants',
        head: 'headband',
        hands: 'mittens',
        activity: 'Running',
        intensity: 'low',
        rate: 'good'
      },
      {
        temperature: 59,
        feelsLike: null,
        wind: 9,
        humidity: 83,
        timeOfDay: '07:00:00',
        rain: null,
        conditions: 'cloudy',
        outter: null,
        top: 't-shirt',
        bottom: 'running pants',
        head: 'headband',
        hands: 'mittens',
        activity: 'Running',
        intensity: 'low',
        rate: 'good'
      },
      {
        temperature: 56,
        feelsLike: null,
        wind: 2,
        humidity: 87,
        timeOfDay: '07:30:00',
        rain: null,
        conditions: 'clear',
        outter: null,
        top: 't-shirt',
        bottom: 'running pants',
        head: 'headband',
        hands: 'mittens',
        activity: 'Running',
        intensity: 'low',
        rate: 'good'
      }
    ]
  }
};

// WardrobeData.getWardrobe().then( function ( resp ) {
//   console.log("Response", resp);
//   $scope.data = resp;
// });
