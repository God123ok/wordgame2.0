player1_name = localStorage.getItem("player1_name")
player2_name = localstorage.getitem("player2_name")

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").inerHTML = player1_score ;
document.getElementById("player2_score").inerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name ;
document.getElementById("player_question").innerHTML = "Question Turn -" + player2_name ;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(removez-charAt3);

    question_word = "<h4 id='word_display'> Q. " +remove_charAt3+"</h4>;
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check().>check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case - " + answer);
    if(answer == word)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score =1;
            document.getElementById("player1_score").innerHTML = player1_score;

        }
    }   else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        
        }
    {
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn -"

    }
    else
    {
     question_turn = "player1"
     document.getElementById("player_question").innerHtml = "Question Turn -"


    }

    if(answer_turn == "player1")
    {
        answer_turn == "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;

    }
    else
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML + "Answer Turn -" + player1_name

    }

    document.getElementById("output").innerHTML = "";



}

