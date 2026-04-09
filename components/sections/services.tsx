type ServicesProps = {
    t: {
        services: {
            title: string;
            items: readonly string[];
        };
    };
};

export default function ServicesSection({ t }: ServicesProps) {
    return (
        <section id="services" className="bg-zinc-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight">{t.services.title}</h2>

                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {t.services.items.map((item) => (
                        <div
                            key={item}
                            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
                        >
                            <div className="mb-4 h-2 w-14 rounded-full bg-red-600" />
                            <p className="text-lg font-semibold">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}