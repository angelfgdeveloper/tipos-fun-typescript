// Angel => [A,n,g,e,l] => string => string[]
// [A,n,g,e,l] => Angel => string => string[]

// Sobrecarga
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // return string
//   } else {
//     return input.split(''); // return string[]
//   }
// }

export function parseStr(input: unknown):unknown {
  if (Array.isArray(input)) {
    return input.join(''); // return string
  } else if (typeof input === 'string') {
    return input.split(''); // return string[]
  } else if (typeof input === 'number') {
    return true; // return boolean
  }
}

// const rtaArray = parseStr('Angel') as string[];
const rtaArray = parseStr('Angel');
rtaArray.reverse();
// if (Array.isArray(rtaArray)) {
  // rtaArray.reverse();
// }
console.log('rtaArray:','Angel =>', rtaArray);

const rtaStr = parseStr(['A','n','g','e','l']);
rtaStr.toLowerCase();
// if (typeof rtaStr === 'string') {
//   rtaStr.toLowerCase();
// }
console.log('rtaStr:', "['A','n','g','e','l'] =>", rtaStr);

const rtaBoolean = parseStr(123);
console.log('rtaStr:', "123", rtaBoolean);


