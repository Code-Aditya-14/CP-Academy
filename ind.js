var hand;
var rate=0;

function submitted()
{
    hand = document.getElementById("handle-name").value;
    const api_url=' https://codeforces.com/api/user.rating?handle='+hand;
    var ok;
    async function getHandle()
    {
        const reponse=await fetch(api_url);
        const data=await reponse.json();
        ok=data.status;
        if(ok==="OK")
        {
            var res=data.result;
            var len=res.length;
            if(len===0)
            {
                localStorage.setItem("rating", 0);
            }
            else
            {
                var res1=res[len-1];
                rate=res1.newRating;
                localStorage.setItem("rating", rate);
            }
            window.location="main.html";
        }
        else
        {
            var inv=document.getElementById("invalid");
            inv.innerHTML="Invalid Codeforces Handle! Please try again."
        }
    }
    getHandle();
}