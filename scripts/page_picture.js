import _pictures from "./picInfos.js";
function changePicture(pic_id){
    document.getElementById("_picDisplay").src = _pictures[pic_id].src
    document.getElementById("_picTitle").innerHTML = _pictures[pic_id].title;
    document.getElementById("_picAuthor").innerHTML = _pictures[pic_id].author;
    document.getElementById("_picDscrp").innerHTML = _pictures[pic_id].description;
}

