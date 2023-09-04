let myform=document.querySelector("form");
let inpTask=document.getElementById("task");
let priority=document.getElementById("priority");
let tbody=document.querySelector("tbody");

let allData=[];

myform.addEventListener("submit",function(e)
{

    e.preventDefault();
    let data={

        input : inpTask.value,
        priority : priority.value

    }

   let arr= allData.push(data);

    console.log(data);
    console.log(allData);

    tbody.innerHTML="";

    allData.map(ele=>
        {
            let tr=document.createElement("tr");
            let td1=document.createElement("td");
            let td2=document.createElement("td");

            td1.innerText=ele.input;
            td2.innerText=ele.priority;

            tr.append(td1,td2);
            tbody.append(tr);
        })
})

