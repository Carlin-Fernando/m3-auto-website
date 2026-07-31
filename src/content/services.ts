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
    ],
    "image": "/assets/services/img-4.png"
  },
  {
    "name": "Transmission",
    "slug": "transmission",
    "subcategories": [
      {
        "name": "Gear Oil",
        "items": [
          "GEAR OIL REFILL / CHANGING"
        ]
      }
    ],
    "image": "/assets/services/img-7.png"
  },
  {
    "name": "Engine",
    "slug": "engine",
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
    ],
    "image": "/assets/services/img-5.png"
  },
  {
    "name": "Coolant",
    "slug": "coolant",
    "subcategories": [
      {
        "name": "Coolant",
        "items": [
          "COOLANT REFILLING",
          "COOLANT CHANGING"
        ]
      }
    ],
    "image": "/assets/services/img-5.png"
  },
  {
    "name": "Rack",
    "slug": "rack",
    "subcategories": [
      {
        "name": "Rack",
        "items": [
          "RACK REPLACEMENT",
          "RACK END REPLACEMENT"
        ]
      }
    ],
    "image": "/assets/services/img-5.png"
  },
  {
    "name": "CV Joint",
    "slug": "cv-joint",
    "subcategories": [
      {
        "name": "CV Joint",
        "items": [
          "CV BOOT CHANGING",
          "CV JOINT REPLACEMENT"
        ]
      }
    ],
    "image": "/assets/services/img-5.png"
  },
  {
    "name": "Suspension",
    "slug": "suspension",
    "subcategories": [
      {
        "name": "Suspension",
        "items": [
          "SUSPENSION MOUNT REPLACEMENT",
          "SUSPENSION REPLACEMENT"
        ]
      }
    ],
    "image": "/assets/services/img-5.png"
  },
  {
    "name": "Cleaning",
    "slug": "cleaning",
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
          "FULL BIKE WASH",
          "FULL BIKE WASH WITH WAXING",
          "BIKE CHAIN REGREASING",
          "CAR BODY WASH",
          "SUV BODY WASH",
          "VAN BODY WASH",
          "CAR / SUV / VAN UNDER WASH",
          "CAR / SUV / VAN ENGINE ROOM CLEANING",
          "CAR EXTERIOR BODY WAXING",
          "SUV EXTERIOR BODY WAXING"
        ]
      }
    ],
    "image": "/assets/services/img-2.png"
  },
  {
    "name": "Car Detailing",
    "slug": "car-detailing",
    "subcategories": [
      {
        "name": "Car Detailing",
        "items": [
          "EXTERIOR DETAILING",
          "INTERIOR DETAILING"
        ]
      }
    ],
    "image": "/assets/services/img-3.png"
  },
  {
    "name": "Car Scanning",
    "slug": "car-scanning",
    "subcategories": [
      {
        "name": "Car Scanning",
        "items": [
          "CAR SCANNING"
        ]
      }
    ],
    "image": "/assets/services/img-8.png"
  }
];
