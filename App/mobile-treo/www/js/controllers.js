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

  /////////////////////////////////

  $scope.mygoptions = {
    lineMode: "cardinal",
    series: [
      {
        y: "val_0",
        label: "Temperature",
        type: "area",
        color: "#bcbd22",
        axis: "y",
        thickness: "1px",
        id: "series_0"
      },
      {
        y: "val_1",
        label: "Humidity",
        type: "area",
        color: "#17becf",
        axis: "y",
        id: "series_1"
      },
      {
        y: "val_2",
        label: "Threshold",
        color: "#9467bd",
        axis: "y",
        type: "line",
        thickness: "1px",
        id: "series_2"
      }
    ],
    stacks: [],
    // axes: {x: {type: "date", key: "x"}, y: {type: "linear"}},
    axes: {x: {type: "linear", key: "x"}, y: {type: "linear"}},
    tension: 0.7,
    tooltip: {
      mode: "scrubber"
      // ,
      // formatter: function (x, y, series) {
      //  return moment(x).fromNow() + ' : ' + y;
      // }
    },
    drawLegend: true,
    drawDots: true,
    // columnsHGap: 5
  };


  //////////////////////////////////////

  $scope.mygdata = [];

  // get all the readings first and bind it to the $scope.readings object
  // use the function we created in our service
  // GET ALL READINGS ====================================================
  Reading.get()
    .success(function(data) {
      $scope.readings = data;
      $scope.loading = false;
      var index = 0;
      $.each(data,function(key,val){
        // var t = val.Stamp.split(/[- :]/);
        // var d = moment(val.Stamp+"Z");
        if (index<10){
          var dateStr = "2014-10-";
          dateStr += index+20;
        }
        else{
          var dateStr = "2014-11-";
          dateStr += index-8;
        }
        dateStr += " 12:00:00Z";
        var d = moment(dateStr);
        index+=1;
        $scope.mygdata.push({x:index,val_0:val.Temp,val_1:val.Humid,val_2:5});
      })
    });
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
