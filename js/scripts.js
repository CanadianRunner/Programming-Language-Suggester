$document.ready(function() {
            console.log('test');
            $('#next_button').click(next_question);
            $('#complete_quiz').click(check);
            $('#restart_button').click(function() {
                $('#quiz')[0].reset();
                $('#restart_button').hide();
                $('#question1').show();
                $('#next_button').show();
                $('#survey_complete').hide();

            });