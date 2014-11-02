angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('OverviewCtrl', function($scope, $http, Reading) {
  $scope.mygdata = [];

  // Column
  $scope.mygoptions = {
    axes: {x: {type: "date", key: "x"}, y: {type: "linear", min: "0"}},
        tooltip: {
          mode: "scrubber",
      formatter: function (x, y, series) {
              return moment(x).fromNow() + ' : ' + y;
          }
        },
        lineMode: 'linear',
        tension: 0.7,
        series: [
        {
            y: "y",
            label: "Temperature",
            color: "#9467bd",
            axis: "y",
            type: "line",
            thickness: "2px",
            id: "series_0"
        }],
      drawLegend: true,
      drawDots: false,
      columnsHGap: 5
  };

  // loading variable to show the spinning loading icon
  $scope.loading = true;
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
