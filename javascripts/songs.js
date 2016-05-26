var songs = {legs: "zztop", ironic: "alanis morisette", "welcome to the jungle": "guns and roses"};

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

        // <section>
        //   <h3 class="songName firstSongName">Faries Lie</h3>
        //   <ul class="pipes">
        //     <li class="name">Shakira</li>
        //     <li class="album">Kind Killers</li>
        //     <li class="genre">Classical</li>
        //   </ul>
        // </section>

placeholder = document.getElementById("songInfo");

function insertInDom(argument) {
  for (var i =0 in songs) {
    placeholder.innerHTML += "<section> <h3 class=\"songName\">" + songs[i] +
    "</h3> <ul class=\"pipes\"> <li class=\"name\">" + songs[i] + "</li> </ul> </section>"
  }
}
insertInDom();

console.log(placeholder);

//Make List Music visible and hide add Music
// var list_music_link = $('');
var list_music_view = $('#list_music_view');
var list_music_link = $('#list_music');
var add_music_view = $('#add_music_view');
var add_music_link = $('#add_music');

list_music_link.click( (event) => {
  event.preventDefault();
  console.log("this works");
  list_music_view.addClass("hidden");
  add_music_view.addClass("hidden");

  list_music_view.addClass("visible");
  list_music_view.removeClass("hidden");
});

add_music_link.click( (event) => {
  event.preventDefault();
  console.log("this also works");
  add_music_view.addClass("hidden");
  list_music_view.addClass("hidden");

  add_music_view.addClass("visible");
  add_music_view.removeClass("hidden");
});
