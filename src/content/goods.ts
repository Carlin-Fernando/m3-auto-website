export type GoodsBrand = {
  name: string;
  key: string;
  logo?: string;
  items: string[];
};

export type GoodsCategory = {
  name: string;
  slug: string;
  brands: GoodsBrand[];
};

export const goodsCategories: GoodsCategory[] = [
  {
    "name": "Air Filters",
    "slug": "air-filters",
    "brands": [
      {
        "name": "Toyota",
        "key": "TOYOTA",
        "items": [
          "TOYOTA AIR FILTER 17801 - 22020",
          "TOYOTA AIR FILTER 17801 - 30060",
          "TOYOTA AIR FILTER17801 - 77050",
          "TOYOTA AIR FILTER 17801 - 21040",
          "TOYOTA AIR FILTER 17801 - 37021",
          "TOYOTA AIR FILTER17801 - 21050",
          "TOYOTA AIR FILTER 17801 - 21060",
          "TOYOTA AIR FILTER17801 - 23030",
          "TOYOTA AIR FILTER 17801 - 21030",
          "TOYOTA AIR FILTER 17801 - 38051",
          "TOYOTA AIR FILTER 17801 - B2010",
          "TOYOTA AIR FILTER 17801 - 73R05 - 000"
        ],
        "logo": "/assets/brands/parts/toyota.png"
      },
      {
        "name": "Suzuki",
        "key": "SUZUKI",
        "items": [
          "SUZUKI AIR FILTER 13780 - 64P00",
          "SUZUKI AIR FILTER 13780 - 50M00",
          "SUZUKI AIR FILTER 13780 - 74M00",
          "SUZUKI AIR FILTER 13780 - 80GA0",
          "SUZUKI AIR FILTER 13780 - 50MF01",
          "SUZUKI AIR FILTER 13780 - 74P00",
          "SUZUKI AIR FILTER 13780 - 59500",
          "SUZUKI AIR FILTER 13780 - 68H00"
        ],
        "logo": "/assets/brands/parts/suzuki.png"
      },
      {
        "name": "Nissan",
        "key": "NISSAN",
        "items": [
          "NISSAN AIR FILTER 16546 - AX000",
          "NISSAN AIR FILTER 16546 - ED000",
          "NISSAN AIR FILTER 16545 - V0100",
          "NISSAN AIR FILTER 1016000577"
        ],
        "logo": "/assets/brands/parts/nissan.png"
      },
      {
        "name": "Renault",
        "key": "RENAULT",
        "items": [
          "RENAULT AIR FILTER16546 - 0279R"
        ],
        "logo": "/assets/brands/parts/renault.png"
      },
      {
        "name": "Honda",
        "key": "HONDA",
        "items": [
          "HONDA AIR FILTER 17220 - RBJ000",
          "HONDA AIR FILTER 17220 - 5R0008",
          "HONDA AIR FILTER 17220 - 5YS003",
          "HONDA AIR FILTER 17220 - RMX000",
          "HONDA AIR FILTER 17220 - PWA505"
        ]
      },
      {
        "name": "Bosch",
        "key": "BOSCH",
        "items": [
          "BOSCH AIR FILTER 9000 - 105 - 058",
          "BOSCH AIR FILTER F - 026 - 400 - 380",
          "BOSCH AIR FILTER PW 811 941"
        ],
        "logo": "/assets/brands/parts/bosch.png"
      }
    ]
  },
  {
    "name": "Cabin Filters",
    "slug": "cabin-filters",
    "brands": [
      {
        "name": "Toyota",
        "key": "TOYOTA",
        "items": [
          "TOYOTA CABIN FILTER 17801 - 87111",
          "TOYOTA CABIN FILTER 88568 - B1010",
          "TOYOTA CABIN FILTER 87139 - 12010",
          "TOYOTA CABIN FILTER 87139 - 30060"
        ],
        "logo": "/assets/brands/parts/toyota.png"
      },
      {
        "name": "Suzuki",
        "key": "SUZUKI",
        "items": [
          "SUZUKI CABIN FILTER 95861 - 82K00",
          "SUZUKI CABIN FILTER 95861 - 68H00",
          "SUZUKI CABIN FILTER 95860 - 74P00"
        ],
        "logo": "/assets/brands/parts/suzuki.png"
      },
      {
        "name": "Nissan",
        "key": "NISSAN",
        "items": [
          "NISSAN CABIN FILTER 27891 - BM400"
        ],
        "logo": "/assets/brands/parts/nissan.png"
      },
      {
        "name": "Honda",
        "key": "HONDA",
        "items": [
          "HONDA CABIN FILTER 80291 TF0 - G01",
          "HONDA CABIN FILTER 08R79-SEA-000A",
          "HONDA CABIN FILTER 80292-32R-J01"
        ]
      }
    ]
  },
  {
    "name": "Oil Filters",
    "slug": "oil-filters",
    "brands": [
      {
        "name": "Toyota",
        "key": "TOYOTA",
        "items": [
          "TOYOTA OIL FILTER 04152 - 40060",
          "TOYOTA OIL FILTER 90915 - YZZE1",
          "TOYOTA OIL FILTER 90915 - YZZE2",
          "TOYOTA OIL FILTER 90915 - 20003",
          "TOYOTA OIL FILTER 90915 - 30002",
          "TOYOTA OIL FILTER 90915 - 30001"
        ],
        "logo": "/assets/brands/parts/toyota.png"
      },
      {
        "name": "Suzuki",
        "key": "SUZUKI",
        "items": [
          "SUZUKI OIL FILTER 16510 - M68K10",
          "SUZUKI OIL FILTER 16510 - 81404"
        ],
        "logo": "/assets/brands/parts/suzuki.png"
      },
      {
        "name": "Nissan",
        "key": "NISSAN",
        "items": [
          "NISSAN OIL FILTER 15208 - 65F0A",
          "NISSAN OIL FILTER 15208 - W1194",
          "NISSAN OIL FILTER 15208 - 53J00"
        ],
        "logo": "/assets/brands/parts/nissan.png"
      },
      {
        "name": "Honda",
        "key": "HONDA",
        "items": [
          "HONDA OIL FILTER15400 - PLM - A01"
        ]
      },
      {
        "name": "Mitsubishi",
        "key": "MITSUBISHI",
        "items": [
          "MITSUBISHI OIL FILTER MD - 135737"
        ],
        "logo": "/assets/brands/parts/mitsubishi.png"
      }
    ]
  },
  {
    "name": "Wiper Blades",
    "slug": "wiper-blades",
    "brands": [
      {
        "name": "W\u00fcrth",
        "key": "WURTH",
        "items": [
          "WURTH WIPER BLADE-FRONT - 700MM/28",
          "WURTH WIPER BLADE-FRONT  - 600mm/24",
          "WURTH WIPER BLADE-FRONT  - 525mm/21",
          "WURTH WIPER BLADE-FRONT  - 550mm/22",
          "WURTH WIPER BLADE-FRONT  - 500mm/20",
          "WURTH WIPER BLADE-FRONT  - 400mm/16",
          "WURTH WIPER BLADE-FRONT  - 350mm/14",
          "WURTH WIPER BLADE-FRONT  - 475mm/19",
          "WURTH WIPER BLADE-FRONT  - 450mm/18",
          "WURTH WIPER BLADE-FRONT  - 425mm/17",
          "WURTH WIPER BLADE-FRONT  - 650mm/26",
          "WURTH WIPER BLADE-REAR - 350mm/14",
          "WURTH WIPER BLADE-REAR  - 300mm/12",
          "WURTH WIPER BLADE-REAR  - 255mm/10",
          "WURTH WIPER BLADE-REAR - 330mm/13"
        ],
        "logo": "/assets/brands/parts/wurth.png"
      }
    ]
  },
  {
    "name": "Lubricants",
    "slug": "lubricants",
    "brands": [
      {
        "name": "Valvoline",
        "key": "VALVOLINE",
        "items": [
          "VALVOLINE 880911 - 15W-40 / 5L DIESEL MOTOR OIL",
          "VALVOLINE 881097 - 15W-40 / 1L FREE",
          "VALVOLINE 881097 - 15W-40 / 1L DIESEL MOTOR OIL",
          "VALVOLINE 896783 - 10W-30 / 3L PETROL ENGINE OIL",
          "VALVOLINE 897409 - 10W-30 / 4L PETROL ENGINE OIL",
          "VALVOLINE 894325 - 5W-30 / 4L SYNTHETIC OIL",
          "VALVOLINE 894328 - 0W-20 / 4L SYNTHETIC OIL",
          "VALVOLINE 894326 - 0W-20 / 3L SYNTHETIC OIL",
          "VALVOLINE 691920 - 15W-40 VR1 / 4L PETROL ENGINE OIL",
          "VALVOLINE 691970 - 15W40 CI4 / 1L DIESEL MOTOR OIL",
          "VALVOLINE IV500355 - 20W-40 / 1L BIKE OIL",
          "VALVOLINE 560685 - 20W-50 / 1L BIKE OIL",
          "VALVOLINE 891553 - MAXLIFE / 4L AUTO GEAR/ POWER STEERING OIL"
        ],
        "logo": "/assets/brands/lubricants/valvoline.png"
      },
      {
        "name": "Petromin",
        "key": "PETROMIN",
        "items": [
          "PETROMIN 15W-40 / 4L PETROL ENGINE OIL",
          "PETROMIN  10W-30 / 3L PETROL ENGINE OIL",
          "PETROMIN  0W-20 / 4L PETROL ENGINE OIL",
          "PETROMIN  0W-20 / 3L PETROL ENGINE OIL",
          "PETROMIN  10W-30 / 4L PETROL ENGINE OIL",
          "PETROMIN  SAE - 90 / 4L GEAR BOX OIL",
          "PETROMIN  ATF III H - TRANSMISSION OIL"
        ],
        "logo": "/assets/brands/lubricants/petromin.png"
      },
      {
        "name": "ENI",
        "key": "ENI",
        "items": [
          "ENI I-SINT 5W-30 / 3L SYNTHETIC PETROL ENGINE OIL",
          "ENI I-SINT 15W-40 / 4L SYNTHETIC DIESEL ENGINE OIL",
          "ENI I-BASE 15W-40 CI4 / 4L DIESEL ENGINE OIL",
          "ENI I-BASE 10W-30 / 1L PERTROL ENGINE OIL",
          "ENI I-SINT 5W-30 / 1L SYNTHETIC PETROL ENGINE OIL",
          "ENI 15W-40 / 1L DIESEL ENGINE OIL",
          "ENI I-RIDE 20W-40 / 1L BIKE OIL",
          "ENI I-RIDE 20W-50 / 1L BIKE OIL"
        ],
        "logo": "/assets/brands/lubricants/eni.png"
      },
      {
        "name": "Castrol",
        "key": "CASTROL",
        "items": [
          "CASTROL MAGNATEC 0W20 / 1L PETROL ENGINE OIL"
        ],
        "logo": "/assets/brands/lubricants/castrol.png"
      }
    ]
  },
  {
    "name": "Car Care Products",
    "slug": "car-care-products",
    "brands": [
      {
        "name": "Prestone",
        "key": "PRESTONE",
        "items": [
          "PRESTONE AF - 2033 / 3.7L  PREMIT ANTIFREEZE",
          "PRESTONE AFPR - C004 - ID RADIATOR COOL GREEN FLUID 4L",
          "PRESTONE AF - 6300 - 2F PRS ASIAN BLUE 4L",
          "PRESTONE AFPR - C001 - ID RADIADOR COOL GREEN FLUID 1L",
          "PRESTONE AF - 2033L - IDP PREMIX ANTIFREEZE PINK FLUID 1L",
          "PRESTONE AS - 263Y-12 PRESTONE POWER STEERING FLUID 1L",
          "PRESTONE AFPM - 0001 - ID PRIME RADIATOR COOL GREEN FLUID 1L"
        ],
        "logo": "/assets/brands/lubricants/prestone.png"
      },
      {
        "name": "W\u00fcrth",
        "key": "WURTH",
        "items": [
          "WURTH 0892152233 - OR - COOLANT - GREEN 1L",
          "WURTH 0892152020 - OR - COOLANT - RED 1L",
          "WURTH 0892152120 - OR - COOLANT - BLUE 1L",
          "WURTH 0892450450 - OR - AF - COOLANT - RED 4L",
          "WURTH 0892450452 - OR - AF - COOLANT - BLUE 4L",
          "WURTH 0892450454 - OR - AF - COOLANT - GREEN 4L",
          "WURTH DOT - 3 BREAK FLUID 250ML",
          "WURTH DOT - 4 BREAK FLUID 250ML",
          "WURTH DOT - 3 BREAK FLUID 500ML",
          "WURTH DOT - 4 BREAK FLUID 500ML"
        ],
        "logo": "/assets/brands/parts/wurth.png"
      }
    ]
  },
  {
    "name": "Air Fresheners",
    "slug": "air-fresheners",
    "brands": [
      {
        "name": "Dash",
        "key": "DASH",
        "items": [
          "RAIHAN COOL ICE / 40G",
          "DASH AIR FRESHNER - GEL TRAY / 40G",
          "DASH AIR POCKET / 10G",
          "DASH A.F. GEL POCKET - PURE FAST / 10G",
          "DASH AIR FRESHNER SPRAY BOTTLE / 500ML"
        ]
      }
    ]
  },
  {
    "name": "Tissue Boxes",
    "slug": "tissue-boxes",
    "brands": [
      {
        "name": "Mint",
        "key": "MINT",
        "items": [
          "MINT FACIAL TISSUE 1 BOX"
        ]
      }
    ]
  }
];
