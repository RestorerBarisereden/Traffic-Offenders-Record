let btn = document.getElementById("saveButton");
let usersList = document.querySelector(".Points");
const users = [];

btn.addEventListener("click", () => {
    let fullName = document.getElementById("name").value;
    let driverSex = document.getElementById("gender").value;
    let old = document.getElementById("age").value;
    let carModel = document.getElementById("model").value;
    let plateNumber = document.getElementById("plateNum").value;
    let arrestDate = document.getElementById("dateOfArr").value;
    let crimeCommitted = document.getElementById("crime").value;
    // const trafficForm = document.getElementById("myform");

    var nameMatch = users.find((user) => user.name == fullName);

    if (!fullName) {
        alert("Please enter your name");
        return;
    }
    if(nameMatch){
        alert("Name already exists");
        return
    }
    if (!driverSex) {
        alert("Please select gender");
        return
    }
    if (!old) {
        alert("Please Input your Age");
        return
    }
    if (!carModel) {
        alert("Please enter the Car Model");
        return
    }
    if (!plateNumber) {
        alert("Please enter the Plate Number");
        return
    }
    if (!arrestDate) {
        alert("Please enter the Arrest Date");
        return
    }
    if (!crimeCommitted) {
        alert("What crime was committed");
        return
    }
    const user = saveUser(fullName, driverSex, old, carModel, plateNumber, arrestDate, crimeCommitted);
    console.log(user);
    if (!user) {
        throw new Error("opps! something went wrong, try again");
    }
    //   console.log(user);
    displayUser();
});

function saveUser(full_name, driverSex, old, carModel, plateNumber, arrestDate, crimeCommitted) {
    const obj = {};
    if (users.indexOf(full_name) !== -1) {
        alert("user with name already exists");
        return;
    }
    obj["name"] = full_name;
    obj["gender"] = driverSex;
    obj["age"] = old;
    obj["model"] = carModel;
    obj["plateNum"] = plateNumber;
    obj["dateOfArr"] = arrestDate;
    obj["crime"] = crimeCommitted;
    users.push(obj);
    return users;
}

function displayUser() {

    var output = ``;

    users.map((user) => {
        console.log(name);
        output += `
        <tr>
                    <td class="points-lists">
                        <div class="points-lists-name">${user.name}</div>
                    </td>
                    <td class="points-lists">
                        <div class="points-lists-sex">${user.gender}</div>
                    </td>
                    <td class="points-lists">
                        <div class="points-lists-age">${user.age}</div>
                    </td>
                    <td class="points-lists">
                        <div class="points-lists-car">${user.model}</div>
                    </td>
                    <td class="points-lists">
                        <div class="points-lists-plateNumber">${user.plateNum}</div>
                    </td>
                    <td class="points-lists">
                        <div class="points-lists-date">${user.dateOfArr}</div>
                    </td>
                    <td class="points-lists-crime">
                        <div>${user.crime}</div>
                    </td>
                    <td class="points-lists-button">
                        <button class="add">Update</button>
                        <button class="delete" onclick="${user}">Delete</button>
                    </td>
        </tr>   
        `
    });

    // const deletemybutton = document.querySelectorAll(".delete");
    // deletemybutton.forEach((button)=>{
    //     button.addEventListener("click", deletePerson);
    // })

   

    usersList.innerHTML = output;


    // users.forEach((user) => {
    //   const row = document.createElement("tr");
    //   row.innerHTML = `
    //   <td>${user.name}</td>
    //   <td>${user.gender}</td>
    //   <td>${user.model}</td>
    //   <td>${user.plateNum}</td>
    //   <td>${user.dateOfArr}</td>
    // //   <td>${user.crime}</td>
    //   `;
    //   usersList.appendChild(row);
    // });
}

// function deletePerson(action){
//     const index = action.target.getAttribute("data-index");
//     persons.splice(index, 1);
//     displayPerson();
// }

function editperson(){
    // !danger
}

displayUser();