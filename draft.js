
$(document).ready(function(){
    $("button").click(function(){
      $("#navBarList").toggle();
    });
});

var form=document.getElementById('form');
var tabledata=document.getElementById('tableList');
var inputgetData,inputData,delbtn,rowdata,row,update;

function addForm(e){
  e.preventDefault();
  localStorageData()
  insert()
  removeOfForm()
}

function localStorageData(){
  var data=[
  document.form.name.value,
  document.form.age.value,
  document.form.skills.value,
  document.form.designation.value,
  document.form.email.value
  ]
   inputData=[localStorage.setItem('name',data[0]),localStorage.setItem('age',data[1]),localStorage.setItem('skills',data[2]),localStorage.setItem('designation',data[3]),localStorage.setItem('email',data[4])];
   inputgetData=[localStorage.getItem('name'),localStorage.getItem('age'),localStorage.getItem('skills'),localStorage.getItem('designation'),localStorage.getItem('email')];
   
  
}
function insert(){
  rowdata=tabledata.rows.length;
  row=tabledata.insertRow(rowdata);
  var cell1=row.insertCell(0);
  var cell2=row.insertCell(1);
  var cell3=row.insertCell(2);
  var cell4=row.insertCell(3);
  var cell5=row.insertCell(4);
  var cell6=row.insertCell(5);
  cell1.innerHTML=inputgetData[0];
  cell2.innerHTML=inputgetData[1];
  cell3.innerHTML=inputgetData[2];
  cell4.innerHTML=inputgetData[3];
  cell5.innerHTML=inputgetData[4];
  

  delbtn=document.createElement("button");
  delbtn.textContent="Delete";
  delbtn.setAttribute('id','delete');
  delbtn.addEventListener('click',function(){
   this.parentElement.parentElement.remove();
  });
  editbtn=document.createElement("button");
  editbtn.textContent="Edit";
  editbtn.setAttribute('id','edit');

  cell6.appendChild(delbtn);
  cell6.appendChild(editbtn);

  editbtn.addEventListener('click',function edit(){
    editbtn.removeEventListener("click", edit);
    document.form.name.value=cell1.innerHTML;
    document.form.age.value=cell2.innerHTML;
    document.form.skills.value=cell3.innerHTML;
    document.form.designation.value=cell4.innerHTML;
    document.form.email.value=cell5.innerHTML;

    document.form.submit.style.display= "none";

    update=document.createElement('input');
    update.setAttribute('type','button');
    update.setAttribute('value','Update');
    update.setAttribute('id','Updateform');
    update.setAttribute('class','form-control w-25');
    document.form.appendChild(update);
    update.style.display="block";
   

    update.addEventListener('click',function(){
  
      document.form.submit.style.display= "block";
      update.style.display="none";
    
   		// editbtn.addEventListener("click", edit);

      var updateData=[
        document.form.name.value,
        document.form.age.value,
        document.form.skills.value,
        document.form.designation.value,
        document.form.email.value
        ]

        updateData=[localStorage.setItem('name',updateData[0]),localStorage.setItem('age',updateData[1]),localStorage.setItem('skills',updateData[2]),localStorage.setItem('designation',updateData[3]),localStorage.setItem('email',updateData[4])];
        updategetData=[localStorage.getItem('name'),localStorage.getItem('age'),localStorage.getItem('skills'),localStorage.getItem('designation'),localStorage.getItem('email')];
     
        cell1.innerHTML=updategetData[0];
        cell2.innerHTML=updategetData[1];
        cell3.innerHTML=updategetData[2];
        cell4.innerHTML=updategetData[3];
        cell5.innerHTML=updategetData[4];
        
        document.form.name.value="";
        document.form.age.value="";
        document.form.skills.value="";
        document.form.designation.value="";
        document.form.email.value="";
    	editbtn.addEventListener("click", edit);
    });
    // editbtn.addEventListener("click", edit);
    
  });

}

function removeOfForm(){
  document.form.name.value="";
  document.form.age.value="";
  document.form.skills.value="";
  document.form.designation.value="";
  document.form.email.value="";

}

form.addEventListener('submit',addForm);