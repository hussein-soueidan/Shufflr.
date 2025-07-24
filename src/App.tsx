import { useState } from 'react'
import { FolderIcon, HelpCircleIcon, ShufflrLogoIcon } from './icons'

export default function App() {
  const [files] = useState([])
  return (
    <div className="flex flex-col h-screen text-slate-200 bg-slate-900">
      <header
        className="flex items-center justify-between px-4 py-2 backdrop-blur-sm bg-slate-800/60"
        data-tauri-drag-region
      >
        <div className="flex items-center gap-2">
          <ShufflrLogoIcon className="h-6 w-6 text-cyan-400" />
          <span className="font-semibold">Shufflr</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 bg-cyan-600 text-white rounded flex items-center gap-1">
            <FolderIcon className="h-5 w-5" />
            Import Folder
          </button>
          <button className="p-2 hover:bg-slate-700 rounded">
            <HelpCircleIcon className="h-5 w-5" />
          </button>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-4">
        {files.length === 0 && (
          <p className="text-center text-slate-400">Import a folder to begin.</p>
        )}
      </main>
    </div>
  )
}
