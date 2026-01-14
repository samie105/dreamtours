// Cars Data organized by region/country for vacation customization
const carsData = {
    cars: [
        // Spain - Barcelona
        {
            id: "toyota-camry-barcelona",
            name: "Toyota Camry SE 400",
            type: "Sedan",
            location: "Ciutat Vella, Barcelona",
            country: "Spain",
            region: "Europe",
            image: "assets/img/cars/car-06.jpg",
            images: ["assets/img/cars/car-06.jpg", "assets/img/cars/car-07.jpg", "assets/img/cars/car-08.jpg"],
            price: 500,
            priceUnit: "day",
            rating: 5.0,
            reviews: 400,
            badge: "Trending",
            featured: true,
            specs: {
                fuel: "Hybrid",
                gear: "Manual",
                travelled: "14,000 KM",
                seats: 5,
                doors: 4,
                ac: true
            },
            owner: {
                name: "Michael Johnson",
                avatar: "assets/img/users/user-08.jpg"
            }
        },
        {
            id: "bmw-x5-barcelona",
            name: "BMW X5 Premium",
            type: "SUV",
            location: "El Born, Barcelona",
            country: "Spain",
            region: "Europe",
            image: "assets/img/cars/car-01.jpg",
            images: ["assets/img/cars/car-01.jpg", "assets/img/cars/car-02.jpg"],
            price: 750,
            priceUnit: "day",
            rating: 4.8,
            reviews: 289,
            badge: "Premium",
            featured: true,
            specs: {
                fuel: "Diesel",
                gear: "Auto",
                travelled: "22,000 KM",
                seats: 5,
                doors: 4,
                ac: true
            },
            owner: {
                name: "David Martinez",
                avatar: "assets/img/users/user-10.jpg"
            }
        },
        // UK - London
        {
            id: "ford-mustang-london",
            name: "Ford Mustang 4.0 AT",
            type: "Sedan",
            location: "Oxford Street, London",
            country: "United Kingdom",
            region: "Europe",
            image: "assets/img/cars/car-07.jpg",
            images: ["assets/img/cars/car-07.jpg", "assets/img/cars/car-08.jpg", "assets/img/cars/car-09.jpg"],
            price: 600,
            priceUnit: "day",
            rating: 4.7,
            reviews: 300,
            badge: "Trending",
            featured: true,
            specs: {
                fuel: "Diesel",
                gear: "Manual",
                travelled: "10,300 KM",
                seats: 4,
                doors: 2,
                ac: true
            },
            owner: {
                name: "Sarah Williams",
                avatar: "assets/img/users/user-09.jpg"
            }
        },
        {
            id: "range-rover-london",
            name: "Range Rover Velar",
            type: "SUV",
            location: "Mayfair, London",
            country: "United Kingdom",
            region: "Europe",
            image: "assets/img/cars/car-02.jpg",
            images: ["assets/img/cars/car-02.jpg", "assets/img/cars/car-03.jpg"],
            price: 850,
            priceUnit: "day",
            rating: 4.9,
            reviews: 378,
            badge: "Luxury",
            featured: true,
            specs: {
                fuel: "Petrol",
                gear: "Auto",
                travelled: "8,500 KM",
                seats: 5,
                doors: 4,
                ac: true
            },
            owner: {
                name: "James Thompson",
                avatar: "assets/img/users/user-05.jpg"
            }
        },
        // UK - Edinburgh
        {
            id: "ferrari-edinburgh",
            name: "Ferrari 458 MM Special",
            type: "Sports",
            location: "Princes Street, Edinburgh",
            country: "United Kingdom",
            region: "Europe",
            image: "assets/img/cars/car-08.jpg",
            images: ["assets/img/cars/car-08.jpg", "assets/img/cars/car-09.jpg", "assets/img/cars/car-10.jpg"],
            price: 300,
            priceUnit: "day",
            rating: 4.0,
            reviews: 320,
            badge: "Sports",
            featured: false,
            specs: {
                fuel: "Hybrid",
                gear: "Auto",
                travelled: "13,000 KM",
                seats: 2,
                doors: 2,
                ac: true
            },
            owner: {
                name: "Robert Brown",
                avatar: "assets/img/users/user-10.jpg"
            }
        },
        // Maldives
        {
            id: "golf-cart-maldives",
            name: "Electric Golf Cart",
            type: "Utility",
            location: "North Malé Atoll, Maldives",
            country: "Maldives",
            region: "Asia",
            image: "assets/img/cars/car-03.jpg",
            images: ["assets/img/cars/car-03.jpg"],
            price: 80,
            priceUnit: "day",
            rating: 4.5,
            reviews: 156,
            badge: "Island",
            featured: false,
            specs: {
                fuel: "Electric",
                gear: "Auto",
                travelled: "5,000 KM",
                seats: 4,
                doors: 0,
                ac: false
            },
            owner: {
                name: "Resort Fleet",
                avatar: "assets/img/users/user-01.jpg"
            }
        },
        // Greece - Santorini
        {
            id: "atv-santorini",
            name: "ATV Adventure Quad",
            type: "ATV",
            location: "Fira, Santorini",
            country: "Greece",
            region: "Europe",
            image: "assets/img/cars/car-04.jpg",
            images: ["assets/img/cars/car-04.jpg", "assets/img/cars/car-05.jpg"],
            price: 120,
            priceUnit: "day",
            rating: 4.7,
            reviews: 234,
            badge: "Adventure",
            featured: true,
            specs: {
                fuel: "Petrol",
                gear: "Manual",
                travelled: "8,000 KM",
                seats: 2,
                doors: 0,
                ac: false
            },
            owner: {
                name: "Nikos Papadopoulos",
                avatar: "assets/img/users/user-06.jpg"
            }
        },
        {
            id: "convertible-santorini",
            name: "Fiat 500 Convertible",
            type: "Convertible",
            location: "Oia, Santorini",
            country: "Greece",
            region: "Europe",
            image: "assets/img/cars/car-05.jpg",
            images: ["assets/img/cars/car-05.jpg", "assets/img/cars/car-06.jpg"],
            price: 180,
            priceUnit: "day",
            rating: 4.6,
            reviews: 198,
            badge: "Popular",
            featured: false,
            specs: {
                fuel: "Petrol",
                gear: "Auto",
                travelled: "12,000 KM",
                seats: 4,
                doors: 2,
                ac: true
            },
            owner: {
                name: "Maria Georgiou",
                avatar: "assets/img/users/user-07.jpg"
            }
        },
        // Indonesia - Bali
        {
            id: "scooter-bali",
            name: "Honda PCX Scooter",
            type: "Scooter",
            location: "Seminyak, Bali",
            country: "Indonesia",
            region: "Asia",
            image: "assets/img/cars/car-09.jpg",
            images: ["assets/img/cars/car-09.jpg"],
            price: 25,
            priceUnit: "day",
            rating: 4.8,
            reviews: 567,
            badge: "Best Value",
            featured: true,
            specs: {
                fuel: "Petrol",
                gear: "Auto",
                travelled: "15,000 KM",
                seats: 2,
                doors: 0,
                ac: false
            },
            owner: {
                name: "Ketut Rental",
                avatar: "assets/img/users/user-08.jpg"
            }
        },
        {
            id: "suv-bali",
            name: "Toyota Fortuner",
            type: "SUV",
            location: "Ubud, Bali",
            country: "Indonesia",
            region: "Asia",
            image: "assets/img/cars/car-10.jpg",
            images: ["assets/img/cars/car-10.jpg", "assets/img/cars/car-01.jpg"],
            price: 180,
            priceUnit: "day",
            rating: 4.7,
            reviews: 312,
            badge: "Family",
            featured: false,
            specs: {
                fuel: "Diesel",
                gear: "Auto",
                travelled: "35,000 KM",
                seats: 7,
                doors: 4,
                ac: true
            },
            owner: {
                name: "Bali Adventures",
                avatar: "assets/img/users/user-02.jpg"
            }
        },
        // France - Paris
        {
            id: "mercedes-paris",
            name: "Mercedes S-Class",
            type: "Luxury",
            location: "Champs-Élysées, Paris",
            country: "France",
            region: "Europe",
            image: "assets/img/cars/car-11.jpg",
            images: ["assets/img/cars/car-11.jpg", "assets/img/cars/car-12.jpg"],
            price: 950,
            priceUnit: "day",
            rating: 4.9,
            reviews: 245,
            badge: "Luxury",
            featured: true,
            specs: {
                fuel: "Petrol",
                gear: "Auto",
                travelled: "5,000 KM",
                seats: 5,
                doors: 4,
                ac: true
            },
            owner: {
                name: "Paris Premium Cars",
                avatar: "assets/img/users/user-03.jpg"
            }
        },
        // Italy - Rome
        {
            id: "vespa-rome",
            name: "Vespa Primavera 125",
            type: "Scooter",
            location: "Centro Storico, Rome",
            country: "Italy",
            region: "Europe",
            image: "assets/img/cars/car-12.jpg",
            images: ["assets/img/cars/car-12.jpg"],
            price: 65,
            priceUnit: "day",
            rating: 4.8,
            reviews: 456,
            badge: "Classic",
            featured: true,
            specs: {
                fuel: "Petrol",
                gear: "Auto",
                travelled: "8,000 KM",
                seats: 2,
                doors: 0,
                ac: false
            },
            owner: {
                name: "Roma Scooters",
                avatar: "assets/img/users/user-04.jpg"
            }
        },
        // UAE - Dubai
        {
            id: "lamborghini-dubai",
            name: "Lamborghini Huracán",
            type: "Sports",
            location: "Downtown Dubai",
            country: "UAE",
            region: "Middle East",
            image: "assets/img/cars/car-13.jpg",
            images: ["assets/img/cars/car-13.jpg", "assets/img/cars/car-14.jpg"],
            price: 1500,
            priceUnit: "day",
            rating: 5.0,
            reviews: 189,
            badge: "Supercar",
            featured: true,
            specs: {
                fuel: "Petrol",
                gear: "Auto",
                travelled: "3,000 KM",
                seats: 2,
                doors: 2,
                ac: true
            },
            owner: {
                name: "Dubai Exotics",
                avatar: "assets/img/users/user-05.jpg"
            }
        },
        // Thailand - Bangkok
        {
            id: "tuk-tuk-bangkok",
            name: "Traditional Tuk Tuk",
            type: "Utility",
            location: "Khao San Road, Bangkok",
            country: "Thailand",
            region: "Asia",
            image: "assets/img/cars/car-14.jpg",
            images: ["assets/img/cars/car-14.jpg"],
            price: 40,
            priceUnit: "day",
            rating: 4.5,
            reviews: 678,
            badge: "Local",
            featured: false,
            specs: {
                fuel: "LPG",
                gear: "Manual",
                travelled: "50,000 KM",
                seats: 3,
                doors: 0,
                ac: false
            },
            owner: {
                name: "Bangkok Tours",
                avatar: "assets/img/users/user-06.jpg"
            }
        },
        // USA - New York
        {
            id: "tesla-ny",
            name: "Tesla Model S",
            type: "Electric",
            location: "Manhattan, New York",
            country: "USA",
            region: "North America",
            image: "assets/img/cars/car-15.jpg",
            images: ["assets/img/cars/car-15.jpg", "assets/img/cars/car-16.jpg"],
            price: 400,
            priceUnit: "day",
            rating: 4.9,
            reviews: 356,
            badge: "Eco",
            featured: true,
            specs: {
                fuel: "Electric",
                gear: "Auto",
                travelled: "12,000 KM",
                seats: 5,
                doors: 4,
                ac: true
            },
            owner: {
                name: "NYC Green Cars",
                avatar: "assets/img/users/user-07.jpg"
            }
        }
    ],

    // Helper function to get cars by country
    getByCountry: function(country) {
        return this.cars.filter(c => c.country.toLowerCase() === country.toLowerCase());
    },

    // Helper function to get cars by region
    getByRegion: function(region) {
        return this.cars.filter(c => c.region.toLowerCase() === region.toLowerCase());
    },

    // Helper function to get featured cars
    getFeatured: function() {
        return this.cars.filter(c => c.featured);
    },

    // Helper function to get cars by type
    getByType: function(type) {
        return this.cars.filter(c => c.type.toLowerCase() === type.toLowerCase());
    },

    // Helper function to search cars
    search: function(query) {
        const q = query.toLowerCase();
        return this.cars.filter(c => 
            c.name.toLowerCase().includes(q) || 
            c.location.toLowerCase().includes(q) ||
            c.country.toLowerCase().includes(q) ||
            c.type.toLowerCase().includes(q)
        );
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = carsData;
}
