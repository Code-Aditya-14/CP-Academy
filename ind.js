var hand;
var rate=0;

function submitted()
{
    hand = document.getElementById("handle-name").value;
    console.log(hand);
    const api_url='https://codeforces.com/api/user.info?handles='+hand;
    var ok;
    async function getHandle()
    {
        const reponse=await fetch(api_url);
        const data=await reponse.json();
        ok=data.status;
        console.log(ok);
        if(ok==="OK")
        {
            console.log(hand);
            var res=data.result;
            var res1=res[0];
            rate=res1.rating;
	    console.log(rate);
            localStorage.setItem("rating", rate);
            window.location="main.html";
        }
        else
        {
            console.log(hand);
            var abcd=document.getElementById("invalid");
            console.log(abcd);
            abcd.innerHTML="Invalid Codeforces Handle! Please try again."
        }
    }
    getHandle();
}