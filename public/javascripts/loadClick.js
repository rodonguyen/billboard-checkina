/** @format */

// Fetch the song's data 
const fetchSongData = (event) => {
  const textContent = event.target.textContent;
  // Process and extract needed data from textContent
  const temp = textContent.replace(" Featuring ", " - ").split(" - ");
  const songTitle = temp[0];
  const artist = temp[1].split(" & ")[0];

  // Fetch news to pug
  fetch(`/news/${artist}`)
    .then((res) => res.json())
    .then((data) => ([data] = data))
    .then((data) => {
        const newsParent = document.getElementById("news");
        var p = document.createElement("div");
        p.setAttribute('id','newsLink');
        // Clean any existing news
        newsParent.innerHTML = '';
        // Append news headlines
        p.innerHTML += '<ul>';
        for (let i = 0; i < 10; i++) {
            p.innerHTML += `<li><a href=${data[i].url} target="_blank" rel="noopener noreferrer">${data[i].title}</a></li>`;
            newsParent.append(p);
        }            
        p.innerHTML += '</ul>';
    });

  // Fetch lyrics to pug
  fetch(`/lyrics/${artist}/${songTitle}/`)
    .then((res) => res.json())
    .then((data) => {
      const lyricsParent = document.getElementById("lyrics");
      // Fix lyrics
      lyricsParent.innerHTML = data.lyrics
        .replace(/\n/, "<br/><br/>")
        .replace(/\n/g, "<br/>")
        .replace("Paroles de la chanson ", "")
        .replace(" par ", " by ");
    
      // Add youtube search button
      const youtubeSearch = document.getElementById("youtubeSearch");
      youtubeSearch.innerHTML = '<input '+
                                'type="button" '+
                                'onclick=" window.open(\'https://www.youtube.com/results?search_query=' + songTitle.replace("'", " ") + '+' + artist + ' mv' + '\', \'_blank\')" ' +
                                'value="Search for MV on YouTube">';
    })
    .catch((error) => {
      const lyricsParent = document.getElementById("lyrics");
      lyricsParent.textContent = "Lyrics could not be found!";
      console.log(error);
    });
};

// Add an event listener to each song title
const songTitles = document.getElementsByClassName("songTitle");
for (let songTitle of songTitles) {
  songTitle.addEventListener("click", (event) => fetchSongData(event));
}