export type Lang = "mn" | "en" | "ru";

type Section = {
    title: string;
    text: string;
};

type Hero = {
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaThird: string;
    seoText: string;
};

type Contact = {
    title: string;
    email: string;
    phone: string;
    messenger: string;
    region: string;
    socialTitle: string;
    socials: {
        whatsapp?: string;
        viber?: string;
        wechat?: string;
        telegram?: string;
        facebook?: string;
        youtube?: string;
    };
};

type SiteContent = {
    nav: {
        about: string;
        services: string;
        advantages: string;
        contact: string;
    };

    hero: Hero;
    about: Section;

    services: {
        title: string;
        items: string[];
    };

    advantages: {
        title: string;
        items: { title: string; text: string }[];
    };

    contact: Contact;

    footer: {
        text: string;
    };
};

export const siteContent: Record<Lang, SiteContent> = {

    // ===================== MONGOL =====================
    mn: {
        nav: {
            about: "Бидний тухай",
            services: "Үйлчилгээ",
            advantages: "Давуу тал",
            contact: "Холбоо барих",
        },

        hero: {
            title: "Орос Монгол Ачаа Тээвэр",
            subtitle: "Найдвартай логистик шийдэл",
            description:
                "ОХУ, Казахстан, Беларусиас Монгол руу 1 кг-аас 100 тонн хүртэлх ачааг хурдан, найдвартай хүргэнэ. Гаалийн бүрдүүлэлт, агуулах үйлчилгээ бүрэн.",
            ctaPrimary: "Холбоо барих",
            ctaSecondary: "Үйлчилгээ",
            ctaThird: "Дэлгэрэнгүй",
            seoText:
                "Орос Монгол ачаа тээвэр, логистик үйлчилгээ, гааль, импорт экспорт, агуулах үйлчилгээ.",
        },

        about: {
            title: "Бидний тухай",
            text:
                "ТК Бечехан MN нь ОХУ, Казахстан, Беларусь улсаас Монгол Улс руу болон буцаан ачаа тээвэрлэлтийн чиглэлээр мэргэшсэн. Бид 1 кг-аас 100 тонн хүртэлх ачааг авто болон төмөр замаар тээвэрлэж, гаалийн бүрдүүлэлт болон ВЭД зөвлөгөө үзүүлдэг.",
        },

        services: {
            title: "Үйлчилгээ",
            items: ["Авто тээвэр", "Төмөр зам", "Гааль", "ВЭД зөвлөгөө"],
        },

        advantages: {
            title: "Яагаад биднийг сонгох вэ",
            items: [
                {
                    title: "Өргөн хамрах хүрээ",
                    text: "ОХУ, Казахстан, Беларусь ↔ Монгол чиглэлд тогтвортой үйлчилгээ.",
                },
                {
                    title: "Уян хатан хэмжээ",
                    text: "1 кг-аас 100 тонн хүртэлх ачаа тээвэрлэх боломжтой.",
                },
                {
                    title: "Мэргэжлийн зөвлөгөө",
                    text: "Гааль, ВЭД болон тээвэрлэлтийн шийдлийн зөвлөгөө.",
                },
                {
                    title: "24/7 дэмжлэг",
                    text: "Шуурхай холболт, найдвартай харилцагчийн үйлчилгээ.",
                },
            ],
        },

        contact: {
            title: "Холбоо барих",
            email: "oyuna@bechekhan.ru",
            phone: "+7 976 99 03 9686",
            messenger: "+7 991 427 19 04",
            region: "Монгол, ОХУ, Казахстан, Беларусь",
            socialTitle: "Сошиал холбоос",
            socials: {
                whatsapp: "https://wa.me/79914271904",
                viber: "viber://chat?number=+79914271904",
                wechat: "#",
                telegram: "#",
                facebook: "#",
                youtube: "#",
            },
        },

        footer: {
            text: "Bechekhan MN ©",
        },
    },

    // ===================== ENGLISH =====================
    en: {
        nav: {
            about: "About",
            services: "Services",
            advantages: "Advantages",
            contact: "Contact",
        },

        hero: {
            title: "Russia Mongolia Cargo Transport",
            subtitle: "Reliable logistics solution",
            description:
                "We provide cargo transport between Russia, Kazakhstan, Belarus and Mongolia.",
            ctaPrimary: "Contact",
            ctaSecondary: "Services",
            ctaThird: "More",
            seoText:
                "Russia Mongolia cargo transport, logistics services, customs clearance, import export, warehouse.",
        },

        about: {
            title: "About Us",
            text:
                "TK Bechekhan MN specializes in cargo transport between Russia, Kazakhstan, Belarus and Mongolia. We handle 1kg–100 tons by road and rail with customs clearance and VED consulting.",
        },

        services: {
            title: "Services",
            items: ["Road transport", "Rail transport", "Customs", "Consulting"],
        },

        advantages: {
            title: "Why choose us",
            items: [
                {
                    title: "Wide coverage",
                    text: "Stable logistics across Russia, Kazakhstan, Belarus ↔ Mongolia.",
                },
                {
                    title: "Flexible cargo",
                    text: "We transport from 1 kg up to 100 tons.",
                },
                {
                    title: "Professional consulting",
                    text: "Customs and VED logistics consulting.",
                },
                {
                    title: "24/7 support",
                    text: "Fast response and reliable customer service.",
                },
            ],
        },

        contact: {
            title: "Contact",
            email: "oyuna@bechekhan.ru",
            phone: "+7 976 99 03 9686",
            messenger: "+7 991 427 19 04",
            region: "Mongolia, Russia, Kazakhstan, Belarus",
            socialTitle: "Social links",
            socials: {
                whatsapp: "#",
                viber: "#",
                wechat: "#",
                telegram: "#",
                facebook: "#",
                youtube: "#",
            },
        },

        footer: {
            text: "Bechekhan MN ©",
        },
    },

    // ===================== RUSSIAN =====================
    ru: {
        nav: {
            about: "О нас",
            services: "Услуги",
            advantages: "Преимущества",
            contact: "Контакты",
        },

        hero: {
            title: "Грузоперевозки Россия Монголия",
            subtitle: "Надежная логистика",
            description:
                "Международные перевозки между Россией, Казахстаном, Беларусью и Монголией.",
            ctaPrimary: "Связаться",
            ctaSecondary: "Услуги",
            ctaThird: "Подробнее",
            seoText:
                "Грузоперевозки Россия Монголия, логистика, таможня, складские услуги.",
        },

        about: {
            title: "О нас",
            text:
                "ТК Бечехан MN специализируется на перевозках между Россией, Казахстаном, Беларусью и Монголией. Мы перевозим от 1 кг до 100 тонн с таможенным оформлением и ВЭД консультацией.",
        },

        services: {
            title: "Услуги",
            items: ["Авто", "ЖД", "Таможня", "Консалтинг"],
        },

        advantages: {
            title: "Почему выбирают нас",
            items: [
                {
                    title: "Широкая география",
                    text: "Россия, Казахстан, Беларусь ↔ Монголия.",
                },
                {
                    title: "Гибкие объемы",
                    text: "От 1 кг до 100 тонн.",
                },
                {
                    title: "Профессиональная поддержка",
                    text: "Таможня и ВЭД консультации.",
                },
                {
                    title: "24/7 поддержка",
                    text: "Быстрая и надежная связь.",
                },
            ],
        },

        contact: {
            title: "Контакты",
            email: "oyuna@bechekhan.ru",
            phone: "+7 976 99 03 9686",
            messenger: "+7 991 427 19 04",
            region: "Россия, Казахстан, Беларусь, Монголия",
            socialTitle: "Соцсети",
            socials: {
                whatsapp: "#",
                viber: "#",
                wechat: "#",
                telegram: "#",
                facebook: "#",
                youtube: "#",
            },
        },

        footer: {
            text: "Bechekhan MN ©",
        },
    },
};