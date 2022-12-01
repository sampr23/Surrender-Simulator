function vote(answer)
{
    surrenderBoxVote = document.getElementsByClassName("vote-unvoted")[0];
    secondBox = document.getElementsByClassName("vote-unvoted")[1];
    if(answer == true)
    {
        surrenderBoxVote.className = "vote-yes";
        setTimeout(function(){secondBox.className = "vote-no";}, 1000);
    }
    else
    {
        surrenderBoxVote.className = "vote-no";
        setTimeout(function(){secondBox.className = "vote-yes";}, 1000);
    }

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

    playVideo();
}

function playVideo()
{
    var video = document.getElementById("myVideo");
    video.play();
}