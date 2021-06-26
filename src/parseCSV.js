import fs from "fs";
import readline from "readline";

async function parseCSV(filepath, divider = ",") {
  const fileStream = fs.createReadStream(filepath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  const values = [];
  let headers = [];
  let rowNumber = 0;
  for await (let line of rl) {
    if (++rowNumber > 1) {
      const item = {};
      const lineSplited = line.split(divider);
      headers.forEach((header, index) => {
        item[header] = lineSplited[index];
      });
      values.push(item);
    } else {
      headers = line.split(divider);
    }
  }
  return values;
}

export default parseCSV;
