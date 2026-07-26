import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

interface ModalProps {
    onClose: () => void
    children: ReactNode
}

export function Modal({ onClose, children }: ModalProps) {
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', onKeyDown)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.body.style.overflow = ''
        }
    }, [onClose])

    const portalTarget = document.querySelector('.profitly-page') ?? document.body

    return createPortal(
        <div className="pf-modal-overlay" onClick={onClose}>
            <div className="pf-modal" onClick={(event) => event.stopPropagation()}>
                <button className="pf-modal-close" onClick={onClose} aria-label="Fechar">
                    <i className="ti ti-x" aria-hidden="true" />
                </button>
                {children}
            </div>
        </div>,
        portalTarget,
    )
}
