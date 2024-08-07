export interface IProduct {
  id: number;
  name: string;
  image: string;
  tags: string[];
}

export const products: IProduct[] = [
  {
    id: 1,
    name: "Maroon Cardigan",
    image: "https://live.staticflickr.com/7532/15785598421_9409264c12_c.jpg",
    tags: ["maroon", "burgundy", "sweater", "top", "mens"],
  },
  {
    id: 2,
    name: "Fairy Pattern Cardigan",
    image: "https://live.staticflickr.com/8325/8119836820_4b9d54348a_c.jpg",
    tags: [
      "black",
      "pattern",
      "hearts",
      "floral",
      "flowers",
      "sweater",
      "top",
      "childrens",
      "girls",
    ],
  },
  {
    id: 3,
    name: "Charcoal Cardigan",
    image: "https://live.staticflickr.com/7527/15167496454_3b78ff2f0f_b.jpg",
    tags: ["gray", "grey", "sweater", "top", "mens"],
  },
  {
    id: 5,
    name: "White Cardigan",
    image: "https://live.staticflickr.com/2143/2204453482_3122e24b92_b.jpg",
    tags: ["white", "sweater", "top", "womens"],
  },
];
