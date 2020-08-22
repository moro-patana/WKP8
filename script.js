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
    }
]

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
                <span>
                    Score:
                <button value="${song.id}" class="score">${song.score}</button>
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
const scoreCounter = e => {
    const scoreBtn = e.target.closest('button.score');
    let count = 0;
    if (scoreBtn) {
        count += 1;
    }

}

const searchForm = e => {
    const songList = e.target.closest(`ul.song-list`);
    if (searchForm.value === song.style) {
       songList.classList.add(`open`);
    } else {
        songList.classList.remove(`open`);
    }
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
postForm.addEventListener('submit', addSong);
albums.addEventListener('click', handleClick);
albums.addEventListener('click', scoreCounter);
albums.addEventListener(`listUpdated`, showSongList);
