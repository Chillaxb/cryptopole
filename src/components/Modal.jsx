import { useEffect } from 'react'
import { CloseIcon } from './Icons'

export default function Modal({ isOpen, onClose, children, labelledBy }) {
  useEffect(() => {
    if (!isOpen) return undefined
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-prusse-deep/60 backdrop-blur-sm" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className="relative bg-papier rounded-md max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 p-2 rounded hover:bg-brume transition-colors text-encre-soft"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  )
}
