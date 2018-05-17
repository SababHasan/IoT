function myFunction()
{
	var lower, upper, t;
    t = 25.5;
    lower = 20.0;
    upper = 30.0;
	if(t<upper && t>lower)
    {
    	document.getElementById("demo").innerHTML = "Temperature Okay... " + t;
    }
    else
    {
        window.alert("You Are Doomed...!");
    }
}