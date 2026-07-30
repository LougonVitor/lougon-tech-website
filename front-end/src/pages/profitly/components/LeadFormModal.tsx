import { useState } from 'react'
import type { FormEvent } from 'react'
import { LeadField } from './LeadField'
import { LeadSuccessModal } from './LeadSuccessModal'
import { Modal } from './Modal'
import { submitLead } from '../data/leadSubmission'
import './LeadFormModal.css'

const TITLE = 'Avise-me no lançamento'

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
        await submitLead({ name, email, phone, source: 'leadForm', plan: 'Grátis' })
        setSubmitting(false)
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <LeadSuccessModal
                onClose={onClose}
                label={TITLE}
                message="Recebemos seus dados. Vamos te avisar assim que a Profitly for lançada."
            />
        )
    }

    return (
        <Modal onClose={onClose} label={TITLE}>
            <h3 className="pf-lead-title">{TITLE}</h3>
            <p className="pf-lead-sub">
                Deixe seus dados e te avisamos assim que o Plano Grátis estiver disponível.
            </p>

            <form className="pf-lead-form" onSubmit={handleSubmit}>
                <LeadField label="Nome" type="text" value={name} onChange={setName} placeholder="Seu nome" />
                <LeadField label="E-mail" type="email" value={email} onChange={setEmail} placeholder="voce@email.com" />
                <LeadField label="Telefone" type="tel" value={phone} onChange={setPhone} placeholder="(00) 00000-0000" />

                <button className="pf-btn-primary pf-lead-submit" type="submit" disabled={submitting}>
                    {submitting ? 'Enviando...' : 'Quero ser avisado'}
                </button>
            </form>
        </Modal>
    )
}
