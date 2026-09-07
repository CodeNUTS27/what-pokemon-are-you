export const quizData2 = {
  questions: [
    {
      id: 1,
      question: 'When trying to do something, what comes first?',
      answers: [
        { text: 'Jump in and start right away', trait: 'Extraversion' },
        { text: 'Think of different ways to do it', trait: 'Openness' },
        { text: "Make sure it won't hurt anyone else", trait: 'Agreeableness' },
        { text: 'Plan and prepare carefully', trait: 'Conscientiousness' },
        { text: 'Worry if I can actually do it', trait: 'Neuroticism' },
      ],
    },
    {
      id: 2,
      question: 'When you have a day off, what do you really do?',
      answers: [
        {
          text: 'Go out, meet friends, do something exciting',
          trait: 'Extraversion',
        },
        { text: 'Try something new or explore a hobby', trait: 'Openness' },
        {
          text: 'Spend time with loved ones or help someone',
          trait: 'Agreeableness',
        },
        {
          text: 'Organize, plan, or work on a project',
          trait: 'Conscientiousness',
        },
        { text: 'Rest, relax, and avoid stress', trait: 'Neuroticism' },
      ],
    },
    {
      id: 3,
      question: 'What do you prefer when having money?',
      answers: [
        {
          text: 'Buy new things and experiences that excite me',
          trait: 'Openness',
        },
        { text: 'Save it and plan for my future', trait: 'Conscientiousness' },
        {
          text: 'Spend it on social activities and enjoy time out',
          trait: 'Extraversion',
        },
        {
          text: 'Use it to spend quality time with family and loved ones',
          trait: 'Agreeableness',
        },
        {
          text: 'Save it carefully for emergencies and security',
          trait: 'Neuroticism',
        },
      ],
    },
    {
      id: 4,
      question: "When you're having a great time, what matters most to you?",
      answers: [
        {
          text: 'Share it with friends',
          trait: 'Extraversion',
        },
        { text: 'Try something new', trait: 'Openness' },
        { text: 'Make sure others enjoy it', trait: 'Agreeableness' },
        {
          text: 'Enjoy every detail',
          trait: 'Conscientiousness',
        },
        { text: 'Worry it might end', trait: 'Neuroticism' },
      ],
    },
    {
      id: 5,
      question: 'How do you handle conflict with others?',
      answers: [
        { text: 'Face it directly and speak up', trait: 'Extraversion' },
        {
          text: 'Look for creative solutions that work for everyone',
          trait: 'Openness',
        },
        {
          text: 'Try to understand their perspective first',
          trait: 'Agreeableness',
        },
        {
          text: 'Focus on finding the logical solution',
          trait: 'Conscientiousness',
        },
        { text: 'Avoid it to prevent more stress', trait: 'Neuroticism' },
      ],
    },
    {
      id: 6,
      question: 'What motivates you the most?',
      answers: [
        { text: 'Recognition and social approval', trait: 'Extraversion' },
        { text: 'Learning and personal growth', trait: 'Openness' },
        {
          text: 'Helping others and making a difference',
          trait: 'Agreeableness',
        },
        {
          text: 'Achievement and completing goals',
          trait: 'Conscientiousness',
        },
        { text: 'Stability and feeling secure', trait: 'Neuroticism' },
      ],
    },
    {
      id: 7,
      question: 'How do you approach new challenges?',
      answers: [
        { text: 'Jump in with enthusiasm', trait: 'Extraversion' },
        { text: 'See it as an opportunity to learn', trait: 'Openness' },
        { text: 'Consider how it affects my team', trait: 'Agreeableness' },
        {
          text: 'Break it down into manageable steps',
          trait: 'Conscientiousness',
        },
        { text: 'Feel nervous but push through', trait: 'Neuroticism' },
      ],
    },
    {
      id: 8,
      question: "What's your ideal way to spend time?",
      answers: [
        { text: 'With lots of people and activities', trait: 'Extraversion' },
        { text: 'Exploring new interests and ideas', trait: 'Openness' },
        { text: 'Helping or supporting others', trait: 'Agreeableness' },
        {
          text: 'Working on projects with clear goals',
          trait: 'Conscientiousness',
        },
        { text: 'In a calm, predictable environment', trait: 'Neuroticism' },
      ],
    },
    {
      id: 9,
      question: 'When something goes wrong, what do you do?',
      answers: [
        { text: 'Talk about it and find support', trait: 'Extraversion' },
        { text: 'Think about what I can learn from it', trait: 'Openness' },
        {
          text: 'Help others who might be affected too',
          trait: 'Agreeableness',
        },
        {
          text: 'Fix it systematically and prevent it again',
          trait: 'Conscientiousness',
        },
        { text: 'Worry about future problems too', trait: 'Neuroticism' },
      ],
    },
    {
      id: 10,
      question: 'How would others describe you?',
      answers: [
        { text: 'Outgoing and energetic', trait: 'Extraversion' },
        { text: 'Creative and open-minded', trait: 'Openness' },
        { text: 'Kind and supportive', trait: 'Agreeableness' },
        { text: 'Reliable and organized', trait: 'Conscientiousness' },
        { text: 'Cautious and thoughtful', trait: 'Neuroticism' },
      ],
    },
  ],

  results: {
    Fire: [
      {
        name: 'Charizard',
        pokedexNumber: 6,
        description:
          'A fire-breathing dragon Pokémon known for its fierce pride and powerful attacks.',
        nature:
          "You're bold and energetic, unafraid to pursue your passions with intensity. Your enthusiasm inspires others, and you thrive on excitement and challenge.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
        traitWeights: {
          Extraversion: 3,
          Openness: 2,
          Conscientiousness: 0,
          Agreeableness: -1,
          Neuroticism: -2,
        },
      },
      {
        name: 'Arcanine',
        pokedexNumber: 59,
        description:
          'A legendary Fire-type known for its bold spirit and incredible speed.',
        nature:
          'You live life with boundless energy and optimism. Quick to act and quick to decide, you face challenges with courage and never back down.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png',
        traitWeights: {
          Extraversion: 3,
          Openness: 1,
          Conscientiousness: 1,
          Agreeableness: 0,
          Neuroticism: -2,
        },
      },
      {
        name: 'Salamence',
        pokedexNumber: 373,
        description:
          'A powerful Dragon and Flying-type with an aggressive, fearless nature.',
        nature:
          "Your adventurous spirit knows no limits. You're willing to explore new territory and push boundaries, always seeking the next exciting experience.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 3,
          Conscientiousness: -1,
          Agreeableness: -1,
          Neuroticism: -2,
        },
      },
      {
        name: 'Blaziken',
        pokedexNumber: 257,
        description:
          'A Fire and Fighting-type that fights with incredible courage and intensity.',
        nature:
          "You're a natural fighter who stands up for what you believe in. Your determination and passion drive you to overcome any obstacle.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 1,
          Conscientiousness: 2,
          Agreeableness: -1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Rapidash',
        pokedexNumber: 78,
        description:
          'A Fire-type known for its speed and wild, untamed spirit.',
        nature:
          "Freedom and excitement fuel your soul. You're spontaneous, always moving forward, and thrive in dynamic, ever-changing environments.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png',
        traitWeights: {
          Extraversion: 3,
          Openness: 2,
          Conscientiousness: -1,
          Agreeableness: 0,
          Neuroticism: -2,
        },
      },
      {
        name: 'Flareon',
        pokedexNumber: 136,
        description: 'A Fire-type with a warm, passionate demeanor.',
        nature:
          'Your warmth and passion are infectious. You bring heat and energy to everything you do, and people are drawn to your vibrant personality.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 1,
          Conscientiousness: 0,
          Agreeableness: 2,
          Neuroticism: -1,
        },
      },
      {
        name: 'Typhlosion',
        pokedexNumber: 157,
        description: 'A powerful Fire-type that erupts with explosive energy.',
        nature:
          "You're intense and driven, with a burning passion for your goals. Your inner fire propels you forward with unstoppable momentum.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 1,
          Conscientiousness: 2,
          Agreeableness: -1,
          Neuroticism: 0,
        },
      },
      {
        name: 'Entei',
        pokedexNumber: 244,
        description:
          'A legendary Fire-type that roams the world with majestic power.',
        nature:
          'You move through life with confidence and presence. Your strength inspires respect, and your passion for life is truly legendary.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 1,
          Conscientiousness: 1,
          Agreeableness: 1,
          Neuroticism: -2,
        },
      },
      {
        name: 'Moltres',
        pokedexNumber: 146,
        description:
          'A legendary Fire and Flying-type that embodies courage and determination.',
        nature:
          'Like a phoenix, you rise to meet every challenge with burning determination. Your courage and passion make you unstoppable.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 2,
          Conscientiousness: 2,
          Agreeableness: 0,
          Neuroticism: -2,
        },
      },
      {
        name: 'Cyndaquil',
        pokedexNumber: 155,
        description: 'A Fire-type with a small but fierce flame in its heart.',
        nature:
          'Though you start small, your inner fire burns bright. You have the potential to become something truly powerful and passionate.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 1,
          Conscientiousness: 1,
          Agreeableness: 1,
          Neuroticism: 1,
        },
      },
    ],
    Water: [
      {
        name: 'Blastoise',
        pokedexNumber: 9,
        description:
          'A Water-type known for its composed nature and adaptability.',
        nature:
          "You flow through life with grace and flexibility. Quick to adapt to any situation, you're smooth under pressure and always find your way.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 1,
          Conscientiousness: 1,
          Agreeableness: 1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Lapras',
        pokedexNumber: 131,
        description:
          'A Water and Ice-type with a serene, adaptable spirit despite its power.',
        nature:
          "You're a natural helper, willing to carry others' burdens. Your adaptability and warmth make you a steady, dependable presence.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 1,
          Conscientiousness: 2,
          Agreeableness: 3,
          Neuroticism: -1,
        },
      },
      {
        name: 'Gyarados',
        pokedexNumber: 130,
        description:
          'A fierce Water and Flying-type that moves with fluid power.',
        nature:
          'You have hidden depths and surprising strength. Though flexible, when you commit, you move with powerful determination.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 1,
          Conscientiousness: 2,
          Agreeableness: -1,
          Neuroticism: 0,
        },
      },
      {
        name: 'Swampert',
        pokedexNumber: 260,
        description: 'A Water and Ground-type that adapts to any terrain.',
        nature:
          "You're adaptable and practical, able to handle whatever comes your way. Your quick thinking and flexibility are your greatest strengths.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 2,
          Conscientiousness: 2,
          Agreeableness: 1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Vaporeon',
        pokedexNumber: 134,
        description: 'A Water-type that embodies fluidity and grace.',
        nature:
          'You move smoothly through social situations, adapting to the mood around you. Your easygoing nature draws people to you.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 1,
          Conscientiousness: 0,
          Agreeableness: 2,
          Neuroticism: -1,
        },
      },
      {
        name: 'Milotic',
        pokedexNumber: 350,
        description:
          'A Water-type representing grace, beauty, and flowing motion.',
        nature:
          "You're elegant and adaptable, moving through challenges with grace. Your beauty lies in your flexibility and kindness.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 2,
          Conscientiousness: 1,
          Agreeableness: 3,
          Neuroticism: -1,
        },
      },
      {
        name: 'Feraligatr',
        pokedexNumber: 160,
        description: 'A Water-type with powerful, flowing movement.',
        nature:
          "You're quick and adaptive, able to change direction swiftly. Your speed and flexibility give you an edge in any situation.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 1,
          Conscientiousness: 1,
          Agreeableness: -1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Lugia',
        pokedexNumber: 249,
        description:
          'A legendary Water and Psychic-type that brings balance and peace.',
        nature:
          "You have a calming presence and adaptable nature. Your ability to flow with life's currents makes you truly legendary.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 2,
          Conscientiousness: 2,
          Agreeableness: 2,
          Neuroticism: -2,
        },
      },
      {
        name: 'Totodile',
        pokedexNumber: 158,
        description: 'A Water-type with a young, adaptable spirit.',
        nature:
          "You're quick to learn and adapt to new situations. Your natural flexibility helps you navigate the world with ease.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 2,
          Conscientiousness: 0,
          Agreeableness: 1,
          Neuroticism: 0,
        },
      },
      {
        name: 'Squirtle',
        pokedexNumber: 7,
        description:
          'A Water-type that adapts by retreating into its protective shell.',
        nature:
          "You're thoughtful and adaptable, choosing when to engage and when to retreat. Your flexibility is your greatest strength.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 1,
          Conscientiousness: 2,
          Agreeableness: 1,
          Neuroticism: 1,
        },
      },
    ],
    Electric: [
      {
        name: 'Pikachu',
        pokedexNumber: 25,
        description:
          'An Electric-type known for its intelligence and social charisma.',
        nature:
          "You're energetic and social, quick to think and quicker to act. Your intelligence shines through in your unique perspective on life.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        traitWeights: {
          Extraversion: 3,
          Openness: 2,
          Conscientiousness: 0,
          Agreeableness: 1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Electrode',
        pokedexNumber: 101,
        description:
          'An Electric-type with lightning-fast reflexes and sharp thinking.',
        nature:
          "Your mind works at electric speed, processing ideas faster than most. You're spontaneous, creative, and always ready for the next adventure.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png',
        traitWeights: {
          Extraversion: 3,
          Openness: 2,
          Conscientiousness: 1,
          Agreeableness: 0,
          Neuroticism: -1,
        },
      },
      {
        name: 'Ampharos',
        pokedexNumber: 181,
        description: 'An Electric-type that shines brightly and guides others.',
        nature:
          "You're a natural light in the world, guiding others with your energy and optimism. Your bright ideas spark innovation and change.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 2,
          Conscientiousness: 2,
          Agreeableness: 2,
          Neuroticism: -1,
        },
      },
      {
        name: 'Raichu',
        pokedexNumber: 26,
        description: 'An Electric-type with powerful, dynamic energy.',
        nature:
          "You're charismatic and energetic, able to charge up any room with your presence. Your spontaneity and creativity inspire others.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png',
        traitWeights: {
          Extraversion: 3,
          Openness: 2,
          Conscientiousness: 0,
          Agreeableness: 1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Electabuzz',
        pokedexNumber: 125,
        description: 'An Electric-type that thrives on speed and energy.',
        nature:
          "You're always buzzing with excitement and new ideas. Your dynamic energy and innovation make you a natural trendsetter.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png',
        traitWeights: {
          Extraversion: 3,
          Openness: 2,
          Conscientiousness: 0,
          Agreeableness: 0,
          Neuroticism: -1,
        },
      },
      {
        name: 'Zapdos',
        pokedexNumber: 145,
        description:
          'A legendary Electric and Flying-type that strikes with power.',
        nature:
          "You're powerful and charismatic, with ideas that strike like lightning. Your energy is legendary, and your influence is undeniable.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png',
        traitWeights: {
          Extraversion: 3,
          Openness: 2,
          Conscientiousness: 1,
          Agreeableness: 0,
          Neuroticism: -2,
        },
      },
      {
        name: 'Magneton',
        pokedexNumber: 82,
        description: 'An Electric and Steel-type with innovative energy.',
        nature:
          'You think in unique ways and come up with novel solutions. Your creativity combined with social energy makes you a natural innovator.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 3,
          Conscientiousness: 2,
          Agreeableness: 0,
          Neuroticism: -1,
        },
      },
      {
        name: 'Jolteon',
        pokedexNumber: 135,
        description: 'An Electric-type with lightning-quick speed and energy.',
        nature:
          "You're fast-paced and spontaneous, always ready for the next exciting thing. Your quick wit and energy are irresistible.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png',
        traitWeights: {
          Extraversion: 3,
          Openness: 2,
          Conscientiousness: -1,
          Agreeableness: 0,
          Neuroticism: -2,
        },
      },
      {
        name: 'Magnezone',
        pokedexNumber: 462,
        description:
          'An Electric and Steel-type with complex, innovative intelligence.',
        nature:
          'You have sophisticated ideas that challenge the norm. Your blend of creativity and social energy makes you exceptionally influential.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 3,
          Conscientiousness: 3,
          Agreeableness: 0,
          Neuroticism: -1,
        },
      },
      {
        name: 'Rotom',
        pokedexNumber: 479,
        description: 'An Electric and Ghost-type with unique, playful energy.',
        nature:
          "You're creative and unconventional, always thinking outside the box. Your unique perspective and social energy bring freshness everywhere.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 3,
          Conscientiousness: 1,
          Agreeableness: 1,
          Neuroticism: 0,
        },
      },
    ],
    Grass: [
      {
        name: 'Venusaur',
        pokedexNumber: 3,
        description: 'A Grass and Poison-type with nurturing, caring nature.',
        nature:
          "You're nurturing and responsible, always thinking of others' wellbeing. Your reliability and kindness make you a natural caregiver.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 1,
          Conscientiousness: 2,
          Agreeableness: 3,
          Neuroticism: 0,
        },
      },
      {
        name: 'Meganium',
        pokedexNumber: 154,
        description: 'A Grass-type with a gentle, protective nature.',
        nature:
          'You protect those you care about with gentle strength. Your calm presence and kindness create a safe space for everyone around you.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 0,
          Conscientiousness: 2,
          Agreeableness: 3,
          Neuroticism: -1,
        },
      },
      {
        name: 'Exeggutor',
        pokedexNumber: 103,
        description:
          'A Grass and Psychic-type with a thoughtful, balanced nature.',
        nature:
          "You're thoughtful and dependable, balancing concern for others with personal responsibility. Your stability is greatly appreciated.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 2,
          Conscientiousness: 2,
          Agreeableness: 2,
          Neuroticism: 0,
        },
      },
      {
        name: 'Vileplume',
        pokedexNumber: 45,
        description:
          'A Grass and Poison-type that attracts others with its caring charm.',
        nature:
          'You draw people in with your warmth and genuine care. Your nurturing spirit and reliability make you a beloved friend.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 1,
          Conscientiousness: 1,
          Agreeableness: 3,
          Neuroticism: 0,
        },
      },
      {
        name: 'Bellossom',
        pokedexNumber: 182,
        description: 'A Grass-type that dances with joy and spreads happiness.',
        nature:
          'You radiate kindness and bring harmony to your environment. Your caring nature and sense of responsibility inspire trust.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 1,
          Conscientiousness: 1,
          Agreeableness: 3,
          Neuroticism: -1,
        },
      },
      {
        name: 'Leafeon',
        pokedexNumber: 470,
        description: 'A Grass-type embodying grace and natural harmony.',
        nature:
          "You're balanced and harmonious, bringing peace to those around you. Your kindness and organization create a pleasant environment.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 1,
          Conscientiousness: 3,
          Agreeableness: 2,
          Neuroticism: -1,
        },
      },
      {
        name: 'Celebi',
        pokedexNumber: 251,
        description:
          'A legendary Grass and Psychic-type that embodies harmony.',
        nature:
          "You're naturally kind and responsible, creating harmony wherever you go. Your caring nature is truly legendary.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 2,
          Conscientiousness: 2,
          Agreeableness: 3,
          Neuroticism: -2,
        },
      },
      {
        name: 'Bulbasaur',
        pokedexNumber: 1,
        description:
          'A Grass and Poison-type with a nurturing seed of potential.',
        nature:
          "You're growing into a caring, responsible person. Your potential for kindness and reliability is limitless.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 1,
          Conscientiousness: 1,
          Agreeableness: 2,
          Neuroticism: 0,
        },
      },
      {
        name: 'Chikorita',
        pokedexNumber: 152,
        description: 'A Grass-type with a young, nurturing spirit.',
        nature:
          'You have a natural warmth and sense of responsibility. Your caring nature blossoms as you grow.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 0,
          Conscientiousness: 1,
          Agreeableness: 2,
          Neuroticism: 0,
        },
      },
      {
        name: 'Shaymin',
        pokedexNumber: 492,
        description: 'A Grass and Fairy-type that spreads love and beauty.',
        nature:
          'You bring beauty and kindness to the world. Your caring spirit and dependability make everyone feel valued.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/492.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 2,
          Conscientiousness: 2,
          Agreeableness: 3,
          Neuroticism: -2,
        },
      },
    ],
    Normal: [
      {
        name: 'Snorlax',
        pokedexNumber: 143,
        description: 'A Normal-type embodying contentment and friendliness.',
        nature:
          "You're easygoing and approachable, comfortable in your own skin. Your practical nature and genuine warmth make you dependable.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 0,
          Conscientiousness: 1,
          Agreeableness: 2,
          Neuroticism: -1,
        },
      },
      {
        name: 'Pidgeot',
        pokedexNumber: 18,
        description:
          'A Normal and Flying-type with a trustworthy, practical nature.',
        nature:
          "You're reliable and straightforward, with a down-to-earth approach to life. Your practical wisdom is deeply appreciated.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 1,
          Conscientiousness: 3,
          Agreeableness: 1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Kangaskhan',
        pokedexNumber: 115,
        description: 'A Normal-type devoted to family and practical care.',
        nature:
          "You're nurturing and practical, devoted to those you love. Your straightforward kindness and care define who you are.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 0,
          Conscientiousness: 2,
          Agreeableness: 3,
          Neuroticism: 0,
        },
      },
      {
        name: 'Chansey',
        pokedexNumber: 113,
        description: 'A Normal-type embodying warmth and caring practicality.',
        nature:
          "You're genuinely kind and approachable, with a practical approach to helping others. Your warmth is contagious.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 0,
          Conscientiousness: 2,
          Agreeableness: 3,
          Neuroticism: -1,
        },
      },
      {
        name: 'Lickitung',
        pokedexNumber: 108,
        description: 'A Normal-type with an affectionate, friendly nature.',
        nature:
          "You're friendly and approachable, showing genuine interest in others. Your warmth and sincerity make you easy to befriend.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 0,
          Conscientiousness: 0,
          Agreeableness: 3,
          Neuroticism: 0,
        },
      },
      {
        name: "Farfetch'd",
        pokedexNumber: 83,
        description: 'A Normal and Flying-type with unique, practical wisdom.',
        nature:
          "You're practical and straightforward, with a unique perspective. Your genuine nature and reliability are your best qualities.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 2,
          Conscientiousness: 2,
          Agreeableness: 1,
          Neuroticism: 0,
        },
      },
      {
        name: 'Dodrio',
        pokedexNumber: 85,
        description: 'A Normal and Flying-type with balanced, friendly energy.',
        nature:
          "You're balanced and approachable, comfortable in social situations but grounded in practicality. Your stability is reassuring.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 1,
          Conscientiousness: 1,
          Agreeableness: 1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Porygon',
        pokedexNumber: 137,
        description:
          'A Normal-type with an artificial, pragmatic intelligence.',
        nature:
          "You're logical and practical, approaching life with clear thinking. Your straightforward nature and honesty are admirable.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 2,
          Conscientiousness: 3,
          Agreeableness: 0,
          Neuroticism: 0,
        },
      },
      {
        name: 'Ditto',
        pokedexNumber: 132,
        description: 'A Normal-type that adapts to fit in anywhere.',
        nature:
          "You're adaptable and approachable, comfortable fitting into any situation. Your flexibility and friendliness are your strengths.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 2,
          Conscientiousness: 1,
          Agreeableness: 2,
          Neuroticism: 0,
        },
      },
      {
        name: 'Wigglytuff',
        pokedexNumber: 40,
        description: 'A Normal and Fairy-type bringing joy and warmth.',
        nature:
          "You're warm and friendly, with a genuine desire to bring happiness to others. Your approachable nature draws people to you.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png',
        traitWeights: {
          Extraversion: 3,
          Openness: 1,
          Conscientiousness: 0,
          Agreeableness: 2,
          Neuroticism: 0,
        },
      },
    ],
    Psychic: [
      {
        name: 'Alakazam',
        pokedexNumber: 65,
        description:
          'A Psychic-type with an IQ of 5,000 — the ultimate analytical mind.',
        nature:
          'Your intellect is extraordinary, with an analytical mind that sees patterns others miss. Your wisdom and insight are invaluable.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 3,
          Conscientiousness: 3,
          Agreeableness: -1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Espeon',
        pokedexNumber: 196,
        description:
          'A Psychic-type that perceives the world with intuitive wisdom.',
        nature:
          'You have keen insight and intuition, understanding things on a deeper level. Your thoughtful nature and wisdom guide your decisions.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 3,
          Conscientiousness: 2,
          Agreeableness: 0,
          Neuroticism: -1,
        },
      },
      {
        name: 'Gardevoir',
        pokedexNumber: 282,
        description: 'A Psychic and Fairy-type with mystical insight and care.',
        nature:
          "You perceive the world with mystical wisdom and deep care. Your insight into others' needs combined with your thoughtfulness is remarkable.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 2,
          Conscientiousness: 2,
          Agreeableness: 3,
          Neuroticism: -1,
        },
      },
      {
        name: 'Hypno',
        pokedexNumber: 97,
        description: 'A Psychic-type that understands the human mind deeply.',
        nature:
          'You understand people on a psychological level. Your insight into human nature and thoughtful approach make you exceptionally wise.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 2,
          Conscientiousness: 2,
          Agreeableness: 2,
          Neuroticism: -1,
        },
      },
      {
        name: 'Slowbro',
        pokedexNumber: 80,
        description:
          'A Water and Psychic-type with contemplative, analytical nature.',
        nature:
          'You think deeply and analytically, taking time to understand complex situations. Your introspective nature leads to true wisdom.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 2,
          Conscientiousness: 1,
          Agreeableness: 1,
          Neuroticism: 0,
        },
      },
      {
        name: 'Mr. Mime',
        pokedexNumber: 122,
        description: 'A Psychic-type with creative, introspective talent.',
        nature:
          "You're thoughtful and creative, with a rich inner world. Your introspective nature and analytical mind create true artistry.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 3,
          Conscientiousness: 2,
          Agreeableness: 1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Jynx',
        pokedexNumber: 124,
        description:
          'A Psychic and Ice-type with intuitive, mysterious wisdom.',
        nature:
          'You have intuitive wisdom and a mysterious depth. Your introspective nature and analytical insight are truly profound.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 2,
          Conscientiousness: 1,
          Agreeableness: 2,
          Neuroticism: 0,
        },
      },
      {
        name: 'Exeggcute',
        pokedexNumber: 102,
        description: 'A Grass and Psychic-type with contemplative energy.',
        nature:
          "You're thoughtful and analytical, viewing the world through a unique lens. Your introspective nature helps you understand deep truths.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 2,
          Conscientiousness: 1,
          Agreeableness: 1,
          Neuroticism: 1,
        },
      },
      {
        name: 'Mewtwo',
        pokedexNumber: 150,
        description: 'A legendary Psychic-type of supreme intelligence.',
        nature:
          'Your intellect is legendary, with profound analytical abilities. Your deep wisdom and insight make you truly extraordinary.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 3,
          Conscientiousness: 3,
          Agreeableness: -2,
          Neuroticism: -1,
        },
      },
      {
        name: 'Beheeyem',
        pokedexNumber: 522,
        description: 'A Psychic-type with mysterious, analytical insight.',
        nature:
          'You think in unique, introspective ways. Your analytical nature and deep understanding of complex systems are remarkable.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/522.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 3,
          Conscientiousness: 2,
          Agreeableness: 0,
          Neuroticism: -1,
        },
      },
    ],
    Dark: [
      {
        name: 'Umbreon',
        pokedexNumber: 197,
        description: 'A Dark-type with a calm, mysterious demeanor.',
        nature:
          "You're calm and composed, with a mysterious depth. Your independence and inner strength give you a quiet, commanding presence.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 1,
          Conscientiousness: 2,
          Agreeableness: -1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Tyranitar',
        pokedexNumber: 248,
        description: 'A Rock and Dark-type with commanding, strategic power.',
        nature:
          "You're independent and strategic, with a calm intensity. Your strength lies in your composed confidence and self-reliance.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 1,
          Conscientiousness: 2,
          Agreeableness: -2,
          Neuroticism: -1,
        },
      },
      {
        name: 'Houndoom',
        pokedexNumber: 229,
        description: 'A Dark and Fire-type with independent, intense nature.',
        nature:
          "You're fiercely independent with a calm intensity. Your strategic thinking and composed strength make you formidable.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 1,
          Conscientiousness: 2,
          Agreeableness: -1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Absol',
        pokedexNumber: 359,
        description: 'A Dark-type with mysterious, perceptive wisdom.',
        nature:
          'You perceive things others miss, with a calm, strategic mind. Your independence and wisdom are your greatest assets.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 2,
          Conscientiousness: 1,
          Agreeableness: -1,
          Neuroticism: 0,
        },
      },
      {
        name: 'Cacturne',
        pokedexNumber: 332,
        description:
          'A Grass and Dark-type with mysterious, unpredictable nature.',
        nature:
          "You're mysterious and independent, keeping your thoughts private. Your calm confidence and strategic mind are admirable.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png',
        traitWeights: {
          Extraversion: -1,
          Openness: 1,
          Conscientiousness: 1,
          Agreeableness: -1,
          Neuroticism: 1,
        },
      },
      {
        name: 'Shiftry',
        pokedexNumber: 275,
        description: 'A Grass and Dark-type with calm, mysterious strength.',
        nature:
          "You're calm and composed, with a mysterious quality. Your independence and strategic wisdom guide your path.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 1,
          Conscientiousness: 2,
          Agreeableness: -1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Poochyena',
        pokedexNumber: 261,
        description: 'A Dark-type with independent, strategic nature.',
        nature:
          "You're independent and calm under pressure. Your strategic thinking and quiet strength make you a natural survivor.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 0,
          Conscientiousness: 1,
          Agreeableness: -2,
          Neuroticism: -1,
        },
      },
      {
        name: 'Mightyena',
        pokedexNumber: 262,
        description: 'A Dark-type with composed, strategic power.',
        nature:
          "You're fiercely independent with strategic calm. Your composed confidence and strength inspire respect.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 0,
          Conscientiousness: 2,
          Agreeableness: -1,
          Neuroticism: -2,
        },
      },
      {
        name: 'Spiritomb',
        pokedexNumber: 442,
        description: 'A Ghost and Dark-type with mysterious, ancient wisdom.',
        nature:
          "You're mysteriously calm with ancient wisdom. Your independence and strategic insight give you unique perspective.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 2,
          Conscientiousness: 1,
          Agreeableness: -1,
          Neuroticism: 0,
        },
      },
      {
        name: 'Hydreigon',
        pokedexNumber: 635,
        description:
          'A Dark and Dragon-type with commanding, strategic presence.',
        nature:
          "You're powerfully independent with calm, strategic thinking. Your composed strength and wisdom are truly commanding.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 2,
          Conscientiousness: 2,
          Agreeableness: -2,
          Neuroticism: -1,
        },
      },
    ],
    Fighting: [
      {
        name: 'Machamp',
        pokedexNumber: 68,
        description: 'A Fighting-type with four arms ready for any challenge.',
        nature:
          "You're assertive and determined, always ready to face challenges directly. Your strength and focus make you unstoppable.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 0,
          Conscientiousness: 3,
          Agreeableness: -1,
          Neuroticism: -2,
        },
      },
      {
        name: 'Machoke',
        pokedexNumber: 67,
        description: 'A Fighting-type building strength and confidence.',
        nature:
          "You're growing stronger and more confident. Your determination and direct approach to challenges are admirable.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 0,
          Conscientiousness: 2,
          Agreeableness: -1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Primeape',
        pokedexNumber: 57,
        description: 'A Fighting-type with passionate, assertive nature.',
        nature:
          "You're passionate and assertive, standing up for what you believe. Your intensity and direct nature drive you forward.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 0,
          Conscientiousness: 1,
          Agreeableness: -2,
          Neuroticism: 1,
        },
      },
      {
        name: 'Mankey',
        pokedexNumber: 56,
        description: 'A Fighting-type with fiery, determined spirit.',
        nature:
          "You're determined and direct, with a fighting spirit. Your passion and assertiveness make you truly formidable.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 0,
          Conscientiousness: 1,
          Agreeableness: -1,
          Neuroticism: 1,
        },
      },
      {
        name: 'Poliwrath',
        pokedexNumber: 62,
        description: 'A Water and Fighting-type with powerful determination.',
        nature:
          "You're determined and assertive, combining strategic thinking with direct action. Your powerful focus leads to achievement.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 1,
          Conscientiousness: 3,
          Agreeableness: -1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Hitmonlee',
        pokedexNumber: 106,
        description: 'A Fighting-type with focused, powerful determination.',
        nature:
          "You're focused and assertive, directing all energy toward your goals. Your determination and discipline are remarkable.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 0,
          Conscientiousness: 3,
          Agreeableness: -2,
          Neuroticism: -1,
        },
      },
      {
        name: 'Hitmonchan',
        pokedexNumber: 107,
        description: 'A Fighting-type with strategic, assertive power.',
        nature:
          "You're strategically assertive, using your intelligence combined with determination. Your focused strength is truly impressive.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 1,
          Conscientiousness: 2,
          Agreeableness: -1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Hitmonop',
        pokedexNumber: 237,
        description: 'A Fighting-type with balanced, determined nature.',
        nature:
          "You're assertive and determined, with balanced approach to challenges. Your discipline and focus drive your success.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 0,
          Conscientiousness: 2,
          Agreeableness: 0,
          Neuroticism: -1,
        },
      },
      {
        name: 'Lucario',
        pokedexNumber: 445,
        description: 'A Fighting and Steel-type combining power with wisdom.',
        nature:
          "You're assertive yet wise, balancing direct action with strategic thinking. Your determination combined with insight is powerful.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 2,
          Conscientiousness: 3,
          Agreeableness: 0,
          Neuroticism: -1,
        },
      },
      {
        name: 'Heracross',
        pokedexNumber: 214,
        description:
          'A Bug and Fighting-type with powerful, determined spirit.',
        nature:
          "You're powerfully determined and assertive, with unwavering focus. Your strength and persistence are truly legendary.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png',
        traitWeights: {
          Extraversion: 2,
          Openness: 1,
          Conscientiousness: 3,
          Agreeableness: -2,
          Neuroticism: -1,
        },
      },
    ],
    Bug: [
      {
        name: 'Butterfree',
        pokedexNumber: 12,
        description: 'A Bug and Flying-type with adaptive, curious nature.',
        nature:
          "You're observant and detail-oriented, with a curious mind about how things work. Your analytical nature drives your learning.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 2,
          Conscientiousness: 1,
          Agreeableness: 1,
          Neuroticism: 0,
        },
      },
      {
        name: 'Scyther',
        pokedexNumber: 123,
        description: 'A Bug and Flying-type with precise, focused nature.',
        nature:
          "You're detail-oriented and precise, with a methodical approach to tasks. Your thoroughness and persistence ensure quality.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 1,
          Conscientiousness: 3,
          Agreeableness: -1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Scizor',
        pokedexNumber: 212,
        description: 'A Bug and Steel-type with organized, methodical power.',
        nature:
          "You're highly organized and detail-focused, seeing everything in order. Your methodical approach creates lasting results.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 1,
          Conscientiousness: 3,
          Agreeableness: 0,
          Neuroticism: -1,
        },
      },
      {
        name: 'Forretress',
        pokedexNumber: 205,
        description:
          'A Bug and Steel-type with protective, detail-oriented nature.',
        nature:
          "You're careful and detail-oriented, taking time to get things right. Your thorough approach to everything is admirable.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 0,
          Conscientiousness: 3,
          Agreeableness: 1,
          Neuroticism: 0,
        },
      },
      {
        name: 'Beedrill',
        pokedexNumber: 15,
        description: 'A Bug and Poison-type with sharp, focused nature.',
        nature:
          "You're sharp-eyed and detail-focused, catching what others miss. Your persistent analysis and accuracy are exceptional.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 0,
          Conscientiousness: 2,
          Agreeableness: -1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Venonat',
        pokedexNumber: 69,
        description: 'A Bug and Poison-type with observant, curious nature.',
        nature:
          "You're observant and curious about details. Your analytical mind loves understanding how systems work.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 2,
          Conscientiousness: 2,
          Agreeableness: 0,
          Neuroticism: 0,
        },
      },
      {
        name: 'Venomoth',
        pokedexNumber: 71,
        description: 'A Bug and Poison-type with analytical, precise nature.',
        nature:
          "You're analytical and precise, seeing patterns in details. Your thorough understanding of systems is remarkable.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 2,
          Conscientiousness: 2,
          Agreeableness: 0,
          Neuroticism: -1,
        },
      },
      {
        name: 'Ariados',
        pokedexNumber: 168,
        description: 'A Bug and Poison-type with patient, methodical nature.',
        nature:
          "You're patient and methodical, carefully weaving your plans. Your persistent, detail-oriented approach ensures success.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 1,
          Conscientiousness: 3,
          Agreeableness: 1,
          Neuroticism: 0,
        },
      },
      {
        name: 'Escavalier',
        pokedexNumber: 589,
        description: 'A Bug and Steel-type with focused, determined nature.',
        nature:
          "You're focused and detail-oriented, with a methodical approach to challenges. Your persistent effort always pays off.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/589.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 0,
          Conscientiousness: 3,
          Agreeableness: -1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Accelgor',
        pokedexNumber: 617,
        description: 'A Bug-type with swift, analytical nature.',
        nature:
          "You're quick to analyze and detail-focused, processing information swiftly. Your thorough understanding combined with speed is impressive.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/617.png',
        traitWeights: {
          Extraversion: 1,
          Openness: 1,
          Conscientiousness: 2,
          Agreeableness: 0,
          Neuroticism: -1,
        },
      },
    ],
    Rock: [
      {
        name: 'Golem',
        pokedexNumber: 76,
        description:
          'A Rock and Ground-type embodying stability and groundedness.',
        nature:
          "You're grounded and reliable, with a solid foundation in reality. Your stability and practical approach make you dependable.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 0,
          Conscientiousness: 3,
          Agreeableness: 1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Rhyhorn',
        pokedexNumber: 111,
        description: 'A Rock and Ground-type with sturdy, determined nature.',
        nature:
          "You're sturdy and determined, taking a steady approach to life. Your reliability and groundedness are your greatest strengths.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 0,
          Conscientiousness: 2,
          Agreeableness: 0,
          Neuroticism: -1,
        },
      },
      {
        name: 'Rhydon',
        pokedexNumber: 112,
        description: 'A Rock and Ground-type with powerful, stable presence.',
        nature:
          "You're powerful and stable, grounded in reality and practical wisdom. Your dependable nature is truly rock-solid.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 0,
          Conscientiousness: 3,
          Agreeableness: 0,
          Neuroticism: -2,
        },
      },
      {
        name: 'Onix',
        pokedexNumber: 95,
        description: 'A Rock and Ground-type with solid, unyielding nature.',
        nature:
          "You're solid and dependable, standing firm in your convictions. Your unwavering reliability is admirable.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png',
        traitWeights: {
          Extraversion: -1,
          Openness: 0,
          Conscientiousness: 3,
          Agreeableness: -1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Steelix',
        pokedexNumber: 208,
        description: 'A Steel and Ground-type with unbreakable stability.',
        nature:
          "You're incredibly stable and dependable, with unbreakable resolve. Your steady, grounded nature is truly reliable.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 0,
          Conscientiousness: 3,
          Agreeableness: -1,
          Neuroticism: -2,
        },
      },
      {
        name: 'Regirock',
        pokedexNumber: 377,
        description:
          'A legendary Rock-type embodying pure stone-like stability.',
        nature:
          'Your stability is legendary and unshakeable. Your grounded wisdom and dependability are truly timeless.',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png',
        traitWeights: {
          Extraversion: -1,
          Openness: 0,
          Conscientiousness: 3,
          Agreeableness: 0,
          Neuroticism: -2,
        },
      },
      {
        name: 'Aggron',
        pokedexNumber: 306,
        description: 'A Steel and Rock-type with powerful, stable nature.',
        nature:
          "You're powerfully stable and dependable, with a strong foundation. Your reliability and grounded strength inspire confidence.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 0,
          Conscientiousness: 3,
          Agreeableness: -1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Armaldo',
        pokedexNumber: 348,
        description: 'A Rock and Bug-type with ancient, grounded stability.',
        nature:
          "You're grounded in tradition and stability. Your dependable, ancient wisdom guides your steady path.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 1,
          Conscientiousness: 2,
          Agreeableness: 1,
          Neuroticism: -1,
        },
      },
      {
        name: 'Cradily',
        pokedexNumber: 346,
        description: 'A Rock and Grass-type with stable, grounded nature.',
        nature:
          "You're stable and grounded, with deep roots in tradition. Your reliable, balanced approach is truly admirable.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 0,
          Conscientiousness: 2,
          Agreeableness: 2,
          Neuroticism: -1,
        },
      },
      {
        name: 'Anorith',
        pokedexNumber: 347,
        description: 'A Rock and Bug-type with ancient, determined foundation.',
        nature:
          "You're grounded in stability with ancient determination. Your steady, reliable nature is truly rock-solid.",
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/347.png',
        traitWeights: {
          Extraversion: 0,
          Openness: 0,
          Conscientiousness: 2,
          Agreeableness: 0,
          Neuroticism: -1,
        },
      },
    ],
  },
}
