import { GoogleGenerativeAI } from '@google/generative-ai'

const API_KEY = import.meta.env.VITE_API_KEY
const genAI = new GoogleGenerativeAI(API_KEY)

const DOCUMENTATION = `Shufflr Documentation\n\nThis is placeholder text for help.`

export async function searchDocumentation(query: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })
    const result = await model.generateContent(`${DOCUMENTATION}\n\nQuestion: ${query}`)
    return result.response.text()
  } catch (err) {
    console.error(err)
    return 'An error occurred while searching the documentation.'
  }
}
