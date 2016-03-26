angular
  .module('adventurewear.filters', [])
  .filter('filterTemp', function() {
  return function(input, search) {
    var out = [];
    if(search.activity === undefined) {
      angular.forEach(input, function(wardrobe) {
        if(wardrobe.temperature >= (search.temp-2)
          && wardrobe.temperature <= (search.temp + 2)
        ){
          out.push(wardrobe);
        }
      })
    } else {
    angular.forEach(input, function(wardrobe) {
      if (
        wardrobe.temperature >= (search.temp-2)
        && wardrobe.temperature <= (search.temp + 2)
        && wardrobe.activity.toLowerCase() === search.activity.toLowerCase()
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
    if(input === undefined || input === null) {
      return "N/A";
    }
    return input;
  }
})
.filter('titleCase', function() {
  return function (input) {
    if(input === "N/A" || input === undefined){
      return "N/A";
    }
    var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
    if(input !== null) {
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
  }
});
