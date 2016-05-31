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

  function song2Promise() {
    return new Promise (function(resolve, reject){
      $.ajax('/jsons/songs.json')
        .done(function(song2_data){
          resolve(song2_data);
        })
        .fail(function(request, textStatus, errorThrown){
          reject(errorThrown);
        });
    });
  }

  musicHistory.getJSONinfo = function(){
    songPromise()
      .then(function (songData) {
        songList = songData.songs;
        return song2Promise();
      })
      .then(function (songData2) {
        songList2 = songData2.songs2;
        objectJSON(songList, songList2);
      })
      .then(function (songs){
        buttonListener(songList, songList2);
      });
  }


  return musicHistory;

}(musicHistory || {} ));
