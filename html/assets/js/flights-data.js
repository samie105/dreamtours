// Flights Data organized by routes for vacation customization
const flightsData = {
    flights: [
        // European Routes
        {
            id: "ryanair-slovakia-london",
            name: "Airbus A320",
            airline: "Ryanair",
            airlineLogo: "assets/img/icons/ryanair.svg",
            from: "Slovakia",
            fromCode: "BTS",
            to: "London",
            toCode: "LHR",
            country: "United Kingdom",
            region: "Europe",
            image: "assets/img/flight/flight-09.jpg",
            images: ["assets/img/flight/flight-09.jpg", "assets/img/flight/flight-05.jpg", "assets/img/flight/flight-07.jpg"],
            price: 1500,
            currency: "GBP",
            rating: 5.0,
            seatsLeft: 20,
            badge: "Cheapest",
            featured: true,
            dates: {
                departure: "Dec 12, 2024",
                return: "Dec 28, 2024"
            },
            duration: "2h 30m",
            stops: 0,
            class: "Economy",
            baggage: "1 carry-on"
        },
        {
            id: "indigo-london-london",
            name: "SkyBound 102",
            airline: "Indigo",
            airlineLogo: "assets/img/icons/airindia.svg",
            from: "London",
            fromCode: "LHR",
            to: "London",
            toCode: "STN",
            country: "United Kingdom",
            region: "Europe",
            image: "assets/img/flight/flight-08.jpg",
            images: ["assets/img/flight/flight-08.jpg"],
            price: 1350,
            currency: "GBP",
            rating: 4.3,
            seatsLeft: 18,
            badge: "Business",
            featured: false,
            dates: {
                departure: "Dec 10, 2024",
                return: "Jan 2, 2025"
            },
            duration: "1h 15m",
            stops: 1,
            stopLocation: "Dubai",
            class: "Business",
            baggage: "2 bags"
        },
        {
            id: "indigo-paris-capetown",
            name: "Nimbus 345",
            airline: "Indigo",
            airlineLogo: "assets/img/icons/airindia.svg",
            from: "Paris",
            fromCode: "CDG",
            to: "Cape Town",
            toCode: "CPT",
            country: "France",
            region: "Europe",
            image: "assets/img/flight/flight-06.jpg",
            images: ["assets/img/flight/flight-06.jpg"],
            price: 1000,
            currency: "GBP",
            rating: 4.8,
            seatsLeft: 27,
            badge: "Popular",
            featured: true,
            dates: {
                departure: "Aug 26, 2024",
                return: "Aug 27, 2024"
            },
            duration: "11h 45m",
            stops: 1,
            stopLocation: "Dubai",
            class: "Economy",
            baggage: "1 checked bag"
        },
        {
            id: "emirates-dubai-maldives",
            name: "Boeing 777-300ER",
            airline: "Emirates",
            airlineLogo: "assets/img/icons/emirates.svg",
            from: "Dubai",
            fromCode: "DXB",
            to: "Malé",
            toCode: "MLE",
            country: "Maldives",
            region: "Asia",
            image: "assets/img/flight/flight-01.jpg",
            images: ["assets/img/flight/flight-01.jpg", "assets/img/flight/flight-02.jpg"],
            price: 850,
            currency: "USD",
            rating: 4.9,
            seatsLeft: 12,
            badge: "Luxury",
            featured: true,
            dates: {
                departure: "Jan 15, 2025",
                return: "Jan 22, 2025"
            },
            duration: "4h 20m",
            stops: 0,
            class: "First Class",
            baggage: "2 bags + 1 carry-on"
        },
        {
            id: "singapore-bali",
            name: "Airbus A350",
            airline: "Singapore Airlines",
            airlineLogo: "assets/img/icons/singapore.svg",
            from: "Singapore",
            fromCode: "SIN",
            to: "Bali",
            toCode: "DPS",
            country: "Indonesia",
            region: "Asia",
            image: "assets/img/flight/flight-02.jpg",
            images: ["assets/img/flight/flight-02.jpg", "assets/img/flight/flight-03.jpg"],
            price: 420,
            currency: "USD",
            rating: 4.8,
            seatsLeft: 35,
            badge: "Best Value",
            featured: true,
            dates: {
                departure: "Feb 1, 2025",
                return: "Feb 8, 2025"
            },
            duration: "2h 35m",
            stops: 0,
            class: "Premium Economy",
            baggage: "1 checked bag"
        },
        {
            id: "aegean-athens-santorini",
            name: "ATR 72-600",
            airline: "Aegean Airlines",
            airlineLogo: "assets/img/icons/aegean.svg",
            from: "Athens",
            fromCode: "ATH",
            to: "Santorini",
            toCode: "JTR",
            country: "Greece",
            region: "Europe",
            image: "assets/img/flight/flight-03.jpg",
            images: ["assets/img/flight/flight-03.jpg"],
            price: 180,
            currency: "EUR",
            rating: 4.6,
            seatsLeft: 8,
            badge: "Quick Flight",
            featured: false,
            dates: {
                departure: "Jun 15, 2025",
                return: "Jun 22, 2025"
            },
            duration: "0h 45m",
            stops: 0,
            class: "Economy",
            baggage: "1 carry-on"
        },
        {
            id: "ba-london-barcelona",
            name: "Airbus A320neo",
            airline: "British Airways",
            airlineLogo: "assets/img/icons/ba.svg",
            from: "London",
            fromCode: "LHR",
            to: "Barcelona",
            toCode: "BCN",
            country: "Spain",
            region: "Europe",
            image: "assets/img/flight/flight-04.jpg",
            images: ["assets/img/flight/flight-04.jpg", "assets/img/flight/flight-05.jpg"],
            price: 250,
            currency: "GBP",
            rating: 4.7,
            seatsLeft: 45,
            badge: "Popular",
            featured: true,
            dates: {
                departure: "Mar 10, 2025",
                return: "Mar 17, 2025"
            },
            duration: "2h 10m",
            stops: 0,
            class: "Economy Plus",
            baggage: "1 checked bag"
        },
        {
            id: "airfrance-paris-rome",
            name: "Airbus A319",
            airline: "Air France",
            airlineLogo: "assets/img/icons/airfrance.svg",
            from: "Paris",
            fromCode: "CDG",
            to: "Rome",
            toCode: "FCO",
            country: "Italy",
            region: "Europe",
            image: "assets/img/flight/flight-05.jpg",
            images: ["assets/img/flight/flight-05.jpg"],
            price: 195,
            currency: "EUR",
            rating: 4.5,
            seatsLeft: 32,
            badge: "Frequent",
            featured: false,
            dates: {
                departure: "Apr 5, 2025",
                return: "Apr 12, 2025"
            },
            duration: "1h 55m",
            stops: 0,
            class: "Economy",
            baggage: "1 carry-on"
        },
        {
            id: "emirates-ny-dubai",
            name: "Airbus A380",
            airline: "Emirates",
            airlineLogo: "assets/img/icons/emirates.svg",
            from: "New York",
            fromCode: "JFK",
            to: "Dubai",
            toCode: "DXB",
            country: "UAE",
            region: "Middle East",
            image: "assets/img/flight/flight-07.jpg",
            images: ["assets/img/flight/flight-07.jpg", "assets/img/flight/flight-08.jpg"],
            price: 2200,
            currency: "USD",
            rating: 4.9,
            seatsLeft: 15,
            badge: "Premium",
            featured: true,
            dates: {
                departure: "May 1, 2025",
                return: "May 10, 2025"
            },
            duration: "12h 30m",
            stops: 0,
            class: "Business",
            baggage: "2 bags + 1 carry-on"
        },
        {
            id: "thai-bangkok-phuket",
            name: "Boeing 737-800",
            airline: "Thai Airways",
            airlineLogo: "assets/img/icons/thai.svg",
            from: "Bangkok",
            fromCode: "BKK",
            to: "Phuket",
            toCode: "HKT",
            country: "Thailand",
            region: "Asia",
            image: "assets/img/flight/flight-10.jpg",
            images: ["assets/img/flight/flight-10.jpg"],
            price: 85,
            currency: "USD",
            rating: 4.4,
            seatsLeft: 52,
            badge: "Budget",
            featured: false,
            dates: {
                departure: "Jul 20, 2025",
                return: "Jul 27, 2025"
            },
            duration: "1h 20m",
            stops: 0,
            class: "Economy",
            baggage: "1 checked bag"
        },
        {
            id: "delta-ny-london",
            name: "Boeing 767-400ER",
            airline: "Delta",
            airlineLogo: "assets/img/icons/delta.svg",
            from: "New York",
            fromCode: "JFK",
            to: "London",
            toCode: "LHR",
            country: "United Kingdom",
            region: "Europe",
            image: "assets/img/flight/flight-11.jpg",
            images: ["assets/img/flight/flight-11.jpg", "assets/img/flight/flight-12.jpg"],
            price: 1100,
            currency: "USD",
            rating: 4.6,
            seatsLeft: 28,
            badge: "Transatlantic",
            featured: true,
            dates: {
                departure: "Sep 1, 2025",
                return: "Sep 15, 2025"
            },
            duration: "7h 15m",
            stops: 0,
            class: "Premium Economy",
            baggage: "2 bags"
        },
        {
            id: "garuda-jakarta-bali",
            name: "Boeing 737 MAX 8",
            airline: "Garuda Indonesia",
            airlineLogo: "assets/img/icons/garuda.svg",
            from: "Jakarta",
            fromCode: "CGK",
            to: "Bali",
            toCode: "DPS",
            country: "Indonesia",
            region: "Asia",
            image: "assets/img/flight/flight-12.jpg",
            images: ["assets/img/flight/flight-12.jpg"],
            price: 95,
            currency: "USD",
            rating: 4.5,
            seatsLeft: 40,
            badge: "Domestic",
            featured: false,
            dates: {
                departure: "Oct 10, 2025",
                return: "Oct 17, 2025"
            },
            duration: "1h 50m",
            stops: 0,
            class: "Economy",
            baggage: "1 checked bag"
        }
    ],

    // Helper function to get flights by destination country
    getByDestination: function(country) {
        return this.flights.filter(f => f.country.toLowerCase() === country.toLowerCase());
    },

    // Helper function to get flights by origin
    getByOrigin: function(city) {
        return this.flights.filter(f => f.from.toLowerCase() === city.toLowerCase());
    },

    // Helper function to get flights by region
    getByRegion: function(region) {
        return this.flights.filter(f => f.region.toLowerCase() === region.toLowerCase());
    },

    // Helper function to get featured flights
    getFeatured: function() {
        return this.flights.filter(f => f.featured);
    },

    // Helper function to search flights
    search: function(query) {
        const q = query.toLowerCase();
        return this.flights.filter(f => 
            f.from.toLowerCase().includes(q) || 
            f.to.toLowerCase().includes(q) ||
            f.airline.toLowerCase().includes(q) ||
            f.country.toLowerCase().includes(q)
        );
    },

    // Helper function to get flights by route
    getByRoute: function(from, to) {
        return this.flights.filter(f => 
            f.from.toLowerCase() === from.toLowerCase() &&
            f.to.toLowerCase() === to.toLowerCase()
        );
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = flightsData;
}
