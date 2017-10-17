function check(){

  var question1=document.quiz.question1.value;
  var question2=document.quiz.question2.value;
  var question3=document.quiz.question3.value;
  var question4=document.quiz.question4.value;
  var question5=document.quiz.question5.value;
  var question6=document.quiz.question6.value;
  var question7=document.quiz.question7.value;
  var question8=document.quiz.question8.value;
  var question9=document.quiz.question9.value;
  var correct = 0;

  var messages = ["Smooth!", "How can I say this...", "Do I have some courses for you!"];
  var pictures = ["img/smooth.gif", "img/meh.gif", "img/oof.gif"];
  var range;
    if (correct < 5){
      range = 2;
    }
    if (correct > 0 && correct < 4){
      range = 1;
    }
    if (correct > 5){
      range = 0;
    }

  document.querySelector("#afterSubmit").style.visibility="visible";
  document.querySelector("#message").innerHTML = messages[range];
  document.querySelector("#picture").src = pictures[range];

}
