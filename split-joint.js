const lyrics = 'tumi bndu kala pakhi . ami jeno ki .boshonto kale tumay bolte parini . kala kala shada shada'
    //devide into words
    const parts = lyrics.split(' ');

    //devide into lines
    const sentence = lyrics.split('.');

    //devide every character
    const char =lyrics.split('')

//console.log(char);

const partial = lyrics.slice(5,8);
//console.log(partial);
const partial2 = lyrics.substring(5,8);
console.log(partial2);

const newLine =[
    'tumi bndu kala pakhi ',
    'ami jeno ki ',
    'boshonto kale tumay bolte parini ',
    'kala kala shada shada'
  ]
  const newSong = newLine.join('; ')
  console.log(newSong);