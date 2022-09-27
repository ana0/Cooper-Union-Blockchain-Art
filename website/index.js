var addButton = function () {
    console.log("click")
    var button = document.createElement('button');
    button.innerHTML = "New!"
    button.style.cssText = "position:absolute;z-index:10;border:1px blue solid;";
    button.style.top = Math.random() * window.innerHeight + "px";
    button.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(button);
}