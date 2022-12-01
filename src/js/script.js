function vote(answer)
{
    surrenderBoxVote = document.getElementsByClassName("vote-unvoted")[0];
    if(answer == true)
        surrenderBoxVote.className = "vote-yes";
    else
        surrenderBoxVote.className = "vote-no";

    hideSurrenderButton(answer);
}

function hideSurrenderButton(answer)
{
    surrenderBox = document.getElementById("surrender-box-button");
    surrenderBox.style.display = "none";
    surrenderText = document.getElementById("surrender-result");
    surrenderText.style.display = "block";

    voteResult = document.getElementById("vote-result");

    voteResult.innerHTML = answer ? "You voted yes." : "You voted no.";
}