import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
 
  {
  _id: uuid(),
  name: "Anouk",
  rating: 4.2,
  inStock: true,
  category: "ETHNIC",
  originalPrice: 791,
  discountedPrice: "1799",
  discount: 56,
  description: "Printed Kurta with Plazoos",
  url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12450338/2020/9/30/44977045-deb7-4755-849c-bc304984c0c91601462286901-Varanga-teal-heavy-mirror-work-yoke-flared-kurta-with-34th-e-1.jpg"
  },

  {
    _id: uuid(),
    name: "LIBAS",
    rating: 4.5,
    inStock: false,
    category: "ETHNIC",
    originalPrice: 700,
    discountedPrice: "1999",
    discount: 65,

    description: "Printed straight Kurta",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/11049564/2021/9/8/72d91a3d-ec82-4a09-a5a6-a4defa72d8881631091758499-Ahalyaa-Women-Cream-Coloured--Golden-Printed-Anarkali-Kurta--1.jpg"
  },

  {
    _id: uuid(),
    name: "ZIYAA",
    rating: 4.6,
    inStock: true,
    category: "ETHNIC",
    originalPrice: 879,
    discountedPrice: "2455",
    discount: 76,

    description: "Women Kurta Set with Dupatta",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12766966/2020/11/19/d1a4cc48-ff90-47ab-ad36-800743e83d641605767381033-Ishin-Womens-Rayon-Red-Bandhani-Print-Embellished-Anarkali-K-1.jpg"
  },

  {
    _id: uuid(),
    name: "FABINDIA",
    rating: 4.7,
    inStock: false,
    category: "ETHNIC",
    originalPrice: 1299,
    discountedPrice: "1999",
    discount: 58,

    description: "Women Cotton straight Kurta",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12491406/2020/10/1/9c5ef22f-2415-4ac5-9fb9-206d592afa041601539898170-Inddus-Women-Kurtas-1341601539895541-1.jpg"
  },

  {
    _id: uuid(),
    name: "VARANGA",
    rating: 4.3,
    inStock: true,
    category: "ETHNIC",
    originalPrice: 699,
    discountedPrice: "1799",
    discount: 46,

    description: "FLoral cotton Kurta set",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/11919308/2020/6/24/5c3f7811-0c88-4959-b2ac-34a11aed3c9d1592978431386EmbroideredStraightKurtaKurtasDivenaWomenKurtasDivenaWomenKu1.jpg"
  },

  {
    _id: uuid(),
    name: "FABINDIA",
    rating: 3.3,
    inStock: true,
    category: "ETHNIC",
    originalPrice: 3599,
    discountedPrice: "5000",
    discount: 78,

    description: "Women Cotton straight Kurta",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12541398/2020/11/11/4c426b1e-5734-47de-b8cc-569835e7c6f61605085908925-Varanga-Women-Pink-Solid-Straight-Kurta-5471605085907266-1.jpg"
  },

  {
    _id: uuid(),
    name: "LIBAS",
    rating: 4.3,
    inStock: false,
    category: "ETHNIC",
    originalPrice: 1599,
    discountedPrice: "5000",
    discount: 64,

    description: "Women Cotton straight Kurta",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/6/13/ee2a1f98-17e4-4f51-8513-1d0de67d3a791560421112947-1.jpg"
  },

  {
    _id: uuid(),
    name: "ANOUK",
    rating: 3.9,
    inStock: true,
    category: "ETHNIC",
    originalPrice: 10099,
    discountedPrice: "15000",
    discount: 74,

    description: "Ethnic Print Kurta",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10513948/2019/9/4/e515a887-a59f-48bf-a53b-0181c4381a431567580918498-Anubhutee-Women-Kurtas-991567580917526-1.jpg"
  },
  {
    _id: uuid(),
    name: "ZIYAA",
    rating: 4.3,
    inStock: false,
    category: "ETHNIC",
    originalPrice: 1899,
    discountedPrice: "4800",
    discount: 74,

    description: "Women solid Kurta",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/1959685/2018/4/13/11523618856320-Vishudh-Women-Navy-Blue-Printed-Anarkali-Kurta-5201523618856141-1.jpg"
  },

  {
    _id: uuid(),
    name: "LIBAS",
    rating: 4.7,
    inStock: true,
    category: "ETHNIC",
    originalPrice: 1599,
    discountedPrice: "1699",
    discount: 15,

    description: "Women Cotton straight Kurta",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13238068/2021/4/7/e9c937ce-903e-4458-a15b-0d8f00d52ad81617778983499-Anouk-Women-Kurtas-3821617778982613-1.jpg"
  },
  {
    _id: uuid(),
    name: "VARANGA",
    rating: 4.1,
    inStock: true,
    category: "ETHNIC",
    originalPrice: 1259,
    discountedPrice: "1890",
    discount: 64,

    description: "Women Cotton straight Kurta",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13238560/2021/3/10/6d3e058e-ab3a-4cf8-a5e4-ba111feb8e451615367995817-Anouk-Women-Kurtas-9511615367993947-6.jpg"
  },
  {
    _id: uuid(),
    name: "ZIYAA",
    rating: 3.3,
    inStock: true,
    category: "ETHNIC",
    originalPrice: 3599,
    discountedPrice: "5500",
    discount: 24,

    description: "Floral printed straight Kurta",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10418116/2019/11/5/5f2acb2b-c6ee-4b8a-8a76-9ad6f05f065b1572955468439-Anouk-Women-Kurtas-8481572955466774-1.jpg"
  },
  {
    _id: uuid(),
    name: "FABINDIA",
    rating: 3.9,
    inStock: false,
    category: "ETHNIC",
    originalPrice: 6799,
    discountedPrice: "8099",
    discount: 18,

    description: "Floral Cotton straight Kurta",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/22/c654a43c-9cd5-4194-b9d8-71a10934f6891611303048539-1.jpg"
  },
  {
    _id: uuid(),
    name: "VARANGA",
    rating: 3.6,
    inStock: true,
    category: "ETHNIC",
    originalPrice: 3590,
    discountedPrice: "6799",
    discount: 64,

    description: "Women straight Kurta & Plazo",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/6603449/2018/5/31/0c4975ee-d176-4f1f-925f-d7d4c2a7bbba1527769207973-na-991527769206303-1.jpg"
  },
  {
    _id: uuid(),
    name: "ANOUK",
    rating: 4.8,
    inStock: true,
    category: "ETHNIC",
    originalPrice: 6599,
    discountedPrice: "9500",
    discount: 68,

    description: "Printed straight Kurta",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13724082/2021/6/9/4a5b16f3-f176-4ea2-8c7a-46f461fd710c1623222735043-all-about-you-Women-Kurtas-9041623222734506-1.jpg"
  },
  {
    _id: uuid(),
    name: "ANOUK",
    rating: 3.1,
    inStock: false,
    category: "SAREE",
    originalPrice: 1599,
    discountedPrice: "2500",
    discount: 52,

    description: "Floral Saree",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12631330/2020/10/23/022ccb1f-8e89-410a-ad23-596860edebe21603431606211-Inddus-Women-Sarees-4831603431603940-1.jpg"
  },
  {
    _id: uuid(),
    name: "FABINDIA",
    rating: 4.1,
    inStock: true,
    category: "SAREE",
    originalPrice: 3499,
    discountedPrice: "3699",
    discount: 15,

    description: "Solid Bnarasi Saree",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/14962730/2021/7/28/08a24baf-f846-4cbf-bcdb-0606b94b3a971627468207736PisaraWomenMaroonPrinted1.jpg"
  },
  {
    _id: uuid(),
    name: "LIBAS",
    rating: 3.6,
    inStock: true,
    category: "SAREE",
    originalPrice: 8799,
    discountedPrice: "9500",
    discount: 18,

    description: "Woven Design Badhani Saree",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/11/35643372-9a6a-45b5-a18a-af056a97b6e51565465392383-1.jpg"
  },
  {
    _id: uuid(),
    name: "ZIYAA",
    rating: 4.2,
    inStock: false,
    category: "SAREE",
    originalPrice: 8475,
    discountedPrice: "9799",
    discount: 34,

    description: "Stripped Saree",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12631312/2020/10/23/c82f16ec-ddf2-45c5-819f-48d4061942f81603435690834-Inddus-Women-Sarees-2491603435688785-1.jpg"
  },
  {
    _id: uuid(),
    name: "VARANGA",
    rating: 4.9,
    inStock: true,
    category: "SAREE",
    originalPrice: 7365,
    discountedPrice: "11199",
    discount: 38,

    description: "Quirkey Print Saree",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15097656/2021/8/10/211e277d-e2b0-4118-a9ac-a4a36d2af4f01628603220288Sarees1.jpg"
  },

  {
    _id: uuid(),
    name: "ANOUK",
    rating: 3.2,
    inStock: false,
    category: "SAREE",
    originalPrice: 8745,
    discountedPrice: "9500",
    discount: 12,

    description: "Ethnis Motifs Saree",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/14994276/2021/8/18/bb9c0688-bbc8-465c-9238-740c850e97a91629279018451-Inddus-Women-OffWhite-Digital-Print-Organza-Saree-with-Blous-1.jpg"
  },

  {
    _id: uuid(),
    name: "ZIYAA",
    rating: 3,
    inStock: true,
    category: "SAREE",
    originalPrice: 3599,
    discountedPrice: "6500",
    discount: 58,

    description: "Floral Dyed Saree",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/11423194/2020/2/18/1c8c1fef-8efe-4193-b818-ef2034090f7a1582018678718-Inddus-Women-Sarees-6981582018676518-1.jpg"
  },

  {
    _id: uuid(),
    name: "VARANGA",
    rating: 4,
    inStock: false,
    category: "SAREE",
    originalPrice: 7800,
    discountedPrice: "9500",
    discount: 28,

    description: "Stripped Party wear Saree",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12631292/2020/10/22/648b8b85-0a0b-4be6-953c-816617c1c5b11603366804603-Inddus-Women-Sarees-1741603366802361-2.jpg"
  },

  {
    _id: uuid(),
    name: "FABINDIA",
    rating: 4.9,
    inStock: true,
    category: "SAREE",
    originalPrice: 11599,
    discountedPrice: "14500",
    discount: 23,

    description: "Floral Organza Saree",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15443720/2021/9/25/a1c8f1b1-b930-42db-97ad-0fe2f9030c591632560643574-Inddus-Women-Powder-Blue-Saree-with-Net-and-Satin-Digital-Pr-3.jpg"
  },

  {
    _id: uuid(),
    name: "LIBAS",
    rating: 4.3,
    inStock: true,
    category: "SAREE",
    originalPrice: 11999,
    discountedPrice: "10500",
    discount: 9,

    description: "Embroidered Organza Saree",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/14995530/2021/9/1/cdba4aa8-afcd-42d5-96ee-eb892b2b20961630491187884-House-of-Pataudi-Pink-Ethnic-Motifs-Zari-Saree-8916304911871-1.jpg"
  },

  {
    _id: uuid(),
    name: "ANOUK",
    rating: 4.1,
    inStock: false,
    category: "SAREE",
    originalPrice: 15899,
    discountedPrice: "12599",
    discount: 26,

    description: "Printed Organza Saree",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13843424/2021/4/19/db2c5593-1baf-4de0-ac4d-aa681ac79a371618829644034-Inddus-Olive-Brown-Solid-Pleated-Saree-2881618829643137-2.jpg"
  },

  {
    _id: uuid(),
    name: "FABINDIA",
    rating: 3.9,
    inStock: true,
    category: "SAREE",
    originalPrice: 2300,
    discountedPrice: "1900",
    discount: 16,

    description: "Organza Party wear Saree",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/14171780/2021/7/16/3afbb5b6-6a6c-460c-9770-6f0d3db3f3fb1626432162496-Inddus-Purple-Ethnic-Motifs-Sequinned-Net-Saree-541162643216-1.jpg"
  },

  {
    _id: uuid(),
    name: "VARANGA",
    rating: 4.1,
    inStock: false,
    category: "SAREE",
    originalPrice: 6699,
    discountedPrice: "9700",
    discount: 38,

    description: "Floral Part wear Saree",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15097662/2021/8/10/e32c4622-9f4f-4366-85cd-ff6f0aafbd1f1628603209154Sarees1.jpg"
  },

  {
    _id: uuid(),
    name: "LIBAS",
    rating: 3.1,
    inStock: true,
    category: "SAREE",
    originalPrice: 5599,
    discountedPrice: "7500",
    discount: 32,

    description: "Floral Organza Saree",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/11423208/2020/2/18/fc299756-9941-4db6-8118-be4f5e320b281582019590074-Inddus-Women-Sarees-9551582019588076-1.jpg"
  },

  {
    _id: uuid(),
    name: "ZIYAA",
    rating: 4.5,
    inStock: true,
    category: "SAREE",
    originalPrice: 6700,
    discountedPrice: "8500",
    discount: 23,

    description: "Stripped Saree",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15443696/2021/10/12/c3da44e6-b691-4bd4-92d8-e7533fdee9c21634032400027-Inddus-Olive-Green-Solid-Net-Saree-with-Sequinned-Jacket-980-2.jpg"
  },

  {
    _id: uuid(),
    name: "ANOUK",
    rating: 4.2,
    inStock: false,
    category: "DRESS",
    originalPrice: 1826,
    discountedPrice: "3149",
    discount: 42,

    description: "Self design fit & flare dress",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/11364402/2022/3/9/3bbda9fe-40ec-403b-a84d-4fb5326c72b61646824532580-SASSAFRAS-Blue--Off-White-Floral-Print-Empire-Dress-48916468-11.jpg"
  },

  {
    _id: uuid(),
    name: "FABINDIA",
    rating: 4.2,
    inStock: true,
    category: "DRESS",
    originalPrice: 747,
    discountedPrice: "1699",
    discount: 56,

    description: "Floral Printed A-Line Dress",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/11099538/2019/12/16/de5a1e02-d817-40f3-8db9-695befc46c2f1576473716354-UF-Women-Maroon-Printed-Maxi-Dress-7821576473714711-1.jpg"
  },

  {
    _id: uuid(),
    name: "ZIYAA",
    rating: 4.4,
    inStock: true,
    category: "DRESS",
    originalPrice: 1299,
    discountedPrice: "2459",
    discount: 50,

    description: "FLoral print fit & flare Dress",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/20/445975eb-bc15-42d2-9638-aabd84cb06051611143354378-3.jpg"
  },

  {
    _id: uuid(),
    name: "LIBAS",
    rating: 4.4,
    inStock: false,
    category: "DRESS",
    originalPrice: 887,
    discountedPrice: "2399",
    discount: 63,

    description: "FLoral Wrap Dress",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12134590/2021/2/18/02886847-3ffb-44f6-afee-5c8eac76a4c61613650438660-Anouk-Women-Multicoloured-Antiviral-Finish-Printed-A-Line-Dr-1.jpg"
  },

  {
    _id: uuid(),
    name: "VARANGA",
    rating: 4.1,
    inStock: true,
    category: "DRESS",
    originalPrice: 1599,
    discountedPrice: "1899",
    discount: 12,

    description: "Printed straight Dress",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/5643903/2018/5/4/11525427054553-Miss-Chase-Women-Navy-Blue-Solid-Sheath-Dress-1671525427054373-1.jpg"
  },

  {
    _id: uuid(),
    name: "ANOUK",
    rating: 4,
    inStock: true,
    category: "DRESS",
    originalPrice: 959,
    discountedPrice: "1999",
    discount: 57,

    description: "Floral A-Line Dress",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/11099560/2020/1/10/de32fb9a-c466-4651-82a6-523709df08131578658929671-UF-Women-Blue--Pink-Printed-Maxi-Dress-41578658928124-1.jpg"
  },

  {
    _id: uuid(),
    name: "FABINDIA",
    rating: 4.6,
    inStock: false,
    category: "DRESS",
    originalPrice: 2380,
    discountedPrice: "3400",
    discount: 30,

    description: "Solid T-Shirt Dress",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/3/053dca2a-135f-497b-9aad-e9567506da381612342069635-4.jpg"
  },

  {
    _id: uuid(),
    name: "ZIYAA",
    rating: 4.2,
    inStock: true,
    category: "DRESS",
    originalPrice: 879,
    discountedPrice: "1999",
    discount: 56,

    description: "FLoral A-Line Dress",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10856160/2019/11/5/df4c3d9b-12fb-4c9c-80bb-051b6d8e80c21572938034874-SASSAFRAS-Women-Dresses-9581572938032856-5.jpg"
  },

  {
    _id: uuid(),
    name: "VARANGA",
    rating: 4.4,
    inStock: true,
    category: "DRESS",
    originalPrice: 1286,
    discountedPrice: "3299",
    discount: 61,

    description: "Polka Dress With-Ruffeled Shrug",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/11519728/2020/3/2/8168a85d-be95-4d92-9f32-6a596a4c93591583145213182-Sera-Women-Dresses-7131583145210855-1.jpg"
  },

  {
    _id: uuid(),
    name: "LIBAS",
    rating: 4.1,
    inStock: false,
    category: "DRESS",
    originalPrice: 1599,
    discountedPrice: "2599",
    discount: 64,

    description: "Stripped Floral Dress",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/11369240/2020/10/16/f850ad8f-ae7f-438d-ad3b-2f11dd42e7801602827727638-W-Women-Dresses-3411602827724045-1.jpg"
  },

  {
    _id: uuid(),
    name: "ANOUK",
    rating: 4.4,
    inStock: true,
    category: "DRESS",
    originalPrice: 728,
    discountedPrice: "1550",
    discount: 53,

    description: "Self Design Sheath Dress",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/9252701/2019/4/25/d35d7e88-f987-4ccf-b9bc-b8d541b757631556183314908-MABISH-by-Sonal-Jain-Women-Dresses-7161556183313575-1.jpg"
  },

  {
    _id: uuid(),
    name: "ZIYAA",
    rating: 4.5,
    inStock: false,
    category: "DRESS",
    originalPrice: 1304,
    discountedPrice: "2899",
    discount: 55,

    description: "Lace Insert Maxi Dress",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13205162/2021/2/22/65cf37a1-c254-421d-b559-9d99cf4c78781613979566402-all-about-you-Women-Green-Solid-Smocked-Detailing-Fit-and-Fl-1.jpg"
  },

  {
    _id: uuid(),
    name: "FABINDIA",
    rating: 4.5,
    inStock: true,
    category: "DRESS",
    originalPrice: 542,
    discountedPrice: "1549",
    discount: 65,

    description: "Ethnic Motifs Midi Dress",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10561020/2020/2/5/1b71374f-e162-464a-88d5-8878473741d71580901639381-Sangria-Women-Blue--White-Printed-A-Line-Dress-9715809016384-1.jpg"
  },

  {
    _id: uuid(),
    name: "LIBAS",
    rating: 4.3,
    inStock: true,
    category: "DRESS",
    originalPrice: 739,
    discountedPrice: "1999",
    discount: 63,

    description: "Rose Applique Mesh Dress",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13237374/2021/4/20/df1c0a0a-cdbb-4757-9f86-c5e5d4f0daa31618920900134-Anouk-Women-Blue--Pink-Ethnic-Motifs-Print-Tiered-A-Line-Mid-1.jpg"
  },

  {
    _id: uuid(),
    name: "VARANGA",
    rating: 4.2,
    inStock: true,
    category: "DRESS",
    originalPrice: 859,
    discountedPrice: "1999",
    discount: 57,

    description: "Sheath Dress",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/17/1dd23c91-f39b-49af-8848-7ef2154efb611602894476143-1.jpg"
  },

  {
    _id: uuid(),
    name: "ANOUK",
    rating: 4.2,
    inStock: false,
    category: "SWEATSHIRT",
    originalPrice: 679,
    discountedPrice: "799",
    discount: 15,

    description: "Women Sweatshirt",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/5447293/2018/11/12/9f32fffa-3f60-4ce2-88c8-5dc374d085901542011575677-Roadster-Women-Green-Self-Design-Pullover-3521542011574006-3.jpg"
  },
  {
    _id: uuid(),
    name: "VARANGA",
    rating: 3.4,
    inStock: true,
    category: "SWEATSHIRT",
    originalPrice: 389,
    discountedPrice: "1999",
    discount: 70,

    description: "Women Stripped Sweatshirt",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/16336022/2021/12/23/9498d321-8b04-4bfd-89e9-f32361fb8a721640262521803-STREET-9-Women-Sweatshirts-391640262521327-1.jpg"
  },
  {
    _id: uuid(),
    name: "FABINDIA",
    rating: 4.1,
    inStock: false,
    category: "SWEATSHIRT",
    originalPrice: 1274,
    discountedPrice: "1499",
    discount: 15,

    description: "Solid Sweatshirt",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/17003352/2022/2/1/b8843a71-4026-42df-a81b-71e955c73d0c1643705338441Sweatshirts1.jpg"
  },

  {
    _id: uuid(),
    name: "ZIYAA",
    rating: 4,
    inStock: true,
    category: "SWEATSHIRT",
    originalPrice: 499,
    discountedPrice: 1249,
    discount: 60,

    description: "Women Velvet Sweatshirt",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/7411324/2018/9/15/16c11dfc-0e7d-4870-99f4-d8eeb16d234f1537002876344-na-6121537002876170-1.jpg"
  },

  {
    _id: uuid(),
    name: "LIBAS",
    rating: 3.8,
    inStock: false,
    category: "SWEATSHIRT",
    originalPrice: 569,
    discountedPrice: "1899",
    discount: 70,

    description: "Women printed Sweatshirt",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12737878/2020/10/23/c6eb6b8b-399b-4519-878c-193f0b9891e61603450969838-SASSAFRAS-Women-Sweatshirts-1041603450968081-1.jpg"
  },

  {
    _id: uuid(),
    name: "VARANGA",
    rating: 4.1,
    inStock: true,
    category: "SWEATSHIRT",
    originalPrice: 1104,
    discountedPrice: "1299",
    discount: 15,

    description: "Drawstring Sweatshirt",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15158624/2022/2/14/ab0fd11e-a4f2-4014-9e03-f22391c74a581644830801969-Roadster-Women-Sweatshirts-2881644830801419-1.jpg"
  },

  {
    _id: uuid(),
    name: "ANOUK",
    rating: 4.2,
    inStock: true,
    category: "SWEATSHIRT",
    originalPrice: 1249,
    discountedPrice: "2499",
    discount: 68,

    description: "Women Pullover Sweater",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12737916/2020/10/19/9a12eee9-8505-4aa2-be93-1de8cdfc73671603103401205-SASSAFRAS-Women-Sweatshirts-3801603103399766-1.jpg"
  },

  {
    _id: uuid(),
    name: "FABINDIA",
    rating: 3.4,
    inStock: false,
    category: "SWEATSHIRT",
    originalPrice: 1274,
    discountedPrice: "1499",
    discount: 15,

    description: "Women Ripped Cotton Cardigan",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/2280936/2017/12/5/11512452171217-SASSAFRAS-Women-Red-Printed-Hooded-Sweatshirt-4821512452171083-1.jpg"
  },

  {
    _id: uuid(),
    name: "LIBAS",
    rating: 3.8,
    inStock: true,
    category: "SWEATSHIRT",
    originalPrice: 569,
    discountedPrice: "1899",
    discount: 70,

    description: "Women Solid Acrylic Sweater",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/14362724/2021/9/7/da6231d4-e7bb-46b3-aec1-0a1febeda9d11631009933540-Mast--Harbour-Women-Sweatshirts-5131631009932998-1.jpg"
  },

  {
    _id: uuid(),
    name: "ZIYAA",
    rating: 4.2,
    inStock: true,
    category: "SWEATSHIRT",
    originalPrice: 879,
    discountedPrice: "2199",
    discount: 60,

    description: "Printed Hooded Sweatshirt",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/14072082/2021/12/11/7bf176d6-81f6-44df-94d5-b92a89a9299c1639225485590-DressBerry-Women-Olive-Green-Pullover-3421639225485056-1.jpg"
  },

  {
    _id: uuid(),
    name: "FABINDIA",
    rating: 4,
    inStock: false,
    category: "SWEATSHIRT",
    originalPrice: 479,
    discountedPrice: "1599",
    discount: 70,

    description: "Women Solid Sweater",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15809060/2021/10/13/3a1dfafc-0eaa-414b-bac0-f2c2d6dc45e51634063818040Jumper1.jpg"
  },

  {
    _id: uuid(),
    name: "ANOUK",
    rating: 4,
    inStock: true,
    category: "SWEATSHIRT",
    originalPrice: 599,
    discountedPrice: "1999",
    discount: 70,

    description: "Women Floral Sweatshirt",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/17356700/2022/3/3/5a0e8ef6-ada9-4039-a211-1ee4abd8e7bc1646281403312JCCollectionWomenMultiSweaters1.jpg"
  },

  {
    _id: uuid(),
    name: "ZIYAA",
    rating: 4.2,
    inStock: true,
    category: "SWEATSHIRT",
    originalPrice: 959,
    discountedPrice: "2399",
    discount: 60,

    description: "Colorblocked Pullover-Acrylic",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/16444876/2021/12/10/a77ac5d9-f213-4ce4-a90c-27a394a871331639134430838TokyoTalkiesWomenNavyBluePrintedHoodedSweatshirt1.jpg"
  },

  {
    _id: uuid(),
    name: "LIBAS",
    rating: 4.1,
    inStock: true,
    category: "SWEATSHIRT",
    originalPrice: 1699,
    discountedPrice: "1999",
    discount: 15,

    description: "Women Gloss-Effect Pullover",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/17047342/2022/2/4/05a6f44c-a7e3-44b9-a0ad-19c6af119a491643966442633maxWomenPeach-ColouredColourblockedSweatshirt1.jpg"
  },

  {
    _id: uuid(),
    name: "VARANGA",
    rating: 3.5,
    inStock: false,
    category: "SWEATSHIRT",
    originalPrice: 1794,
    discountedPrice: "2990",
    discount: 40,

    description: "Women Stripped Sweatshirt",
    url: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/14382384/2021/9/13/d3cf37b9-61e7-412c-8c5c-6a6f492085c71631531146546-DressBerry-Women-Sweaters-881631531145852-1.jpg"
  }

];
    
  // {
  //   __id: uuid(),uuid(),
  //   title: "You Can WIN",
  //   author: "Shiv Khera",
  //   price: "5000",
  //   categoryName: "non-fiction",
  // },
  // {
  //   __id: uuid(),uuid(),
  //   title: "You are Winner",
  //   author: "Junaid Qureshi",
  //   price: "3000",
  //   categoryName: "horror",
  // },
  // {
  //   __id: uuid(),uuid(),
  //   title: "Think and Grow Rich",
  //   author: "Shiv Khera",
  //   price: "1000",
  //   categoryName: "fiction",
  // },

