angular
  .module('adventurewear.main', [])
    .controller('mainController', mainController);

mainController.$inject = ['$scope', '$filter'];


function mainController ( $scope ) {
  $scope.data = {};
  $scope.data.events = {};
  $scope.search = {};
  var vm = this;

  $scope.checkRange = function(searchTemp) {
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
  $scope.activities = ['All', 'Running', 'Golf', 'Hiking'];

  $scope.data.events = [
    {
      timeOfDay: 'afternoon',
      dateTime: '12:00:00',
      addedOn: '04/10/2016',
      weather: [{
        temperature: 59,
        feelsLike: 59,
        wind: 9,
        humidity: 90,
        percipType: null,
        percip: null,
        conditions: 'overcast'
      }],
      wardrobe: [{
        outter: 'rain jacket, Nike blue long sleeve pull over',
        reflective: null,
        top: 'blue shirt, black 13.1 long sleeved',
        arms: null,
        bottom: 'REI black pants',
        socks: null,
        head: 'headband, brimmed hat',
        hands: null,
        neck: 'buff'
      }],
      activity: 'golf',
      intensity: '18 holes',
      rate: 'good',
      notes: null,
      active: true
    },
    {
      timeOfDay: 'morning',
      dateTime: '07:00:00',
      addedOn: '04/09/2016',
      weather: [{
        temperature: 56,
        feelsLike: 56,
        wind: 6,
        humidity: 90,
        percipType: 'rain',
        percip: 'light',
        conditions: 'rain'
      }],
      wardrobe: [{
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: 'arm sleeves',
        bottom: 'capris',
        socks: 'wool socks',
        head: 'headband, brimmed hat',
        hands: 'light weight gloves',
        neck: null
      }],
      activity: 'running',
      intensity: 'medium',
      rate: 'good',
      notes: null,
      active: true
    },
    {
      timeOfDay: 'morning',
      addedOn: '03/31/2016',
      dateTime: '06:30:00',
      weather: [{
        temperature: 54,
        feelsLike: 54,
        wind: 6,
        humidity: 78,
        percipType: null,
        percip: null,
        conditions: 'overcast'
      }],
      wardrobe: [{
          outter: null,
          reflective: 'vest',
          top: 'NP yellow t-shirt',
          arms: 'arm sleeves',
          bottom: 'capris',
          socks: null,
          head: 'headband',
          hands: 'light weight gloves',
          neck: null
        }],
      activity: 'running',
      intensity: 'medium',
      rate: 'good',
      notes: null,
      active: true
    },
    {
      timeOfDay: null,
      addedOn: '04/02/2016',
      dateTime: '17:00:00',
      weather: [{
        temperature: 73,
        feelsLike: 73,
        wind: 0,
        humidity: null,
        percipType: null,
        percip: null,
        conditions: 'partly cloudy'
      }],
      wardrobe: [{
        outter: null,
        reflective: null,
        top: 'grey and purple lucy shirt',
        arms: null,
        bottom: 'MH pants',
        socks: null,
        head: 'running cap',
        hands: null,
        neck: null
      }],
      activity: 'golf range',
      intensity: 'medium',
      rate: 'good',
      notes: 'warm at first but after two hours good',
      active: true
    },
    {
      timeOfDay: 'morning',
      addedOn: '03/26/2016',
      dateTime: '06:30:00',
      weather: [
        { temperature: 51,
          feelsLike: 51,
          wind: 1,
          humidity: 83,
          percipType: null,
          percip: null,
          conditions: 'clear'
        }],
      wardrobe: [
        {
          outter: null,
          reflective: 'vest',
          top: 't-shirt',
          arms: 'nike arm sleeves',
          bottom: 'capris',
          socks: null,
          head: 'headband',
          hands: 'lightweight gloves',
          neck: null
        }],
      activity: 'running',
      intensity: 'light',
      rate: 'warm',
      notes: 'multi layer - wear a tank instead of t-shirt',
      active: true
    },
    {
      timeOfDay: 'morning',
      addedOn: '03/20/2016',
      dateTime: '08:00:00',
      weather: [
        { temperature: 56,
          feelsLike: 56,
          wind: 4,
          humidity: 83,
          percipType: null,
          percip: null,
          conditions: 'mostly cloudy'
        }],
      wardrobe: [
        {
          outter: null,
          reflective: null,
          top: 't-shirt',
          arms: null,
          bottom: 'capris',
          socks: null,
          head: null,
          hands: null,
          neck: null
        }],
      activity: 'running',
      intensity: 'medium',
      rate: 'good',
      notes: null,
      active: true
    },
    {
      timeOfDay: null,
      addedOn: '03/19/2016',
      dateTime: '12:30:00',
      weather: [
        { temperature: 64,
          feelsLike: 64,
          wind: 8,
          humidity: 71,
          percipType: null,
          percip: null,
          conditions: 'partly cloudy'
        }],
      wardrobe: [
        {
          outter: null,
          reflective: null,
          top: 't-shirt',
          arms: null,
          bottom: 'capris',
          socks: null,
          head: null,
          hands: null,
          neck: null
        }],
      activity: 'running',
      intensity: 'light',
      rate: 'warm',
      notes: 'tank if going longer than 2 miles',
      active: true
    },
    {
      timeOfDay: 'morning',
      addedOn: '03/19/2016',
      dateTime: '06:30:00',
      weather: [
        { temperature: 55,
          feelsLike: 54,
          wind: 4,
          humidity: 88,
          percipType: 'rain',
          percip: 'fogging',
          conditions: 'cloudy'
        }],
      wardrobe: [
        {
          outter: null,
          reflective: 'vest',
          top: 't-shirt',
          arms: null,
          bottom: 'capris',
          socks: null,
          head: 'headband',
          hands: 'lightweight gloves',
          neck: null
        }],
      activity: 'running',
      intensity: 'light',
      rate: 'good',
      notes: 'fogging, could have used a brimmed hat',
      active: true
    },
    {
      timeOfDay: 'morning',
      addedOn: '03/17/2016',
      dateTime: '06:30:00',
      weather: [
        { temperature: 51,
          feelsLike: 51,
          wind: 0,
          humidity: 86,
          percipType: null,
          percip: null,
          conditions: 'clear'
        }],
      wardrobe: [
        {
          outter: null,
          reflective: 'vest',
          top: 't-shirt',
          arms: null,
          bottom: 'Pearl Izumi 3/4 capris',
          socks: null,
          head: 'headband',
          hands: 'lightweight gloves',
          neck: null
        }],
      activity: 'running',
      intensity: 'light',
      rate: 'good',
      notes: 'May want to use mittens, arm sleeves if no vest',
      active: true
    },
    {
      addedOn: '03/15/2016',
      timeOfDay: null,
      dateTime: '12:30:00',
      weather: [
        { temperature: 63,
          feelsLike: 63,
          wind: 5,
          humidity: 56,
          percipType: null,
          percip: null,
          conditions: 'sunny'
        }],
      wardrobe: [
        {
          outter: null,
          reflective: null,
          top: 't-shirt',
          arms: null,
          bottom: 'capris',
          socks: null,
          head: 'headband, sunglasses',
          hands: null,
          neck: null
        }],
      activity: 'running',
      intensity: 'light',
      rate: 'good',
      active: true
    },
    {
      addedOn: '03/01/2016',
      timeOfDay: null,
      dateTime: '09:00:00',
      weather: [
        { temperature: 56,
          feelsLike: 56,
          wind: 4,
          humidity: 100,
          percipType: 'rain',
          percip: 'light',
          conditions: 'cloudy'
        }],
      wardrobe: [
        {
          outter: null,
          reflective: null,
          top: 't-shirt',
          arms: 'blue nike arm warmers',
          bottom: 'capris',
          socks: 'wool socks',
          head: 'headband, baseball hat',
          hands: 'brooks mittens',
          neck: null
        }],
      activity: 'running',
      intensity: 'medium',
      addedOn: '03/01/2016',
      rate: 'good',
      active: false
    },
    {
      timeOfDay: null,
      dateTime: '16:00:00',
      weather: [
        { temperature: 55,
          feelsLike: 55,
          wind: 9,
          conditions: 'partly cloudy',
          humidity: null,
          outter: null,
          reflective: null
        }],
      wardrobe: [
        {
          top: 't-shirt',
          arms: null,
          bottom: 'capris',
          socks: null,
          head: null,
          hands: null,
          neck: null
        }],
      activity: 'Running',
      intensity: 'low',
      rate: 'good',
      active: false,
      addedOn: '03/01/2016'
    },
    {
      timeOfDay: 'morning',
      dateTime: '07:00:00',
      weather: [
        { temperature: 45,
          feelsLike: 36,
          wind: 16,
          conditions: 'cloudy',
          humidity: null,
          outter: 'jacket',
          reflective: null
        }],
        wardrobe: [
          {
            top: 'long sleeved shirt',
            arms: null,
            bottom: 'yoga pants',
            socks: null,
            head: 'hat',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        active: false,
        addedOn: '03/01/2016'
    },
    {
      timeOfDay: null,
      dateTime: '11:00:00',
      weather: [
        { temperature: 49,
          feelsLike: 40,
          wind: 25,
          conditions: 'sunny',
          humidity: null
        }],
      wardrobe: [
        {
          outter: 'jacket',
          reflective: null,
          top: 'shirt',
          arms: null,
          bottom: 'yoga pants',
          socks: null,
          head: 'hat',
          hands: 'mittens',
          neck: null
        }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
    },
    {
      timeOfDay: null,
      dateTime: '10:00:00',
        weather: [
          { temperature: 54,
            feelsLike: 54,
            wind: 6,
            conditions: 'partly cloudy',
            humidity: null
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null,
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
    },
    {
      timeOfDay: null,
      dateTime: '19:00:00',
        weather: [
          { temperature: 58,
            feelsLike: 58,
            wind: 17,
            conditions: 'sunny',
            humidity: null
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 'long sleeved shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: null,
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
    },
    {
      timeOfDay: 'morning',
      dateTime: '07:00:00',
        weather: [
          { temperature: 53,
            feelsLike: 53,
            wind: 8,
            conditions: 'cloudy',
            humidity: null
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 'long sleeved shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'hat',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'warm',
        active: false,
        addedOn: '03/01/2016'
    },
    {
      timeOfDay: 'morning',
      dateTime: '06:30:00',
        weather: [
          { temperature: 54,
            feelsLike: 54,
            wind: 7,
            conditions: 'sunny',
            humidity: null
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null,
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: 'morning',
        dateTime: '06:30:00',
        weather: [
          { temperature: 55,
            feelsLike: 55,
            wind: 11,
            humidity: 94,
            percipType: 'rain',
            percip: 'light',
            conditions: 'cloudy'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 'long sleeved shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: 'morning',
        dateTime: '07:00:00',
        weather: [
          { temperature: 59,
            feelsLike: null,
            wind: 9,
            humidity: 83,
            percipType: null,
            percip: null,
            conditions: 'cloudy'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: 'morning',
        dateTime: '07:30:00',
        weather: [
          { temperature: 56,
            feelsLike: null,
            wind: 2,
            humidity: 87,
            percipType: null,
            percip: null,
            conditions: 'clear'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '15:00:00',
        weather: [
          { temperature: 55,
            feelsLike: null,
            wind: null,
            humidity: null,
            percipType: null,
            percip: null,
            conditions: 'sunny'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'cotton gloves',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '14:00:00',
        weather: [
          { temperature: 48,
            feelsLike: 45,
            wind: null,
            humidity: null,
            percipType: null,
            percip: null,
            conditions: 'sunny'
          }],
        wardrobe: [
          {
            outter: 'jacket',
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '18:00:00',
        weather: [
          { temperature: 46,
            feelsLike: 46,
            wind: null,
            humidity: null,
            percipType: null,
            percip: null,
            conditions: 'clear'
          }],
        wardrobe: [
          {
            outter: 'jacket',
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'hat',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '15:00:00',
        weather: [
          { temperature: 53,
            feelsLike: null,
            wind: 17,
            humidity: null,
            percipType: null,
            percip: null,
            conditions: 'sunny'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 'long sleeved shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'hat',
            hands: 'cotton gloves',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '15:00:00',
        weather: [
          { temperature: 53,
            feelsLike: null,
            wind: 17,
            humidity: null,
            percipType: null,
            percip: null,
            conditions: 'sunny'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 'long sleeved shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'hat',
            hands: 'cotton gloves',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '17:00:00',
        weather: [
          { temperature: 52,
            feelsLike: null,
            wind: 10,
            humidity: null,
            percipType: null,
            percip: null,
            conditions: 'partly cloudy'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 'long sleeved shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'hat',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: 'morning',
        dateTime: '08:30:00',
        weather: [
          { temperature: 51,
            feelsLike: null,
            wind: 3,
            humidity: null,
            percipType: null,
            percip: null,
            conditions: 'cloudy'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'hat',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '16:30:00',
        weather: [
          { temperature: 61,
            feelsLike: null,
            wind: 2,
            humidity: null,
            percipType: null,
            percip: null,
            conditions: 'sunny'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: null,
            hands: null,
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '16:30:00',
        weather: [
          { temperature: 50,
            feelsLike: null,
            wind: 8,
            humidity: null,
            percipType: null,
            percip: null,
            conditions: 'cloudy'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 'long sleeved shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'hat',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '16:30:00',
        weather: [
          { temperature: 59,
            feelsLike: null,
            wind: 6,
            humidity: null,
            percipType: null,
            percip: null,
            conditions: 'cloudy'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: null,
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '10:30:00',
        weather: [
          { temperature: 53,
            feelsLike: null,
            wind: 8,
            humidity: null,
            percipType: null,
            percip: null,
            conditions: 'sunny'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'hat',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '10:30:00',
        weather: [
          { temperature: 53,
            feelsLike: null,
            wind: 6,
            humidity: null,
            percipType: null,
            percip: null,
            conditions: 'partly cloudy'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'hat',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '17:00:00',
        weather: [
          { temperature: 56,
            feelsLike: null,
            wind: 12,
            humidity: null,
            percipType: null,
            percip: null,
            conditions: 'partly cloudy'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 'long sleeved shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '17:00:00',
        weather: [
          { temperature: 52,
            feelsLike: null,
            wind: 13,
            humidity: null,
            percipType: 'rain',
            percip: 'light',
            conditions: 'cloudy'
          }],
        wardrobe: [
          {
            outter: 'jacket',
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'yoga pants',
            socks: null,
            head: 'hat',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '17:00:00',
        weather: [
          { temperature: 56,
            feelsLike: null,
            wind: 16,
            humidity: null,
            percipType: null,
            percip: null,
            conditions: 'sunny'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 'long sleeved shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '16:30:00',
        weather: [
          { temperature: 58,
            feelsLike: null,
            wind: 15,
            humidity: null,
            percipType: null,
            percip: null,
            conditions: 'sunny'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 'long sleeved shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '09:00:00',
        weather: [
          { temperature: 45,
            feelsLike: 41,
            wind: 6,
            humidity: null,
            percipType: null,
            percip: null,
            conditions: 'sunny'
          }],
        wardrobe: [
          {
            outter: 'jacket',
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'hat',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '16:00:00',
        weather: [
          { temperature: 50,
            feelsLike: 48,
            wind: 14,
            humidity: null,
            percipType: 'rain',
            percip: 'light',
            conditions: 'sunny'
          }],
        wardrobe: [
          {
            outter: 'jacket',
            reflective: null,
            top: 'long sleeved shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'hat',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '17:00:00',
        weather: [
          { temperature: 53,
            feelsLike: 53,
            wind: 17,
            humidity: null,
            percipType: 'rain',
            percip: 'light',
            conditions: 'sunny'
          }],
        wardrobe: [
          {
            outter: 'jacket',
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'hat',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '17:00:00',
        weather: [
          { temperature: 50,
            feelsLike: 50,
            wind: 20,
            humidity: null,
            percipType: null,
            percip: null,
            conditions: 'sunny'
          }],
        wardrobe: [
          {
            outter: 'jacket',
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'yoga pants',
            socks: null,
            head: 'hat',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: 'morning',
        dateTime: '07:00:00',
        weather: [
          { temperature: 59,
            feelsLike: null,
            wind: 9,
            humidity: 83,
            percipType: null,
            percip: null,
            conditions: 'cloudy'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: 'morning',
        dateTime: '07:30:00',
        weather: [
          { temperature: 56,
            feelsLike: null,
            wind: 2,
            humidity: 87,
            percipType: null,
            percip: null,
            conditions: 'clear'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: 'morning',
        dateTime: '07:00:00',
        weather: [
          { temperature: 56,
            feelsLike: null,
            wind: 8,
            humidity: 86,
            percipType: null,
            percip: null,
            conditions: 'cloudy'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: 'morning',
        dateTime: '07:30:00',
        weather: [
          { temperature: 63,
            feelsLike: null,
            wind: 12,
            humidity: 92,
            percipType: null,
            percip: null,
            conditions: 'clear'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: null,
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: 'morning',
        dateTime: '07:00:00',
        weather: [
          { temperature: 59,
            feelsLike: null,
            wind: 3,
            humidity: 64,
            percipType: null,
            percip: null,
            conditions: 'clear'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '11:30:00',
        weather: [
          { temperature: 54,
            feelsLike: null,
            wind: 6,
            humidity: 72,
            percipType: null,
            percip: null,
            conditions: 'sunny'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 't-shirt',
            arms: 'arm warmers',
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '10:30:00',
        weather: [
          { temperature: 52,
            feelsLike: null,
            wind: 9,
            humidity: 65,
            percipType: null,
            percip: null,
            conditions: 'sunny'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 'long sleeves shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '09:30:00',
        weather: [
          { temperature: 45,
            feelsLike: 43,
            wind: 4,
            humidity: 84,
            percipType: null,
            percip: null,
            conditions: 'sunny'
          }],
        wardrobe: [
          {
            outter: 'jacket',
            reflective: null,
            top: 't-shirt',
            arms: null,
            bottom: 'long pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: 'morning',
        dateTime: '07:00:00',
        weather: [
          { temperature: 44,
            feelsLike: 41,
            wind: 6,
            humidity: 79,
            percipType: null,
            percip: null,
            conditions: 'clear'
          }],
        wardrobe: [
          {
            outter: 'jacket',
            reflective: 'vest',
            top: 'long sleeved shirt',
            arms: null,
            bottom: 'long pants',
            socks: null,
            head: 'hat',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: 'morning',
        dateTime: '07:00:00',
        weather: [
          { temperature: 40,
            feelsLike: 36,
            wind: 5,
            humidity: 72,
            percipType: null,
            percip: null,
            conditions: 'partly cloudy'
          }],
        wardrobe: [
          {
            outter: 'jacket',
            reflective: null,
            top: 'long sleeved shirt',
            arms: 'arm sleeves',
            bottom: 'running pants',
            socks: 'wool socks',
            head: 'hat',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: 'morning',
        dateTime: '06:30:00',
        weather: [
          { temperature: 43,
            feelsLike: 43,
            wind: 4,
            humidity: 73,
            percipType: null,
            percip: null,
            conditions: 'clear'
          }],
        wardrobe: [
          {
            outter: 'jacket',
            reflective: 'vest',
            top: 'long sleeved shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: 'morning',
        dateTime: '07:00:00',
        weather: [
          { temperature: 48,
            feelsLike: 48,
            wind: 2,
            humidity: 86,
            percipType: null,
            percip: null,
            conditions: 'clear'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: 'vest',
            top: 'long sleeved shirt',
            arms: null,
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: 'morning',
        dateTime: '08:00:00',
        weather: [
          { temperature: 43,
            feelsLike: 39,
            wind: 6,
            humidity: 88,
            percipType: null,
            percip: null,
            conditions: 'partly cloudy'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 'long sleeved shirt',
            arms: null,
            bottom: 'running pants',
            socks: 'warm socks',
            head: 'hat',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '17:00:00',
        weather: [
          { temperature: 57,
            feelsLike: null,
            wind: 13,
            humidity: 51,
            percipType: null,
            percip: null,
            conditions: 'sunny'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: null,
            top: 't-shirt',
            arms: 'arm warmers',
            bottom: 'running pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: 'morning',
        dateTime: '06:30:00',
        weather: [
          { temperature: 46,
            feelsLike: null,
            wind: 2,
            humidity: 82,
            percipType: 'fog',
            percip: null,
            conditions: 'cloudy'
          }],
        wardrobe: [
          {
            outter: null,
            reflective: 'vest',
            top: 'long light blue shirt',
            arms: null,
            bottom: 'long pants',
            socks: null,
            head: 'headband',
            hands: 'mittens',
            neck: null
          }],
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false
    },
    {
        addedOn: '03/20/2016',
        timeOfDay: null,
        dateTime: '11:30:00',
        weather: [
          { temperature: 62,
            feelsLike: null,
            wind: 2,
            humidity: null,
            percipType: 'rain',
            percip: 'light',
            conditions: 'cloudy'
          }],
        wardrobe: [
          {
            outter: 'rain coat',
            reflective: null,
            top: '13.1 black long sleeve, collard shirt',
            arms: null,
            bottom: 'MH pants',
            socks: null,
            head: 'headband, hat',
            hands: null,
            neck: 'buff'
          }],
        activity: 'golf',
        intensity: '9 holes',
        rate: 'good',
        active: true
    },
    {
        addedOn: '03/01/2016',
        timeOfDay: null,
        dateTime: '13:30:00',
        weather: [
          { temperature: 56,
            feelsLike: null,
            wind: 2,
            humidity: null,
            percipType: 'rain',
            percip: null,
            conditions: 'cloudy'
          }],
        wardrobe: [
          {
            outter: 'white long sleeve',
            reflective: null,
            top: 'long light blue shirt',
            arms: null,
            bottom: 'heavy pants',
            socks: null,
            head: 'headband',
            hands: null,
            neck: null
          }],
        activity: 'biking',
        intensity: '18 holes',
        rate: 'test',
        active: false
    },
    {
        timeOfDay: null,
        dateTime: '13:30:00',
        weather: [
          { temperature: 56,
            feelsLike: null,
            wind: 2,
            humidity: null,
            percipType: 'rain',
            percip: null,
            conditions: 'cloudy'
          }],
        wardrobe: [
          {
            outter: 'white long sleeve',
            reflective: null,
            top: 'long light blue shirt',
            arms: null,
            bottom: 'heavy pants',
            socks: null,
            head: 'headband',
            hands: null,
            neck: null
          }],
        activity: 'hiking',
        intensity: '18 holes',
        rate: 'test',
        active: false
    }];
};
// WardrobeData.getWardrobe().then( function ( resp ) {
//   console.log("Response", resp);
//   $scope.data = resp;
// });
