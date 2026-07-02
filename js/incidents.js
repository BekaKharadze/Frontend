const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");

if(menuBtn){
    menuBtn.addEventListener("click",()=>{
        navLinks.classList.toggle("show");
    });
}

const animals=[
    {
        id:1,
        name:"Max",
        status:"injured",
        location:"Tbilisi",
        image:"https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800"
    },
    {
        id:2,
        name:"Bella",
        status:"lost",
        location:"Batumi",
        image:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800"
    },
    {
        id:3,
        name:"Charlie",
        status:"rescued",
        location:"Kutaisi",
        image:"https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800"
    },
    {
        id:4,
        name:"Rocky",
        status:"injured",
        location:"Rustavi",
        image:"https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800"
    },
    {
        id:5,
        name:"Lucy",
        status:"lost",
        location:"Gori",
        image:"https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800"
    },
    {
        id:6,
        name:"Milo",
        status:"rescued",
        location:"Zugdidi",
        image:"https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800"
    }
];

const container=document.getElementById("incidentContainer");
const searchInput=document.getElementById("searchInput");
const statusFilter=document.getElementById("statusFilter");
const favoriteCount=document.getElementById("favoriteCount");

function updateFavoriteCount(){

    const favorites=
        JSON.parse(localStorage.getItem("favorites"))||[];

    favoriteCount.textContent=favorites.length;
}

function renderAnimals(data){

    container.innerHTML="";

    data.forEach(animal=>{

        const favorites=
            JSON.parse(localStorage.getItem("favorites"))||[];

        const isFavorite=
            favorites.includes(animal.id);

        const card=document.createElement("div");

        card.classList.add("card");

        card.innerHTML=`
            <img
                src="${animal.image}"
                alt="${animal.name}"
            >

            <div class="card-content">

                <h3>${animal.name}</h3>

                <p>
                    Status: ${animal.status}
                </p>

                <p>
                    Location: ${animal.location}
                </p>

                <button
                    class="favorite-btn"
                    data-id="${animal.id}"
                >
                    ${isFavorite
                        ? "Remove Favorite"
                        : "Add Favorite"}
                </button>

            </div>
        `;

        container.appendChild(card);
    });

    document
        .querySelectorAll(".favorite-btn")
        .forEach(button=>{

            button.addEventListener("click",()=>{

                const id=
                    Number(button.dataset.id);

                let favorites=
                    JSON.parse(
                        localStorage.getItem("favorites")
                    )||[];

                if(favorites.includes(id)){

                    favorites=
                        favorites.filter(
                            favorite=>favorite!==id
                        );

                }else{

                    favorites.push(id);

                }

                localStorage.setItem(
                    "favorites",
                    JSON.stringify(favorites)
                );

                updateFavoriteCount();

                applyFilters();
            });
        });
}

function applyFilters(){

    const search=
        searchInput.value.toLowerCase();

    const status=
        statusFilter.value;

    const filtered=
        animals.filter(animal=>{

            const matchSearch=
                animal.name
                    .toLowerCase()
                    .includes(search);

            const matchStatus=
                status==="all" ||
                animal.status===status;

            return matchSearch && matchStatus;
        });

    renderAnimals(filtered);
}

searchInput.addEventListener(
    "input",
    applyFilters
);

statusFilter.addEventListener(
    "change",
    applyFilters
);

updateFavoriteCount();

renderAnimals(animals);