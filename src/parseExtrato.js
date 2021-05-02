import fs from "fs";
import readline from "readline";

async function parseExtrato(filepath) {
  const fileStream = fs.createReadStream(filepath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  const values = [];
  let rowNumber = 0;
  for await (const line of rl) {
    if (++rowNumber > 6) {
      const lineSplited = line.split(";");
      values.push({
        date: lineSplited[0],
        description: lineSplited[1],
        valor: Number.parseFloat(
          lineSplited[2].replace(".", "").replace(",", ".")
        ),
        saldo: Number.parseFloat(
          lineSplited[3].replace(".", "").replace(",", ".")
        ),
      });
    } else {
      console.log(`Line ${rowNumber}: ${line}`);
    }
  }
  return values;
}

export default parseExtrato;
