// Part 1

function login() {
    let button = document.getElementById("btn");
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let message = document.getElementById("message");
        const loginObject = {
            username : username.value ,
            password : password.value,
        };

       if (loginObject.username === "admin" && loginObject.password === "123") {
        message.append("Welcome Admin!");
       } 
       else 
       {
        message.append("Not Registered");
       }
    console.log(username.value ,password.value);
}

// ____________________________________________________________________________________________  

// Part 2 


// let taskName = document.getElementById('task');
// let addBtn = document.getElementById('add');
// let addedTask = document.getElementById('added-task');
// var items=[];

// // button function
// function addTask() {
//     var li = document.createElement("li");
//     task =taskName.value;
//     items.push(task);
//     li.append(task);

//    // Create done and delete buttons
//   var doneButton = document.createElement('button');
//   doneButton.textContent = 'Done';
//   doneButton.classList.add('done-btn'); // Add the class for styling
//   li.appendChild(doneButton);

//   var deleteButton = document.createElement('button');
//   deleteButton.textContent = 'Delete';
//   deleteButton.classList.add('delete-btn'); // Add the class for styling
//   li.appendChild(deleteButton);
    
//     if (task === '') {
//         alert("You can write any thing to do!");
//       } else {
//         document.getElementById("added-tasks").appendChild(li);
//         li.appendChild(doneButton);
//         li.appendChild(deleteButton);

//   doneButton.addEventListener('click', function() {
//     this.parentNode.classList.toggle('done');

//   });
//   doneButton.addEventListener('click', function() {
//     this.classList.toggle('done-active'); 
//   });

//   deleteButton.addEventListener('click', function () {
//     let index = items.indexOf(task);
//     items.splice(index, 1);
//     this.parentNode.remove();
// });
//       }
//   //calling clear form
//     clearForm();
// }

// function clearForm() {
//  // to clear input field
//  taskName.value = " ";
// }
