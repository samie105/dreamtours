// Vacation Packages Data - Hotels & Cruises Combined
const vacationData = {
    packages: [
        {
            id: "maldives-paradise",
            name: "Maldives Paradise Retreat",
            type: "resort",
            location: "Maldives",
            image: "assets/img/hotels/hotel-01.jpg",
            price: 2500,
            originalPrice: 3200,
            duration: "7 Days / 6 Nights",
            rating: 4.9,
            reviews: 245,
            guests: "2 Adults",
            features: ["Overwater Villa", "All Inclusive", "Spa Access", "Private Beach"],
            description: "Experience ultimate luxury in the crystal-clear waters of the Maldives with overwater villas and world-class dining.",
            highlights: ["Sunset Dolphin Cruise", "Private Dining on Beach", "Underwater Restaurant", "Spa Treatments"]
        },
        {
            id: "caribbean-cruise",
            name: "Caribbean Island Hopping",
            type: "cruise",
            location: "Caribbean Sea",
            image: "assets/img/cruise/cruise-01.jpg",
            price: 1800,
            originalPrice: 2400,
            duration: "10 Days / 9 Nights",
            rating: 4.8,
            reviews: 189,
            guests: "2 Adults",
            features: ["Luxury Cabin", "All Meals Included", "Entertainment", "Island Excursions"],
            description: "Sail through the stunning Caribbean islands on a luxury cruise with stops at exotic destinations.",
            highlights: ["Jamaica Beach Day", "Bahamas Snorkeling", "Cozumel Ruins Tour", "Onboard Shows"]
        },
        {
            id: "santorini-escape",
            name: "Santorini Romantic Escape",
            type: "resort",
            location: "Santorini, Greece",
            image: "assets/img/hotels/hotel-02.jpg",
            price: 1950,
            originalPrice: 2600,
            duration: "5 Days / 4 Nights",
            rating: 4.9,
            reviews: 312,
            guests: "2 Adults",
            features: ["Caldera View Suite", "Breakfast Included", "Wine Tasting", "Airport Transfer"],
            description: "Fall in love with the stunning sunsets and white-washed beauty of Santorini.",
            highlights: ["Sunset at Oia", "Volcano Tour", "Wine Tour", "Private Catamaran Cruise"]
        },
        {
            id: "alaska-cruise",
            name: "Alaska Glacier Adventure",
            type: "cruise",
            location: "Alaska, USA",
            image: "assets/img/cruise/cruise-02.jpg",
            price: 2200,
            originalPrice: 2800,
            duration: "8 Days / 7 Nights",
            rating: 4.7,
            reviews: 156,
            guests: "2 Adults",
            features: ["Balcony Cabin", "Glacier Viewing", "Wildlife Tours", "Gourmet Dining"],
            description: "Witness the majestic glaciers and wildlife of Alaska on this unforgettable cruise adventure.",
            highlights: ["Glacier Bay National Park", "Whale Watching", "Juneau Excursion", "Ketchikan Totem Poles"]
        },
        {
            id: "bali-wellness",
            name: "Bali Wellness Journey",
            type: "resort",
            location: "Bali, Indonesia",
            image: "assets/img/hotels/hotel-03.jpg",
            price: 1650,
            originalPrice: 2100,
            duration: "6 Days / 5 Nights",
            rating: 4.8,
            reviews: 278,
            guests: "2 Adults",
            features: ["Jungle Villa", "Daily Yoga", "Spa Treatments", "Organic Meals"],
            description: "Rejuvenate your mind, body, and soul in the spiritual heart of Bali.",
            highlights: ["Ubud Rice Terraces", "Temple Visits", "Balinese Cooking Class", "Waterfall Trek"]
        },
        {
            id: "mediterranean-cruise",
            name: "Mediterranean Dreams",
            type: "cruise",
            location: "Mediterranean Sea",
            image: "assets/img/cruise/cruise-03.jpg",
            price: 2800,
            originalPrice: 3500,
            duration: "12 Days / 11 Nights",
            rating: 4.9,
            reviews: 203,
            guests: "2 Adults",
            features: ["Premium Suite", "Shore Excursions", "Fine Dining", "Butler Service"],
            description: "Explore the rich history and culture of the Mediterranean from the comfort of a luxury cruise.",
            highlights: ["Rome Colosseum", "Barcelona La Sagrada", "Greek Islands", "French Riviera"]
        },
        {
            id: "dubai-luxury",
            name: "Dubai Ultra Luxury",
            type: "resort",
            location: "Dubai, UAE",
            image: "assets/img/hotels/hotel-04.jpg",
            price: 3200,
            originalPrice: 4000,
            duration: "5 Days / 4 Nights",
            rating: 4.9,
            reviews: 167,
            guests: "2 Adults",
            features: ["Burj View Suite", "Private Pool", "Desert Safari", "Helicopter Tour"],
            description: "Experience the pinnacle of luxury in the world's most extravagant city.",
            highlights: ["Burj Khalifa At The Top", "Desert Safari", "Dubai Mall", "Palm Jumeirah"]
        },
        {
            id: "hawaii-adventure",
            name: "Hawaii Island Paradise",
            type: "resort",
            location: "Hawaii, USA",
            image: "assets/img/hotels/hotel-05.jpg",
            price: 2100,
            originalPrice: 2700,
            duration: "7 Days / 6 Nights",
            rating: 4.8,
            reviews: 234,
            guests: "2 Adults",
            features: ["Ocean View Room", "Lei Greeting", "Luau Experience", "Island Tours"],
            description: "Discover the magic of Hawaii with pristine beaches and volcanic wonders.",
            highlights: ["Volcano National Park", "Snorkeling", "Luau Feast", "Na Pali Coast"]
        },
        {
            id: "norway-fjords",
            name: "Norwegian Fjords Expedition",
            type: "cruise",
            location: "Norway",
            image: "assets/img/cruise/cruise-04.jpg",
            price: 2400,
            originalPrice: 3100,
            duration: "9 Days / 8 Nights",
            rating: 4.8,
            reviews: 145,
            guests: "2 Adults",
            features: ["Panoramic Cabin", "Fjord Excursions", "Northern Lights", "Local Cuisine"],
            description: "Sail through the dramatic Norwegian fjords and witness nature at its most spectacular.",
            highlights: ["Geirangerfjord", "Bergen Old Town", "Trolltunga Views", "Northern Lights"]
        },
        {
            id: "seychelles-honeymoon",
            name: "Seychelles Honeymoon",
            type: "resort",
            location: "Seychelles",
            image: "assets/img/hotels/hotel-06.jpg",
            price: 3500,
            originalPrice: 4500,
            duration: "8 Days / 7 Nights",
            rating: 5.0,
            reviews: 98,
            guests: "2 Adults",
            features: ["Private Villa", "Butler Service", "Couples Spa", "Romantic Dinners"],
            description: "The ultimate honeymoon destination with pristine beaches and unparalleled privacy.",
            highlights: ["Private Island Tour", "Sunset Cruise", "Couples Massage", "Beach Picnic"]
        },
        {
            id: "japan-cultural",
            name: "Japan Cultural Discovery",
            type: "resort",
            location: "Japan",
            image: "assets/img/hotels/hotel-07.jpg",
            price: 2300,
            originalPrice: 2900,
            duration: "10 Days / 9 Nights",
            rating: 4.9,
            reviews: 187,
            guests: "2 Adults",
            features: ["Ryokan Stay", "Bullet Train Pass", "Tea Ceremony", "Temple Visits"],
            description: "Immerse yourself in the ancient traditions and modern wonders of Japan.",
            highlights: ["Tokyo Skytree", "Kyoto Temples", "Mt. Fuji Views", "Osaka Street Food"]
        },
        {
            id: "galapagos-expedition",
            name: "Galapagos Wildlife Expedition",
            type: "cruise",
            location: "Galapagos Islands",
            image: "assets/img/cruise/cruise-05.jpg",
            price: 4500,
            originalPrice: 5500,
            duration: "8 Days / 7 Nights",
            rating: 4.9,
            reviews: 89,
            guests: "2 Adults",
            features: ["Expedition Yacht", "Naturalist Guide", "Snorkeling Gear", "Island Landings"],
            description: "Walk alongside giant tortoises and swim with sea lions in this once-in-a-lifetime adventure.",
            highlights: ["Giant Tortoise Reserve", "Blue-Footed Boobies", "Sea Lion Snorkeling", "Volcanic Landscapes"]
        }
    ],

    // Helper functions
    getAllPackages: function() {
        return this.packages;
    },

    getPackageById: function(id) {
        return this.packages.find(pkg => pkg.id === id) || null;
    },

    getPackagesByType: function(type) {
        if (type === 'all') return this.packages;
        return this.packages.filter(pkg => pkg.type === type);
    },

    searchPackages: function(query) {
        const searchTerm = query.toLowerCase();
        return this.packages.filter(pkg => 
            pkg.name.toLowerCase().includes(searchTerm) ||
            pkg.location.toLowerCase().includes(searchTerm) ||
            pkg.description.toLowerCase().includes(searchTerm)
        );
    },

    filterByPrice: function(min, max) {
        return this.packages.filter(pkg => pkg.price >= min && pkg.price <= max);
    },

    sortPackages: function(packages, sortBy) {
        const sorted = [...packages];
        switch(sortBy) {
            case 'price-low':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-high':
                return sorted.sort((a, b) => b.price - a.price);
            case 'rating':
                return sorted.sort((a, b) => b.rating - a.rating);
            case 'duration':
                return sorted.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
            default:
                return sorted;
        }
    },

    generateStarRating: function(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star text-warning"></i>';
        }
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt text-warning"></i>';
        }
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star text-warning"></i>';
        }
        return stars;
    }
};
