type PartnerProps = {
    lang?: "mn" | "en" | "ru";
};

const content = {
    mn: {
        badge: "Хамтрагч байгууллага",
        title: "Монгол дахь албаны түнш",
        partnerName: "Болд Ундарга Транс ХХК",
        description:
            "Монгол Улс дахь манай албан ёсны түнш байгууллага болох Болд Ундарга Транс ХХК-тай хамтран харилцагчдад найдвартай, шуурхай, тогтвортой тээврийн үйлчилгээг үзүүлж байна.",
    },
    en: {
        badge: "Partner Organization",
        title: "Official Partner in Mongolia",
        partnerName: "Bold Undarga Trans LLC",
        description:
            "We work together with our official partner in Mongolia, Bold Undarga Trans LLC, to provide reliable, fast, and stable logistics services for our clients.",
    },
    ru: {
        badge: "Партнёрская организация",
        title: "Официальный партнер в Монголии",
        partnerName: "Болд Ундарга Транс ХХК",
        description:
            "Мы сотрудничаем с нашим официальным партнером в Монголии — Болд Ундарга Транс ХХК, чтобы предоставлять клиентам надежные, оперативные и стабильные логистические услуги.",
    },
} as const;

export default function Partner({ lang = "mn" }: PartnerProps) {
    const t = content[lang];

    return (
        <section id="partner" className="w-full bg-white py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
                    <div className="grid gap-8 p-8 md:grid-cols-2 md:p-10">
                        <div className="flex flex-col justify-center">
                            <span className="mb-3 inline-block w-fit rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-700">
                                {t.badge}
                            </span>

                            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                                {t.title}
                            </h2>

                            <h3 className="mb-4 text-xl font-semibold text-gray-800">
                                {t.partnerName}
                            </h3>

                            <p className="text-base leading-7 text-gray-600">
                                {t.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="flex h-full min-h-[220px] w-full items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white p-8">
                                <div className="text-center">
                                    <div className="mb-3 text-5xl">🤝</div>
                                    <p className="text-lg font-semibold text-gray-800">
                                        {t.partnerName}
                                    </p>
                                    <p className="mt-2 text-sm text-gray-500">
                                        {t.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}