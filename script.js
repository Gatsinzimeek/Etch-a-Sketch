//This declaration of variable that will be used in dom manipulation
const colorInput = document.querySelector('.color-choose');
const CleanAll = document.querySelector('.clear');
const spanContent = document.querySelector('#size');
const rangeInput = document.querySelector('.ranger');
const drawBox = document.querySelector('.draw-container');

//current variables on starting page

let ColorMode = '#333333';
let currentMode = 'color';
const gridsize = 16;

colorInput.addEventListener('input', (e) =>{
	ColorMode = e.target.value;
});


function clear() {
	return drawBox.innerHTML = '';
};

/*----------------------------------This code for creating those divs boxs -------------------*/
const gridShow = size =>{
		drawBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
		drawBox.style.gridTemplateRows = `repeat(${size}, 1fr)`;
for (var i = 1; i<= size * size; i++) {
	let boxDiv = document.createElement('div');
	boxDiv.classList.add('boxs');
	drawBox.appendChild(boxDiv);
	boxDiv.addEventListener('mouseover',changecolor);
	}
}


rangeInput.addEventListener('input', (e) =>{
	let rangvalue = e.target.value;
	if (rangvalue <= 64) {
		spanContent.innerHTML = rangvalue;
		clear();
		gridShow(rangvalue);
		
	}else{
		alert('please enter number in between 1-64');
	}

});
/* -------------------------	ENDS HERE FOR CREATION OF BOXS ------------*/

/* ------------------------- code for Changing of color in div boxs ------------*/

function setCurrentMode(newcurrent) {
	currentMode = newcurrent;
}

//this is the code for color mode 
const changecolor = (e)=>{
	if (e.type === 'mouseover') {
			if (currentMode === 'Rainbow') {
				let R = Math.floor(Math.random() * 256);
				let G = Math.floor(Math.random() * 256);
				let B = Math.floor(Math.random() * 256);
				e.target.style.backgroundColor = `rgb(${R}, ${B}, ${G})`;
			}else if(currentMode === 'eraser'){
				e.target.style.backgroundColor = "#fefefe";
			}else{
				e.target.style.backgroundColor = ColorMode;
}
	}
}
/*------------------------------ THIS THE CODE FOR CLEAN ALL Colors available in those box ----------------------------------*/

CleanAll.addEventListener('click', () =>{
	clear()
	gridShow(gridsize)
});

/*this the code for starting of pages */

window.onload = () => {
	gridShow(gridsize)
}
