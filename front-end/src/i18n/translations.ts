export type Language = 'en' | 'pt';

interface TranslationDict {
    header: {
        products: string;
        solutions: string;
        about: string;
        contact: string;
        cta: string;
    };
    hero: {
        badge: string;
        titlePrefix: string;
        titleEm: string;
        sub: string;
        exploreProducts: string;
        talkToUs: string;
    };
    statistics: {
        productsLaunched: string;
        cloudBased: string;
        support: string;
        madeInBrazil: string;
    };
    products: {
        label: string;
        title: string;
        sub: string;
        liveBeta: string;
        inDevelopment: string;
        comingSoon: string;
        profitlyName: string;
        profitlyDesc: string;
        tagB2C: string;
        tagInvesting: string;
        tagRealTime: string;
        openProfitly: string;
        auditName: string;
        auditDesc: string;
        tagCompliance: string;
        tagReporting: string;
        tagMultiUser: string;
        learnMore: string;
        dentalName: string;
        dentalDesc: string;
        tagScheduling: string;
        tagPatientRecords: string;
        tagBilling: string;
        moreName: string;
        moreDesc: string;
        tagInDevelopment: string;
        suggestIdea: string;
    };
    features: {
        label: string;
        title: string;
        sub: string;
        cloudTitle: string;
        cloudDesc: string;
        secureTitle: string;
        secureDesc: string;
        supportTitle: string;
        supportDesc: string;
        evolvingTitle: string;
        evolvingDesc: string;
    };
    contact: {
        title: string;
        sub: string;
        scheduleDemo: string;
        tryProfitly: string;
    };
    footer: {
        copy: string;
    };
}

export const translations: Record<Language, TranslationDict> = {
    en: {
        header: {
            products: 'Products',
            solutions: 'Solutions',
            about: 'About',
            contact: 'Contact',
            cta: 'Request a demo',
        },
        hero: {
            badge: 'B2B & B2C Software Solutions',
            titlePrefix: 'Smart systems for ',
            titleEm: 'businesses and investors',
            sub: 'Lougon.tech builds purpose-built software that simplifies operations, ensures compliance, and drives growth — for companies of every size, and for individual investors managing their own portfolios.',
            exploreProducts: 'Explore our products',
            talkToUs: 'Talk to us',
        },
        statistics: {
            productsLaunched: 'Products launched',
            cloudBased: 'Cloud-based',
            support: 'Support',
            madeInBrazil: 'Made in Brazil',
        },
        products: {
            label: 'Our products',
            title: 'Software for businesses and investors',
            sub: 'Purpose-built systems designed to solve real problems — for companies running their operations, and for people managing their own money.',
            liveBeta: 'Live beta',
            inDevelopment: 'In development',
            comingSoon: 'Coming soon',
            profitlyName: 'Profitly',
            profitlyDesc: 'Our B2C investing platform. Compare assets, track the Brazilian market in real time, and manage your own portfolio — dividends, rankings, and market pulse in one place.',
            tagB2C: 'B2C',
            tagInvesting: 'Investing',
            tagRealTime: 'Real-time data',
            openProfitly: 'Open Profitly',
            auditName: 'Audit System',
            auditDesc: 'Complete audit management platform. Plan, execute, and report internal and external audits with full traceability and compliance control.',
            tagCompliance: 'Compliance',
            tagReporting: 'Reporting',
            tagMultiUser: 'Multi-user',
            learnMore: 'Learn more',
            dentalName: 'Dental System',
            dentalDesc: 'A complete clinic management solution — scheduling, patient records, billing, and treatment history all in one place.',
            tagScheduling: 'Scheduling',
            tagPatientRecords: 'Patient records',
            tagBilling: 'Billing',
            moreName: 'More on the way',
            moreDesc: "We're constantly building new solutions. Have a specific need? Let's talk — we might be working on exactly what you need.",
            tagInDevelopment: 'In development',
            suggestIdea: 'Suggest an idea',
        },
        features: {
            label: 'Why Lougon',
            title: 'Built differently, by design',
            sub: "We care about the details that make software actually enjoyable to use — whether you're a company or an individual investor.",
            cloudTitle: '100% cloud',
            cloudDesc: 'No installation needed. Access your systems from any device, anywhere.',
            secureTitle: 'Secure by default',
            secureDesc: 'Your data is encrypted and protected following best security practices.',
            supportTitle: 'Local support',
            supportDesc: 'Real humans based in Brazil, ready to help you when you need it most.',
            evolvingTitle: 'Always evolving',
            evolvingDesc: 'Regular updates based on customer feedback, at no extra cost.',
        },
        contact: {
            title: 'Ready to modernize your business — or your portfolio?',
            sub: 'Schedule a free demo for your company, or try Profitly for your own investments.',
            scheduleDemo: 'Schedule a free demo',
            tryProfitly: 'Try Profitly',
        },
        footer: {
            copy: '© 2026 Lougon.tech · All rights reserved',
        },
    },
    pt: {
        header: {
            products: 'Produtos',
            solutions: 'Soluções',
            about: 'Sobre',
            contact: 'Contato',
            cta: 'Solicitar demonstração',
        },
        hero: {
            badge: 'Soluções de software B2B e B2C',
            titlePrefix: 'Sistemas inteligentes para ',
            titleEm: 'empresas e investidores',
            sub: 'A Lougon.tech desenvolve softwares sob medida que simplificam operações, garantem conformidade e impulsionam o crescimento — para empresas de todos os tamanhos e para investidores que gerenciam suas próprias carteiras.',
            exploreProducts: 'Conheça nossos produtos',
            talkToUs: 'Fale conosco',
        },
        statistics: {
            productsLaunched: 'Produtos lançados',
            cloudBased: 'Baseado na nuvem',
            support: 'Suporte',
            madeInBrazil: 'Feito no Brasil',
        },
        products: {
            label: 'Nossos produtos',
            title: 'Software para empresas e investidores',
            sub: 'Sistemas sob medida para resolver problemas reais — para empresas que gerenciam suas operações e para pessoas que administram seu próprio dinheiro.',
            liveBeta: 'Beta ao vivo',
            inDevelopment: 'Em desenvolvimento',
            comingSoon: 'Em breve',
            profitlyName: 'Profitly',
            profitlyDesc: 'Nossa plataforma de investimentos B2C. Compare ativos, acompanhe o mercado brasileiro em tempo real e gerencie sua própria carteira — dividendos, rankings e o pulso do mercado em um só lugar.',
            tagB2C: 'B2C',
            tagInvesting: 'Investimentos',
            tagRealTime: 'Dados em tempo real',
            openProfitly: 'Abrir Profitly',
            auditName: 'Sistema de Auditoria',
            auditDesc: 'Plataforma completa de gestão de auditorias. Planeje, execute e reporte auditorias internas e externas com total rastreabilidade e controle de conformidade.',
            tagCompliance: 'Conformidade',
            tagReporting: 'Relatórios',
            tagMultiUser: 'Multiusuário',
            learnMore: 'Saiba mais',
            dentalName: 'Sistema Odontológico',
            dentalDesc: 'Uma solução completa de gestão de clínicas — agendamento, prontuários, faturamento e histórico de tratamentos em um só lugar.',
            tagScheduling: 'Agendamento',
            tagPatientRecords: 'Prontuários',
            tagBilling: 'Faturamento',
            moreName: 'Mais por vir',
            moreDesc: 'Estamos sempre desenvolvendo novas soluções. Tem uma necessidade específica? Vamos conversar — talvez já estejamos trabalhando exatamente nisso.',
            tagInDevelopment: 'Em desenvolvimento',
            suggestIdea: 'Sugerir uma ideia',
        },
        features: {
            label: 'Por que a Lougon',
            title: 'Construído de forma diferente, por design',
            sub: 'Nos importamos com os detalhes que tornam o software realmente agradável de usar — seja você uma empresa ou um investidor individual.',
            cloudTitle: '100% na nuvem',
            cloudDesc: 'Sem necessidade de instalação. Acesse seus sistemas de qualquer dispositivo, em qualquer lugar.',
            secureTitle: 'Seguro por padrão',
            secureDesc: 'Seus dados são criptografados e protegidos seguindo as melhores práticas de segurança.',
            supportTitle: 'Suporte local',
            supportDesc: 'Pessoas reais baseadas no Brasil, prontas para ajudar quando você mais precisar.',
            evolvingTitle: 'Sempre evoluindo',
            evolvingDesc: 'Atualizações regulares baseadas no feedback dos clientes, sem custo adicional.',
        },
        contact: {
            title: 'Pronto para modernizar sua empresa — ou sua carteira?',
            sub: 'Agende uma demonstração gratuita para sua empresa ou experimente a Profitly para seus próprios investimentos.',
            scheduleDemo: 'Agendar demonstração gratuita',
            tryProfitly: 'Experimentar a Profitly',
        },
        footer: {
            copy: '© 2026 Lougon.tech · Todos os direitos reservados',
        },
    },
} as const;
