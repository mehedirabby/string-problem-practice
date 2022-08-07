const lyrics = 'tumi bndu kala pakhi . ami jeno ki .boshonto kale tumay bolte parini . kala kala shada shada'
const searchItem = 'Pakhi';
const lyricsLowerCase = lyrics.toLowerCase();
const searchItemLower = searchItem.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchItemLower);

 const doesExistOneLine = lyrics.toLowerCase().includes(searchItem.toLowerCase());
// console.log(doesExistOneLine);

// console.log(doesExist);

//-----------------------------------------
// index of
console.log(lyrics.indexOf('kaila'))
console.log(lyrics.indexOf('tumi'))
if(lyrics.indexOf('sada') !== -1){
    console.log('exist inside the string')
}
else{
    console.log('cannot find any string')
}
// start with
console.log(lyrics.startsWith('tumi'))


//ends with
const fileName = "mybio.pdf";
const otherName = "mypic.png";
fileName.endsWith('.pdf');