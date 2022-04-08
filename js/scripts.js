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


    }
});