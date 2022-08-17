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
    img:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/55fae772-8d23-4264-9fdf-bf0ce1cc2e06/mercurial-superfly-8-academy-mg-multi-ground-football-boots-mZtdtv.png",
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
