$document.ready(function() {
    console.log('test');
    $('#next_button').click(next_question);
    $('#complete_quiz').click(check);
    $('#restart_button').click(function() {
        $('#quiz')[0].reset();
        $('#restart_button').hide();
        $('#question1').show();
        $('#next_button').show();
        $('#quiz_complete').hide();
    });

    $('#question2').hide();
    $('#question3').hide();
    $('#question4').hide();
    $('#question5').hide();

    $('#complete_quiz').hide();
    $('#quiz_complete').hide();
    $('restart_button').hide();

    function next_question() {

        const questionOne = (document).quiz.question1.value;
        console.log('In next question ' + questionOne);
        if (questionOne === 'Book' || questionOne === 'Exercise') {
            $('#question1').hide();
            $('#question2').show();
        } else if (questionOne === 'Beach' || questionOne === 'Sports') {
            $('#question1').hide();
            $('#question3').show();
        }

        const questionTwo = (document).quiz.question2.value;
        console.log('In the next question ' + questionTwo);
        if (questionTwo === 'Ruby' || questionTwo === 'Diamonds') {
            $('#question2').hide();
            $('#question3').show();
        } else if (questionTwo === 'Opals' || questionTwo === 'Sapphires') {
            $('#question2').hide();
            $('#question4').show();
        }

        const questionThree = (document).quiz.question3.value;
        console.log('In nex question ' + questionThree);
        if (questionThree === 'Determined' || questionThree === 'Procastinator') {
            $('#question3').hide();
            $('#question4').show();
        } else if (questionThree === 'Witty' || questionThree === 'Loyal') {
            $('#question3').hide();
            $('#question5').show();
            $('#complete_survey').show();
            $('#next_button').hide();
        }

        const questionFour = (document).quiz.question4.value;
        console.log('In next question ' + questionFour);
        if (questionFour === 'Honolulu' || questionFour === 'Auckland') {
            $('#question4').hide();
            $('#question5').show();
            $('#complete_quiz').show();
            $('#next_button').hide();
        } else if (questionFour === 'Paris' || questionFour === 'Dublin') {
            $('#question4').hide();
            $('#question5').show();
            $('#complete_quiz').show();
            $('#next_button').hide();
        }
    }

    function check() {
        console.log("Complete Survey Click");

        const questionOne = document.quiz.question1.value;
        const questionTwo = document.quiz.question2.value;
        const questionThree = document.quiz.question3.value;
        const questionFour = document.quiz.question4.value;
        const questionFive = document.quiz.question5.value;
        let correct = 0;

        if (questionOne === 'Book' || questionOne === 'Exercise') {
            correct++;
        } else {
            correct += 2;
        }
        if (questionTwo === 'Ruby' || questionTwo === 'Opals') {
            correct++;
        } else {
            correct += 2;
        }
        if (questionThree === 'Witty' || questionThree === 'Procrastinator') {
            correct++;
        } else {
            correct += 2;
        }
        if (questionFour === 'Paris' || questionFour === 'Dublin') {
            correct++;
        } else {
            correct += 2;
        }
        if (questionfive === 'Fall' || questionFive === 'Spring') {
            correct++;
        } else {
            correct += 2;
        }

        let messages = ['It looks like the language Ruby is right up your alley!', 'I think JavaScript would be a great place to start!', 'The language Python would be a good starting point!'];

        document.getElementById('after_completion').style.visibility = 'visible';
        $('#quiz_complete').show();
        document.getElementById('quiz_complete').innerHTML = messages[correct % 3];
        $('#question5').hide();
        $('#complete_quiz').hide();
        $('#restart_button').show();
    }
});