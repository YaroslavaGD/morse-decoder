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
};

function decode(expr) {
    let MORSE_TABLE_BIN = {};

    for (key in MORSE_TABLE) {
        let val = MORSE_TABLE[key];
        let zeroArr = Array(10).fill("0");
        let newKey = [...zeroArr, ...key.replaceAll('.', '10').replaceAll('-','11')].slice(-10).join("");

        MORSE_TABLE_BIN[newKey] = val;
    }

    let result = expr.split("**********").map(word => {
        let letters =  word.match(/.{1,10}/g);
        let decodedWord = letters.map(symbol => MORSE_TABLE_BIN[symbol]).join("");

        return decodedWord;
    });

    return result.join(" ");
}

module.exports = {
    decode
}