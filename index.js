//Creates a new task
function newItem() {
//Stores the value of user input on a variable task
  var task = document.getElementById("input").value;
//Stores the list id on a variable ul
  var ul = document.getElementById("list");
//Stores the list item on a variable li
  var li = document.createElement("li");
//Appends a "-" next to the list item
  li.appendChild(document.createTextNode("- " + task));
//Apends the list item in the task list
  ul.appendChild(li);
//Initial user input has no value
  document.getElementById("input").value = "";
//Calls a function to remove a list item when its clicked
  li.onclick = removeItem;
}

//When user presses Enter (keyCode 13) on the page body
//calls the newItem function that adds a new item to the list
document.body.onkeyup = function(e) {
  if (e.keyCode === 13) {
    newItem();
  } 
};

//target = Gets the element that triggered an event (e)
//parentElement = Gets the name of the parent element (ul)
//removeChild = Remove the first li element from a list
//Which in this case is the targeted task
function removeItem(e) {
  e.target.parentElement.removeChild(e.target);
}
