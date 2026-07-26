import { useState } from 'react'
import { Modal } from './Modal'
import { Icon } from './icons'
import { FOUNDER_QUIZ } from '../data/founderQuiz'
import { WHATSAPP_GROUP_URL } from '../../../config/links'
import './FounderQuizModal.css'

interface FounderQuizModalProps {
    onClose: () => void
}

export function FounderQuizModal({ onClose }: FounderQuizModalProps) {
    const [step, setStep] = useState(0)

    const finished = step >= FOUNDER_QUIZ.length

    function answer() {
        setStep((prev) => prev + 1)
    }

    if (finished) {
        return (
            <Modal onClose={onClose}>
                <div className="pf-quiz-result">
                    <span className="pf-quiz-result-icon">
                        <Icon name="whatsapp" size={26} />
                    </span>
                    <h3 className="pf-lead-title">Quase lá!</h3>
                    <p className="pf-lead-sub">
                        Entre no grupo do WhatsApp para garantir sua vaga. Depois que você entrar, avaliamos seu
                        perfil e liberamos o acesso ao Plano Fundador.
                    </p>
                    <a
                        className="pf-btn-primary pf-quiz-cta"
                        href={WHATSAPP_GROUP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="ti ti-brand-whatsapp" aria-hidden="true" />
                        Entrar no grupo do WhatsApp
                        <Icon name="arrowRight" size={15} />
                    </a>
                </div>
            </Modal>
        )
    }

    const current = FOUNDER_QUIZ[step]

    return (
        <Modal onClose={onClose}>
            <div className="pf-quiz-progress">
                {FOUNDER_QUIZ.map((_, index) => (
                    <span key={index} className={`pf-quiz-dot ${index <= step ? 'pf-quiz-dot-active' : ''}`} />
                ))}
            </div>

            <h3 className="pf-lead-title">{current.question}</h3>

            <div className="pf-quiz-options">
                {current.options.map((option) => (
                    <button key={option} className="pf-quiz-option" onClick={answer}>
                        {option}
                    </button>
                ))}
            </div>
        </Modal>
    )
}
