angular.module('starter.controllers', ['baiduMap'])

.controller('DashCtrl', function($scope) {})

.controller('PostsCtrl', function($scope, Chats){
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatThreadCtrl', function($scope, $stateParams, Chats) {
  var chats = Chats.all();
  var messageOptions = new Array(chats.length);
  for (var i = 0; i < chats.length; i++) {
    var chat = chats[i];
    var message = {content:chat.contentImg==null ? '<p>' + chat.lastText + '</p>' : '<img src="' + chat.contentImg + '"></img>'};
    messageOptions[i] = message;
  }

  $scope.model = {
    chat: Chats.get($stateParams.chatId),
    messages: messageOptions
  };
})

.controller('PostDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
  var longitude = 121.466609;
  var latitude = 31.236354;
  $scope.mapOptions = {
      center: {
          longitude: longitude,
          latitude: latitude
      },
      zoom: 15,
      city: '上海',
      markers: [{
          longitude: longitude,
          latitude: latitude,
          icon: 'http://img.coolwp.com/wp-content/uploads/2015/04/48-map-marker.png',
          width: 48,
          height: 48,
          title: '现在的',
          content: '海洋小区'
      }]
  };
  document.addEventListener("deviceready", function(){
    navigator.geolocation.getCurrentPosition(function(position){
      // alert('Latitude: '          + position.coords.latitude          + '\n' +
      //     'Longitude: '         + position.coords.longitude         + '\n' +
      //     'Altitude: '          + position.coords.altitude          + '\n' +
      //     'Accuracy: '          + position.coords.accuracy          + '\n' +
      //     'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
      //     'Heading: '           + position.coords.heading           + '\n' +
      //     'Speed: '             + position.coords.speed             + '\n' +
      //     'Timestamp: '         + position.timestamp                + '\n');
      $scope.mapOptions.markers[0].longitude = position.coords.longitude;
      $scope.mapOptions.markers[0].latitude = position.coords.latitude;
      $scope.mapOptions.center.longitude = position.coords.longitude;
      $scope.mapOptions.center.latitude = position.coords.latitude;
    },
    function(error){
      alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
    });
  }, false);

});
