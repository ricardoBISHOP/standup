import chalk from "chalk";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

function mix() {
  return [
    chalk.blue("👾 Ricardo"),
    chalk.magenta("🚴 Jonathan"),
    chalk.yellow("🦦 Alistair"),
    chalk.green("🦊 Johny Varghese"),
    chalk.white("🐺 Michael"),
    chalk.red("👻 Luis"),
    chalk.rgb(242, 242, 242)("🪨 Andy"),
  ].sort(() => (Math.random() > 0.5 ? 1 : -1));
}

// stupid node modules bs
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const checksum = path.resolve(__dirname, "./check-sum.txt");

let folks = mix();
while (
  fs.readFileSync(checksum).toString() ==
  folks.join("")
) {
  folks = mix();
}

fs.writeFileSync(checksum, folks.join(""));

folks.forEach((dude) => console.log(dude));
