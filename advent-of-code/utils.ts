import path from "path";

export async function readFile(
  fileDir: string,
  filename: string,
): Promise<string> {
  const dataFilePath = path.join(fileDir, filename);

  const file = Bun.file(dataFilePath);
  return await file.text();
}
