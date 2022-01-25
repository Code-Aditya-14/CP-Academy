var prev_b=0;
var prev_e=0;
var prev_m=0;
var prev_h=0;

function applied()
{
    rate=localStorage.getItem('rating');

    var tag=document.getElementById("tag").value;
    var api_url='https://codeforces.com/api/problemset.problems?tags='+tag;
    if(tag=="null")
    {
        api_url='https://codeforces.com/api/problemset.problems';
    }
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
                if(prev_b===0)
                {
                    document.getElementById("base_inv").innerHTML="";
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
                    link_node.setAttribute("style", "text-decoration: none;");
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
		        prev_b=0;
                document.getElementById("base_inv").innerHTML="Can't find any questions of this topic and level of the question";
            }
            min_rating=max_rating;
            max_rating=min_rating+500;
            var easy_n=[];
            var easy_c=[];
            var easy_i=[];
            for(var i=0; i<len; i++)
            {
                var rat=result[i].rating;
                if(rat>min_rating && rat<=max_rating)
                {
                    easy_c.push(result[i].contestId);
                    easy_i.push(result[i].index);
                    easy_n.push(result[i].name);
                }
                if(easy_n.length===20)
                {
                    break;
                }
            }
            
            if(easy_n.length>0)
            {
                var table1=document.getElementById("ease");
                for(var i=0; i<prev_e; i++)
                {
                    table1.deleteRow(1);
                }
                if(prev_e===0)
                {
                    document.getElementById("easy_inv").innerHTML="";
                }
                for(var i=0; i<easy_c.length; i++)
                {
                    var new_row=table1.insertRow(-1);
                    var cell1=new_row.insertCell(0);
                    var cell2=new_row.insertCell(1);
                    cell2.setAttribute("id", easy_n[i]);
                    cell1.innerHTML=i+1;
                    var txt=easy_n[i];
                    var link="https://codeforces.com/problemset/problem/";
                    link+=easy_c[i];
                    link+="/";
                    link+=easy_i[i];
                    toString(link);
                    var link_node=document.createElement("a");
                    link_node.setAttribute("href", link);
                    link_node.setAttribute("target", "_blank");
                    link_node.setAttribute("style", "text-decoration: none;");
                    link_node.innerText=txt;
                    document.getElementById(easy_n[i]).appendChild(link_node);
                }
                prev_e=easy_c.length;
            }
            else
            {
                var table1=document.getElementById("ease");
                for(var i=0; i<prev_e; i++)
                {
                    table1.deleteRow(1);
                }
		        prev_e=0;
                document.getElementById("easy_inv").innerHTML="Can't find any questions of this topic and level of the question";
            }
            min_rating=max_rating;
            max_rating=min_rating+500;
            var med_n=[];
            var med_c=[];
            var med_i=[];
            for(var i=0; i<len; i++)
            {
                var rat=result[i].rating;
                if(rat>min_rating && rat<=max_rating)
                {
                    med_c.push(result[i].contestId);
                    med_i.push(result[i].index);
                    med_n.push(result[i].name);
                }
                if(med_n.length===10)
                {
                    break;
                }
            }

            if(med_n.length>0)
            {
                var table1=document.getElementById("med");
                for(var i=0; i<prev_m; i++)
                {
                    table1.deleteRow(1);
                }
                if(prev_m===0)
                {
                    document.getElementById("medium_inv").innerHTML="";
                }
                for(var i=0; i<med_c.length; i++)
                {
                    var new_row=table1.insertRow(-1);
                    var cell1=new_row.insertCell(0);
                    var cell2=new_row.insertCell(1);
                    cell2.setAttribute("id", med_n[i]);
                    cell1.innerHTML=i+1;
                    var txt=med_n[i];
                    var link="https://codeforces.com/problemset/problem/";
                    link+=med_c[i];
                    link+="/";
                    link+=med_i[i];
                    toString(link);
                    var link_node=document.createElement("a");
                    link_node.setAttribute("href", link);
                    link_node.setAttribute("target", "_blank");
                    link_node.setAttribute("style", "text-decoration: none;");
                    link_node.innerText=txt;
                    document.getElementById(med_n[i]).appendChild(link_node);
                }
                prev_m=med_c.length;
            }
            else
            {
                var table1=document.getElementById("med");
                for(var i=0; i<prev_m; i++)
                {
                    table1.deleteRow(1);
                }
		        prev_m=0;
                document.getElementById("medium_inv").innerHTML="Can't find any questions of this topic and level of the question";
            }
            min_rating=max_rating;
            max_rating=3500;
            var dif_n=[];
            var dif_c=[];
            var dif_i=[];
            for(var i=0; i<len; i++)
            {
                var rat=result[i].rating;
                if(rat>min_rating && rat<=max_rating)
                {
                    dif_c.push(result[i].contestId);
                    dif_i.push(result[i].index);
                    dif_n.push(result[i].name);
                }
                if(dif_n.length===10)
                {
                    break;
                }
            }
            if(dif_n.length>0)
            {
                var table1=document.getElementById("diff");
                for(var i=0; i<prev_h; i++)
                {
                    table1.deleteRow(1);
                }
                if(prev_h===0)
                {
                    document.getElementById("hard_inv").innerHTML="";
                }
                for(var i=0; i<dif_c.length; i++)
                {
                    var new_row=table1.insertRow(-1);
                    var cell1=new_row.insertCell(0);
                    var cell2=new_row.insertCell(1);
                    cell2.setAttribute("id", dif_n[i]);
                    cell1.innerHTML=i+1;
                    var txt=dif_n[i];
                    var link="https://codeforces.com/problemset/problem/";
                    link+=dif_c[i];
                    link+="/";
                    link+=dif_i[i];
                    toString(link);
                    var link_node=document.createElement("a");
                    link_node.setAttribute("href", link);
                    link_node.setAttribute("target", "_blank");
                    link_node.setAttribute("style", "text-decoration: none;");
                    link_node.innerText=txt;
                    document.getElementById(dif_n[i]).appendChild(link_node);
                }
                prev_h=dif_c.length;
            }
            else
            {
                var table1=document.getElementById("diff");
                for(var i=0; i<prev_h; i++)
                {
                    table1.deleteRow(1);
                }
		        prev_h=0;
                document.getElementById("hard_inv").innerHTML="Can't find any questions of this topic and level of the question";
            }
        }
    }
    get_questions();
}