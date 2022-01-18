function lockedProfile() {
    Array.from(document.querySelectorAll(".profile button")).forEach(b => b.addEventListener('click', onToggle));

    function onToggle(e) {
        let isActive = e.target.parentElement.querySelector('input[type="radio"][value="unlock"]').checked;

        if(isActive){
            console.log(e.target.parentElement);
             const infoDiv = e.target.parentElement.querySelector("div");
            if(e.target.textContent == "Show more"){
                infoDiv.style.display = "block";
                e.target.textContent = "Hide it";
            }else{
                infoDiv.style.display = '';
                e.target.textContent = "Show more";
            }
        }
    }
}