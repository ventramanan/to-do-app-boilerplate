  var input= document.getElementById("input");
  var addbutton= document.getElementById("button");
  var todolist = document.getElementById("todolist");
  var data =[]
  addbutton.addEventListener("click",addData)
  



  function addData(){
    data.push(input.value);
    console.log(data)
    

    input.value=" "
    toshowData();
  }
  function toshowData(){
    todolist.innerHTML=""
    data.forEach(function(item,index){
        console.log(item)
        todolist.innerHTML=`<li>${item}<a onclick="deleteItem(${index})">|X</a><a onclick="editItem(${index})">Edit</a></li>`
    })
 }
 function deleteItem(i){
    data.splice(i,1)
    toshowData()
 }
function editItem(index){
    var newvalue = prompt("enter the new value")
    data.splice(index,1,newvalue)
    toshowData();
}
    
  