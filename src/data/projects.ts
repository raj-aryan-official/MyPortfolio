export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
    category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'system-design' | 'ai' | 'game';
    featured?: boolean;
}

export const projects: Project[] = [
    // Featured / High-Impact Projects
    {
        id: '1',
        title: 'PaintCommerce',
        description: 'Amazon-like paint e-commerce platform with 10,000+ colors, Stripe payments, admin dashboard, and full order lifecycle.',
        image: '/paintcommerce.png',
        tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe'],
        githubUrl: 'https://github.com/raj-aryan-official/PaintWorldDemo.git',
        category: 'fullstack',
        featured: true
    },
    {
        id: '2',
        title: 'Chromo',
        description: 'A consumer mobile app that makes ordering paint as simple as shopping on Amazon or Flipkart.',
        image: '/chromo.png',
        tags: ['Flutter', 'Dart'],
        githubUrl: 'https://github.com/raj-aryan-official/chromo.git',
        category: 'mobile',
        featured: true
    },
    {
        id: '3',
        title: 'AssetWize',
        description: 'AI-powered asset management app to track real estate, vehicles, jewellery, stocks, and valuables.',
        image: '/assetwize.jpeg',
        tags: ['Flutter', 'Dart'],
        githubUrl: 'https://github.com/raj-aryan-official/ASSETWIZE.git',
        liveUrl: 'https://drive.google.com/file/d/1HaLSxmILjyCcyoOsoHkkDxSEg2YQNjsG/view?usp=drive_linkdeployed',
        category: 'mobile',
        featured: true
    },
    {
        id: '4',
        title: 'Daily Planner (AI-Powered)',
        description: 'AI-powered planner that extracts events from PDFs, images, and text into a live calendar.',
        image: '/daylyplannar.png',
        tags: ['React', 'Vite', 'Tailwind', 'FastAPI', 'SQLAlchemy'],
        githubUrl: 'https://github.com/raj-aryan-official/PLANNER.git',
        category: 'ai',
        featured: true
    },
    {
        id: '5',
        title: 'DAYLY – AI Scheduler',
        description: 'A full-stack scaffold for AI-driven task extraction and scheduling with calendar visualization.',
        image: '/daylyaiscedular.png',
        tags: ['React', 'TypeScript', 'FastAPI', 'SQLite'],
        githubUrl: 'https://github.com/raj-aryan-official/day.git',
        liveUrl: 'https://demodayly.netlify.app/',
        category: 'system-design',
        featured: true
    },

    // Startup & Real-World Products
    {
        id: '6',
        title: 'Bharat Navodaya Shiksha',
        description: 'An education initiative focused on future-ready learning, innovation labs, and skill-based education for schools.',
        image: '/bharatnavodayashiksha.png',
        tags: ['Web Platform'],
        githubUrl: 'https://github.com/raj-aryan-official/BNS_INDIA.git',
        liveUrl: 'https://bharatnavodayashiksha.netlify.app/',
        category: 'fullstack',
        featured: false
    },
    {
        id: '7',
        title: 'CustomerConnect',
        description: 'Customer-shopowner connection platform for better communication and relationship management.',
        image: '/customerconnect.png',
        tags: ['MERN Stack'],
        githubUrl: 'https://github.com/raj-aryan-official/CUSTOMER_CONNECT-deploy.git',
        liveUrl: 'https://customerconnectshop.netlify.app/',
        category: 'fullstack',
        featured: false
    },
    {
        id: '8',
        title: 'Zomato Clone',
        description: 'A functional clone of Zomato with restaurant listings, search, authentication, reviews, and order management.',
        image: '/zomato.jpg',
        tags: ['React', 'Node.js', 'Express', 'MongoDB'],
        githubUrl: 'https://github.com/raj-aryan-official/Zomato_Pro.git',
        category: 'fullstack',
        featured: false
    },
    {
        id: '9',
        title: 'Polaris Solution Center',
        description: 'A grievance-raising platform for students to directly communicate issues to faculty heads.',
        image: '/polarissolutioncenter.png',
        tags: ['HTML', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/raj-aryan-official/POLARIS-SOLUTION-CENTER.git',
        liveUrl: 'https://polarissolutioncenter.netlify.app/',
        category: 'frontend',
        featured: false
    },

    // AI / Productivity Tools
    {
        id: '10',
        title: 'Voice Notes Plus',
        description: 'Voice recording app with real-time transcription and note organization.',
        image: '/voicenote.jpeg',
        tags: ['Flutter', 'Dart'],
        githubUrl: 'https://github.com/raj-aryan-official/VoiceNotePlus.git',
        liveUrl: 'https://drive.google.com/file/d/1SAQ36ZYLNxs1e_bmqsdYbZKjS32xHwkp/view?usp=drive_link',
        category: 'mobile',
        featured: false
    },
    {
        id: '11',
        title: 'Text Summarizer',
        description: 'Text summarization tool using Hugging Face Transformers (BART) with a simple UI.',
        image: '/textsummarizer.jpg',
        tags: ['Python', 'Gradio', 'Transformers'],
        githubUrl: 'https://github.com/raj-aryan-official/TEXT_SUMMARIZER.git',
        liveUrl: 'https://newtextsummarizer.netlify.app/',
        category: 'ai',
        featured: false
    },
    {
        id: '12',
        title: 'Habit Tracker',
        description: 'Web app to track habits, visualize progress, and build consistency using calendars and progress bars.',
        image: '/habbittracker.png',
        tags: ['HTML', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/raj-aryan-official/Habit-Tracker-.git',
        liveUrl: 'https://vermillion-longma-89f32f.netlify.app/',
        category: 'frontend',
        featured: false
    },

    // Frontend & Utility Applications
    {
        id: '13',
        title: 'ColorUniverse',
        description: 'Interactive color discovery tool with instant HEX copy functionality.',
        image: '/coloruniverse.png',
        tags: ['React', 'JavaScript'],
        githubUrl: 'https://github.com/raj-aryan-official/ColorUniverse.git',
        liveUrl: 'https://coloruniverse.netlify.app/',
        category: 'frontend',
        featured: false
    },
    {
        id: '14',
        title: 'Image Commenting App',
        description: 'A React application that allows users to add and manage comments on images.',
        image: '/imagecommenting.png',
        tags: ['React', 'JavaScript'],
        githubUrl: 'https://github.com/raj-aryan-official/IMAGE-COMMENTING.git',
        category: 'frontend',
        featured: false
    },
    {
        id: '15',
        title: 'Currency Converter',
        description: 'Real-time currency conversion web application with clean UI.',
        image: '/currencyconverter.png',
        tags: ['MERN Stack'],
        githubUrl: 'https://github.com/raj-aryan-official/CurrencyConverter.git',
        liveUrl: 'https://newcurrencyconverter.netlify.app/',
        category: 'fullstack',
        featured: false
    },
    {
        id: '16',
        title: 'Temperature Converter',
        description: 'Responsive temperature conversion utility.',
        image: '/tempconverter.png',
        tags: ['React', 'JavaScript'],
        githubUrl: 'https://github.com/raj-aryan-official/Temperature-Converter.git',
        liveUrl: 'https://advtemperatureconverter.netlify.app/',
        category: 'frontend',
        featured: false
    },
    {
        id: '17',
        title: 'Text Converter',
        description: 'Text transformation utility for formatting and conversions.',
        image: '/textconverter.png',
        tags: ['React', 'JavaScript'],
        githubUrl: 'https://github.com/raj-aryan-official/TEXT-CONVERTER.git',
        liveUrl: 'https://newtextconverter.netlify.app/',
        category: 'frontend',
        featured: false
    },

    // Games & Practice Projects
    {
        id: '18',
        title: 'Word Guessing Game',
        description: 'A logic-based word guessing game with limited attempts and hint-driven gameplay.',
        image: '/wordguessing.png',
        tags: ['HTML', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/raj-aryan-official/WORD-GUESSING-GAME.git',
        liveUrl: 'https://wordguessinggamenew.netlify.app/',
        category: 'game',
        featured: false
    },
    {
        id: '19',
        title: 'Number Guessing Game',
        description: 'Interactive number guessing game that analyzes user guessing behavior.',
        image: '/numberguessing.png',
        tags: ['HTML', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/raj-aryan-official/NUMBER-GUESSING-GAME.git',
        liveUrl: 'https://numberguessinggamenew.netlify.app/',
        category: 'game',
        featured: false
    },
    {
        id: '20',
        title: 'Naari Suraksha',
        description: 'A women’s safety awareness platform focused on empowerment and accessibility.',
        image: '/naarishruksha.png',
        tags: ['HTML', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/raj-aryan-official/NARI-SURAKSHA.git',
        liveUrl: 'https://naarisuraksha.netlify.app/',
        category: 'frontend',
        featured: false
    },
    {
        id: '21',
        title: 'Stopwatch',
        description: 'Advanced stopwatch application with precise timing and controls.',
        image: '/stopwatch.png',
        tags: ['React', 'JavaScript'],
        githubUrl: 'https://github.com/raj-aryan-official/STOPWATCH.git',
        liveUrl: 'https://advancestopwatch.netlify.app/',
        category: 'frontend',
        featured: false
    },
    {
        id: '22',
        title: 'Tic Tac Toe',
        description: 'Classic Tic Tac Toe game demonstrating React state management.',
        image: '/tictactoe.png',
        tags: ['React', 'JavaScript'],
        githubUrl: 'https://github.com/raj-aryan-official/TIC_TAC_TOE.git',
        liveUrl: 'https://latesttictactoe.netlify.app/',
        category: 'game',
        featured: false
    },
    {
        id: '23',
        title: 'Calculator',
        description: 'Simple and responsive calculator application.',
        image: '/calculator.png',
        tags: ['React', 'JavaScript'],
        githubUrl: 'https://github.com/raj-aryan-official/CALCULATOR.git',
        liveUrl: 'https://latestcalculator.netlify.app/',
        category: 'frontend',
        featured: false
    },
    {
        id: '24',
        title: 'Anime Character Explorer',
        description: 'A website showcasing Dragon Ball anime characters with clean UI and structured data.',
        image: '/anime.png',
        tags: ['React', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/raj-aryan-official/Anime.git',
        liveUrl: 'https://animedetailpage.netlify.app/',
        category: 'frontend',
        featured: false
    }
];
