const menuDropDown = () => {
    const btn = document.querySelector('.menuBtn');
    const menu = document.querySelector('.dropdown');


    btn.addEventListener('click', () => {
        menu.classList.toggle('showMenu');
    })
}

const projectsDropDown = () => {

    const btnProjects = document.querySelector('.dropdownprojects');
    const menuProjects = document.querySelectorAll('.subprojects');
    const menu = document.querySelector('.dropdown');

    btnProjects.addEventListener('click', () => {
        if(btnProjects.textContent == "Projects ▴") 
            btnProjects.textContent = "Projects ▾";
        else 
            btnProjects.textContent = "Projects ▴";
        menuProjects.forEach(link => {
            link.classList.toggle('showLink');
        });
        
       //menu.classList.toggle('hideMenu');
    })
}

const getDataFromApi = async () => {

    await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita", {
        "method": "GET",
        
    })
    .then(response => {
        
        console.log(response.json());
    })
    .catch(err => {
        console.log(err);
    });

}


menuDropDown();
projectsDropDown();
getDataFromApi();