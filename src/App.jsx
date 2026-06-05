import { useState } from "react";
import {
  Brain,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Users,
  X,
} from "lucide-react";

const appointmentWhatsappUrl =
  "https://wa.me/5584996093641?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20psicopedag%C3%B3gica.";

const infoWhatsappUrl =
  "https://wa.me/5584996544043?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20ou%20pedir%20informa%C3%A7%C3%B5es.";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Centro%20Medico%20Avancado%20Rua%2015%20de%20Novembro%20232%20Dom%20Elizeu%20Acu%20RN";

const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M16.01 3.2c-7.06 0-12.8 5.7-12.8 12.72 0 2.23.59 4.42 1.7 6.34L3.1 28.8l6.7-1.75a12.9 12.9 0 0 0 6.2 1.58h.01c7.05 0 12.79-5.7 12.79-12.72 0-3.4-1.33-6.6-3.75-9.01a12.72 12.72 0 0 0-9.04-3.7Zm0 23.27h-.01c-1.9 0-3.76-.5-5.4-1.46l-.39-.23-3.98 1.04 1.06-3.86-.25-.4a10.51 10.51 0 0 1-1.62-5.64c0-5.82 4.75-10.56 10.6-10.56 2.83 0 5.49 1.1 7.49 3.1a10.45 10.45 0 0 1 3.1 7.46c0 5.82-4.76 10.55-10.6 10.55Zm5.82-7.9c-.32-.16-1.89-.93-2.18-1.03-.29-.11-.5-.16-.72.16-.21.31-.82 1.03-1.01 1.24-.18.22-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58a9.63 9.63 0 0 1-1.78-2.2c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.22.05-.4-.03-.56-.08-.16-.72-1.72-.98-2.36-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.3.31-1.12 1.09-1.12 2.66 0 1.56 1.15 3.08 1.31 3.29.16.21 2.27 3.45 5.5 4.83.77.33 1.37.53 1.84.68.77.24 1.47.2 2.02.12.62-.09 1.89-.77 2.16-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
  </svg>
);

const navItems = [
  { href: "#about", label: "Sobre" },
  { href: "#services", label: "Atuação" },
  { href: "#process", label: "Processo" },
  { href: "#contact", label: "Contato" },
];

const highlights = [
  "Atendimento para crianças, adolescentes, adultos e idosos",
  "Avaliação individualizada para dificuldades de aprendizagem",
  "Orientação clara para família, escola ou pessoa atendida",
];

const aboutHighlights = [
  {
    icon: HeartHandshake,
    title: "Intervenção terapêutica",
    description: "Atendimento individualizado para compreender dificuldades e construir estratégias possíveis.",
  },
  {
    icon: Brain,
    title: "Todas as fases",
    description: "Acompanhamento para crianças, adolescentes, jovens, adultos e idosos.",
  },
  {
    icon: Sparkles,
    title: "Estimulação cognitiva",
    description: "Atividades para fortalecer funções cognitivas, autonomia e qualidade de vida.",
  },
];

const signs = [
  "Dificuldade persistente em leitura, escrita ou matemática",
  "Desatenção, baixa organização ou queda no rendimento escolar",
  "Suspeita de TDAH, dislexia ou outros transtornos de aprendizagem",
  "Dúvidas sobre escolha profissional ou necessidade de teste vocacional",
];

const services = [
  {
    icon: Brain,
    title: "Avaliação Psicopedagógica",
    description:
      "Investigação das dificuldades de aprendizagem, com escuta, instrumentos adequados e orientação personalizada.",
  },
  {
    icon: Sparkles,
    title: "Intervenção Psicopedagógica",
    description:
      "Plano de acompanhamento para fortalecer habilidades cognitivas, emocionais e comportamentais ligadas ao aprender.",
  },
  {
    icon: ClipboardCheck,
    title: "Parecer Psicopedagógico",
    description:
      "Elaboração de documentos técnicos para apoiar encaminhamentos, escola e família na tomada de decisão.",
  },
  {
    icon: Users,
    title: "Estimulação Cognitiva",
    description:
      "Atividades planejadas para idosos, com foco em memória, atenção, autonomia e qualidade de vida.",
  },
  {
    icon: GraduationCap,
    title: "Teste Vocacional",
    description:
      "Orientação para adolescentes e adultos que precisam escolher caminhos acadêmicos ou profissionais.",
  },
  {
    icon: HeartHandshake,
    title: "Consultoria Psicopedagógica",
    description:
      "Apoio para quem deseja estruturar os primeiros passos na prática clínica psicopedagógica.",
  },
];

const processSteps = [
  {
    title: "Primeiro contato",
    description:
      "Você explica a demanda pelo WhatsApp e recebe as orientações iniciais para o agendamento.",
  },
  {
    title: "Avaliação da demanda",
    description:
      "A história, as dificuldades e os objetivos do atendimento são compreendidos com cuidado.",
  },
  {
    title: "Plano de acompanhamento",
    description:
      "A intervenção é organizada de forma individualizada, com devolutiva e próximos passos claros.",
  },
];

const faqs = [
  {
    question: "O atendimento é apenas para crianças?",
    answer:
      "Não. O acompanhamento pode beneficiar crianças, adolescentes, adultos e idosos, de acordo com a demanda apresentada.",
  },
  {
    question: "Quando procurar uma psicopedagoga?",
    answer: (
      <>
        Quando há necessidade de <strong>compreender, desenvolver ou potencializar</strong> o processo de aprendizagem em qualquer fase da vida.
      </>
    ),
  },
  {
    question: "Onde fica o atendimento?",
    answer:
      "No Centro Médico Avançado, em Açu/RN. O contato pelo WhatsApp confirma horários e disponibilidade.",
  },
];

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-slate-800">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/70 bg-white/90 shadow-sm backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6" aria-label="Navegação principal">
          <a href="#top" className="flex flex-col leading-tight" onClick={closeMenu}>
            <span className="text-base font-bold text-slate-900 md:text-lg">Bárbara Medeiros</span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-600">Psicopedagoga</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                {item.label}
              </a>
            ))}
            <a href={infoWhatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#ffc0d8] px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-[#fff8c1]">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-900 md:hidden"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu} className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-[#fff8c1]">
                  {item.label}
                </a>
              ))}
              <a href={infoWhatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#ffc0d8] px-4 py-3 text-sm font-semibold text-slate-900" onClick={closeMenu}>
                <WhatsAppIcon className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero-section relative flex min-h-[520px] items-center overflow-hidden px-4 pb-16 pt-28 text-center md:min-h-[600px] md:px-6 md:pb-20 md:pt-32">
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 mx-auto max-w-3xl text-white">
            <p className="mx-auto mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
              Atendimento psicopedagógico em Açu/RN
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Bárbara Medeiros
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
              Transformando dificuldades de aprendizagem em caminhos possíveis, com acolhimento, avaliação e orientação clara.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={appointmentWhatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffc0d8] px-6 py-3 text-sm font-bold text-slate-900 shadow-lg transition hover:bg-[#fff8c1] md:text-base">
                Agendar avaliação
                <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15 md:text-base">
                Ver áreas de atuação
              </a>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-[#fdfdfd] py-12 md:py-14" aria-label="Destaques do atendimento">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-3 md:px-6">
            {highlights.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-slate-900/8 bg-white p-5 text-sm leading-6 text-slate-700 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/8">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#d0f4f4] text-slate-900">
                  <CheckCircle2 className="h-4 w-4 text-[#ffc0d8]" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#fdfdfd] to-[#fff8c1]/45 py-16 md:py-20" aria-label="Quando procurar atendimento">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-900">Quando procurar</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                  Alguns sinais merecem atenção.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {signs.map((sign) => (
                  <div key={sign} className="rounded-lg border border-slate-900/8 bg-white/90 p-5 text-sm leading-6 text-slate-700 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/8">
                    {sign}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-gradient-to-br from-[#fff8c1] via-[#fdfdfd] to-[#d0f4f4]/60 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[0.9fr_1.1fr] md:px-6 md:items-center">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative overflow-hidden rounded-lg border border-white bg-white p-3 shadow-2xl shadow-slate-900/10">
                <img src="/image.JPG" alt="Bárbara Medeiros, psicopedagoga" className="aspect-[4/5] w-full rounded-lg object-cover object-top" />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-900">Sobre a profissional</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Um olhar acolhedor para cada forma de aprender.
              </h2>
              <p className="mt-5 rounded-lg border border-slate-900/8 bg-white/75 px-5 py-4 text-base font-semibold leading-7 text-slate-900 shadow-sm shadow-slate-900/5 backdrop-blur">
                Acredito que todos têm potencialidades a desenvolver, no seu tempo e no seu ritmo.
              </p>
              <div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
                <p>
                  Sou Bárbara Medeiros, formada em Pedagogia e especialista em Psicopedagogia. Sou mãe atípica, mãe típica, mãe de coração, mãe de pet e psicopedagoga apaixonada pela minha profissão.
                </p>
                <p>
                  Vejo a aprendizagem como um caminho possível em qualquer fase da vida. Por isso, desenvolvo intervenções terapêuticas com um olhar individualizado, acolhedor e respeitoso.
                </p>
                <p>
                  Atendo crianças, adolescentes, jovens e adultos, auxiliando no desenvolvimento de habilidades cognitivas, acadêmicas, emocionais e funcionais. Também trabalho com estimulação cognitiva para idosos, favorecendo autonomia, qualidade de vida e envelhecimento saudável.
                </p>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {aboutHighlights.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="rounded-lg border border-slate-900/8 bg-white/80 p-4 shadow-sm shadow-slate-900/5 backdrop-blur">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#ffc0d8]/80 text-slate-900">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-600">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 bg-gradient-to-b from-white to-[#fdfdfd] py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-900">Áreas de atuação</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Atendimento direcionado para aprendizagem, desenvolvimento e orientação.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>

            <div className="mt-10 rounded-lg border border-slate-900/8 bg-gradient-to-r from-[#d0f4f4] to-white p-6 text-slate-900 shadow-xl shadow-slate-900/6 md:flex md:items-center md:justify-between md:p-8">
              <div>
                <h3 className="text-2xl font-bold">Não sabe qual atendimento procurar?</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
                  Explique a situação pelo WhatsApp para receber uma orientação inicial sobre o melhor caminho.
                </p>
              </div>
              <a href={infoWhatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#ffc0d8] px-5 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-[#fff8c1] md:mt-0">
                Falar com Bárbara
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="process" className="scroll-mt-24 bg-gradient-to-br from-[#d0f4f4] via-[#fdfdfd] to-[#fff8c1]/70 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-900">Como funciona</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                  Um processo simples, com escuta e direção.
                </h2>
              </div>
              <div className="grid gap-4">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4 rounded-lg border border-slate-900/8 bg-white/90 p-5 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/8">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#ffc0d8] text-sm font-bold text-slate-900">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-[#fdfdfd] py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-900">Dúvidas frequentes</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Informações para o primeiro contato.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-lg border border-slate-900/8 bg-white p-5 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/8">
                  <h3 className="font-bold text-slate-900">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-gradient-to-br from-[#ffc0d8] via-[#fff8c1] to-[#d0f4f4] py-16 text-slate-900 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[0.9fr_1.1fr] md:px-6 md:items-center">
            <div className="rounded-lg border border-white/70 bg-white/70 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-700">Contato</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Agende uma avaliação ou tire suas dúvidas.</h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-700">
                Atendimento Clínico no Centro Médico Avançado - CMA, Rua 15 de Novembro, 232 - Dom Elizeu, Açu/RN, às terças (manhã e tarde), quartas e quintas (tarde).
              </p>
              <a href={appointmentWhatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#ffc0d8] px-6 py-3 text-sm font-bold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-[#fff8c1] md:text-base">
                Agendar no CMA
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>

            <div className="grid gap-4">
              <ContactLink icon={Phone} title="Agendamento CMA" href="tel:+5584996093641" text="(84) 99609-3641" />
              <ContactLink icon={Phone} title="Dúvidas ou informações" href="tel:+5584996544043" text="(84) 99654-4043" />
              <ContactLink icon={Mail} title="Email" href="mailto:psicopedbarbara@gmail.com" text="psicopedbarbara@gmail.com" />
              <ContactLink icon={MapPin} title="Endereço" href={mapUrl} text="Centro Médico Avançado - Rua 15 de Novembro, 232 - Dom Elizeu, Açu/RN" external />
            </div>
          </div>
        </section>
      </main>

      <a
        href={infoWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#ffc0d8] text-slate-900 shadow-xl shadow-[#ffc0d8]/25 transition hover:bg-[#fff8c1] focus:outline-none focus:ring-4 focus:ring-[#d0f4f4] md:bottom-6 md:right-6"
        aria-label="Falar com Bárbara pelo WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
};

const ServiceCard = ({ icon: Icon, title, description }) => (
  <article className="rounded-lg border border-slate-900/8 bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/8">
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#d0f4f4] text-slate-900">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-bold text-slate-900">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
  </article>
);

const ContactLink = ({ icon: Icon, title, href, text, external = false }) => (
  <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="group flex gap-4 rounded-lg border border-slate-900/8 bg-white/75 p-5 shadow-sm shadow-slate-900/5 backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-900/8">
    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#d0f4f4] text-slate-900">
      <Icon className="h-5 w-5" />
    </span>
    <span>
      <span className="block text-sm font-semibold text-slate-700">{title}</span>
      <span className="mt-1 block text-sm leading-6 text-slate-700 group-hover:text-slate-900">{text}</span>
    </span>
  </a>
);

export default Website;
