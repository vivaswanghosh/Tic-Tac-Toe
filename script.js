let boxes=document.querySelectorAll(".box")
let reset=document.querySelector("#reset")
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let winner=false;
let click=0
const resetgame =  () => {
    click=0
    for (let box of boxes)
    {
        box.innerText="";
    }
    winner=true
    enableBoxes()
}
const enableBoxes = () => {
    for (let box of boxes)
    {
        box.disabled=false;
    }
}
const disableBoxes = () => {
    for (let box of boxes)
    {
        box.disabled=true;
    }
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        click++;
        if (click%2!=0)
            box.innerText="X"
        else
            box.innerText="O"
        box.disabled=true
        checkWinner()
    })
})
reset.addEventListener("click",resetgame)
const checkWinner =()   =>{
    for (let pattern of win)
    {
        let x=boxes[pattern[0]].innerText
        let y=boxes[pattern[1]].innerText
        let z=boxes[pattern[2]].innerText
        if (x!="" && y!="" && z!="")
        {
            if (x===y && y===z)
            { winner=true;
                disableBoxes
                setTimeout(() => {
                    if (x === "X")
                        alert("PLAYER 1 WINS");
                    else
                        alert("PLAYER 2 WINS");
                }, 100)
                return;
            }
        }
        if (click === 9 && !winner) {
            setTimeout(() => {
                alert("DRAW");
            }, 100)
            return;
        }
    };
}