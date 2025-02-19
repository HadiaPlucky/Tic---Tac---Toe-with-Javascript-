let boxes = document.querySelectorAll(".boxes");
let reset = document.querySelector(".reset-game");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector(".new-btn");
let msgmain = document.querySelector(".msg-container");
let main = document.querySelector(".container");
msgmain.classList.add("hide");
let turno = true;

let winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
boxes.forEach((boxes)=>{
    boxes.addEventListener("click", () => {
        console.log("Box was clicked ")
        if(turno){
            boxes.innerText = "O"
            turno = false
        }
        else{
            boxes.innerText = "X"
            turno = true
        }
    boxes.disabled = true
    checkwinner();
    })
});

const showwinnwer = (winner) => {
    msg.innerText = `${winner} is Winner of the Game`;
    msgmain.classList.remove("hide");
    // main.classList.add("hide");
    reset.classList.add("hide");

}
let flag = false
const checkwinner = () => {
    for(let pattern of winpatterns){
        let posvalue1 = boxes[pattern[0]].innerText;
        let posvalue2 = boxes[pattern[1]].innerText;
        let posvalue3 = boxes[pattern[2]].innerText;
        if (posvalue1 != "" && posvalue2 != "" && posvalue3 != ""){
            if (posvalue1 === posvalue2 && posvalue2 === posvalue3){
                flag = true
                boxes.forEach((boxes) => {
                    boxes.disabled = true;
                })        
                showwinnwer(posvalue1)
                return
            }
            }
    } 

    let allboxesfilled = true;
    boxes.forEach(boxes => {
        if (boxes.innerText === ""){
            allboxesfilled = false;
            return;
        }
    })
if (allboxesfilled && !flag){
    msg.innerText = "No Winner \n Play Again";
    msgmain.classList.remove("hide");
    // main.classList.add("hide");
    reset.classList.add("hide");
              
}
    
}
const resetgame = () => {
    msgmain.classList.add("hide");
    main.classList.remove("hide");
    reset.classList.remove("hide");
    boxes.forEach((boxes) => {
        boxes.innerText = "";
        boxes.disabled = false;
        turno = true;
    })
}

reset.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame);