const translations = {
    hy: {
        nav_home: "Գլխավոր",
        nav_about: "Մեր մասին",
        nav_services: "Ծառայություններ",
        nav_contact: "Կապ",

        hero_title: "Ստեղծում ենք ժամանակակից վեբ կայքեր",
        hero_text: "HayCode.am — վեբ մշակում հայկական մոտեցմամբ և համաշխարհային որակով",
        hero_btn: "Սկսել նախագիծ",

        about_title: "Մեր մասին",
        about_text: "HayCode.am-ը վեբ զարգացման ստուդիա է, որը ստեղծում է արագ, անվտանգ և ժամանակակից կայքեր։",
        about_box: "Մաքուր կոդ • Արագություն • Ժամանակակից դիզայն",

        services_title: "Մեր ծառայություններ և դասընթացներ",
        service_1: "Վեբ կայքերի մշակում",
        // service_2: "E-Commerce կայքեր",
        service_3: "UI/UX Դիզայն",
        service_4: "Կայքերի սպասարկում",
        service_5: "HTML / CSS Դասեր",
        service_6: "JavaScript / React / PHP Դասեր",

        contact_title: "Կապ մեզ հետ",
        send_btn: "Ուղարկել",

        name: "Անուն",
        email: "Էլ․ հասցե",
        message: "Հաղորդագրություն",
        select_purpose: "Ընտրեք նպատակ",
        purpose_course: "Դասերի համար",
        purpose_website: "Կայքի ստեղծման համար",

        success: "Շնորհակալություն, ձեր հայտը ուղարկված է"
    },

    ru: {
        nav_home: "Главная",
        nav_about: "О нас",
        nav_services: "Услуги",
        nav_contact: "Контакты",

        hero_title: "Создаём современные веб-сайты",
        hero_text: "HayCode.am — веб-разработка с армянским подходом и мировым качеством",
        hero_btn: "Начать проект",

        about_title: "О нас",
        about_text: "HayCode.am — студия веб-разработки, создающая быстрые и современные сайты.",
        about_box: "Чистый код • Скорость • Современный дизайн",

        services_title: "Наши услуги и курсы",
        service_1: "Разработка сайтов",
        // service_2: "E-Commerce сайты",
        service_3: "UI/UX Дизайн",
        service_4: "Поддержка сайтов",
        service_5: "Уроки HTML / CSS",
        service_6: "JavaScript / React / PHP",

        contact_title: "Связаться с нами",
        send_btn: "Отправить",

        name: "Имя",
        email: "Email",
        message: "Сообщение",
        select_purpose: "Выберите цель",
        purpose_course: "Для уроков",
        purpose_website: "Для создания сайта",

        success: "Спасибо, ваша заявка отправлена"
    },

    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_contact: "Contact",

        hero_title: "Building Modern Websites",
        hero_text: "HayCode.am — Web development with Armenian precision and global quality",
        hero_btn: "Start Project",

        about_title: "About us",
        about_text: "HayCode.am is a web development studio creating fast and modern websites.",
        about_box: "Clean Code • Speed • Modern Design",

        services_title: "Our Services & Courses",
        service_1: "Website Development",
        // service_2: "E-Commerce Solutions",
        service_3: "UI/UX Design",
        service_4: "Website Maintenance",
        service_5: "HTML / CSS  Lessons",
        service_6: "JavaScript / React / PHP Lessons",

        contact_title: "Contact Us",
        send_btn: "Send",

        name: "Name",
        email: "Email",
        message: "Message",
        select_purpose: "Select purpose",
        purpose_course: "For courses",
        purpose_website: "For website creation",

        success: "Thank you, your request has been sent"
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        el.textContent = translations[lang][el.dataset.key];
    });

    document.querySelectorAll("[data-key-placeholder]").forEach(el => {
        el.placeholder = translations[lang][el.dataset.keyPlaceholder];
    });

    document.querySelectorAll("select option[data-key]").forEach(opt => {
        opt.textContent = translations[lang][opt.dataset.key];
    });

    localStorage.setItem("language", lang);
}

document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
    });
});

const savedLang = localStorage.getItem("language") || "hy";
setLanguage(savedLang);

document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    alert(translations[savedLang].success);
    e.target.reset();
});

document.querySelectorAll("select[data-key-placeholder]").forEach(select => {
    const placeholderKey = select.dataset.keyPlaceholder;
    const placeholderOption = select.querySelector("option[value='']");
    placeholderOption.textContent = translations[savedLang][placeholderKey];
});