document.addEventListener('DOMContentLoaded', function() {
    
    var btnMenu = document.querySelector(".btn-open");
    var menu = document.querySelector(".navigation");

    btnMenu.addEventListener("click", function(){
        this.classList.toggle("btn-close");
        menu.classList.remove("hider");
   
        if(this.className == "btn-open"){
            menu.classList.add("hider");
        }
});
    

    
})