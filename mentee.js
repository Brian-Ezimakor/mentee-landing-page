const testimonials = [
    {
        name: "-Jennifer Meiza",
        image: "jennifer.jpg",
        testimony: "I was paired with a mentor, and she has been a supportive and influential person in my life since then, she helped me build my self confidence. I will definetly recommend Inspire Her Afrika to any woman who is looking out to develop leadership skills"
        
    },

    {
        name: "-Oluwadamilola Oladipupo",
        image: "damilola.jpg",
        testimony: "The mentorship was really a good place for to be, because it helped me with my new career growth and profession. I enjoyed every bite of the monthly mastery sessions"
    },

    {
        name: "-Memory Namasiku",
        image: "memory.jpg",
        testimony: "I have grown so much in such a short period of time, through their mastery sessions I have discoverd my personal brand and I now have a clear vision, goals and a clear profession & life roadmap. The program also helped me out on my stage fright"
    },

    {
        name: "-Adedoyin oshingbesan",
        image: "doyin2.jpg",
        testimony: "The experience has not only enriched me personally but has brought 50% growth to my bussiness and helped me navigate the importance of networking in bussiness. It has greatly contibuted to my personal and professional growth, I have gained skills to help foster my bussiness"
    }
]

let i = 0;
let j = testimonials.length;

let testimonySpan = document.getElementById("testimony")
let img = document.getElementById("image")
let testiferName = document.getElementById("name") 
let prevBtn = document.getElementById("prev")
let nextBtn = document.getElementById("next")


document.addEventListener("click", e => {
    if (e.target.matches(".prev")) {
    i = (j + i - 1) % j;
    displayTestimony()
    }
})

document.addEventListener("click", e => {
    if (e.target.matches(".next")) {
    i = (j + i + 1) % j;
    displayTestimony()
    }
})

let displayTestimony = () => {
    document.getElementById("testimony").innerHTML = `${testimonials[i].testimony}`
    document.getElementById("image").src = `${testimonials[i].image}`
    document.getElementById("name").innerHTML = `${testimonials[i].name}`
}

window.onload = displayTestimony;

onload = () => {
const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let yearSpan = document.getElementById("year");
yearSpan.innerText = currentYear;

displayTestimony()
}

document.addEventListener("click", e => {
    if (e.target.matches(".close")){
     document.querySelector('body').classList.toggle("activeSlide") 
}
})
