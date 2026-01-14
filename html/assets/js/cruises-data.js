// Cruises Data organized by region/departure for vacation customization
const cruisesData = {
    cruises: [
        // Caribbean
        {
            id: "super-aquamarine-caribbean",
            name: "Super Aquamarine",
            departure: "Ciutat Vella, Barcelona",
            country: "Spain",
            region: "Mediterranean",
            destination: "Caribbean Islands",
            image: "assets/img/cruise/cruise-05.jpg",
            images: ["assets/img/cruise/cruise-05.jpg", "assets/img/cruise/cruise-02.jpg", "assets/img/cruise/cruise-04.jpg"],
            price: 500,
            priceUnit: "day",
            rating: 4.9,
            reviews: 400,
            badge: "Trending",
            featured: true,
            specs: {
                year: 2021,
                guests: 4,
                width: "88.47 m",
                speed: "19 Knots",
                cabins: 2
            },
            amenities: ["wifi", "dining", "pool", "spa", "entertainment"],
            captain: {
                name: "Beth Williams",
                avatar: "assets/img/users/user-08.jpg"
            }
        },
        {
            id: "ocean-breeze-caribbean",
            name: "Ocean Breeze Voyager",
            departure: "Miami, Florida",
            country: "USA",
            region: "Caribbean",
            destination: "Bahamas & Jamaica",
            image: "assets/img/cruise/cruise-01.jpg",
            images: ["assets/img/cruise/cruise-01.jpg", "assets/img/cruise/cruise-02.jpg"],
            price: 650,
            priceUnit: "day",
            rating: 4.8,
            reviews: 356,
            badge: "Popular",
            featured: true,
            specs: {
                year: 2022,
                guests: 6,
                width: "105.2 m",
                speed: "22 Knots",
                cabins: 3
            },
            amenities: ["wifi", "dining", "pool", "casino", "theater"],
            captain: {
                name: "Captain Rodriguez",
                avatar: "assets/img/users/user-09.jpg"
            }
        },
        // Mediterranean
        {
            id: "mediterranean-dreams",
            name: "Mediterranean Dreams",
            departure: "Rome, Italy",
            country: "Italy",
            region: "Mediterranean",
            destination: "Greek Islands & Turkey",
            image: "assets/img/cruise/cruise-03.jpg",
            images: ["assets/img/cruise/cruise-03.jpg", "assets/img/cruise/cruise-04.jpg"],
            price: 780,
            priceUnit: "day",
            rating: 4.9,
            reviews: 289,
            badge: "Luxury",
            featured: true,
            specs: {
                year: 2023,
                guests: 8,
                width: "120.5 m",
                speed: "24 Knots",
                cabins: 4
            },
            amenities: ["wifi", "fine-dining", "pool", "spa", "shore-excursions"],
            captain: {
                name: "Captain Marco",
                avatar: "assets/img/users/user-10.jpg"
            }
        },
        {
            id: "aegean-explorer",
            name: "Aegean Explorer",
            departure: "Athens, Greece",
            country: "Greece",
            region: "Mediterranean",
            destination: "Santorini, Mykonos, Crete",
            image: "assets/img/cruise/cruise-04.jpg",
            images: ["assets/img/cruise/cruise-04.jpg", "assets/img/cruise/cruise-05.jpg"],
            price: 550,
            priceUnit: "day",
            rating: 4.7,
            reviews: 234,
            badge: "Island Hopping",
            featured: true,
            specs: {
                year: 2020,
                guests: 4,
                width: "75.3 m",
                speed: "18 Knots",
                cabins: 2
            },
            amenities: ["wifi", "dining", "deck", "snorkeling"],
            captain: {
                name: "Captain Stavros",
                avatar: "assets/img/users/user-01.jpg"
            }
        },
        // Northern Europe
        {
            id: "nordic-fjords",
            name: "Nordic Fjords Expedition",
            departure: "Oslo, Norway",
            country: "Norway",
            region: "Northern Europe",
            destination: "Norwegian Fjords",
            image: "assets/img/cruise/cruise-02.jpg",
            images: ["assets/img/cruise/cruise-02.jpg", "assets/img/cruise/cruise-06.jpg"],
            price: 890,
            priceUnit: "day",
            rating: 4.9,
            reviews: 178,
            badge: "Adventure",
            featured: true,
            specs: {
                year: 2022,
                guests: 6,
                width: "95.8 m",
                speed: "16 Knots",
                cabins: 3
            },
            amenities: ["wifi", "dining", "observation-deck", "expedition-gear"],
            captain: {
                name: "Captain Eriksen",
                avatar: "assets/img/users/user-02.jpg"
            }
        },
        // UK Waters
        {
            id: "british-isles-cruise",
            name: "British Isles Explorer",
            departure: "Southampton, UK",
            country: "United Kingdom",
            region: "Northern Europe",
            destination: "Scotland, Ireland, Wales",
            image: "assets/img/cruise/cruise-06.jpg",
            images: ["assets/img/cruise/cruise-06.jpg", "assets/img/cruise/cruise-07.jpg"],
            price: 620,
            priceUnit: "day",
            rating: 4.6,
            reviews: 267,
            badge: "Historic",
            featured: false,
            specs: {
                year: 2019,
                guests: 8,
                width: "110.2 m",
                speed: "20 Knots",
                cabins: 4
            },
            amenities: ["wifi", "dining", "pub", "theater", "shore-excursions"],
            captain: {
                name: "Captain Smith",
                avatar: "assets/img/users/user-03.jpg"
            }
        },
        // Asia Pacific
        {
            id: "bali-komodo-cruise",
            name: "Bali to Komodo Adventure",
            departure: "Benoa, Bali",
            country: "Indonesia",
            region: "Asia Pacific",
            destination: "Komodo & Flores",
            image: "assets/img/cruise/cruise-07.jpg",
            images: ["assets/img/cruise/cruise-07.jpg", "assets/img/cruise/cruise-08.jpg"],
            price: 450,
            priceUnit: "day",
            rating: 4.8,
            reviews: 312,
            badge: "Wildlife",
            featured: true,
            specs: {
                year: 2021,
                guests: 4,
                width: "42.5 m",
                speed: "12 Knots",
                cabins: 2
            },
            amenities: ["wifi", "diving", "deck", "wildlife-tours"],
            captain: {
                name: "Captain Wayan",
                avatar: "assets/img/users/user-04.jpg"
            }
        },
        {
            id: "maldives-island-hop",
            name: "Maldives Island Hopper",
            departure: "Malé, Maldives",
            country: "Maldives",
            region: "Indian Ocean",
            destination: "Private Atolls",
            image: "assets/img/cruise/cruise-08.jpg",
            images: ["assets/img/cruise/cruise-08.jpg", "assets/img/cruise/cruise-09.jpg"],
            price: 1200,
            priceUnit: "day",
            rating: 5.0,
            reviews: 145,
            badge: "Ultra Luxury",
            featured: true,
            specs: {
                year: 2023,
                guests: 2,
                width: "35.0 m",
                speed: "14 Knots",
                cabins: 1
            },
            amenities: ["wifi", "private-dining", "diving", "spa", "butler"],
            captain: {
                name: "Captain Ahmed",
                avatar: "assets/img/users/user-05.jpg"
            }
        },
        // Middle East
        {
            id: "arabian-gulf-cruise",
            name: "Arabian Gulf Luxury",
            departure: "Dubai, UAE",
            country: "UAE",
            region: "Middle East",
            destination: "Abu Dhabi, Muscat, Doha",
            image: "assets/img/cruise/cruise-09.jpg",
            images: ["assets/img/cruise/cruise-09.jpg", "assets/img/cruise/cruise-10.jpg"],
            price: 980,
            priceUnit: "day",
            rating: 4.9,
            reviews: 198,
            badge: "Premium",
            featured: true,
            specs: {
                year: 2022,
                guests: 6,
                width: "130.5 m",
                speed: "23 Knots",
                cabins: 3
            },
            amenities: ["wifi", "fine-dining", "pool", "spa", "shopping"],
            captain: {
                name: "Captain Al-Rashid",
                avatar: "assets/img/users/user-06.jpg"
            }
        },
        // Alaska
        {
            id: "alaska-glacier",
            name: "Alaska Glacier Explorer",
            departure: "Seattle, USA",
            country: "USA",
            region: "North America",
            destination: "Alaska & Glacier Bay",
            image: "assets/img/cruise/cruise-10.jpg",
            images: ["assets/img/cruise/cruise-10.jpg", "assets/img/cruise/cruise-11.jpg"],
            price: 750,
            priceUnit: "day",
            rating: 4.8,
            reviews: 287,
            badge: "Nature",
            featured: true,
            specs: {
                year: 2021,
                guests: 8,
                width: "115.0 m",
                speed: "18 Knots",
                cabins: 4
            },
            amenities: ["wifi", "dining", "observation-deck", "naturalist-guides"],
            captain: {
                name: "Captain Johnson",
                avatar: "assets/img/users/user-07.jpg"
            }
        },
        // Thailand
        {
            id: "thai-islands-cruise",
            name: "Thai Islands Discovery",
            departure: "Phuket, Thailand",
            country: "Thailand",
            region: "Asia Pacific",
            destination: "Phi Phi, Krabi, Koh Samui",
            image: "assets/img/cruise/cruise-11.jpg",
            images: ["assets/img/cruise/cruise-11.jpg", "assets/img/cruise/cruise-12.jpg"],
            price: 380,
            priceUnit: "day",
            rating: 4.7,
            reviews: 423,
            badge: "Beach Lover",
            featured: false,
            specs: {
                year: 2020,
                guests: 6,
                width: "55.0 m",
                speed: "15 Knots",
                cabins: 3
            },
            amenities: ["wifi", "dining", "snorkeling", "kayaking"],
            captain: {
                name: "Captain Somchai",
                avatar: "assets/img/users/user-08.jpg"
            }
        },
        // France
        {
            id: "french-riviera-yacht",
            name: "French Riviera Yacht",
            departure: "Nice, France",
            country: "France",
            region: "Mediterranean",
            destination: "Monaco, Cannes, St. Tropez",
            image: "assets/img/cruise/cruise-12.jpg",
            images: ["assets/img/cruise/cruise-12.jpg", "assets/img/cruise/cruise-01.jpg"],
            price: 1500,
            priceUnit: "day",
            rating: 5.0,
            reviews: 89,
            badge: "Exclusive",
            featured: true,
            specs: {
                year: 2023,
                guests: 4,
                width: "48.0 m",
                speed: "20 Knots",
                cabins: 2
            },
            amenities: ["wifi", "chef", "jacuzzi", "jet-ski", "tender"],
            captain: {
                name: "Captain Dubois",
                avatar: "assets/img/users/user-09.jpg"
            }
        }
    ],

    // Helper function to get cruises by country
    getByCountry: function(country) {
        return this.cruises.filter(c => c.country.toLowerCase() === country.toLowerCase());
    },

    // Helper function to get cruises by region
    getByRegion: function(region) {
        return this.cruises.filter(c => c.region.toLowerCase() === region.toLowerCase());
    },

    // Helper function to get featured cruises
    getFeatured: function() {
        return this.cruises.filter(c => c.featured);
    },

    // Helper function to search cruises
    search: function(query) {
        const q = query.toLowerCase();
        return this.cruises.filter(c => 
            c.name.toLowerCase().includes(q) || 
            c.departure.toLowerCase().includes(q) ||
            c.destination.toLowerCase().includes(q) ||
            c.country.toLowerCase().includes(q)
        );
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cruisesData;
}
