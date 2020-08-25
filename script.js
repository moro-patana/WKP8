// Create an array
let songs = [
    {
        picture: "https://i.ytimg.com/vi/NIF6Y3IX9Ow/hqdefault.jpg",
        title: "RN44",
        style: "dancy",
        artist: "Dassman",
        length: "3:00",
        score: 0,
        id: 1598077207998
    },
    {
        picture: "https://i.ytimg.com/vi/7iPzTbEQ1Ng/hqdefault.jpg",
        title: "Lolita",
        style: "reggae",
        artist: "Murah",
        length: "4:00",
        score: 0,
        id: 1598077245438
    },
    {
        picture: "https://s1.dmcdn.net/D2-ci/x240-mo7.jpg",
        title: "Nahoana re",
        style: "slow",
        artist: "Volatiana",
        length: "4:00",
        score: 0,
        id: 1598077291521
    },
    {
    picture: "https://s2.dmcdn.net/v/Ge9l_1NcFfSneTmrN/x1080",
    title: "Mody atao an'izany",
    style: "dancy",
    artist: "Arione Joy",
    length: "3:00",
    score: 0,
    id: 1598359389198
},
]
songs.sort(function(a, b) {
    return a.title - b.title;
});
console.log(songs);

const albums = document.querySelector(`.albums`);
const postForm = document.querySelector(`.post-form`);
const searching = document.querySelector(`.searching`);



const showSongList = () => {
    const html = songs
    .map(song => {
        return `
        <ul class="song-list">
            <li>
                <span><img class="artist" src="${song.picture}" alt="pic"></span>
                <span class="${song.style}">${song.title}<small>${song.style}</small></span>
                <span>${song.artist}<small>${song.length}</small></span>
                <span class="score_counter">
                    Score: 0
                </span>
                <span>
                <button value="${song.id}" class="score">+1</button>
                </span>
                <span>
                <button class="delete" value="${song.id}">
                    <img class="delete-icon" src="./img/delete-icon.webp" alt="trash">
                </button>
                </span>
            </li>
        </ul>
        `;
    })
    .join('');
albums.innerHTML = html;
};
showSongList();

const addSong = e => {
	e.preventDefault();
    const formEl = e.currentTarget;   
	const newSong = {
		picture: formEl.picture.value,
		title: formEl.title.value,
		style: formEl.style.value,
		artist: formEl.artist.value,
        length: formEl.length.value,
        score: 0,
		id: Date.now(),
    };
    console.log(songs);
    songs.push(newSong);
    albums.dispatchEvent(new CustomEvent('listUpdated'));
    postForm.reset();
};

const searchingList = e => {
}
const handleClick = e => {
	const deleteBtn = e.target.closest('button.delete');
	if (deleteBtn) {
		const id = Number(deleteBtn.value);
		console.log(id);
        deleteSong(id);
        albums.dispatchEvent(new CustomEvent('listUpdated'));
    }
    const scoreBtn = e.target.closest('button.score');
    let count = 0;
      if (scoreBtn) {
          count += 1;
          albums.dispatchEvent(new CustomEvent('listUpdated'));
      }

};
const deleteSong = idToDelete => {
    songs = songs.filter(song => song.id !== idToDelete);
    albums.dispatchEvent(new CustomEvent('listUpdated'));
};
const counter = e => {
    let score = 0;
    for (let i = 0; i < songs.length; i++) {
     score = score + 1;
     albums.dispatchEvent(new CustomEvent('listUpdated'));
    }
    console.log(score);
}

console.log(counter());

postForm.addEventListener('submit', addSong);
albums.addEventListener('click', handleClick);
albums.addEventListener('click', counter);
albums.addEventListener(`listUpdated`, showSongList);
