const removeSpecialCharacters = (str: string) => {
  const cnRegex =
    /[，。！？、；：“”‘’（）《》【】〈〉「」『』【】〔〕〖〗〈〉《》「」『』【】〔〕【】﹝﹞（）［］｛｝＜＞﹤﹥「」『』【】＜＞《》「」『』【】]/g;
  const enRegex = /[!"#$%&'()*+,\-./:;<=>?@\[\]^_`{|}~]/g;
  return str.replace(cnRegex, '').replace(enRegex, '');
};

const normalizeWhitespace = (text: string): string => {
  return text
    .replace('\n', ' ')
    .replace('[', ' ')
    .replace(']', ' ')
    .replace('(', ' ')
    .replace(')', ' ')
    .replace('{', ' ')
    .replace('}', ' ')
    .trim();
};

const splitStringAtIndex = (arr: string[], index: number, x: number) => {
  if (index >= 0 && index < arr.length) {
    const str = arr[index];
    if (x >= 0 && x < str.length) {
      const firstPart = str.slice(0, x);
      const secondPart = str.slice(x);
      arr.splice(index, 1, firstPart, secondPart);
    }
  }
  return arr;
};

const insertStringAt = (
  str: string,
  index: number,
  toInsert: string,
): string => {
  if (index > str.length || index < 0) {
    throw new Error('Index out of bounds');
  }
  return str.slice(0, index) + toInsert + str.slice(index);
};

const safeDecodeURIComponent = (str: string) => {
  try {
    return decodeURIComponent(str);
  } catch (e) {
    return str;
  }
};

const removeBlankLines = (text: string) => {
  return text
    .split('\n')
    .filter(line => line.trim() !== '')
    .join('\n');
};

const addLineBreaks = (lineText: string, subtitleMaxWidth: number) => {
  const words = lineText.split(' ');
  let result = '';
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + word).length > subtitleMaxWidth) {
      result += currentLine.trim() + '\\N';
      currentLine = word + ' ';
    } else {
      currentLine += word + ' ';
    }
  }

  result += currentLine.trim();
  return result;
};

export {
  addLineBreaks,
  removeBlankLines,
  insertStringAt,
  normalizeWhitespace,
  splitStringAtIndex,
  safeDecodeURIComponent,
  removeSpecialCharacters,
};
