document.addEventListener("DOMContentLoaded", function () {
    const navBtn = document.querySelector(".mobile-nav-btn");
    const closeBtn = document.querySelector(".mobile-close-btn");
    const nav = document.querySelector(".mobile-nav");
    // const menuIcon = document.querySelector(".nav-icon");

    const fade = document.querySelector(".mobile-nav-fade");

    navBtn.onclick = toggleMobile;
    closeBtn.onclick = toggleMobile;
    fade.onclick = toggleMobile;

    function toggleMobile() {
        nav.classList.toggle("active");
        navBtn.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
        fade.classList.toggle("mobile-nav-fade--open");
    }
});

/* =========  Back to top button  =============  */
const header = document.querySelector("header");
const backTopBtn = document.querySelector(".back-top");

if (backTopBtn) {
    window.onscroll = function () {
        // console.log("window.scrollY: " + window.scrollY);
        // console.log('header.clientHeight: ' + header.clientHeight);
        // console.log('backTopBtn.scrollTop: ' + backTopBtn.scrollTop);

        if (window.scrollY > header.clientHeight) {
            // console.log('Overflow');
            backTopBtn.classList.add("back-top--on");
        } else {
            // console.log('Downflow');
            backTopBtn.classList.remove("back-top--on");
        }
    };
}
