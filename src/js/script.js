var gameDone = false;


//Function to turn the divs into voted divs depending on the answer
function vote(answer)
{
    surrenderBoxVote = document.getElementsByClassName("vote-unvoted")[0];
    secondBox = document.getElementsByClassName("vote-unvoted")[1];
    if(answer == true)
    {
        surrenderBoxVote.className = "vote-yes";
        setTimeout(function(){
            secondBox.className = "vote-no";
            secondBox.className = "vote-yes";
            for (var index = 0; index < 3; index++) {
                (function(index) {
                    setTimeout(function() { fillVote(index); }, index * 500);
                })(index);
            }
        }, 1000);
    }
    else
    {
        surrenderBoxVote.className = "vote-no";
        setTimeout(function(){
            secondBox.className = "vote-yes";
            for (var index = 0; index < 3; index++) {
                (function(index) {
                    setTimeout(function() { fillVote(index); }, index * 500);
                })(index);
            }
        }, 1000);
    }
    hideSurrenderButton(answer);
}


//Turn the div into a vote-yes div
function fillVote(index)
{
    document.getElementsByClassName("vote-unvoted")[0].className = "vote-yes";
}

//Hide the surrender Yes or No button and show the result
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

//Play the video in the backGround
function playVideo()
{
    var video = document.getElementById("myVideo");
    video.play();
}

//Function to show the input in the chat
function showChatBox(event){
    var chatBox = document.getElementById("chat-box");
    var chatBoxInput = document.getElementById("chat-input");
    if (event.key === "Enter" && chatBox.style.display == "none" && gameDone == false) {
        
        chatBox.style.display = "block";
        chatBoxInput.focus();
    }
    else if(event.key === "Enter" && gameDone == false)
    {
        checkChatInput(event);
    }
    
}

//Function to check if the input is a surrender command
function checkChatInput(event){
    var chatBoxInput = document.getElementById("chat-input");
    var surrenderBox = document.getElementById("surrender-box");
    var chatBox = document.getElementById("chat-box");

    if(event.key === "Enter" && chatBoxInput.value.toLowerCase() != "/ff" && chatBoxInput.value.toLowerCase() != "/concede" && chatBoxInput.value.toLowerCase() != "/surrender"){
        chatBox.style.display = "none";
        chatBoxInput.value = null;
    }
    else if(event.key == "Enter" && (chatBoxInput.value.toLowerCase() == "/ff" || chatBoxInput.value.toLowerCase() == "/concede" || chatBoxInput.value.toLowerCase() == "/surrender"))
    {
        chatBox.style.display = "none";
        surrenderBox.style.display = "block";
        gameDone = true;
    }
}