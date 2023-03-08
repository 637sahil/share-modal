const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");

// for opening
const openModal=()=>{
    console.log("modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

// for closing
const closeModal=()=>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");

}