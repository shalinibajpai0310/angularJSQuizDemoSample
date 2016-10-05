// Code goes here

var app = angular.module('myApp',[]);

app.factory('dataService', function() {
  var dataObj = [{
    questionNo: 1,
    question: "Who is Prime Minister of the United Kingdom?",
    choices: ["Theresa May", "Gordon Brown", "Winston Churchill", "Tony Blair"],
    correctAnswer: 0
  }, {
    questionNo: 2,
    question: "Who is Prime Minister of the India?",
    choices: ["Theresa May", "Narendra Modi", "Winston Churchill", "Tony Blair"],
    correctAnswer: 1
  },
   {
    questionNo: 3,
    question: "How many Indian Prime Ministers have died while in office?",
    choices: [1, 2, 3, 4],
    correctAnswer: 2
  }
  ];

  return dataObj;
})
app.controller('myCtrl', function($scope, dataService) {
  $scope.ansNotCorrect = true;
  $scope.activeQuestion = 0;
  $scope.allQuestions = dataService;
  var quesAnswered = 0;

  $scope.questionAnswered = function() {
    $scope.activeQuestion++;
    
    if($scope.activeQuestion === dataService.length){
      $scope.ifEnd = true;
    }
  }

  $scope.saveOption = function(index,correctAnswer) {
    if( index === correctAnswer ){
       quesAnswered++;
      $scope.ansNotCorrect = false;
      alert("correct Answer");
    }else{
      alert("Wrong Answer");
      $scope.ansNotCorrect = true;
    }
     var length = dataService.length;
     if(length === quesAnswered){
    $scope.ifEnd = true;
   }
  }
 
 $scope.restart = function(){
   window.location.reload();
 }
 
 $scope.exit = function(){
   window.close();
 }
  
});