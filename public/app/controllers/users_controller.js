FoorumApp.controller('UsersController', function($scope, $location, Api){
  // Toteuta kontrolleri tähän
    $scope.loginUser = function() {
        Api.login({ username: $scope.newLogin.user , password: $scope.newLogin.password}).success(function(user){
            $location.path("/topics/");  
        }).error(function(){
            $scope.errorMessage = 'Väärä käyttäjätunnus tai salasana!';
        //    alert('Väärä käyttäjätunnus tai salasana!');
        });
    }
    
    $scope.addUser = function() {
        if($scope.name != undefined && $scope.password != undefined && $scope.passwordAgain != undefined){
            if(($scope.password == $scope.passwordAgain) && ($scope.password != "" && $scope.passwordAgain != "")){
                Api.register({ username: $scope.name, password: $scope.password}).success(function(user){
                    $location.path("/topics/");  
                }).error(function(){
                    $scope.errorMessage = 'Käyttäjätunnus on jo olemassa!';
                //    alert('Väärä käyttäjätunnus tai salasana!');
                });
            }
            else
             $scope.errorMessage = 'Salasanat eivät täsmää!';
        }
        else{
            $scope.errorMessage = 'Täytä jokainen kohta!';
        }
    }
    
});
