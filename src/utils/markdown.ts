import { marked } from 'marked'

export async function parseMarkdown(filePath: string) {
  const cleanPath = filePath.replace(/^public\//, '/')
  
  try {
    const response = await fetch(cleanPath)
    if (!response.ok) {
      throw new Error(`Failed to load content: ${response.status}`)
    }
    return await response.text()
  } catch (error) {
    console.error(`Error reading file: ${cleanPath}`, error)
    throw error
  }
}