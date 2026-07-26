import { useState } from 'react'
import type { FormEvent } from 'react'
import { Modal } from './Modal'
import { Icon } from './icons'
import { submitLead } from '../data/leadSubmission'
import './LeadFormModal.css'

interface FounderLeadFormModalProps {
    onClose: () => void
}

export function FounderLeadFormModal({ onClose }: FounderLeadFormModalProps) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        setSubmitting(true)
        await submitLead({ name, email, phone, city, source: 'founder' })
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

    return (
        <Modal onClose={onClose}>
            <h3 className="pf-lead-title">Garanta sua vaga de fundador</h3>
            <p className="pf-lead-sub">
                Preencha seus dados para reservar uma das 50 vagas do Plano Fundador. Entraremos em contato com
                você.
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
