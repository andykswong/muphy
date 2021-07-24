import { readFileSync } from 'fs';
import loader from '@assemblyscript/loader';

const imports = {};
const module = loader.instantiateSync(readFileSync('./dist/muphy.wasm'), imports);

export default module.exports;
