import * as path from "node:path";
import * as fs from "node:fs";
import * as readline from "node:readline";
import { resolvePath } from "nuxt/kit";

export default defineEventHandler(async (event) => {
  const data: string[] = [];
  //const filePath = resolvePath("/dumdum.txt")

  const filePath = path.resolve(__dirname,"public", "dumdum.txt");
  //console.log(filePath)
  // const filePath = path.join(process.cwd(), "assets", "dumdum.txt");
  const lineReader = readline.createInterface({
    input: fs.createReadStream(filePath),
  });
  for await (const line of lineReader) {
    data.push(line);
  }
  return data;
  //   const data = await fs.promises.readFile(filePath, "utf-8");
});
