app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/chat', {
        templateUrl: 'views/chat.html',
        controller: 'chatCtrl'
      }).
      when('/photos', {
        templateUrl: 'views/photos.html',
        controller: 'photosCtrl'
      }).
       when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'settingsCtrl'
      }).
      otherwise({
        redirectTo: '/chat'
      });
  }]);