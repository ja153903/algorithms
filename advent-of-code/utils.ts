import path from "path";

export async function readFile(
  fileDir: string,
  filename: string,
): Promise<string> {
  const dataFilePath = path.join(fileDir, filename);

  const file = Bun.file(dataFilePath);
  return await file.text();
}

export function parseByLine<T>(data: string, mapFn: (line: string) => T): T[] {
  return data
    .split("\n")
    .filter(Boolean)
    .map((line) => mapFn(line));
}

/**
 * `TODO` is a simple function
 * to return a placeholder value
 * since we haven't solved the problem yet
 */
export function TODO<T>(message: T): T {
  return message;
}
