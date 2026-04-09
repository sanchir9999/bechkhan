type AboutProps = {
    t: {
        about: {
            title: string;
            text: string;
        };
    };
};

export default function AboutSection({ t }: AboutProps) {
    return (
        <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
                <h2 className="text-3xl font-bold tracking-tight">{t.about.title}</h2>
                <p className="mt-6 text-lg leading-8 text-zinc-600">{t.about.text}</p>
            </div>
        </section>
    );
}