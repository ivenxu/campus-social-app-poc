angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '老峰',
    sex: 'm',
    age: 34,
    occupation: '码农',
    lastText: '最近临港有啥好玩的?',
    face: 'img/laofeng.jpg'
  }, {
    id: 1,
    name: '疾雷',
    sex: 'm',
    age: 35,
    occupation: '99级学霸',
    contentImg: 'img/public.png',
    lastText: 'Hey, it\'s me',
    face: 'img/jilei.jpg'
  },{
    id: 2,
    name: '张教授',
    sex: 'm',
    age: 28,
    occupation: '近现代史专家',
    lastText: 'I should buy a boat',
    face: 'img/jiaoshou.jpg'
  }, {
    id: 3,
    name: '二表姐',
    sex: 'f',
    age: 16,
    occupation: '未知',
    lastText: 'Look at my mukluks!',
    face: 'img/erbiaojie.jpg'
  }, {
    id: 4,
    name: '薛老板',
    sex: 'm',
    age: 18,
    occupation: '财经人士',
    lastText: 'This is wicked good ice cream.',
    face: 'img/xuelaoban.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
