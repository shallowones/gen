"use strict";!function(e,n){e(function(){new n(".js-header-bottom",{loop:!1,grabCursor:!0,slidesPerView:"auto"}),new n(".js-index-slider",{loop:!0,slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}}),new n(".js-main-slider",{loop:!1,slidesPerView:"auto",grabCursor:!0,pagination:{el:".swiper-pagination",clickable:!0}}),new n(".js-videos",{loop:!1,slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new n(".js-partners",{loop:!0,slidesPerView:"auto",navigation:{nextEl:".partners-next",prevEl:".partners-prev"}});var t=e(".js-range"),i=function(e){return t.data(e)},r=function(n){return parseInt(e(i(n)).val())};t.slider({values:[r("target-1"),r("target-2")],range:!0,min:i("min"),max:i("max"),step:i("step"),slide:function(n,t){var r="target-"+(t.handleIndex+1);e(i(r)).val(t.value)}})})}(jQuery,Swiper);