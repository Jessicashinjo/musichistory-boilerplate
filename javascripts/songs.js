var list_music_view = $('.list_music_view');
var list_music_link = $('#list_music');
var add_music_view = $('.add_music_view');
var add_music_link = $('#add_music');
var songObjects = $('#songInfo');
var domContent = "";
var songArtist = [];

list_music_link.hide();
add_music_link.show();
add_music_view.hide();

function insertInDom() {
  // var domContent = '';
  // console.log("songArtist", songArtists);
  songArtist.forEach( function (item, index){
    console.log(item);
     domContent +=
      `<section>
        <h3 class="songName">${item.title}</h3>
        <ul class="pipes">
          <li class="name">${item.artist}</li>
          <li class="name">${item.album}</li>
        </ul>
        <button id="${index}">Delete</button>
      </section>`;
  })
  songObjects.html(domContent);
  show_more_less()
}

function show_more_less() {
    song_size = $("#songInfo section").size();
    x=3;
    $('#songInfo section:lt('+x+')').show();
    $('#more_button').click(function () {
        x= (x+3 <= song_size) ? x+3 : song_size;
        $('#songInfo section:lt('+x+')').show();
    });
    $('#less_button').click(function () {
        x=(x-4<0) ? 3 : x-3;
        $('#songInfo section').not(':lt('+x+')').hide();
    });
}

// function click_more(songArray2) {
//   $('#more_button').click( (event) => {
//   })
// }

function buttonListener(songList) {
  songList.forEach( (item, index) => {
    $(`#${index}`).click( (event) => {
      $(`#${index}`).closest('section').remove();
      const position = songArtist.indexOf(item);
      songArtist.splice(position, 1);
      console.log("my position is", position);
      console.log("Song Artist Array", songArtist);
    })
  })
}

//When List Music is clicked make List Music visible and hide add Music
list_music_link.click( (event) => {
  event.preventDefault();
  list_music_link.hide();
  add_music_link.show();
  list_music_view.hide();
  add_music_view.hide();

  list_music_view.show();
});

//When Add Music is clicked make Add Music visible and hide List Music
add_music_link.click( (event) => {
  event.preventDefault();
  list_music_link.show();
  add_music_link.hide();
  add_music_view.hide();
  list_music_view.hide();

  add_music_view.show();
});

/*********************
Add Music
*********************/

$('#add_button').click( (event) => {
  var song_name = $('#song_name').val();
  var artist = $('#artist_name').val();
  var album = $('#album_name').val();
  songArtist.push({title: `${song_name}`, artist: `${artist}`, album: `${album}`})
  console.log("New Array", songArtist);
  song_name = '';
  artist = '';
  album = '';
});

function objectJSON (songs, songs2){
  songArtist = songs;
  songs2.forEach( (item) => {
    songArtist.push(item);
  });
  insertInDom();
}

musicHistory.getJSONinfo();
