// Hotels Data organized by region/country for vacation customization
const hotelsData = {
    hotels: [
        // Spain - Barcelona
        {
            id: "plaza-athenee-barcelona",
            name: "Hotel Plaza Athenee",
            location: "Ciutat Vella, Barcelona",
            country: "Spain",
            region: "Europe",
            image: "assets/img/hotels/hotel-06.jpg",
            images: ["assets/img/hotels/hotel-06.jpg", "assets/img/hotels/hotel-07.jpg", "assets/img/hotels/hotel-08.jpg"],
            price: 500,
            priceUnit: "night",
            rating: 5.0,
            reviews: 400,
            badge: "Best Seller",
            featured: true,
            facilities: ["wifi", "pool", "restaurant", "gym", "spa"],
            roomType: "Deluxe Suite",
            checkIn: "14:00",
            checkOut: "12:00"
        },
        {
            id: "barcelona-beach-resort",
            name: "Barcelona Beach Resort",
            location: "Barceloneta, Barcelona",
            country: "Spain",
            region: "Europe",
            image: "assets/img/hotels/hotel-09.jpg",
            images: ["assets/img/hotels/hotel-09.jpg", "assets/img/hotels/hotel-10.jpg"],
            price: 380,
            priceUnit: "night",
            rating: 4.6,
            reviews: 289,
            badge: "Popular",
            featured: false,
            facilities: ["wifi", "pool", "restaurant", "beach-access"],
            roomType: "Ocean View Room",
            checkIn: "15:00",
            checkOut: "11:00"
        },
        // UK - London
        {
            id: "luxe-haven-london",
            name: "The Luxe Haven",
            location: "Oxford Street, London",
            country: "United Kingdom",
            region: "Europe",
            image: "assets/img/hotels/hotel-07.jpg",
            images: ["assets/img/hotels/hotel-07.jpg", "assets/img/hotels/hotel-08.jpg", "assets/img/hotels/hotel-09.jpg"],
            price: 600,
            priceUnit: "night",
            rating: 4.7,
            reviews: 300,
            badge: "Trending",
            featured: true,
            facilities: ["wifi", "restaurant", "gym", "spa", "bar"],
            roomType: "Executive Suite",
            checkIn: "14:00",
            checkOut: "12:00"
        },
        {
            id: "royal-gardens-london",
            name: "Royal Gardens Hotel",
            location: "Hyde Park, London",
            country: "United Kingdom",
            region: "Europe",
            image: "assets/img/hotels/hotel-11.jpg",
            images: ["assets/img/hotels/hotel-11.jpg", "assets/img/hotels/hotel-12.jpg"],
            price: 720,
            priceUnit: "night",
            rating: 4.9,
            reviews: 512,
            badge: "Luxury",
            featured: true,
            facilities: ["wifi", "pool", "restaurant", "gym", "spa", "parking"],
            roomType: "Royal Suite",
            checkIn: "15:00",
            checkOut: "12:00"
        },
        // UK - Edinburgh
        {
            id: "urban-retreat-edinburgh",
            name: "The Urban Retreat",
            location: "Princes Street, Edinburgh",
            country: "United Kingdom",
            region: "Europe",
            image: "assets/img/hotels/hotel-08.jpg",
            images: ["assets/img/hotels/hotel-08.jpg", "assets/img/hotels/hotel-09.jpg", "assets/img/hotels/hotel-10.jpg"],
            price: 500,
            priceUnit: "night",
            rating: 4.5,
            reviews: 320,
            badge: "Popular",
            featured: false,
            facilities: ["wifi", "restaurant", "gym", "bar"],
            roomType: "City View Room",
            checkIn: "14:00",
            checkOut: "11:00"
        },
        // UK - Manchester
        {
            id: "grand-horizon-manchester",
            name: "The Grand Horizon",
            location: "Piccadilly, Manchester",
            country: "United Kingdom",
            region: "Europe",
            image: "assets/img/hotels/hotel-09.jpg",
            images: ["assets/img/hotels/hotel-09.jpg", "assets/img/hotels/hotel-10.jpg", "assets/img/hotels/hotel-11.jpg"],
            price: 400,
            priceUnit: "night",
            rating: 4.9,
            reviews: 400,
            badge: "Best Seller",
            featured: true,
            facilities: ["wifi", "pool", "restaurant", "gym"],
            roomType: "Premium Room",
            checkIn: "14:00",
            checkOut: "12:00"
        },
        // Maldives
        {
            id: "overwater-paradise-maldives",
            name: "Overwater Paradise Resort",
            location: "North Malé Atoll, Maldives",
            country: "Maldives",
            region: "Asia",
            image: "assets/img/hotels/hotel-01.jpg",
            images: ["assets/img/hotels/hotel-01.jpg", "assets/img/hotels/hotel-02.jpg"],
            price: 1200,
            priceUnit: "night",
            rating: 4.9,
            reviews: 456,
            badge: "Luxury",
            featured: true,
            facilities: ["wifi", "pool", "restaurant", "spa", "water-sports", "private-beach"],
            roomType: "Overwater Villa",
            checkIn: "14:00",
            checkOut: "12:00"
        },
        {
            id: "coral-reef-maldives",
            name: "Coral Reef Resort",
            location: "Baa Atoll, Maldives",
            country: "Maldives",
            region: "Asia",
            image: "assets/img/hotels/hotel-02.jpg",
            images: ["assets/img/hotels/hotel-02.jpg", "assets/img/hotels/hotel-03.jpg"],
            price: 950,
            priceUnit: "night",
            rating: 4.8,
            reviews: 312,
            badge: "Popular",
            featured: false,
            facilities: ["wifi", "pool", "restaurant", "spa", "diving"],
            roomType: "Beach Villa",
            checkIn: "15:00",
            checkOut: "11:00"
        },
        // Greece - Santorini
        {
            id: "caldera-view-santorini",
            name: "Caldera View Suites",
            location: "Oia, Santorini",
            country: "Greece",
            region: "Europe",
            image: "assets/img/hotels/hotel-03.jpg",
            images: ["assets/img/hotels/hotel-03.jpg", "assets/img/hotels/hotel-04.jpg"],
            price: 680,
            priceUnit: "night",
            rating: 4.9,
            reviews: 398,
            badge: "Romantic",
            featured: true,
            facilities: ["wifi", "pool", "restaurant", "bar", "sunset-view"],
            roomType: "Caldera Suite",
            checkIn: "14:00",
            checkOut: "12:00"
        },
        {
            id: "aegean-paradise-santorini",
            name: "Aegean Paradise Hotel",
            location: "Fira, Santorini",
            country: "Greece",
            region: "Europe",
            image: "assets/img/hotels/hotel-04.jpg",
            images: ["assets/img/hotels/hotel-04.jpg", "assets/img/hotels/hotel-05.jpg"],
            price: 520,
            priceUnit: "night",
            rating: 4.7,
            reviews: 267,
            badge: "Trending",
            featured: false,
            facilities: ["wifi", "pool", "restaurant", "spa"],
            roomType: "Sea View Room",
            checkIn: "14:00",
            checkOut: "11:00"
        },
        // Indonesia - Bali
        {
            id: "jungle-retreat-bali",
            name: "Jungle Retreat Ubud",
            location: "Ubud, Bali",
            country: "Indonesia",
            region: "Asia",
            image: "assets/img/hotels/hotel-05.jpg",
            images: ["assets/img/hotels/hotel-05.jpg", "assets/img/hotels/hotel-06.jpg"],
            price: 450,
            priceUnit: "night",
            rating: 4.8,
            reviews: 378,
            badge: "Wellness",
            featured: true,
            facilities: ["wifi", "pool", "restaurant", "spa", "yoga"],
            roomType: "Jungle Villa",
            checkIn: "14:00",
            checkOut: "12:00"
        },
        {
            id: "beach-club-bali",
            name: "Beach Club Resort",
            location: "Seminyak, Bali",
            country: "Indonesia",
            region: "Asia",
            image: "assets/img/hotels/hotel-10.jpg",
            images: ["assets/img/hotels/hotel-10.jpg", "assets/img/hotels/hotel-11.jpg"],
            price: 380,
            priceUnit: "night",
            rating: 4.6,
            reviews: 289,
            badge: "Popular",
            featured: false,
            facilities: ["wifi", "pool", "restaurant", "beach-access", "bar"],
            roomType: "Beach Suite",
            checkIn: "15:00",
            checkOut: "11:00"
        },
        // France - Paris
        {
            id: "champs-elysees-paris",
            name: "Hotel Champs-Élysées",
            location: "8th Arrondissement, Paris",
            country: "France",
            region: "Europe",
            image: "assets/img/hotels/hotel-12.jpg",
            images: ["assets/img/hotels/hotel-12.jpg", "assets/img/hotels/hotel-13.jpg"],
            price: 780,
            priceUnit: "night",
            rating: 4.9,
            reviews: 534,
            badge: "Luxury",
            featured: true,
            facilities: ["wifi", "restaurant", "spa", "bar", "concierge"],
            roomType: "Parisian Suite",
            checkIn: "15:00",
            checkOut: "12:00"
        },
        // Italy - Rome
        {
            id: "colosseum-view-rome",
            name: "Colosseum View Hotel",
            location: "Centro Storico, Rome",
            country: "Italy",
            region: "Europe",
            image: "assets/img/hotels/hotel-13.jpg",
            images: ["assets/img/hotels/hotel-13.jpg", "assets/img/hotels/hotel-14.jpg"],
            price: 620,
            priceUnit: "night",
            rating: 4.8,
            reviews: 445,
            badge: "Historic",
            featured: true,
            facilities: ["wifi", "restaurant", "spa", "rooftop-terrace"],
            roomType: "Historic Suite",
            checkIn: "14:00",
            checkOut: "11:00"
        },
        // UAE - Dubai
        {
            id: "palm-resort-dubai",
            name: "Palm Beach Resort",
            location: "Palm Jumeirah, Dubai",
            country: "UAE",
            region: "Middle East",
            image: "assets/img/hotels/hotel-14.jpg",
            images: ["assets/img/hotels/hotel-14.jpg", "assets/img/hotels/hotel-15.jpg"],
            price: 890,
            priceUnit: "night",
            rating: 4.9,
            reviews: 612,
            badge: "Luxury",
            featured: true,
            facilities: ["wifi", "pool", "restaurant", "spa", "beach-access", "waterpark"],
            roomType: "Palm Suite",
            checkIn: "15:00",
            checkOut: "12:00"
        },
        // Thailand - Bangkok
        {
            id: "riverside-bangkok",
            name: "Riverside Grand Hotel",
            location: "Chao Phraya, Bangkok",
            country: "Thailand",
            region: "Asia",
            image: "assets/img/hotels/hotel-15.jpg",
            images: ["assets/img/hotels/hotel-15.jpg", "assets/img/hotels/hotel-16.jpg"],
            price: 280,
            priceUnit: "night",
            rating: 4.6,
            reviews: 345,
            badge: "Value",
            featured: false,
            facilities: ["wifi", "pool", "restaurant", "spa", "river-view"],
            roomType: "River View Room",
            checkIn: "14:00",
            checkOut: "12:00"
        },
        // USA - New York
        {
            id: "times-square-ny",
            name: "Times Square Grand Hotel",
            location: "Midtown Manhattan, New York",
            country: "USA",
            region: "North America",
            image: "assets/img/hotels/hotel-16.jpg",
            images: ["assets/img/hotels/hotel-16.jpg", "assets/img/hotels/hotel-01.jpg"],
            price: 650,
            priceUnit: "night",
            rating: 4.7,
            reviews: 489,
            badge: "Central",
            featured: true,
            facilities: ["wifi", "restaurant", "gym", "bar", "concierge"],
            roomType: "City View Suite",
            checkIn: "15:00",
            checkOut: "11:00"
        }
    ],

    // Helper function to get hotels by country
    getByCountry: function(country) {
        return this.hotels.filter(h => h.country.toLowerCase() === country.toLowerCase());
    },

    // Helper function to get hotels by region
    getByRegion: function(region) {
        return this.hotels.filter(h => h.region.toLowerCase() === region.toLowerCase());
    },

    // Helper function to get featured hotels
    getFeatured: function() {
        return this.hotels.filter(h => h.featured);
    },

    // Helper function to search hotels
    search: function(query) {
        const q = query.toLowerCase();
        return this.hotels.filter(h => 
            h.name.toLowerCase().includes(q) || 
            h.location.toLowerCase().includes(q) ||
            h.country.toLowerCase().includes(q)
        );
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = hotelsData;
}
