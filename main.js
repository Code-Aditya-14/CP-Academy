var prev_b=0;

function applied()
{
    rate=localStorage.getItem('rating');
    console.log(rate);

    var tag=document.getElementById("tag").value;
    console.log(tag);
    const api_url='https://codeforces.com/api/problemset.problems?tags='+tag;
    async function get_questions()
    {
        const reponse=await fetch(api_url);
        const data=await reponse.json();
        var ok=data.status;
        var result=data.result.problems;

        if(ok==="OK")
        {
            var basic_n=[];
            var basic_c=[];
            var basic_i=[];
            var min_rating=800
            var max_rating=Math.min(rate, 1500);
            if(rate<800)
            {
                max_rating=1000;
            }
            var len=result.length;
            for(var i=0; i<len; i++)
            {
                var rat=result[i].rating;
                if(rat>=min_rating && rat<=max_rating)
                {
                    basic_c.push(result[i].contestId);
                    basic_i.push(result[i].index);
                    basic_n.push(result[i].name);
                }
                if(basic_n.length===20)
                {
                    break;
                }
            }
            if(basic_n.length>0)
            {
                var table1=document.getElementById("base");
                for(var i=0; i<prev_b; i++)
                {
                    table1.deleteRow(1);
                }
                for(var i=0; i<basic_c.length; i++)
                {
                    var new_row=table1.insertRow(-1);
                    var cell1=new_row.insertCell(0);
                    var cell2=new_row.insertCell(1);
                    cell2.setAttribute("id", basic_n[i]);
                    cell1.innerHTML=i+1;
                    var txt=basic_n[i];
                    var link="https://codeforces.com/problemset/problem/";
                    link+=basic_c[i];
                    link+="/";
                    link+=basic_i[i];
                    toString(link);
                    var link_node=document.createElement("a");
                    link_node.setAttribute("href", link);
                    link_node.setAttribute("target", "_blank");
                    link_node.innerText=txt;
                    document.getElementById(basic_n[i]).appendChild(link_node);
                }
                prev_b=basic_c.length;
            }
            else
            {
                var table1=document.getElementById("base");
                for(var i=0; i<prev_b; i++)
                {
                    table1.deleteRow(1);
                }
                var new_row=table1.insertRow(-1);
                var cell1=new_row.insertCell(0);
                cell1.innerHTML="Can't find any questions of this topic and level of the question";
                prev_b=1;
            }
        }
    }
    get_questions();
}