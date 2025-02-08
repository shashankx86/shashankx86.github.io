const markdownCache = new Map<string, string>()

export async function parseMarkdown(filePath: string): Promise<string> {
  if (markdownCache.has(filePath)) {
    return markdownCache.get(filePath)!
  }

  const cleanPath = filePath.replace(/^public\//, '/')
  const response = await fetch(cleanPath)
  const content = await response.text()
  markdownCache.set(filePath, content)
  return content
}