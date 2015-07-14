angular.module('starter.controllers', [])

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
});
