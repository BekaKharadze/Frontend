const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");

if(menuBtn){
    menuBtn.addEventListener("click",()=>{
        navLinks.classList.toggle("show");
    });
}

const featuredAnimals = [
    {
        name:"Max",
        status:"Injured",
        location:"Tbilisi",
        image:"https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800"
    },
    {
        name:"Bella",
        status:"Lost",
        location:"Batumi",
        image:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800"
    },
    {
        name:"Charlie",
        status:"Rescued",
        location:"Kutaisi",
        image:"https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800"
    }
];

const container=document.getElementById("featuredAnimals");

if(container){

    featuredAnimals.forEach(animal=>{

        const card=document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}">

            <div class="card-content">
                <h3>${animal.name}</h3>
                <p>Status: ${animal.status}</p>
                <p>Location: ${animal.location}</p>
            </div>
        `;

        container.appendChild(card);
    });
}