// to do list project
const input = document.querySelector(".inputbox");// grabing elements using query selector
const button = document.querySelector(".addbutton");
const todolist = document.querySelector(".todolist");
//events
button.addEventListener("click", addtodo);
todolist.addEventListener("click", deletetodo);
// now creating function
function addtodo(event) {
    event.preventDefault()// it is preventing  the form to send data to server
    // creating a element
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todocontainer");// we made a container and given it class

    // now creating individual elements for ul list
    const todoItem = document.createElement("li");
    todoItem.classList.add("todoitem");
    todoItem.innerText = input.value;// this wiill grab the value
    todoDiv.appendChild(todoItem);// this is adding it to tododiv section
// now we creating two buttons
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deletebtn");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    todoDiv.appendChild(deleteButton);// this is adding it to tododiv section
    const completeButton = document.createElement("button");
    completeButton.classList.add("completebtn");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    todoDiv.appendChild(completeButton);// this is adding it to tododiv section

    // now we push these elemts to todolist div in html
    todolist.appendChild(todoDiv);//adding the element 
    input.value ="";// this will clear the text area after you added a task

}
// we are creating it for the delting and complete button
function deletetodo(event){
    console.log(event.target);
    const item = event.target;
    if (item.classList[0]=== "deletebtn"){
        const delItem = item.parentElement;// grabing the parent element
        delItem.remove();// this will delete the whole part
        // item.remove();// this is to remove the icon only
    }
    if (item.classList[0] === "completebtn"){
        const compItem = item.parentElement;
        compItem.classList.toggle("completed");
    }
}