// // MOBILE NAV

   const staticNav = document.querySelector("body");
   const nav = document.querySelector("#nav-items");
   const mockup = document.querySelector(".mockups");
   const hamburger = document.querySelector(".hamburger");
   const closeBtn = document.querySelector(".close-btn");
   
   function openNav() {
    nav.style.display = "block";
    mockup.style.display = "none";
    hamburger.style.display = "none"
    closeBtn.style.display = "block"
    staticNav.style.overflow = "hidden";
   }

    function closeNav() {
        nav.style.display = "none";
        mockup.style.display = "block";
        hamburger.style.display = "block"
        closeBtn.style.display = "none"
        staticNav.style.overflow = "auto";
   }



