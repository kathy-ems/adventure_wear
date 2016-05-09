angular
  .module('adventurewear.filters', [])
  .filter('filterTemp', function() {
  return function(events, search) {
    var out = [];
    if(search.activity === undefined) {
      angular.forEach(events, function(event) {
        if(event.weather[0].temperature >= (search.temp-2)
          && event.weather[0].temperature <= (search.temp + 2)
        ){
          out.push(event);
        }
      })
    } else {
    angular.forEach(events, function(event, index) {
      if (
        event.weather[0].temperature >= (search.temp-2)
        && event.weather[0].temperature <= (search.temp + 2)
        && event.activity.toLowerCase() === search.activity.toLowerCase()
      ) {
        out.push(event);
      }
    })
  }
  return out;
  }
})
.filter('validate', function () {
  return function(events) {
    if(events === undefined || events === null) {
      return "N/A";
    }
    return events;
  }
})
.filter('titleCase', function() {
  return function (events) {
    if(events === "N/A" || events === undefined){
      return "N/A";
    }
    var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
    if(events !== null) {
      events = events.toLowerCase();
      return events.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title) {
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
