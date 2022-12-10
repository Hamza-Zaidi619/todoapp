var mainlist = document.getElementById("mainlist");
var input=document.getElementById("inp")



function addelem(){
    var a =document.createElement("LI");
    // var b = document.createTextNode("HELLOWORLD");
    var b = document.createTextNode(inp.value);

    a.appendChild(b);

    // mainlist.appendChild(a)
    inp.value=""
    // console.log(inp.value)
    console.log(a);// was creating list text


    var editBtn = document.createElement("Button");
    var editBtnText = document.createTextNode("Delete");
    editBtn.appendChild(editBtnText);
    a.appendChild(editBtn)
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute("onclick","del(this)")

    // second button
    var updatebtn = document.createElement("Button");
    var Button = document.createTextNode("Edit");
    updatebtn.appendChild(Button)
    a.appendChild(updatebtn)
    
    updatebtn.setAttribute("class","btn")
    updatebtn.setAttribute("onclick","wxy(this)")
    mainlist.appendChild(a)


}
function del(element){
 console.log(element.parentNode.remove())
// console.log(element)
}
function wxy(element){
    console.log(element.parentNode)
    element.parentNode.firstChild.nodeValue = prompt()
    // console.log(element)

}
function Delete(){
    mainlist.innerHTML=""
}