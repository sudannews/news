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
document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.getElementById("news-container");
    const tickerContent = document.getElementById("ticker-content");

    function loadNews() {
        const newsData = JSON.parse(localStorage.getItem("newsData")) || [];
        newsContainer.innerHTML = "";

        newsData.forEach((news) => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-item");
            newsItem.innerHTML = `
                <img src="${news.image}" alt="${news.title}">
                <h2>${news.title}</h2>
                <p>${news.description}</p>
                <a href="${news.link}" class="read-more">قراءة المزيد</a>
            `;
            newsContainer.appendChild(newsItem);
        });

        // تحديث شريط الأخبار المتحرك
        tickerContent.textContent = newsData.map(news => news.title).join(' | ');
    }

    loadNews();
});
