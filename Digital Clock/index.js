setInterval(() => {
    let time = document.getElementById("time");
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ms1 = d.getMilliseconds();
    time.innerHTML = h + ":" + m + ":" + s;
    let ms = document.getElementById("ms");
    ms.innerHTML = ms1;
}, 100);
