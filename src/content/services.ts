export type ServiceCategory = {
  name: string;
  slug: string;
  image?: string;
  subcategories: { name: string; items: string[] }[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    "name": "Brake Service",
    "slug": "brake-service",
    "image": "/assets/services/brake-service.png",
    "subcategories": [
      {
        "name": "Caliper Service",
        "items": [
          "BREAK CALIPER PIN SERVICE  - 2 WHEEL( REGREASING)",
          "BREAK CALIPER PIN SERVICE - ALL WHEEL( REGREASING)"
        ]
      },
      {
        "name": "Brake Pad Service",
        "items": [
          "BREAK PAD SERVICE - 1 WHEEL ( CHANGING / CLEANING)",
          "BREAK PAD SERVICE - 2 WHEEL( CHANGING / CLEANING)",
          "BREAK PAD SERVICE - ALL WHEEL ( CHANGING / CLEANING)",
          "BREAK PAD SERVICE - ALL WHEEL (CLEANING)"
        ]
      },
      {
        "name": "Brake Washer",
        "items": [
          "BREAK WASHER SERVICE - 1 WHEEL ( REPLACING)",
          "BREAK WASHER SERVICE - 2 WHEEL( REPLACING)",
          "BREAK WASHER SERVICE - ALL WHEEL ( REPLACING)"
        ]
      },
      {
        "name": "Brake Pump",
        "items": [
          "BREAK PUMP SERVICE ( SERVICE / WASHER REPLACEMENT)",
          "BREAK PUMP SERVICE AND REPLACEMENT"
        ]
      }
    ]
  },
  {
    "name": "Transmission",
    "slug": "transmission",
    "image": "/assets/services/transmission.png",
    "subcategories": [
      {
        "name": "Gear Oil",
        "items": [
          "GEAR OIL REFILL / CHANGING"
        ]
      }
    ]
  },
  {
    "name": "Engine",
    "slug": "engine",
    "image": "/assets/services/engine.png",
    "subcategories": [
      {
        "name": "Engine Oil",
        "items": [
          "ENGINE OIL FLUSHING",
          "CAR / SUV / VAN ENGINE OIL CHANGE",
          "BIKE ENGINE OIL CHANGE",
          "ENGINE OIL FILTER CHANGE"
        ]
      },
      {
        "name": "Tune Up",
        "items": [
          "ENGINE TUNE UP"
        ]
      },
      {
        "name": "Engine Mount",
        "items": [
          "ENGINE MOUNT SERVICE AND REPLACEMENT"
        ]
      }
    ]
  },
  {
    "name": "Coolant",
    "slug": "coolant",
    "image": "/assets/services/coolant.png",
    "subcategories": [
      {
        "name": "Coolant",
        "items": [
          "COOLANT REFILLING",
          "COOLANT CHANGING"
        ]
      }
    ]
  },
  {
    "name": "Rack",
    "slug": "rack",
    "image": "/assets/services/rack.png",
    "subcategories": [
      {
        "name": "Rack",
        "items": [
          "RACK REPLACEMENT",
          "RACK END REPLACEMENT"
        ]
      }
    ]
  },
  {
    "name": "CV Joint",
    "slug": "cv-joint",
    "image": "/assets/services/cv-joint.png",
    "subcategories": [
      {
        "name": "CV Joint",
        "items": [
          "CV BOOT CHANGING",
          "CV JOINT REPLACEMENT"
        ]
      }
    ]
  },
  {
    "name": "Suspension",
    "slug": "suspension",
    "image": "/assets/services/suspension.png",
    "subcategories": [
      {
        "name": "Suspension",
        "items": [
          "SUSPENSION MOUNT REPLACEMENT",
          "SUSPENSION REPLACEMENT"
        ]
      }
    ]
  },
  {
    "name": "Cleaning",
    "slug": "cleaning",
    "image": "/assets/services/cleaning.png",
    "subcategories": [
      {
        "name": "Interior",
        "items": [
          "CAR / SUV INTERIOR NORMAL VAVCUUM",
          "VAN INTERIOR NORMAL VAVCUUM",
          "INTERIOR SEAT / DASHBOARD / GLASS / HOOD / CARPET CHEMICAL CLEANING",
          "CAR / SUV INTERIOR DEEP CHEMICAL CLEANING ( FULL INTERIOR OVERHAUL )",
          "VAN INTERIOR DEEP CHEMICAL CLEANING ( FULL INTERIOR OVERHAUL )"
        ]
      },
      {
        "name": "Exterior",
        "items": [
          "FULL BIKE WASH WITH WAXING",
          "CAR BODY WASH",
          "VAN BODY WASH",
          "CAR / SUV / VAN UNDER WASH",
          "CAR / SUV / VAN ENGINE ROOM CLEANING",
          "CAR EXTERIOR BODY WAXING"
        ]
      }
    ]
  },
  {
    "name": "Car Detailing",
    "slug": "car-detailing",
    "image": "/assets/services/car-detailing.png",
    "subcategories": [
      {
        "name": "Car Detailing",
        "items": [
          "EXTERIOR DETAILING",
          "INTERIOR DETAILING"
        ]
      }
    ]
  },
  {
    "name": "Car Scanning",
    "slug": "car-scanning",
    "image": "/assets/services/car-scanning.png",
    "subcategories": [
      {
        "name": "Car Scanning",
        "items": [
          "CAR SCANNING"
        ]
      }
    ]
  }
];
