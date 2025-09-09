const container = document.querySelector("#container")

const button = document.querySelector("#btn")

button.addEventListener("click", ()=> {
    const userPrompt = prompt("Input a grid number less than 100");
    if (userPrompt < 100){
        container.textContent = " ";
        for(let i = 1; i < (userPrompt*userPrompt); i++){
            const newSquare = document.createElement("div")
            newSquare.classList.add("square")
            container.appendChild(newSquare)
        }

        const squares = document.querySelectorAll(".square")

        function randomColor(){
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        }

        squares.forEach(square => {
            square.addEventListener("mouseenter", (e) => {
                // e.target.style.backgroundColor = randomColor();
                let currentOpacity = parseFloat(e.target.style.opacity) || 0;
                if(currentOpacity < 1){
                    e.target.style.opacity = currentOpacity + 0.1
                }
            });
        });
    }
})












