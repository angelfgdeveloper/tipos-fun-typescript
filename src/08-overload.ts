// Angel => [A,n,g,e,l] => string => string[]
// [A,n,g,e,l] => Angel => string => string[]


function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // return string
  } else {
    return input.split(''); // return string[]
  }
}

// const rtaArray = parseStr('Angel') as string[];
const rtaArray = parseStr('Angel');
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray:','Angel =>', rtaArray);

const rtaStr = parseStr(['A','n','g','e','l']);
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr:', "['A','n','g','e','l'] =>", rtaStr);

