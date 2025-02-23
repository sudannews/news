
// بيانات الأخبار
const newsData = [
    { 
        title: 'خبر 1', 
        description: 'وصف الخبر 1', 
        image: 'image1.jpg', 
        link: 'news1.html' 
    },
    { 
        title: 'خبر 2', 
        description: 'وصف الخبر 2', 
        image: 'image2.jpg', 
        link: 'news2.html' 
    },
    { 
        title: 'خبر 3', 
        description: 'وصف الخبر 3', 
        image: 'image3.jpg', 
        link: 'news3.html' 
    },
    { 
        title: 'خبر 4', 
        description: 'وصف الخبر 4', 
        image: 'image4.jpg', 
        link: 'news4.html' 
    },
    { 
        title: 'خبر 5', 
        description: 'وصف الخبر 5', 
        image: 'image5.jpg', 
        link: 'news5.html' 
    },
    { 
        title: 'خبر 6', 
        description: 'سمامارسمتم تسبكستس تصبكتصب بحتص حضباضاك', 
        image: 'image6.jpg', 
        link: 'news6.html' 
    },
{ 
        title: 'خبر 7', 
        description: 'سمامارسمتم تسبكستس تصبكتصب بحتص حضباضاك', 
        image: 'image6.jpg', 
        link: 'news7.html' 
    },
{ 
        title: 'خبر 8', 
        description: 'سمامارسمتم تسبكستس تصبكتصب بحتص حضباضاك', 
        image: 'image6.jpg', 
        link: 'news8.html' 
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



document.addEventListener('DOMContentLoaded', function() {
    // إضافة تفاعلية للزر (مثال: الرجوع للصفحة السابقة)
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', function(event) {
        event.preventDefault(); // منع السلوك الافتراضي للرابط
        window.history.back(); // الرجوع للصفحة السابقة
    });
});