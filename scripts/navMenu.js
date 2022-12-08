
function picturesPage(){
    document.getElementById("sidebar_title").innerText = "圖像創作"
    document.getElementsByClassName("sidebar_menu").item(0).innerHTML = sidebarList_pic(_pictures)
    document.getElementsByClassName("picture").item(0).style.display = ""
    document.getElementsByClassName("dscrption").item(0).style.display = ""
    changePicture(0)
}

function videosPage(){
    document.getElementById("sidebar_title").innerHTML = "影音推薦"
    document.getElementsByClassName("sidebar_menu").item(0).innerHTML = ""
}

function authorInfo(){
    document.getElementById("sidebar_title").innerHTML = "作者介紹"
    document.getElementsByClassName("sidebar_menu").item(0).innerHTML = ""
}

function setNavFunc(){
    document.getElementsByClassName("nav_menu").item(0).getElementsByTagName("li").item(0).getElementsByTagName("a").item(0).href = "javascript:picturesPage()"
    document.getElementsByClassName("nav_menu").item(0).getElementsByTagName("li").item(1).getElementsByTagName("a").item(0).href = "javascript:videosPage()"
    document.getElementsByClassName("nav_menu").item(0).getElementsByTagName("li").item(2).getElementsByTagName("a").item(0).href = "javascript:authorInfo()"
}