import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

interface ModalProps {
    onClose: () => void
    /* Nome do diálogo, anunciado por leitores de tela ao abrir. */
    label: string
    children: ReactNode
}

export function Modal({ onClose, label, children }: ModalProps) {
    const closeButtonRef = useRef<HTMLButtonElement>(null)
    /* Renderiza dentro da .profitly-page para herdar as variáveis de tema da página. */
    const [portalTarget] = useState(() => document.querySelector('.profitly-page') ?? document.body)

    useEffect(() => {
        const previouslyFocused = document.activeElement as HTMLElement | null
        closeButtonRef.current?.focus()

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose()
        }

        document.addEventListener('keydown', onKeyDown)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.body.style.overflow = ''
            /* Devolve o foco para o botão que abriu o modal. */
            previouslyFocused?.focus()
        }
    }, [onClose])

    return createPortal(
        <div className="pf-modal-overlay" onClick={onClose}>
            <div
                className="pf-modal"
                role="dialog"
                aria-modal="true"
                aria-label={label}
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    ref={closeButtonRef}
                    type="button"
                    className="pf-modal-close"
                    onClick={onClose}
                    aria-label="Fechar"
                >
                    <i className="ti ti-x" aria-hidden="true" />
                </button>
                {children}
            </div>
        </div>,
        portalTarget,
    )
}
