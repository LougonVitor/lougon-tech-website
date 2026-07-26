export interface QuizQuestion {
    question: string
    options: string[]
}

export const FOUNDER_QUIZ: QuizQuestion[] = [
    {
        question: 'Você já investe ou controla suas finanças hoje?',
        options: ['Sim, regularmente', 'Às vezes', 'Ainda não, mas quero começar'],
    },
    {
        question: 'O que mais te atrai no Plano Fundador?',
        options: ['Preço vitalício', 'Acesso antecipado a tudo', 'Ajudar a moldar o produto'],
    },
    {
        question: 'Com que frequência você usaria a Profitly?',
        options: ['Diariamente', 'Algumas vezes por semana', 'Raramente'],
    },
    {
        question: 'Você toparia dar feedback sobre bugs e sugestões?',
        options: ['Sim, com certeza', 'Talvez', 'Prefiro não'],
    },
]
