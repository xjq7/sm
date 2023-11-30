import fs from 'fs';
import readline from 'readline';

interface ReadOptions {
  start: number;
  end: number;
  limit: number;
}

export function read(file: string, option: ReadOptions) {
  const { start, end, limit } = option;
  const readInterface = readline.createInterface({
    input: fs.createReadStream(file),
    output: process.stdout,
    terminal: false,
  });

  return new Promise((r) => {
    const lines = [];
    let lineCount = 0;

    readInterface.on('line', function (line) {
      lineCount++;
      if (lineCount >= start && lineCount <= end) {
        lines.push(line);
      }
    });

    readInterface.on('close', function () {
      const startIndex = Math.max(lines.length - limit, 0);
      const endIndex = lines.length;
      const result = lines.slice(startIndex, endIndex);
      result.forEach((line) => console.log(line));

      r(result);
    });
  });
}
