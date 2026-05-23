import { useState } from "react";
import {
  Brain,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  Mail,
  MessageCircle,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Users,
  X,
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/5584996544043?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20psicopedag%C3%B3gica.";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Rua%20Dr.%20Ernesto%20da%20Fonseca%20Dom%20Elizeu%20Assu%20RN%2059650-000";

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
    answer:
      "Quando dificuldades de aprendizagem, atenção, organização, leitura, escrita ou adaptação escolar persistem e começam a afetar a rotina.",
  },
  {
    question: "Onde fica o atendimento?",
    answer:
      "Na Clínica Dr. Paulo Diogo, em Assú/RN. O contato pelo WhatsApp confirma horários e disponibilidade.",
  },
];

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white text-slate-800">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/70 bg-white/90 shadow-sm backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6" aria-label="Navegação principal">
          <a href="#top" className="flex flex-col leading-tight" onClick={closeMenu}>
            <span className="text-base font-bold text-purple-800 md:text-lg">Bárbara Medeiros</span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-purple-600">Psicopedagoga</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-purple-800">
                {item.label}
              </a>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-purple-800 md:hidden"
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
                <a key={item.href} href={item.href} onClick={closeMenu} className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-purple-50">
                  {item.label}
                </a>
              ))}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-4 py-3 text-sm font-semibold text-white" onClick={closeMenu}>
                <MessageCircle className="h-4 w-4" />
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
              Atendimento psicopedagógico em Assú/RN
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Bárbara Medeiros
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
              Transformando dificuldades de aprendizagem em caminhos possíveis, com acolhimento, avaliação e orientação clara.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-purple-700 md:text-base">
                Agendar avaliação
                <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15 md:text-base">
                Ver áreas de atuação
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white py-10 md:py-12" aria-label="Destaques do atendimento">
          <div className="mx-auto grid max-w-6xl gap-3 px-4 md:grid-cols-3 md:px-6">
            {highlights.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-purple-100 bg-purple-50 p-4 text-sm leading-6 text-slate-700 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-purple-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-14 md:py-18" aria-label="Quando procurar atendimento">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-600">Quando procurar</p>
                <h2 className="mt-3 text-3xl font-bold text-purple-900 md:text-4xl">
                  Alguns sinais merecem atenção.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {signs.map((sign) => (
                  <div key={sign} className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm">
                    {sign}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-purple-50 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[0.95fr_1.05fr] md:px-6 md:items-center">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img src="/image.JPG" alt="Bárbara Medeiros, psicopedagoga" className="h-full max-h-[520px] w-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-600">Sobre a profissional</p>
              <h2 className="mt-3 text-3xl font-bold text-purple-900 md:text-4xl">
                Cuidado técnico para entender como cada pessoa aprende.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
                <p>
                  Sou Bárbara Medeiros, graduada em Pedagogia pela Universidade Anhanguera e especialista em Psicopedagogia Clínica e Institucional pela Faculdade do Leste Mineiro.
                </p>
                <p>
                  Atuo com avaliação, intervenção terapêutica, orientação vocacional, parecer psicopedagógico e estimulação cognitiva, sempre considerando a história, o ritmo e as necessidades de cada pessoa.
                </p>
                <p>
                  O objetivo do atendimento é oferecer clareza sobre as dificuldades, construir estratégias possíveis e apoiar famílias, escolas e pacientes em decisões mais seguras.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-600">Áreas de atuação</p>
              <h2 className="mt-3 text-3xl font-bold text-purple-900 md:text-4xl">
                Atendimento direcionado para aprendizagem, desenvolvimento e orientação.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>

            <div className="mt-10 rounded-lg bg-purple-900 p-6 text-white md:flex md:items-center md:justify-between md:p-8">
              <div>
                <h3 className="text-2xl font-bold">Não sabe qual atendimento procurar?</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80">
                  Explique a situação pelo WhatsApp para receber uma orientação inicial sobre o melhor caminho.
                </p>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-purple-700 md:mt-0">
                Falar com Bárbara
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="process" className="scroll-mt-24 bg-purple-50 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-600">Como funciona</p>
                <h2 className="mt-3 text-3xl font-bold text-purple-900 md:text-4xl">
                  Um processo simples, com escuta e direção.
                </h2>
              </div>
              <div className="grid gap-4">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4 rounded-lg bg-white p-5 shadow-sm">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-purple-900">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-600">Dúvidas frequentes</p>
              <h2 className="mt-3 text-3xl font-bold text-purple-900 md:text-4xl">
                Informações para o primeiro contato.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-lg border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-purple-900">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-purple-900 py-16 text-white md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[0.9fr_1.1fr] md:px-6 md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-100">Contato</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Agende uma avaliação ou tire suas dúvidas.</h2>
              <p className="mt-5 max-w-xl leading-8 text-white/80">
                Atendimento na Clínica Dr. Paulo Diogo, em Assú/RN. Para confirmar disponibilidade, envie uma mensagem pelo WhatsApp.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-purple-700 md:text-base">
                Chamar no WhatsApp
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>

            <div className="grid gap-4">
              <ContactLink icon={Phone} title="Telefone / WhatsApp" href="tel:+5584996544043" text="(84) 99654-4043" />
              <ContactLink icon={Mail} title="Email" href="mailto:psicopedbarbara@gmail.com" text="psicopedbarbara@gmail.com" />
              <ContactLink icon={MapPin} title="Endereço" href={mapUrl} text="R. Dr. Ernesto da Fonsêca - Dom Elizeu, Assú/RN" external />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const ServiceCard = ({ icon: Icon, title, description }) => (
  <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 text-purple-800">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-bold text-purple-900">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
  </article>
);

const ContactLink = ({ icon: Icon, title, href, text, external = false }) => (
  <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="group flex gap-4 rounded-lg border border-white/15 bg-white/10 p-5 transition hover:bg-white/15">
    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white text-purple-900">
      <Icon className="h-5 w-5" />
    </span>
    <span>
      <span className="block text-sm font-semibold text-purple-100">{title}</span>
      <span className="mt-1 block text-sm leading-6 text-white/85 group-hover:text-white">{text}</span>
    </span>
  </a>
);

export default Website;
