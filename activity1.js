var score = 0;

function updateScore()
{
    score =  score + 1;
    document.getElementById("score").innerHTML = "score : "+score;
}

function saveScore()
{
    localStorage.setItem("points",score);
}

function nextPage()
{
    window.location = "game_login.html";
}