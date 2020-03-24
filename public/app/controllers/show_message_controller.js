FoorumApp.controller('ShowMessageController', function($scope, $routeParams, $location, Api){
    
    Api.getMessage($routeParams.id).success(function(message){
        
        if($scope.userLoggedIn != null)
          $scope.myVar = true;
        else if($scope.userLoggedIn == null)
          $scope.myVar = false;
        
        $scope.messageTitle = message.title;
        $scope.messageContent = message.content;
        
        var keys = Object.keys(message.Replies);
        $scope.mlenght = keys.length;
        
        $scope.replies = message.Replies;
      
    });
    $scope.addReply = function() {
        Api.addReply($scope.newReply.content, $routeParams.id).success(function(reply){
            
            Api.getMessage($routeParams.id).success(function(message){
                
                if($scope.userLoggedIn != null)
                    $scope.myVar = true;
                else if($scope.userLoggedIn == null)
                    $scope.myVar = false;
                    
                var keys = Object.keys(message.Replies);
                $scope.mlenght = keys.length;
                $scope.replies = message.Replies;
                $scope.newReply.content = "";
            });
      });
    };
});
