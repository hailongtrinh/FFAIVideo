import { clone, trim, trimEnd } from 'lodash';
import { SubMaker } from './sub-maker';
import { subtitleFormatter } from './utils/date';
import { TINY_PUNCTUATIONS } from './config/constant';
import {
  addLineBreaks,
  normalizeWhitespace,
  safeDecodeURIComponent,
} from './utils/char';
import {
  getEqualedLine,
  cleanSentences,
  splitSubtitleByPunctuation,
} from './utils/line';
import { writeSubtitles } from './utils/file';

const generateSubtitle = async ({
  subMaker,
  videoScript,
  subtitleFile,
  subtitleMaxWidth,
  lineSplit,
}: {
  subMaker: SubMaker;
  videoScript: string;
  subtitleFile: string;
  subtitleMaxWidth: number;
  lineSplit: boolean;
}): Promise<void> => {
  const formattedSubtitles: string[] = [];
  let scriptLines = cleanSentences(
    splitSubtitleByPunctuation(normalizeWhitespace(videoScript)),
  );
  
  let startTime = -1.0;
  let endTime = -1.0;
  let scriptLinesIndex = 0;
  let subLine = '';

  let scriptLinesc;
  if (lineSplit) {
    //scriptLinesc = restructureScriptLines(subMaker, subtitleMaxWidth);
    ////TODO : lineSplit from org scriptLines
    const newScriptLines = [];
    for(let cLine of scriptLines){
      if(cLine.length > subtitleMaxWidth){
      const words = cLine.split(' ');
      let currentLine = '';
      for (const word of words) {
        if ((currentLine + word).length <= subtitleMaxWidth) {
          currentLine += word + ' ';
        } else {
          newScriptLines.push(currentLine.trim());
          currentLine = word + ' ';
        }
      }
      if (currentLine.trim().length > 0) {
        newScriptLines.push(currentLine.trim());
      }
      }else{
        newScriptLines.push(cLine)
      }
    }
    scriptLinesc = newScriptLines

  } else {
    scriptLinesc = clone(scriptLines);
  }

  for (let i = 0; i < subMaker.offset.length; i++) {
    let [offset, sub] = [subMaker.offset[i], subMaker.subs[i]];
    const [starTime, enTime] = offset;
    if (startTime < 0) startTime = starTime;
    endTime = enTime;
    //subLine += safeDecodeURIComponent(sub);
    subLine += safeDecodeURIComponent(sub)+" ";

    // get equaled lineText
    let lineText = '';
    if (scriptLinesc.length > scriptLinesIndex) {
      const targetLine = scriptLinesc[scriptLinesIndex];
      lineText = getEqualedLine(targetLine, subLine);
      //lineText = subLine;
    }

    // create new subtitle
    if (lineText) {
      scriptLinesIndex++;
      if (lineSplit) {
        lineText = addLineBreaks(lineText, subtitleMaxWidth + 4);
      } else {
        lineText = addLineBreaks(lineText, subtitleMaxWidth);
      }
      const subtitle = subtitleFormatter(
        scriptLinesIndex,
        startTime,
        endTime,
        lineText,
      );

      formattedSubtitles.push(subtitle);
      startTime = -1.0;
      endTime = -1.0;
      subLine = '';
    }
  }

  await writeSubtitles(subtitleFile, formattedSubtitles, scriptLinesc.length);
};

const restructureScriptLines = (
  subMaker: SubMaker,
  subtitleMaxWidth: number,
): string[] => {
  let scriptLinesc = [];
  let subLine = '';
  let oldSubLine = '';

  for (let i = 0; i < subMaker.offset.length; i++) {
    //const sub = subMaker.subs[i];
    const sub = subMaker.subs[i]+" ";
    oldSubLine = subLine;
    subLine += sub;

    if (TINY_PUNCTUATIONS.includes(sub)) {
      scriptLinesc.push(subLine);
      subLine = '';
      continue;
    }

    if (subLine.length > subtitleMaxWidth) {
      scriptLinesc.push(oldSubLine);
      subLine = sub;
      continue;
    }
  }

  

  if (subLine.length > 0) {
    scriptLinesc.push(subLine);
  }
  

  return scriptLinesc;
};

export { generateSubtitle };