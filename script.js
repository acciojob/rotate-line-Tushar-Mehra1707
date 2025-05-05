//your JS code here. If required.
const line=document.getElementByid("line");
let angle=0;
set interval(()=>{
	angle +2=0;
	line.style.transform=`translate(-50%, -50%) rotate(${angle}deg)`;
}, 20);
}