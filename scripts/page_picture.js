function changePicture(pic_id){
    document.getElementById("_picDisplay").src = _pictures[pic_id].src
    document.getElementById("_picTitle").innerHTML = _pictures[pic_id].title;
    document.getElementById("_author").innerHTML = _pictures[pic_id].author;
    document.getElementById("_dscrp").innerHTML = _pictures[pic_id].description;
}

function sidebarList_pic(_pictures){
    let output = ""
    let i = 0
    _pictures.forEach(element => {
        output += '<li><a href="javascript:changePicture('+ i +')" id="lstPic_'+i+'">'+element.title+'</a></li>\n'
        i++
    });
    return output
}

