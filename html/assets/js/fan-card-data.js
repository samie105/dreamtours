// Celebrity Fan Card Data
const celebrityData = {
    "elon-musk": {
        id: "elon-musk",
        name: "Elon Musk",
        title: "Tech Entrepreneur & Visionary | CEO of Tesla & SpaceX",
        category: "Tech Visionary",
        categoryIcon: "isax-cpu",
        image: "assets/img/tours/tours-01.jpg",
        price: 49.99,
        originalPrice: 99.99,
        discount: 20,
        followers: "200M+",
        fanCards: "50K+",
        rating: 4.9,
        reviewCount: 2450,
        memberSince: "2024",
        isVerified: true,
        isPopular: false,
        badges: ["Verified Celebrity", "Top Rated", "50K+ Fans"],
        socialLinks: {
            twitter: "#",
            instagram: "#",
            linkedin: "#",
            youtube: "#"
        },
        about: [
            "Elon Musk is a visionary entrepreneur and business magnate known for revolutionizing multiple industries. As the CEO of Tesla and SpaceX, he has pioneered electric vehicles and private space exploration. His ventures also include Neuralink, The Boring Company, and X (formerly Twitter).",
            "Known for his ambitious goals like making humanity multi-planetary and transitioning the world to sustainable energy, Musk continues to push the boundaries of technology and innovation. His influence extends across technology, automotive, aerospace, and artificial intelligence sectors."
        ],
        achievements: [
            "Founded PayPal & sold for $1.5B",
            "CEO of Tesla - World's most valuable automaker",
            "SpaceX - First private company to ISS",
            "Time Person of the Year 2021",
            "World's richest person (2021-2023)",
            "Neuralink & The Boring Company founder"
        ],
        gallery: [
            "assets/img/tours/tours-01.jpg",
            "assets/img/tours/tours-02.jpg",
            "assets/img/tours/tours-03.jpg",
            "assets/img/tours/tours-04.jpg",
            "assets/img/tours/tours-05.jpg",
            "assets/img/tours/tours-06.jpg"
        ],
        reviews: [
            {
                name: "Michael Johnson",
                avatar: "assets/img/users/user-01.jpg",
                rating: 5,
                comment: "Amazing experience! Got early access to the Tesla event and the exclusive content is incredible. Worth every penny!"
            },
            {
                name: "Sarah Williams",
                avatar: "assets/img/users/user-02.jpg",
                rating: 5,
                comment: "The fan community is amazing! Met so many like-minded people and the merchandise discounts are a huge bonus."
            },
            {
                name: "David Chen",
                avatar: "assets/img/users/user-03.jpg",
                rating: 4.5,
                comment: "Being part of the official fan community has been incredible. The exclusive updates and early access are fantastic!"
            }
        ],
        similarCelebrities: ["drake", "taylor-swift", "beyonce"]
    },
    "drake": {
        id: "drake",
        name: "Drake",
        title: "Grammy-Winning Rapper & Producer",
        category: "Hip-Hop Artist",
        categoryIcon: "isax-music",
        image: "assets/img/tours/tours-02.jpg",
        price: 69.99,
        originalPrice: 129.99,
        discount: 15,
        followers: "150M+",
        fanCards: "75K+",
        rating: 4.8,
        reviewCount: 3200,
        memberSince: "2023",
        isVerified: true,
        isPopular: true,
        badges: ["Verified Celebrity", "Popular", "75K+ Fans"],
        socialLinks: {
            twitter: "#",
            instagram: "#",
            linkedin: "#",
            youtube: "#"
        },
        about: [
            "Drake, born Aubrey Drake Graham, is a Canadian rapper, singer, and songwriter who has dominated the hip-hop and pop charts for over a decade. Starting his career as an actor on 'Degrassi: The Next Generation,' he transitioned to music and became one of the best-selling music artists of all time.",
            "Known for his emotional lyrics and genre-blending style, Drake has won multiple Grammy Awards and broken numerous streaming records. His OVO Sound record label has also launched the careers of several successful artists."
        ],
        achievements: [
            "5x Grammy Award Winner",
            "Most streamed artist on Spotify (multiple years)",
            "Founded OVO Sound record label",
            "Billboard's Artist of the Decade 2010s",
            "Over 170 million records sold worldwide",
            "Most charted songs in Billboard Hot 100 history"
        ],
        gallery: [
            "assets/img/tours/tours-02.jpg",
            "assets/img/tours/tours-01.jpg",
            "assets/img/tours/tours-03.jpg",
            "assets/img/tours/tours-04.jpg",
            "assets/img/tours/tours-05.jpg",
            "assets/img/tours/tours-06.jpg"
        ],
        reviews: [
            {
                name: "James Miller",
                avatar: "assets/img/users/user-01.jpg",
                rating: 5,
                comment: "Got VIP access to the concert thanks to my fan card. The exclusive content drops are fire!"
            },
            {
                name: "Lisa Anderson",
                avatar: "assets/img/users/user-02.jpg",
                rating: 5,
                comment: "The OVO community is incredible. Love the early access to new music and merchandise!"
            },
            {
                name: "Marcus Brown",
                avatar: "assets/img/users/user-03.jpg",
                rating: 4.5,
                comment: "Best investment for any Drake fan. The behind-the-scenes content is amazing."
            }
        ],
        similarCelebrities: ["travis-scott", "beyonce", "ariana-grande"]
    },
    "taylor-swift": {
        id: "taylor-swift",
        name: "Taylor Swift",
        title: "Global Music Sensation",
        category: "Pop Icon",
        categoryIcon: "isax-music",
        image: "assets/img/tours/tours-03.jpg",
        price: 79.99,
        originalPrice: 149.99,
        discount: 25,
        followers: "280M+",
        fanCards: "120K+",
        rating: 4.9,
        reviewCount: 5800,
        memberSince: "2023",
        isVerified: true,
        isPopular: false,
        badges: ["Verified Celebrity", "Most Popular", "120K+ Fans"],
        socialLinks: {
            twitter: "#",
            instagram: "#",
            linkedin: "#",
            youtube: "#"
        },
        about: [
            "Taylor Swift is an American singer-songwriter who has become one of the most influential and best-selling music artists of all time. Known for her narrative songwriting, she has successfully transitioned from country to pop music while maintaining her devoted fan base known as 'Swifties.'",
            "Her groundbreaking Eras Tour became the highest-grossing concert tour of all time. Swift is also known for her advocacy for artists' rights and her re-recording of her earlier albums to own her masters."
        ],
        achievements: [
            "14x Grammy Award Winner",
            "Highest-grossing concert tour in history (Eras Tour)",
            "Most streamed female artist on Spotify",
            "Time Person of the Year 2023",
            "Forbes Most Powerful Women in Entertainment",
            "Only artist to have 4 albums sell 1M copies in a week"
        ],
        gallery: [
            "assets/img/tours/tours-03.jpg",
            "assets/img/tours/tours-01.jpg",
            "assets/img/tours/tours-02.jpg",
            "assets/img/tours/tours-04.jpg",
            "assets/img/tours/tours-05.jpg",
            "assets/img/tours/tours-06.jpg"
        ],
        reviews: [
            {
                name: "Emma Thompson",
                avatar: "assets/img/users/user-01.jpg",
                rating: 5,
                comment: "As a Swiftie, this fan card is everything! Got early access to Eras Tour tickets!"
            },
            {
                name: "Rachel Green",
                avatar: "assets/img/users/user-02.jpg",
                rating: 5,
                comment: "The exclusive acoustic versions and behind-the-scenes content are incredible!"
            },
            {
                name: "Amy Stevens",
                avatar: "assets/img/users/user-03.jpg",
                rating: 5,
                comment: "Best fan community ever! The friendship bracelets trading section is so fun!"
            }
        ],
        similarCelebrities: ["beyonce", "ariana-grande", "billie-eilish"]
    },
    "beyonce": {
        id: "beyonce",
        name: "Beyoncé",
        title: "Queen of Pop",
        category: "Music",
        categoryIcon: "isax-music",
        image: "assets/img/tours/tours-04.jpg",
        price: 74.99,
        originalPrice: 139.99,
        discount: 20,
        followers: "320M+",
        fanCards: "95K+",
        rating: 4.9,
        reviewCount: 4500,
        memberSince: "2023",
        isVerified: true,
        isPopular: false,
        badges: ["Verified Celebrity", "Legend", "95K+ Fans"],
        socialLinks: {
            twitter: "#",
            instagram: "#",
            linkedin: "#",
            youtube: "#"
        },
        about: [
            "Beyoncé Giselle Knowles-Carter is an American singer, songwriter, and businesswoman who rose to fame as the lead singer of Destiny's Child and has since become one of the most celebrated artists of the 21st century.",
            "Known for her powerful vocals, elaborate live performances, and visual albums, Beyoncé has won 32 Grammy Awards, the most by any artist in history. Her influence extends beyond music to fashion, film, and philanthropy."
        ],
        achievements: [
            "32x Grammy Award Winner (Most in history)",
            "Renaissance World Tour - $500M+ gross",
            "Time's Most Influential People (multiple times)",
            "Coachella Headliner - Historic performance",
            "Forbes Self-Made Billionaire",
            "NAACP Image Award Winner"
        ],
        gallery: [
            "assets/img/tours/tours-04.jpg",
            "assets/img/tours/tours-01.jpg",
            "assets/img/tours/tours-02.jpg",
            "assets/img/tours/tours-03.jpg",
            "assets/img/tours/tours-05.jpg",
            "assets/img/tours/tours-06.jpg"
        ],
        reviews: [
            {
                name: "Destiny Walker",
                avatar: "assets/img/users/user-01.jpg",
                rating: 5,
                comment: "The Beyhive fan card is amazing! Early access to Renaissance tour was life-changing!"
            },
            {
                name: "Michelle Carter",
                avatar: "assets/img/users/user-02.jpg",
                rating: 5,
                comment: "Exclusive merchandise drops and behind-the-scenes content are worth every penny!"
            },
            {
                name: "Aaliyah Johnson",
                avatar: "assets/img/users/user-03.jpg",
                rating: 5,
                comment: "Being part of the official Beyhive community is a dream come true!"
            }
        ],
        similarCelebrities: ["taylor-swift", "ariana-grande", "drake"]
    },
    "lebron-james": {
        id: "lebron-james",
        name: "LeBron James",
        title: "Basketball Legend",
        category: "Sports",
        categoryIcon: "isax-cup",
        image: "assets/img/tours/tours-05.jpg",
        price: 59.99,
        originalPrice: 109.99,
        discount: 15,
        followers: "180M+",
        fanCards: "85K+",
        rating: 4.8,
        reviewCount: 3800,
        memberSince: "2023",
        isVerified: true,
        isPopular: false,
        badges: ["Verified Celebrity", "Legend", "85K+ Fans"],
        socialLinks: {
            twitter: "#",
            instagram: "#",
            linkedin: "#",
            youtube: "#"
        },
        about: [
            "LeBron Raymone James Sr. is an American professional basketball player for the Los Angeles Lakers of the NBA. Widely considered one of the greatest basketball players of all time, he has won four NBA championships with three different franchises.",
            "Beyond basketball, LeBron is a successful businessman and philanthropist. His SpringHill Company produces films and television shows, and his I Promise School in Akron provides education to at-risk children."
        ],
        achievements: [
            "4x NBA Champion",
            "4x NBA Finals MVP",
            "4x NBA Most Valuable Player",
            "NBA All-Time Leading Scorer",
            "19x NBA All-Star",
            "2x Olympic Gold Medalist"
        ],
        gallery: [
            "assets/img/tours/tours-05.jpg",
            "assets/img/tours/tours-01.jpg",
            "assets/img/tours/tours-02.jpg",
            "assets/img/tours/tours-03.jpg",
            "assets/img/tours/tours-04.jpg",
            "assets/img/tours/tours-06.jpg"
        ],
        reviews: [
            {
                name: "Anthony Davis",
                avatar: "assets/img/users/user-01.jpg",
                rating: 5,
                comment: "Got courtside experience through the fan card. King James fan for life!"
            },
            {
                name: "Jordan Smith",
                avatar: "assets/img/users/user-02.jpg",
                rating: 5,
                comment: "The exclusive training videos and game analysis are incredible!"
            },
            {
                name: "Chris Thompson",
                avatar: "assets/img/users/user-03.jpg",
                rating: 4.5,
                comment: "Best sports fan card out there. The merchandise discounts are amazing!"
            }
        ],
        similarCelebrities: ["cristiano-ronaldo", "dwayne-johnson", "drake"]
    },
    "ariana-grande": {
        id: "ariana-grande",
        name: "Ariana Grande",
        title: "Pop Sensation",
        category: "Pop",
        categoryIcon: "isax-music",
        image: "assets/img/tours/tours-06.jpg",
        price: 64.99,
        originalPrice: 119.99,
        discount: 20,
        followers: "380M+",
        fanCards: "110K+",
        rating: 4.9,
        reviewCount: 4200,
        memberSince: "2023",
        isVerified: true,
        isPopular: true,
        badges: ["Verified Celebrity", "Popular", "110K+ Fans"],
        socialLinks: {
            twitter: "#",
            instagram: "#",
            linkedin: "#",
            youtube: "#"
        },
        about: [
            "Ariana Grande-Butera is an American singer, songwriter, and actress known for her four-octave vocal range and signature ponytail. She began her career in Broadway musicals before rising to fame through Nickelodeon television shows.",
            "Grande has become one of the world's best-selling music artists, with hits like 'Thank U, Next,' '7 Rings,' and 'Positions.' She is also known for her philanthropy and advocacy for mental health awareness."
        ],
        achievements: [
            "2x Grammy Award Winner",
            "Most followed woman on Instagram (previously)",
            "Billboard Woman of the Year 2018",
            "Dangerous Woman Tour - $71M gross",
            "First artist to hold top 3 Billboard spots",
            "Manchester bombing benefit concert organizer"
        ],
        gallery: [
            "assets/img/tours/tours-06.jpg",
            "assets/img/tours/tours-01.jpg",
            "assets/img/tours/tours-02.jpg",
            "assets/img/tours/tours-03.jpg",
            "assets/img/tours/tours-04.jpg",
            "assets/img/tours/tours-05.jpg"
        ],
        reviews: [
            {
                name: "Victoria Lopez",
                avatar: "assets/img/users/user-01.jpg",
                rating: 5,
                comment: "Arianators unite! This fan card got me front row seats to her concert!"
            },
            {
                name: "Bella Martinez",
                avatar: "assets/img/users/user-02.jpg",
                rating: 5,
                comment: "The exclusive R.E.M. Beauty discounts are amazing. Love being part of the community!"
            },
            {
                name: "Sophie Williams",
                avatar: "assets/img/users/user-03.jpg",
                rating: 4.5,
                comment: "Behind-the-scenes content from 'Wicked' filming was incredible!"
            }
        ],
        similarCelebrities: ["taylor-swift", "beyonce", "billie-eilish"]
    },
    "chris-hemsworth": {
        id: "chris-hemsworth",
        name: "Chris Hemsworth",
        title: "Hollywood Star",
        category: "Actor",
        categoryIcon: "isax-video-play",
        image: "assets/img/tours/tours-07.jpg",
        price: 54.99,
        originalPrice: 99.99,
        discount: 15,
        followers: "60M+",
        fanCards: "45K+",
        rating: 4.8,
        reviewCount: 2100,
        memberSince: "2024",
        isVerified: true,
        isPopular: false,
        badges: ["Verified Celebrity", "Marvel Star", "45K+ Fans"],
        socialLinks: {
            twitter: "#",
            instagram: "#",
            linkedin: "#",
            youtube: "#"
        },
        about: [
            "Chris Hemsworth is an Australian actor best known for his portrayal of Thor in the Marvel Cinematic Universe. His charismatic performance has made the character one of the most beloved superheroes in modern cinema.",
            "Beyond Marvel, Hemsworth has starred in blockbusters like 'Extraction,' 'Snow White and the Huntsman,' and 'Rush.' He is also the founder of the fitness app Centr and is passionate about health and wellness."
        ],
        achievements: [
            "Thor in MCU (2011-present)",
            "People's Sexiest Man Alive 2014",
            "Extraction - Netflix's most-watched film (2020)",
            "Centr fitness app founder",
            "Australian of the Year nominee",
            "Multiple Kids Choice Awards"
        ],
        gallery: [
            "assets/img/tours/tours-07.jpg",
            "assets/img/tours/tours-01.jpg",
            "assets/img/tours/tours-02.jpg",
            "assets/img/tours/tours-03.jpg",
            "assets/img/tours/tours-04.jpg",
            "assets/img/tours/tours-05.jpg"
        ],
        reviews: [
            {
                name: "Thor Fan",
                avatar: "assets/img/users/user-01.jpg",
                rating: 5,
                comment: "Got exclusive behind-the-scenes content from Thor: Love and Thunder!"
            },
            {
                name: "Marvel Enthusiast",
                avatar: "assets/img/users/user-02.jpg",
                rating: 5,
                comment: "The Centr workouts included are amazing. Chris is an inspiration!"
            },
            {
                name: "Action Fan",
                avatar: "assets/img/users/user-03.jpg",
                rating: 4.5,
                comment: "Great fan community. The movie premiere access was incredible!"
            }
        ],
        similarCelebrities: ["dwayne-johnson", "lebron-james", "drake"]
    },
    "travis-scott": {
        id: "travis-scott",
        name: "Travis Scott",
        title: "Rapper & Producer",
        category: "Hip-Hop",
        categoryIcon: "isax-music",
        image: "assets/img/tours/tours-08.jpg",
        price: 59.99,
        originalPrice: 109.99,
        discount: 15,
        followers: "85M+",
        fanCards: "55K+",
        rating: 4.7,
        reviewCount: 2800,
        memberSince: "2024",
        isVerified: true,
        isPopular: false,
        badges: ["Verified Celebrity", "Rager", "55K+ Fans"],
        socialLinks: {
            twitter: "#",
            instagram: "#",
            linkedin: "#",
            youtube: "#"
        },
        about: [
            "Jacques Berman Webster II, known professionally as Travis Scott, is an American rapper, singer, songwriter, and record producer. He is known for his unique sound that blends hip-hop with psychedelic and ambient music.",
            "Travis has collaborated with major brands including Nike, McDonald's, and Fortnite, creating some of the most successful celebrity partnerships in recent history. His Cactus Jack label has also signed successful artists."
        ],
        achievements: [
            "6x Grammy Nominee",
            "Astroworld Tour - $65M+ gross",
            "Fortnite concert - 12M+ concurrent viewers",
            "Nike collaboration - Most sought-after sneakers",
            "McDonald's collaboration - First since Michael Jordan",
            "Cactus Jack Records founder"
        ],
        gallery: [
            "assets/img/tours/tours-08.jpg",
            "assets/img/tours/tours-01.jpg",
            "assets/img/tours/tours-02.jpg",
            "assets/img/tours/tours-03.jpg",
            "assets/img/tours/tours-04.jpg",
            "assets/img/tours/tours-05.jpg"
        ],
        reviews: [
            {
                name: "Rager Jake",
                avatar: "assets/img/users/user-01.jpg",
                rating: 5,
                comment: "Got early access to the new Jordan collab through the fan card!"
            },
            {
                name: "Cactus Jack Fan",
                avatar: "assets/img/users/user-02.jpg",
                rating: 4.5,
                comment: "The exclusive merch drops are insane. Love the community!"
            },
            {
                name: "Utopia Lover",
                avatar: "assets/img/users/user-03.jpg",
                rating: 5,
                comment: "Behind-the-scenes content from Utopia production was fire!"
            }
        ],
        similarCelebrities: ["drake", "ariana-grande", "beyonce"]
    },
    "dwayne-johnson": {
        id: "dwayne-johnson",
        name: "Dwayne Johnson",
        title: "The Rock",
        category: "Actor",
        categoryIcon: "isax-video-play",
        image: "assets/img/tours/tours-09.jpg",
        price: 49.99,
        originalPrice: 89.99,
        discount: 20,
        followers: "400M+",
        fanCards: "130K+",
        rating: 4.9,
        reviewCount: 5200,
        memberSince: "2023",
        isVerified: true,
        isPopular: true,
        badges: ["Verified Celebrity", "Most Popular", "130K+ Fans"],
        socialLinks: {
            twitter: "#",
            instagram: "#",
            linkedin: "#",
            youtube: "#"
        },
        about: [
            "Dwayne Douglas Johnson, also known by his ring name 'The Rock,' is an American actor, businessman, and former professional wrestler. He is one of the highest-paid actors in Hollywood and most followed Americans on social media.",
            "From his legendary WWE career to blockbuster films like 'Fast & Furious,' 'Jumanji,' and 'Black Adam,' The Rock has become a global entertainment icon. He also owns Teremana Tequila and the XFL football league."
        ],
        achievements: [
            "Highest-paid actor in Hollywood (multiple years)",
            "Most followed American on Instagram",
            "10x WWE Champion",
            "Fast & Furious franchise star",
            "Teremana Tequila founder",
            "XFL co-owner"
        ],
        gallery: [
            "assets/img/tours/tours-09.jpg",
            "assets/img/tours/tours-01.jpg",
            "assets/img/tours/tours-02.jpg",
            "assets/img/tours/tours-03.jpg",
            "assets/img/tours/tours-04.jpg",
            "assets/img/tours/tours-05.jpg"
        ],
        reviews: [
            {
                name: "Wrestling Fan",
                avatar: "assets/img/users/user-01.jpg",
                rating: 5,
                comment: "The Rock's motivational content is incredible. Best fan card ever!"
            },
            {
                name: "Iron Paradise Member",
                avatar: "assets/img/users/user-02.jpg",
                rating: 5,
                comment: "Got the workout routines and early movie premiere access. Worth it!"
            },
            {
                name: "People's Champion",
                avatar: "assets/img/users/user-03.jpg",
                rating: 5,
                comment: "The community is amazing. The Rock actually engages with fans!"
            }
        ],
        similarCelebrities: ["chris-hemsworth", "lebron-james", "elon-musk"]
    },
    "billie-eilish": {
        id: "billie-eilish",
        name: "Billie Eilish",
        title: "Alternative Artist",
        category: "Music",
        categoryIcon: "isax-music",
        image: "assets/img/tours/tours-10.jpg",
        price: 64.99,
        originalPrice: 119.99,
        discount: 20,
        followers: "120M+",
        fanCards: "75K+",
        rating: 4.8,
        reviewCount: 3100,
        memberSince: "2024",
        isVerified: true,
        isPopular: false,
        badges: ["Verified Celebrity", "Gen Z Icon", "75K+ Fans"],
        socialLinks: {
            twitter: "#",
            instagram: "#",
            linkedin: "#",
            youtube: "#"
        },
        about: [
            "Billie Eilish Pirate Baird O'Connell is an American singer-songwriter who gained fame with her debut single 'Ocean Eyes' at age 13. Her unique musical style and aesthetic have made her a defining artist of her generation.",
            "Working closely with her brother Finneas, Billie has won multiple Grammy Awards including Record of the Year and Album of the Year. She is also known for her environmental activism and mental health advocacy."
        ],
        achievements: [
            "9x Grammy Award Winner",
            "Youngest artist to win all 4 major Grammys",
            "Two James Bond theme songs",
            "Oscar Winner for 'No Time to Die'",
            "Vogue cover - Youngest solo cover",
            "Environmental activist"
        ],
        gallery: [
            "assets/img/tours/tours-10.jpg",
            "assets/img/tours/tours-01.jpg",
            "assets/img/tours/tours-02.jpg",
            "assets/img/tours/tours-03.jpg",
            "assets/img/tours/tours-04.jpg",
            "assets/img/tours/tours-05.jpg"
        ],
        reviews: [
            {
                name: "Emily Rose",
                avatar: "assets/img/users/user-01.jpg",
                rating: 5,
                comment: "The exclusive acoustic sessions are everything. Love this fan card!"
            },
            {
                name: "Noah Green",
                avatar: "assets/img/users/user-02.jpg",
                rating: 5,
                comment: "Got early access to the Happier Than Ever tour. Best day ever!"
            },
            {
                name: "Avery Smith",
                avatar: "assets/img/users/user-03.jpg",
                rating: 4.5,
                comment: "Behind-the-scenes with Finneas in the studio is incredible content!"
            }
        ],
        similarCelebrities: ["ariana-grande", "taylor-swift", "travis-scott"]
    },
    "cristiano-ronaldo": {
        id: "cristiano-ronaldo",
        name: "Cristiano Ronaldo",
        title: "Football Legend",
        category: "Football",
        categoryIcon: "isax-cup",
        image: "assets/img/tours/tours-11.jpg",
        price: 69.99,
        originalPrice: 129.99,
        discount: 20,
        followers: "630M+",
        fanCards: "200K+",
        rating: 4.9,
        reviewCount: 8500,
        memberSince: "2023",
        isVerified: true,
        isPopular: false,
        badges: ["Verified Celebrity", "GOAT", "200K+ Fans"],
        socialLinks: {
            twitter: "#",
            instagram: "#",
            linkedin: "#",
            youtube: "#"
        },
        about: [
            "Cristiano Ronaldo dos Santos Aveiro is a Portuguese professional footballer widely regarded as one of the greatest players of all time. He has won five Ballon d'Or awards and is the all-time top scorer in men's international football.",
            "Playing for Manchester United, Real Madrid, Juventus, and now Al Nassr, Ronaldo has won numerous league titles and Champions League trophies. His dedication, work ethic, and longevity are legendary in the sport."
        ],
        achievements: [
            "5x Ballon d'Or Winner",
            "5x UEFA Champions League Winner",
            "Most followed person on Instagram",
            "All-time top international goalscorer",
            "Euro 2016 Winner with Portugal",
            "4x Golden Boot Winner"
        ],
        gallery: [
            "assets/img/tours/tours-11.jpg",
            "assets/img/tours/tours-01.jpg",
            "assets/img/tours/tours-02.jpg",
            "assets/img/tours/tours-03.jpg",
            "assets/img/tours/tours-04.jpg",
            "assets/img/tours/tours-05.jpg"
        ],
        reviews: [
            {
                name: "SIUUUU Fan",
                avatar: "assets/img/users/user-01.jpg",
                rating: 5,
                comment: "Got exclusive training videos and match-day content. CR7 forever!"
            },
            {
                name: "Football Lover",
                avatar: "assets/img/users/user-02.jpg",
                rating: 5,
                comment: "The CR7 merchandise discounts are amazing. Great fan community!"
            },
            {
                name: "Portuguese Pride",
                avatar: "assets/img/users/user-03.jpg",
                rating: 5,
                comment: "Behind-the-scenes content from his training routine is incredible!"
            }
        ],
        similarCelebrities: ["lebron-james", "dwayne-johnson", "drake"]
    }
};

// Helper function to get celebrity by ID
function getCelebrity(id) {
    return celebrityData[id] || null;
}

// Helper function to get all celebrities
function getAllCelebrities() {
    return Object.values(celebrityData);
}

// Helper function to get similar celebrities
function getSimilarCelebrities(id) {
    const celebrity = getCelebrity(id);
    if (!celebrity) return [];
    return celebrity.similarCelebrities.map(simId => getCelebrity(simId)).filter(c => c !== null);
}

// Helper function to generate star rating HTML
function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}
