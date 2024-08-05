export interface IProduct {
  description: string;
  image: string;
  price: number;
}

export interface IInventory {
  [category: string]: IProduct[];
}

export const inventory: IInventory = {
  food: [
    {
      description:
        "Cheerios, Gluten Free, Breakfast Cereal, 18 oz Box Product TitleCheerios, Gluten Free, Breakfast Cereal, 18 oz Box",
      image:
        "./images/2086d8ec-35ce-4130-8742-7a9404397ec6_1.c70ce4bec9a41c0a5187389ddc56144d.jpeg",
      price: 3.64,
    },
    {
      description: "TitleGerber Baby Food, In-Store Purchase Only",
      image:
        "./images/48fe258b-f6da-43ea-aaf2-eb1254baee72_1.f8c5c71d6dcd13ef473b04cffe36b0a9.jpeg",
      price: 1.06,
    },
    {
      description: "Welch's Fruit Snacks, Mixed Fruit, 40 ct, 0.9 oz",
      image:
        "./images/e57f0165-5f75-48e2-926a-aa6fb09e7f6b_1.5945df5061b6aa337e7e3f75a57c7478.jpeg",
      price: 6.98,
    },
    {
      description: "Folgers Classic Roast Ground Coffee, 48-Ounce",
      image:
        "./images/8290c40c-c4df-4291-a934-ea2e059c1443_1.4684ee133ff0251abccee037e4bf3b58.jpeg",
      price: 9.96,
    },
  ],
  clothing: [
    {
      description:
        "Wonder Nation Toddler Girl Short & Long Sleeve Snug Fit Cotton Pajamas, 4pc Set",
      image:
        "./images/9a454719-41b1-46b6-8757-7404a9d2f86f_1.a5f75891c68f4f5fb1539718c47ea7c9.jpeg",
      price: 6.5,
    },
    {
      description: "Hanes Women's Cool Comfort No Show Socks, 6 Pack",
      image:
        "./images/5af834b8-54a5-4dff-968e-c82e49e5018a_1.82136e12b1090dfa44e7c577cbb057c2.jpeg",
      price: 8.47,
    },
    {
      description: "Time and Tru Women's Sleeveless Knit Dress",
      image:
        "./images/002fb802-9405-42ba-98e5-1897e3045e37_1.01f8d758f31047c9ec2474254987fc89.jpeg",
      price: 9.96,
    },
    {
      description:
        "Athletic Works Women's Dri-More Core Athleisure Relaxed Fit Yoga Pants",
      image:
        "./images/2eee617c-706d-4af5-a512-a2fc7257324f_1.d57e44c5e6a85fb66f8f65cbc4c04da5.jpeg",
      price: 5.97,
    },
  ],
  office: [
    {
      description:
        "Scotch Sure Start Shipping Packaging Tape Dispenser Value Pack",
      image:
        "./images/5f94a231-79fb-491e-b4d5-0950c8d162c5_1.3e5393471816b2d1dd7f69cfce3f0fb6.jpeg",
      price: 6.5,
    },
    {
      description:
        'Pen+Gear Copy Paper, 8.5" x 11", 92 Bright, 20lb, 5 Reams (2500 Sheets)',
      image:
        "./images/c9e63b7f-6a7c-4458-9ab1-a92c4edf0c99_1.8f528eb7d407a4ac7c523119afa187c3.jpeg",
      price: 15.92,
    },
    {
      description:
        "BIC Cristal Xtra Smooth Ball Pen, Medium Point (1.0mm), Black, 10 Count",
      image:
        "./images/a5d391c6-0d54-40db-937e-41679829db3e_1.857a54fe94c393bf37e73b96d70de7b4.jpeg",
      price: 2.74,
    },
    {
      description: "Permatex 4 Pack Super Glue",
      image:
        "./images/1b66da43-9068-416e-a29e-63f2c975df13_1.8f2281cff0fd18fe82f51a5b0ed32146.jpeg",
      price: 1.87,
    },
  ],
};
