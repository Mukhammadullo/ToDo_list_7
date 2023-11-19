





let btnCancel1 = document.querySelector(".btnCancel1")
btnCancel1.onclick = () => {
    dialog1.close()
}
let btnCancel2 = document.querySelector(".btnCancel2")
btnCancel2.onclick = () => {
    dialog2.close()
}
let btnCancel3 = document.querySelector(".btnCancel3")
btnCancel3.onclick = () => {
    dialog3.close()
}

// editCancenl
let btnCancel11 = document.querySelector(".btnCancel11")
btnCancel11.onclick = () => {
    dialogEdit1.close()
}
let btnCancel22 = document.querySelector(".btnCancel22")
btnCancel22.onclick = () => {
    dialogEdit2.close()
}
let btnCancel33 = document.querySelector(".btnCancel33")
btnCancel33.onclick = () => {
    dialogEdit3.close()
}


// dialog1
let dialog1 = document.querySelector(".dialog1")
let AddName1 = document.querySelector(".AddName1")
let AddAge1 = document.querySelector(".AddAge1")
let btnAdd1 = document.querySelector(".btnAdd1")
let AddUser1 = document.querySelector(".AddUser1")
AddUser1.onclick = () => {
    dialog1.showModal()
}



// dialog2
let dialog2 = document.querySelector(".dialog2")
let AddName2 = document.querySelector(".AddName2")
let AddAge2 = document.querySelector(".AddAge2")
let btnAdd2 = document.querySelector(".btnAdd2")
let AddUser2 = document.querySelector(".AddUser2")
AddUser2.onclick = () => {
    dialog2.showModal()
}

// dialog3
let dialog3 = document.querySelector(".dialog3")
let AddName3 = document.querySelector(".AddName3")
let AddAge3 = document.querySelector(".AddAge3")
let btnAdd3 = document.querySelector(".btnAdd3")
let AddUser3 = document.querySelector(".AddUser3")
AddUser3.onclick = () => {
    dialog3.showModal()
}

// ____________dialogEdit
// dialog1
let dialogEdit1 = document.querySelector(".dialogEdit1")
let EditName1 = document.querySelector(".EditName1")
let EditAge1 = document.querySelector(".EditAge1")
let btnSave1 = document.querySelector(".btnSave1")


// dialog2
let dialogEdit2 = document.querySelector(".dialogEdit2")
let EditName2 = document.querySelector(".EditName2")
let EditAge2 = document.querySelector(".EditAge2")
let btnSave2 = document.querySelector(".btnSave2")

// dialog3
let dialogEdit3 = document.querySelector(".dialogEdit3")
let EditName3 = document.querySelector(".EditName3")
let EditAge3 = document.querySelector(".EditAge3")
let btnSave3 = document.querySelector(".btnSave3")




let card1 = document.querySelector(".card1")
let card1_inner = document.querySelector(".card1_inner")


let card2 = document.querySelector(".card2")
let card3 = document.querySelector(".card3")

let url1 = "http://localhost:3000/persons"
let url2 = "http://localhost:3000/cars"
let url3 = "http://localhost:3000/animals"


let inpSearch1 = document.querySelector(".inpSearch1")
console.log(inpSearch1);
inpSearch1.oninput = () => {
    asyncSearch1(inpSearch1.value)
}

async function asyncSearch1(valueSearch) {
    try {
        let response = await fetch(`${url1}?q=${valueSearch}`)
        let data = await response.json()
        get1(data)
    } catch (error) {
        console.error(error);
    }
}

let inpSearch2 = document.querySelector(".inpSearch2")
console.log(inpSearch2);
inpSearch2.oninput = () => {
    asyncSearch2(inpSearch2.value)
}

async function asyncSearch2(valueSearch) {
    try {
        let response = await fetch(`${url2}?q=${valueSearch}`)
        let data = await response.json()
        get2(data)
    } catch (error) {
        console.error(error);
    }
}





async function getData1() {
    try {
        let response = await fetch(url1)
        let data = await response.json()
        get1(data)

    } catch (error) {

    }
}
getData1()


// ____________________2
async function getData2() {
    try {
        let response = await fetch(url2)
        let data = await response.json()
        get2(data)

    } catch (error) {

    }
}
getData2()

// ____________________3
async function getData3() {
    try {
        let response = await fetch(url3)
        let data = await response.json()
        get3(data)

    } catch (error) {
        console.error(error);
    }
}
getData3()

// get1___________________
function get1(newData1) {
    card1.innerHTML=""
    newData1.forEach(element => {


        
        let forName = document.createElement("h1")
        forName.innerHTML = element.name
        forName.classList.add("forName")

        let forAge = document.createElement("h2")
        forAge.innerHTML = element.age
        forAge.classList.add("forAge")



        // btndel
        let btnDel = document.createElement("button")
        btnDel.innerHTML = "Delete"
        btnDel.onclick = () => {
            delUser1(element.id)
        }
        btnDel.classList.add("btnDel")

        // edit
        let btnEdit = document.createElement("button")
        btnEdit.innerHTML = "Edit"
        btnEdit.onclick = () => {
            editUser1(element)
        }
        btnEdit.classList.add("btnEdit")

        // check
        let check = document.createElement("input")
        check.type = "checkbox"
        check.checked = element.isComplete
        check.onclick = () => {
            element.isComplete = !element.isComplete
            isCompleteUser1(element.id, element)
        }
        if (element.isComplete == true) {
            forName.style.textDecoration = "line-through"
            forName.style.color = "grey"
        }

        let card1_inner = document.createElement("div")
        card1_inner.classList.add("card1_inner")

        card1_inner.append(forName, forAge, btnDel, btnEdit, check)
        card1.append(card1_inner)
    });
}
// get2___________________
function get2(newData2) {
    card2.innerHTML=""
    newData2.forEach(element => {

        let forName = document.createElement("h1")
        forName.innerHTML = element.model
        forName.classList.add("forName")

        let forAge = document.createElement("h2")
        forAge.innerHTML = element.year
        forAge.classList.add("forAge")

        // btndel
        let btnDel = document.createElement("button")
        btnDel.innerHTML = "Delete"
        btnDel.onclick = () => {
            delUser2(element.id)
        }
        btnDel.classList.add("btnDel")

        // edit
        let btnEdit = document.createElement("button")
        btnEdit.innerHTML = "Edit"
        btnEdit.onclick = () => {
            editUser2(element)
        }
        btnEdit.classList.add("btnEdit")


        // check
        let check = document.createElement("input")
        check.type = "checkbox"
        check.checked = element.isComplete
        check.onclick = () => {
            element.isComplete = !element.isComplete
            isCompleteUser2(element.id, element)
        }
        if (element.isComplete == true) {
            forName.style.textDecoration = "line-through"
            forName.style.color = "grey"
        }

        let card2_inner = document.createElement("div")
        card2_inner.classList.add("card2_inner")

        card2_inner.append(forName, forAge, btnDel, btnEdit, check)
        card2.append(card2_inner)
    });
}
// get3___________________
function get3(newData3) {
    card3.innerHTML=""
    newData3.forEach(element => {

        let forName = document.createElement("h1")
        forName.innerHTML = element.name
        forName.classList.add("forName")

        let forAge = document.createElement("h2")
        forAge.innerHTML = element.color
        forAge.classList.add("forAge")



        // btndel
        let btnDel = document.createElement("button")
        btnDel.innerHTML = "Delete"
        btnDel.onclick = () => {
            delUser3(element.id)
        }
        btnDel.classList.add("btnDel")

        // edit
        let btnEdit = document.createElement("button")
        btnEdit.innerHTML = "Edit"
        btnEdit.onclick = () => {
            editUser3(element)
        }
        btnEdit.classList.add("btnEdit")

        // check
        let check = document.createElement("input")
        check.type = "checkbox"
        check.checked = element.isComplete
        check.onclick = () => {
            element.isComplete = !element.isComplete
            isCompleteUser3(element.id, element)
        }
        if (element.isComplete == true) {
            forName.style.textDecoration = "line-through"
            forName.style.color = "grey"
        }


        let card3_inner = document.createElement("div")
        card3_inner.classList.add("card3_inner")

        card3_inner.append(forName, forAge, btnDel, btnEdit, check)
        card3.append(card3_inner)
    });
}




// edit1
async function asynceditUser1(id, newEditUser1) {
    try {
        let response = await fetch(`${url1}/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEditUser1)
        })
        getData1()
    } catch (error) {
        console.log(error);
    }
}


function editUser1(element) {
    dialogEdit1.showModal()

    EditName1.value = element.name
    EditAge1.value = element.age

    btnSave1.onclick = () => {
        let newEditUser1 = {
            name: EditName1.value,
            age: EditAge1.value
        }
        asynceditUser1(element.id, newEditUser1)
        dialogEdit1.close()
    }
}


// edit2__________________________________________
async function asynceditUser2(id, newEditUser2) {
    try {
        let response = await fetch(`${url2}/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEditUser2)
        })
        getData2()
    } catch (error) {
        console.log(error);
    }
}


function editUser2(element) {
    dialogEdit2.showModal()

    EditName2.value = element.model
    EditAge2.value = element.year

    btnSave2.onclick = () => {
        let newEditUser2 = {
            model: EditName2.value,
            year: EditAge2.value
        }
        asynceditUser2(element.id, newEditUser2)
        dialogEdit2.close()
    }
}

// edit3__________________________________________
async function asynceditUser3(id, newEditUser3) {
    try {
        let response = await fetch(`${url3}/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEditUser3)
        })
        getData3()
    } catch (error) {
        console.log(error);
    }
}


function editUser3(element) {
    dialogEdit3.showModal()

    EditName3.value = element.name
    EditAge3.value = element.color

    btnSave3.onclick = () => {
        let newEditUser3 = {
            name: EditName3.value,
            color: EditAge3.value
        }
        asynceditUser3(element.id, newEditUser3)
        dialogEdit3.close()
    }
}





// add1________________

async function post1(newUser1) {
    try {
        let response = await fetch(url1, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser1),

        })
        getData1()
    } catch (error) {
        console.error(error)
    }
}

btnAdd1.onclick = () => {
    let newObj1 = {
        id: Date.now(),
        name: AddName1.value,
        age: AddAge1.value
    }
    dialog1.close()
    post1(newObj1)
}
// add2________________

async function post2(newUser2) {
    try {
        let response = await fetch(url2, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser2),

        })
        getData2()
    } catch (error) {
        console.error(error)
    }
}

btnAdd2.onclick = () => {
    let newObj2 = {
        id: Date.now(),
        model: AddName2.value,
        year: AddAge2.value
    }
    dialog2.close()
    post2(newObj2)
}

// add3________________

async function post3(newUser3) {
    try {
        let response = await fetch(url3, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser3),

        })
        getData3()
    } catch (error) {
        console.error(error)
    }
}

btnAdd3.onclick = () => {
    let newObj3 = {
        id: Date.now(),
        name: AddName3.value,
        color: AddAge3.value
    }
    dialog3.close()
    post3(newObj3)
}



// delete1____________________________________
async function delUser1(id) {
    try {
        const response = await fetch(`${url1}/${id}`, {
            method: "DELETE"
        })
        getData1()
    } catch (error) {
        console.error(error)
    }
}

// delete2________________________________________
async function delUser2(id) {
    try {
        const response = await fetch(`${url2}/${id}`, {
            method: "DELETE"
        })
        getData2()
    } catch (error) {
        console.error(error)
    }
}

// delete3________________________________________
async function delUser3(id) {
    try {
        const response = await fetch(`${url3}/${id}`, {
            method: "DELETE"
        })
        getData3()
    } catch (error) {
        console.error(error)
    }
}


// iscomLpete1_______________________________
async function isCompleteUser1(id, user1) {
    try {
        let response = await fetch(`${url1}/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user1)
        }
        )
        getData1()
    } catch (error) {
        console.log(error);
    }
}

// iscomLpete2_______________________________
async function isCompleteUser2(id, user2) {
    try {
        let response = await fetch(`${url2}/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user2)
        }
        )
        getData2()
    } catch (error) {
        console.log(error);
    }
}

// iscomLpete3_______________________________
async function isCompleteUser3(id, user3) {
    try {
        let response = await fetch(`${url3}/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user3)
        }
        )
        getData3()
    } catch (error) {
        console.log(error);
    }
}
