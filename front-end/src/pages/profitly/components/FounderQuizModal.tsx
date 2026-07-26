import { useState } from 'react'
import type { FormEvent } from 'react'
import { Modal } from './Modal'
import { Icon } from './icons'
import { FOUNDER_QUIZ } from '../data/founderQuiz'
import { submitLead } from '../data/leadSubmission'
import './FounderQuizModal.css'
import './LeadFormModal.css'

interface FounderQuizModalProps {
    onClose: () => void
}

export function FounderQuizModal({ onClose }: FounderQuizModalProps) {
    const [step, setStep] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const finished = step >= FOUNDER_QUIZ.length

    function answer() {
        setStep((prev) => prev + 1)
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        setSubmitting(true)
        await submitLead({ name, email, phone, city, source: 'founder-quiz' })
        setSubmitting(false)
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <Modal onClose={onClose}>
                <div className="pf-lead-success">
                    <span className="pf-lead-success-icon">
                        <Icon name="check" size={26} />
                    </span>
                    <h3 className="pf-lead-title">Prontinho!</h3>
                    <p className="pf-lead-sub">
                        Recebemos seus dados. Em breve entraremos em contato para confirmar sua vaga no Plano
                        Fundador.
                    </p>
                </div>
            </Modal>
        )
    }

    if (finished) {
        return (
            <Modal onClose={onClose}>
                <h3 className="pf-lead-title">Quase lá!</h3>
                <p className="pf-lead-sub">
                    Suas respostas foram salvas! Preencha seus dados abaixo para reservar uma das 50 vagas do Plano
                    Fundador.
                </p>

                <form className="pf-lead-form" onSubmit={handleSubmit}>
                    <label className="pf-lead-field">
                        <span>Nome completo</span>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Seu nome completo"
                        />
                    </label>

                    <label className="pf-lead-field">
                        <span>E-mail</span>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="voce@email.com"
                        />
                    </label>

                    <label className="pf-lead-field">
                        <span>Telefone</span>
                        <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            placeholder="(00) 00000-0000"
                        />
                    </label>

                    <label className="pf-lead-field">
                        <span>Cidade</span>
                        <input
                            type="text"
                            required
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                            placeholder="Sua cidade"
                        />
                    </label>

                    <button className="pf-btn-primary pf-lead-submit" type="submit" disabled={submitting}>
                        {submitting ? 'Enviando...' : 'Quero minha vaga'}
                    </button>
                </form>
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
