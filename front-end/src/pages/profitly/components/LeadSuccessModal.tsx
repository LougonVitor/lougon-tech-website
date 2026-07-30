import { Icon } from './icons'
import { Modal } from './Modal'

interface LeadSuccessModalProps {
    onClose: () => void
    label: string
    message: string
}

/* Confirmação exibida depois que o lead é enviado. */
export function LeadSuccessModal({ onClose, label, message }: LeadSuccessModalProps) {
    return (
        <Modal onClose={onClose} label={label}>
            <div className="pf-lead-success">
                <span className="pf-lead-success-icon">
                    <Icon name="check" size={26} />
                </span>
                <h3 className="pf-lead-title">Prontinho!</h3>
                <p className="pf-lead-sub">{message}</p>
            </div>
        </Modal>
    )
}
