angular
  .module('adventurewear.wardrobedata', [])
    .factory('WardrobeData', function () {

      var getWardrobe = function () {
        return {
          wardrobe: [{
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
        }]
      };
    };

    return {
      wardrobe: getWardrobe
      // locationByCoords : locationByCoords,
      // locationById : locationById,
      // addReviewById : addReviewById
    };
  });
