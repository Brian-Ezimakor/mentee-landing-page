const testimonials = [
        {
        name: "-Esther Khadioli",
        image: "newesther.jpeg",
        testimony: "This program helped me focus my energy on my aspirations and turn them into reality. I developed my skills in sales and marketing, and with my mentor's guidance, I established my business, 'Khadiz Katering.' So far, I've gained over 15 clients for catering gigs."
        // This space was filled with influential women, and I'm grateful for such a supportive and inspiring experience"
    },

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
    },

    {
        name: "-Johanna Ngwali",
        image: "newjohhana.jpeg",
        testimony: "This program helped me discover what I'm passionate about, improve my interaction skills, and build a network. It has influenced my career goals and aspirations in a positive way."
    },

    {
        name: "-Jo'an Kambai",
        image: "jogirl.jpeg",
        testimony: "My Mentor guided me in securing  an internship and gave me valuable feedback on my statement of purpose. Through this program, I improved my time management and public speaking skills and gained clarity about my career aspirations"
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
