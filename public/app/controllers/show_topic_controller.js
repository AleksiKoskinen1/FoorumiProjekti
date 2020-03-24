FoorumApp.controller('ShowTopicController', function($scope, $routeParams, $location, Api){
    Api.getTopic($routeParams.id).success(function(topic){  
      
      if($scope.userLoggedIn != null){
          $scope.myVar = true;
      }
      else if($scope.userLoggedIn == null){
          $scope.myVar = false;
      }
      
      $scope.topicName = topic.name;
      $scope.topicDescription = topic.description;

      var keys = Object.keys(topic.Messages); //Ottaa topikkien määrän. (Eli ottaa jokaisen topicin avaimen määrän)
      
      $scope.mlenght = keys.length;  //Laskee montako topiccia on avaimista. 
      $scope.messages = topic.Messages;
     
    });
    $scope.addMessage = function() {
        Api.addMessage($scope.newMessage.title, $scope.newMessage.content, $routeParams.id).success(function(messages){
            
          $location.path("/messages/"+messages.id+""); 
       
      });
    };
    
});

