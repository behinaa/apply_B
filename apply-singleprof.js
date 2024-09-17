function toggleInfo() {
    const moreInfo = document.querySelector('.box-moreinfo_B');
    const icon = document.getElementById('rotate-icon');

    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
        moreInfo.style.display = "block";
        icon.style.transform = "rotate(90deg)";
    } else {
        moreInfo.style.display = "none";
        icon.style.transform = "rotate(0deg)"; 
    }
}
