import { readDir } from '@tauri-apps/api/fs'
import type { FileInfo } from '../types'

/**
 * Recursively scan a directory using Tauri's fs.readDir API.
 * Note: Tauri v1 does not expose file metadata such as size or
 * modification date via the JS API, so placeholder values are used.
 */
export async function scanDirectory(path: string, recursive = false): Promise<FileInfo[]> {
  const entries = await readDir(path, { recursive })
  return entries.map((e, index) => ({
    id: `${index}`,
    name: e.name || '',
    newName: e.name || '',
    path: e.path,
    size: undefined,
    dateModified: undefined,
  }))
}
