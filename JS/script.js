const button = document.getElementsByClassName("btn")[0];





button.addEventListener("click", function(){
    button.innerHTML = "Wird in den Warenkorb gelegt";
    button.style.backgroundColor = "grey";
    
    setTimeout(function(){
        button.innerHTML = "In den Warenkorb";
        button.style.backgroundColor = "#52bdff";
    }, 1000);

    
    
});