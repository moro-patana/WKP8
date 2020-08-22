// Create an array
const songs = [
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
const songTitle = document.querySelector(`input[name="songTitle"]`);
const artistName = document.querySelector(`input[name="artistName"]`);
const songStyle = document.querySelector(`#style-select`);
const duration = document.querySelector(`#duration-select`);
const artistPicture = document.querySelector(`input[name="url"]`);


const showSongList = () => {
    const html = songs
    .map(song => {
        return `
        <ul>
            <li>
                <span><img class="artist" src="${song.picture}" alt="pic"></span>
                <span>${song.title}<small>${song.style}</small></span>
                <span>${song.artist}<small>${song.length}</small></span>
                <span>
                    Score:
                <button>+1</button>
                </span>
                <span>
                <button>
                    <img class="delete" src="./img/delete-icon.webp" alt="trash">
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

