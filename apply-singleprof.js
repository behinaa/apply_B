// function toggleInfo1() {
//     const moreInfo = document.querySelectorAll('.box-moreinfo_B');
//     const icon = document.getElementsByIdName('rotate-icon');

//     if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
//         moreInfo.style.display = "block";
//         icon.style.transform = "rotate(90deg)";
//     } else {
//         moreInfo.style.display = "none";
//         icon.style.transform = "rotate(0deg)"; 
//     }
// }




// //  var array = [25,54,78,65]
// //  console.log(array[0])



function toggleInfo(index) {
    const moreInfo = document.querySelectorAll('.box-moreinfo_B')[index];
    const icon = document.getElementById('rotate-icon-' + index); 

    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
        moreInfo.style.display = "block";
        icon.style.transform = "rotate(90deg)";
    } else {
        moreInfo.style.display = "none";
        icon.style.transform = "rotate(0deg)"; 
    }
}


// function toggleInfo(index) {
//     const moreInfoDiv = document.querySelectorAll('.box-moreinfo_B')[index - 3]; // index starts from 3
//     const icon = document.getElementById(rorate-icon-${index});
    
//     if (moreInfoDiv.style.display === "none") {
//         moreInfoDiv.style.display = "block";
//         icon.style.transform = "rotate(180deg)"; // Rotate icon when open
//     } else {
//         moreInfoDiv.style.display = "none";
//         icon.style.transform = "rotate(0deg)"; // Reset icon when closed
//     }
// }



// function toggleInfo(index) {
//     const moreInfo = document.querySelectorAll('.box-moreinfo_B')[index];
//     const icon = document.getElementById('rotate-icon-' + index); 

//     if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
//         moreInfo.style.display = "block";
//         icon.classList.add('rotated');
//     } else {
//         moreInfo.style.display = "none";
//         icon.classList.remove('rotated'); 
//     }    
// }
