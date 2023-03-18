var player1value =  localStorage.getItem("player1");
var player2value =  localStorage.getItem("player2");
    
function addUser() {
    localStorage.setItem("player1", document.getElementById("player1"));
    localStorage.setItem("player2", document.getElementById("player2"));
    var url = "quiz_game_page.html";
    window.location = url;
}

function send() {
    number1 = document.getElementById("input1").value;
    number2 = document.getElementById("input2").value;
    actual_answer = parseInt(number1) * parseInt(number1);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("input1").value = ""
    document.getElementById("input2").value = ""
}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
         if(answer_turn == "player1")
         {
            update_player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
            question_turn = "player1";
            answer_turn = "player2";
        }
        else
        {
            update_player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
            question_turn = "player2";
            answer_turn = "player1";
        }
    }

    document.getElementById("player1_name").value = player1value;
    document.getElementById("player2_name").value = player2value;
    document.getElementById("player1_score").value = update_player1_score;
    document.getElementById("player2_score").value = update_player2_score;

}
