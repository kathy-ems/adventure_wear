angular
  .module('adventurewear.main', [])
    .controller('mainController', mainController);

mainController.$inject = ['$scope', '$filter'];


function mainController ( $scope ) {
  $scope.data = {};
  $scope.data.wardrobe = {};
  $scope.search = {};
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
  $scope.activities = ['running', 'golf'];

  $scope.data.wardrobe = {
    wardrobe: [
      {
        temperature: 51,
        feelsLike: 51,
        wind: 1,
        humidity: 83,
        timeOfDay: '06:30:00',
        percipType: null,
        percip: null,
        conditions: 'clear',
        outter: null,
        reflective: 'vest',
        top: 't-shirt',
        arms: 'nike arm sleeves',
        bottom: 'capris',
        socks: null,
        head: 'headband',
        hands: 'lightweight gloves',
        neck: null,
        activity: 'running',
        intensity: 'light',
        rate: 'warm',
        notes: 'multi layer - wear a tank instead of t-shirt',
        active: true,
        addedOn: '03/26/2016'
      },
      {
        temperature: 56,
        feelsLike: 56,
        wind: 4,
        humidity: 83,
        timeOfDay: '08:00:00',
        percipType: null,
        percip: null,
        conditions: 'mostly cloudy',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'capris',
        socks: null,
        head: null,
        hands: null,
        neck: null,
        activity: 'running',
        intensity: 'medium',
        rate: 'good',
        notes: null,
        active: true,
        addedOn: '03/20/2016'
      },
      {
        temperature: 64,
        feelsLike: 64,
        wind: 8,
        humidity: 71,
        timeOfDay: '12:30:00',
        percipType: null,
        percip: null,
        conditions: 'partly cloudy',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'capris',
        socks: null,
        head: null,
        hands: null,
        neck: null,
        activity: 'running',
        intensity: 'light',
        rate: 'warm',
        notes: 'tank if going longer than 2 miles',
        active: true,
        addedOn: '03/19/2016'
      },
      {
        temperature: 55,
        feelsLike: 54,
        wind: 4,
        humidity: 88,
        timeOfDay: '06:30:00',
        percipType: 'rain',
        percip: 'fogging',
        conditions: 'cloudy',
        outter: null,
        reflective: 'vest',
        top: 't-shirt',
        arms: null,
        bottom: 'capris',
        socks: null,
        head: 'headband',
        hands: 'lightweight gloves',
        neck: null,
        activity: 'running',
        intensity: 'light',
        rate: 'good',
        notes: 'fogging, could have used a brimmed hat',
        active: true,
        addedOn: '03/19/2016'
      },
      {
        temperature: 51,
        feelsLike: 51,
        wind: 0,
        humidity: 86,
        timeOfDay: '06:30:00',
        percipType: null,
        percip: null,
        conditions: 'clear',
        outter: null,
        reflective: 'vest',
        top: 't-shirt',
        arms: null,
        bottom: 'Pearl Izumi 3/4 capris',
        socks: null,
        head: 'headband',
        hands: 'lightweight gloves',
        neck: null,
        activity: 'running',
        intensity: 'light',
        rate: 'good',
        notes: 'May want to use mittens, arm sleeves if no vest',
        active: true,
        addedOn: '03/17/2016'
      },
      {
        temperature: 63,
        feelsLike: 63,
        wind: 5,
        humidity: 56,
        timeOfDay: '12:30:00',
        percipType: null,
        percip: null,
        conditions: 'sunny',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'capris',
        socks: null,
        head: 'headband, sunglasses',
        hands: null,
        neck: null,
        activity: 'running',
        intensity: 'light',
        rate: 'good',
        active: true,
        addedOn: '03/15/2016'
      },
      {
        temperature: 56,
        feelsLike: 56,
        wind: 4,
        humidity: 100,
        timeOfDay: '09:00:00',
        percipType: 'rain',
        percip: 'light',
        conditions: 'cloudy',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: 'blue nike arm warmers',
        bottom: 'capris',
        socks: 'wool socks',
        head: 'headband, baseball hat',
        hands: 'brooks mittens',
        neck: null,
        activity: 'running',
        intensity: 'medium',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 55,
        feelsLike: 55,
        wind: 9,
        timeOfDay: '16:00:00',
        conditions: 'partly cloudy',
        humidity: null,
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'capris',
        socks: null,
        head: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 45,
        feelsLike: 36,
        wind: 16,
        timeOfDay: '07:00:00',
        conditions: 'cloudy',
        humidity: null,
        outter: 'jacket',
        reflective: null,
        top: 'long sleeved shirt',
        arms: null,
        bottom: 'yoga pants',
        socks: null,
        head: 'hat',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 49,
        feelsLike: 40,
        wind: 25,
        timeOfDay: '11:00:00',
        conditions: 'sunny',
        humidity: null,
        outter: 'jacket',
        reflective: null,
        top: 'shirt',
        arms: null,
        bottom: 'yoga pants',
        socks: null,
        head: 'hat',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 54,
        feelsLike: 54,
        wind: 6,
        timeOfDay: '10:00:00',
        conditions: 'partly cloudy',
        humidity: null,
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 58,
        feelsLike: 58,
        wind: 17,
        timeOfDay: '19:00:00',
        conditions: 'sunny',
        humidity: null,
        outter: null,
        reflective: null,
        top: 'long sleeved shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: null,
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 53,
        feelsLike: 53,
        wind: 8,
        timeOfDay: '07:00:00',
        conditions: 'cloudy',
        humidity: null,
        outter: null,
        reflective: null,
        top: 'long sleeved shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'hat',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'warm',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 54,
        feelsLike: 54,
        wind: 7,
        timeOfDay: '06:30:00',
        conditions: 'sunny',
        humidity: null,
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 55,
        feelsLike: 55,
        wind: 11,
        humidity: 94,
        timeOfDay: '06:30:00',
        percipType: 'rain',
        percip: 'light',
        conditions: 'cloudy',
        outter: null,
        reflective: null,
        top: 'long sleeved shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 59,
        feelsLike: null,
        wind: 9,
        humidity: 83,
        timeOfDay: '07:00:00',
        percipType: null,
        percip: null,
        conditions: 'cloudy',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 56,
        feelsLike: null,
        wind: 2,
        humidity: 87,
        timeOfDay: '07:30:00',
        percipType: null,
        percip: null,
        conditions: 'clear',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 55,
        feelsLike: null,
        wind: null,
        humidity: null,
        timeOfDay: '15:00:00',
        percipType: null,
        percip: null,
        conditions: 'sunny',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'cotton gloves',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 48,
        feelsLike: 45,
        wind: null,
        humidity: null,
        timeOfDay: '14:00:00',
        percipType: null,
        percip: null,
        conditions: 'sunny',
        outter: 'jacket',
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 46,
        feelsLike: 46,
        wind: null,
        humidity: null,
        timeOfDay: '18:00:00',
        percipType: null,
        percip: null,
        conditions: 'clear',
        outter: 'jacket',
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'hat',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 53,
        feelsLike: null,
        wind: 17,
        humidity: null,
        timeOfDay: '15:00:00',
        percipType: null,
        percip: null,
        conditions: 'sunny',
        outter: null,
        reflective: null,
        top: 'long sleeved shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'hat',
        hands: 'cotton gloves',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 53,
        feelsLike: null,
        wind: 17,
        humidity: null,
        timeOfDay: '15:00:00',
        percipType: null,
        percip: null,
        conditions: 'sunny',
        outter: null,
        reflective: null,
        top: 'long sleeved shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'hat',
        hands: 'cotton gloves',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 52,
        feelsLike: null,
        wind: 10,
        humidity: null,
        timeOfDay: '17:00:00',
        percipType: null,
        percip: null,
        conditions: 'partly cloudy',
        outter: null,
        reflective: null,
        top: 'long sleeved shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'hat',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 51,
        feelsLike: null,
        wind: 3,
        humidity: null,
        timeOfDay: '08:30:00',
        percipType: null,
        percip: null,
        conditions: 'cloudy',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'hat',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 61,
        feelsLike: null,
        wind: 2,
        humidity: null,
        timeOfDay: '16:30:00',
        percipType: null,
        percip: null,
        conditions: 'sunny',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: null,
        hands: null,
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 50,
        feelsLike: null,
        wind: 8,
        humidity: null,
        timeOfDay: '16:30:00',
        percipType: null,
        percip: null,
        conditions: 'cloudy',
        outter: null,
        reflective: null,
        top: 'long sleeved shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'hat',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 59,
        feelsLike: null,
        wind: 6,
        humidity: null,
        timeOfDay: '16:30:00',
        percipType: null,
        percip: null,
        conditions: 'cloudy',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: null,
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 53,
        feelsLike: null,
        wind: 8,
        humidity: null,
        timeOfDay: '10:30:00',
        percipType: null,
        percip: null,
        conditions: 'sunny',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'hat',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 53,
        feelsLike: null,
        wind: 6,
        humidity: null,
        timeOfDay: '10:30:00',
        percipType: null,
        percip: null,
        conditions: 'partly cloudy',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'hat',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 56,
        feelsLike: null,
        wind: 12,
        humidity: null,
        timeOfDay: '17:00:00',
        percipType: null,
        percip: null,
        conditions: 'partly cloudy',
        outter: null,
        reflective: null,
        top: 'long sleeved shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 52,
        feelsLike: null,
        wind: 13,
        humidity: null,
        timeOfDay: '17:00:00',
        percipType: 'rain',
        percip: 'light',
        conditions: 'cloudy',
        outter: 'jacket',
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'yoga pants',
        socks: null,
        head: 'hat',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 56,
        feelsLike: null,
        wind: 16,
        humidity: null,
        timeOfDay: '17:00:00',
        percipType: null,
        percip: null,
        conditions: 'sunny',
        outter: null,
        reflective: null,
        top: 'long sleeved shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 58,
        feelsLike: null,
        wind: 15,
        humidity: null,
        timeOfDay: '16:30:00',
        percipType: null,
        percip: null,
        conditions: 'sunny',
        outter: null,
        reflective: null,
        top: 'long sleeved shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 45,
        feelsLike: 41,
        wind: 6,
        humidity: null,
        timeOfDay: '09:00:00',
        percipType: null,
        percip: null,
        conditions: 'sunny',
        outter: 'jacket',
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'hat',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 50,
        feelsLike: 48,
        wind: 14,
        humidity: null,
        timeOfDay: '16:00:00',
        percipType: 'rain',
        percip: 'light',
        conditions: 'sunny',
        outter: 'jacket',
        reflective: null,
        top: 'long sleeved shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'hat',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 53,
        feelsLike: 53,
        wind: 17,
        humidity: null,
        timeOfDay: '17:00:00',
        percipType: 'rain',
        percip: 'light',
        conditions: 'sunny',
        outter: 'jacket',
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'hat',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 50,
        feelsLike: 50,
        wind: 20,
        humidity: null,
        timeOfDay: '17:00:00',
        percipType: null,
        percip: null,
        conditions: 'sunny',
        outter: 'jacket',
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'yoga pants',
        socks: null,
        head: 'hat',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 59,
        feelsLike: null,
        wind: 9,
        humidity: 83,
        timeOfDay: '07:00:00',
        percipType: null,
        percip: null,
        conditions: 'cloudy',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 56,
        feelsLike: null,
        wind: 2,
        humidity: 87,
        timeOfDay: '07:30:00',
        percipType: null,
        percip: null,
        conditions: 'clear',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 56,
        feelsLike: null,
        wind: 8,
        humidity: 86,
        timeOfDay: '07:00:00',
        percipType: null,
        percip: null,
        conditions: 'cloudy',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 63,
        feelsLike: null,
        wind: 12,
        humidity: 92,
        timeOfDay: '07:30:00',
        percipType: null,
        percip: null,
        conditions: 'clear',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: null,
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 59,
        feelsLike: null,
        wind: 3,
        humidity: 64,
        timeOfDay: '07:00:00',
        percipType: null,
        percip: null,
        conditions: 'clear',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 54,
        feelsLike: null,
        wind: 6,
        humidity: 72,
        timeOfDay: '11:30:00',
        percipType: null,
        percip: null,
        conditions: 'sunny',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: 'arm warmers',
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 52,
        feelsLike: null,
        wind: 9,
        humidity: 65,
        timeOfDay: '10:30:00',
        percipType: null,
        percip: null,
        conditions: 'sunny',
        outter: null,
        reflective: null,
        top: 'long sleeves shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 45,
        feelsLike: 43,
        wind: 4,
        humidity: 84,
        timeOfDay: '09:30:00',
        percipType: null,
        percip: null,
        conditions: 'sunny',
        outter: 'jacket',
        reflective: null,
        top: 't-shirt',
        arms: null,
        bottom: 'long pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 44,
        feelsLike: 41,
        wind: 6,
        humidity: 79,
        timeOfDay: '07:00:00',
        percipType: null,
        percip: null,
        conditions: 'clear',
        outter: 'jacket',
        reflective: 'vest',
        top: 'long sleeved shirt',
        arms: null,
        bottom: 'long pants',
        socks: null,
        head: 'hat',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 40,
        feelsLike: 36,
        wind: 5,
        humidity: 72,
        timeOfDay: '07:00:00',
        percipType: null,
        percip: null,
        conditions: 'partly cloudy',
        outter: 'jacket',
        reflective: null,
        top: 'long sleeved shirt',
        arms: 'arm sleeves',
        bottom: 'running pants',
        socks: 'wool socks',
        head: 'hat',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 43,
        feelsLike: 43,
        wind: 4,
        humidity: 73,
        timeOfDay: '06:30:00',
        percipType: null,
        percip: null,
        conditions: 'clear',
        outter: 'jacket',
        reflective: 'vest',
        top: 'long sleeved shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 48,
        feelsLike: 48,
        wind: 2,
        humidity: 86,
        timeOfDay: '07:00:00',
        percipType: null,
        percip: null,
        conditions: 'clear',
        outter: null,
        reflective: 'vest',
        top: 'long sleeved shirt',
        arms: null,
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 43,
        feelsLike: 39,
        wind: 6,
        humidity: 88,
        timeOfDay: '08:00:00',
        percipType: null,
        percip: null,
        conditions: 'partly cloudy',
        outter: null,
        reflective: null,
        top: 'long sleeved shirt',
        arms: null,
        bottom: 'running pants',
        socks: 'warm socks',
        head: 'hat',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 57,
        feelsLike: null,
        wind: 13,
        humidity: 51,
        timeOfDay: '17:00:00',
        percipType: null,
        percip: null,
        conditions: 'sunny',
        outter: null,
        reflective: null,
        top: 't-shirt',
        arms: 'arm warmers',
        bottom: 'running pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 46,
        feelsLike: null,
        wind: 2,
        humidity: 82,
        timeOfDay: '06:30:00',
        percipType: 'fog',
        percip: null,
        conditions: 'cloudy',
        outter: null,
        reflective: 'vest',
        top: 'long light blue shirt',
        arms: null,
        bottom: 'long pants',
        socks: null,
        head: 'headband',
        hands: 'mittens',
        neck: null,
        activity: 'Running',
        intensity: 'low',
        rate: 'good',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 62,
        feelsLike: null,
        wind: 2,
        humidity: null,
        timeOfDay: '11:30:00',
        percipType: 'rain',
        percip: 'light',
        conditions: 'cloudy',
        outter: 'rain coat',
        reflective: null,
        top: '13.1 black long sleeve, collard shirt',
        arms: null,
        bottom: 'MH pants',
        socks: null,
        head: 'headband, hat',
        hands: null,
        neck: 'buff',
        activity: 'golf',
        intensity: '9 holes',
        rate: 'good',
        active: true,
        addedOn: '03/20/2016'
      },
      {
        temperature: 56,
        feelsLike: null,
        wind: 2,
        humidity: null,
        timeOfDay: '13:30:00',
        percipType: 'rain',
        percip: null,
        conditions: 'cloudy',
        outter: 'white long sleeve',
        reflective: null,
        top: 'long light blue shirt',
        arms: null,
        bottom: 'heavy pants',
        socks: null,
        head: 'headband',
        hands: null,
        neck: null,
        activity: 'biking',
        intensity: '18 holes',
        rate: 'test',
        active: false,
        addedOn: '03/01/2016'
      },
      {
        temperature: 56,
        feelsLike: null,
        wind: 2,
        humidity: null,
        timeOfDay: '13:30:00',
        percipType: 'rain',
        percip: null,
        conditions: 'cloudy',
        outter: 'white long sleeve',
        reflective: null,
        top: 'long light blue shirt',
        arms: null,
        bottom: 'heavy pants',
        socks: null,
        head: 'headband',
        hands: null,
        neck: null,
        activity: 'hiking',
        intensity: '18 holes',
        rate: 'test'
      }]
    }
};

// WardrobeData.getWardrobe().then( function ( resp ) {
//   console.log("Response", resp);
//   $scope.data = resp;
// });
