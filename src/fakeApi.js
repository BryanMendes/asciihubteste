// Dados iniciais que serão usados apenas na primeira vez que o app for aberto.
const initialProfiles = [
    {
        id: 'ej-001',
        name: 'ASCII UFU',
        university: 'Universidade Federal de Uberlândia (UFU)',
        points: 999,
        tasksCompleted: 60,
        description: 'A ASCII UFU é a Empresa Júnior de Ciência da Computação da Universidade Federal de Uberlândia. Desde a sua fundação, a ASCII tem o compromisso de desenvolver soluções tecnológicas inovadoras e de alta qualidade, capacitando seus membros e gerando impacto real para a comunidade e o mercado. Somos impulsionados pela paixão por tecnologia e pela busca contínua por excelência.',
        projects: 'Desenvolvimento de aplicações web customizadas, sistemas de gerenciamento para pequenas e médias empresas, consultoria em TI e otimização de processos digitais. Nossos projetos são focados em entregar valor e eficiência, utilizando tecnologias de ponta.',
        profilePic: '/Imagem_do_WhatsApp_de_2025-04-22_à_s__16.57.20_24d43eaf-removebg-preview.png',
        coverPic: 'https://images.unsplash.com/photo-1553344627-6398c92c2d79?q=80&w=2070&auto=format&fit=crop',
        social: {
            whatsapp: 'https://wa.me/5534999999999',
            facebook: 'https://facebook.com/ascii.ufu',
            instagram: 'https://instagram.com/ascii.ufu',
            linkedin: 'https://linkedin.com/company/ascii-ufu',
            twitter: 'https://x.com/ascii_ufu',
            youtube: 'https://youtube.com/asciiufu',
            telegram: ''
        }
    },
    {
        id: 'ej-002',
        name: 'EJ Alpha',
        university: 'Universidade Federal de Minas Gerais',
        points: 878,
        tasksCompleted: 45,
        description: 'A EJ Alpha é uma empresa júnior de consultoria em gestão e engenharia de produção. Desde 2005, transformamos desafios em resultados com soluções inovadoras e sustentáveis. Nosso foco é a excelência e o impacto positivo para nossos clientes. Somos dedicados a formar líderes e a entregar soluções de alto impacto, sempre com um olhar atento às necessidades do mercado.',
        projects: 'Desenvolvimento de sistemas de gestão, otimização de processos logísticos, consultoria estratégica para startups. Nossos projetos são desenvolvidos com metodologias ágeis e foco em resultados mensuráveis, garantindo a satisfação e o sucesso de nossos parceiros.',
        profilePic: 'https://source.unsplash.com/random/100x100?company-logo-1&sig=1',
        coverPic: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
        social: {
            whatsapp: '#', facebook: '#', instagram: '#', linkedin: '#', twitter: '#', youtube: '#', telegram: '#'
        }
    },
    {
        id: 'ej-003',
        name: 'EJ Beta',
        university: 'Universidade de São Paulo',
        points: 640,
        tasksCompleted: 38,
        description: 'A EJ Beta é especializada em desenvolvimento de software e soluções tecnológicas. Fundada em 2010, buscamos sempre a vanguarda tecnológica para oferecer os melhores produtos e serviços aos nossos parceiros. Somos pioneiros em diversas tecnologias e contamos com uma equipe altamente qualificada para atender às demandas do mercado.',
        projects: 'Criação de aplicativos móveis, desenvolvimento de plataformas web personalizadas, consultoria em cibersegurança. Nossos projetos são reconhecidos pela inovação, robustez e pela capacidade de resolver problemas complexos de forma eficiente.',
        profilePic: 'https://source.unsplash.com/random/100x100?company-logo-2&sig=2',
        coverPic: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
        social: {
            whatsapp: '#', facebook: '#', instagram: '#', linkedin: '#', twitter: '#', youtube: '#', telegram: '#'
        }
    },
    {
        id: 'ej-004',
        name: 'EJ Gama',
        university: 'Universidade Estadual de Campinas',
        points: 445,
        tasksCompleted: 28,
        description: 'Com expertise em marketing digital e comunicação, a EJ Gama ajuda empresas a crescerem no ambiente online. Criada em 2012, nossa paixão é conectar marcas a seus públicos de forma criativa e eficaz. Utilizamos as mais recentes ferramentas e estratégias para garantir o máximo retorno sobre o investimento de nossos clientes.',
        projects: 'Campanhas de marketing digital, gestão de redes sociais, criação de conteúdo e identidade visual. Nossos projetos visam fortalecer a presença online das empresas e gerar engajamento com o público-alvo, resultando em maior visibilidade e vendas.',
        profilePic: 'https://source.unsplash.com/random/100x100?company-logo-3&sig=3',
        coverPic: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop',
        social: {
            whatsapp: '#', facebook: '#', instagram: '#', linkedin: '#', twitter: '#', youtube: '#', telegram: '#'
        }
    },
    {
        id: 'ej-005',
        name: 'EJ Delta',
        university: 'Universidade Federal do Rio de Janeiro',
        points: 390,
        tasksCompleted: 25,
        description: 'A EJ Delta oferece consultoria em finanças e economia, auxiliando no planejamento estratégico e na otimização de recursos. Nossa equipe é composta por estudantes talentosos e dedicados a gerar valor real para o mercado financeiro e corporativo.',
        projects: 'Análise de viabilidade financeira, elaboração de planos de negócios, otimização de fluxo de caixa. Trabalhamos para que nossos clientes alcancem seus objetivos financeiros com segurança e eficiência, por meio de análises detalhadas e recomendações estratégicas.',
        profilePic: 'https://source.unsplash.com/random/100x100?company-logo-4&sig=4',
        coverPic: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
        social: {
            whatsapp: '#', facebook: '#', instagram: '#', linkedin: '#', twitter: '#', youtube: '#', telegram: '#'
        }
    },
    {
        id: 'ej-006',
        name: 'EJ Epsilon',
        university: 'Universidade Federal de Santa Catarina',
        points: 320,
        tasksCompleted: 20,
        description: 'Especializada em design gráfico e web design, a EJ Epsilon transforma ideias em experiências visuais impactantes. Desde 2015, construímos identidades visuais e interfaces intuitivas com foco na usabilidade e na estética. Nosso trabalho é criar soluções de design que se destacam e comunicam de forma eficaz.',
        profilePic: 'https://source.unsplash.com/random/100x100?company-logo-5&sig=5',
        coverPic: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
        social: {
            whatsapp: '#', facebook: '#', instagram: '#', linkedin: '#', twitter: '#', youtube: '#', telegram: '#'
        }
    },
    {
        id: 'ej-007',
        name: 'EJ Zeta',
        university: 'Universidade de Brasília',
        points: 280,
        tasksCompleted: 18,
        description: 'A EJ Zeta atua no setor de consultoria ambiental, desenvolvendo projetos de sustentabilidade e impacto socioambiental. Nosso compromisso é com um futuro mais verde e consciente para todos. Oferecemos soluções que combinam o desenvolvimento econômico com a preservação ambiental, promovendo um equilíbrio saudável.',
        profilePic: 'https://source.unsplash.com/random/100x100?company-logo-6&sig=6',
        coverPic: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop',
        social: {
            whatsapp: '#', facebook: '#', instagram: '#', linkedin: '#', twitter: '#', youtube: '#', telegram: '#'
        }
    },
    {
        id: 'ej-008',
        name: 'EJ Eta',
        university: 'Universidade Federal do Ceará',
        points: 210,
        tasksCompleted: 15,
        description: 'Com foco em engenharia civil e arquitetura, a EJ Eta projeta e executa soluções construtivas com qualidade e segurança. Oferecemos desde o planejamento até a entrega de projetos com excelência, garantindo a satisfação de nossos clientes e a durabilidade das obras.',
        profilePic: 'https://source.unsplash.com/random/100x100?company-logo-7&sig=7',
        coverPic: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        social: {
            whatsapp: '#', facebook: '#', instagram: '#', linkedin: '#', twitter: '#', youtube: '#', telegram: '#'
        }
    },
    {
        id: 'ej-009',
        name: 'EJ Theta',
        university: 'Universidade Federal de Pernambuco',
        points: 190,
        tasksCompleted: 12,
        description: 'A EJ Theta é uma empresa júnior de consultoria jurídica, prestando serviços de assessoria e análise legal. Nossos jovens talentos buscam sempre a justiça e a conformidade legal para nossos clientes, oferecendo suporte jurídico de qualidade e acessível.',
        profilePic: 'https://source.unsplash.com/random/100x100?company-logo-8&sig=8',
        coverPic: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop',
        social: {
            whatsapp: '#', facebook: '#', instagram: '#', linkedin: '#', twitter: '#', youtube: '#', telegram: '#'
        }
    },
    {
        id: 'ej-010',
        name: 'EJ Iota',
        university: 'Universidade Federal do Rio Grande do Sul',
        points: 150,
        tasksCompleted: 10,
        description: 'Especializada em agronegócio, a EJ Iota oferece soluções para otimização de processos e gestão rural. Nosso objetivo é impulsionar a produtividade e a sustentabilidade no campo, aplicando as mais recentes tecnologias e práticas de gestão.',
        profilePic: 'https://source.unsplash.com/random/100x100?company-logo-9&sig=9',
        coverPic: 'https://images.unsplash.com/photo-1516055033596-a4c06d35671a?q=80&w=2070&auto=format&fit=crop',
        social: {
            whatsapp: '#', facebook: '#', instagram: '#', linkedin: '#', twitter: '#', youtube: '#', telegram: '#'
        }
    },
    {
        id: 'ej-011',
        name: 'EJ Kappa',
        university: 'Universidade Federal de Minas Gerais',
        points: 120,
        tasksCompleted: 8,
        description: 'A EJ Kappa atua na área de consultoria em RH e desenvolvimento organizacional. Acreditamos no potencial humano e auxiliamos empresas a construir equipes de alta performance. Nossos serviços são focados em desenvolver talentos e otimizar a gestão de pessoas.',
        profilePic: 'https://source.unsplash.com/random/100x100?company-logo-10&sig=10',
        coverPic: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop',
        social: {
            whatsapp: '#', facebook: '#', instagram: '#', linkedin: '#', twitter: '#', youtube: '#', telegram: '#'
        }
    },
];

// Função para inicializar e obter os perfis do localStorage
const getProfilesFromStorage = () => {
    try {
        const profilesFromStorage = localStorage.getItem('fakeProfilesDb');
        // Se houver dados no localStorage, use-os
        if (profilesFromStorage) {
            return JSON.parse(profilesFromStorage);
        } else {
            // Se não houver, salve os dados iniciais lá e retorne-os
            localStorage.setItem('fakeProfilesDb', JSON.stringify(initialProfiles));
            return initialProfiles;
        }
    } catch (error) {
        console.error("Erro ao acessar o localStorage, usando dados iniciais:", error);
        return initialProfiles; // Retorna os dados iniciais como fallback em caso de erro
    }
};

// --- Nossas funções de API agora usam o localStorage ---

export const getProfiles = () => {
    return getProfilesFromStorage();
};

export const getProfileById = (id) => {
    const profiles = getProfilesFromStorage();
    return profiles.find(profile => profile.id === id);
};

export const updateProfileById = (id, updatedData) => {
    let profiles = getProfilesFromStorage();
    const profileIndex = profiles.findIndex(profile => profile.id === id);

    if (profileIndex !== -1) {
        // Mescla os dados antigos com os novos
        profiles[profileIndex] = { ...profiles[profileIndex], ...updatedData };
        
        // Salva o array de perfis ATUALIZADO de volta no localStorage
        localStorage.setItem('fakeProfilesDb', JSON.stringify(profiles));
        
        console.log("Perfil atualizado no localStorage:", profiles[profileIndex]);
        return profiles[profileIndex];
    }
    return null;
};