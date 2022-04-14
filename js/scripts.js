$(document).ready(function() {
    $('#next_button').click(next_question);
    $('#complete_survey').click(check);
    $('#restart_button').click(function() {
        $("#survey")[0].reset();
        $("#restart_button").hide();
        $("#question1").show();
        $("#next_button").show();
        $("#survey_complete").hide();

    });


    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    $("#question5").hide();


    $("#complete_survey").hide();
    $("#survey_complete").hide();
    $("#restart_button").hide();

    function next_question() {

        const questionOne = (document).survey.question1.value;
        if (questionOne == "Book" || questionOne == "Exercise") {
            $("#question1").hide();
            $("#question2").show();
        } else if (questionOne == "Beach" || questionOne == "Sports") {
            $("#question1").hide();
            $("#question3").show();
        }

        const questionTwo = (document).survey.question2.value;
        if (questionTwo == "Ruby" || questionTwo == "Diamonds") {
            $("#question2").hide();
            $("#question3").show();
        } else if (questionTwo == "Opals" || questionTwo == "Sapphires") {
            $("#question2").hide();
            $("#question4").show();
        }

        const questionThree = (document).survey.question3.value;
        if (questionThree == "Determined" || questionThree == "Procastinator") {
            $("#question3").hide();
            $("#question4").show();
        } else if (questionThree == "Witty" || questionThree == "Loyal") {
            $("#question3").hide();
            $("#question5").show();
            $("#complete_survey").show();
            $("#next_button").hide();
        }

        const questionFour = (document).survey.question4.value;
        if (questionFour == "Honolulu" || questionFour == "Auckland") {
            $("#question4").hide();
            $("#question5").show();
            $("#complete_survey").show();
            $("#next_button").hide();
        } else if (questionFour == "Paris" || questionFour == "Dublin") {
            $("#question4").hide();
            $("#question5").show();
            $("#complete_survey").show();
            $("#next_button").hide();
        }

    }

    function check() {

        const questionOne = document.survey.question1.value;
        const questionTwo = document.survey.question2.value;
        const questionThree = document.survey.question3.value;
        const questionFour = document.survey.question4.value;
        const questionFive = document.survey.question5.value;
        let correct = 0;


        if (questionOne == "Book" || questionOne == "Exercise") {
            correct++;
        } else {
            correct += 2;
        }

        if (questionTwo == "Ruby" || questionTwo == "Opals") {
            correct++;
        } else {
            correct += 2;
        }

        if (questionThree == "Witty" || questionThree == "Procrastinator") {
            correct++;
        } else {
            correct += 2;
        }

        if (questionFour == "Paris" || questionFour == "Dublin") {
            correct++;
        } else {
            correct += 2;
        }

        if (questionFive == "Fall" || questionFive == "Spring") {
            correct++;
        } else {
            correct += 2;
        }


        let messages = ["It looks like the language Ruby is right up your alley!", "I think JavaScript would be a great place to start!", "The language Python would be a good starting point!"];

        document.getElementById("after_completion").style.visibility = "visible";
        $('#survey_complete').show();
        document.getElementById("survey_complete").innerHTML = messages[correct % 3];
        $("#question5").hide();
        $("#complete_survey").hide();
        $("#restart_button").show();
    }
});