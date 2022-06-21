class flower {
    constructor(st_size = 70) {
        this.first = document.createElement("div");
        this.first.style.position = "absolute"
        this.first.style.width = st_size + "px"
        this.first.style.height = st_size / 2 + "px"
        this.first.classList.add("flower")
        this.first.classList.add("f1")

        this.second = document.createElement("div");
        this.second.style.position = "absolute"
        this.second.style.width = st_size + "px"
        this.second.style.height = st_size / 2 + "px"
        this.second.style.transform = "rotate(60deg)"
        this.second.classList.add("flower")
        this.second.classList.add("f2")

        this.third = document.createElement("div");
        this.third.style.position = "absolute"
        this.third.style.width = st_size + "px"
        this.third.style.transform = "rotate(120deg)"
        this.third.style.height = st_size / 2 + "px"
        this.third.classList.add("flower")
        this.third.classList.add("f3")
    }
    append_to(el, cx, cy) {
        this.first.style.top = cy - parseFloat(this.first.style.height) + "px"
        this.second.style.top = cy - parseFloat(this.second.style.height) + "px"
        this.third.style.top = cy - parseFloat(this.third.style.height) + "px"

        this.first.style.left = cx - parseFloat(this.first.style.width) + "px"
        this.second.style.left = cx - parseFloat(this.second.style.width) + "px"
        this.third.style.left = cx - parseFloat(this.third.style.width) + "px"


        el.append(this.first);
        el.append(this.second);
        el.append(this.third);
    }
}