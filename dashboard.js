var taskes = document.querySelectorAll(".task");
var iTaskes = document.querySelectorAll(".task i");
let ilenght = 0;
iTaskes.forEach(function(i) {
    i.addEventListener("click", ()=>{
        i.classList.add("remove");
        for(i = 0; i < iTaskes.length; i++) {
            if(iTaskes[i].classList[2] == "remove"){
                ilenght = i;
                console.log(ilenght)
                for(j = 0; j < taskes.length; j++) {
                    if(j == ilenght) {
                        taskes[j].remove()
                    } else {
                        console.log("bad")
                    }
                }
            }
        }
    })
})


