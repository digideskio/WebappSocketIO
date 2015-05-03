'use strict';

app.controller('navCtrl', function($scope, $location) {
	$scope.navClass = function (page) {
      var currentRoute = $location.path().substring(1) || 'chat';
      return page === currentRoute ? 'active' : '';
  };
});