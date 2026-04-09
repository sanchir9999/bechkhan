type AdvantagesProps = {
    t: {
        advantages: {
            title: string;
            items: readonly { title: string; text: string }[];
        };
    };
};

export default function AdvantagesSection({ t }: AdvantagesProps) {
    return (
        <section id="advantages" className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight">{t.advantages.title}</h2>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {t.advantages.items.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
                        >
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="mt-3 leading-7 text-zinc-600">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}