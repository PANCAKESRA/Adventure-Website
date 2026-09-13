// 1. Get the exact ugly timestamp of when you last saved the HTML file
const lastSaved = new Date(document.lastModified);

// 2. Translate it into "Month Day, Year" format
const formattedDate = lastSaved.toLocaleDateString('en-US', {
    month: 'long',   // spells out "September"
    day: 'numeric',  // shows "10"
    year: 'numeric'  // shows "2026"
});

// 3. Find the span in the footer and inject the clean date!
document.getElementById("update-date").textContent = formattedDate;



const gallery = document.getElementById("gallery-container");

if (gallery) {
    photos.forEach(filename => {
        const item = document.createElement("div");
        item.className = "gallery-item";
        
        const img = document.createElement("img");
        img.src = `../Photos/${filename}`;
        img.alt = "Photo";
        
        item.appendChild(img);
        gallery.appendChild(item);
    });
}

const photos = [
    "Rainier.jpg",
    "Home.jpg",
    "Homes.jpg"
];