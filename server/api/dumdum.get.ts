import * as path from "node:path";
import * as fs from "node:fs";
import * as readline from "node:readline";
// import { cwd } from 'node:process';
// "cwd" is not exported by "node_modules/unenv/runtime/node/process/index.mjs",
// It's working in DEV but production built will fail

export default defineEventHandler(async (event) => {
  let data: string[] = [];
  const filePath = "public/dumdum.txt"
  // try {

  //const filePath = path.resolve(__dirname,"public", "dumdum.txt");
  //  const filePath = path.join(cwd(), "public", "dumdum.txt");
  //  console.log(`File path: ${filePath}`)
   const lineReader = readline.createInterface({
    input: fs.createReadStream(filePath),
  });
  for await (const line of lineReader) {
    data.push(line);
  }
  // }
  // catch (err) {
    // console.log(`Read file error: ${err}`)
 // data = ['aa','','','','','','dd','','','','','','w','','','','w','','','','a','','d','','a','','aa','','','','d','','dd','','','','s','','s','','s','s','d','a','d','a','w','']
  // }
  return data;
  //   const data = await fs.promises.readFile(filePath, "utf-8");
});
