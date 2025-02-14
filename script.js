
document.addEventListener('DOMContentLoaded', function() {
    // Fetches JSON data from the provided URL.
    fetch('https://raw.githubusercontent.com/aceuh1/aceuh6.github.io/refs/heads/main/song.JSON')
        .then(response => response.json())  // Parses the response as JSON.
        .then(data => {
            const contentDiv = document.getElementById('content'); // Reference to the content div.
            
            data.forEach(item => {
                const section = document.createElement('section'); // Creates a new section element.
                section.innerHTML = `
                    <h2>${item.title}</h2>  
                    <p><strong>Artist:</strong> ${item.artist}</p>
                    
                    <iframe style="border-radius:20px" src="${item.iFrameUrl}" width="100%" height="80" frameBorder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    
                    <p><strong>Length:</strong> ${item.length}</p>
                    <p><strong>Album:</strong> ${item.album}</p>     
                    <p><strong>Credits:</strong> ${item.credits}</p>
                    <p><strong>Release Date:</strong> ${item.date}</p>
                    
                    <button onclick="toggleLyrics(this)">Show Lyrics</button>
                    <p class="lyrics" style="display: none;"><strong>Lyrics:</strong> <br> ${item.lyrics.replace(/\n/g, '<br>')}</p>
                `;
                contentDiv.appendChild(section); // Appends the new section to the content div.
            });
        })
        .catch(error => console.error('Error loading the data:', error)); // Logs any errors in the fetch operation.
});

// Function to toggle the visibility of lyrics
function toggleLyrics(button) {
    const lyricsParagraph = button.nextElementSibling; // Gets the next sibling (lyrics paragraph)
    if (lyricsParagraph.style.display === 'none') {
        lyricsParagraph.style.display = 'block';
        button.textContent = "Hide Lyrics";
    } else {
        lyricsParagraph.style.display = 'none';
        button.textContent = "Show Lyrics";
    }
}
