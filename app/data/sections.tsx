import { Section } from "../types/portfolio";

export const sections: Section[] = [
    {
        id: 1,
        bgColor: 'bg-white',
        overlayColor: 'bg-neutral-800',
        imageSrc: '/Image/image1.png',
        alt: 'Gambar Test 1',
        description: 'This is the first project showcasing a modern minimal design approach using clean white backgrounds.',
    },
    {
        id: 2,
        bgColor: 'bg-gray-100',
        overlayColor: 'bg-blue-800',
        imageSrc: '/Image/image2.png',
        alt: 'Gambar Test 2',
        description: 'This project is a creative exploration of bold and energetic blue tones in residential spaces.',
    },
    {
        id: 3,
        bgColor: 'bg-slate-50',
        overlayColor: 'bg-green-800',
        imageSrc: '/Image/image3.png',
        alt: 'Gambar Test 3',
        description: 'This concept blends natural green hues with soft lighting to create a calming interior layout.',
    },
    {
        id: 4,
        bgColor: 'bg-stone-100',
        overlayColor: 'bg-purple-800',
        imageSrc: '/Image/image4.png',
        alt: 'Gambar Test 4',
        description: 'An experimental design focused on dynamic lighting and violet accents for a bold statement.',
    },
];
