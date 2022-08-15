import { v4 as uuidv4 } from 'uuid';

export const getRandomId = (): string => {
  const id: string = uuidv4();
  return id;
}

interface ExtractClassBools {
  [x: string]: boolean
}

export const extractClass = (base: string, bools: ExtractClassBools = {}, additionals: string[] | string = []): string => {
  const boolStr: string = Object.keys(bools).filter((key: string) => bools[key]).join(' ');
  if (typeof additionals === 'string') additionals = [additionals];
  return `${ base } ${ boolStr } ${ additionals.join(' ') }`
}