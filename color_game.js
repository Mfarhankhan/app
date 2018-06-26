var colors = makeArray(6);
var numsquare = 6;
var h1 = document.querySelector("h1");
var targetColor = randomColor();
var  squares = document.querySelectorAll(".column");
var display = document.querySelector("span");
var displayMessage = document.querySelector("#message"); 
var btn = document.querySelector("#reset")
var content = btn.textContent
var hardbtn = document.querySelector("#hard")
var easybtn = document.querySelector("#easy")
display.textContent = targetColor;
applyColor()

hardbtn.classList.add("select")

btn.addEventListener("click" , function(){
	displayMessage.textContent = ""
	this.textContent = "New Colors"
	//generate random colors
	colors = makeArray(numsquare);
	//pick a random color assign it to be the target color
    targetColor = randomColor();
    display.textContent = targetColor;
    h1.style.backgroundColor = "steelblue";
    //apply color to the squares
    applyColor()	
})

hardbtn.addEventListener("click" , function(){ 
     hardbtn.classList.add("select")
     easybtn.classList.remove("select")
     numsquare = 6;
     colors = makeArray(numsquare);
     targetColor = randomColor();
     display.textContent = targetColor;
     for(i = 0 ; i < squares.length ; i++){
         squares[i].style.backgroundColor = colors[i];
         squares[i].style.display = "block";
     }

     })

easybtn.addEventListener("click" , function(){
     easybtn.classList.add("select")
     hardbtn.classList.remove("select")
     numsquare = 3;
     colors = makeArray(numsquare);
     targetColor = randomColor();
     display.textContent = targetColor;
     for(i = 0 ; i < squares.length ; i++){
     	if(colors[i]){
     		 squares[i].style.backgroundColor = colors[i] 
     	}
     	else{
     		squares[i].style.display = "none";
     	}
     }

     

     })

function applyColor(){
	for (i = 0 ; i < squares.length; i++){
           squares[i].style.backgroundColor = colors[i] 
	       squares[i].addEventListener("click" , function(){
            if (this.style.backgroundColor === targetColor){
            	displayMessage.textContent = "Correct!!";
            	changeColor(targetColor)
            	btn.textContent = "Play Again?"
            	h1.style.backgroundColor = targetColor;
            }
            else{
            	this.style.backgroundColor = "#232323";
            	displayMessage.textContent = "Try Again..."
            }
	       })
	}
}


function changeColor(color){
	for (i = 0 ; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function randomColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function makeArray(end){
	var arr = [];
	for(i = 0 ; i < end; i++){
	     arr.push(randomNumbers())
	}
	
	return arr;
}

function randomNumbers(){
	 var r = String(Math.floor(Math.random() * 255 + 1));
	 var g = String(Math.floor(Math.random() * 255 + 1));
	 var b = String(Math.floor(Math.random() * 255 + 1));
	 return "rgb(" + r + ", " + g +", " + b + ")";
}

	
