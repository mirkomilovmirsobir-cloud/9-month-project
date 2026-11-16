/* =========================================================
   SmartMarket — storefront logic
   Catalog, cart, wishlist, vacancies, promotions, auth + UI motion
   ========================================================= */

const productsData = [
  {
    id: 1,
    title: "iPhone 15 Pro Max 256GB Natural Titanium",
    category: "gadgetlar",
    price: 16200000,
    oldPrice: 17500000,
    rating: 4.9,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=700&auto=format&fit=crop&q=80",
    isNew: true,
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra 12/512GB",
    category: "gadgetlar",
    price: 15400000,
    oldPrice: 16800000,
    rating: 4.8,
    reviews: 94,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=700&auto=format&fit=crop&q=80",
    isNew: true,
  },
  {
    id: 3,
    title: "MacBook Pro 14 M3 Chip 16GB/512GB Space Gray",
    category: "elektronika",
    price: 22500000,
    oldPrice: 24000000,
    rating: 5.0,
    reviews: 62,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700&auto=format&fit=crop&q=80",
    isNew: false,
  },
  {
    id: 4,
    title: "Sony PlayStation 5 Slim Digital Edition",
    category: "elektronika",
    price: 6400000,
    oldPrice: 7100000,
    rating: 4.9,
    reviews: 210,
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=700&auto=format&fit=crop&q=80",
    isNew: false,
  },
  {
    id: 5,
    title: "LG OLED Smart TV 55 dyuym 4K Cinema Display",
    category: "maishiy",
    price: 11200000,
    oldPrice: 13000000,
    rating: 4.7,
    reviews: 45,
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=700&auto=format&fit=crop&q=80",
    isNew: false,
  },
  {
    id: 6,
    title: "AirPods Pro (2-avlod) Type-C G'ilof bilan",
    category: "gadgetlar",
    price: 2950000,
    oldPrice: 3400000,
    rating: 4.8,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=700&auto=format&fit=crop&q=80",
    isNew: true,
  },
  {
    id: 7,
    title: "Dyson V15 Detect Akkumulyatorli Changyutgich",
    category: "maishiy",
    price: 8900000,
    oldPrice: 9800000,
    rating: 4.9,
    reviews: 38,
    image:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=700&auto=format&fit=crop&q=80",
    isNew: false,
  },
  {
    id: 8,
    title: "Erkaklar uchun Klassik Teri Ko'ylak va Shaddoz",
    category: "kiyim",
    price: 450000,
    oldPrice: 600000,
    rating: 4.5,
    reviews: 80,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=700&auto=format&fit=crop&q=80",
    isNew: false,
  },
  {
    id: 9,
    title: "iPad Air 11 M2 128GB Wi-Fi Blue",
    category: "elektronika",
    price: 7800000,
    oldPrice: 8600000,
    rating: 4.8,
    reviews: 71,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=700&auto=format&fit=crop&q=80",
    isNew: true,
  },
  {
    id: 10,
    title: "Apple Watch Series 9 45mm Sport Band",
    category: "gadgetlar",
    price: 5100000,
    oldPrice: 5800000,
    rating: 4.7,
    reviews: 143,
    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=700&auto=format&fit=crop&q=80",
    isNew: false,
  },
  {
    id: 11,
    title: "Canon EOS R50 18-45mm Kit Vlogger Kamera",
    category: "elektronika",
    price: 9800000,
    oldPrice: 10900000,
    rating: 4.9,
    reviews: 54,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700&auto=format&fit=crop&q=80",
    isNew: false,
  },
  {
    id: 12,
    title: "Nike Air Zoom Pegasus 41 Sport Krossovka",
    category: "kiyim",
    price: 1290000,
    oldPrice: 1550000,
    rating: 4.6,
    reviews: 187,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=80",
    isNew: true,
  },
];

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

// --- HERO 3D PRODUCT CAROUSEL ---
const carouselData = [
  { title: "iPhone 15 Pro Max", price: "16 200 000 so'm", category: "Gadjetlar" },
  { title: "Samsung Galaxy S24 Ultra", price: "15 400 000 so'm", category: "Gadjetlar" },
  { title: "MacBook Pro 14 M3", price: "22 500 000 so'm", category: "Elektronika" },
  { title: "AirPods Pro 2", price: "2 950 000 so'm", category: "Elektronika" },
  { title: "Dyson V15 Detect", price: "8 900 000 so'm", category: "Maishiy texnika" },
  { title: "Nike Pegasus 41", price: "1 290 000 so'm", category: "Kiyim-kechak" },
  { title: "PlayStation 5 Slim", price: "6 400 000 so'm", category: "Elektronika" },
  { title: "LG OLED TV 55\"", price: "11 200 000 so'm", category: "Maishiy texnika" },
];

function initCarousel() {
  const scene = document.getElementById("carouselScene");
  const ring = document.getElementById("carouselRing");
  if (!scene || !ring) return;

  const items = Array.from(ring.querySelectorAll(".carousel-item"));
  if (!items.length) return;

  const dots = Array.from(document.querySelectorAll("#carouselDots i"));
  const titleEl = document.getElementById("carouselTitle");
  const priceEl = document.getElementById("carouselPrice");
  const wordEl = document.getElementById("heroWord");
  const count = items.length;
  const step = 360 / count;

  let rot = -24;
  let target = 0;
  let tiltX = 0;
  let tiltY = 0;
  let tiltTargetX = 0;
  let tiltTargetY = 0;
  let activeIndex = 0;
  let dragging = false;
  let dragStartX = 0;
  let dragStartRot = 0;
  let paused = false;
  let autoTimer = null;

  const applyActive = (index) => {
    const safe = ((index % count) + count) % count;
    if (safe === activeIndex) return;
    activeIndex = safe;

    items.forEach((item, i) => item.classList.toggle("is-active", i === safe));
    dots.forEach((dot, i) => dot.classList.toggle("is-on", i === safe));

    const data = carouselData[safe];
    if (titleEl) titleEl.textContent = data.title;
    if (priceEl) priceEl.textContent = data.price;
    if (wordEl) wordEl.textContent = data.category;
  };

  const loop = () => {
    rot += (target - rot) * 0.09;
    tiltX += (tiltTargetX - tiltX) * 0.07;
    tiltY += (tiltTargetY - tiltY) * 0.07;

    const breathe = Math.sin(performance.now() / 1900) * 1.1;

    ring.style.setProperty("--rot", rot.toFixed(2) + "deg");
    ring.style.setProperty("--tx", (tiltX + breathe).toFixed(2) + "deg");
    ring.style.setProperty("--ty", tiltY.toFixed(2) + "deg");

    items.forEach((item, i) => {
      const angle = (((rot + i * step) % 360) + 360) % 360;
      const facing = Math.cos((angle * Math.PI) / 180);
      const depth = (1 - facing) / 2;
      item.style.opacity = (1 - depth * 0.86).toFixed(3);
    });

    applyActive(Math.round(-rot / step));
    requestAnimationFrame(loop);
  };

  const startAuto = () => {
    if (autoTimer) clearInterval(autoTimer);
    if (reducedMotion) return;
    autoTimer = setInterval(() => {
      if (paused || dragging) return;
      target -= step;
    }, 3400);
  };

  scene.addEventListener("pointerdown", (e) => {
    dragging = true;
    paused = true;
    dragStartX = e.clientX;
    dragStartRot = target;
    if (scene.setPointerCapture) scene.setPointerCapture(e.pointerId);
  });

  scene.addEventListener("pointermove", (e) => {
    if (dragging) {
      target = dragStartRot + (e.clientX - dragStartX) * 0.32;
      return;
    }
    const rect = scene.getBoundingClientRect();
    tiltTargetX = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    tiltTargetY = -((e.clientY - rect.top) / rect.height - 0.5) * 7;
  });

  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    target = -Math.round(-target / step) * step;
    window.setTimeout(() => {
      paused = false;
    }, 1400);
  };

  scene.addEventListener("pointerup", endDrag);
  scene.addEventListener("pointercancel", endDrag);

  scene.addEventListener("pointerleave", () => {
    tiltTargetX = 0;
    tiltTargetY = 0;
    endDrag();
  });

  document.querySelectorAll(".carousel-arrow").forEach((button) => {
    button.addEventListener("click", () => {
      target -= Number(button.dataset.dir) * step;
    });
  });

  if (reducedMotion) {
    ring.style.setProperty("--rot", "0deg");
    items.forEach((item, i) => (item.style.opacity = i === 0 ? "1" : "0.45"));
    return;
  }

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
