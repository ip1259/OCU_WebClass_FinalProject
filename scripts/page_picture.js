
function changePicture(pic_id){
    document.getElementById("_picDisplay").src = _pictures[pic_id].src
    document.getElementById("_picTitle").innerHTML = _pictures[pic_id].title;
    document.getElementById("_picAuthor").innerHTML = _pictures[pic_id].author;
    document.getElementById("_picDscrp").innerHTML = _pictures[pic_id].description;
}

function sidebarList(_pictures){
    let pictures = Array.from(_pictures)
    let output = ""
    let i = 0
    pictures.forEach(element => {
        output += '<li><a href="javascript:changePicture('+ i +')" id="lstPic_'+i+'" onclick="">'+element.title+'</a></li>\n'
        i++
    });
    return output
}

