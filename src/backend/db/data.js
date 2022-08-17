import { v4 as uuid } from "uuid";

export const sliderProducts = [
  {
    id: uuid(),
    img:
      "https://5.imimg.com/data5/ANDROID/Default/2021/1/OD/RM/BM/36974239/img-20210124-wa0122-jpg-500x500.jpg",
    title: "INDIAN FESTIVAL SALE",
    desc: "Grab Before The Offer Ends",
    bg: "#ff0000"
  },
  {
    id: uuid(),
    img:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    title: "POPULAR SALE",
    desc: "Hurry Up",
    bg: "#ff0000"
  },
  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3jbjtayRxpRN55itnTUtSYRvm7f99nZFNA&usqp=CAU",
    title: "SUMMER SALE",
    desc: "Buy It Before the Summer Ends",
    bg: "#ff0000"
  }
];

export const categories = [
  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPtPuumged9hbYNZ0JFjNPL-VLjFu8tkeNg&usqp=CAU",
    title: "Shoes"
  },
  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToepGQ1ePrSbNAv_L_aaTudUjTqsGjs-evGQ&usqp=CAU",
    title: "Sneakers"
  },
  {
    id: uuid(),
    img:
      "data:image/jpeg;base64,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",
    title: "Boots"
  }
];

export const products = [
  {
    id: uuid(),
    img:
      "data:image/jpeg;base64,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",
    title: "NIKE SHOE",
    price: "500"
  },
  {
    id: uuid(),
    img:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/585f399c-2ae5-4e12-9a4e-df531c0de400/air-jordan-1-retro-high-og-shoe-PLe8kL.png",
    title: "NIKE SHOE",
    price: "500"
  },
  {
    id: uuid(),
    img:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6c11250b-1fc6-4727-9ea9-4aa63964ccae/kyrie-infinity-ep-basketball-shoes-QJ01t9.png",
    title: "NIKE SHOES",
    price: "500"
  },
  {
    id: uuid(),
    img:
      "https://media.gq-magazine.co.uk/photos/621cbc0f73021b051fcbc729/master/w_1920,h_1280,c_limit/24022022_A_13.jpeg",
    title: "NIKE BOOTS",
    price: "500"
  },
  {
    id: uuid(),
    img:
      "https://static.nike.com/a/images/w_1920,c_limit/92588355-f994-4e77-90e2-6b2883465cdb/the-best-nike-shoes-for-pickleball.jpg",
    title: "NIKE SPORTS",
    price: "600"
  },
  {
    id: uuid(),
    img:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/727674e7-66d8-43d0-907d-a153999e63c0/air-max-97-se-mens-shoes-6xRN2b.png",
    title: "NIKE SHOES",
    price: "800"
  },
  {
    id: uuid(),
    img:
      "https://media.gettyimages.com/photos/view-of-a-puma-display-during-the-2019-bet-experience-kicksperience-picture-id1157495172?s=612x612",
    title: "PUMA",
    price: "600"
  },
  {
    id: uuid(),
    img:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/376185/03/sv01/fnd/IND/fmt/png",
    title: "PUMA",
    price: "500"
  },
  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYnhJHgj_SOSvNzNR2qvO1cwSZOgXlBWCjQ&usqp=CAU",
    title: "PUMA",
    price: "2100"
  },
  {
    id: uuid(),
    img:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/306993/01/sv01/fnd/IND/fmt/png",
    title: "PUMA SHOES",
    price: "560"
  },
  {
    id: uuid(),
    img:
      "https://5.imimg.com/data5/SELLER/Default/2021/4/PN/PG/RU/96403645/8d698a87-9296-4735-91a9-87eb29f4d27b-500x500.jpg",
    title: "PUMA SHOES",
    price: "600"
  },
  {
    id: uuid(),
    img:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/305882/04/sv01/fnd/IND/fmt/png/BMW-MS-Drift-Cat-5-Ultra-Unisex-Shoes",
    title: "PUMA",
    price: "500"
  },
  {
    id: uuid(),
    img:
      "https://i.pinimg.com/736x/72/4e/33/724e336453b92f3d65ab4dde390ca7c5.jpg",
    title: "PUMA WOMEN",
    price: "800"
  },
  {
    id: uuid(),
    img:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/306220/01/sv01/fnd/IND/fmt/png/Ferrari-Kart-Cat-Mid-Men's-Sneakers",
    title: "PUMA x FERRARI",
    price: "4000"
  },
  {
    id: uuid(),
    img:
      "https://i.pinimg.com/736x/40/4f/20/404f20641f0a6bbcfb526c0a796bad53.jpg",
    title: "PUMA x BMW",
    price: "3100"
  },
  {
    id: uuid(),
    img:
      "https://www.westendwell.ca/wp-content/uploads/2021/07/puma20bmw20shoes-807xck.jpg",
    title: "PUMA x BMW",
    price: "3000"
  },
  {
    id: uuid(),
    img:
      "https://brand.assets.reebok.com/f_auto,q_auto,fl_lossy/capi/reebok_enUS/comfyshoes-mobile_274-636858.jpg",
    title: "REEBOK US",
    price: "700"
  },
  {
    id: uuid(),
    img:
      "https://rukminim1.flixcart.com/image/332/398/kzegk280/shoe/r/u/r/9-ga1555-10-reebok-white-black-original-imagbf9z6y7tydrr.jpeg?q=50",
    title: "REEBOK SHOE",
    price: "600"
  },
  {
    id: uuid(),
    img:
      "https://footwearnews.com/wp-content/uploads/2021/04/reebok-club-memt-mens-shoes-1.jpg",
    title: "REEBOK",
    price: "500"
  }
];
