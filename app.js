function addTodo() {
        var GetInputValue = document.getElementById("name").value;
        var GetInputValue1 = document.getElementById("reg").value;
        var GetInputValue2 = document.getElementById("email").value;

        if (GetInputValue == " " || GetInputValue == "") { 
            alert("Please Enter Name");
        }
        else if (GetInputValue1 == " " || GetInputValue1 == "") { 
            alert("Please Enter Reg No");
        }
        else if (GetInputValue2 == " " || GetInputValue2 == "") { 
            alert("Please Enter Email");
        }
        else {
            var name = document.getElementById("name").value; 
            var reg = document.getElementById("reg").value; 
            var email = document.getElementById("email").value;
        
            var table=document.getElementById("table1");
            var table_len = table.rows.length;
            var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+name+"</td><td id='id_row"+table_len+"'>"+reg+"</td><td id='email_row"+table_len+"'>"+email+"</td> <td> <button type='button' class='btn btn-info' id='insert' onclick='insert("+table_len+")'>INSERT</button> <button type='button' class='btn btn-success' id='update' onclick='update("+table_len+")'>UPDATE</button> <button type='button' class='btn btn-danger' id='dlt' onclick='delette("+table_len+")'>DELETE</button></td></tr>"; 

            document.getElementById("name").value=" "; 
            document.getElementById("reg").value=" "; 
            document.getElementById("email").value=" ";
        }
   }

function delette(num)
    {
        document.getElementById("row"+num+"").innerHTML="";
    }

function insert(num)
    {
        document.getElementById("insert"+num);
        document.getElementById("update"+num);
            
        var name=document.getElementById("name_row"+num);
        var id=document.getElementById("id_row"+num);
        var email=document.getElementById("email_row"+num);
            
        var name_data=name.innerHTML;
        var id_data=id.innerHTML;
        var email_data=email.innerHTML;
            
        name.innerHTML="<input type='text' id='name_text"+num+"' value='"+name_data+"'>";
        id.innerHTML="<input type='text' id='id_text"+num+"' value='"+id_data+"'>";
        email.innerHTML="<input type='text' id='email_text"+num+"' value='"+email_data+"'>";
    }


function update(num)
    {
        var name=document.getElementById("name_text"+num).value;
        var id=document.getElementById("id_text"+num).value;
        var email=document.getElementById("email_text"+num).value;

        document.getElementById("name_row"+num).innerHTML=name;
        document.getElementById("id_row"+num).innerHTML=id;
        document.getElementById("email_row"+num).innerHTML=email;

        document.getElementById("insert"+num);
        document.getElementById("update"+num);
    }

