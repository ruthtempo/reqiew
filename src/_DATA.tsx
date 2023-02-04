export interface Entity {
  type: string;
  brand: string;
  model: string;
  price: number;
  date: string;
  rating: { 5: number; 4: number; 3: number; 2: number; 1: number };
  aspects: {
    quality: number;
    safety: number;
    design: number;
    service: number;
    cleaning: number;
    foodTaste: number;
  };
}

export interface Benchmark {
  quality: number;
  safety: number;
  design: number;
  service: number;
  cleaning: number;
  foodTaste: number;
}

export const productData: Entity[] = [
  {
    type: "Smartphone",
    brand: "Apple",
    model: "iPhone 12 Pro Max",
    price: 1099,
    date: "2020-10-13",
    rating: { 5: 4230, 4: 1321, 3: 880, 2: 550, 1: 220 },
    aspects: {
      quality: 98,
      safety: 90,
      design: 95,
      service: 92,
      cleaning: 86,
      foodTaste: 63,
    },
  },
  {
    type: "Smartphone",
    brand: "Dell",
    model: "XPS 13",
    price: 1199,
    date: "2021-01-05",
    rating: { 5: 3200, 4: 1450, 3: 990, 2: 600, 1: 280 },
    aspects: {
      quality: 96,
      safety: 92,
      design: 94,
      service: 89,
      cleaning: 82,
      foodTaste: 46,
    },
  },
  {
    type: "Smartwatch",
    brand: "Samsung",
    model: "Galaxy Tab S7",
    price: 799,
    date: "2021-08-01",
    rating: { 5: 3900, 4: 1500, 3: 890, 2: 550, 1: 200 },
    aspects: {
      quality: 97,
      safety: 91,
      design: 63,
      service: 87,
      cleaning: 85,
      foodTaste: 72,
    },
  },
  {
    type: "Smartwatch",
    brand: "Fitbit",
    model: "Versa 3",
    price: 229,
    date: "2021-09-15",
    rating: { 5: 3300, 4: 1300, 3: 970, 2: 590, 1: 210 },
    aspects: {
      quality: 75,
      safety: 89,
      design: 92,
      service: 90,
      cleaning: 84,
      foodTaste: 55,
    },
  },
  {
    type: "Headphones",
    brand: "Beats",
    model: "Powerbeats Pro",
    price: 249,
    date: "2019-04-30",
    rating: { 5: 3500, 4: 1250, 3: 900, 2: 550, 1: 250 },
    aspects: {
      quality: 96,
      safety: 90,
      design: 84,
      service: 91,
      cleaning: 65,
      foodTaste: 66,
    },
  },
  {
    type: "Speaker",
    brand: "JBL",
    model: "Charge 5",
    price: 149,
    date: "2020-07-20",
    rating: { 5: 3100, 4: 1300, 3: 920, 2: 580, 1: 270 },
    aspects: {
      quality: 94,
      safety: 89,
      design: 61,
      service: 88,
      cleaning: 83,
      foodTaste: 77,
    },
  },
];

export const benchmarks: Benchmark = {
  quality: 85,
  safety: 64,
  design: 77,
  service: 82,
  cleaning: 76,
  foodTaste: 53,
};
