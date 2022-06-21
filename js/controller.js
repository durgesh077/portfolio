let index = document.getElementById("index")
index.addEventListener("click", generateFlower)
let imgFrame = document.getElementById("Image")
let about = document.getElementById("aboutWrapper")
let dmImage = imgFrame.firstElementChild
function generateFlower(e) {
    let cx = e.clientX
    let cy = e.clientY
    let fl = new flower()
    fl.append_to(e.target, cx, cy)
    setTimeout((th) => {
        th.first.remove()
        th.second.remove()
        th.third.remove()
    }, 4000, fl);
}
function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
about.addEventListener("mousemove", e => {
    e.stopPropagation()
    let { left, top } = getOffset(imgFrame)
    let mid_x = left + (imgFrame.offsetWidth >> 1)
    let mid_y = imgFrame.offsetTop + (imgFrame.offsetHeight >> 1)
    let cx = e.clientX
    let cy = e.clientY
    let dx = cx - mid_x
    let dy = cy - mid_y
    imgFrame.style.transform = `rotate3d(${dx/100},${dy/100},0,${(dx+dy)/10}deg)`
})