/* =========================================================
   SmartMarket — storefront logic
   Catalog, cart, wishlist, vacancies, promotions, auth + UI motion
   ========================================================= */

/* =========================================================
   SmartMarket — catalog
   Har kategoriya uchun mahsulotlar, 3 talik galereya,
   ranglar, tavsif va sharhlar. Promokodlar ham shu yerda.
   ========================================================= */

const shot = (id, view = "") =>
  `https://images.unsplash.com/photo-${id}?w=900&auto=format&fit=crop&q=80` +
  (view ? `&h=760&crop=${view}` : "");

const productsData = [
  /* ---------------- GADJETLAR ---------------- */
  {
    id: 1,
    brand: "Apple",
    title: "iPhone 15 Pro Max 256GB Natural Titanium",
    category: "gadgetlar",
    price: 16200000,
    oldPrice: 17500000,
    rating: 4.9,
    reviews: 128,
    isNew: true,
    heroPick: true,
    images: [
      "images/iphone-15-pro-max-titanium.jpg",
      "images/iphone-15-pro-black-titanium.jpg",
    ],
    colors: [
      { name: "Natural Titanium", hex: "#b9b2a7" },
      { name: "Qora Titanium", hex: "#3a3d42" },
      { name: "Ko'k Titanium", hex: "#4d5c73" },
    ],
    specs: ["256 GB", "A17 Pro chip", "48 MP kamera", "Titan korpus"],
    description:
      "Titan korpus, A17 Pro chip va 5x optik zoomli kamera. 256 GB xotira kundalik ish va kontent yaratish uchun bemalol yetadi.",
  },
  {
    id: 2,
    brand: "Samsung",
    title: "Samsung Galaxy S24 Ultra 12/512GB",
    category: "gadgetlar",
    price: 15400000,
    oldPrice: 16800000,
    rating: 4.8,
    reviews: 94,
    isNew: true,
    images: [
      "images/samsung-s24-ultra-titanium.jpg",
      "images/samsung-s24-ultra-violet.jpg",
      "images/samsung-s24-ultra-s-pen.jpg",
    ],
    colors: [
      { name: "Titanium Gray", hex: "#5d6167" },
      { name: "Titanium Violet", hex: "#8a7fa8" },
      { name: "Titanium Black", hex: "#2a2d31" },
    ],
    specs: ["12/512 GB", "200 MP kamera", "S Pen", "6.8\" AMOLED 120 Hz"],
    description:
      "200 MP kamera, ichida S Pen va 6.8 dyuymli Dynamic AMOLED 2X ekran. Katta batareya kun bo'yi faol ishlashga yetadi.",
  },
  {
    id: 6,
    brand: "Apple",
    title: "AirPods Pro (2-avlod) Type-C G'ilof bilan",
    category: "gadgetlar",
    price: 2950000,
    oldPrice: 3400000,
    rating: 4.8,
    reviews: 312,
    isNew: true,
    images: [
      shot("1600294037681-c80b4cb5b434"),
      shot("1572569511254-d8f925fe2cbb"),
      shot("1505740420928-5e560c06d30e"),
    ],
    colors: [
      { name: "Oq", hex: "#f4f4f5" },
      { name: "Kosmos qora", hex: "#31343a" },
    ],
    specs: ["Faol ANC", "Type-C", "6 soat tinglash", "IP54"],
    description:
      "Adaptiv shovqin so'ndirish, shaffof rejim va Type-C quvvatlash. Quloqqa mahkam o'tiradigan yumshoq nasadkalar to'plamda.",
  },
  {
    id: 10,
    brand: "Apple",
    title: "Apple Watch Series 9 45mm Sport Band",
    category: "gadgetlar",
    price: 5100000,
    oldPrice: 5800000,
    rating: 4.7,
    reviews: 143,
    images: [
      shot("1434493789847-2f02dc6ca35d"),
      shot("1579586337278-3befd40fd17a"),
      shot("1523275335684-37898b6baf30"),
    ],
    colors: [
      { name: "Midnight", hex: "#262b33" },
      { name: "Starlight", hex: "#e5dfd3" },
      { name: "Product Red", hex: "#b91c1c" },
    ],
    specs: ["45 mm", "Retina ekran", "EKG + uyqu", "50 m suv"],
    description:
      "Yorqin Retina ekran, yurak ritmi va uyqu monitoringi. 45 mm korpus sport tasmasi bilan birga keladi.",
  },
  {
    id: 13,
    brand: "Xiaomi",
    title: "Xiaomi 14T Pro 12/512GB Titan Blue",
    category: "gadgetlar",
    price: 8900000,
    oldPrice: 9700000,
    rating: 4.6,
    reviews: 88,
    isNew: true,
    images: [
      "images/xiaomi-14t-pro-blue.jpg",
      "images/xiaomi-14t-pro-green.jpg",
      "images/xiaomi-14t-pro-black.jpg",
    ],
    colors: [
      { name: "Titan Blue", hex: "#3b5f8a" },
      { name: "Titan Gray", hex: "#5a5f66" },
      { name: "Titan Black", hex: "#24272b" },
    ],
    specs: ["12/512 GB", "144 Hz AMOLED", "50 MP Leica", "120 Vt"],
    description:
      "144 Hz AMOLED ekran, 50 MP Leica optikasi va 120 Vt tez quvvatlash. Narx va imkoniyat nisbati eng yaxshi modellardan biri.",
  },
  {
    id: 14,
    brand: "JBL",
    title: "JBL Charge 5 Bluetooth kolonka",
    category: "gadgetlar",
    price: 1690000,
    oldPrice: 1990000,
    rating: 4.7,
    reviews: 156,
    images: [shot("1608043152269-423dbba4e7e1"), shot("1545454675-3531b543be5d"), shot("1505740420928-5e560c06d30e", "top")],
    colors: [
      { name: "Qora", hex: "#26282c" },
      { name: "Ko'k", hex: "#1e3a8a" },
      { name: "Qizil", hex: "#b91c1c" },
    ],
    specs: ["20 soat", "IP67", "Powerbank", "JBL Pro Sound"],
    description:
      "20 soatgacha musiqa, IP67 suv va chang himoyasi, telefonni quvvatlaydigan powerbank funksiyasi. Sayohat uchun mustahkam tanlov.",
  },

  /* ---------------- ELEKTRONIKA ---------------- */
  {
    id: 3,
    brand: "Apple",
    title: "MacBook Pro 14 M3 Chip 16GB/512GB Space Gray",
    category: "elektronika",
    price: 22500000,
    oldPrice: 24000000,
    rating: 5.0,
    reviews: 62,
    heroPick: true,
    images: [
      shot("1517336714731-489689fd1ca8"),
      shot("1541807084-5c52b6b3adef"),
      shot("1496181133206-80ce9b88a853"),
    ],
    colors: [
      { name: "Space Gray", hex: "#55585c" },
      { name: "Silver", hex: "#d6d8dc" },
    ],
    specs: ["M3 chip", "16/512 GB", "14\" Liquid Retina XDR", "18 soat"],
    description:
      "M3 chip bilan video montaj va kod yozish uchun mo'ljallangan 14 dyuymli noutbuk. Liquid Retina XDR ekran va 18 soatgacha ish vaqti.",
  },
  {
    id: 4,
    brand: "Sony",
    title: "Sony PlayStation 5 Slim Digital Edition",
    category: "elektronika",
    price: 6400000,
    oldPrice: 7100000,
    rating: 4.9,
    reviews: 210,
    images: [shot("1606813907291-d86efa9b94db"), shot("1606144042614-b2417e99c4e3"), shot("1592840496694-26d035b52b48")],
    colors: [{ name: "Oq", hex: "#f4f4f5" }],
    specs: ["1 TB SSD", "4K 120 Hz", "DualSense", "Disk yo'q"],
    description:
      "1 TB SSD va 4K 120 Hz grafik. DualSense boshqaruv pultasi bilan birga keladi, o'yinlar bir zumda yuklanadi.",
  },
  {
    id: 9,
    brand: "Apple",
    title: "iPad Air 11 M2 128GB Wi-Fi Blue",
    category: "elektronika",
    price: 7800000,
    oldPrice: 8600000,
    rating: 4.8,
    reviews: 71,
    isNew: true,
    images: [shot("1544244015-0df4b3ffc6b0"), shot("1585790050230-5dd28404ccb9"), shot("1547082299-de196ea013d6")],
    colors: [
      { name: "Moviy", hex: "#7ba7c9" },
      { name: "Binafsha", hex: "#a99bd4" },
      { name: "Kulrang", hex: "#8b9096" },
    ],
    specs: ["11 dyuym", "M2 chip", "128 GB", "Wi-Fi 6E"],
    description:
      "11 dyuymli Liquid Retina ekran, M2 chip va 128 GB xotira. Apple Pencil bilan eskiz, konspekt va taqdimotlar uchun qulay.",
  },
  {
    id: 11,
    brand: "Canon",
    title: "Canon EOS R50 18-45mm Kit Vlogger Kamera",
    category: "elektronika",
    price: 9800000,
    oldPrice: 10900000,
    rating: 4.9,
    reviews: 54,
    images: [shot("1516035069371-29a1b244cc32"), shot("1502920917128-1aa500764cbd"), shot("1519638831568-d9897f54ed69")],
    colors: [{ name: "Qora", hex: "#25272b" }],
    specs: ["24 MP APS-C", "4K 30fps", "18-45 mm", "Vertikal video"],
    description:
      "24 MP APS-C sensor, 4K video va 18-45 mm kit obyektiv. Blogerlar uchun yengil korpus va tez avtofokus.",
  },
  {
    id: 15,
    brand: "ASUS",
    title: "ASUS ROG Strix G16 RTX 4060 Gaming Noutbuk",
    category: "elektronika",
    price: 18900000,
    oldPrice: 20500000,
    rating: 4.7,
    reviews: 39,
    isNew: true,
    images: [shot("1593642632823-8f785ba67e45"), shot("1603302576837-37561b2e2302"), shot("1587829741301-dc798b83add3")],
    colors: [
      { name: "Eclipse Gray", hex: "#40454b" },
      { name: "Volt Green", hex: "#3f6212" },
    ],
    specs: ["RTX 4060", "165 Hz", "16 GB RAM", "1 TB SSD"],
    description:
      "RTX 4060 videokarta, 165 Hz ekran va RGB klaviatura. O'yinlar va 3D ishlar uchun kuchli, ammo ixcham noutbuk.",
  },
  {
    id: 16,
    brand: "Apple",
    title: "Apple iMac 27 dyuym 5K Retina displey",
    category: "elektronika",
    price: 12900000,
    oldPrice: 14500000,
    rating: 4.6,
    reviews: 47,
    images: ["images/imac-27-retina.jpg"],
    colors: [
      { name: "Kumush", hex: "#c9ccd1" },
      { name: "Kosmos kulrang", hex: "#55585c" },
    ],
    specs: ["27 dyuym", "5K Retina", "4.5K panel", "macOS"],
    description:
      "27 dyuymli 5K Retina displey, ingichka korpus va kumush stend. Dizayn, video va ofis ishlari uchun aniq rang va katta ish maydoni.",
  },

  /* ---------------- MAISHIY TEXNIKA ---------------- */
  {
    id: 5,
    brand: "LG",
    title: "LG OLED Smart TV 55 dyuym 4K Cinema Display",
    category: "maishiy",
    price: 11200000,
    oldPrice: 13000000,
    rating: 4.7,
    reviews: 45,
    heroPick: true,
    images: [shot("1593784991095-a205069470b6"), shot("1461151304267-38535e780c79"), shot("1593784991095-a205069470b6", "right")],
    colors: [{ name: "Qora", hex: "#22252a" }],
    specs: ["55 dyuym", "OLED 4K", "120 Hz", "Dolby Vision"],
    description:
      "4K OLED panel, Dolby Vision va 120 Hz yangilanish chastotasi. Kinoteatr effekti uchun devorga osib qo'yishga mos dizayn.",
  },
  {
    id: 7,
    brand: "SmartMarket",
    title: "Robot Changyutgich Pro — Supurish va Yuvish To'plami",
    category: "maishiy",
    price: 3900000,
    oldPrice: 4600000,
    rating: 4.9,
    reviews: 38,
    images: [
      "images/robot-vacuum-kit.jpg",
      "images/robot-vacuum-home.jpg",
    ],
    colors: [
      { name: "Oq", hex: "#f2f3f5" },
      { name: "Qora", hex: "#26282c" },
    ],
    specs: ["Supurish + yuvish", "Stansiya bilan", "Yon cho'tkalar", "Tozalash to'plami"],
    description:
      "Supuradi va yuvadi, o'zi stansiyaga qaytib quvvatlanadi. To'plamda zaryadlash stansiyasi, filtr, latta va yon cho'tkalar bor — uy pollari uchun to'liq yechim.",
  },
  {
    id: 17,
    brand: "Bosch",
    title: "Bosch Serie 2 Kir Yuvish Mashinasi 8kg",
    category: "maishiy",
    price: 7400000,
    oldPrice: 8300000,
    rating: 4.8,
    reviews: 64,
    isNew: true,
    images: ["images/bosch-washing-machine.jpg"],
    colors: [
      { name: "Kumush", hex: "#b9bdc2" },
      { name: "Oq", hex: "#f1f2f4" },
    ],
    specs: ["8 kg", "EcoSilence Drive", "15 daqiqada yuvish", "A+++ klass"],
    description:
      "8 kg sig'im va jim EcoSilence Drive motori. 15 daqiqali tez dastur kundalik kiyimlar uchun, kechqurun ham bezovta qilmaydi.",
  },
  {
    id: 18,
    brand: "Philips",
    title: "Philips Airfryer XXL 6.2L Havo Fritryujka",
    category: "maishiy",
    price: 2150000,
    oldPrice: 2600000,
    rating: 4.7,
    reviews: 221,
    images: [shot("1585515320310-259814833e62", "left"), shot("1556911220-e15b29be8c8f"), shot("1585515320310-259814833e62", "right")],
    colors: [
      { name: "Qora", hex: "#26282c" },
      { name: "Oq", hex: "#f2f3f5" },
    ],
    specs: ["6.2 litr", "7 dastur", "Kam yog'", "Idish yuvish mashinada"],
    description:
      "6.2 litr hajm, kam yog' bilan qovurish va 7 ta avtomatik dastur. Butun oila uchun bir porsiyada tayyorlaydi.",
  },
  {
    id: 19,
    brand: "Bosch",
    title: "Bosch Idish Yuvish Mashinasi 60sm",
    category: "maishiy",
    price: 6800000,
    oldPrice: 7600000,
    rating: 4.6,
    reviews: 52,
    images: [shot("1626806787461-102c1bfaaea1", "left"), shot("1610557892470-55d9e80c0bce", "right"), shot("1556911220-e15b29be8c8f", "top")],
    colors: [
      { name: "Kumush", hex: "#b9bdc2" },
      { name: "Qora", hex: "#2b2e32" },
    ],
    specs: ["60 sm", "14 qurilma", "6 dastur", "Jim rejim"],
    description:
      "60 sm korpus, 14 ta qurilma sig'imi va 6 ta yuvish dasturi. Jim rejim ochiq oshxonada ham bezovta qilmaydi.",
  },

  /* ---------------- KIYIM-KECHAK ---------------- */
  {
    id: 8,
    brand: "SmartMarket",
    title: "Erkaklar uchun Klassik Teri Ko'ylak va Shaddoz",
    category: "kiyim",
    price: 450000,
    oldPrice: 600000,
    rating: 4.5,
    reviews: 80,
    images: [shot("1602810318383-e386cc2a3ccf"), shot("1596755094514-f87e34085b2c"), shot("1583743814966-8936f5b7be1a")],
    colors: [
      { name: "Oq", hex: "#f5f5f4" },
      { name: "Havorang", hex: "#a8c4e0" },
      { name: "Qora", hex: "#26282c" },
    ],
    specs: ["100% paxta", "Slim fit", "Klassik yoqa", "S dan XXL gacha"],
    description:
      "Yumshoq paxta mato, klassik yoqali kesim. Ofis va kundalik uslub uchun universal ko'ylak, dazmol talab qilmaydi.",
  },
  {
    id: 12,
    brand: "Nike",
    title: "Nike Air Zoom Pegasus 41 Sport Krossovka",
    category: "kiyim",
    price: 1290000,
    oldPrice: 1550000,
    rating: 4.6,
    reviews: 187,
    isNew: true,
    heroPick: true,
    images: [shot("1542291026-7eec264c27ff"), shot("1600185365483-26d7a4cc7519"), shot("1595950653106-6c9ebd614d3a")],
    colors: [
      { name: "Oq", hex: "#f4f4f5" },
      { name: "Qora", hex: "#2a2c30" },
      { name: "Kulrang", hex: "#9aa0a6" },
    ],
    specs: ["ZoomX ko'pik", "Havo o'tkazuvchi to'r", "36-45 o'lcham", "Yengil taglik"],
    description:
      "Yengil ZoomX ko'pigi va havo o'tkazuvchi to'r. Har kuni 10 km yugurish va uzoq yurish uchun mo'ljallangan.",
  },
  {
    id: 20,
    brand: "SmartMarket",
    title: "Ayollar uchun Oversize Palto",
    category: "kiyim",
    price: 890000,
    oldPrice: 1150000,
    rating: 4.6,
    reviews: 63,
    isNew: true,
    images: [shot("1539533018447-63fcce2678e3"), shot("1544022613-e87ca75a784a"), shot("1618354691373-d851c5c3a990")],
    colors: [
      { name: "Bej", hex: "#cbb79b" },
      { name: "Qora", hex: "#26282c" },
      { name: "Kulrang", hex: "#8d9299" },
    ],
    specs: ["Jun aralashmasi", "Astarli", "Oversize", "S-XL"],
    description:
      "Yumshoq jun aralashmasi, oversize kesim va ichki astar. Kuz-qish mavsumida palto ostiga sviter ham bemalol sig'adi.",
  },
  {
    id: 21,
    brand: "SmartMarket",
    title: "Unisex Kapyushonli Xudi",
    category: "kiyim",
    price: 390000,
    oldPrice: 520000,
    rating: 4.5,
    reviews: 142,
    images: [shot("1556821840-3a63f95609a7"), shot("1583743814966-8936f5b7be1a", "right"), shot("1616627561950-9f746e330187")],
    colors: [
      { name: "Kulrang", hex: "#9aa0a6" },
      { name: "Qora", hex: "#26282c" },
      { name: "Yashil", hex: "#3f6212" },
    ],
    specs: ["Ichi junli", "Kapyushon", "Oldi cho'ntak", "Unisex"],
    description:
      "Ichi yumshoq junli, kapyushonli va oldi cho'ntakli xudi. Unisex kesim, uch xil rangda mavjud.",
  },
  {
    id: 22,
    brand: "SmartMarket",
    title: "Slim Fit Jinsi Shim",
    category: "kiyim",
    price: 520000,
    oldPrice: 690000,
    rating: 4.4,
    reviews: 98,
    images: [shot("1542272604-787c3835535d"), shot("1541099649105-f69ad21f3246"), shot("1618932260643-eee4a2f652a6")],
    colors: [
      { name: "Ko'k", hex: "#3b5f8a" },
      { name: "Qora", hex: "#2b2e32" },
    ],
    specs: ["Elastik denim", "Slim fit", "O'rta belbog'", "28-38 o'lcham"],
    description:
      "Elastik denim, slim fit kesim va o'rta belbog'. Har kuni kiyish uchun qulay, shaklini yo'qotmaydi.",
  },
];

productsData.forEach((product) => {
  product.image = product.images[0];
});

const categoriesData = [
  { id: "elektronika", title: "Elektronika", icon: "fa-laptop", promo: "ELEKTRO15" },
  { id: "gadgetlar", title: "Gadjetlar", icon: "fa-mobile-screen", promo: "GADGET20" },
  { id: "maishiy", title: "Maishiy texnika", icon: "fa-plug", promo: "UY10" },
  { id: "kiyim", title: "Kiyim-kechak", icon: "fa-shirt", promo: "KIYIM15" },
];

const promoCodes = [
  { code: "SMART10", percent: 10, scope: "all", label: "Barcha mahsulotlarga 10% chegirma" },
  { code: "ELEKTRO15", percent: 15, scope: "elektronika", label: "Elektronikaga 15% chegirma" },
  { code: "GADGET20", percent: 20, scope: "gadgetlar", label: "Gadjetlarga 20% chegirma" },
  { code: "UY10", percent: 10, scope: "maishiy", label: "Maishiy texnikaga 10% chegirma" },
  { code: "KIYIM15", percent: 15, scope: "kiyim", label: "Kiyim-kechakka 15% chegirma" },
];

const reviewPool = [
  {
    name: "Aziz Karimov",
    date: "12-noyabr 2026",
    rating: 5,
    text: (product) =>
      `${product.brand} ${
        product.title.split(" ").slice(0, 2).join(" ")
      } — kutilganidan ham yaxshi chiqdi. Yetkazib berish bir kunda bo'ldi, qadoqlash ideal, kafolat hujjati to'liq.`,
  },
  {
    name: "Dilnoza Rasulova",
    date: "5-noyabr 2026",
    rating: 5,
    text: (product) =>
      product.category === "kiyim"
        ? "O'lcham jadvalga to'g'ri keldi, matosi yumshoq va rangi rasmdagidek. Ikkinchi marta shu do'kondan xarid qilaman."
        : "Narxiga nisbatan sifati a'lo. Sozlash oson, qo'llanmasi o'zbek tilida ekan — juda qulay bo'ldi.",
  },
  {
    name: "Javohir To'rayev",
    date: "28-oktabr 2026",
    rating: 4,
    text: (product) =>
      `${
        product.title.split(" ").slice(0, 3).join(" ")
      } uchun bo'lib to'lash variantini ishlatdim. Hammasi muammosiz o'tdi, kuryer uyga olib keldi.`,
  },
];

function getProductReviews(product) {
  return reviewPool.map((review) => ({ ...review, text: review.text(product) }));
}

const vacanciesData = [
  {
    id: 1,
    title: "Senior Frontend Dasturchi (React / Tailwind)",
    type: "it",
    salary: "$1,500 - $2,500",
    location: "Toshkent (Gibrid rejim)",
    description:
      "SmartMarket platformasining foydalanuvchi interfeysini rivojlantirish va optimallashtirish.",
  },
  {
    id: 2,
    title: "SMM va Kontent Menejer",
    type: "marketing",
    salary: "8,000,000 - 12,000,000 so'm",
    location: "Toshkent (Ofis)",
    description:
      "Ijtimoiy tarmoqlar (Telegram, Instagram) uchun kreativ kontent va reklama kampaniyalari tayyorlash.",
  },
  {
    id: 3,
    title: "Omborxona Logistika Mutaxassisi",
    type: "logistics",
    salary: "6,000,000 - 8,000,000 so'm",
    location: "Toshkent viloyati",
    description:
      "Mahsulotlarni qabul qilish, joylashtirish va kuryerlarga taqsimlash jarayonlarini boshqarish.",
  },
  {
    id: 4,
    title: "Mijozlarni qo'llab-quvvatlash operatori (Call center)",
    type: "support",
    salary: "4,500,000 - 6,500,000 so'm",
    location: "Toshkent (Shiftli grafik)",
    description:
      "Mijozlar murojaatlari va buyurtma holatlari bo'yicha tezkor yordam ko'rsatish.",
  },
];

const promotionsData = [
  {
    title: "Gadjetlar super haftaligi",
    discount: "-30%",
    category: "gadjetlar",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&auto=format&fit=crop&q=80",
    desc: "Barcha smartfon va quloqchinlarga chegirmalar amal qilmoqda.",
  },
  {
    title: "Maishiy texnika bum",
    discount: "-40%",
    category: "maishiy",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=700&auto=format&fit=crop&q=80",
    desc: "Oshxona va uy jihozlarini qulay narxlarda xarid qiling.",
  },
  {
    title: "Mavsumiy kiyimlar to'plami",
    discount: "-50%",
    category: "kiyim",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&auto=format&fit=crop&q=80",
    desc: "Yangi kolleksiya kiyim-kechaklariga maxsus sovg'alar.",
  },
];

// --- APP STATE ---
let wishlist = [];
let cart = [];
let currentUser = null;
let currentCategory = "all";

const money = (value) => value.toLocaleString("uz-UZ") + " so'm";
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", init);

function init() {
  renderProducts();
  renderVacancies();
  renderPromotions();
  startCountdownTimer();
  updateCartBadge();
  updateWishlistBadge();
  initScrollProgress();
  initReveal();
  initRotator();
  initCounters();
  initCarousel();
  initPointerEffects();
  initModals();
  applyTheme(
    document.documentElement.classList.contains("light") ? "light" : "dark",
    false
  );
}

// --- PRODUCT FILTERING & SORTING ---
function filterAndSortProducts() {
  const searchVal = (document.getElementById("searchInput")?.value || "").toLowerCase();
  const catSelectVal = document.getElementById("categorySelectFilter")?.value || "all";
  const sortVal = document.getElementById("sortSelect")?.value || "popular";

  const activeCategory = currentCategory !== "all" ? currentCategory : catSelectVal;

  let filtered = productsData.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchVal);
    return matchesCategory && matchesSearch;
  });

  if (sortVal === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sortVal === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  else if (sortVal === "rating") filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  else if (sortVal === "name")
    filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  else filtered = [...filtered].sort((a, b) => b.reviews - a.reviews);

  renderProductsGrid(filtered);
}

function switchCategory(category) {
  currentCategory = category;
  const select = document.getElementById("categorySelectFilter");
  if (select) select.value = category === "all" ? "all" : category;

  document.querySelectorAll(".nav-cat-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.cat === category);
  });

  const titles = {
    all: "Barcha Mahsulotlar",
    elektronika: "Elektronika",
    gadgetlar: "Gadjetlar",
    maishiy: "Maishiy Texnika",
    kiyim: "Kiyim-kechak",
  };
  const titleEl = document.getElementById("currentCategoryTitle");
  if (titleEl) titleEl.innerText = titles[category] || "Mahsulotlar";

  switchSection("products");
  filterAndSortProducts();
}

// --- PRODUCTS GRID ---
function renderProducts() {
  filterAndSortProducts();
}

function renderProductsGrid(items) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  document.getElementById("productCountText").innerText = `Topildi: ${items.length} ta mahsulot`;

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full rounded-3xl border border-dashed border-white/10 bg-white/[0.02] py-16 text-center">
        <i class="fa-solid fa-box-open mb-3 text-3xl text-slate-600"></i>
        <p class="text-sm font-semibold text-slate-300">Hech narsa topilmadi</p>
        <p class="mt-1 text-xs text-slate-500">Boshqa so'z bilan qidirib ko'ring yoki kategoriyani o'zgartiring.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items
    .map((product, index) => {
      const isWishlisted = wishlist.includes(product.id);
      const discount = product.oldPrice
        ? Math.round((1 - product.price / product.oldPrice) * 100)
        : 0;

      return `
        <article class="spot-card animate-cardIn group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-card backdrop-blur-xl hover:-translate-y-1.5 hover:border-white/25" style="animation-delay:${index * 45}ms">
          <div class="on-dark relative overflow-hidden">
            <img src="${product.image}" alt="${product.title}" loading="lazy"
                 class="h-40 w-full object-cover opacity-90 transition duration-700 group-hover:scale-110 group-hover:opacity-100 sm:h-44">
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/15 to-transparent"></div>

            <div class="absolute left-2.5 top-2.5 z-10 flex flex-col gap-1.5">
              ${product.isNew ? '<span class="rounded-full bg-lime-300 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-ink-950">Yangi</span>' : ""}
              ${discount > 0 ? `<span class="rounded-full border border-white/15 bg-ink-950/70 px-2 py-0.5 text-[9px] font-bold text-rose-300 backdrop-blur">-${discount}%</span>` : ""}
            </div>

            <button onclick="toggleWishlist(${product.id})" aria-label="Sevimlilarga qo'shish"
                    class="absolute right-2.5 top-2.5 z-10 grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-ink-950/50 text-slate-300 backdrop-blur-md transition hover:scale-110 hover:text-rose-400">
              <i class="${isWishlisted ? "fa-solid fa-heart text-rose-400" : "fa-regular fa-heart"} text-xs"></i>
            </button>
          </div>

          <div class="flex flex-grow flex-col gap-3 p-3.5">
            <div class="flex items-center gap-1 text-[10px] font-semibold text-amber-300">
              <i class="fa-solid fa-star text-[9px]"></i>
              <span>${product.rating}</span>
              <span class="font-normal text-slate-500">(${product.reviews})</span>
            </div>
            <h3 class="line-clamp-2 text-[11px] font-semibold leading-snug text-slate-200 transition group-hover:text-white sm:text-xs">${product.title}</h3>

            <div class="mt-auto">
              <p class="font-display text-sm font-extrabold text-white sm:text-[15px]">${money(product.price)}</p>
              ${product.oldPrice ? `<p class="text-[10px] text-slate-500 line-through">${money(product.oldPrice)}</p>` : ""}
              <button onclick="addToCart(${product.id})"
                      class="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] py-2 text-[11px] font-bold text-slate-200 transition hover:border-transparent hover:bg-gradient-to-r hover:from-brand-500 hover:to-fuchsia-600 hover:text-white active:scale-[.98]">
                <i class="fa-solid fa-cart-plus text-[10px]"></i> Savatga
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

// --- WISHLIST ---
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  const product = productsData.find((p) => p.id === productId);
  if (!product) return;

  if (index === -1) {
    wishlist.push(productId);
    showToast(`"${product.title.substring(0, 22)}..." sevimlilarga qo'shildi`, "success");
  } else {
    wishlist.splice(index, 1);
    showToast("Mahsulot sevimlilardan olib tashlandi", "info");
  }

  updateWishlistBadge();
  filterAndSortProducts();
  if (!document.getElementById("wishlistModal").classList.contains("hidden")) {
    renderWishlistModal();
  }
}

function updateWishlistBadge() {
  const badge = document.getElementById("wishlistBadge");
  if (!badge) return;
  if (wishlist.length > 0) {
    badge.innerText = wishlist.length;
    badge.classList.remove("hidden");
    popBadge(badge);
  } else {
    badge.classList.add("hidden");
  }
}

function openWishlistModal() {
  renderWishlistModal();
  openModal("wishlistModal");
}

function closeWishlistModal() {
  closeModal("wishlistModal");
}

function renderWishlistModal() {
  const container = document.getElementById("wishlistItemsContainer");
  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="py-10 text-center">
        <i class="fa-regular fa-heart mb-3 text-3xl text-slate-600"></i>
        <p class="text-sm font-semibold text-slate-300">Sevimlilar ro'yxati bo'sh</p>
        <p class="mt-1 text-xs text-slate-500">Mahsulot kartochkasidagi yurakcha orqali qo'shing.</p>
      </div>
    `;
    return;
  }

  const favProducts = productsData.filter((p) => wishlist.includes(p.id));
  container.innerHTML = favProducts
    .map(
      (p) => `
      <div class="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
        <div class="flex min-w-0 items-center gap-3">
          <img src="${p.image}" class="h-12 w-12 rounded-xl object-cover" alt="">
          <div class="min-w-0">
            <h4 class="truncate text-xs font-semibold text-white">${p.title}</h4>
            <p class="text-[11px] font-bold text-lime-300">${money(p.price)}</p>
          </div>
        </div>
        <div class="flex shrink-0 items-center gap-1.5">
          <button onclick="addToCart(${p.id})" class="rounded-xl bg-gradient-to-r from-brand-500 to-fuchsia-600 px-3 py-1.5 text-[11px] font-bold text-white transition hover:brightness-110">Savatga</button>
          <button onclick="toggleWishlist(${p.id})" aria-label="O'chirish" class="grid h-8 w-8 place-items-center rounded-xl text-slate-500 transition hover:bg-white/5 hover:text-rose-400">
            <i class="fa-solid fa-trash text-[11px]"></i>
          </button>
        </div>
      </div>
    `
    )
    .join("");
}

// --- CART ---
function addToCart(productId) {
  const existing = cart.find((item) => item.id === productId);
  const product = productsData.find((p) => p.id === productId);
  if (!product) return;

  if (existing) existing.quantity += 1;
  else cart.push({ id: productId, quantity: 1 });

  showToast(`"${product.title.substring(0, 22)}..." savatga qo'shildi`, "success");
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  if (!badge) return;
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (totalCount > 0) {
    badge.innerText = totalCount;
    badge.classList.remove("hidden");
    popBadge(badge);
  } else {
    badge.classList.add("hidden");
  }
}

function openCartModal() {
  renderCartModal();
  openModal("cartModal");
}

function closeCartModal() {
  closeModal("cartModal");
}

function updateCartQuantity(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) cart = cart.filter((i) => i.id !== productId);

  updateCartBadge();
  renderCartModal();
}

function renderCartModal() {
  const container = document.getElementById("cartItemsContainer");
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="py-10 text-center">
        <i class="fa-solid fa-cart-arrow-down mb-3 text-3xl text-slate-600"></i>
        <p class="text-sm font-semibold text-slate-300">Savat bo'sh</p>
        <p class="mt-1 text-xs text-slate-500">Xaridni boshlash uchun katalogga qayting.</p>
      </div>
    `;
    document.getElementById("cartTotalPrice").innerText = "0 so'm";
    return;
  }

  container.innerHTML = cart
    .map((cartItem) => {
      const product = productsData.find((p) => p.id === cartItem.id);
      if (!product) return "";
      total += product.price * cartItem.quantity;

      return `
        <div class="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
          <div class="flex min-w-0 items-center gap-3">
            <img src="${product.image}" class="h-12 w-12 rounded-xl object-cover" alt="">
            <div class="min-w-0">
              <h4 class="truncate text-xs font-semibold text-white">${product.title}</h4>
              <p class="text-[11px] font-bold text-lime-300">${money(product.price)}</p>
            </div>
          </div>
          <div class="flex shrink-0 items-center gap-2">
            <div class="flex items-center rounded-xl border border-white/10 bg-white/[0.04]">
              <button onclick="updateCartQuantity(${product.id}, -1)" class="px-2.5 py-1.5 text-xs text-slate-300 transition hover:text-white">−</button>
              <span class="px-1 text-xs font-bold text-white">${cartItem.quantity}</span>
              <button onclick="updateCartQuantity(${product.id}, 1)" class="px-2.5 py-1.5 text-xs text-slate-300 transition hover:text-white">+</button>
            </div>
            <button onclick="updateCartQuantity(${product.id}, -${cartItem.quantity})" aria-label="O'chirish" class="grid h-8 w-8 place-items-center rounded-xl text-slate-500 transition hover:bg-white/5 hover:text-rose-400">
              <i class="fa-solid fa-trash text-[11px]"></i>
            </button>
          </div>
        </div>
      `;
    })
    .join("");

  document.getElementById("cartTotalPrice").innerText = money(total);
}

function checkoutSimulation() {
  if (cart.length === 0) return;
  showToast("Buyurtmangiz qabul qilindi! Operatorimiz tez orada bog'lanadi.", "success");
  celebrate();
  cart = [];
  updateCartBadge();
  closeCartModal();
}

// --- SECTION SWITCHER ---
function switchSection(sectionName) {
  const sections = ["products", "vacancies", "promotions", "about", "b2b"];
  sections.forEach((sec) => {
    const el = document.getElementById(`section-${sec}`);
    if (el) el.classList.add("hidden");
  });

  const activeEl = document.getElementById(`section-${sectionName}`);
  if (activeEl) {
    activeEl.classList.remove("hidden");
    activeEl.classList.remove("section-in");
    void activeEl.offsetWidth;
    activeEl.classList.add("section-in");
  }

  window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
}

// --- VACANCIES ---
function renderVacancies(filter = "all") {
  const container = document.getElementById("vacancyList");
  if (!container) return;
  const filtered =
    filter === "all" ? vacanciesData : vacanciesData.filter((v) => v.type === filter);

  container.innerHTML = filtered
    .map(
      (vac) => `
      <div class="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-400/30 hover:bg-white/[0.05]">
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 class="font-display text-sm font-bold text-white sm:text-base">${vac.title}</h3>
            <p class="mt-1 text-[11px] text-slate-500">
              <i class="fa-solid fa-location-dot mr-1 text-emerald-400/70"></i>${vac.location}
            </p>
          </div>
          <span class="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold text-emerald-300">${vac.salary}</span>
        </div>
        <p class="mt-3 text-xs leading-relaxed text-slate-400">${vac.description}</p>
        <button onclick="openJobModal(${vac.id})" class="mt-4 rounded-xl bg-emerald-500 px-4 py-2 text-[11px] font-bold text-ink-950 transition hover:bg-emerald-400 active:scale-[.98]">
          Ariza topshirish <i class="fa-solid fa-arrow-right ml-1 text-[9px]"></i>
        </button>
      </div>
    `
    )
    .join("");
}

function filterVacancies() {
  const selected = document.querySelector('input[name="vacFilter"]:checked').value;
  renderVacancies(selected);
}

function openJobModal(idOrTitle) {
  const vac =
    vacanciesData.find((v) => v.id === idOrTitle) ||
    vacanciesData.find((v) => v.title === idOrTitle);
  document.getElementById("jobModalTitle").innerText = `${
    vac ? vac.title : "Vakansiya"
  } — ariza yuborish`;
  openModal("jobApplyModal");
}

function closeJobModal() {
  closeModal("jobApplyModal");
}

function handleJobApplySubmit(e) {
  e.preventDefault();
  closeJobModal();
  showToast("Arizangiz qabul qilindi! HR bo'limi tez orada bog'lanadi.", "success");
}

// --- PROMOTIONS & COUNTDOWN ---
function renderPromotions() {
  const container = document.getElementById("promoCardsContainer");
  if (!container) return;

  container.innerHTML = promotionsData
    .map(
      (p, i) => `
      <div class="spot-card animate-cardIn group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] hover:border-amber-300/30" style="animation-delay:${i * 70}ms">
        <div class="on-dark relative overflow-hidden">
          <span class="absolute left-3 top-3 z-10 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 px-2.5 py-1 text-[10px] font-extrabold text-white shadow-lg">${p.discount}</span>
          <img src="${p.image}" alt="${p.title}" loading="lazy" class="h-44 w-full object-cover opacity-90 transition duration-700 group-hover:scale-110">
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent"></div>
        </div>
        <div class="space-y-2 p-4">
          <h3 class="font-display text-sm font-bold text-white sm:text-base">${p.title}</h3>
          <p class="text-[11px] leading-relaxed text-slate-400 sm:text-xs">${p.desc}</p>
          <button onclick="switchCategory('${p.category}')" class="mt-1 w-full rounded-xl border border-amber-300/20 bg-amber-400/10 py-2 text-[11px] font-bold text-amber-200 transition hover:bg-amber-400/20">
            Aksiyani ko'rish <i class="fa-solid fa-arrow-right ml-1 text-[9px]"></i>
          </button>
        </div>
      </div>
    `
    )
    .join("");
}

function startCountdownTimer() {
  let hours = 18,
    minutes = 42,
    seconds = 15;

  setInterval(() => {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes < 0) {
      minutes = 59;
      hours--;
    }
    if (hours < 0) hours = 24;

    const pad = (n) => String(n).padStart(2, "0");
    const hEl = document.getElementById("timerHours");
    const mEl = document.getElementById("timerMinutes");
    const sEl = document.getElementById("timerSeconds");
    if (!hEl || !mEl || !sEl) return;
    hEl.innerText = pad(hours);
    mEl.innerText = pad(minutes);
    sEl.innerText = pad(seconds);
  }, 1000);
}

// --- FORMS ---
function handlePartnerSubmit(e) {
  e.preventDefault();
  showToast("Hamkorlik arizangiz yuborildi! Menejerimiz bog'lanadi.", "success");
  e.target.reset();
}

function handleB2BSubmit(e) {
  e.preventDefault();
  showToast("Tijorat taklifi so'rovi qabul qilindi!", "success");
  e.target.reset();
}

// --- AUTH ---
function openAuthModal() {
  openModal("authModal");
}

function closeAuthModal() {
  closeModal("authModal");
}

function switchAuthTab(tab) {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const tabLoginBtn = document.getElementById("tabLoginBtn");
  const tabRegisterBtn = document.getElementById("tabRegisterBtn");

  const activeCls =
    "flex-1 rounded-xl bg-gradient-to-r from-brand-500 to-fuchsia-600 py-2 text-xs font-bold text-white shadow-lg transition";
  const idleCls =
    "flex-1 rounded-xl py-2 text-xs font-bold text-slate-400 transition hover:text-white";

  if (tab === "login") {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    tabLoginBtn.className = activeCls;
    tabRegisterBtn.className = idleCls;
  } else {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    tabRegisterBtn.className = activeCls;
    tabLoginBtn.className = idleCls;
  }
}

function handleLogin(e) {
  e.preventDefault();
  const val = document.getElementById("loginInput").value;
  currentUser = val || "Foydalanuvchi";
  updateHeaderUser();
  closeAuthModal();
  showToast(`Xush kelibsiz, ${currentUser}!`, "success");
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById("regNameInput").value;
  currentUser = name || "Yangi foydalanuvchi";
  updateHeaderUser();
  closeAuthModal();
  showToast("Muvaffaqiyatli ro'yxatdan o'tdingiz!", "success");
}

function updateHeaderUser() {
  const authBtnText = document.getElementById("authBtnText");
  if (currentUser && authBtnText) authBtnText.innerText = currentUser.split(" ")[0];
}

// --- TOASTS ---
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  const icon =
    type === "success"
      ? '<span class="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-emerald-400/15 text-emerald-300"><i class="fa-solid fa-check text-[10px]"></i></span>'
      : '<span class="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-brand-500/20 text-brand-200"><i class="fa-solid fa-circle-info text-[10px]"></i></span>';

  toast.className =
    "toast-card animate-toastIn pointer-events-auto flex items-start gap-2.5 rounded-2xl border border-white/10 bg-ink-800/90 px-3.5 py-3 text-[11px] font-medium leading-snug text-slate-100 shadow-2xl backdrop-blur-xl transition duration-300";
  toast.innerHTML = `${icon}<span class="pt-0.5">${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("translate-x-4", "opacity-0");
    setTimeout(() => toast.remove(), 320);
  }, 3200);
}

function popBadge(el) {
  el.classList.remove("badge-pop");
  void el.offsetWidth;
  el.classList.add("badge-pop");
}

// --- THEME ---
const THEME_KEY = "smartmarket-theme";

function applyTheme(theme, persist = true) {
  const light = theme === "light";
  const root = document.documentElement;

  root.classList.toggle("light", light);
  root.style.colorScheme = light ? "light" : "dark";

  const icon = document.getElementById("themeIcon");
  if (icon) icon.className = light ? "fa-solid fa-moon text-lg" : "fa-solid fa-sun text-lg";

  const button = document.getElementById("themeToggle");
  if (button) {
    button.setAttribute(
      "aria-label",
      light ? "Qorong'i mavzuga o'tish" : "Yorug' mavzuga o'tish"
    );
  }

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", light ? "#f7f8fd" : "#05060d");

  if (persist) {
    try {
      localStorage.setItem(THEME_KEY, light ? "light" : "dark");
    } catch (e) {}
  }
}

function toggleTheme() {
  const root = document.documentElement;
  const next = root.classList.contains("light") ? "dark" : "light";

  root.classList.add("theme-fade");
  window.setTimeout(() => root.classList.remove("theme-fade"), 450);

  applyTheme(next);
  showToast(
    next === "light" ? "Yorug' mavzu yoqildi" : "Qorong'i mavzu yoqildi",
    "info"
  );
}

// --- MODAL HELPERS ---
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");

  const anyOpen = document.querySelector("[data-modal]:not(.hidden)");
  if (!anyOpen) document.body.style.overflow = "";
}

function initModals() {
  document.querySelectorAll("[data-modal]").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal.id);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    document
      .querySelectorAll("[data-modal]:not(.hidden)")
      .forEach((modal) => closeModal(modal.id));
  });
}

// --- SCROLL PROGRESS + HEADER STATE ---
function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  const header = document.getElementById("siteHeader");
  if (!bar) return;

  let ticking = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    bar.style.transform = `scaleX(${progress})`;
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true }
  );
  update();
}

// --- SCROLL REVEAL ---
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

// --- HERO ROTATING WORD ---
function initRotator() {
  const el = document.getElementById("rotatorWord");
  if (!el || reducedMotion) return;

  const words = (el.dataset.words || "").split("|").filter(Boolean);
  if (words.length < 2) return;

  let index = 0;
  setInterval(() => {
    el.classList.add("is-out");
    el.classList.remove("is-in");

    setTimeout(() => {
      index = (index + 1) % words.length;
      el.textContent = words[index];
      el.classList.remove("is-out");
      el.classList.add("is-in");
      setTimeout(() => el.classList.remove("is-in"), 500);
    }, 320);
  }, 3000);
}

// --- COUNT UP STATS ---
function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;

  const run = (el) => {
    const target = parseFloat(el.dataset.count) || 0;
    const decimals = parseInt(el.dataset.decimals || "0", 10);

    if (reducedMotion) {
      el.textContent = target.toLocaleString("uz-UZ", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
      return;
    }

    const duration = 1500;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = target * eased;
      el.textContent = value.toLocaleString("uz-UZ", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(run);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  counters.forEach((el) => observer.observe(el));
}

// --- HERO VITRINA (product display case) ---
const carouselData = [
  {
    title: "iPhone 15 Pro Max",
    price: "16 200 000 so'm",
    category: "Gadjetlar",
    wash: "#e7e4ff",
    specs: ["256 GB", "Titan", "2 yil kafolat"],
    image: "images/iphone-15-pro-max-titanium.jpg",
  },
  {
    title: "Samsung Galaxy S24 Ultra",
    price: "15 400 000 so'm",
    category: "Gadjetlar",
    wash: "#e3f0ff",
    specs: ["12/512 GB", "S Pen", "AMOLED"],
    image: "images/samsung-s24-ultra-titanium.jpg",
  },
  {
    title: "MacBook Pro 14 M3",
    price: "22 500 000 so'm",
    category: "Elektronika",
    wash: "#efeaff",
    specs: ["16/512 GB", "M3 chip", "14 dyuym"],
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700&auto=format&fit=crop&q=80",
  },
  {
    title: "AirPods Pro 2",
    price: "2 950 000 so'm",
    category: "Elektronika",
    wash: "#e5f7f0",
    specs: ["ANC", "Type-C", "3 soat"],
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=700&auto=format&fit=crop&q=80",
  },
  {
    title: "Robot Changyutgich Pro",
    price: "3 900 000 so'm",
    category: "Maishiy texnika",
    wash: "#fff0e3",
    specs: ["Supurish + yuvish", "Stansiya", "To'plam"],
    image: "images/robot-vacuum-kit.jpg",
  },
  {
    title: "Canon EOS R50",
    price: "9 800 000 so'm",
    category: "Elektronika",
    wash: "#e9f1ff",
    specs: ["24 MP", "4K video", "18-45mm"],
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700&auto=format&fit=crop&q=80",
  },
  {
    title: "PlayStation 5 Slim",
    price: "6 400 000 so'm",
    category: "Elektronika",
    wash: "#ecebff",
    specs: ["1 TB SSD", "4K 120 Hz", "DualSense"],
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=700&auto=format&fit=crop&q=80",
  },
  {
    title: "LG OLED TV 55\"",
    price: "11 200 000 so'm",
    category: "Maishiy texnika",
    wash: "#e8f6ff",
    specs: ["55 dyuym", "OLED", "120 Hz"],
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=700&auto=format&fit=crop&q=80",
  },
];

// The showcase styling lives here so the page markup and theme file stay untouched.
function injectVitrinaStyles() {
  if (document.getElementById("vitrinaStyles")) return;

  const style = document.createElement("style");
  style.id = "vitrinaStyles";
  style.textContent = `
      .hero-panel {
        --wash: #e7e4ff;
        position: relative;
        background: linear-gradient(180deg, #ffffff 0%, #f8f8fc 52%, #edf0f6 100%);
        border-color: rgba(15, 23, 42, 0.08);
        box-shadow: 0 45px 95px -55px rgba(15, 23, 42, 0.55);
      }
      .hero-panel::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 44%;
        height: 66%;
        width: min(46rem, 90%);
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background: radial-gradient(closest-side, var(--wash), transparent 74%);
        filter: blur(28px);
        opacity: 0.9;
        transition: background 0.7s ease;
        pointer-events: none;
        z-index: 0;
      }
      .hero-halo {
        display: none;
      }
      .hero-kicker {
        position: relative;
        z-index: 2;
        border: 0;
        background: transparent;
        padding: 0;
        color: #64748b;
        font-size: 0.56rem;
        letter-spacing: 0.28em;
      }
      .hero-kicker span {
        background: #0f172a;
        box-shadow: none;
      }
      .hero-word {
        display: none;
      }
      .carousel-scene {
        z-index: 2;
        height: clamp(12.5rem, 31vh, 17rem);
        perspective: none;
      }
      .carousel-scene::before {
        content: "";
        position: absolute;
        left: 4%;
        right: 4%;
        top: 68%;
        height: 1px;
        z-index: 0;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(15, 23, 42, 0.18) 14%,
          rgba(15, 23, 42, 0.18) 86%,
          transparent
        );
      }
      .carousel-ring {
        transform-style: flat;
      }
      .carousel-item {
        will-change: transform, opacity;
        height: clamp(6.6rem, 15vh, 9.2rem);
        width: clamp(4.8rem, 11vh, 6.8rem);
      }
      .carousel-item::before {
        display: none;
      }
      .carousel-item img {
        border-radius: 0.3rem;
        -webkit-mask-image: radial-gradient(
          ellipse 74% 74% at 50% 50%,
          #000 76%,
          rgba(0, 0, 0, 0.5) 92%,
          transparent 100%
        );
        mask-image: radial-gradient(
          ellipse 74% 74% at 50% 50%,
          #000 76%,
          rgba(0, 0, 0, 0.5) 92%,
          transparent 100%
        );
        box-shadow: 0 0 0 1px rgba(15, 23, 42, 0.07);
        filter: drop-shadow(0 14px 20px rgba(15, 23, 42, 0.2));
        animation: none;
      }
      .carousel-item.is-active img {
        filter: drop-shadow(0 22px 28px rgba(15, 23, 42, 0.24));
        animation: vitrinaFloat 7s ease-in-out infinite;
      }
      @keyframes vitrinaFloat {
        0%,
        100% {
          translate: 0 0;
        }
        50% {
          translate: 0 -6px;
        }
      }
      .carousel-floor {
        display: none;
      }
      .carousel-info {
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.1rem;
      }
      .carousel-cat {
        font-size: 0.55rem;
        font-weight: 700;
        letter-spacing: 0.3em;
        text-transform: uppercase;
        color: #94a3b8;
      }
      .carousel-info h2 {
        margin-top: 0.3rem;
        color: #0b1020;
        font-size: clamp(0.95rem, 1.9vw, 1.15rem);
        letter-spacing: 0.16em;
        text-transform: uppercase;
      }
      .carousel-info p {
        color: #475569;
        font-size: 0.74rem;
        letter-spacing: 0.08em;
      }
      .carousel-specs {
        margin-top: 0.5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.35rem;
      }
      .carousel-specs span {
        border: 1px solid rgba(15, 23, 42, 0.14);
        border-radius: 9999px;
        background: rgba(255, 255, 255, 0.75);
        padding: 0.22rem 0.62rem;
        font-size: 0.55rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #475569;
      }
      .carousel-controls {
        position: static;
      }
      .carousel-arrow {
        position: absolute;
        top: 44%;
        z-index: 4;
      }
      .carousel-arrow[data-dir="-1"] {
        left: 0.9rem;
      }
      .carousel-arrow[data-dir="1"] {
        right: 0.9rem;
      }
      .carousel-arrow {
        background: #ffffff;
        border-color: rgba(15, 23, 42, 0.12);
        color: #0f172a;
        box-shadow: 0 10px 20px -14px rgba(15, 23, 42, 0.7);
      }
      .carousel-arrow:hover {
        background: #0f172a;
        border-color: #0f172a;
        color: #ffffff;
      }
      .carousel-dots i {
        background: rgba(15, 23, 42, 0.18);
      }
      .carousel-dots i.is-on {
        background: #0f172a;
      }
      .hero-cta {
        position: relative;
        z-index: 2;
      }
      .hero-cta button:first-child {
        background: #0f172a;
        color: #ffffff;
        box-shadow: 0 22px 34px -24px rgba(15, 23, 42, 0.95);
      }
      .hero-cta button:last-child {
        background: #ffffff;
        border-color: rgba(15, 23, 42, 0.14);
        color: #0f172a;
      }
      .hero-cta button:last-child i {
        color: #b45309;
      }
      @media (max-width: 640px) {
        .carousel-scene {
          height: 12.5rem;
        }
        .hero-panel::after {
          height: 54%;
        }
        .hero-cta button:first-child,
        .hero-cta button:last-child {
          padding: 0.7rem 1rem;
          font-size: 0.76rem;
        }
      }
  `;
  document.head.appendChild(style);
}

function initCarousel() {
  const scene = document.getElementById("carouselScene");
  const ring = document.getElementById("carouselRing");
  if (!scene || !ring) return;

  const items = Array.from(ring.querySelectorAll(".carousel-item"));
  if (!items.length) return;

  injectVitrinaStyles();

  const dots = Array.from(document.querySelectorAll("#carouselDots i"));
  const titleEl = document.getElementById("carouselTitle");
  const priceEl = document.getElementById("carouselPrice");
  const infoEl = document.querySelector(".carousel-info");
  const wordEl = document.getElementById("heroWord");
  const heroScene = document.querySelector(".hero-scene") || scene;
  const count = items.length;

  const catEl = document.createElement("p");
  catEl.className = "carousel-cat";
  const specsEl = document.createElement("div");
  specsEl.className = "carousel-specs";
  if (infoEl) {
    infoEl.insertBefore(catEl, infoEl.firstChild);
    infoEl.appendChild(specsEl);
  }

  // every vitrina slot shows an electronics piece
  items.forEach((item, i) => {
    const data = carouselData[i % carouselData.length];
    const img = item.querySelector("img");
    if (img && data.image) {
      img.src = data.image;
      img.alt = data.title;
    }
  });

  let active = -1;
  let pos = 0;
  let targetIndex = 0;
  let dragging = false;
  let dragStartX = 0;
  let dragStartPos = 0;
  let paused = false;
  let autoTimer = null;
  let px = 0;
  let py = 0;
  let tpx = 0;
  let tpy = 0;
  let scrollSp = 0;
  let scrollTargetSp = 0;

  const stepSize = () => Math.min(146, Math.max(66, scene.clientWidth / 9.2));

  const readScroll = () => {
    const span = (heroScene.offsetHeight || window.innerHeight) * 0.75;
    scrollTargetSp = Math.min(1, Math.max(0, window.scrollY / span));
  };

  window.addEventListener("scroll", readScroll, { passive: true });
  window.addEventListener("resize", readScroll);
  readScroll();

  const setActive = (index) => {
    const safe = ((index % count) + count) % count;
    if (safe === active) return;
    active = safe;

    const data = carouselData[safe % carouselData.length];
    if (titleEl) titleEl.textContent = data.title;
    if (priceEl) priceEl.textContent = data.price;
    if (catEl) catEl.textContent = data.category;
    if (wordEl) wordEl.textContent = data.category;
    if (specsEl)
      specsEl.innerHTML = (data.specs || []).map((spec) => `<span>${spec}</span>`).join("");
    dots.forEach((dot, i) => dot.classList.toggle("is-on", i === safe));
    items.forEach((item, i) => item.classList.toggle("is-active", i === safe));
    heroScene.style.setProperty("--wash", data.wash || "#e7e4ff");
  };

  const paint = () => {
    const step = stepSize();
    const compact = window.innerWidth < 640;
    const height = scene.clientHeight;
    const shelf = height * 0.78;

    items.forEach((item, i) => {
      let d = ((i - pos) % count + count) % count;
      if (d > count / 2) d -= count;

      const dist = Math.abs(d);
      const centre = Math.max(0, 1 - dist);
      const scale = compact ? 0.55 + centre * 0.6 : 0.54 + centre * 0.8;

      const boxH = item.offsetHeight * scale;
      const dy = shelf - boxH / 2 - height / 2;

      item.style.transform =
        "translate(-50%, -50%) translate3d(" +
        (d * step).toFixed(2) +
        "px, " +
        dy.toFixed(2) +
        "px, 0) scale(" +
        scale.toFixed(3) +
        ")";
      item.style.opacity = dist > 3.2 ? "0" : Math.max(0.35, 1 - dist * 0.14).toFixed(3);
      item.style.zIndex = String(100 - Math.round(dist * 12));
      item.style.pointerEvents = dist > 3.2 ? "none" : "auto";
    });
  };

  const loop = () => {
    pos += (targetIndex - pos) * 0.14;
    if (Math.abs(targetIndex - pos) < 0.001) pos = targetIndex;

    px += (tpx - px) * 0.08;
    py += (tpy - py) * 0.08;
    scrollSp += (scrollTargetSp - scrollSp) * 0.1;

    ring.style.transform =
      "translate3d(" +
      (px * 16).toFixed(2) +
      "px, " +
      (py * 10 - scrollSp * 20).toFixed(2) +
      "px, 0)";

    paint();
    setActive(Math.round(pos));
    requestAnimationFrame(loop);
  };

  const startAuto = () => {
    if (autoTimer) clearInterval(autoTimer);
    if (reducedMotion) return;
    autoTimer = setInterval(() => {
      if (paused || dragging) return;
      targetIndex += 1;
    }, 4600);
  };

  const currentIndex = () => Math.round(pos);
  const shortest = (itemIndex) => {
    let d = ((itemIndex - currentIndex()) % count + count) % count;
    if (d > count / 2) d -= count;
    return d;
  };

  items.forEach((item, i) => {
    item.addEventListener("click", () => {
      const d = shortest(i);
      if (d !== 0) targetIndex = currentIndex() + d;
    });
  });

  scene.addEventListener("pointerdown", (e) => {
    dragging = true;
    paused = true;
    dragStartX = e.clientX;
    dragStartPos = pos;
    if (scene.setPointerCapture) scene.setPointerCapture(e.pointerId);
  });

  scene.addEventListener("pointermove", (e) => {
    if (dragging) {
      pos = dragStartPos - (e.clientX - dragStartX) / stepSize();
      targetIndex = pos;
      return;
    }
    const rect = scene.getBoundingClientRect();
    tpx = (e.clientX - rect.left) / rect.width - 0.5;
    tpy = (e.clientY - rect.top) / rect.height - 0.5;
  });

  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    targetIndex = Math.round(pos);
    window.setTimeout(() => {
      paused = false;
    }, 1600);
  };

  scene.addEventListener("pointerup", endDrag);
  scene.addEventListener("pointercancel", endDrag);

  scene.addEventListener("pointerleave", () => {
    tpx = 0;
    tpy = 0;
    endDrag();
  });

  document.querySelectorAll(".carousel-arrow").forEach((button) => {
    button.addEventListener("click", () => {
      targetIndex += Number(button.dataset.dir);
    });
  });

  paint();
  setActive(0);

  if (reducedMotion) return;

  loop();
  startAuto();
}

// --- CURSOR GLOW + CARD SPOTLIGHT ---
function initPointerEffects() {
  const glow = document.getElementById("cursorGlow");
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!fine || reducedMotion) return;

  document.body.classList.add("has-pointer");

  document.addEventListener(
    "mousemove",
    (e) => {
      if (glow) {
        glow.style.setProperty("--cx", `${e.clientX}px`);
        glow.style.setProperty("--cy", `${e.clientY}px`);
      }

      const card = e.target.closest(".spot-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    },
    { passive: true }
  );
}

// --- CONFETTI ---
function celebrate() {
  const layer = document.getElementById("confettiLayer");
  if (!layer || reducedMotion) return;

  const colors = ["#a78bfa", "#f0abfc", "#67e8f9", "#d4ff4f", "#fb7185", "#fcd34d"];

  for (let i = 0; i < 46; i++) {
    const piece = document.createElement("i");
    piece.className = "confetti";
    const angle = Math.random() * Math.PI * 2;
    const distance = 90 + Math.random() * 260;
    piece.style.setProperty("--tx", `${Math.cos(angle) * distance}px`);
    piece.style.setProperty("--ty", `${Math.sin(angle) * distance}px`);
    piece.style.setProperty("--r", `${Math.random() * 720 - 360}deg`);
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.15}s`;
    piece.style.height = piece.style.width = `${5 + Math.random() * 6}px`;
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 1800);
  }
}

/* =========================================================
   SmartMarket — hisoblar, promokodlar, mahsulot sahifasi
   ========================================================= */

/* ---------------- STORAGE ---------------- */
const USERS_KEY = "smartmarket-users";
const SESSION_KEY = "smartmarket-session";
const GUEST_KEY = "smartmarket-guest";

function readStore(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function writeStore(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
}

function loadUsers() {
  return readStore(USERS_KEY, {});
}

function saveUsers(users) {
  writeStore(USERS_KEY, users);
}

function guestState() {
  const guest = readStore(GUEST_KEY, { cart: [], wishlist: [], orders: [] });
  return {
    cart: guest.cart || [],
    wishlist: guest.wishlist || [],
    orders: guest.orders || [],
  };
}

function saveGuestState(patch) {
  writeStore(GUEST_KEY, { ...guestState(), ...patch });
}

// Demo darajasidagi yengil hash: parol ochiq matnda saqlanmaydi.
function hashPassword(value) {
  const salted = `sm::${value}`;
  let hash = 5381;
  for (let i = 0; i < salted.length; i++) {
    hash = ((hash << 5) + hash + salted.charCodeAt(i)) >>> 0;
  }
  return hash.toString(36);
}

const normalizeLogin = (value) => (value || "").toLowerCase().replace(/\s+/g, "");

const escapeHtml = (value) =>
  String(value == null ? "" : value).replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return map[char];
  });

function mergeCartItems(base, extra) {
  const merged = base.map((item) => ({ ...item }));
  extra.forEach((item) => {
    const found = merged.find(
      (entry) => entry.id === item.id && (entry.color || "") === (item.color || "")
    );
    if (found) found.quantity += item.quantity;
    else merged.push({ ...item });
  });
  return merged;
}

const UZ_MONTHS = [
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avgust",
  "sentabr",
  "oktabr",
  "noyabr",
  "dekabr",
];

function formatDate(iso) {
  if (!iso) return "—";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "—";
  return `${date.getDate()}-${UZ_MONTHS[date.getMonth()]}, ${date.getFullYear()}`;
}

/* ---------------- SESSION ---------------- */
function restoreSession() {
  const session = readStore(SESSION_KEY, null);
  const users = loadUsers();

  if (session && users[session]) {
    currentUser = users[session];
    currentUser.orders = currentUser.orders || [];
    currentUser.promos = currentUser.promos || [];
    cart = (currentUser.cart || []).map((item) => ({ ...item }));
    wishlist = [...(currentUser.wishlist || [])];
  } else {
    currentUser = null;
    const guest = guestState();
    cart = guest.cart.map((item) => ({ ...item }));
    wishlist = [...guest.wishlist];
  }
  appliedPromo = null;
}

function persistData() {
  if (currentUser) {
    const users = loadUsers();
    currentUser.cart = cart;
    currentUser.wishlist = wishlist;
    currentUser.updatedAt = new Date().toISOString();
    users[currentUser.login] = currentUser;
    saveUsers(users);
  } else {
    saveGuestState({ cart, wishlist });
  }
}

function completeAuth(user) {
  const guest = guestState();
  cart = mergeCartItems(user.cart || [], guest.cart);
  wishlist = Array.from(new Set([...(user.wishlist || []), ...guest.wishlist]));
  if (guest.orders.length) {
    const known = new Set((user.orders || []).map((order) => order.id));
    const fresh = guest.orders.filter((order) => !known.has(order.id));
    user.orders = [...fresh, ...(user.orders || [])];
  }

  currentUser = user;
  currentUser.cart = cart;
  currentUser.wishlist = wishlist;
  currentUser.orders = currentUser.orders || [];
  currentUser.promos = currentUser.promos || [];

  saveGuestState({ cart: [], wishlist: [], orders: [] });
  writeStore(SESSION_KEY, currentUser.login);
  persistData();

  updateHeaderUser();
  updateCartBadge();
  updateWishlistBadge();
  renderCartModal();
  renderProfile();
  closeAuthModal();
  setAuthError("");

  if (pendingCheckout) {
    pendingCheckout = false;
    openCartModal();
    showToast("Savat saqlandi — endi buyurtmani tasdiqlashingiz mumkin.", "success");
  }
}

function handleAuthButton() {
  if (currentUser) {
    renderProfile();
    switchSection("profile");
    showToast(`Xush kelibsiz, ${currentUser.name.split(" ")[0]}!`, "info");
    return;
  }
  openAuthModal();
}

function logoutUser() {
  persistData();
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (e) {}
  currentUser = null;
  cart = [];
  wishlist = [];
  appliedPromo = null;
  pendingCheckout = false;
  updateHeaderUser();
  updateCartBadge();
  updateWishlistBadge();
  renderCartModal();
  renderProfile();
  showToast("Hisobdan chiqdingiz. Ma'lumotlaringiz saqlandi.", "info");
  switchSection("products");
}

function setAuthError(message) {
  const el = document.getElementById("authError");
  if (!el) return;
  el.textContent = message || "";
  el.classList.toggle("hidden", !message);
}

function updateHeaderUser() {
  const btnText = document.getElementById("authBtnText");
  const btn = document.getElementById("authHeaderBtn");
  if (btnText) btnText.innerText = currentUser ? currentUser.name.split(" ")[0] : "Kirish";
  if (btn) {
    btn.title = currentUser ? `${currentUser.name} — buyurtmalarim` : "Kirish yoki ro'yxatdan o'tish";
    btn.classList.toggle("is-authed", Boolean(currentUser));
  }
}

/* ---------------- AUTH HANDLERS ---------------- */
function handleLogin(e) {
  e.preventDefault();
  setAuthError("");
  const loginRaw = document.getElementById("loginInput")?.value || "";
  const password = document.getElementById("loginPasswordInput")?.value || "";
  const login = normalizeLogin(loginRaw);

  if (!login || !password) {
    setAuthError("Telefon/email va parolni kiriting.");
    return;
  }

  const users = loadUsers();
  const user = users[login];
  if (!user) {
    setAuthError("Bunday hisob topilmadi. Ro'yxatdan o'tish bo'limiga o'ting.");
    showToast("Hisob topilmadi — ro'yxatdan o'ting.", "info");
    switchAuthTab("register");
    return;
  }

  if (user.passHash !== hashPassword(password)) {
    setAuthError("Parol noto'g'ri. Qayta urinib ko'ring.");
    showToast("Parol noto'g'ri.", "info");
    return;
  }

  completeAuth(user);
  notifyAccount("login", currentUser);
  showToast(`Xush kelibsiz, ${currentUser.name.split(" ")[0]}! Savat va buyurtmalar tiklandi.`, "success");
}

function handleRegister(e) {
  e.preventDefault();
  setAuthError("");
  const name = (document.getElementById("regNameInput")?.value || "").trim();
  const loginRaw = document.getElementById("regPhoneInput")?.value || "";
  const password = document.getElementById("regPasswordInput")?.value || "";
  const login = normalizeLogin(loginRaw);

  if (name.length < 2) {
    setAuthError("Ismingizni to'liq kiriting.");
    return;
  }
  if (login.length < 5) {
    setAuthError("Telefon raqam yoki emailni to'liq kiriting.");
    return;
  }
  if (password.length < 4) {
    setAuthError("Parol kamida 4 belgidan iborat bo'lsin.");
    return;
  }

  const users = loadUsers();
  if (users[login]) {
    setAuthError("Bu raqam/email allaqachon ro'yxatdan o'tgan. Kirish bo'limidan foydalaning.");
    showToast("Bu hisob mavjud — kirish bo'limiga o'tildi.", "info");
    switchAuthTab("login");
    document.getElementById("loginInput").value = loginRaw;
    return;
  }

  const guest = guestState();
  const user = {
    name,
    login,
    phone: loginRaw.trim(),
    passHash: hashPassword(password),
    cart: mergeCartItems(cart, []),
    wishlist: [...wishlist],
    orders: guest.orders,
    promos: [],
    createdAt: new Date().toISOString(),
  };

  users[login] = user;
  saveUsers(users);
  completeAuth(user);
  notifyAccount("register", user);
  showToast("Ro'yxatdan o'tdingiz! Ma'lumotlaringiz saqlanadi.", "success");
  renderProfile();
}

/* ---------------- EGASIGA XABAR ----------------
   Yangi ro'yxatdan o'tish va hisobga kirishlar do'kon egasiga
   email orqali yuboriladi (FormSubmit — API kalit kerak emas).
   Birinchi xatdagi "Activate Form" havolasini bir marta bosish kerak.
   -------------------------------------------------- */
const OWNER_EMAIL = "mirkomilovmirsobir@gmail.com";
const OWNER_PHONE = "+998 94 848 78 68";
const ACCOUNT_LOG_KEY = "smartmarket-account-log";

function logAccountEvent(type, user) {
  const entry = {
    type: type,
    name: user.name || "",
    login: user.login || "",
    phone: user.phone || "",
    at: new Date().toISOString(),
  };
  const log = readStore(ACCOUNT_LOG_KEY, []);
  log.unshift(entry);
  writeStore(ACCOUNT_LOG_KEY, log.slice(0, 100));
  return entry;
}

function sendOwnerEmail(subject, fields) {
  try {
    fetch("https://formsubmit.co/ajax/" + OWNER_EMAIL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(
        Object.assign(
          {
            _subject: subject,
            _template: "table",
            _captcha: "false",
            Dorkon: "SmartMarket",
            "Egasi telefoni": OWNER_PHONE,
          },
          fields
        )
      ),
    }).catch(() => {});
  } catch (error) {}
}

function notifyAccount(type, user) {
  const entry = logAccountEvent(type, user);
  sendOwnerEmail(
    type === "register"
      ? "SmartMarket: yangi ro'yxatdan o'tish"
      : "SmartMarket: hisobga kirish",
    {
      Holat: type === "register" ? "Yangi ro'yxatdan o'tdi" : "Hisobga kirdi",
      Ism: entry.name,
      "Login (telefon/email)": entry.login,
      Vaqt: new Date(entry.at).toLocaleString("uz-UZ"),
      Qurilma: navigator.userAgent,
    }
  );
}

/* ---------------- CART + PROMO ---------------- */
let appliedPromo = null;

function cartTotals() {
  let subtotal = 0;
  let discount = 0;

  cart.forEach((item) => {
    const product = productsData.find((p) => p.id === item.id);
    if (!product) return;
    const line = product.price * item.quantity;
    subtotal += line;
    if (appliedPromo && (appliedPromo.scope === "all" || appliedPromo.scope === product.category)) {
      discount += Math.round((line * appliedPromo.percent) / 100);
    }
  });

  return { subtotal, discount, total: Math.max(0, subtotal - discount) };
}

function addToCart(productId, color, event) {
  if (event && event.stopPropagation) event.stopPropagation();
  const product = productsData.find((p) => p.id === productId);
  if (!product) return false;
  if (
    !requireAuth("Savatga qo'shish uchun avval kiring yoki ro'yxatdan o'ting.")
  ) {
    return false;
  }

  const colorName = color || "";
  const existing = cart.find(
    (item) => item.id === productId && (item.color || "") === colorName
  );
  if (existing) existing.quantity += 1;
  else cart.push({ id: productId, quantity: 1, color: colorName });

  persistData();
  updateCartBadge();
  showToast(
    `"${product.title.substring(0, 24)}..."${colorName ? ` (${colorName})` : ""} savatga qo'shildi`,
    "success"
  );
  return true;
}

function changeCartQty(index, delta) {
  const item = cart[index];
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) cart.splice(index, 1);
  persistData();
  updateCartBadge();
  renderCartModal();
}

function removeCartItem(index) {
  if (!cart[index]) return;
  cart.splice(index, 1);
  persistData();
  updateCartBadge();
  renderCartModal();
}

// eski inline chaqiruvlar uchun moslik
function updateCartQuantity(productId, delta, color) {
  const index = cart.findIndex(
    (item) => item.id === productId && (item.color || "") === (color || "")
  );
  if (index === -1) return;
  changeCartQty(index, delta);
}

function toggleWishlist(productId, event) {
  if (event && event.stopPropagation) event.stopPropagation();
  if (!requireAuth("Sevimlilarga qo'shish uchun avval kiring yoki ro'yxatdan o'ting.")) return;
  const product = productsData.find((p) => p.id === productId);
  if (!product) return;

  const index = wishlist.indexOf(productId);
  if (index === -1) {
    wishlist.push(productId);
    showToast(`"${product.title.substring(0, 22)}..." sevimlilarga qo'shildi`, "success");
  } else {
    wishlist.splice(index, 1);
    showToast("Mahsulot sevimlilardan olib tashlandi", "info");
  }

  persistData();
  updateWishlistBadge();
  renderProducts();
  if (!document.getElementById("wishlistModal")?.classList.contains("hidden")) {
    renderWishlistModal();
  }
  if (
    activeDetailId &&
    !document.getElementById("productDetailModal")?.classList.contains("hidden")
  ) {
    renderProductDetail();
  }
}

function promoScopeLabel(scope) {
  if (scope === "all") return "barcha mahsulotlar";
  const category = categoriesData.find((c) => c.id === scope);
  return category ? category.title.toLowerCase() : scope;
}

function applyPromoCode() {
  const input = document.getElementById("promoInput");
  const code = (input?.value || "").trim().toUpperCase();
  if (!code) {
    showToast("Promokodni kiriting.", "info");
    return;
  }
  const promo = promoCodes.find((p) => p.code === code);
  if (!promo) {
    showToast("Bunday promokod topilmadi. Ro'yxatdagi kodlarni sinab ko'ring.", "info");
    return;
  }
  if (!cart.length) {
    showToast("Avval savatga mahsulot qo'shing.", "info");
    return;
  }
  const eligible = cart.some((item) => {
    const product = productsData.find((p) => p.id === item.id);
    return product && (promo.scope === "all" || promo.scope === product.category);
  });
  if (!eligible) {
    showToast(`${promo.code} faqat ${promoScopeLabel(promo.scope)} uchun amal qiladi.`, "info");
    return;
  }

  appliedPromo = promo;
  if (input) input.value = "";
  renderCartModal();
  showToast(`${promo.code} qo'llanildi — ${promo.label}`, "success");
}

function quickApplyPromo(code) {
  const input = document.getElementById("promoInput");
  if (input) input.value = code;
  applyPromoCode();
}

function removePromoCode() {
  appliedPromo = null;
  renderCartModal();
  showToast("Promokod olib tashlandi.", "info");
}

function updateCartTotalsUI(totals) {
  const subtotalEl = document.getElementById("cartSubtotal");
  const discountRow = document.getElementById("cartDiscountRow");
  const discountValue = document.getElementById("cartDiscountValue");
  const discountLabel = document.getElementById("cartDiscountLabel");
  const totalEl = document.getElementById("cartTotalPrice");
  const promoMessage = document.getElementById("promoMessage");
  const promoHints = document.getElementById("promoHints");

  if (subtotalEl) subtotalEl.textContent = money(totals.subtotal);
  if (discountRow) discountRow.classList.toggle("hidden", totals.discount <= 0);
  if (discountValue) discountValue.textContent = `−${money(totals.discount)}`;
  if (discountLabel)
    discountLabel.textContent = appliedPromo
      ? `Chegirma (${appliedPromo.code} · −${appliedPromo.percent}%)`
      : "Chegirma";
  if (totalEl) totalEl.textContent = money(totals.total);

  if (promoMessage) {
    promoMessage.innerHTML = appliedPromo
      ? `<span class="promo-applied"><i class="fa-solid fa-ticket"></i> ${appliedPromo.code} qo'llandi · −${appliedPromo.percent}% <button type="button" onclick="removePromoCode()" aria-label="Promokodni olib tashlash">×</button></span>`
      : "";
  }

  if (promoHints) {
    promoHints.innerHTML = promoCodes
      .map(
        (promo) =>
          `<button type="button" class="promo-chip${
            appliedPromo && appliedPromo.code === promo.code ? " is-on" : ""
          }" onclick="quickApplyPromo('${promo.code}')" title="${escapeHtml(promo.label)}">${promo.code} · −${promo.percent}%</button>`
      )
      .join("");
  }
}

function renderCartModal() {
  const container = document.getElementById("cartItemsContainer");
  if (!container) return;
  syncCheckoutUI();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="py-10 text-center">
        <i class="fa-solid fa-cart-arrow-down mb-3 text-3xl text-slate-600"></i>
        <p class="text-sm font-semibold text-slate-300">Savat bo'sh</p>
        <p class="mt-1 text-xs text-slate-500">Xaridni boshlash uchun katalogga qayting.</p>
      </div>
    `;
    updateCartTotalsUI(cartTotals());
    return;
  }

  container.innerHTML = cart
    .map((cartItem, index) => {
      const product = productsData.find((p) => p.id === cartItem.id);
      if (!product) return "";
      return `
        <div class="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
          <div class="flex min-w-0 items-center gap-3">
            <img src="${product.image}" class="h-12 w-12 shrink-0 rounded-xl object-cover" alt="">
            <div class="min-w-0">
              <h4 class="truncate text-xs font-semibold text-white">${escapeHtml(product.title)}</h4>
              ${
                cartItem.color
                  ? `<p class="text-[10px] font-medium text-slate-400">Rang: ${escapeHtml(cartItem.color)}</p>`
                  : ""
              }
              <p class="text-[11px] font-bold text-lime-300">${money(product.price)}</p>
            </div>
          </div>
          <div class="flex shrink-0 items-center gap-2">
            <div class="flex items-center rounded-xl border border-white/10 bg-white/[0.04]">
              <button onclick="changeCartQty(${index}, -1)" aria-label="Kamaytirish" class="px-2.5 py-1.5 text-xs text-slate-300 transition hover:text-white">−</button>
              <span class="px-1 text-xs font-bold text-white">${cartItem.quantity}</span>
              <button onclick="changeCartQty(${index}, 1)" aria-label="Ko'paytirish" class="px-2.5 py-1.5 text-xs text-slate-300 transition hover:text-white">+</button>
            </div>
            <button onclick="removeCartItem(${index})" aria-label="O'chirish" class="grid h-8 w-8 place-items-center rounded-xl text-slate-500 transition hover:bg-white/5 hover:text-rose-400">
              <i class="fa-solid fa-trash text-[11px]"></i>
            </button>
          </div>
        </div>
      `;
    })
    .join("");

  updateCartTotalsUI(cartTotals());
}

function checkoutSimulation() {
  if (!currentUser) {
    startGuestCheckout();
    return;
  }

  if (cart.length === 0) {
    showToast("Savat bo'sh. Avval mahsulot tanlang.", "info");
    return;
  }

  const totals = cartTotals();
  const order = {
    id: `SM-${Math.floor(100000 + Math.random() * 900000)}`,
    date: new Date().toISOString(),
    status: "Qabul qilindi",
    promo: appliedPromo ? appliedPromo.code : null,
    subtotal: totals.subtotal,
    discount: totals.discount,
    total: totals.total,
    items: cart.map((item) => {
      const product = productsData.find((p) => p.id === item.id);
      return {
        id: item.id,
        title: product ? product.title : "Mahsulot",
        price: product ? product.price : 0,
        quantity: item.quantity,
        color: item.color || "",
      };
    }),
  };

  if (currentUser) {
    currentUser.orders = [order, ...(currentUser.orders || [])];
    if (appliedPromo) {
      currentUser.promos = Array.from(new Set([...(currentUser.promos || []), appliedPromo.code]));
    }
  } else {
    saveGuestState({ orders: [order, ...guestState().orders] });
  }

  cart = [];
  appliedPromo = null;
  persistData();
  updateCartBadge();
  renderCartModal();
  renderProfile();
  closeCartModal();
  celebrate();
  showToast(
    `Buyurtma ${order.id} qabul qilindi! Holatni "Buyurtmalarim" bo'limida kuzatishingiz mumkin.`,
    "success"
  );
}

/* ---------------- PRODUCT GRID ---------------- */
function renderProductsGrid(items) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  const countEl = document.getElementById("productCountText");
  if (countEl) countEl.innerText = `Topildi: ${items.length} ta mahsulot`;

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full rounded-3xl border border-dashed border-white/10 bg-white/[0.02] py-16 text-center">
        <i class="fa-solid fa-box-open mb-3 text-3xl text-slate-600"></i>
        <p class="text-sm font-semibold text-slate-300">Hech narsa topilmadi</p>
        <p class="mt-1 text-xs text-slate-500">Boshqa so'z bilan qidirib ko'ring yoki kategoriyani o'zgartiring.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items
    .map((product, index) => {
      const isWishlisted = wishlist.includes(product.id);
      const discount = product.oldPrice
        ? Math.round((1 - product.price / product.oldPrice) * 100)
        : 0;

      return `
        <article onclick="openProductDetail(${product.id})" tabindex="0" role="button"
                 onkeydown="if (event.key === 'Enter') openProductDetail(${product.id})"
                 class="spot-card animate-cardIn group flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-card backdrop-blur-xl hover:-translate-y-1.5 hover:border-white/25"
                 style="animation-delay:${index * 45}ms">
          <div class="on-dark relative overflow-hidden">
            <img src="${product.image}" alt="${escapeHtml(product.title)}" loading="lazy"
                 class="h-40 w-full object-cover opacity-90 transition duration-700 group-hover:scale-110 group-hover:opacity-100 sm:h-44">
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/15 to-transparent"></div>

            <div class="absolute left-2.5 top-2.5 z-10 flex flex-col gap-1.5">
              ${product.isNew ? '<span class="rounded-full bg-lime-300 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-ink-950">Yangi</span>' : ""}
              ${discount > 0 ? `<span class="rounded-full border border-white/15 bg-ink-950/70 px-2 py-0.5 text-[9px] font-bold text-rose-300 backdrop-blur">-${discount}%</span>` : ""}
            </div>

            <button onclick="toggleWishlist(${product.id}, event)" aria-label="Sevimlilarga qo'shish"
                    class="absolute right-2.5 top-2.5 z-10 grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-ink-950/50 text-slate-300 backdrop-blur-md transition hover:scale-110 hover:text-rose-400">
              <i class="${isWishlisted ? "fa-solid fa-heart text-rose-400" : "fa-regular fa-heart"} text-xs"></i>
            </button>

            <span class="card-detail-pill">Batafsil</span>
          </div>

          <div class="flex flex-grow flex-col gap-3 p-3.5">
            <div class="flex items-center gap-1 text-[10px] font-semibold text-amber-300">
              <i class="fa-solid fa-star text-[9px]"></i>
              <span>${product.rating}</span>
              <span class="font-normal text-slate-500">(${product.reviews})</span>
            </div>
            <h3 class="line-clamp-2 text-[11px] font-semibold leading-snug text-slate-200 transition group-hover:text-white sm:text-xs">${escapeHtml(product.title)}</h3>

            <div class="mt-auto">
              <p class="font-display text-sm font-extrabold text-white sm:text-[15px]">${money(product.price)}</p>
              ${product.oldPrice ? `<p class="text-[10px] text-slate-500 line-through">${money(product.oldPrice)}</p>` : ""}
              <button onclick="addToCart(${product.id}, '', event)"
                      class="card-add-btn mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] py-2 text-[11px] font-bold text-slate-200 transition hover:border-transparent hover:bg-gradient-to-r hover:from-brand-500 hover:to-fuchsia-600 hover:text-white active:scale-[.98]">
                <i class="fa-solid fa-cart-plus text-[10px]"></i> Savatga
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

/* ---------------- HERO CATEGORY CARDS ---------------- */
function renderHeroCategories() {
  const host = document.getElementById("heroCategories");
  if (!host) return;

  const picks = categoriesData
    .map((category) => {
      const product =
        productsData.find((p) => p.category === category.id && p.heroPick) ||
        productsData.find((p) => p.category === category.id);
      return { category, product };
    })
    .filter((entry) => entry.product);

  host.innerHTML = `
    <div class="hero-cats-head">
      <span>Har kategoriyadan tanlov</span>
      <span class="hero-cats-hint">mahsulotni bosing</span>
    </div>
    <div class="hero-cats-grid">
      ${picks
        .map(
          ({ category, product }) => `
        <button type="button" class="hero-cat-card" onclick="openProductDetail(${product.id})"
                aria-label="${escapeHtml(category.title)}: ${escapeHtml(product.title)}">
          <span class="hero-cat-thumb"><img src="${product.image}" alt="" loading="lazy"></span>
          <span class="hero-cat-body">
            <span class="hero-cat-label"><i class="fa-solid ${category.icon}"></i> ${category.title}</span>
            <span class="hero-cat-name">${escapeHtml(product.title)}</span>
            <span class="hero-cat-price">${money(product.price)}</span>
          </span>
          <i class="fa-solid fa-arrow-up-right-from-square hero-cat-go"></i>
        </button>
      `
        )
        .join("")}
    </div>
  `;
}

/* ---------------- "XARIDNI BOSHLASH" ---------------- */
function startShopping() {
  const productsSection = document.getElementById("section-products");
  const wasHidden = productsSection ? productsSection.classList.contains("hidden") : false;

  currentCategory = "all";
  const select = document.getElementById("categorySelectFilter");
  if (select) select.value = "all";
  const search = document.getElementById("searchInput");
  if (search) search.value = "";
  document.querySelectorAll(".nav-cat-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.cat === "all");
  });
  const titleEl = document.getElementById("currentCategoryTitle");
  if (titleEl) titleEl.innerText = "Barcha Mahsulotlar";

  renderProducts();
  if (wasHidden) switchSection("products");

  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const top = grid.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: Math.max(0, top), behavior: reducedMotion ? "auto" : "smooth" });

  grid.classList.remove("catalog-bump");
  void grid.offsetWidth;
  grid.classList.add("catalog-bump");
  showToast("Katalog ochildi — mahsulotni tanlang.", "info");
}

/* ---------------- PRODUCT DETAIL ---------------- */
let activeDetailId = null;
let detailImageIndex = 0;
let detailColorIndex = 0;

const starsMarkup = (rating) =>
  Array.from(
    { length: 5 },
    (_, i) => `<i class="fa-${i < Math.round(rating) ? "solid" : "regular"} fa-star"></i>`
  ).join("");

function openProductDetail(productId) {
  const product = productsData.find((p) => p.id === productId);
  if (!product) return;

  activeDetailId = product.id;
  detailImageIndex = 0;
  detailColorIndex = 0;

  renderProductDetail();
  openModal("productDetailModal");
  const body = document.getElementById("productDetailBody");
  if (body) body.scrollTop = 0;
}

function closeProductDetail() {
  closeModal("productDetailModal");
}

function renderProductDetail() {
  const product = productsData.find((p) => p.id === activeDetailId);
  const body = document.getElementById("productDetailBody");
  if (!product || !body) return;

  const category = categoriesData.find((c) => c.id === product.category);
  const promo = promoCodes.find((p) => p.scope === product.category);
  const reviewsList = getProductReviews(product);
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;
  const colors = product.colors && product.colors.length ? product.colors : [{ name: "Standart", hex: "#cbd5e1" }];
  if (detailColorIndex >= colors.length) detailColorIndex = 0;
  const activeColor = colors[detailColorIndex];

  const titleBar = document.getElementById("detailTitleBar");
  const topCategory = document.getElementById("detailTopCategory");
  if (titleBar) titleBar.textContent = product.title;
  if (topCategory) topCategory.innerHTML = `<i class="fa-solid ${category ? category.icon : "fa-box"}"></i> ${category ? category.title : ""}`;

  body.innerHTML = `
    <div class="detail-grid">
      <div class="detail-gallery">
        <div class="detail-main">
          <img id="detailMainImage" src="${product.images[detailImageIndex] || product.image}" alt="${escapeHtml(product.title)}">
          ${discount > 0 ? `<span class="detail-badge">−${discount}%</span>` : ""}
        </div>
        <div class="detail-thumbs">
          ${product.images
            .map(
              (src, i) => `
            <button type="button" class="detail-thumb${i === detailImageIndex ? " is-active" : ""}" onclick="selectDetailImage(${i})" aria-label="${i + 1}-rasm">
              <img src="${src}" alt="">
            </button>`
            )
            .join("")}
        </div>
      </div>

      <div class="detail-info">
        <div class="detail-rating">
          <span class="detail-stars">${starsMarkup(product.rating)}</span>
          <strong>${product.rating}</strong>
          <button type="button" class="detail-reviews-link" onclick="document.getElementById('detailReviews')?.scrollIntoView({ behavior: 'smooth', block: 'start' })">
            ${product.reviews} sharh
          </button>
        </div>

        <h2 class="detail-name">${escapeHtml(product.title)}</h2>
        <p class="detail-brand">${escapeHtml(product.brand || "SmartMarket")} · Rasmiy kafolat</p>

        <div class="detail-price-row">
          <span class="detail-price">${money(product.price)}</span>
          ${product.oldPrice ? `<span class="detail-old">${money(product.oldPrice)}</span>` : ""}
        </div>

        <p class="detail-desc">${escapeHtml(product.description)}</p>

        <div class="detail-block">
          <div class="detail-block-head">
            <span>Rang tanlang</span>
            <strong id="detailColorName">${escapeHtml(activeColor.name)}</strong>
          </div>
          <div class="detail-colors">
            ${colors
              .map(
                (color, i) => `
              <button type="button" class="color-dot${i === detailColorIndex ? " is-active" : ""}"
                      style="--dot:${color.hex}" onclick="selectDetailColor(${i})"
                      aria-label="${escapeHtml(color.name)}" title="${escapeHtml(color.name)}"></button>`
              )
              .join("")}
          </div>
        </div>

        <div class="detail-specs">
          ${product.specs.map((spec) => `<span>${escapeHtml(spec)}</span>`).join("")}
        </div>

        ${
          promo
            ? `<button type="button" class="detail-promo" onclick="quickApplyPromo('${promo.code}'); closeProductDetail(); openCartModal();">
                 <i class="fa-solid fa-ticket"></i>
                 <span><strong>${promo.code}</strong> promokodi bilan −${promo.percent}% tejang</span>
                 <i class="fa-solid fa-arrow-right"></i>
               </button>`
            : ""
        }

        <div class="detail-perks">
          <span><i class="fa-solid fa-truck-fast"></i> Bepul yetkazish</span>
          <span><i class="fa-solid fa-rotate-left"></i> 14 kun qaytarish</span>
          <span><i class="fa-solid fa-shield-halved"></i> 2 yil kafolat</span>
        </div>

        <div class="detail-reviews" id="detailReviews">
          <div class="detail-block-head">
            <span>Sharhlar</span>
            <strong>${product.rating} / 5</strong>
          </div>
          <div class="detail-reviews-list">
            ${reviewsList
              .map(
                (review) => `
              <article class="review-item">
                <div class="review-head">
                  <span class="review-avatar">${escapeHtml(
                    review.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                  )}</span>
                  <div class="min-w-0">
                    <p class="review-name">${escapeHtml(review.name)}</p>
                    <p class="review-date">${escapeHtml(review.date)}</p>
                  </div>
                  <span class="review-stars">${starsMarkup(review.rating)}</span>
                </div>
                <p class="review-text">${escapeHtml(review.text)}</p>
              </article>`
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  `;

  const footerPrice = document.getElementById("detailFooterPrice");
  const footerColor = document.getElementById("detailFooterColor");
  if (footerPrice) footerPrice.textContent = money(product.price);
  if (footerColor) footerColor.textContent = activeColor.name;
}

function selectDetailImage(index) {
  const product = productsData.find((p) => p.id === activeDetailId);
  if (!product || !product.images[index]) return;
  detailImageIndex = index;

  const mainImage = document.getElementById("detailMainImage");
  if (mainImage) mainImage.src = product.images[index];
  document.querySelectorAll(".detail-thumb").forEach((thumb, i) => {
    thumb.classList.toggle("is-active", i === index);
  });
}

function selectDetailColor(index) {
  const product = productsData.find((p) => p.id === activeDetailId);
  if (!product) return;
  const colors = product.colors && product.colors.length ? product.colors : [{ name: "Standart", hex: "#cbd5e1" }];
  if (!colors[index]) return;

  detailColorIndex = index;
  const nameEl = document.getElementById("detailColorName");
  const footerColor = document.getElementById("detailFooterColor");
  if (nameEl) nameEl.textContent = colors[index].name;
  if (footerColor) footerColor.textContent = colors[index].name;

  document.querySelectorAll(".detail-colors .color-dot").forEach((dot, i) => {
    dot.classList.toggle("is-active", i === index);
  });

  if (product.images[index]) selectDetailImage(index);
}

function addDetailToCart() {
  const product = productsData.find((p) => p.id === activeDetailId);
  if (!product) return;
  const colors = product.colors && product.colors.length ? product.colors : [{ name: "Standart" }];
  addToCart(product.id, colors[detailColorIndex].name);
}

function buyNow() {
  addDetailToCart();
  closeProductDetail();
  openCartModal();
}

/* ---------------- PROFILE / ORDERS ---------------- */
function renderProfile() {
  const body = document.getElementById("profileBody");
  if (!body) return;
  const titleEl = document.getElementById("profileTitle");
  const subEl = document.getElementById("profileSubtitle");

  if (!currentUser) {
    if (titleEl) titleEl.textContent = "Mening hisobim";
    if (subEl)
      subEl.textContent =
        "Hisobingizga kiring — savat, sevimlilar va buyurtmalar hisobingizda saqlanadi.";
    body.innerHTML = `
      <div class="profile-guest">
        <div class="profile-guest-icon"><i class="fa-regular fa-user"></i></div>
        <h3>Hali hisobingizga kirmadingiz</h3>
        <p>Ro'yxatdan o'tsangiz savat, sevimli mahsulotlar, promokodlar va barcha buyurtmalar saqlanadi. Keyingi kirishda hammasi joyida bo'ladi.</p>
        <div class="profile-guest-actions">
          <button type="button" onclick="openAuthModal()" class="profile-primary">
            <i class="fa-solid fa-right-to-bracket"></i> Kirish
          </button>
          <button type="button" onclick="openAuthModal(); switchAuthTab('register')" class="profile-ghost">
            Ro'yxatdan o'tish
          </button>
        </div>
      </div>
    `;
    return;
  }

  const orders = currentUser.orders || [];
  const promosUsed = currentUser.promos || [];
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const memberSince = formatDate(currentUser.createdAt);
  const initials = currentUser.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  const orderMarkup = (order) => `
    <article class="order-card">
      <div class="order-head">
        <div>
          <p class="order-id">${escapeHtml(order.id)}</p>
          <p class="order-date">${formatDate(order.date)}</p>
        </div>
        <span class="order-status">${escapeHtml(order.status || "Qabul qilindi")}</span>
      </div>
      <div class="order-items">
        ${order.items
          .map(
            (item) => `
          <div class="order-item">
            <span>${escapeHtml(item.title)}${item.color ? ` · ${escapeHtml(item.color)}` : ""}</span>
            <span>${item.quantity} × ${money(item.price)}</span>
          </div>`
          )
          .join("")}
      </div>
      <div class="order-foot">
        <span>${
          order.promo
            ? `<i class="fa-solid fa-ticket"></i> ${escapeHtml(order.promo)} · −${money(order.discount)}`
            : "Promokodsiz"
        }</span>
        <strong>${money(order.total)}</strong>
      </div>
    </article>
  `;

  if (titleEl) titleEl.textContent = `Salom, ${currentUser.name.split(" ")[0]}!`;
  if (subEl) subEl.textContent = "Buyurtmalar, promokodlar va saqlangan ma'lumotlaringiz shu yerda.";

  body.innerHTML = `
    <div class="profile-card">
      <div class="profile-card-top">
        <div class="profile-avatar">${escapeHtml(initials || "SM")}</div>
        <div class="min-w-0">
          <h3>${escapeHtml(currentUser.name)}</h3>
          <p>${escapeHtml(currentUser.phone || currentUser.login)}</p>
        </div>
        <button type="button" onclick="logoutUser()" class="profile-logout">
          <i class="fa-solid fa-arrow-right-from-bracket"></i> Chiqish
        </button>
      </div>
      <div class="profile-stats">
        <div class="profile-stat"><strong>${orders.length}</strong><span>Buyurtma</span></div>
        <div class="profile-stat"><strong>${wishlist.length}</strong><span>Sevimli</span></div>
        <div class="profile-stat"><strong>${cartCount}</strong><span>Savatda</span></div>
        <div class="profile-stat"><strong>${promosUsed.length}</strong><span>Promokod</span></div>
      </div>
      <p class="profile-note">
        <i class="fa-solid fa-circle-check"></i>
        Ma'lumotlar shu qurilmada saqlanadi · Ro'yxatdan o'tgan sana: ${memberSince}
      </p>
    </div>

    <div class="profile-block">
      <div class="profile-block-head">
        <h3>Buyurtmalar tarixi</h3>
        <span>${orders.length} ta yozuv</span>
      </div>
      ${
        orders.length
          ? orders.map(orderMarkup).join("")
          : `<p class="profile-empty">Hozircha buyurtma yo'q. Savatni to'ldirib "Buyurtmani rasmiylashtirish" tugmasini bosing — buyurtma shu yerda paydo bo'ladi.</p>`
      }
    </div>

    <div class="profile-block">
      <div class="profile-block-head">
        <h3>Promokodlar</h3>
        <span>savatda qo'llaniladi</span>
      </div>
      <div class="profile-promos">
        ${promoCodes
          .map(
            (promo) => `
          <div class="profile-promo">
            <div>
              <strong>${promo.code}</strong>
              <span>${escapeHtml(promo.label)}</span>
            </div>
            ${
              promosUsed.includes(promo.code)
                ? '<span class="profile-promo-used">ishlatilgan</span>'
                : `<button type="button" onclick="switchSection('products'); openCartModal(); quickApplyPromo('${promo.code}')">ishlatish</button>`
            }
          </div>`
          )
          .join("")}
      </div>
    </div>
  `;
}

/* ---------------- SECTION SWITCHER ---------------- */
function switchSection(sectionName) {
  const sections = ["products", "vacancies", "promotions", "about", "b2b", "profile"];
  sections.forEach((sec) => {
    const el = document.getElementById(`section-${sec}`);
    if (el) el.classList.add("hidden");
  });

  const activeEl = document.getElementById(`section-${sectionName}`);
  if (activeEl) {
    activeEl.classList.remove("hidden");
    activeEl.classList.remove("section-in");
    void activeEl.offsetWidth;
    activeEl.classList.add("section-in");
  }

  if (sectionName === "profile") renderProfile();

  window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
}

/* ---------------- MARKUP GUARD ----------------
   Sayt eski index.html bilan ham ishlashi uchun kerakli
   bo'limlar/oynalar bo'lmasa, ular shu yerda quriladi.
   ------------------------------------------------- */
function ensureAuthFields() {
  const loginPass =
    document.getElementById("loginPasswordInput") ||
    document.querySelector('#loginForm input[type="password"]');
  if (loginPass) {
    loginPass.id = "loginPasswordInput";
    loginPass.setAttribute("autocomplete", "current-password");
  }

  const regPhone =
    document.getElementById("regPhoneInput") ||
    document.querySelector('#registerForm input[type="tel"]') ||
    document.querySelectorAll("#registerForm input")[1];
  if (regPhone) {
    regPhone.id = "regPhoneInput";
    regPhone.type = "text";
    regPhone.setAttribute("autocomplete", "username");
  }

  const regPass =
    document.getElementById("regPasswordInput") ||
    document.querySelector('#registerForm input[type="password"]');
  if (regPass) {
    regPass.id = "regPasswordInput";
    regPass.setAttribute("autocomplete", "new-password");
  }

  if (!document.getElementById("authError")) {
    const subtitle = document.querySelector("#authModal h2 + p");
    if (subtitle) {
      const error = document.createElement("p");
      error.id = "authError";
      error.className = "auth-error mt-3 hidden";
      subtitle.insertAdjacentElement("afterend", error);
    }
  }
}

function ensureCartPromoUI() {
  const total = document.getElementById("cartTotalPrice");
  if (!total || document.getElementById("promoInput")) return;

  const totalRow = total.closest("div");
  if (!totalRow || !totalRow.parentElement) return;

  const box = document.createElement("div");
  box.className = "promo-box";
  box.innerHTML = `
    <div class="promo-box-head"><i class="fa-solid fa-ticket"></i> Promokod</div>
    <div class="promo-form">
      <input id="promoInput" class="promo-input" type="text" placeholder="Masalan: SMART10" autocomplete="off" />
      <button type="button" class="promo-apply" onclick="applyPromoCode()">Qo'llash</button>
    </div>
    <p id="promoMessage" class="promo-msg"></p>
    <div id="promoHints" class="promo-hints"></div>`;

  const subtotalRow = document.createElement("div");
  subtotalRow.className = "cart-total-row";
  subtotalRow.innerHTML = `<span>Mahsulotlar</span><span id="cartSubtotal">0 so'm</span>`;

  const discountRow = document.createElement("div");
  discountRow.id = "cartDiscountRow";
  discountRow.className = "cart-total-row is-discount hidden";
  discountRow.innerHTML = `<span id="cartDiscountLabel">Chegirma</span><span id="cartDiscountValue">0 so'm</span>`;

  totalRow.parentElement.insertBefore(box, totalRow);
  totalRow.parentElement.insertBefore(subtotalRow, totalRow);
  totalRow.parentElement.insertBefore(discountRow, totalRow);

  const promoInput = document.getElementById("promoInput");
  if (promoInput) {
    promoInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      applyPromoCode();
    });
  }
}

function ensureProfileSection() {
  if (document.getElementById("section-profile")) return;
  const main = document.querySelector("main");
  if (!main) return;

  const section = document.createElement("section");
  section.id = "section-profile";
  section.className = "hidden space-y-6 py-6 md:py-10";
  section.innerHTML = `
    <div class="profile-head">
      <p>hisobim</p>
      <h2 id="profileTitle">Mening hisobim</h2>
      <p id="profileSubtitle">Buyurtmalar, promokodlar va saqlangan ma'lumotlaringiz shu yerda.</p>
    </div>
    <div id="profileBody" class="space-y-3"></div>`;

  const vacancies = document.getElementById("section-vacancies");
  if (vacancies) main.insertBefore(section, vacancies);
  else main.appendChild(section);
}

function ensureDetailModal() {
  if (document.getElementById("productDetailModal")) return;

  const modal = document.createElement("div");
  modal.id = "productDetailModal";
  modal.setAttribute("data-modal", "");
  modal.className =
    "fixed inset-0 z-[60] hidden items-stretch justify-center bg-ink-950/80 backdrop-blur-md sm:items-center sm:p-4";
  modal.innerHTML = `
    <div class="detail-sheet relative">
      <div class="detail-topbar">
        <button type="button" onclick="closeProductDetail()" class="detail-back" aria-label="Orqaga qaytish" title="Orqaga">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <div class="detail-bar-text">
          <p id="detailTopCategory">Kategoriya</p>
          <h2 id="detailTitleBar">Mahsulot</h2>
        </div>
        <button type="button" onclick="buyNow()" class="detail-back" aria-label="Hoziroq xarid qilish" title="Hoziroq xarid">
          <i class="fa-solid fa-bolt"></i>
        </button>
      </div>
      <div id="productDetailBody" class="detail-body"></div>
      <div class="detail-footer">
        <div class="detail-footer-price">
          <span>Narx</span>
          <strong id="detailFooterPrice">—</strong>
          <p id="detailFooterColor" class="detail-footer-color">—</p>
        </div>
        <div class="detail-footer-actions">
          <button type="button" class="detail-ghost" onclick="buyNow()">Hoziroq xarid</button>
          <button type="button" class="detail-primary" onclick="addDetailToCart()">
            <i class="fa-solid fa-cart-plus"></i> Savatga
          </button>
        </div>
      </div>
    </div>`;

  document.body.appendChild(modal);
}

function ensureHeroCategoriesSlot() {
  if (document.getElementById("heroCategories")) return;
  const hero = document.getElementById("heroScene");
  if (!hero) return;

  const slot = document.createElement("div");
  slot.className = "hero-cats";
  slot.id = "heroCategories";
  slot.setAttribute("aria-label", "Har kategoriyadan tanlangan mahsulotlar");

  const cta = hero.querySelector(".hero-cta");
  if (cta) cta.insertAdjacentElement("afterend", slot);
  else hero.appendChild(slot);
}

function ensureNavLinks() {
  if (document.querySelector('nav button[onclick*="profile"]')) return;
  const b2b = document.querySelector('nav button[onclick*="b2b"]');
  if (!b2b) return;

  const button = document.createElement("button");
  button.className = "nav-sec-btn";
  button.setAttribute("onclick", "switchSection('profile')");
  button.innerHTML =
    '<i class="fa-solid fa-receipt text-[10px] text-brand-300"></i> Buyurtmalarim';
  b2b.insertAdjacentElement("afterend", button);
}

function ensureHeroCta() {
  const cta = document.querySelector(".hero-cta button");
  if (!cta) return;
  cta.onclick = (event) => {
    event.preventDefault();
    startShopping();
  };
}

function ensureMarkup() {
  ensureAuthFields();
  ensureCartPromoUI();
  ensureGuestNotice();
  ensureCheckoutButton();
  ensureProfileSection();
  ensureDetailModal();
  ensureHeroCategoriesSlot();
  ensureNavLinks();
  ensureHeroCta();

  const authButton = document.getElementById("authHeaderBtn");
  if (authButton) authButton.onclick = handleAuthButton;
}

/* ---------------- INIT ---------------- */
function init() {
  ensureMarkup();
  injectShopStyles();
  restoreSession();

  renderProducts();
  renderVacancies();
  renderPromotions();
  startCountdownTimer();
  initScrollProgress();
  initReveal();
  initRotator();
  initCounters();
  initCarousel();
  initPointerEffects();
  initModals();
  applyTheme(document.documentElement.classList.contains("light") ? "light" : "dark", false);

  renderHeroCategories();
  renderProfile();
  updateHeaderUser();
  updateCartBadge();
  updateWishlistBadge();
  renderCartModal();
}

/* ---------------- STYLES ---------------- */
function injectShopStyles() {
  if (document.getElementById("shopStyles")) return;

  const style = document.createElement("style");
  style.id = "shopStyles";
  style.textContent = `
      :root {
        --ui-surface: #0b1020;
        --ui-surface-2: #131a2c;
        --ui-line: rgba(255, 255, 255, 0.1);
        --ui-ink: #f8fafc;
        --ui-muted: #94a3b8;
        --ui-soft: rgba(255, 255, 255, 0.04);
      }
      html.light {
        --ui-surface: #ffffff;
        --ui-surface-2: #f3f5fb;
        --ui-line: rgba(15, 23, 42, 0.1);
        --ui-ink: #0b1020;
        --ui-muted: #64748b;
        --ui-soft: #f6f7fc;
      }

      /* ---------- hero category cards ---------- */
      .hero-cats {
        position: relative;
        z-index: 3;
        width: 100%;
        padding: 0.2rem 1rem 0.15rem;
      }
      .hero-cats-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        margin-bottom: 0.45rem;
        font-size: 0.52rem;
        font-weight: 700;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: #94a3b8;
      }
      .hero-cats-hint {
        letter-spacing: 0.08em;
        text-transform: none;
        font-weight: 500;
        color: #b6bec9;
      }
      .hero-cats-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 0.5rem;
      }
      .hero-cat-card {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        min-width: 0;
        padding: 0.45rem 0.55rem;
        border-radius: 0.95rem;
        border: 1px solid rgba(15, 23, 42, 0.1);
        background: rgba(255, 255, 255, 0.88);
        text-align: left;
        transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
      }
      .hero-cat-card:hover {
        transform: translateY(-2px);
        border-color: rgba(15, 23, 42, 0.22);
        box-shadow: 0 18px 30px -24px rgba(15, 23, 42, 0.75);
      }
      .hero-cat-thumb {
        height: 2.5rem;
        width: 2.5rem;
        flex-shrink: 0;
        overflow: hidden;
        border-radius: 0.65rem;
        background: #eef1f6;
      }
      .hero-cat-thumb img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      .hero-cat-body {
        display: flex;
        flex-direction: column;
        min-width: 0;
        gap: 0.1rem;
      }
      .hero-cat-label {
        font-size: 0.47rem;
        font-weight: 700;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: #94a3b8;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .hero-cat-name {
        font-size: 0.64rem;
        font-weight: 700;
        line-height: 1.2;
        color: #0f172a;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .hero-cat-price {
        font-size: 0.62rem;
        font-weight: 700;
        color: #6d28d9;
      }
      .hero-cat-go {
        margin-left: auto;
        font-size: 0.55rem;
        color: #c3cad4;
      }
      @media (max-width: 900px) {
        .hero-cats-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
      @media (max-width: 640px) {
        .hero-cats {
          padding: 0 0.35rem 0.15rem;
        }
        .hero-cat-card {
          padding: 0.4rem 0.45rem;
        }
        .hero-cat-thumb {
          height: 2.15rem;
          width: 2.15rem;
        }
      }

      /* ---------- product card detail pill ---------- */
      .card-detail-pill {
        position: absolute;
        left: 0.65rem;
        bottom: 0.65rem;
        z-index: 10;
        border-radius: 9999px;
        border: 1px solid rgba(255, 255, 255, 0.25);
        background: rgba(8, 12, 24, 0.72);
        padding: 0.2rem 0.6rem;
        font-size: 0.55rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #ffffff;
        opacity: 0;
        transform: translateY(4px);
        transition: opacity 0.25s ease, transform 0.25s ease;
        backdrop-filter: blur(6px);
      }
      .spot-card:hover .card-detail-pill {
        opacity: 1;
        transform: translateY(0);
      }
      .catalog-bump {
        animation: catalogBump 1s ease-out;
      }
      @keyframes catalogBump {
        0% {
          box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.45);
        }
        100% {
          box-shadow: 0 0 0 22px rgba(168, 85, 247, 0);
        }
      }

      .guest-note {
        display: flex;
        align-items: center;
        gap: 0.55rem;
        border-radius: 0.9rem;
        border: 1px solid rgba(251, 191, 36, 0.3);
        background: rgba(251, 191, 36, 0.08);
        padding: 0.6rem 0.7rem;
        font-size: 0.66rem;
        color: var(--ui-muted);
      }
      .guest-note > i {
        color: #fbbf24;
      }
      .guest-note strong {
        display: block;
        font-size: 0.7rem;
        color: var(--ui-ink);
      }
      .guest-note span {
        font-size: 0.62rem;
        line-height: 1.45;
      }
      .guest-note button {
        margin-left: auto;
        flex-shrink: 0;
        border-radius: 0.6rem;
        background: linear-gradient(90deg, #7c3aed, #c026d3);
        padding: 0.35rem 0.65rem;
        font-size: 0.62rem;
        font-weight: 700;
        color: #ffffff;
      }

      /* ---------- cart promo ---------- */
      .promo-box {
        border: 1px dashed var(--ui-line);
        border-radius: 1rem;
        background: var(--ui-soft);
        padding: 0.7rem 0.8rem;
      }
      .promo-box-head {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        margin-bottom: 0.45rem;
        font-size: 0.6rem;
        font-weight: 700;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--ui-muted);
      }
      .promo-form {
        display: flex;
        gap: 0.4rem;
      }
      .promo-input {
        min-width: 0;
        flex: 1;
        border-radius: 0.7rem;
        border: 1px solid var(--ui-line);
        background: var(--ui-surface);
        padding: 0.55rem 0.7rem;
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--ui-ink);
        outline: none;
      }
      .promo-input:focus {
        border-color: rgba(168, 85, 247, 0.6);
      }
      .promo-apply {
        flex-shrink: 0;
        border-radius: 0.7rem;
        background: linear-gradient(90deg, #7c3aed, #c026d3);
        padding: 0.55rem 0.8rem;
        font-size: 0.68rem;
        font-weight: 700;
        color: #ffffff;
      }
      .promo-msg {
        margin-top: 0.4rem;
      }
      .promo-applied {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        border-radius: 9999px;
        background: rgba(34, 197, 94, 0.16);
        border: 1px solid rgba(34, 197, 94, 0.35);
        padding: 0.25rem 0.55rem;
        font-size: 0.65rem;
        font-weight: 700;
        color: #4ade80;
      }
      .promo-applied button {
        margin-left: 0.15rem;
        font-size: 0.85rem;
        line-height: 1;
        color: #86efac;
      }
      .promo-hints {
        display: flex;
        flex-wrap: wrap;
        gap: 0.3rem;
        margin-top: 0.45rem;
      }
      .promo-chip {
        border-radius: 9999px;
        border: 1px solid var(--ui-line);
        background: transparent;
        padding: 0.18rem 0.5rem;
        font-size: 0.58rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        color: var(--ui-muted);
        transition: all 0.2s ease;
      }
      .promo-chip:hover,
      .promo-chip.is-on {
        border-color: rgba(168, 85, 247, 0.55);
        color: #a855f7;
      }
      .cart-total-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.72rem;
        color: var(--ui-muted);
      }
      .cart-total-row span:last-child {
        font-weight: 700;
        color: var(--ui-ink);
      }
      .cart-total-row.is-discount span:last-child {
        color: #4ade80;
      }

      /* ---------- product detail sheet ---------- */
      .detail-sheet {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: var(--ui-surface);
        color: var(--ui-ink);
        overflow: hidden;
      }
      @media (min-width: 640px) {
        .detail-sheet {
          height: auto;
          max-height: 90vh;
          max-width: 64rem;
          border: 1px solid var(--ui-line);
          border-radius: 1.75rem;
          box-shadow: 0 55px 130px -45px rgba(0, 0, 0, 0.9);
        }
      }
      .detail-topbar {
        display: flex;
        align-items: center;
        gap: 0.7rem;
        padding: 0.65rem 0.9rem;
        border-bottom: 1px solid var(--ui-line);
        background: var(--ui-surface);
      }
      .detail-back {
        display: grid;
        place-items: center;
        height: 2.4rem;
        width: 2.4rem;
        flex-shrink: 0;
        border-radius: 0.9rem;
        border: 1px solid var(--ui-line);
        background: var(--ui-soft);
        color: var(--ui-ink);
        transition: all 0.2s ease;
      }
      .detail-back:hover {
        background: var(--ui-surface-2);
        transform: translateX(-2px);
      }
      .detail-bar-text {
        min-width: 0;
        flex: 1;
      }
      .detail-bar-text p {
        font-size: 0.55rem;
        font-weight: 700;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--ui-muted);
      }
      .detail-bar-text h2 {
        font-size: 0.78rem;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .detail-body {
        flex: 1;
        overflow-y: auto;
        padding: 1rem;
      }
      @media (min-width: 768px) {
        .detail-body {
          padding: 1.4rem 1.6rem;
        }
      }
      .detail-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.25rem;
      }
      @media (min-width: 900px) {
        .detail-grid {
          grid-template-columns: 1.05fr 1fr;
          gap: 2rem;
        }
      }
      .detail-gallery {
        min-width: 0;
      }
      .detail-main {
        position: relative;
        overflow: hidden;
        border-radius: 1.25rem;
        border: 1px solid var(--ui-line);
        background: var(--ui-surface-2);
      }
      .detail-main img {
        height: clamp(210px, 34vh, 400px);
        width: 100%;
        object-fit: cover;
        display: block;
      }
      .detail-badge {
        position: absolute;
        left: 0.7rem;
        top: 0.7rem;
        border-radius: 9999px;
        background: #f43f5e;
        padding: 0.25rem 0.6rem;
        font-size: 0.62rem;
        font-weight: 800;
        color: #ffffff;
      }
      .detail-thumbs {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.5rem;
        margin-top: 0.55rem;
      }
      .detail-thumb {
        overflow: hidden;
        border-radius: 0.8rem;
        border: 2px solid transparent;
        background: var(--ui-surface-2);
        opacity: 0.6;
        transition: all 0.2s ease;
      }
      .detail-thumb img {
        height: 4.1rem;
        width: 100%;
        object-fit: cover;
        display: block;
      }
      .detail-thumb:hover {
        opacity: 0.9;
      }
      .detail-thumb.is-active {
        border-color: #a855f7;
        opacity: 1;
      }
      .detail-info {
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      }
      .detail-rating {
        display: flex;
        align-items: center;
        gap: 0.45rem;
        font-size: 0.68rem;
        color: var(--ui-muted);
      }
      .detail-stars,
      .review-stars {
        color: #fbbf24;
        font-size: 0.6rem;
        letter-spacing: 0.06em;
      }
      .detail-rating strong {
        color: var(--ui-ink);
      }
      .detail-reviews-link {
        text-decoration: underline;
        text-underline-offset: 2px;
      }
      .detail-name {
        font-family: "Manrope", "Plus Jakarta Sans", sans-serif;
        font-size: 1.12rem;
        font-weight: 800;
        line-height: 1.28;
        letter-spacing: -0.01em;
      }
      .detail-brand {
        font-size: 0.62rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--ui-muted);
      }
      .detail-price-row {
        display: flex;
        align-items: baseline;
        gap: 0.6rem;
      }
      .detail-price {
        font-size: 1.35rem;
        font-weight: 800;
        color: #4ade80;
      }
      .detail-old {
        font-size: 0.8rem;
        color: var(--ui-muted);
        text-decoration: line-through;
      }
      .detail-desc {
        font-size: 0.78rem;
        line-height: 1.65;
        color: var(--ui-muted);
      }
      .detail-block {
        border-top: 1px solid var(--ui-line);
        padding-top: 0.75rem;
      }
      .detail-block-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 0.62rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--ui-muted);
      }
      .detail-block-head strong {
        font-size: 0.68rem;
        letter-spacing: 0.02em;
        text-transform: none;
        color: var(--ui-ink);
      }
      .detail-colors {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .color-dot {
        height: 1.85rem;
        width: 1.85rem;
        border-radius: 9999px;
        border: 2px solid transparent;
        background: var(--dot);
        box-shadow: inset 0 0 0 2px var(--ui-surface), 0 2px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s ease, border-color 0.2s ease;
      }
      .color-dot:hover {
        transform: scale(1.08);
      }
      .color-dot.is-active {
        border-color: #a855f7;
        transform: scale(1.06);
      }
      .detail-specs {
        display: flex;
        flex-wrap: wrap;
        gap: 0.35rem;
      }
      .detail-specs span {
        border-radius: 9999px;
        border: 1px solid var(--ui-line);
        background: var(--ui-soft);
        padding: 0.22rem 0.6rem;
        font-size: 0.6rem;
        font-weight: 600;
        color: var(--ui-muted);
      }
      .detail-promo {
        display: flex;
        align-items: center;
        gap: 0.55rem;
        width: 100%;
        border-radius: 0.9rem;
        border: 1px dashed rgba(168, 85, 247, 0.45);
        background: rgba(168, 85, 247, 0.1);
        padding: 0.6rem 0.75rem;
        text-align: left;
        font-size: 0.68rem;
        font-weight: 600;
        color: #c4b5fd;
      }
      .detail-promo span {
        flex: 1;
      }
      .detail-promo strong {
        letter-spacing: 0.06em;
      }
      html.light .detail-promo {
        color: #6d28d9;
      }
      .detail-perks {
        display: flex;
        flex-wrap: wrap;
        gap: 0.7rem;
        font-size: 0.6rem;
        color: var(--ui-muted);
      }
      .detail-perks i {
        color: #a855f7;
        margin-right: 0.2rem;
      }
      .detail-reviews {
        border-top: 1px solid var(--ui-line);
        padding-top: 0.85rem;
        scroll-margin-top: 1rem;
      }
      .detail-reviews-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .review-item {
        border: 1px solid var(--ui-line);
        border-radius: 0.85rem;
        background: var(--ui-soft);
        padding: 0.65rem 0.75rem;
      }
      .review-head {
        display: flex;
        align-items: center;
        gap: 0.55rem;
        margin-bottom: 0.35rem;
      }
      .review-avatar {
        display: grid;
        place-items: center;
        height: 1.9rem;
        width: 1.9rem;
        flex-shrink: 0;
        border-radius: 9999px;
        background: linear-gradient(135deg, #7c3aed, #c026d3);
        font-size: 0.6rem;
        font-weight: 800;
        color: #ffffff;
      }
      .review-name {
        font-size: 0.68rem;
        font-weight: 700;
      }
      .review-date {
        font-size: 0.56rem;
        color: var(--ui-muted);
      }
      .review-stars {
        margin-left: auto;
      }
      .review-text {
        font-size: 0.68rem;
        line-height: 1.6;
        color: var(--ui-muted);
      }
      .detail-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        border-top: 1px solid var(--ui-line);
        background: var(--ui-surface);
        padding: 0.7rem 0.9rem;
      }
      .detail-footer-price span {
        display: block;
        font-size: 0.52rem;
        font-weight: 700;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--ui-muted);
      }
      .detail-footer-price strong {
        font-size: 0.95rem;
        font-weight: 800;
        color: #4ade80;
      }
      .detail-footer-color {
        font-size: 0.58rem;
        color: var(--ui-muted);
      }
      .detail-footer-actions {
        display: flex;
        gap: 0.45rem;
      }
      .detail-primary,
      .detail-ghost {
        border-radius: 0.85rem;
        padding: 0.62rem 0.95rem;
        font-size: 0.72rem;
        font-weight: 700;
        white-space: nowrap;
      }
      .detail-primary {
        background: linear-gradient(90deg, #7c3aed, #c026d3);
        color: #ffffff;
        box-shadow: 0 16px 30px -18px rgba(168, 85, 247, 0.95);
      }
      .detail-ghost {
        border: 1px solid var(--ui-line);
        background: var(--ui-soft);
        color: var(--ui-ink);
      }
      .detail-ghost:hover {
        background: var(--ui-surface-2);
      }
      @media (max-width: 420px) {
        .detail-ghost {
          display: none;
        }
      }

      /* ---------- profile / orders ---------- */
      .profile-head p:first-child {
        font-size: 0.55rem;
        font-weight: 700;
        letter-spacing: 0.26em;
        text-transform: uppercase;
        color: #a855f7;
      }
      .profile-head h2 {
        margin-top: 0.3rem;
        font-family: "Manrope", "Plus Jakarta Sans", sans-serif;
        font-size: 1.6rem;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: var(--ui-ink);
      }
      .profile-head p:last-child {
        margin-top: 0.3rem;
        font-size: 0.75rem;
        color: var(--ui-muted);
      }
      .profile-guest {
        border: 1px dashed var(--ui-line);
        border-radius: 1.5rem;
        background: var(--ui-soft);
        padding: 2rem 1.5rem;
        text-align: center;
      }
      .profile-guest-icon {
        display: grid;
        place-items: center;
        height: 3.2rem;
        width: 3.2rem;
        margin: 0 auto 0.8rem;
        border-radius: 1rem;
        background: linear-gradient(135deg, #7c3aed, #c026d3);
        color: #ffffff;
        font-size: 1.15rem;
      }
      .profile-guest h3 {
        font-size: 0.95rem;
        font-weight: 800;
        color: var(--ui-ink);
      }
      .profile-guest p {
        margin: 0.45rem auto 0;
        max-width: 30rem;
        font-size: 0.75rem;
        line-height: 1.65;
        color: var(--ui-muted);
      }
      .profile-guest-actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 1rem;
      }
      .profile-primary,
      .profile-ghost {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        border-radius: 0.85rem;
        padding: 0.65rem 1rem;
        font-size: 0.74rem;
        font-weight: 700;
      }
      .profile-primary {
        background: linear-gradient(90deg, #7c3aed, #c026d3);
        color: #ffffff;
      }
      .profile-ghost {
        border: 1px solid var(--ui-line);
        background: var(--ui-surface);
        color: var(--ui-ink);
      }
      .profile-card,
      .profile-block {
        border: 1px solid var(--ui-line);
        border-radius: 1.4rem;
        background: var(--ui-surface);
        padding: 1rem 1.1rem;
      }
      .profile-card {
        background: linear-gradient(135deg, rgba(124, 58, 237, 0.12), var(--ui-surface) 55%);
      }
      .profile-card-top {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      .profile-avatar {
        display: grid;
        place-items: center;
        height: 2.9rem;
        width: 2.9rem;
        flex-shrink: 0;
        border-radius: 9999px;
        background: linear-gradient(135deg, #7c3aed, #22d3ee);
        font-size: 0.9rem;
        font-weight: 800;
        color: #ffffff;
      }
      .profile-card-top h3 {
        font-size: 0.95rem;
        font-weight: 800;
        color: var(--ui-ink);
      }
      .profile-card-top p {
        font-size: 0.68rem;
        color: var(--ui-muted);
      }
      .profile-logout {
        margin-left: auto;
        flex-shrink: 0;
        border-radius: 0.75rem;
        border: 1px solid var(--ui-line);
        background: var(--ui-soft);
        padding: 0.45rem 0.7rem;
        font-size: 0.66rem;
        font-weight: 700;
        color: var(--ui-muted);
        transition: all 0.2s ease;
      }
      .profile-logout:hover {
        border-color: rgba(244, 63, 94, 0.4);
        color: #fb7185;
      }
      .profile-stats {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 0.4rem;
        margin-top: 0.9rem;
      }
      .profile-stat {
        border-radius: 0.85rem;
        border: 1px solid var(--ui-line);
        background: var(--ui-soft);
        padding: 0.5rem;
        text-align: center;
      }
      .profile-stat strong {
        display: block;
        font-size: 1rem;
        font-weight: 800;
        color: var(--ui-ink);
      }
      .profile-stat span {
        font-size: 0.55rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--ui-muted);
      }
      .profile-note {
        margin-top: 0.75rem;
        font-size: 0.62rem;
        color: var(--ui-muted);
      }
      .profile-note i {
        color: #4ade80;
        margin-right: 0.25rem;
      }
      .profile-block {
        margin-top: 0.75rem;
      }
      .profile-block-head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 0.5rem;
        margin-bottom: 0.6rem;
      }
      .profile-block-head h3 {
        font-size: 0.8rem;
        font-weight: 800;
        color: var(--ui-ink);
      }
      .profile-block-head span {
        font-size: 0.6rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--ui-muted);
      }
      .profile-empty {
        font-size: 0.72rem;
        line-height: 1.6;
        color: var(--ui-muted);
      }
      .order-card {
        border: 1px solid var(--ui-line);
        border-radius: 1rem;
        background: var(--ui-soft);
        padding: 0.75rem 0.85rem;
        margin-bottom: 0.5rem;
      }
      .order-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 0.5rem;
      }
      .order-id {
        font-size: 0.72rem;
        font-weight: 800;
        letter-spacing: 0.06em;
        color: var(--ui-ink);
      }
      .order-date {
        font-size: 0.58rem;
        color: var(--ui-muted);
      }
      .order-status {
        border-radius: 9999px;
        background: rgba(34, 197, 94, 0.15);
        border: 1px solid rgba(34, 197, 94, 0.3);
        padding: 0.18rem 0.55rem;
        font-size: 0.55rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: #4ade80;
        white-space: nowrap;
      }
      .order-items {
        margin: 0.55rem 0;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }
      .order-item {
        display: flex;
        justify-content: space-between;
        gap: 0.6rem;
        font-size: 0.64rem;
        color: var(--ui-muted);
      }
      .order-item span:first-child {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .order-item span:last-child {
        flex-shrink: 0;
        font-weight: 600;
      }
      .order-foot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        border-top: 1px dashed var(--ui-line);
        padding-top: 0.45rem;
        font-size: 0.62rem;
        color: var(--ui-muted);
      }
      .order-foot strong {
        font-size: 0.78rem;
        color: #4ade80;
      }
      .profile-promos {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.4rem;
      }
      @media (min-width: 700px) {
        .profile-promos {
          grid-template-columns: 1fr 1fr;
        }
      }
      .profile-promo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.6rem;
        border: 1px dashed var(--ui-line);
        border-radius: 0.85rem;
        padding: 0.55rem 0.65rem;
      }
      .profile-promo strong {
        display: block;
        font-size: 0.7rem;
        letter-spacing: 0.08em;
        color: var(--ui-ink);
      }
      .profile-promo span {
        font-size: 0.58rem;
        color: var(--ui-muted);
      }
      .profile-promo button {
        flex-shrink: 0;
        border-radius: 0.6rem;
        border: 1px solid rgba(168, 85, 247, 0.4);
        background: rgba(168, 85, 247, 0.12);
        padding: 0.3rem 0.55rem;
        font-size: 0.58rem;
        font-weight: 700;
        color: #c4b5fd;
      }
      html.light .profile-promo button {
        color: #6d28d9;
      }
      .profile-promo-used {
        flex-shrink: 0;
        border-radius: 0.6rem;
        background: rgba(34, 197, 94, 0.14);
        padding: 0.3rem 0.55rem;
        font-size: 0.55rem !important;
        font-weight: 700;
        text-transform: uppercase;
        color: #4ade80 !important;
      }
      .auth-error {
        border-radius: 0.7rem;
        border: 1px solid rgba(244, 63, 94, 0.35);
        background: rgba(244, 63, 94, 0.1);
        padding: 0.5rem 0.65rem;
        font-size: 0.68rem;
        font-weight: 600;
        color: #fda4af;
      }
      #authHeaderBtn.is-authed {
        border-color: rgba(74, 222, 128, 0.35);
        background: rgba(74, 222, 128, 0.1);
      }
  `;
  document.head.appendChild(style);
}

/* ---------------- ACCOUNT GATE ----------------
   Buyurtma berish va sevimlilar faqat hisobi bor
   foydalanuvchilar uchun.
   ---------------------------------------------- */
let pendingCheckout = false;

function requireAuth(message) {
  if (currentUser) return true;
  showToast(
    message || "Bu amal uchun avval tizimga kiring yoki ro'yxatdan o'ting.",
    "info"
  );
  openAuthModal();
  switchAuthTab("login");
  return false;
}

function startGuestCheckout() {
  pendingCheckout = true;
  closeCartModal();
  requireAuth("Buyurtma berish uchun avval kiring yoki ro'yxatdan o'ting.");
}

function syncCheckoutUI() {
  const note = document.getElementById("guestCheckoutNote");
  if (note) note.classList.toggle("hidden", Boolean(currentUser));

  const checkoutBtn = document.getElementById("checkoutBtn");
  if (!checkoutBtn) return;

  checkoutBtn.innerHTML = currentUser
    ? "Buyurtmani rasmiylashtirish"
    : '<i class="fa-solid fa-right-to-bracket"></i> Kirish va buyurtma berish';
  checkoutBtn.onclick = () => (currentUser ? checkoutSimulation() : startGuestCheckout());
}

function ensureGuestNotice() {
  const modal = document.getElementById("cartModal");
  if (!modal || document.getElementById("guestCheckoutNote")) return;

  const note = document.createElement("div");
  note.id = "guestCheckoutNote";
  note.className = "guest-note hidden";
  note.innerHTML = `
    <i class="fa-solid fa-lock"></i>
    <div>
      <strong>Hisob kerak</strong>
      <span>Buyurtma berish va sevimlilar uchun avval kiring yoki ro'yxatdan o'ting.</span>
    </div>
    <button type="button" onclick="startGuestCheckout()">Kirish</button>`;

  const promo = document.getElementById("promoInput");
  const anchor = promo ? promo.closest(".promo-box") : null;
  if (anchor && anchor.parentElement) {
    anchor.parentElement.insertBefore(note, anchor);
    return;
  }

  const total = document.getElementById("cartTotalPrice");
  const row = total ? total.closest("div") : null;
  if (row && row.parentElement) row.parentElement.insertBefore(note, row);
}

function ensureCheckoutButton() {
  const modal = document.getElementById("cartModal");
  if (!modal) return;
  const button = Array.from(modal.querySelectorAll("button")).find((btn) =>
    /Buyurtmani rasmiylashtirish|Kirish va buyurtma/.test(btn.textContent)
  );
  if (button) button.id = "checkoutBtn";
}

function openWishlistModal() {
  if (!requireAuth("Sevimlilarni ko'rish uchun avval kiring yoki ro'yxatdan o'ting.")) return;
  renderWishlistModal();
  openModal("wishlistModal");
}
/* =========================================================
   SMARTMARKET AI YORDAMCHI
   Do'kon ichida ishlaydigan yordamchi: katalogdan mahsulot
   topadi, narx/chegirma, yetkazish, to'lov, promokod va
   buyurtma holati bo'yicha o'zbek tilida javob beradi.
   ========================================================= */
const AI_CYR = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "j", з: "z",
  и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r",
  с: "s", т: "t", у: "u", ф: "f", х: "x", ц: "ts", ч: "ch", ш: "sh", щ: "sh",
  ъ: "", ы: "i", ь: "", э: "e", ю: "yu", я: "ya", ў: "o", қ: "q", ғ: "g", ҳ: "h",
};

function aiNorm(value) {
  return String(value == null ? "" : value)
    .toLowerCase()
    .replace(/[а-яёўқғҳ]/g, (ch) => (AI_CYR[ch] === undefined ? ch : AI_CYR[ch]))
    .replace(/[‘’ʻʼ'`´]/g, "")
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const AI_STOP = new Set(
  (
    "uchun men menga senga kerak bormi bor nima qanday qanaqa yaxshi eng bir bilan " +
    "dan ga ni narxi narx mahsulot mahsulotlar sotib olmoqchiman xohlayman iltimos " +
    "bering korsat kursat izlayapman kerakli qilib qandaydir mayli ok please " +
    "mumkinmi boladimi ayting aytib"
  ).split(" ")
);

const AI_SYNONYMS = {
  gadgetlar: "telefon smartfon iphone samsung quloqchin naushnik airpods soat watch planshet gadjet aqlli".split(" "),
  elektronika: "noutbuk laptop kompyuter monitor televizor tv ekran kamera audio dinamik elektronika".split(" "),
  maishiy: "changyutgich robot blender kofe muzlatgich kir yuvish dazmol oshxona maishiy texnika".split(" "),
  kiyim: "kurtka shim jinsi koylak futbolka krossovka poyabzal sumka kiyim moda".split(" "),
};

/* Mahsulot TURI (telefon, noutbuk, soat ...). Kategoriya juda keng:
   "telefon" so'rovi "Gadjetlar" kategoriyasiga tushib, kolonka va
   soatlarni ko'rsatib yuborardi. Endi avval tur, keyin kategoriya. */
const AI_TYPES = [
  {
    id: "telefon",
    label: "Telefonlar",
    words: "telefon smartfon iphone samsung galaxy xiaomi redmi mobil".split(" "),
    match: /(iphone|galaxy s|samsung galaxy|xiaomi \d|redmi|pixel|smartfon|telefon)/,
  },
  {
    id: "quloqchin",
    label: "Quloqchinlar",
    words: "quloqchin naushnik airpods earbud earpods".split(" "),
    match: /(airpods|quloqchin|naushnik|earbud|earpods)/,
  },
  {
    id: "soat",
    label: "Aqlli soatlar",
    words: "soat watch smartwatch bilaguzuk".split(" "),
    match: /(watch|smartwatch|bilaguzuk)/,
  },
  {
    id: "kolonka",
    label: "Kolonkalar",
    words: "kolonka dinamik speaker jbl musiqa".split(" "),
    match: /(kolonka|dinamik|speaker|jbl)/,
  },
  {
    id: "noutbuk",
    label: "Noutbuklar",
    words: "noutbuk laptop macbook kompyuter".split(" "),
    match: /(macbook|noutbuk|laptop|rog strix)/,
  },
  {
    id: "planshet",
    label: "Planshetlar",
    words: "planshet ipad tablet".split(" "),
    match: /(ipad|planshet|tablet)/,
  },
  {
    id: "konsol",
    label: "O'yin konsollari",
    words: "konsol playstation ps5 oyin".split(" "),
    match: /(playstation|ps5|konsol)/,
  },
  {
    id: "televizor",
    label: "Televizorlar",
    words: "televizor tv oled ekran".split(" "),
    match: /(televizor|tv|oled)/,
  },
  {
    id: "kamera",
    label: "Kameralar",
    words: "kamera fotoapparat canon eos vlog".split(" "),
    match: /(kamera|canon|eos)/,
  },
  {
    id: "changyutgich",
    label: "Changyutgichlar",
    words: "changyutgich robot supurgich".split(" "),
    match: /(changyutgich|robot|supurgich)/,
  },
  {
    id: "yuvish",
    label: "Kir yuvish mashinalari",
    words: "yuvish kiryuvish mashinasi".split(" "),
    match: /(kir yuvish|yuvish mashinasi)/,
  },
  {
    id: "idish",
    label: "Idish yuvish mashinalari",
    words: "idish idishyuvish".split(" "),
    match: /(idish yuvish|idishyuvish)/,
  },
  {
    id: "fritryujka",
    label: "Fritryujkalar",
    words: "fritryujka airfryer havo".split(" "),
    match: /(fritryujka|airfryer)/,
  },
  {
    id: "krossovka",
    label: "Krossovkalar",
    words: "krossovka poyabzal nike".split(" "),
    match: /(krossovka|pegasus|poyabzal)/,
  },
  {
    id: "kiyim",
    label: "Kiyimlar",
    words: "koylak xudi palto shim jinsi futbolka kiyim".split(" "),
    match: /(koylak|xudi|palto|shim|jinsi|futbolka)/,
  },
];

function aiDetectTypes(text) {
  const tokens = aiNorm(text).split(" ").filter(Boolean);
  return AI_TYPES.filter((type) =>
    type.words.some((word) =>
      tokens.some(
        (token) => token === word || (token.length > 3 && token.indexOf(word) === 0)
      )
    )
  );
}

function aiProductsOfTypes(types) {
  if (!types || !types.length) return null;
  const list = productsData.filter((product) => {
    const haystack = aiNorm(`${product.brand} ${product.title}`);
    return types.some((type) => type.match.test(haystack));
  });
  return list.length ? list : null;
}

function aiTypeLabel(types) {
  if (!types || !types.length) return "Barcha mahsulotlar";
  return types.map((type) => type.label).join(", ");
}

let aiIndex = null;

function aiBuildIndex() {
  if (aiIndex) return aiIndex;
  aiIndex = productsData.map((product) => {
    const category = categoriesData.find((c) => c.id === product.category);
    return {
      product,
      title: aiNorm(`${product.brand} ${product.title}`),
      category: aiNorm(`${category ? category.title : ""} ${product.category}`),
      blob: aiNorm(
        [
          product.brand,
          product.title,
          category ? category.title : "",
          product.category,
          (product.specs || []).join(" "),
          product.description || "",
          (AI_SYNONYMS[product.category] || []).join(" "),
        ].join(" ")
      ),
    };
  });
  return aiIndex;
}

/* "1 milliongacha", "500 ming", "2-3 mln" kabi byudjetni o'qish */
function aiBudget(text) {
  const normalized = aiNorm(text);
  const chunks = normalized.match(/\d+(?:\.\d+)?\s*(million|mln|ming|k)?/g) || [];
  const values = [];

  chunks.forEach((chunk) => {
    const match = chunk.match(/(\d+(?:\.\d+)?)\s*(million|mln|ming|k)?/);
    if (!match) return;
    let value = parseFloat(match[1]);
    const unit = match[2] || "";
    if (unit === "million" || unit === "mln") value *= 1000000;
    else if (unit === "ming") value *= 1000;
    else if (unit === "k" && value < 1000) value *= 1000;
    if (!isFinite(value) || value <= 0) return;
    if (!unit && value < 50000) return;
    values.push(Math.round(value));
  });

  if (!values.length) return null;

  const max = Math.max.apply(null, values);
  const min = values.length > 1 ? Math.min.apply(null, values) : 0;
  const wantsCheap = /(gacha|arzon|tagida|ostida|budjet|byudjet|tejamkor)/.test(normalized);
  const wantsHigh = /(dan|qimmat|yuqori|boshlab|tepadan)/.test(normalized);

  if (values.length > 1) return { min: min, max: max };
  if (wantsHigh && !wantsCheap) return { min: max, max: Infinity };
  return { min: 0, max: max };
}

function aiBudgetLabel(budget) {
  if (!budget) return "";
  if (!isFinite(budget.max)) return money(budget.min) + " dan yuqori";
  if (budget.min) return money(budget.min) + " – " + money(budget.max);
  return money(budget.max) + " gacha";
}

function aiSearchProducts(text) {
  const normalized = aiNorm(text);
  const budget = aiBudget(text);
  const tokens = normalized
    .split(" ")
    .filter((word) => word.length > 2 && !AI_STOP.has(word) && !/^\d+$/.test(word));

  let rows = aiBuildIndex();
  const types = aiDetectTypes(text);
  const typed = aiProductsOfTypes(types);
  if (typed) {
    const allowed = new Set(typed.map((product) => product.id));
    rows = rows.filter((row) => allowed.has(row.product.id));
  }
  if (budget) {
    rows = rows.filter(
      (row) =>
        row.product.price <= budget.max &&
        row.product.price >= (budget.min || 0)
    );
  }

  if (!tokens.length) {
    if (!budget) return [];
    return rows
      .slice()
      .sort((a, b) => a.product.price - b.product.price)
      .slice(0, 3)
      .map((row) => row.product);
  }

  const scored = rows
    .map((row) => {
      let score = 0;
      tokens.forEach((token) => {
        if (row.title.indexOf(token) !== -1) score += 5;
        else if (row.category.indexOf(token) !== -1) score += 3;
        else if (row.blob.indexOf(token) !== -1) score += 1;
      });
      if (tokens.every((token) => row.blob.indexOf(token) !== -1)) score += 3;
      return { row: row, score: score };
    })
    .filter((entry) => entry.score > 0);

  scored.sort(
    (a, b) => b.score - a.score || b.row.product.rating - a.row.product.rating
  );

  return scored.slice(0, 3).map((entry) => entry.row.product);
}

function aiDetectCategory(text) {
  const normalized = aiNorm(text);
  for (let i = 0; i < categoriesData.length; i++) {
    const category = categoriesData[i];
    if (normalized.indexOf(aiNorm(category.title)) !== -1) return category.id;
  }
  for (const product of productsData) {
    const category = product.category;
    const words = AI_SYNONYMS[category] || [];
    for (let i = 0; i < words.length; i++) {
      if (normalized.indexOf(aiNorm(words[i])) !== -1) return category;
    }
  }
  return null;
}

function aiCategoryTitle(id) {
  const category = categoriesData.find((c) => c.id === id);
  return category ? category.title : "Barcha mahsulotlar";
}

function aiDefaultChips() {
  return [
    { label: "Eng arzon telefon", send: "eng arzon telefon" },
    { label: "Yetkazib berish", send: "yetkazib berish qanday ishlaydi" },
    { label: "Promokodlar", send: "qanday promokodlar bor" },
    { label: "Muddatli to'lov", send: "muddatli to'lov bormi" },
  ];
}

function aiHost() {
  return document.getElementById("aiMessages");
}

function aiScroll() {
  const host = aiHost();
  if (host) host.scrollTop = host.scrollHeight;
}

function aiRenderChips(items) {
  const host = document.getElementById("aiChips");
  if (!host) return;
  host.innerHTML = "";
  (items || []).forEach((item) => {
    if (!item || !item.label) return;
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "ai-chip";
    chip.textContent = item.label;
    chip.onclick = () => {
      if (item.run) item.run();
      else aiSend(item.send || item.label);
    };
    host.appendChild(chip);
  });
}

function aiSay(html, chips, extraClass) {
  const host = aiHost();
  if (!host) return null;
  const bubble = document.createElement("div");
  bubble.className = "ai-msg ai-msg-bot" + (extraClass ? " " + extraClass : "");
  bubble.innerHTML = html;
  host.appendChild(bubble);
  aiScroll();
  if (chips) aiRenderChips(chips);
  return bubble;
}

function aiPushUser(text) {
  const host = aiHost();
  if (!host) return;
  aiRenderChips([]);
  const bubble = document.createElement("div");
  bubble.className = "ai-msg ai-msg-user";
  bubble.textContent = text;
  host.appendChild(bubble);
  aiScroll();
}

function aiShowTyping() {
  const host = aiHost();
  const bubble = document.createElement("div");
  bubble.className = "ai-msg ai-msg-bot ai-typing";
  bubble.innerHTML = '<span class="ai-typing-dots"><i></i><i></i><i></i></span>';
  if (host) {
    host.appendChild(bubble);
    aiScroll();
  }
  return bubble;
}

function aiProductCard(product) {
  const category = categoriesData.find((c) => c.id === product.category);
  return `
    <div class="ai-product" role="button" tabindex="0"
         onclick="aiOpenProduct(${product.id})"
         onkeydown="if(event.key==='Enter'){aiOpenProduct(${product.id})}">
      <img src="${product.image}" alt="" loading="lazy" />
      <span class="ai-product-body">
        <span class="ai-product-title">${escapeHtml(product.title)}</span>
        <span class="ai-product-price">${money(product.price)}</span>
        <span class="ai-product-meta">★ ${product.rating} · ${escapeHtml(
    category ? category.title : ""
  )}</span>
      </span>
      <button type="button" class="ai-product-add" aria-label="Savatga qo'shish"
              onclick="event.stopPropagation(); aiAddProduct(${product.id})">
        <i class="fa-solid fa-cart-plus"></i>
      </button>
    </div>`;
}

function aiProductAnswer(products, intro) {
  const list = (products || []).slice(0, 3);
  if (!list.length) {
    aiSay(
      "Bu shartlarga mos mahsulot topilmadi. Narx chegarasini oshirib yoki boshqacha yozib ko'ring.",
      aiDefaultChips()
    );
    return;
  }
  aiSay(
    `${intro}${list.map(aiProductCard).join("")}`,
    [
      {
        label: "Savatni ochish",
        run: () => {
          closeAiAssistant();
          openCartModal();
        },
      },
      {
        label: "Katalogni ko'rish",
        run: () => {
          closeAiAssistant();
          startShopping();
        },
      },
    ],
    "ai-msg-wide"
  );
}

function aiOpenProduct(productId) {
  closeAiAssistant();
  openProductDetail(productId);
}

function aiAddProduct(productId) {
  const product = productsData.find((p) => p.id === productId);
  if (!product) return;
  if (!currentUser) {
    closeAiAssistant();
    requireAuth("Savatga qo'shish uchun avval kiring yoki ro'yxatdan o'ting.");
    return;
  }
  if (!addToCart(productId)) return;
  aiSay(`✅ <strong>${escapeHtml(product.title)}</strong> savatga qo'shildi.`, [
    {
      label: "Savatni ochish",
      run: () => {
        closeAiAssistant();
        openCartModal();
      },
    },
  ]);
}

function aiCartAnswer() {
  if (!cart.length) {
    aiSay("🛒 Savatingiz hozircha bo'sh. Katalogdan mahsulot tanlab, savatga qo'shishingiz mumkin.", [
      {
        label: "Katalogga o'tish",
        run: () => {
          closeAiAssistant();
          startShopping();
        },
      },
    ]);
    return;
  }

  const totals = cartTotals();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const chips = [
    {
      label: "Savatni ochish",
      run: () => {
        closeAiAssistant();
        openCartModal();
      },
    },
  ];
  if (!currentUser) {
    chips.push({
      label: "Kirish",
      run: () => {
        closeAiAssistant();
        openAuthModal();
        switchAuthTab("login");
      },
    });
  }

  aiSay(
    `🛒 Savatingizda <strong>${count} ta</strong> mahsulot bor.<br>` +
      `Jami: <strong>${money(totals.total)}</strong>` +
      (totals.discount ? `<br>Chegirma: −${money(totals.discount)}` : "") +
      (currentUser
        ? ""
        : "<br><br>⚠️ Buyurtma berish uchun avval tizimga kiring."),
    chips
  );
}

function aiOrderStatus() {
  if (!currentUser) {
    aiSay(
      "📦 Buyurtmalar tarixini ko'rish uchun avval tizimga kiring. Hisobingiz bo'lsa, barcha buyurtmalar saqlanib qoladi.",
      [
        {
          label: "Kirish",
          run: () => {
            closeAiAssistant();
            openAuthModal();
            switchAuthTab("login");
          },
        },
      ]
    );
    return;
  }

  const orders = currentUser.orders || [];
  if (!orders.length) {
    aiSay("Hozircha buyurtmalaringiz yo'q. Katalogdan mahsulot tanlab, savat orqali buyurtma berishingiz mumkin.", [
      {
        label: "Katalogga o'tish",
        run: () => {
          closeAiAssistant();
          startShopping();
        },
      },
    ]);
    return;
  }

  const lines = orders
    .slice(0, 3)
    .map(
      (order) =>
        `<strong>${escapeHtml(order.id)}</strong> · ${escapeHtml(
          order.status || "Qabul qilindi"
        )}<br><span style="opacity:.75">${formatDate(order.date)} · ${money(
          order.total || 0
        )}</span>`
    )
    .join("<br><br>");

  aiSay(`📦 <strong>So'nggi buyurtmalaringiz:</strong><br>${lines}`, [
    {
      label: "Buyurtmalarim",
      run: () => {
        closeAiAssistant();
        switchSection("profile");
      },
    },
  ]);
}

function aiOrderByCode(digits) {
  const pools = currentUser ? currentUser.orders || [] : guestState().orders;
  const order = pools.find(
    (entry) => String(entry.id || "").replace(/\D/g, "") === digits
  );
  const chips = [
    {
      label: "Buyurtmalarim",
      run: () => {
        closeAiAssistant();
        switchSection("profile");
      },
    },
  ];

  if (!order) {
    aiSay(
      `🔎 <strong>SM-${digits}</strong> raqamli buyurtma topilmadi. Raqamni tekshirib qayta yozing yoki Buyurtmalarim bo'limini oching.`,
      chips
    );
    return;
  }

  const items = (order.items || [])
    .map((item) => `• ${escapeHtml(item.title)} × ${item.quantity}`)
    .join("<br>");

  aiSay(
    `📦 <strong>${escapeHtml(order.id)}</strong><br>` +
      `Holat: <strong>${escapeHtml(order.status || "Qabul qilindi")}</strong><br>` +
      `Sana: ${formatDate(order.date)}<br>` +
      `Jami: <strong>${money(order.total || 0)}</strong>` +
      (items ? `<br><br>${items}` : ""),
    chips
  );
}

function aiCompare(text) {
  const cleaned = String(text || "").replace(
    /(taqqosla|taqqoslang|solishtir|solishtiring|qaysi biri yaxshi|farqi nimada|farqi|vs)/gi,
    " "
  );
  const found = aiSearchProducts(cleaned);

  if (found.length < 2) {
    aiSay(
      '⚖️ Taqqoslash uchun ikkita mahsulot nomini yozing, masalan: <em>"iPhone 15 va Samsung S24 ni taqqosla"</em>.',
      aiDefaultChips()
    );
    return;
  }

  const first = found[0];
  const second = found[1];
  const cell = (value) =>
    `<td style="padding:5px 6px;font-weight:700;">${value}</td>`;
  const row = (label, a, b) =>
    `<tr><td style="padding:5px 6px;opacity:.7;">${label}</td>${cell(a)}${cell(b)}</tr>`;
  const specs = (product) => escapeHtml((product.specs || []).slice(0, 3).join(", "));

  aiSay(
    `⚖️ <strong>Taqqoslash</strong>` +
      `<table style="width:100%;border-collapse:collapse;font-size:.7rem;margin-top:8px;">` +
      `<tr><td></td>${cell(escapeHtml(first.title.slice(0, 24)))}${cell(
        escapeHtml(second.title.slice(0, 24))
      )}</tr>` +
      row("Narx", money(first.price), money(second.price)) +
      row("Reyting", `★ ${first.rating}`, `★ ${second.rating}`) +
      row("Asosiy", specs(first), specs(second)) +
      `</table>`,
    [
      { label: "1-mahsulotni ochish", run: () => aiOpenProduct(first.id) },
      { label: "2-mahsulotni ochish", run: () => aiOpenProduct(second.id) },
    ],
    "ai-msg-wide"
  );
}

function aiHowToOrder() {
  const steps =
    "1. Katalogdan mahsulotni tanlab, <strong>Savatga</strong> qo'shing.<br>" +
    "2. Savatni ochib, promokodni kiriting (agar mavjud bo'lsa).<br>" +
    "3. <strong>Buyurtmani rasmiylashtirish</strong> tugmasini bosing.<br>" +
    "4. Buyurtma raqami beriladi — holatni <strong>Buyurtmalarim</strong> bo'limida kuzatasiz.";

  aiSay(
    `🛒 <strong>Buyurtma berish tartibi:</strong><br>${steps}<br><br>` +
      (currentUser
        ? "Hisobingizga kirgansiz, hammasi tayyor."
        : "⚠️ Buyurtma berish uchun hisobingizga kirgan bo'lishingiz kerak."),
    [
      {
        label: "Savatni ochish",
        run: () => {
          closeAiAssistant();
          openCartModal();
        },
      },
      currentUser
        ? { label: "Buyurtmalarim", run: () => { closeAiAssistant(); switchSection("profile"); } }
        : {
            label: "Kirish / Ro'yxatdan o'tish",
            run: () => {
              closeAiAssistant();
              openAuthModal();
              switchAuthTab("login");
            },
          },
    ]
  );
}

function aiPromoAnswer() {
  const lines = promoCodes
    .map((promo) => `<strong>${promo.code}</strong> — ${escapeHtml(promo.label)}`)
    .join("<br>");
  aiSay(
    `🎁 <strong>Amaldagi promokodlar:</strong><br>${lines}<br><br>` +
      "Promokodni savatdagi <strong>Promokod</strong> maydoniga kiriting — chegirma darhol hisoblanadi.",
    [
      {
        label: "Savatni ochish",
        run: () => {
          closeAiAssistant();
          openCartModal();
        },
      },
      { label: "Chegirmadagi mahsulotlar", run: () => aiDiscounts() },
    ]
  );
}

function aiCategoriesAnswer() {
  const lines = categoriesData
    .map((category) => {
      const count = productsData.filter((p) => p.category === category.id).length;
      return `<strong>${escapeHtml(category.title)}</strong> — ${count} ta mahsulot`;
    })
    .join("<br>");

  aiSay(
    `🗂 Katalogimizda <strong>${productsData.length} ta</strong> mahsulot va ` +
      `${categoriesData.length} kategoriya bor:<br>${lines}<br><br>Qaysi kategoriyani ko'ramiz?`,
    categoriesData.map((category) => ({
      label: category.title,
      run: () => {
        closeAiAssistant();
        switchCategory(category.id);
      },
    }))
  );
}

function aiCheapest(text) {
  const types = aiDetectTypes(text);
  const typed = aiProductsOfTypes(types);
  const category = aiDetectCategory(text);
  let list =
    typed ||
    (category
      ? productsData.filter((p) => p.category === category)
      : productsData.slice());
  if (!list.length) list = productsData.slice();
  list = list.slice().sort((a, b) => a.price - b.price);
  aiProductAnswer(
    list,
    `💰 <strong>${typed ? aiTypeLabel(types) : aiCategoryTitle(category)}</strong> bo'yicha eng arzon variantlar:`
  );
}

function aiTopRated(text) {
  const types = aiDetectTypes(text);
  const typed = aiProductsOfTypes(types);
  const category = aiDetectCategory(text);
  let list =
    typed ||
    (category
      ? productsData.filter((p) => p.category === category)
      : productsData.slice());
  if (!list.length) list = productsData.slice();
  list = list.slice().sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
  aiProductAnswer(
    list,
    `⭐ <strong>${typed ? aiTypeLabel(types) : aiCategoryTitle(category)}</strong> bo'yicha eng yuqori reytingli mahsulotlar:`
  );
}

function aiDiscounts() {
  const list = productsData
    .filter((product) => product.oldPrice && product.oldPrice > product.price)
    .map((product) => ({
      product: product,
      percent: Math.round((1 - product.price / product.oldPrice) * 100),
    }))
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 3)
    .map((entry) => entry.product);

  aiProductAnswer(
    list,
    "🔥 <strong>Eng katta chegirmadagi mahsulotlar:</strong>"
  );
}

function aiNewArrivals() {
  const list = productsData
    .filter((product) => product.isNew)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
  aiProductAnswer(
    list.length ? list : productsData.slice(0, 3),
    "✨ <strong>Yangi kelgan mahsulotlar:</strong>"
  );
}

function aiRespond(raw) {
  const t = aiNorm(raw);

  if (!t) {
    aiSay(
      "Savolingizni yozing — mahsulot tanlash, narx, yetkazib berish yoki promokodlar bo'yicha yordam beraman.",
      aiDefaultChips()
    );
    return;
  }

  if (/(^| )(salom|assalom|assalomu alaykum|hayrli kun|hayrli tong|hello|hi|hey)( |$)/.test(t)) {
    aiSay(
      "Salom! 👋 Men <strong>SmartMarket AI</strong> — shu do'konning yordamchisiman.<br><br>" +
        'Menga shunday yozishingiz mumkin:<br>• <em>"1 milliongacha telefon"</em><br>• <em>"eng arzon noutbuk"</em><br>• <em>"yetkazib berish qanday?"</em><br>• <em>"buyurtmam qayerda?"</em>',
      aiDefaultChips()
    );
    return;
  }

  if (/(rahmat|raxmat|tashakkur|spasibo)/.test(t)) {
    aiSay("Arzimaydi! 😊 Yana savolingiz bo'lsa, shu yerdaman.", aiDefaultChips());
    return;
  }

  const orderCode = t.match(/sm ?(\d{6})/);
  if (orderCode) {
    aiOrderByCode(orderCode[1]);
    return;
  }

  if (/(taqqosla|taqqoslang|solishtir|solishtiring|qaysi biri yaxshi|farqi nimada)/.test(t)) {
    aiCompare(raw);
    return;
  }

  if (/(sen kimsan|siz kimsiz|kim siz|sen kim|qanday botsan|suniy intellekt|ai nima)/.test(t)) {
    aiSay(
      "Men <strong>SmartMarket AI</strong> — do'konning ichki yordamchisiman. " +
        "Katalogdan mahsulot topaman, narx va chegirmalarni aytaman, yetkazib berish, to'lov, promokodlar va buyurtma holati bo'yicha javob beraman.<br><br>" +
        "Javoblar do'kon ma'lumotlariga asoslanadi, shuning uchun har doim aniq narx va mavjud mahsulotni ko'rsataman.",
      aiDefaultChips()
    );
    return;
  }

  if (/(nima qila olasan|nima qila|qanday yordam|yordam bera|imkoniyat|vazifang)/.test(t)) {
    aiSay(
      "Mana nimalarda yordam beraman:<br>" +
        "• <strong>Mahsulot qidirish</strong> — nomi, brendi yoki narxi bo'yicha<br>" +
        "• <strong>Eng arzon / eng yaxshi</strong> variantlarni tanlash<br>" +
        "• <strong>Promokodlar</strong> va chegirmalar<br>" +
        "• <strong>Yetkazib berish</strong> va to'lov shartlari<br>" +
        "• <strong>Buyurtma holati</strong> va savat<br>" +
        "• Kafolat, qaytarish va aloqa ma'lumotlari",
      aiDefaultChips()
    );
    return;
  }

  if (/(chegirmali|aksiyadagi|arzonlashtirilgan|katta chegirma)/.test(t)) {
    aiDiscounts();
    return;
  }

  if (/(promokod|promo kod|kupon|chegirma kod|skidka)/.test(t)) {
    aiPromoAnswer();
    return;
  }

  if (/(yetkaz|dostavka|kuryer|pochta|qancha kunda|necha kun|olib ket)/.test(t)) {
    aiSay(
      "🚚 <strong>Yetkazib berish</strong><br>" +
        "• O'zbekiston bo'ylab <strong>bepul</strong><br>" +
        "• Toshkent bo'ylab <strong>24 soat</strong> ichida<br>" +
        "• Boshqa hududlarga muddat manzilga qarab belgilanadi<br>" +
        "• Kuryer buyurtmani uyga yoki ishxonaga olib boradi<br><br>" +
        "Buyurtma holatini <strong>Buyurtmalarim</strong> bo'limida kuzatasiz.",
      [
        {
          label: "Buyurtmalarim",
          run: () => {
            closeAiAssistant();
            switchSection("profile");
          },
        },
        {
          label: "Savatni ochish",
          run: () => {
            closeAiAssistant();
            openCartModal();
          },
        },
      ]
    );
    return;
  }

  if (/(tolov|karta|naqd|muddatli|bolib tolash|nasiya|rassrochka)/.test(t)) {
    aiSay(
      "💳 <strong>To'lov usullari</strong><br>" +
        "• Naqd pul — kuryerga topshirganda<br>" +
        "• Bank kartasi orqali<br>" +
        "• <strong>0% muddatli to'lov</strong> — ortiqcha foizsiz<br><br>" +
        "To'lov buyurtmani rasmiylashtirishda tanlanadi.",
      [
        {
          label: "Katalogga o'tish",
          run: () => {
            closeAiAssistant();
            startShopping();
          },
        },
      ]
    );
    return;
  }

  if (/(kafolat|qaytar|garantiya|almash|nuqson|buzil)/.test(t)) {
    aiSay(
      "🛡 <strong>Kafolat va qaytarish</strong><br>" +
        "• Barcha mahsulotlarga rasmiy kafolat beriladi<br>" +
        "• Mahsulotni <strong>14 kun</strong> ichida qaytarish yoki almashtirish mumkin<br>" +
        "• Nuqson aniqlansa, almashtirish yoki pulni qaytarish ta'minlanadi<br><br>" +
        "Savatingizdagi xaridlar tarixi hisobingizda saqlanadi.",
      aiDefaultChips()
    );
    return;
  }

  if (/(aloqa|telefon raqam|manzil|qayerda joylash|telegram|instagram|email|ish vaqti|qollab quvvat)/.test(t)) {
    aiSay(
      "📍 <strong>SmartMarket bilan aloqa</strong><br>" +
        "• Manzil: Toshkent sh., Amir Temur shoh ko'chasi, 108<br>" +
        "• Telefon: <strong>+998 (71) 200-00-00</strong><br>" +
        "• Qo'llab-quvvatlash: <strong>24/7</strong><br><br>" +
        "Savolingizni shu yerda yozsangiz ham bo'ladi — men darhol javob beraman.",
      aiDefaultChips()
    );
    return;
  }

  if (/(vakansiya|karyera|ishga|rezume|lavozim|ish bormi)/.test(t)) {
    const lines = vacanciesData
      .map((job) => `• <strong>${escapeHtml(job.title)}</strong> — ${escapeHtml(job.salary)}`)
      .join("<br>");
    aiSay(
      `💼 Hozir <strong>${vacanciesData.length} ta vakansiya</strong> bor:<br>${lines}<br><br>` +
        "Ariza qoldirish uchun Vakansiyalar bo'limiga o'ting.",
      [
        {
          label: "Vakansiyalar",
          run: () => {
            closeAiAssistant();
            switchSection("vacancies");
          },
        },
      ]
    );
    return;
  }

  if (/(buyurtma|zakaz)/.test(t)) {
    if (/(holat|qayerda|kuzat|tekshir|raqam|tarix|royxat|nechta|qachon yetib)/.test(t)) {
      aiOrderStatus();
      return;
    }
    aiHowToOrder();
    return;
  }

  if (/(savat|korzina)/.test(t)) {
    aiCartAnswer();
    return;
  }

  if (/(royxatdan|kirmoq|kirish|login|parol|hisob|akkaunt|profil|sevimli)/.test(t)) {
    if (currentUser) {
      aiSay(
        `Siz <strong>${escapeHtml(currentUser.login || "mijoz")}</strong> sifatida tizimga kirgansiz. ` +
          "Savat, sevimlilar va buyurtmalar tarixi hisobingizda saqlanadi.",
        [
          {
            label: "Hisobim",
            run: () => {
              closeAiAssistant();
              switchSection("profile");
            },
          },
        ]
      );
    } else {
      aiSay(
        "🔐 Hisobingizga kirish yoki ro'yxatdan o'tish uchun <strong>Kirish</strong> tugmasini bosing. " +
          "Telefon raqam yoki email va parol yetarli.<br><br>" +
          "Hisob bilan: savat, sevimlilar va buyurtmalar tarixi saqlanadi. " +
          "Eslatma: <strong>buyurtma berish va sevimlilar uchun hisob majburiy</strong>.",
        [
          {
            label: "Kirish / Ro'yxatdan o'tish",
            run: () => {
              closeAiAssistant();
              openAuthModal();
              switchAuthTab("login");
            },
          },
        ]
      );
    }
    return;
  }

  if (/(kategoriya|katalog|bolim|assortiment|nima bor|qanaqa mahsulot)/.test(t)) {
    aiCategoriesAnswer();
    return;
  }

  if (/(eng arzon|arzon|tejamkor|budjet|byudjet|eng past narx)/.test(t)) {
    aiCheapest(raw);
    return;
  }

  if (/(eng yaxshi|sifatli|reyting|tavsiya|top mahsulot)/.test(t)) {
    aiTopRated(raw);
    return;
  }

  if (/(yangi kelgan|yangi mahsulot|yangi kolleksiya|oxirgi model|yangilik)/.test(t)) {
    aiNewArrivals();
    return;
  }

  const found = aiSearchProducts(raw);
  if (found.length) {
    const intro =
      found.length === 1
        ? "Mana shu mahsulotni topdim:"
        : `Topdim ${found.length} ta mos mahsulot:`;
    aiProductAnswer(found, intro);
    return;
  }

  const budget = aiBudget(raw);
  if (budget) {
    const types = aiDetectTypes(raw);
    const typed = aiProductsOfTypes(types);
    const category = aiDetectCategory(raw);
    const pool = (
      typed ||
      (category
        ? productsData.filter((p) => p.category === category)
        : productsData.slice())
    ).sort((a, b) => a.price - b.price);

    if (pool.length) {
      aiProductAnswer(
        pool,
        `Bu narx oralig'ida (${aiBudgetLabel(budget)}) mos mahsulot topilmadi.<br>` +
          `<strong>${escapeHtml(typed ? aiTypeLabel(types) : aiCategoryTitle(category))}</strong> bo'yicha eng arzon variantlar:`
      );
      return;
    }
  }

  aiSay(
    "Bu savolga aniq javob topa olmadim 🤔<br><br>" +
      'Mana nimalar bo\'yicha yordam bera olaman: mahsulot qidirish (masalan, <strong>"2 milliongacha quloqchin"</strong>), ' +
      "narxlar va chegirmalar, yetkazib berish, to'lov, promokodlar, buyurtma holati.<br><br>" +
      "Savolni boshqacha yozib ko'ring.",
    aiDefaultChips()
  );
}

function aiEnsureMarkup() {
  if (document.getElementById("aiLauncher")) return;

  const launcher = document.createElement("button");
  launcher.type = "button";
  launcher.id = "aiLauncher";
  launcher.className = "ai-launcher";
  launcher.setAttribute("aria-label", "AI yordamchi bilan suhbatlashish");
  launcher.onclick = () => toggleAiAssistant();
  launcher.innerHTML =
    '<span class="ai-launcher-icon"><i class="fa-solid fa-wand-magic-sparkles"></i>' +
    '<span class="ai-launcher-dot"></span></span>' +
    '<span class="ai-launcher-label">AI yordamchi</span>';
  document.body.appendChild(launcher);

  const panel = document.createElement("div");
  panel.id = "aiPanel";
  panel.className = "ai-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "SmartMarket AI yordamchi");
  panel.innerHTML =
    '<div class="ai-head">' +
    '<span class="ai-avatar"><i class="fa-solid fa-robot"></i></span>' +
    '<div class="ai-head-text"><strong>SmartMarket AI</strong>' +
    '<span><i class="ai-online"></i> Onlayn · o\'zbekcha</span></div>' +
    '<button type="button" class="ai-close" onclick="closeAiAssistant()" aria-label="Yopish">' +
    '<i class="fa-solid fa-xmark"></i></button>' +
    "</div>" +
    '<div class="ai-messages" id="aiMessages"></div>' +
    '<div class="ai-chips" id="aiChips"></div>' +
    '<form class="ai-input" id="aiForm" onsubmit="return aiSubmit(event)">' +
    '<input id="aiInput" type="text" autocomplete="off" maxlength="220" ' +
    'placeholder="Savolingizni yozing…" aria-label="Xabar" />' +
    '<button type="submit" aria-label="Yuborish"><i class="fa-solid fa-paper-plane"></i></button>' +
    "</form>";
  document.body.appendChild(panel);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAiAssistant();
  });
}

function openAiAssistant() {
  aiEnsureMarkup();
  const panel = document.getElementById("aiPanel");
  if (!panel) return;
  panel.classList.add("is-open");

  const host = aiHost();
  if (host && !host.children.length) {
    aiSay(
      "Salom! 👋 Men <strong>SmartMarket AI</strong>. Mahsulot topish, narxlar, chegirmalar, yetkazib berish va buyurtma holati bo'yicha yordam beraman.<br><br>" +
        "Nimadan boshlaymiz?",
      aiDefaultChips()
    );
  }

  if (window.innerWidth > 640) {
    window.setTimeout(() => {
      const input = document.getElementById("aiInput");
      if (input) input.focus();
    }, 240);
  }
}

function closeAiAssistant() {
  const panel = document.getElementById("aiPanel");
  if (panel) panel.classList.remove("is-open");
}

function toggleAiAssistant() {
  const panel = document.getElementById("aiPanel");
  if (!panel || !panel.classList.contains("is-open")) openAiAssistant();
  else closeAiAssistant();
}

function aiSubmit(event) {
  if (event) event.preventDefault();
  const input = document.getElementById("aiInput");
  if (!input) return false;
  const value = input.value.trim();
  if (!value) return false;
  input.value = "";
  aiSend(value);
  return false;
}

function aiSend(text) {
  const clean = String(text || "").trim();
  if (!clean) return;
  aiPushUser(clean);
  const typing = aiShowTyping();
  const delay = 420 + Math.min(1000, clean.length * 14);
  window.setTimeout(() => {
    if (typing && typing.parentNode) typing.parentNode.removeChild(typing);
    aiRespond(clean);
  }, delay);
}

function initAiAssistant() {
  aiEnsureMarkup();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAiAssistant);
} else {
  initAiAssistant();
}
