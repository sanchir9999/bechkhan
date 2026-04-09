import {
    FaWhatsapp,
    FaViber,
    FaWeixin,
    FaTelegramPlane,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaTiktok,
    FaLinkedinIn,
} from "react-icons/fa";

type ContactProps = {
    t: {
        contact: {
            title: string;
            email: string;
            phone: string;
            messenger: string;
            region: string;
            socialTitle?: string;
            socials?: {
                whatsapp?: string;
                viber?: string;
                wechat?: string;
                telegram?: string;
                facebook?: string;
                instagram?: string;
                youtube?: string;
                tiktok?: string;
                linkedin?: string;
            };
        };
    };
};

export default function ContactSection({ t }: ContactProps) {
    const socials = t.contact.socials ?? {};

    return (
        <section id="contact" className="bg-zinc-950 py-16 text-white">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">{t.contact.title}</h2>
                    <p className="mt-4 max-w-xl text-zinc-300">
                        Бидэнтэй холбогдож ачаа тээврийн үнэ, маршрут, гаалийн бүрдүүлэлтийн
                        талаар дэлгэрэнгүй мэдээлэл аваарай.
                    </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <div className="space-y-4 text-sm sm:text-base">
                        <p>
                            <span className="font-semibold">Email:</span>{" "}
                            <a
                                href={`mailto:${t.contact.email}`}
                                className="text-red-400 hover:text-red-300"
                            >
                                {t.contact.email}
                            </a>
                        </p>

                        <p>
                            <span className="font-semibold">Phone:</span>{" "}
                            <a
                                href="tel:+797699039686"
                                className="text-red-400 hover:text-red-300"
                            >
                                {t.contact.phone}
                            </a>
                        </p>

                        <p>
                            <span className="font-semibold">WhatsApp / Viber / WeChat:</span>{" "}
                            <a
                                href="tel:+79914271904"
                                className="text-red-400 hover:text-red-300"
                            >
                                {t.contact.messenger}
                            </a>
                        </p>

                        <p>
                            <span className="font-semibold">Service area:</span> {t.contact.region}
                        </p>
                    </div>

                    <a
                        href={`mailto:${t.contact.email}`}
                        className="mt-6 inline-flex rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                    >
                        Contact now
                    </a>

                    {(socials.whatsapp ||
                        socials.viber ||
                        socials.wechat ||
                        socials.telegram ||
                        socials.facebook ||
                        socials.instagram ||
                        socials.youtube ||
                        socials.tiktok ||
                        socials.linkedin) && (
                            <div className="mt-8">
                                <h3 className="mb-4 text-lg font-semibold">
                                    {t.contact.socialTitle ?? "Social links"}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {socials.whatsapp && (
                                        <a
                                            href={socials.whatsapp}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="WhatsApp"
                                            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-lg hover:bg-white/20"
                                        >
                                            <FaWhatsapp />
                                        </a>
                                    )}

                                    {socials.viber && (
                                        <a
                                            href={socials.viber}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Viber"
                                            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-lg hover:bg-white/20"
                                        >
                                            <FaViber />
                                        </a>
                                    )}

                                    {socials.wechat && (
                                        <a
                                            href={socials.wechat}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="WeChat"
                                            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-lg hover:bg-white/20"
                                        >
                                            <FaWeixin />
                                        </a>
                                    )}

                                    {socials.telegram && (
                                        <a
                                            href={socials.telegram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Telegram"
                                            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-lg hover:bg-white/20"
                                        >
                                            <FaTelegramPlane />
                                        </a>
                                    )}

                                    {socials.facebook && (
                                        <a
                                            href={socials.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Facebook"
                                            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-lg hover:bg-white/20"
                                        >
                                            <FaFacebookF />
                                        </a>
                                    )}

                                    {socials.instagram && (
                                        <a
                                            href={socials.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Instagram"
                                            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-lg hover:bg-white/20"
                                        >
                                            <FaInstagram />
                                        </a>
                                    )}

                                    {socials.youtube && (
                                        <a
                                            href={socials.youtube}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="YouTube"
                                            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-lg hover:bg-white/20"
                                        >
                                            <FaYoutube />
                                        </a>
                                    )}

                                    {socials.tiktok && (
                                        <a
                                            href={socials.tiktok}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="TikTok"
                                            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-lg hover:bg-white/20"
                                        >
                                            <FaTiktok />
                                        </a>
                                    )}

                                    {socials.linkedin && (
                                        <a
                                            href={socials.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-lg hover:bg-white/20"
                                        >
                                            <FaLinkedinIn />
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </section>
    );
}