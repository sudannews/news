if (window.matchMedia('(display-mode: standalone)').matches) {
    // الموقع يُعرض كـ "تطبيق ويب"
}
 else {
    // الموقع يُعرض في المتصفح
    window.addEventListener('load', function() {
        if (!window.navigator.standalone) {
            // يمكن إضافة إشعار للمستخدم بتثبيت التطبيق
        }
    });
}

// قائمة الأخبار المباشرة);
// قائمة الأخبار المباشرة
const liveEvents = [
    "🚨 زلزال قوي يضرب اليابان!",
    "🎤 مؤتمر صحفي للرئيس الآن",
    "⚽ مباراة الكلاسيكو مستمرة!",
    "🔥 اندلاع حريق ضخم في مصنع",
    "💰 ارتفاع أسعار النفط عالميًا!"
];

let liveIndex = 0;

// تحديث الخبر المباشر كل 30 ثانية
function updateLiveEvent() {
    const liveEvent = document.getElementById("live-event");
    liveEvent.innerText = liveEvents[liveIndex];

    // إعادة تشغيل الأنيميشن عند تغيير النص
    liveEvent.style.animation = "none";
    setTimeout(() => {
        liveEvent.style.animation = "moveText 10s linear infinite";
    }, 10);

    liveIndex = (liveIndex + 1) % liveEvents.length;
}

// تنفيذ التحديث الأولي عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", updateLiveEvent);

// تحديث كل 30 ثانية
setInterval(updateLiveEvent, 30000);
// بيانات الأخبار
// بيانات الأخبار
const newsData = [
    { 
        title: 'السيطره على الدعم السريع', 
        description: 'تم السيطر على مواقع....', 
        image: 'img/IMG_٢٠٢٥٠٢٢٣_٢١٥٥٠٩_(600_x_600_pixel).jpg', 
        link: 'home news/news1.html' 
    },
    { 
        title: 'القطينه كاكي اخضر', 
        description: 'اعلن قائد من....', 
        image: 'img/IMG_٢٠٢٥٠٢٢٣_٢١٥٤٥٥_(600_x_600_pixel).jpg', 
        link: 'home news/news2.html' 
    },
    { 
        title: 'شرق النيل اليوم', 
        description: 'نشر جنود من الجيش السوداني....', 
        image: 'img/IMG_٢٠٢٥٠٢٢٣_٢١٥٤٤٠_(600_x_600_pixel).jpg', 
        link: 'home news/news3.html' 
    },
    { 
        title: 'قصف جوي استهدف', 
        description: 'قص جوي عنيف استهدف اليات.....', 
        image: 'img/IMG_٢٠٢٥٠٢٢٣_٢١٥٤٤٠_(600_x_600_pixel).jpg', 
        link: 'home news/news4.html' 
    },
    { 
        title: 'فلم الدشاش', 
        description: ' ...فيلم الدشاش يحقق 281 ألف جنيه ليلة السبت في السينمات', 
        image: 'img/202501150337163716.webp', 
        link: 'home news/news5.html' 
    },
    { 
        title: 'السيطره على الدعم السريع', 
        description: 'تم السيطر على مواقع....', 
        image: 'img/IMG_٢٠٢٥٠٢٢٣_٢١٥٥٠٩_(600_x_600_pixel).jpg',  
        link: 'home news/news6.html' 
    },
{ 
    title: 'القطينه كاكي اخضر', 
    description: 'اعلن قائد من....', 
    image: 'img/IMG_٢٠٢٥٠٢٢٣_٢١٥٤٥٥_(600_x_600_pixel).jpg', 
        link: 'home news/news7.html' 
    },
{ 
    title: 'شرق النيل اليوم', 
    description: 'نشر جنود من الجيش السوداني....', 
    image: 'img/IMG_٢٠٢٥٠٢٢٣_٢١٥٤٤٠_(600_x_600_pixel).jpg', 
    link: 'home news/news8.html' 
    },
{ 
    title: 'قصف جوي استهدف', 
    description: 'قص جوي عنيف استهدف اليات.....', 
    image: 'img/IMG_٢٠٢٥٠٢٢٣_٢١٥٤٤٠_(600_x_600_pixel).jpg', 
    link: 'home news/news9.html' 
    },
{ 
        title: 'فلم الدشاش', 
        description: ' ...فيلم الدشاش يحقق 281 ألف جنيه ليلة السبت في السينمات', 
        image: 'img/202501150337163716.webp', 
         
        link: 'home news/news10.html' 
    },
];

// عرض الأخبار في الصفحة
const newsContainer = document.getElementById('news-container');

newsData.forEach((news) => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.innerHTML = `
        <img src="${news.image}" alt="${news.title}">
        <h2>${news.title}</h2>
        <p>${news.description}</p>
        <a href="${news.link}" class="read-more">قراءة المزيد</a>
    `;
    newsContainer.appendChild(newsItem);
});

// شريط الأخبار المتحرك
const tickerContent = document.getElementById('ticker-content');
tickerContent.textContent = newsData.map(news => news.title).join(' | ');
