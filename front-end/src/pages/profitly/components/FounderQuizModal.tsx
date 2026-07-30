import { useState } from 'react'
import type { FormEvent } from 'react'
import { LeadField } from './LeadField'
import { LeadSuccessModal } from './LeadSuccessModal'
import { Modal } from './Modal'
import { FOUNDER_PLAN_PRICE_LABEL, FOUNDER_PLAN_SPOTS } from '../data/constants'
import { FOUNDER_QUIZ } from '../data/founderQuiz'
import { submitLead } from '../data/leadSubmission'
import './FounderQuizModal.css'
import './LeadFormModal.css'

const TITLE = 'Plano Fundador'

/* Pergunta e resposta lado a lado, numa única célula da planilha de leads. */
function formatAnswers(answers: string[]) {
    return FOUNDER_QUIZ.map((item, index) => `${item.question} ${answers[index] ?? '—'}`).join(' | ')
}

interface FounderQuizModalProps {
    onClose: () => void
}

export function FounderQuizModal({ onClose }: FounderQuizModalProps) {
    const [answers, setAnswers] = useState<string[]>([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const step = answers.length
    const finished = step >= FOUNDER_QUIZ.length

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        setSubmitting(true)
        await submitLead({
            name,
            email,
            phone,
            city,
            answers: formatAnswers(answers),
            source: 'founder-quiz',
            plan: 'Fundador',
        })
        setSubmitting(false)
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <LeadSuccessModal
                onClose={onClose}
                label={TITLE}
                message="Recebemos seus dados. Em breve entraremos em contato para confirmar sua vaga no Plano Fundador."
            />
        )
    }

    if (finished) {
        return (
            <Modal onClose={onClose} label={TITLE}>
                <h3 className="pf-lead-title">Quase lá!</h3>
                <p className="pf-lead-sub">
                    Suas respostas foram salvas! Preencha seus dados abaixo para reservar uma das{' '}
                    {FOUNDER_PLAN_SPOTS} vagas do Plano Fundador por {FOUNDER_PLAN_PRICE_LABEL}. Entraremos em
                    contato se seu perfil se enquadrar!
                </p>

                <form className="pf-lead-form" onSubmit={handleSubmit}>
                    <LeadField label="Nome completo" type="text" value={name} onChange={setName} placeholder="Seu nome completo" />
                    <LeadField label="E-mail" type="email" value={email} onChange={setEmail} placeholder="voce@email.com" />
                    <LeadField label="Telefone" type="tel" value={phone} onChange={setPhone} placeholder="(00) 00000-0000" />
                    <LeadField label="Cidade" type="text" value={city} onChange={setCity} placeholder="Sua cidade" />

                    <button className="pf-btn-primary pf-lead-submit" type="submit" disabled={submitting}>
                        {submitting ? 'Enviando...' : 'Quero minha vaga'}
                    </button>
                </form>
            </Modal>
        )
    }

    const current = FOUNDER_QUIZ[step]

    return (
        <Modal onClose={onClose} label={TITLE}>
            <div className="pf-quiz-progress">
                {FOUNDER_QUIZ.map((item, index) => (
                    <span key={item.question} className={`pf-quiz-dot ${index <= step ? 'pf-quiz-dot-active' : ''}`} />
                ))}
            </div>

            <h3 className="pf-lead-title">{current.question}</h3>

            <div className="pf-quiz-options">
                {current.options.map((option) => (
                    <button
                        key={option}
                        type="button"
                        className="pf-quiz-option"
                        onClick={() => setAnswers((previous) => [...previous, option])}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </Modal>
    )
}
