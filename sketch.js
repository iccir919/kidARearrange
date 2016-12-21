var lyrics;

function preload(){
  lyrics = loadStrings('idioteque.txt');
}

function setup(){

  lyrics = lyrics.join('</BR>');
  var changedLyrics = changeLyrics(lyrics);


  var originalLyricsSpace = createP(lyrics);

  var changedLyricsSpace = createP(changedLyrics);

  originalLyricsSpace.id('originalLyrics');
  changedLyricsSpace.id('changedLyrics');

  originalLyricsSpace.position(0, 205);
  changedLyricsSpace.position(windowWidth/2, 205);

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function changeLyrics(lyrics){
  var result = [];
  lyrics = lyrics.split('</BR>');

  var lyricsCopy = lyrics;

  while(result.length < lyricsCopy.length){

    var pointer = getRandomArbitrary(0, lyricsCopy.length);
    pointer = Math.floor(pointer);
    if(lyrics[pointer]){
      result.push(lyrics[pointer]);
      delete lyrics[pointer];
    }
  }
  return result.join('</BR>');
}
