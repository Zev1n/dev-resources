'use client';

import { useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    GithubLogoIcon,
    LinkedinLogoIcon,
    EnvelopeSimpleIcon,
    PaperPlaneTiltIcon,
} from '@phosphor-icons/react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactPage() {
    const [status, setStatus] = useState<Status>('idle');
    const [errorMsg, setErrorMsg] = useState<string>('');

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const EMAILJS_TEMPLATE_CONFIRMATION_ID =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONFIRMATION_ID!;
    const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    const canSend = useMemo(() => {
        const ok =
            form.name.trim().length >= 2 &&
            form.email.includes('@') &&
            form.subject.trim().length >= 3 &&
            form.message.trim().length >= 10;
        return ok && status !== 'sending';
    }, [form, status]);

    function updateField<K extends keyof typeof form>(key: K, value: string) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErrorMsg('');

        if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY) {
            setStatus('error');
            setErrorMsg('EmailJS não configurado corretamente.');
            return;
        }

        const time = new Date().toLocaleString('pt-BR', {
            timeZone: 'America/Sao_Paulo',
        });

        try {
            setStatus('sending');

            // 1️⃣ EMAIL PARA VOCÊ (NOTIFICAÇÃO)
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Contact Us
                {
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message,
                    time,
                },
                { publicKey: EMAILJS_PUBLIC_KEY }
            );

            // 2️⃣ EMAIL DE CONFIRMAÇÃO PARA O USUÁRIO
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID!, // Auto Reply
                {
                    name: form.name,
                    to_email: form.email, // ⚠ ESSENCIAL
                    email: form.email,
                    message: form.message,
                    time,
                },
                { publicKey: EMAILJS_PUBLIC_KEY }
            );

            setStatus('success');
            setForm({ name: '', email: '', subject: '', message: '' });
        } catch (err) {
            console.error(err);
            setStatus('error');
            setErrorMsg('Erro ao enviar mensagem.');
        }
    }

    return (
        <div className="min-h-[calc(100vh-80px)] bg-[#0b1d3a] text-white">
            <section className="mx-auto max-w-6xl px-6 py-14">
                <div className="mb-10 py-12">
                    <h1 className="text-4xl font-semibold">Contato</h1>
                    <p className="mt-2 text-white/70">
                        Fale comigo por redes sociais ou envie uma mensagem pelo formulário.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                    {/* Cards de contato */}
                    <div className="rounded-2xl bg-[#2b3445]/70 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                        <h2 className="text-xl font-semibold">Me encontre aqui</h2>
                        <p className="mt-2 text-sm text-white/70">
                            Links rápidos para minhas redes e e-mail.
                        </p>

                        <div className="mt-6 grid gap-3">
                            <a
                                href="https://github.com/Zev1n"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-4 text-sm text-white/85 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10"
                            >
                                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                                    <GithubLogoIcon size={20} />
                                </span>
                                <div className="flex flex-col">
                                    <span className="font-medium">GitHub</span>
                                    <span className="text-xs text-white/60">
                                        https://github.com/Zev1n
                                    </span>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/henrique-azevedo-flores-278611235/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-4 text-sm text-white/85 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10"
                            >
                                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                                    <LinkedinLogoIcon size={20} />
                                </span>
                                <div className="flex flex-col">
                                    <span className="font-medium">LinkedIn</span>
                                    <span className="text-xs text-white/60">
                                        https://www.linkedin.com/in/henrique-azevedo-flores-278611235/
                                    </span>
                                </div>
                            </a>

                            <a
                                href="mailto:henriqueflores2003@gmail.com"
                                className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-4 text-sm text-white/85 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10"
                            >
                                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                                    <EnvelopeSimpleIcon size={20} />
                                </span>
                                <div className="flex flex-col">
                                    <span className="font-medium">E-mail</span>
                                    <span className="text-xs text-white/60">
                                        henriqueflores2003@gmail.com
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Formulário */}
                    <div className="rounded-2xl bg-[#2b3445]/70 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                        <h2 className="text-xl font-semibold">Enviar mensagem</h2>
                        <p className="mt-2 text-sm text-white/70">Respondo assim que possível.</p>

                        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="grid gap-2">
                                    <label className="text-sm text-white/80">Nome</label>
                                    <input
                                        value={form.name}
                                        onChange={(e) => updateField('name', e.target.value)}
                                        className="rounded-xl bg-white/5 px-4 py-3 text-sm text-white/90 ring-1 ring-white/10 transition outline-none focus:ring-[#00a6f4]/60"
                                        placeholder="Digite seu nome"
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <label className="text-sm text-white/80">E-mail</label>
                                    <input
                                        value={form.email}
                                        onChange={(e) => updateField('email', e.target.value)}
                                        className="rounded-xl bg-white/5 px-4 py-3 text-sm text-white/90 ring-1 ring-white/10 transition outline-none focus:ring-[#00a6f4]/60"
                                        placeholder="seu@email.com"
                                        type="email"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm text-white/80">Assunto</label>
                                <input
                                    value={form.subject}
                                    onChange={(e) => updateField('subject', e.target.value)}
                                    className="rounded-xl bg-white/5 px-4 py-3 text-sm text-white/90 ring-1 ring-white/10 transition outline-none focus:ring-[#00a6f4]/60"
                                    placeholder="Ex: proposta, dúvida, oportunidade..."
                                />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm text-white/80">Mensagem</label>
                                <textarea
                                    value={form.message}
                                    onChange={(e) => updateField('message', e.target.value)}
                                    className="min-h-[140px] resize-none rounded-xl bg-white/5 px-4 py-3 text-sm text-white/90 ring-1 ring-white/10 transition outline-none focus:ring-[#00a6f4]/60"
                                    placeholder="Escreva sua mensagem..."
                                />
                            </div>

                            <button
                                disabled={!canSend}
                                className={`mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition ${
                                    canSend
                                        ? 'bg-[#00a6f4] text-white hover:bg-[#0092d6]'
                                        : 'cursor-not-allowed bg-white/10 text-white/40'
                                }`}
                            >
                                {status === 'sending' ? 'Enviando...' : 'Enviar'}
                                <PaperPlaneTiltIcon size={18} />
                            </button>

                            {/* feedback */}
                            {status === 'success' && (
                                <p className="text-sm text-emerald-300">
                                    Mensagem enviada com sucesso! ✅ Você receberá uma confirmação
                                    no e-mail.
                                </p>
                            )}

                            {status === 'error' && (
                                <p className="text-sm text-red-300">
                                    {errorMsg || 'Erro ao enviar.'}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
