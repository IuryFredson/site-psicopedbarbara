import React from "react";
import {
  Calendar,
  Brain,
  Sparkles,
  Star,
  Mail,
  Phone,
  Map,
  BookOpen,
} from "lucide-react";

const Website = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-10 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-800">
            Psicopedagogia Clínica e Institucional
          </h1>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-600 hover:text-purple-800">
              Sobre
            </a>
            <a href="#services" className="text-gray-600 hover:text-purple-800">
              Serviços
            </a>
            <a href="#contact" className="text-gray-600 hover:text-purple-800">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 px-6 relative bg-cover bg-center min-h-[600px]"
        style={{
          backgroundImage: "url('/image1.jpeg')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto text-center relative z-10 mt-32">
          <h2 className="text-5xl font-bold text-white mb-6">
            Bárbara Medeiros
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Transformando dificuldades em oportunidades de aprendizado.
          </p>
          <a href="https://wa.me/5584996544043?text=Olá,%20vim%20do%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!" target="_blank" rel="noopener noreferrer">
  <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
    Agende uma Consulta
  </button>
</a>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-purple-900 mb-8">
              Sobre Mim
            </h3>
            <div className="bg-purple-50 p-8 rounded-lg">
              <p className="text-gray-600 mb-6 indent-8">
                Sou Bárbara Medeiros, graduada em Pedagogia pela Universidade
                Anhanguera com especialização em Psicopedagogia Clínica e
                Institucional pela Faculdade do Leste Mineiro.{" "}
                Atuo profissionalmente na área de Psicopedagogia, com foco na
                intervenção terapêutica para dificuldades de aprendizagem,
                auxiliando no desenvolvimento dos processos cognitivos e no
                acompanhamento individual com ênfase na dinâmica comportamental.
                Realizo aplicação de testes vocacionais e elaboração de laudos
                sensoriais para crianças, adolescentes e adultos, proporcionando
                um diagnóstico preciso e orientações personalizadas. Além disso,
                desenvolvo programas de estimulação cognitiva para idosos,
                promovendo a manutenção das funções mentais e o bem-estar ao
                longo do envelhecimento.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-purple-900 mb-12">
            Áreas de Atuação
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Brain className="w-8 h-8 text-purple-600" />}
              title="Avaliação e Intervenção Psicopedagógica"
              description="Diagnóstico e intervenção personalizada para otimizar o processo de aprendizagem"
            />
            <ServiceCard
              icon={<Sparkles className="w-8 h-8 text-purple-600" />}
              title="Transtornos de Aprendizagem"
              description="Acompanhamento especializado para TDAH, dislexia e outros transtornos"
            />
            <ServiceCard
              icon={<Star className="w-8 h-8 text-purple-600" />}
              title="Parecer Psicopedagógico"
              description="Elaboração de laudos e pareceres técnicos detalhados"
            />
            <ServiceCard
              icon={<Calendar className="w-8 h-8 text-purple-600" />}
              title="Estimulação Cognitiva para Idosos"
              description="Programas personalizados para manutenção das funções cognitivas"
            />
            <ServiceCard
              icon={<Map className="w-8 h-8 text-purple-600" />}
              title="Teste Vocacional"
              description="Orientação profissional baseada em avaliações especializadas"
            />
            <ServiceCard
              icon={<BookOpen className="w-8 h-8 text-purple-600" />}
              title="Consultoria Psicopedagógica" 
              description="Passo a passo para iniciação clínica"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-purple-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-purple-900 mb-12">
            Contato
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ContactInfo
              icon={<Mail className="w-6 h-6 text-purple-600" />}
              title="Email"
              info="psicopedbarbara@gmail.com"
            />
            <ContactInfo
              icon={<Phone className="w-6 h-6 text-purple-600" />}
              title="Telefone"
              info="(84) 99654-4043"
            />
            <ContactInfo
              icon={<Map className="w-6 h-6 text-purple-600" />}
              title="Clínica Dr. Paulo Diogo: "
              info="R. Dr. Ernesto da Fonsêca - Dom Elizeu, Açu - RN, 59650-000"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-purple-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
    <div className="flex justify-center mb-4">{icon}</div>
    <h4 className="text-xl font-semibold text-purple-900 mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ContactInfo = ({ icon, title, info }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-4">{icon}</div>
    <h4 className="text-lg font-semibold text-purple-900 mb-2">{title}</h4>
    <p className="text-gray-600">{info}</p>
  </div>
);

export default Website;
