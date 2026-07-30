interface LeadFieldProps {
    label: string
    type: 'text' | 'email' | 'tel'
    value: string
    placeholder: string
    onChange: (value: string) => void
}

/* Campo de texto dos formulários de lead — todos são obrigatórios. */
export function LeadField({ label, type, value, placeholder, onChange }: LeadFieldProps) {
    return (
        <label className="pf-lead-field">
            <span>{label}</span>
            <input
                type={type}
                required
                value={value}
                placeholder={placeholder}
                onChange={(event) => onChange(event.target.value)}
            />
        </label>
    )
}
