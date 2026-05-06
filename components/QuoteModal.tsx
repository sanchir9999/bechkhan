"use client";

import { useState } from "react";
import { Lang } from "@/lib/site-content";

export default function QuoteModal({
    open,
    onClose,
    lang,
}: {
    open: boolean;
    onClose: () => void;
    lang: Lang;
}) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    if (!open) return null;

    const texts = {
        mn: {
            title: "Үнийн санал авах",
            name: "Нэр",
            email: "Имэйл",
            phone: "Утасны дугаар",
            message: "Мессеж",
            send: "Илгээх",
            close: "Хаах",
            sending: "Илгээж байна...",
        },
        en: {
            title: "Get a Quote",
            name: "Name",
            email: "Email",
            phone: "Phone",
            message: "Message",
            send: "Send",
            close: "Close",
            sending: "Sending...",
        },
        ru: {
            title: "Запросить цену",
            name: "Имя",
            email: "Почта",
            phone: "Телефон",
            message: "Сообщение",
            send: "Отправить",
            close: "Закрыть",
            sending: "Отправка...",
        },
    };

    const t = texts[lang];

    const handleSubmit = async () => {
        if (!form.name || !form.email || !form.phone) {
            setError("Нэр, имэйл, утасны дугаар оруулна уу");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/quote", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                setSuccess(true);
                setForm({ name: "", email: "", phone: "", message: "" });
                setTimeout(() => {
                    onClose();
                    setSuccess(false);
                }, 2000);
            } else {
                setError("Мэйл илгээхэд алдаа гарлаа. Дахин оролдоно уу.");
            }
        } catch (err) {
            setError("Сүлжээний алдаа. Дахин оролдоно уу.");
        }

        setLoading(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* BACKDROP */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* MODAL */}
            <div className="relative w-[92%] max-w-lg rounded-2xl bg-white shadow-2xl border border-zinc-200 overflow-hidden animate-in fade-in zoom-in duration-200">

                {/* HEADER */}
                <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-4 text-white">
                    <h2 className="text-lg font-semibold">{t.title}</h2>
                    <p className="text-xs opacity-80">
                        24/7 логистик үнийн санал
                    </p>
                </div>

                {/* BODY */}
                <div className="p-6 space-y-3">

                    {success && (
                        <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-lg">
                            ✓ Мэйл амжилттай илгээгдлээ!
                        </div>
                    )}

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg">
                            ✗ {error}
                        </div>
                    )}

                    <input
                        placeholder={t.name}
                        value={form.name}
                        className="w-full rounded-lg border p-3 outline-none focus:border-red-500"
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                    />

                    <input
                        placeholder={t.email}
                        type="email"
                        value={form.email}
                        className="w-full rounded-lg border p-3 outline-none focus:border-red-500"
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                    />

                    <input
                        placeholder={t.phone}
                        value={form.phone}
                        className="w-full rounded-lg border p-3 outline-none focus:border-red-500"
                        onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                        }
                    />

                    <textarea
                        placeholder={t.message}
                        value={form.message}
                        rows={4}
                        className="w-full rounded-lg border p-3 outline-none focus:border-red-500"
                        onChange={(e) =>
                            setForm({ ...form, message: e.target.value })
                        }
                    />

                </div>

                {/* FOOTER */}
                <div className="flex items-center justify-between px-6 py-4 border-t bg-zinc-50">

                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg border hover:bg-zinc-100"
                    >
                        {t.close}
                    </button>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                    >
                        {loading ? t.sending : t.send}
                    </button>

                </div>

            </div>
        </div>
    );
}