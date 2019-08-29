function changecolor(event){
    console.log("hi");
	if (event.target.tagName === "SPAN"){
		document.body.style.backgroundColor = "tomato"
	}
	if (event.target.tagName === "P"){
		document.body.style.backgroundColor = "aqua"
	}
}
document.querySelector("ul").addEventListener("click",changecolor)