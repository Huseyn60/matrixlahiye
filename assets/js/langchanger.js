const langData = {
    az: ["<a class='nav-link' href='#'>Ana Səhifə</a>","<a class='nav-link' href='#'>Mağazamız</a>" ,"<a class='nav-link' href='#'>Haqqımızda</a>","<a class='nav-link' href='#'>Səhifələr</a>","<a class='nav-link' href='#'>Bloq</a>", "<a class='nav-link' href='#'>Əlaqə</a>", 
    "YENİ","MƏHSULLAR","Lorem Ipsum keçidlərinin bir çox variantı mövcuddur, lakin əksəriyyətində mövcuddur",
    "bəzi ledmid formasında lebmid dəyişikliyinə məruz qalmışdır","Bizimlə qalın","İndi bülletenlərimizə abunə olun və yeni kolleksiyalardan ,"
    ,"baxış kitabları və eksklüziv təkliflərdən xəbərdar olun", "YENİ","MƏHSULLAR","Lorem Ipsum keçidlərinin bir çox variantı mövcuddur, lakin əksəriyyətində mövcuddur",
    "bəzi ledmid formasında lebmid dəyişikliyinə məruz qalmışdır",
    "Hamısı", "Bioqrafik", "Macəra", "Uşaqlar", "Aşpaz","YENİ","MƏHSULLAR","Lorem Ipsum keçidlərinin bir çox variantı mövcuddur, lakin əksəriyyətində mövcuddur",
    "bəzi ledmid formasında lebmid dəyişikliyinə məruz qalmışdır",
    "Frankfurt Kitabının Beynəlxalq Fəaliyyətləri","Biz frankfurt xəbərlərinin ilk buraxılışını elan etməkdən qürur duyuruq. Fay Frankfurt xəbərlərinin bizim üçün ilk buraxılışını elan etməkdən qürur duyuruq.",
    "Frankfurt Kitabının Beynəlxalq Fəaliyyətləri","Biz frankfurt xəbərlərinin ilk buraxılışını elan etməkdən qürur duyuruq. Fay Frankfurt xəbərlərinin bizim üçün ilk buraxılışını elan etməkdən qürur duyuruq.",
    "Frankfurt Kitabının Beynəlxalq Fəaliyyətləri","Biz frankfurt xəbərlərinin ilk buraxılışını elan etməkdən qürur duyuruq. Fay Frankfurt xəbərlərinin bizim üçün ilk buraxılışını elan etməkdən qürur duyuruq.",
    "ƏN YAXŞI","MƏHSULLAR","Lorem Ipsum keçidlərinin bir çox variantı mövcuddur, lakin əksəriyyətində mövcuddur",
    "bəzi ledmid formasında lebmid dəyişikliyinə məruz qalmışdır",
    "Lorem Ipsum keçidlərinin bir çox variantı mövcuddur, lakin əksəriyyətində mövcuddur",
    "bəzi ledmid formasında lebmid dəyişikliyinə məruz qalmışdır","Trend",
    "Ən yaxşı satıcı",
    "Bütün məhsullar",
    "İstək siyahısı",
    "Bloq",
    "Əlaqə",
],
    en: ["<a class='nav-link' href='home.html'>Home</a>", "<a class='nav-link' href='shop.html'>Shop</a>",
    "<a class='nav-link' href='aboutus.html'>About Us</a>", "<a class='nav-link' href='#'>Pages</a>", "<a class='nav-link' href='blog.html'>Blog</a>",
    "<a class='nav-link' href='contactus.html'>Contact Us</a>", "NEW","PRODUCTS","There are many variations of passages of Lorem Ipsum available, but the majority have",
     "suffered lebmid alteration in some ledmid form","Stay with us",
     "Subscribe to our newsletters now and stay up-to-date with new collections, the","latest lookbooks and exclusive offers.",
     "NEW","PRODUCTS","There are many variations of passages of Lorem Ipsum available, but the majority have",
     "suffered lebmid alteration in some ledmid form","All","Biographic","Adventure","Children","Cook","NEW","PRODUCTS",
     "There are many variations of passages of Lorem Ipsum available, but the majority have",
     "suffered lebmid alteration in some ledmid form",
     "International Activities Of The Frankfurt Book","We are proud to announce the very first the edition of the frankfurt news.We are proud to announce the very first of edition of the fault frankfurt news for us.",
     "International Activities Of The Frankfurt Book","We are proud to announce the very first the edition of the frankfurt news.We are proud to announce the very first of edition of the fault frankfurt news for us.",
     "International Activities Of The Frankfurt Book","We are proud to announce the very first the edition of the frankfurt news.We are proud to announce the very first of edition of the fault frankfurt news for us.",
     "BEST","PRODUCTS",
     "There are many variations of passages of Lorem Ipsum available, but the majority have",
     "suffered lebmid alteration in some ledmid form",
     "There are many variations of passages of Lorem Ipsum available, but the majority have",
     "suffered lebmid alteration in some ledmid form",
     "Trending",
"Best Seller",
"All Product",
"Wishlist",
"Blog",
"Contact",
    ]
};
const langBtn = document.querySelector('#lang-btn');
const langItem = document.querySelectorAll('.dil');

function multiLang() {
    if (langBtn.innerHTML.includes('34bd85163b398ccb80a30562cb6512f6da5287fe')) {
        langItem.forEach((item, index) => {
            item.innerHTML = langData.az[index];
        });
        langBtn.innerHTML = "<img src='https://avatars.mds.yandex.net/i?id=d293b69ae3670461c98d9bcfb130d54bdb37439d-12441729-images-thumbs&n=13' alt='' width='20px' height='20px'>";
    } else {
        langItem.forEach((item, index) => {
            item.innerHTML = langData.en[index];
        });
        langBtn.innerHTML = "<img src='https://avatars.mds.yandex.net/i?id=34bd85163b398ccb80a30562cb6512f6da5287fe-12146588-images-thumbs&n=13' alt='' width='20px' height='20px'>";
    }
}

langBtn.onclick = multiLang;
