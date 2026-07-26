import { useState } from 'react'
import type { FormEvent } from 'react'
import { Modal } from './Modal'
import { Icon } from './icons'
import { submitLead } from '../data/leadSubmission'
import './LeadFormModal.css'

interface LeadFormModalProps {
    onClose: () => void
}

export function LeadFormModal({ onClose }: LeadFormModalProps) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        setSubmitting(true)
        await submitLead({ name, email, phone })
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
                        Recebemos seus dados. Vamos te avisar assim que a Profitly for lançada.
                    </p>
                </div>
            </Modal>
        )
    }

    return (
        <Modal onClose={onClose}>
            <h3 className="pf-lead-title">Avise-me no lançamento</h3>
            <p className="pf-lead-sub">
                Deixe seus dados e te avisamos assim que o Plano Grátis estiver disponível.
            </p>

            <form className="pf-lead-form" onSubmit={handleSubmit}>
                <label className="pf-lead-field">
                    <span>Nome</span>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Seu nome"
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

                <button className="pf-btn-primary pf-lead-submit" type="submit" disabled={submitting}>
                    {submitting ? 'Enviando...' : 'Quero ser avisado'}
                </button>
            </form>
        </Modal>
    )
}
