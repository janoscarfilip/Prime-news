const logo_scroll = document.querySelector("#logo_scroll");
const marker = document.querySelector("#header_divider_img");

function visible(){
    logo_scroll.classList.add("logo_visible");
    logo_scroll.classList.remove("logo_invisible");
}

function invisible(){
    logo_scroll.classList.add("logo_invisible");
    logo_scroll.classList.remove("logo_visible");
}

//When we scroll down, logo_scroll will become visible
const marker_options = {
    rootMargin: "-100px 0px 0px 0px"
};

const marker_observer = new IntersectionObserver(function(
    entries,
    marker_observer
){
entries.forEach(entry =>{
    if(!entry.isIntersecting){
        visible();
    }
    else{
        invisible();
    }
})
}, marker_options);

marker_observer.observe(marker);