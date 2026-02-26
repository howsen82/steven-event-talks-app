const talksData = [
    {
        title: "Introduction to AI in Software Engineering",
        speakers: ["Dr. Alex W. Smith"],
        category: ["AI", "Software Engineering"],
        duration: "1 hour",
        description: "An overview of how Artificial Intelligence is transforming software development lifecycle, from automated testing to code generation."
    },
    {
        title: "Modern JavaScript Frameworks: A Deep Dive",
        speakers: ["Jane Doe", "John Public"],
        category: ["JavaScript", "Web Development", "Frontend"],
        duration: "1 hour",
        description: "Exploring the latest trends and best practices in modern JavaScript frameworks like React, Vue, and Angular."
    },
    {
        title: "Cloud Native Architectures with Kubernetes",
        speakers: ["Chris Johnson"],
        category: ["Cloud", "DevOps", "Kubernetes"],
        duration: "1 hour",
        description: "Building scalable and resilient applications using Kubernetes and other cloud-native technologies."
    },
    {
        title: "Cybersecurity Best Practices for Developers",
        speakers: ["Dr. Sarah Connor"],
        category: ["Security", "Development"],
        duration: "1 hour",
        description: "Essential cybersecurity practices every developer should know to build secure applications."
    },
    {
        title: "Data Science with Python: From Zero to Hero",
        speakers: ["Michael Green"],
        category: ["Data Science", "Python", "Machine Learning"],
        duration: "1 hour",
        description: "A practical guide to data science using Python, covering data analysis, visualization, and machine learning."
    },
    {
        title: "The Future of WebAssembly",
        speakers: ["Emily White"],
        category: ["Web Development", "WebAssembly"],
        duration: "1 hour",
        description: "Discover the potential of WebAssembly for high-performance web applications and beyond."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const scheduleContainer = document.getElementById('schedule');
    const searchInput = document.getElementById('searchInput');

    let currentHour = 10; // Event starts at 10:00 AM

    function formatTime(hour, minute) {
        const h = hour % 12 === 0 ? 12 : hour % 12;
        const ampm = hour < 12 ? 'AM' : 'PM';
        const m = minute.toString().padStart(2, '0');
        return `${h}:${m} ${ampm}`;
    }

    function renderSchedule(filterCategory = '') {
        scheduleContainer.innerHTML = ''; // Clear previous schedule

        let talkIndex = 0;
        let minute = 0;

        for (let i = 0; i < 6; i++) { // Loop for 6 talks and lunch
            const talk = talksData[talkIndex];

            // Render talk
            if (talk) {
                const talkStartTime = formatTime(currentHour, minute);
                minute += 60; // 1 hour talk
                const talkEndTime = formatTime(currentHour, minute);

                if (talk.category.some(cat => cat.toLowerCase().includes(filterCategory.toLowerCase()))) {
                    const talkCard = document.createElement('div');
                    talkCard.classList.add('talk-card');
                    talkCard.innerHTML = `
                        <p class="time">${talkStartTime} - ${talkEndTime}</p>
                        <h2>${talk.title}</h2>
                        <p><strong>Speakers:</strong> ${talk.speakers.join(', ')}</p>
                        <p class="category"><strong>Category:</strong> ${talk.category.join(', ')}</p>
                        <p>${talk.description}</p>
                    `;
                    scheduleContainer.appendChild(talkCard);
                }
                talkIndex++;

                // Add 10 minutes transition
                minute += 10;
                if (minute >= 60) {
                    currentHour += Math.floor(minute / 60);
                    minute = minute % 60;
                }
            }


            // Check for lunch break after the 3rd talk
            if (i === 2) {
                const lunchStartTime = formatTime(currentHour, minute);
                minute += 60; // 1 hour lunch
                const lunchEndTime = formatTime(currentHour, minute);

                const lunchCard = document.createElement('div');
                lunchCard.classList.add('lunch-break-card');
                lunchCard.innerHTML = `
                    <p class="time">${lunchStartTime} - ${lunchEndTime}</p>
                    <h2>Lunch Break</h2>
                    <p>Enjoy your meal!</p>
                `;
                scheduleContainer.appendChild(lunchCard);

                // No transition after lunch, directly start next talk's calculation
                // The next talk will start at lunchEndTime
            }
        }
    }

    searchInput.addEventListener('input', (event) => {
        renderSchedule(event.target.value);
    });

    // Initial render
    renderSchedule();
});
