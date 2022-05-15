let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar; // error

// anyVar.doSomenthing();
// anyVar.touppercase();

let unknowVar: unknown; // La mejor en el dinamismo
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};

// unknowVar.doSomething(); // No existe

if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}

// verificar el tipo
if (typeof unknowVar === 'boolean') {
  let isNewV2: boolean = unknowVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str); // {"nombre":"angel",}
}
