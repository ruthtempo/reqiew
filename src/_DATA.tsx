export interface Entity {
  type: string;
  brand: string;
  model: string;
  price: number;
  date: string;
  rating: [number, number, number, number, number];
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
    rating: [2230, 4321, 880, 350, 720],
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
    rating: [3200, 1450, 390, 600, 580],
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
    rating: [6900, 1500, 690, 550, 700],
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
    rating: [3300, 2300, 670, 890, 210],
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
    rating: [3500, 950, 1290, 250, 550],
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
    rating: [4100, 1300, 1920, 980, 670],
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
