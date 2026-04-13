import Image from "next/image";
import { useState } from "react";
import {
    FaWhatsapp,
    FaViber,
    FaWeixin,
    FaTelegramPlane,
    FaFacebookF,
    FaYoutube,
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
                youtube?: string;
            };
        };
    };
};

export default function ContactSection({ t }: ContactProps) {
    const socials = t.contact.socials ?? {};
    const [isQrOpen, setIsQrOpen] = useState(false);

    return (
        <>
            <section id="contact" className="bg-zinc-950 py-16 text-white">
                <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-bold tracking-tight">
                            {t.contact.title}
                        </h2>

                        <p className="mt-4 max-w-xl text-zinc-300">
                            Бидэнтэй холбогдож ачаа тээврийн үнэ, маршрут, гаалийн
                            бүрдүүлэлтийн талаар дэлгэрэнгүй мэдээлэл аваарай.
                        </p>

                        <div className="mt-8 max-w-xl">
                            <a
                                href={socials.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:bg-white/10"
                            >
                                <div className="relative h-40 w-full bg-zinc-800">
                                    <Image
                                        src="/facebook-preview.jpg"
                                        alt="Bechekhan MN Facebook page preview"
                                        fill
                                        loading="eager"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover translate-y-6"
                                    />
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl text-white">
                                            <Image
                                                src="/logo.png"
                                                alt="Bechekhan MN logo"
                                                width={88}
                                                height={88}
                                                priority
                                                className="object-contain p-1"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-base font-semibold text-white">
                                                Bechekhan Facebook Page
                                            </p>
                                            <p className="text-sm text-zinc-400">
                                                Албан ёсны Facebook хуудас
                                            </p>
                                        </div>
                                    </div>

                                    <p className="mt-4 text-sm leading-7 text-zinc-300">
                                        Манай Facebook хуудсаар зочилж шинэ
                                        мэдээлэл, үйлчилгээний танилцуулга болон
                                        холбогдох сувгуудыг үзээрэй.
                                    </p>

                                    <div className="mt-4 inline-flex rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
                                        Facebook нээх
                                    </div>
                                </div>
                            </a>
                        </div>
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
                                <span className="font-semibold">WhatsApp:</span>{" "}
                                <a
                                    href="tel:+79914271904"
                                    className="text-red-400 hover:text-red-300"
                                >
                                    +79914271904
                                </a>
                            </p>

                            <p>
                                <span className="font-semibold">Viber:</span>{" "}
                                <a
                                    href="tel:+79914271904"
                                    className="text-red-400 hover:text-red-300"
                                >
                                    +79914271904
                                </a>
                            </p>

                            <p>
                                <span className="font-semibold">WeChat:</span>{" "}
                                <button
                                    type="button"
                                    onClick={() => setIsQrOpen(true)}
                                    className="text-red-400 hover:text-red-300"
                                >
                                    +79140561369
                                </button>
                            </p>

                            <p>
                                <span className="font-semibold">Telegram:</span>{" "}
                                <a
                                    href="tel:+79914271904"
                                    className="text-red-400 hover:text-red-300"
                                >
                                    +79914271904
                                </a>
                            </p>

                            <p>
                                <span className="font-semibold">Service area:</span>{" "}
                                {t.contact.region}
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
                            socials.youtube) && (
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
                                            <button
                                                type="button"
                                                onClick={() => setIsQrOpen(true)}
                                                aria-label="WeChat"
                                                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-lg hover:bg-white/20"
                                            >
                                                <FaWeixin />
                                            </button>
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
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </section>

            {isQrOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                    onClick={() => setIsQrOpen(false)}
                >
                    <div
                        className="relative w-full max-w-md rounded-3xl bg-white p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setIsQrOpen(false)}
                            className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-base font-bold text-black hover:bg-black/20"
                        >
                            ✕
                        </button>

                        <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-2xl">
                            <Image
                                src="/QR.jpg"
                                alt="WeChat QR code"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}