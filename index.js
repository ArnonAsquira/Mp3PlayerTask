//assistance functions

//converts seconds to the required minute fomat
function secondsToMinutesConvertor(songDuration){
  let durationInMinutes = songDuration / 60;
  let minutes = 0;
  let seconds = 0;
  let lengthFormat = 0;
  minutes = Math.floor(durationInMinutes);
  if(minutes < 10){
    minutes = "0" + minutes.toString();
  }else{
    minutes = minutes.tostring();
  }
  seconds = (Math.round((durationInMinutes - minutes) * 60));
  if( seconds < 10){
    seconds = "0" + seconds.toString();
  }else{
    seconds = seconds.toString();
  }
  lengthFormat = minutes + ":" + seconds
  return lengthFormat
}
//recieves a song's id an returns that song's object
function getSongObjectById(id){
    let song = player.songs.filter(songObject => {
        if(songObject.id === id){
          return songObject;
        }
      })
      if(song.length == false){
        throw "undefined id";
      }
      song = song[0];
      return song;
}


const player = {
  songs: [
    {
      id: 1,
      title: 'Vortex',
      album: 'Wallflowers',
      artist: 'Jinjer',
      duration: 242,
    },
    {
      id: 2,
      title: 'Vinda',
      album: 'Godtfolk',
      artist: 'Songleikr',
      duration: 160,
    },
    {
      id: 7,
      title: 'Shiroyama',
      album: 'The Last Stand',
      artist: 'Sabaton',
      duration: 213,
    },
    {
      id: 3,
      title: 'Thunderstruck',
      album: 'The Razors Edge',
      artist: 'AC/DC',
      duration: 292,
    },
    {
      id: 4,
      title: 'All is One',
      album: 'All is One',
      artist: 'Orphaned Land',
      duration: 270,
    },
    {
      id: 5,
      title: 'As a Stone',
      album: 'Show Us What You Got',
      artist: 'Full Trunk',
      duration: 259,
    },
  ],
  playlists: [
    { id: 1, name: 'Metal', songs: [1, 7, 4] },
    { id: 5, name: 'Israeli', songs: [4, 5] },
  ],
  playSong(id) {
    let song = getSongObjectById(id);
    song.duration = secondsToMinutesConvertor(song.duration);
    return("Playing " + song.title + " from " + song.album + " by " + song.artist + " | " + song.duration + ".")
  },
}

// playSong outside function
function playSong(id) {
 console.log(player.playSong(id))
}
playSong(5);

function removeSong(id) {
  let indexCounter = 0;
    player.songs.forEach(song => {
      indexCounter ++;
      if(song.id === id){
        player.songs.splice(player.songs[indexCounter] ,1);
      }else{
        indexCounter ++;
      }
      if(indexCounter === player.songs.length){
        throw "Undefined ID"
      }
    })
}

function addSong(title, album, artist, duration, id) {
  // your code here
}

function removePlaylist(id) {
  // your code here
}

function createPlaylist(name, id) {
  // your code here
}

function playPlaylist(id) {
  // your code here
}

function editPlaylist(playlistId, songId) {
  // your code here
}

function playlistDuration(id) {
  // your code here
}

function searchByQuery(query) {
  // your code here
}

function searchByDuration(duration) {
  // your code here
}

module.exports = {
  player,
  playSong,
  removeSong,
  addSong,
  removePlaylist,
  createPlaylist,
  playPlaylist,
  editPlaylist,
  playlistDuration,
  searchByQuery,
  searchByDuration,
}
