var musicHistory = ( function (musicHistory) {
  var songsArray = [];

  function songPromise() {
    return new Promise (function(resolve, reject){
      $.ajax('/jsons/artists.json')
        .done(function(song_data){
          resolve(song_data);
          // console.log("after", song_data);
        })
        .fail(function(request, textStatus, errorThrown){
          reject(errorThrown);
        });
    });
  }

  musicHistory.getJSONinfo = function(){
    songPromise().then(function (songData) {
      songList = songData.songs;
      objectJSON(songList);
      return songList;
    });
  }


  return musicHistory;

}(musicHistory || {} ));
