export interface QuizQuestion {
    id: string
    question: string
    options: string[]
}

export const QUALIFICATION_QUIZ: QuizQuestion[] = [
    {
        id: 'possui-investimentos',
        question: 'Você já possui investimentos hoje?',
        options: ['Sim, em mais de uma classe de ativo', 'Sim, só em uma classe (ex.: ações ou FIIs)', 'Ainda não, mas pretendo começar'],
    },
    {
        id: 'organizacao-financeira',
        question: 'Como você organiza suas finanças pessoais atualmente?',
        options: ['Uso uma planilha ou app', 'Faço de cabeça / sem controle fixo', 'Quero começar a organizar melhor'],
    },
    {
        id: 'acompanhamento-carteira',
        question: 'Com que frequência você acompanha o desempenho da sua carteira?',
        options: ['Diariamente', 'Algumas vezes por semana', 'Raramente'],
    },
    {
        id: 'interesse-ia',
        question: 'Você teria interesse em receber recomendações geradas por IA sobre seus investimentos e gastos?',
        options: ['Sim, seria muito útil', 'Talvez, depende da qualidade', 'Prefiro decidir tudo sozinho'],
    },
]
