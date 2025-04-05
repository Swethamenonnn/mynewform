function clickSubmitButton(event)
{
    event.preventDefault();
    const username= document.getElementById("username").value;
    const welcomeMessage= document.getElementById("welcomeMessage");
    welcomeMessage.textContent= 'welcome,' +username + '!';
    welcomeMessage.style.display= 'block';
}
