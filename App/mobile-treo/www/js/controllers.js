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
      label: "Personal",
      type: "area",
      color: "#bcbd22",
      axis: "y",
      thickness: "1px",
      id: "series_0"
    },
    {
      y: "val_1",
      label: "City-wide",
      type: "area",
      color: "#17becf",
      axis: "y",
      id: "series_1"
    },
    {
      y: "val_2",
      label: "Healthy",
      color: "#9467bd",
      axis: "y",
      type: "line",
      thickness: "1px",
      id: "series_2"
    }
  ],
  stacks: [],
  axes: {x: {type: "date", key: "x"}, y: {type: "linear"}},
  tension: 0.7,
  tooltip: {
    mode: "scrubber",
    formatter: function (x, y, series) {
     return moment(x).fromNow() + ' : ' + y;
    }
  },
  drawLegend: true,
  drawDots: true,
  // columnsHGap: 5
};


//////////////////////////////////////

  $scope.mygdata = [];



  // loading variable to show the spinning loading icon
  $scope.loading = true;


  for (i = 0; i < 6; i++) {
    // var t = val.created_at.split(/[- :]/);
    if (i<10){
    var dateStr = "2014-10-";
    dateStr += i+20;
    }
    else{
      var dateStr = "2014-11-";
      dateStr += i-8;
    }
    dateStr += " 12:00:00Z";
    var d = moment(dateStr);
    var temp1 = Math.floor(Math.random() * 10) + 0;
    var temp2 = Math.floor(Math.random() * 10) + 0;
    var temp3 = Math.floor(Math.random() * 10) + 0;
    // console.log(""+d+", "+temp+"\n")
    $scope.mygdata.push({x:d,val_0:temp1,val_1:temp2,val_2:5});
                
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
