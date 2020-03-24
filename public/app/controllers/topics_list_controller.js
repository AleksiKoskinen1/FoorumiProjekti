FoorumApp.controller('TopicsListController', function($scope, $location, Api){
    Api.getTopics().success(function(messages){
        if($scope.userLoggedIn != null){
            $scope.myVar = true;
        }
        else if($scope.userLoggedIn == null){
            $scope.myVar = false;
        }
        $scope.topics = messages;
    });
    
    $scope.addTopic = function() {
        Api.addTopic($scope.newTopic.name, $scope.newTopic.description).success(function(messages){
            $location.path("/topics/"+messages.id+"");  
        });
    };
});
