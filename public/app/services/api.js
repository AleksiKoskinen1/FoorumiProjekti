FoorumApp.service('Api', function($http){
  // Aihealueiden Api-funktiot
  this.getTopics = function(){
    // Hae kaikki aihealueet toteuttamasi Api:n polusta /topics
    return $http.get('/topics');
    
  }
  this.getTopic = function(id){
    // Hae annetulla id:llä varastettu aihealue toteuttamasi Api:n polusta /topics/:id
    return $http.get('/topics/'+id+'');  
  }
  this.addTopic = function(topic, desc){
    // Lisää annettu aihealue lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /topics
    return $http.post('/topics', { name: ""+topic, description: ""+desc });  

  }

  // Viestien Api-funktiot
  this.getMessage = function(id){
    return $http.get('/messages/'+id+'');
  }
  this.addMessage = function(title, content, topicId){
    // Lisää annettu viesti lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /topics/:topicId/message
     return $http.post('/topics/'+topicId+'/message', { title: ""+title, content: ""+content });  
  }

  // Vastausten Api-funktiot
  this.addReply = function(reply, messageId){
    // Lisää annettu vastaus lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /messages/:messageId/reply
    return $http.post('/messages/'+messageId+'/reply', { content: ""+reply });  
  }

  // Käyttäjän Api-funktiot
  this.login = function(user){
    // Tarkista käyttäjän kirjautuminen lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /users/authenticate
    return $http.post('/users/authenticate', { username: user.username, password: user.password}); 
  }
  this.register = function(user){
    // Lisää annettu käyttäjä lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /users
    return $http.post('/users', { username: user.username, password: user.password}); 
  }
  this.getUserLoggedIn = function(){
    // Hae kirjautunut käyttäjä toteuttamasi Api:n polusta /users/logged-in
    return $http.get('/users/logged-in');
  }
  this.logout = function(){
    return $http.get('/users/logout');
  }
});
