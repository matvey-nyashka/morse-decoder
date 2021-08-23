const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' '
  };
  
  function decode(expr) {
      let str = expr.match(/.{10}/g);
      let decodeString = '';
      let k = '';
      let arr = str.map(function(name){
       return name.match(/.{2}/g)
      })
  
      for (let i = 0; i < arr.length; i++) {
        k = '';
        for (let j = 0; j < 5; j++){
          if (arr[i][j] == '00'){
            continue
          } else if (arr[i][j] == '10'){
            k += '.'
          } else if (arr[i][j] == '11'){
            k += '-'
          } else {
            k = ' '
            break;
          }
        }
        decodeString += MORSE_TABLE[k]
      }
      return decodeString;
  }

module.exports = {
    decode
}