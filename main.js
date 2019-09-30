function calculations() 
{
    
    //Passes string 
    const string1 = document.querySelector("#string1").value
    const string2 = document.querySelector("#string2").value
    const string3 = document.querySelector("#string3").value

    //Doing all the simple calculations
    initial = string1
    if(string2.length < initial.length)
    {
        initial = string2
    }
    if(string3.length < initial.length)
    {
        initial = string3
    }

    //Modifying HTML page with the calculations output
    document.querySelector('#result').innerHTML = initial
}
document.querySelector('#calculate').addEventListener('click', calculations)


