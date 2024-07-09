const logo_scroll = document.querySelector("#logo_scroll");
const section_1 = document.querySelector("#section1");

function visible(){
    logo_scroll.classList.add("logo_invisible");
    logo_scroll.classList.remove("logo_visible");
}

function invisible(){
    logo_scroll.classList.add("logo_visible");
    logo_scroll.classList.remove("logo_invisible");
}

//When we scroll down, logo_scroll will become visible
const section_1_options = {
    rootMargin: "-100px 0px 0px 0px"
};

const section_1_observer = new IntersectionObserver(function(
    entries,
    section_1_observer
){
entries.forEach(entry =>{
    if(!entry.isIntersecting){
        visible();
    }
    else{
        invisible();
    }
})
}, section_1_options);

section_1_observer.observe(section_1);