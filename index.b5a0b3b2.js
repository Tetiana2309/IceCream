(()=>{const e={openMenuBtn:document.querySelector(".menu-open"),closeMenuBtn:document.querySelector(".menu-close"),menu:document.querySelector(".mobile-menu"),menuList:document.querySelector(".mobile-menu__list")};function o(){document.body.classList.toggle("no-scroll"),e.menu.classList.toggle("is-hidden")}e.openMenuBtn.addEventListener("click",o),e.closeMenuBtn.addEventListener("click",o),e.menuList.addEventListener("click",(function(){e.menu.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}))})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),openMobileBtn:document.querySelector("[data-mobile-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),closeMobileBtn:document.querySelector("[data-mobile-close]"),modal:document.querySelector("[data-modal]"),openIceCream:document.querySelector("[data-icecream-open]"),closeIceCream:document.querySelector("[data-icecream-close]"),icecreammodal:document.querySelector("[data-icecream-modal]"),openIceCoffee:document.querySelector("[data-icecoffee-open]"),closeIceCoffee:document.querySelector("[data-icecoffee-close]"),IceCoffeemodal:document.querySelector("[data-icecoffee-modal]"),openMilkShakes:document.querySelector("[data-milkshakes-open]"),closeMilkShakes:document.querySelector("[data-milkshakes-close]"),milkShakesmodal:document.querySelector("[data-milkshakes-modal]"),openReadMore:document.querySelector("[data-readmore-open]"),closeReadMore:document.querySelector("[data-readmore-close]"),readMoremodal:document.querySelector("[data-readmore-modal]"),openLocation:document.querySelector("[data-location-open]"),closeLocation:document.querySelector("[data-location-close]"),locationmodal:document.querySelector("[data-location-modal]"),openFranchise:document.querySelector("[data-franchise-open]"),closeFranchise:document.querySelector("[data-franchise-close]"),franchisemodal:document.querySelector("[data-franchise-modal]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}function c(){document.body.classList.toggle("modal-open"),e.icecreammodal.classList.toggle("is-hidden")}function t(){document.body.classList.toggle("modal-open"),e.IceCoffeemodal.classList.toggle("is-hidden")}function n(){document.body.classList.toggle("modal-open"),e.milkShakesmodal.classList.toggle("is-hidden")}function l(){document.body.classList.toggle("modal-open"),e.readMoremodal.classList.toggle("is-hidden")}function a(){document.body.classList.toggle("modal-open"),e.locationmodal.classList.toggle("is-hidden")}function d(){document.body.classList.toggle("modal-open"),e.franchisemodal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.openMobileBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o),e.openIceCream.addEventListener("click",c),e.closeIceCream.addEventListener("click",c),e.openIceCoffee.addEventListener("click",t),e.closeIceCoffee.addEventListener("click",t),e.openMilkShakes.addEventListener("click",n),e.closeMilkShakes.addEventListener("click",n),e.openReadMore.addEventListener("click",l),e.closeReadMore.addEventListener("click",l),e.openLocation.addEventListener("click",a),e.closeLocation.addEventListener("click",a),e.openFranchise.addEventListener("click",d),e.closeFranchise.addEventListener("click",d)})(),new Swiper(".mySwiper",{loop:!0,autoplay:!0}),new Swiper(".customersSwiper",{pagination:{el:".swiper-pagination",clickable:!0}});
//# sourceMappingURL=index.b5a0b3b2.js.map
