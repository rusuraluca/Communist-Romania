(function() 
 {
  var allQuestions = [{
    question: " Cate etape a avut epoca comunistă în România? ",
    options: [" 1 ", " 5 ", " 3 ", " 5 "],
    answer: 3
  }, {
    question: " Procesul de colectivizare a agriculturii debutează în anul",
    options: [" 1948", " 1952", " 1962", " 1949"],
    answer: 4
  }, {
    question: " Titulatura statului devine Republica Socialistă România în anul",
    options: [" 1965", " 1971", " 1967"," 1968"],
    answer: 1
  },{
    question: " România întoarce armele împotriva Germaniei naziste și se alătură Națiunilor Unite la data de",
    options: [" 19 noiembrie 1946", " 9 octombrie 1944", " 23 august 1944", " 6 martie 1945"],
    answer: 3
  }, {
    question: " România este vizitată în 1969 de președintele?",
    options: [" Marii Britanii", " Italiei", " SUA", " Franței"],
    answer: 3
  },{
    question: " România proclamă principiile suveranității și independenței naționale, neamestecului în treburile interne, avantajului și respectului reciproc în documentul",
    options: [" Constituția din 1948", " ”Tezele din iulie”", " Constituția din 1952", " ”Declarația din aprilie”"],
    answer: 0
  },{
    question: " Liderul comunist Gh.Gheorghiu Dej aprobă în 1956 intervenția trupelor sovietice în",
    options: [" Polonia", " Ungaria", " Cehoslovacia", " Iugoslavia"],
    answer: 2
  },{
    question: " Din cadrul liniei moscovite a partidului unic (PMR) făcea parte și",
    options: [" Ana Pauker", " Gheorghe Gheorghiu Dej", " Lucrețiu Pătrășcanu", " Dr. Petru Groza"],
    answer: 1
  }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();