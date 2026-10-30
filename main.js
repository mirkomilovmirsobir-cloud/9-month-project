

    const productsData = [
      {
        id: 1,
        title: "iPhone 15 Pro Max 256GB Natural Titanium",
        category: "gadgetlar",
        price: 16200000,
        oldPrice: 17500000,
        rating: 4.9,
        reviews: 128,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format&fit=crop&q=80",
        isNew: true
      },
      {
        id: 2,
        title: "Samsung Galaxy S24 Ultra 12/512GB",
        category: "gadgetlar",
        price: 15400000,
        oldPrice: 16800000,
        rating: 4.8,
        reviews: 94,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=80",
        isNew: true
      },
      {
        id: 3,
        title: "MacBook Pro 14 M3 Chip 16GB/512GB Space Gray",
        category: "elektronika",
        price: 22500000,
        oldPrice: 24000000,
        rating: 5.0,
        reviews: 62,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=80",
        isNew: false
      },
      {
        id: 4,
        title: "Sony PlayStation 5 Slim Digital Edition",
        category: "elektronika",
        price: 6400000,
        oldPrice: 7100000,
        rating: 4.9,
        reviews: 210,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=80",
        isNew: false
      },
      {
        id: 5,
        title: "LG OLED Smart TV 55 dyuym 4K Cinema Display",
        category: "maishiy",
        price: 11200000,
        oldPrice: 13000000,
        rating: 4.7,
        reviews: 45,
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=80",
        isNew: false
      },
      {
        id: 6,
        title: "AirPods Pro (2-avlod) Type-C G'ilof bilan",
        category: "gadgetlar",
        price: 2950000,
        oldPrice: 3400000,
        rating: 4.8,
        reviews: 312,
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=80",
        isNew: true
      },
      {
        id: 7,
        title: "Dyson V15 Detect Akkumulyatorli Changyutgich",
        category: "maishiy",
        price: 8900000,
        oldPrice: 9800000,
        rating: 4.9,
        reviews: 38,
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&auto=format&fit=crop&q=80",
        isNew: false
      },
      {
        id: 8,
        title: "Erkaklar uchun Klassik Teri Ko'ylak va Shaddoz",
        category: "kiyim",
        price: 450000,
        oldPrice: 600000,
        rating: 4.5,
        reviews: 80,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=80",
        isNew: false
      }
    ];

    const vacanciesData = [
      {
        id: 1,
        title: "Senior Frontend Dasturchi (React / Tailwind)",
        type: "it",
        salary: "$1,500 - $2,500",
        location: "Toshkent (Gibrid rejim)",
        description: "SmartMarket platformasining foydalanuvchi interfeysini rivojlantirish va optimallashtirish."
      },
      {
        id: 2,
        title: "SMM va Kontent Menejer",
        type: "marketing",
        salary: "8,000,000 - 12,000,000 so'm",
        location: "Toshkent (Office)",
        description: "Ijtimoiy tarmoqlar (Telegram, Instagram) uchun kreativ kontent va reklama kampaniyalari tayyorlash."
      },
      {
        id: 3,
        title: "Omborxona Logistika Mutaxassisi",
        type: "logistics",
        salary: "6,000,000 - 8,000,000 so'm",
        location: "Toshkent viloyati",
        description: "Mahsulotlarni qabul qilish, joylashtirish va kuryerlarga taqsimlash jarayonlarini boshqarish."
      },
      {
        id: 4,
        title: "Mijozlarni Qo'llab-quvvatlash Operator (Call center)",
        type: "support",
        salary: "4,500,000 - 6,500,000 so'm",
        location: "Toshkent (Shiftli grafik)",
        description: "Mijozlar murojaatlari va buyurtma holatlari bo'yicha tezkor yordam ko'rsatish."
      }
    ];

    const promotionsData = [
      {
        title: "Gadjetlar Super Haftaligi",
        discount: "-30%",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=80",
        desc: "Barcha smartfon va quloqchinlarga chegirmalar amal qilmoqda."
      },
      {
        title: "Maishiy Texnika BUM",
        discount: "-40%",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=80",
        desc: "Oshxona va uy jihozlarini qulay narxlarda xarid qiling."
      },
      {
        title: "Mavsumiy Kiyimlar To'plami",
        discount: "-50%",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=80",
        desc: "Yangi kolleksiya kiyim-kechaklariga maxsus sovg'alar."
      }
    ];

    // --- APP STATE ---
    let wishlist = [];
    let cart = [];
    let currentUser = null;
    let currentCategory = 'all';

    // --- INITIALIZATION ---
    window.onload = function() {
      renderProducts();
      renderVacancies();
      renderPromotions();
      startCountdownTimer();
    };

    // --- PRODUCT FILTERING & SORTING LOGIC ---
    function filterAndSortProducts() {
      const searchVal = document.getElementById('searchInput').value.toLowerCase();
      const catSelectVal = document.getElementById('categorySelectFilter').value;
      const sortVal = document.getElementById('sortSelect').value;

      // 1. Filter
      let filtered = productsData.filter(p => {
        const matchesCategory = (currentCategory === 'all' && catSelectVal === 'all') || 
                                (currentCategory !== 'all' ? p.category === currentCategory : true) &&
                                (catSelectVal !== 'all' ? p.category === catSelectVal : true);
        const matchesSearch = p.title.toLowerCase().includes(searchVal);
        return matchesCategory && matchesSearch;
      });

      // 2. Sort
      if (sortVal === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortVal === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
      } else if (sortVal === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
      } else if (sortVal === 'name') {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
      }

      renderProductsGrid(filtered);
    }

    function switchCategory(category) {
      currentCategory = category;
      // Sync dropdown header filter
      document.getElementById('categorySelectFilter').value = category === 'all' ? 'all' : category;

      // Update Nav Buttons Style
      document.querySelectorAll('.nav-cat-btn').forEach(btn => {
        if(btn.dataset.cat === category) {
          btn.className = "nav-cat-btn active bg-brand-600 text-white px-3 py-1.5 rounded-lg transition";
        } else {
          btn.className = "nav-cat-btn text-gray-600 hover:text-brand-600 hover:bg-white px-3 py-1.5 rounded-lg transition";
        }
      });

      // Update category title text
      const titles = {
        'all': 'Barcha Mahsulotlar',
        'elektronika': 'Elektronika',
        'gadgetlar': 'Gadjetlar',
        'maishiy': 'Maishiy Texnika',
        'kiyim': 'Kiyim-kechak'
      };
      document.getElementById('currentCategoryTitle').innerText = titles[category] || 'Mahsulotlar';

      switchSection('products');
      filterAndSortProducts();
    }

    // --- RENDER PRODUCTS GRID ---
    function renderProducts() {
      filterAndSortProducts();
    }

    function renderProductsGrid(items) {
      const grid = document.getElementById('productGrid');
      document.getElementById('productCountText').innerText = `Topildi: ${items.length} ta mahsulot`;

      if (items.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full py-12 text-center text-gray-400">
            <i class="fa-solid fa-box-open text-4xl mb-2"></i>
            <p class="font-medium">Afsuski, hech qanday mahsulot topilmadi.</p>
          </div>
        `;
        return;
      }

      grid.innerHTML = items.map(product => {
        const isWishlisted = wishlist.includes(product.id);
        const formattedPrice = product.price.toLocaleString('uz-UZ') + " so'm";
        const formattedOldPrice = product.oldPrice ? product.oldPrice.toLocaleString('uz-UZ') + " so'm" : '';

        return `
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between overflow-hidden group">
            <div class="relative p-3 bg-gray-50/50">
              <!-- New Badge -->
              ${product.isNew ? '<span class="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">YANGI</span>' : ''}
              
              <!-- Heart Toggle Icon Button inside Gadget/Product Card -->
              <button onclick="toggleWishlist(${product.id})" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-rose-500 hover:bg-white shadow-sm z-10 transition">
                <i class="${isWishlisted ? 'fa-solid fa-heart text-rose-500' : 'fa-regular fa-heart'} text-base"></i>
              </button>

              <img src="${product.image}" alt="${product.title}" class="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition duration-300">
            </div>

            <div class="p-4 flex-grow flex flex-col justify-between space-y-3">
              <div>
                <div class="flex items-center gap-1 text-amber-400 text-xs font-semibold mb-1">
                  <i class="fa-solid fa-star"></i>
                  <span>${product.rating}</span>
                  <span class="text-gray-400 font-normal">(${product.reviews})</span>
                </div>
                <h3 class="font-semibold text-gray-800 text-xs sm:text-sm line-clamp-2 hover:text-brand-600 transition cursor-pointer">${product.title}</h3>
              </div>

              <div>
                <div class="mb-2">
                  ${formattedOldPrice ? `<span class="text-[11px] text-gray-400 line-through block">${formattedOldPrice}</span>` : ''}
                  <span class="text-sm sm:text-base font-extrabold text-gray-900">${formattedPrice}</span>
                </div>

                <button onclick="addToCart(${product.id})" class="w-full bg-brand-50 hover:bg-brand-600 text-brand-600 hover:text-white font-semibold text-xs py-2 px-3 rounded-xl transition flex items-center justify-center gap-1.5">
                  <i class="fa-solid fa-cart-plus"></i> Savatga olish
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    // --- WISHLIST SYSTEM ---
    function toggleWishlist(productId) {
      const index = wishlist.indexOf(productId);
      const product = productsData.find(p => p.id === productId);

      if (index === -1) {
        wishlist.push(productId);
        showToast(`"${product.title.substring(0, 20)}..." sevimlilarga qo'shildi`, 'success');
      } else {
        wishlist.splice(index, 1);
        showToast(`Mahsulot sevimlilardan olib tashlandi`, 'info');
      }

      updateWishlistBadge();
      filterAndSortProducts(); // Redraw hearts in grid
      if (!document.getElementById('wishlistModal').classList.contains('hidden')) {
        renderWishlistModal();
      }
    }

    function updateWishlistBadge() {
      const badge = document.getElementById('wishlistBadge');
      if (wishlist.length > 0) {
        badge.innerText = wishlist.length;
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    }

    function openWishlistModal() {
      renderWishlistModal();
      document.getElementById('wishlistModal').classList.remove('hidden');
    }

    function closeWishlistModal() {
      document.getElementById('wishlistModal').classList.add('hidden');
    }

    function renderWishlistModal() {
      const container = document.getElementById('wishlistItemsContainer');
      if (wishlist.length === 0) {
        container.innerHTML = `
          <div class="text-center py-8 text-gray-400">
            <i class="fa-regular fa-heart text-4xl mb-2"></i>
            <p>Sevimli mahsulotlaringiz mavjud emas.</p>
          </div>
        `;
        return;
      }

      const favProducts = productsData.filter(p => wishlist.includes(p.id));
      container.innerHTML = favProducts.map(p => `
        <div class="flex items-center justify-between p-3 border rounded-xl hover:bg-gray-50">
          <div class="flex items-center gap-3">
            <img src="${p.image}" class="w-12 h-12 object-cover rounded-lg">
            <div>
              <h4 class="font-bold text-xs sm:text-sm text-gray-800 line-clamp-1">${p.title}</h4>
              <p class="text-xs text-brand-600 font-bold">${p.price.toLocaleString('uz-UZ')} so'm</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="addToCart(${p.id})" class="bg-brand-600 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-brand-700">Savatga</button>
            <button onclick="toggleWishlist(${p.id})" class="text-gray-400 hover:text-rose-500 p-2"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      `).join('');
    }

    // --- CART SYSTEM ---
    function addToCart(productId) {
      const existing = cart.find(item => item.id === productId);
      const product = productsData.find(p => p.id === productId);

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ id: productId, quantity: 1 });
      }

      showToast(`"${product.title.substring(0, 20)}..." savatga qo'shildi`, 'success');
      updateCartBadge();
    }

    function updateCartBadge() {
      const badge = document.getElementById('cartBadge');
      const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

      if (totalCount > 0) {
        badge.innerText = totalCount;
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    }

    function openCartModal() {
      renderCartModal();
      document.getElementById('cartModal').classList.remove('hidden');
    }

    function closeCartModal() {
      document.getElementById('cartModal').classList.add('hidden');
    }

    function updateCartQuantity(productId, delta) {
      const item = cart.find(i => i.id === productId);
      if (!item) return;

      item.quantity += delta;
      if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
      }

      updateCartBadge();
      renderCartModal();
    }

    function renderCartModal() {
      const container = document.getElementById('cartItemsContainer');
      let total = 0;

      if (cart.length === 0) {
        container.innerHTML = `
          <div class="text-center py-8 text-gray-400">
            <i class="fa-solid fa-cart-arrow-down text-4xl mb-2"></i>
            <p>Savatda hech qanday mahsulot yo'q.</p>
          </div>
        `;
        document.getElementById('cartTotalPrice').innerText = "0 so'm";
        return;
      }

      container.innerHTML = cart.map(cartItem => {
        const product = productsData.find(p => p.id === cartItem.id);
        const itemTotal = product.price * cartItem.quantity;
        total += itemTotal;

        return `
          <div class="flex items-center justify-between p-3 border rounded-xl bg-gray-50/50">
            <div class="flex items-center gap-3">
              <img src="${product.image}" class="w-12 h-12 object-cover rounded-lg">
              <div>
                <h4 class="font-bold text-xs sm:text-sm text-gray-800 line-clamp-1">${product.title}</h4>
                <p class="text-xs text-brand-600 font-bold">${product.price.toLocaleString('uz-UZ')} so'm</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="flex items-center border border-gray-200 bg-white rounded-lg">
                <button onclick="updateCartQuantity(${product.id}, -1)" class="px-2 py-1 text-xs text-gray-600 hover:bg-gray-100">-</button>
                <span class="px-2 py-1 text-xs font-bold">${cartItem.quantity}</span>
                <button onclick="updateCartQuantity(${product.id}, 1)" class="px-2 py-1 text-xs text-gray-600 hover:bg-gray-100">+</button>
              </div>
              <button onclick="updateCartQuantity(${product.id}, -${cartItem.quantity})" class="text-gray-400 hover:text-rose-500"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        `;
      }).join('');

      document.getElementById('cartTotalPrice').innerText = total.toLocaleString('uz-UZ') + " so'm";
    }

    function checkoutSimulation() {
      if (cart.length === 0) return;
      showToast("Buyurtmangiz muvaffaqiyatli qabul qilindi! Operatormiz tez orada bog'lanadi.", 'success');
      cart = [];
      updateCartBadge();
      closeCartModal();
    }

    // --- SECTION SWITCHER (PRODUCTS, VACANCIES, PROMOTIONS, ABOUT, B2B) ---
    function switchSection(sectionName) {
      const sections = ['products', 'vacancies', 'promotions', 'about', 'b2b'];
      sections.forEach(sec => {
        const el = document.getElementById(`section-${sec}`);
        if (el) el.classList.add('hidden');
      });

      const activeEl = document.getElementById(`section-${sectionName}`);
      if (activeEl) activeEl.classList.remove('hidden');

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // --- VACANCIES LOGIC ---
    function renderVacancies(filter = 'all') {
      const container = document.getElementById('vacancyList');
      const filtered = filter === 'all' ? vacanciesData : vacanciesData.filter(v => v.type === filter);

      container.innerHTML = filtered.map(vac => `
        <div class="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-emerald-200 transition space-y-3">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-bold text-gray-900 text-base">${vac.title}</h3>
              <p class="text-xs text-gray-500"><i class="fa-solid fa-location-dot mr-1"></i>${vac.location}</p>
            </div>
            <span class="bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-md border border-emerald-100">${vac.salary}</span>
          </div>
          <p class="text-xs text-gray-600">${vac.description}</p>
          <button onclick="openJobModal('${vac.title}')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs px-4 py-2 rounded-lg transition">Ariza topshirish</button>
        </div>
      `).join('');
    }

    function filterVacancies() {
      const selected = document.querySelector('input[name="vacFilter"]:checked').value;
      renderVacancies(selected);
    }

    function openJobModal(title) {
      document.getElementById('jobModalTitle').innerText = `${title} - Ariza yuborish`;
      document.getElementById('jobApplyModal').classList.remove('hidden');
    }

    function closeJobModal() {
      document.getElementById('jobApplyModal').classList.add('hidden');
    }

    function handleJobApplySubmit(e) {
      e.preventDefault();
      closeJobModal();
      showToast("Arizangiz muvaffaqiyatli qabul qilindi!", 'success');
    }

    // --- PROMOTIONS SECTION RENDER & TIMER ---
    function renderPromotions() {
      const container = document.getElementById('promoCardsContainer');
      container.innerHTML = promotionsData.map(p => `
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between">
          <div class="relative">
            <span class="absolute top-3 left-3 bg-red-600 text-white font-bold text-xs px-2.5 py-1 rounded-full">${p.discount}</span>
            <img src="${p.image}" class="w-full h-44 object-cover">
          </div>
          <div class="p-4 space-y-2">
            <h3 class="font-bold text-gray-900 text-base">${p.title}</h3>
            <p class="text-xs text-gray-500">${p.desc}</p>
            <button onclick="switchCategory('gadgetlar')" class="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs py-2 rounded-lg transition">Aksiyani Ko'rish</button>
          </div>
        </div>
      `).join('');
    }

    function startCountdownTimer() {
      let hours = 18, minutes = 42, seconds = 15;
      setInterval(() => {
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 24; }

        document.getElementById('timerHours').innerText = String(hours).padStart(2, '0');
        document.getElementById('timerMinutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('timerSeconds').innerText = String(seconds).padStart(2, '0');
      }, 1000);
    }

    // --- FORM SUBMISSIONS (PARTNER & B2B) ---
    function handlePartnerSubmit(e) {
      e.preventDefault();
      showToast("Hamkorlik arizangiz yuborildi! Menejerimiz bog'lanadi.", 'success');
      e.target.reset();
    }

    function handleB2BSubmit(e) {
      e.preventDefault();
      showToast("Tijorat taklifi so'rovi qabul qilindi!", 'success');
      e.target.reset();
    }

    // --- AUTHENTICATION MODAL LOGIC ---
    function openAuthModal() {
      document.getElementById('authModal').classList.remove('hidden');
    }

    function closeAuthModal() {
      document.getElementById('authModal').classList.add('hidden');
    }

    function switchAuthTab(tab) {
      const loginForm = document.getElementById('loginForm');
      const registerForm = document.getElementById('registerForm');
      const tabLoginBtn = document.getElementById('tabLoginBtn');
      const tabRegisterBtn = document.getElementById('tabRegisterBtn');

      if (tab === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        tabLoginBtn.className = "flex-1 py-2.5 font-bold text-sm text-brand-600 border-b-2 border-brand-600";
        tabRegisterBtn.className = "flex-1 py-2.5 font-bold text-sm text-gray-400 border-b-2 border-transparent";
      } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        tabRegisterBtn.className = "flex-1 py-2.5 font-bold text-sm text-brand-600 border-b-2 border-brand-600";
        tabLoginBtn.className = "flex-1 py-2.5 font-bold text-sm text-gray-400 border-b-2 border-transparent";
      }
    }

    function handleLogin(e) {
      e.preventDefault();
      const val = document.getElementById('loginInput').value;
      currentUser = val || 'Foydalanuvchi';
      updateHeaderUser();
      closeAuthModal();
      showToast(`Xush kelibsiz, ${currentUser}!`, 'success');
    }

    function handleRegister(e) {
      e.preventDefault();
      const name = document.getElementById('regNameInput').value;
      currentUser = name || 'Yangi Foydalanuvchi';
      updateHeaderUser();
      closeAuthModal();
      showToast("Muvaffaqiyatli ro'yxatdan o'tdingiz!", 'success');
    }

    function updateHeaderUser() {
      const authBtnText = document.getElementById('authBtnText');
      if (currentUser) {
        authBtnText.innerText = currentUser;
      }
    }

    // --- TOAST NOTIFICATION UTILITY ---
    function showToast(message, type = 'info') {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      
      const bgColor = type === 'success' ? 'bg-gray-900 text-white border-l-4 border-emerald-500' : 'bg-gray-900 text-white border-l-4 border-brand-500';
      
      toast.className = `${bgColor} text-xs font-semibold px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 pointer-events-auto transform transition duration-300 translate-y-2 opacity-0`;
      toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check text-emerald-400' : 'fa-circle-info text-brand-400'}"></i> ${message}`;

      container.appendChild(toast);

      setTimeout(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
      }, 50);

      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }