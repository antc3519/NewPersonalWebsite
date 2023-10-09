// Make the DIV element draggable:

const elements = document.querySelectorAll(".polaroid");

for (var i = 0; i < elements.length; i++) {
    dragElement(elements[i]);
    var wrap = document.getElementById("polaroidWrap");
    var heightOffset =  elements[i].offsetHeight / wrap.offsetHeight * 100;
    var widthOffset =  elements[i].offsetWidth / wrap.offsetWidth * 100;
    var rotation = Math.random() * (15 + 15) - 15
    elements[i].style.transform = "rotate("+rotation+"deg)";
    var horizontal = Math.random() * (100 - widthOffset);
    var vertical = Math.random() * (100 - heightOffset);
    elements[i].style.left = horizontal + "%";
    elements[i].style.top = vertical + "%";
    elements[i].style.zIndex = i;
}



function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        for(var j = 0; j < elements.length; j++){
            if(elements[j].style.zIndex > 1)
                elements[j].style.zIndex -= 1;
        }
        elmnt.style.zIndex = elements.length - 1
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        elmnt.style.zIndex = "19";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}