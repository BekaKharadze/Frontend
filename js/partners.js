const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");

if(menuBtn){
    menuBtn.addEventListener("click",()=>{
        navLinks.classList.toggle("show");
    });
}

const clinics=[
    {
        name:"Happy Paws Clinic",
        city:"Tbilisi",
        phone:"+995 555 111 111"
    },
    {
        name:"Animal Care Center",
        city:"Batumi",
        phone:"+995 555 222 222"
    },
    {
        name:"Pet Rescue Clinic",
        city:"Kutaisi",
        phone:"+995 555 333 333"
    },
    {
        name:"Safe Paws Shelter",
        city:"Rustavi",
        phone:"+995 555 444 444"
    },
    {
        name:"Hope Veterinary Center",
        city:"Gori",
        phone:"+995 555 555 555"
    },
    {
        name:"Friendly Animals Clinic",
        city:"Zugdidi",
        phone:"+995 555 666 666"
    }
];

const partnersContainer=
    document.getElementById("partnersContainer");

const clinicSearch=
    document.getElementById("clinicSearch");

function renderClinics(data){

    partnersContainer.innerHTML="";

    data.forEach(clinic=>{

        const card=document.createElement("div");

        card.classList.add("partner-card");

        card.innerHTML=`
            <h3>${clinic.name}</h3>

            <p>
                📍 ${clinic.city}
            </p>

            <p>
                📞 ${clinic.phone}
            </p>

            <button class="btn">
                Contact
            </button>
        `;

        partnersContainer.appendChild(card);
    });
}

function filterClinics(){

    const search=
        clinicSearch.value.toLowerCase();

    const filtered=
        clinics.filter(clinic=>
            clinic.name
                .toLowerCase()
                .includes(search)
        );

    renderClinics(filtered);
}

clinicSearch.addEventListener(
    "input",
    filterClinics
);

renderClinics(clinics);