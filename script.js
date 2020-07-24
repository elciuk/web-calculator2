const sum = document.querySelector("#sum");
const clear = document.querySelector(".clear");
const buttons = document.querySelectorAll(".button");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
let storage = [[],[],[]];

//numbered buttons add their content to storage[0] or storage[2] depending whether storage[1] has been assigned an operator
buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(storage[1] == ""){
            storage[0].push(button.textContent);
            display.textContent = storage[0];
            if(storage[0][1] !== undefined){
                storage[0][0] = storage[0][0]+storage[0][1];
                storage[0].pop();
                display.textContent = storage[0];
            }
            console.table(storage);
        } else {
            storage[2].push(button.textContent);
            display.textContent = storage[2];
            if(storage[2][1] !== undefined){
                storage[2][0] = storage[2][0]+storage[2][1];
                storage[2].pop();
                display.textContent = storage[2];
            }
            console.table(storage);
        }
    });
});

operators.forEach((operator)=>{
    operator.addEventListener("click", (e)=>{
        if(storage[0] !==undefined && storage[1] !== undefined && storage[2] !== undefined){
            switch(storage[1]){
                case "add":
                    display.textContent = parseInt(storage[0]) + parseInt(storage[2]);
                    storage = [[display.textContent],[],[]];
                    break;
                case "minus":
                    display.textContent = parseInt(storage[0]) - parseInt(storage[2]);
                    storage = [[display.textContent],[],[]];
                    break;
                case "multiply":
                    display.textContent = parseInt(storage[0]) * parseInt(storage[2]);
                    storage = [[display.textContent],[],[]];
                    break;
                case "divide":
                    display.textContent = parseInt(storage[0]) / parseInt(storage[2]);
                    storage = [[display.textContent],[],[]];
                    break;
            }
        storage[1] = e.srcElement.getAttribute("id");
        console.table(storage);
        };
    });
});

clear.addEventListener("click",()=>{
    storage = [[],[],[]]
    display.textContent = "";
    console.table(storage);
});

sum.addEventListener("click", ()=>{
    if(storage[0] !==undefined && storage[1] !== undefined && storage[2] !== undefined){
        switch(storage[1]){
            case "add":
                display.textContent = parseInt(storage[0]) + parseInt(storage[2]);
                break;
            case "minus":
                display.textContent = parseInt(storage[0]) - parseInt(storage[2]);
                break;
            case "multiply":
                display.textContent = parseInt(storage[0]) * parseInt(storage[2]);
                break;
            case "divide":
                display.textContent = parseInt(storage[0]) / parseInt(storage[2]);
                break;
        }
        storage = [[display.textContent],[],[]];
    }
});