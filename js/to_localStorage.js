'use strict';
var qq = 4; // Quantity of Questions
var topic = [
  {
  top: "Какая температуа кипения воды?",
  ask: " Вам необходим выбрать один из вариантов ",
  answer1: '60 градусов',
  answer2: '80 градусов',
  answer3: '100 градусов',
  true_answer: '001'
  },
  {
  top: " Сколько метров в километре? ",
  ask: " Вам необходим выбрать один из варианто ",
  answer1: '100 метров',
  answer2: '1000 метров',
  answer3: '500 метров',
  true_answer: '010'
  },
   {
  top: " В каком объекте хранятся все jQuery-функции? ",
  ask: " Вам необходим выбрать один из вариантов ",
  answer1: 'jQuery.fn',
  answer2: 'jQuery.prototype',
  answer3: 'Query.function',
  true_answer: '100'
  },
   {
  top: "Чему равен результат вызова в этом примере?",
  ask: "function f() {<br>var a = 5;<br>return new Function('b', " +
  "'return a + b');<br>}<br>alert( f()(1) );",
  answer1: 'Будет ошибка.',
  answer2: 1,
  answer3: 6,
  true_answer: '100'
  }
];
var str= JSON.stringify(topic);
localStorage.setItem('one', str);

// for testing answers
var str_true_answer = "";
for (var i = 0; i < qq; i++){
str_true_answer +=  topic[i].true_answer;
}
localStorage.setItem('two', str_true_answer);

// to modal window
var strAnswer = "<h2>Правильные ответы:</h2>" + "<br>";
for (var i = 0; i < qq; i++){
  var tmpObj = [topic[i].answer1, topic[i].answer2, topic[i].answer3];
    strAnswer += "" + (i + 1) + ":"+ "<br>";
  for (var j = 0; j < tmpObj.length; j++){
   strAnswer += (topic[i].true_answer[j] == 0) ? "" : tmpObj[j] + '<br>' ;
  }
  strAnswer += '<hr>';
}
localStorage.setItem('three', strAnswer);
