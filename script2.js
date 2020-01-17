var questions = [

    {
      title: "hi what is my name?",
      choices: ["daniel", "bob", "prince", "michael"],
      answer: "daniel"
    },
    {
      title: "how old am i?",
      choices: ["10", "20", "30", "40"],
      answer: "30",
    },
  
  ]
  
  
  var answer1 = document.querySelector("#answer1");
  var question = document.querySelector("#question");
  var timer = document.querySelector(".timer");
  var secondsLeft = 99;
  timer.textContent = secondsLeft;
  var finalTime = ""
  timeLeft = ""
  
  

  
  $("#start").on("click", function startTimer() {
 
    var timeLeft = setInterval(function () {
      secondsLeft--;
      timer.textContent = secondsLeft;
      finalTime = secondsLeft
     
  
    }, 1000);
  
    $(this).hide();

  
  
  
    displayQuestion1()
  });
  function displayQuestion1() {
    $("#question").text(questions[0].title);
  

  
    for (var i = 0; i < questions[0].choices.length; i++) {
  
      var answersBtns = $("<button>");

      answersBtns.addClass("multiple-choice")
      answersBtns.text(questions[0].choices[i]);
  

      answersBtns.attr("value", questions[0].choices[i]);
  
  
  
      $("#answers").append(answersBtns);
  
  
    }
  }

  var userChoice = ""
  

  $("#answers").on("click", function (event) {
 
  
    var userChoice = event.target.value

  

  
  
    if (userChoice === questions[0].answer) {

      $("#answers").empty();
      $("#question").empty();
    
      displayQuestion2()
      function displayQuestion2() {
        $("#question").text(questions[1].title);
        for (var i = 0; i < questions[1].choices.length; i++) {
          var answersBtns = $("<button>");
          answersBtns.addClass("multiple-choice")
          answersBtns.text(questions[1].choices[i]);
          answersBtns.attr("value", questions[1].choices[i]);
          $("#answers1").append(answersBtns);
        }
  
      }
    }
  
    else {
      wrongAnswer();
  
    
      function wrongAnswer() {
        penalty();
        function penalty() {
          secondsLeft -= 10;
        }
      }
    }
  });
  
  $("#answers1").on("click", function (event) {
    var userChoice = event.target.value;
 
    if (userChoice === questions[1].answer) {
 
      $("#answers1").empty();
      $("#question").empty();
      $(".timer").hide(); 
      function saveScore ()
      {
   
        localStorage.setItem("timer", finalTime)
        var displayScore = localStorage.getItem("timer");
        $("#answers2").text("you finished in " + displayScore + ", congratulation")

        clearInterval(secondsLeft);
      }

      saveScore();
      var highScores = $("<button>");
      displayHighScores()
      

    }
  
  
  else {
    wrongAnswer();
  
    
  
    function wrongAnswer() {
      penalty();
      function penalty() {
        secondsLeft -= 10;
      }
    }
  }
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  