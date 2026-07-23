import { useState } from 'react'
import type { FormEvent } from 'react'
import { Icon } from '../components/icons'
import { QUALIFICATION_QUIZ } from '../data/quiz'
import { SECTION_IDS } from '../data/constants'
import './QualificationSection.css'

type Step = 'quiz' | 'checking' | 'form' | 'done'

export function QualificationSection() {
    const [step, setStep] = useState<Step>('quiz')
    const [questionIndex, setQuestionIndex] = useState(0)

    const totalSteps = QUALIFICATION_QUIZ.length

    function handleAnswer() {
        const isLastQuestion = questionIndex === totalSteps - 1

        if (!isLastQuestion) {
            setQuestionIndex((current) => current + 1)
            return
        }

        setStep('checking')
        setTimeout(() => setStep('form'), 1200)
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        // TODO: conectar com Google Sheets — por ora o formulário só coleta os dados na tela.
        setStep('done')
    }

    return (
        <section id={SECTION_IDS.qualification} className="pf-section pf-qual">
            <div className="pf-qual-card">
                {step === 'quiz' && (
                    <>
                        <div className="pf-qual-progress">
                            {QUALIFICATION_QUIZ.map((question, index) => (
                                <div
                                    key={question.id}
                                    className={`pf-qual-progress-dot ${index <= questionIndex ? 'done' : ''}`}
                                />
                            ))}
                        </div>
                        <div className="pf-qual-step-label">
                            Pergunta {questionIndex + 1} de {totalSteps}
                        </div>
                        <div className="pf-qual-question">{QUALIFICATION_QUIZ[questionIndex].question}</div>
                        <div className="pf-qual-options">
                            {QUALIFICATION_QUIZ[questionIndex].options.map((option) => (
                                <button key={option} type="button" className="pf-qual-option" onClick={handleAnswer}>
                                    {option}
                                </button>
                            ))}
                        </div>
                    </>
                )}

                {step === 'checking' && (
                    <div className="pf-qual-loading">
                        <div className="pf-qual-spinner" />
                        <div className="pf-qual-question" style={{ fontSize: 17, marginBottom: 0 }}>
                            Analisando seu perfil...
                        </div>
                    </div>
                )}

                {step === 'form' && (
                    <>
                        <div className="pf-eyebrow">
                            <Icon name="check" size={14} /> Você tem qualificação para o acesso antecipado
                        </div>
                        <div className="pf-qual-question">Preencha seus dados para garantir sua vaga</div>
                        <form onSubmit={handleSubmit}>
                            <div className="pf-qual-form-field">
                                <label htmlFor="pf-name">Nome completo</label>
                                <input id="pf-name" name="name" type="text" required placeholder="Seu nome completo" />
                            </div>
                            <div className="pf-qual-form-field">
                                <label htmlFor="pf-email">E-mail</label>
                                <input id="pf-email" name="email" type="email" required placeholder="voce@email.com" />
                            </div>
                            <div className="pf-qual-form-field">
                                <label htmlFor="pf-phone">Telefone</label>
                                <input id="pf-phone" name="phone" type="tel" required placeholder="(00) 00000-0000" />
                            </div>
                            <button type="submit" className="pf-btn-primary pf-qual-form-submit">
                                Garantir minha vaga <Icon name="arrowRight" size={16} />
                            </button>
                        </form>
                    </>
                )}

                {step === 'done' && (
                    <div className="pf-qual-success">
                        <div className="pf-qual-success-icon">
                            <Icon name="check" size={26} />
                        </div>
                        <div className="pf-qual-question">Tudo certo!</div>
                        <p className="pf-sub" style={{ margin: '0 auto' }}>
                            Recebemos seus dados. Em breve entraremos em contato com os próximos passos do Plano
                            Fundador, antes do lançamento em 05 de setembro de 2026.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}
