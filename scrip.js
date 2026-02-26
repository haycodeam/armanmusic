const translations = {
    hy: {
        nav_about: "Մեր մասին",
        nav_services: "Ծառայություններ",
        nav_booking: "Գրանցում",

        first_section_title: "ԵՐԱԺՇՏՈՒԹՅԱՆ ՍՏԵՂԾՈՒՄ, ԶԱՐԳԱՑՈՒՄ և ՏԱՐԱԾՈՒՄ",
        first_section_text: "Level Music — երաժշտական լեյբլ և պրոդյուսինգ հարթակ",
        first_section_btn: "Գրանցվել",

        about_title: "Մեր մասին",
        about_text: "Level Music-ը ստեղծվել է, որպեսզի արտիստները և երաժիշտները ստանան բարձրորակ պրոֆեսիոնալ ձայն։ Մենք հատուկանցրել ենք ամենամասնագետ մեքենաներն ու կազմակերպել պրովտեղ ստուդիա։",
        about_box: "Պրոֆեսիոնալ սարքավորումներ, ծանուցյալ ինժեներներ և ստեղծագործական մթնոլորտ",

        services_title: "Ստուդիայի Ծառայություններ",
        services_title2: "Դասընթացներ",
        service_1: "Ձայնագրություն",
        service_2: "Ձայնի մշակում",
        service_3: "Բառեր Երաժշտությոն",
        service_4: "Երաժշտական գործիքավորում",
        service_5: "Երգի հրապարակում երաժշտական հարթակներում:",
        service_6: "Վոկալ",
        service_7: "Կիթառ",
        service_8: "Դաշնամուր",
        service_9: "Pro Tools | Logic Pro",
        service_10: "Fl Studio | Ableton | Nuendo",

        booking_title: "Օնլայն գրանցում",
        send_btn: "Ուղարկել",

        name: "Անուն",
        email: "Էլ․ հասցե",
        message: "Հաղորդագրություն"
    },

    ru: {
        nav_about: "о нас",
        nav_services: "Услуги",
        nav_booking: "Запись",

        first_section_title: "СОЗДАНИЕ, РАЗВИТИЕ И ПРОДВИЖЕНИЕ МУЗЫКИ ",
        first_section_text: "Level Music — Музыкальный лейбл и продюсерская платформа",
        first_section_btn: "Записаться",

        about_title: "о нас",
        about_text: "Level Music создан для артистов и музыкантов, которые ценят качество и профессионализм. Наша студия оснащена современным оборудованием и опытными специалистами для создания звука высочайшего качества.",
        about_box: "Профессиональное оборудование, опытные инженеры и творческая атмосфера",

        services_title: "Услуги Студии",
        service_1: "Запись вокала",
        service_2: "Обработка звука",
        service_3: "Текст / Музыка",
        service_4: "Музыкальная аранжировка",
        service_5: "Публикация песни на музыкальных платформах",
        service_6: "Вокал",
        service_7: "Гитара",
        service_8: "Фортепиано",
        service_9: "Pro Tools | Logic Pro",
        service_10: "Fl Studio | Ableton | Nuendo",


        booking_title: "Онлайн запись",
        send_btn: "Отправить",

        name: "Имя",
        email: "Email",
        message: "Сообщение"
    },

    en: {
        nav_about: "About",
        nav_services: "Services",
        nav_booking: "Booking",

        first_section_title: "MUSIC CREATION DEVELOMPENT & DISTRIBUTION",
        first_section_text: "Level Music — A music label and production platform",
        first_section_btn: "Book now",

        about_title: "About us",
        about_text: "Level Music was created for artists and musicians who value quality and professionalism. Our studio features state-of-the-art equipment and experienced specialists dedicated to creating the highest quality sound for your projects.",
        about_box: "Professional equipment, experienced engineers and creative atmosphere",

        services_title: "Studio Services",
        service_1: "Sound Recording",
        service_2: "Mix / Mastering",
        service_3: "Lyrics / Music",
        service_4: "Music Arrangement",
        service_5: "Distribution on music platforms:",
        service_6: "Vocal",
        service_7: "Guitar",
        service_8: "Piano",
        service_9: "Pro Tools | Logic Pro ",
        service_10: "Fl Studio | Ableton | Nuendo",

        booking_title: "Online booking",
        send_btn: "Send",

        name: "Name",
        email: "Email",
        message: "Message"
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        el.textContent = translations[lang][el.dataset.key];
    });

    document.querySelectorAll("[data-key-placeholder]").forEach(el => {
        el.placeholder = translations[lang][el.dataset.keyPlaceholder];
    });
}

document.querySelectorAll(".lang-switch button, .lang-switch_mobile button").forEach(btn => {
    btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
    });
});

setLanguage("hy");

document.getElementById("bookingForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("Շնորհակալություն, ձեր հայտը ուղարկված է");
    e.target.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuLinks = document.querySelectorAll('.menu a');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');

        if (menu.classList.contains('active')) {
            menuToggle.textContent = '✕';
        } else {
            menuToggle.textContent = '☰';
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
            menu.classList.remove('active');
            menuToggle.textContent = '☰';
        }
    });
});