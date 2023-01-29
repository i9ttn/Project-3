let add = document.querySelector(".add")
let addFriend = document.querySelector(".addFrined")
let iAddFriend = document.querySelector(".addFrined i")
let save = document.querySelector(".save")
let fName = document.querySelector("#fName")
let lName = document.querySelector("#lName")
let job = document.querySelector("#job")
let body = document.querySelector(".dash")
let friend = document.querySelectorAll(".dash > div")
let errorFName = document.querySelector(".errorFName")
let errorLName = document.querySelector(".errorLName")
let errorJob = document.querySelector(".errorJob")
let allError = document.querySelectorAll(".p")
let trueFName = []
let trueLName = []
let trueJob = []
let fNameValue = fName.value.split("")
let lNameValue = lName.value.split("")
let jobValue = job.value.split("")
let allDiv = document.querySelectorAll(".dash > div")
let removeDiv = document.querySelectorAll(".dash > div .remove")
let remove = document.querySelector(".remove");
let profile = document.querySelector(".profile")

function close() {
    iAddFriend.onclick = function() {
        addFriend.classList.remove("active")
        body.style.opacity = 1
        fName.value = ""
        lName.value = ""
        job.value = ""
        allError.forEach((e)=> {
            e.classList.remove("error")
        }) 
    }
}
add.addEventListener("click", ()=> {
    addFriend.classList.add("active")
    body.style.opacity = 0.3
    close()
})
save.addEventListener("click", function() {
    allError.forEach((e)=> {
        if(e.classList[2] === "error" || trueFName.length < 1 || trueLName.length < 1 || trueJob < 1) {
            allError.forEach((e)=> {
                e.innerHTML = "Please write Here"
                e.classList.add("error")
            })
        } else {
            addFriend.classList.remove("active")
            body.style.opacity = 1
            body.classList.add("done")
        }
    })
    checkBody()
})


fName.onblur = function() {
    let fNameValue = fName.value.split("")
    if(fNameValue.length > 15) {
        errorFName.innerHTML = "Please Do Not Exceed 15 Characters"
        errorFName.classList.add("error")
    } else if (fNameValue.length < 5) {
        errorFName.innerHTML = "Please The Field Must Be At Least 15 Characters Long"
        errorFName.classList.add("error")
    } else {
        for(i = 0; i < fNameValue.length; i++) {
            if(typeof fNameValue[i] == "string") {
                trueFName.push(fNameValue[i])
                errorFName.classList.remove("error")
            } else {
                errorFName.classList.add("error")
            }
        }
    }    
}
lName.onblur = function() {
    let lNameValue = lName.value.split("")
    if(lNameValue.length > 15) {
        errorLName.innerHTML = "Please Do Not Exceed 15 Characters"
        errorLName.classList.add("error")
    } else if (lNameValue.length < 5) {
        errorLName.innerHTML = "Please The Field Must Be At Least 15 Characters Long"
        errorLName.classList.add("error")
    } else {
        for(i = 0; i < lNameValue.length; i++) {
            if(typeof lNameValue[i] == "string") {
                trueLName.push(lNameValue[i])
                errorLName.classList.remove("error")
            } else {
                errorLName.classList.add("error")
            }
        }
    }
}
job.onblur = function() {
    let jobValue = job.value.split("")
    if(jobValue.length > 15) {
        errorJob.innerHTML = "Please Do Not Exceed 15 Characters"
        errorJob.classList.add("error")
    } else if (jobValue.length < 5) {
        errorJob.innerHTML = "Please The Field Must Be At Least 15 Characters Long"
        errorJob.classList.add("error")
    } else {
        for(i = 0; i < jobValue.length; i++) {
            if(typeof jobValue[i] == "string") {
                trueJob.push(jobValue[i])
                errorJob.classList.remove("error")
            } else {
                errorJob.classList.add("error")
            }
        }
    }
}

function refreshAllDiv() {
    let allDiv = document.querySelectorAll(".dash > div")
    let removeDiv = document.querySelectorAll(".dash > div .remove")
    let remove = document.querySelector(".remove");
    let profile = document.querySelector(".profile")
}
function checkBody() {
    if(body.classList[1] === "done") {
        let div = document.createElement("div");
        body.appendChild(div)
        let first = document.createElement("div")
        first.className = "first"
        div.appendChild(first)
        let divI = document.createElement("div");
        divI.className = "i"
        first.appendChild(divI)
        let i1 = document.createElement("i");
        i1.className = "fa-solid fa-phone"
        let i2 = document.createElement("i");
        i2.className = "fa-regular fa-envelope"
        divI.appendChild(i1)
        divI.appendChild(i2)
        let num = Math.floor(Math.random() * 6) + 1;
        let img = document.createElement("img")
        img.setAttribute("src", `images/avatar-0${num}.png`)
        first.appendChild(img)
        let h3FirstName = document.createElement("h3")
        h3FirstName.innerHTML = trueFName.join("")
        first.appendChild(h3FirstName)
        let pJob = document.createElement("p")
        pJob.innerHTML = trueJob.join("")
        first.appendChild(pJob)



        let second = document.createElement("div")
        second.className = "second"
        div.appendChild(second)
        let divSecondOne = document.createElement("div")
        second.appendChild(divSecondOne)
        let iDivSecodOne = document.createElement("i")
        second.appendChild(iDivSecodOne)
        iDivSecodOne.className = "fa-regular fa-face-smile"
        let pDivSecodOne = document.createElement("p")
        pDivSecodOne.innerHTML = `${Math.floor(Math.random() * 100)} Frindes`
        divSecondOne.appendChild(iDivSecodOne)
        divSecondOne.appendChild(pDivSecodOne)



        let divSecondTwo = document.createElement("div")
        second.appendChild(divSecondTwo)
        let iDivSecodTwo = document.createElement("i")
        second.appendChild(iDivSecodTwo)
        iDivSecodTwo.className = "fa-solid fa-laptop-code"
        let pDivSecodTwo = document.createElement("p")
        pDivSecodTwo.innerHTML = `${Math.floor(Math.random() * 50)} Projects`
        divSecondTwo.appendChild(iDivSecodTwo)
        divSecondTwo.appendChild(pDivSecodTwo)




        let divSecondThree = document.createElement("div")
        second.appendChild(divSecondThree)
        let iDivSecodThree = document.createElement("i")
        second.appendChild(iDivSecodThree)
        iDivSecodThree.className = "fa-regular fa-newspaper"
        let pDivSecodThree = document.createElement("p")
        pDivSecodThree.innerHTML = `${Math.floor(Math.random() * 50)} Articles`
        divSecondThree.appendChild(iDivSecodThree)
        divSecondThree.appendChild(pDivSecodThree)

        let end = document.createElement("div")
        end.className = "end"
        div.appendChild(end)
        let pOneEnd = document.createElement("p")
        end.appendChild(pOneEnd)
        pOneEnd.className = "date"
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDay()
        pOneEnd.innerHTML = `${year}/${month}/${day}`
        let pTwoEnd = document.createElement("p")
        end.appendChild(pTwoEnd)
        pTwoEnd.className = "profile"
        pTwoEnd.innerHTML = "Profile"
        let pThreeEnd = document.createElement("p")
        end.appendChild(pThreeEnd)
        pThreeEnd.className = "remove"
        pThreeEnd.innerHTML = "Remove"
    }
}
removeDiv.forEach((e)=>{
    refreshAllDiv()
    e.onclick = function() {
        e.classList.add("reomveA")
        for(i = 0; i < removeDiv.length; i++) {
            if(removeDiv[i].classList[1] === "reomveA"){
                allDiv[i].remove();
            }
        }
    }
})
