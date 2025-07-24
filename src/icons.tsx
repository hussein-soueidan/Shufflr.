import type { SVGProps } from 'react'

function createIcon(path: string) {
  return function Icon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d={path} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
}

export const FolderIcon = createIcon('M3 7h5l2 3h11v11H3z')
export const HelpCircleIcon = createIcon('M12 18h.01M9 9a3 3 0 116 0c0 1.5-1 2-1.5 2.5l-.5.5v2m0 0h.01')
export const ShufflrLogoIcon = createIcon('M4 4h16v16H4z')
