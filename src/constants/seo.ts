import { Metadata } from 'next';

const META_DATA_DEFAULT: Metadata = {
    applicationName: 'Test English',
    authors: {
        name: 'Tuan Tai Pham',
        url: 'https://github.com/Tuantai0512',
    },
    creator: 'Tuan Tai Pham',
    description:
        'On test-english.com you will find lots of free English exam practice materials to help you improve your English skills: grammar, listening, reading, writing',
    keywords: [
        'english test',
        'english e-learning',
        'english for beginer',
        'Tuan Tai Pham',
    ],
    title: {
        default: 'Test your English Clone - Every level and every skill',
        template: '%s | NextJS Boilerplate',
    },
    icons: {
        icon: '/icon.ico',
    },
};

export { META_DATA_DEFAULT };