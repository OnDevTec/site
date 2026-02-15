import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Calendar, 
  FileText, 
  DollarSign, 
  Cloud, 
  Smartphone, 
  Shield,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  Users,
  Clock,
  TrendingUp,
  Stethoscope,
  Heart,
  Eye,
  Brain,
  Activity,
  Sparkles,
  MessageSquare,
  FileSignature,
  BarChart3,
  Network,
  Package,
  Zap,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react'
import { Button } from './components/Button'
import { Card, CardHeader, CardContent } from './components/Card'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "OnDoctor",
        "applicationCategory": "HealthApplication",
        "operatingSystem": "Web",
        "description": "Sistema completo para gestão de clínicas e consultórios médicos com agenda online, prontuário eletrônico, telemedicina e gestão financeira",
        "url": "https://site.ondoctor.app",
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "29.90",
          "highPrice": "79.90",
          "priceCurrency": "BRL",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500"
        }
      },
      {
        "@type": "Organization",
        "name": "OnDoctor",
        "url": "https://site.ondoctor.app",
        "logo": "https://site.ondoctor.app/ondoctor-logo.png",
        "description": "Sistema completo para gestão de clínicas e consultórios médicos",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55-11-91234-5678",
          "contactType": "Customer Service",
          "areaServed": "BR",
          "availableLanguage": "Portuguese"
        },
        "sameAs": [
          "https://facebook.com/ondoctorapp",
          "https://instagram.com/ondoctorapp",
          "https://linkedin.com/company/ondoctorapp",
          "https://youtube.com/c/ondoctor"
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <QuickNav />
      <EnhancedStats />
      <Testimonials />
      <Features />
      <AIFeatures />
      <Specialties />
      <AgendaSection />
      <ProntuarioSection />
      <FinanceSection />
      <DocumentsSection />
      <About />
      <ComparisonTable />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <img src="/ondoctor-logo.png" alt="OnDoctor" className="h-10" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Home</Link>
            <Link to="/recursos" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Recursos</Link>
            <Link to="/precos" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Preços</Link>
            <Link to="/contato" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Contato</Link>
            <Button variant="primary" size="sm">
              Sou Cliente
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200">
            <Link to="/" className="block text-gray-700 hover:text-primary-600 font-medium">Home</Link>
            <Link to="/recursos" className="block text-gray-700 hover:text-primary-600 font-medium">Recursos</Link>
            <Link to="/precos" className="block text-gray-700 hover:text-primary-600 font-medium">Preços</Link>
            <Link to="/contato" className="block text-gray-700 hover:text-primary-600 font-medium">Contato</Link>
            <Button variant="primary" size="sm" className="w-full">
              Sou Cliente
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      icon: Calendar,
      title: 'Agenda Online',
      subtitle: 'Gestão completa de agendamentos',
      color: 'from-primary-100 via-primary-50 to-white'
    },
    {
      icon: MessageSquare,
      title: 'Lembretes via WhatsApp',
      subtitle: 'Envio e confirmação automática',
      color: 'from-green-100 via-green-50 to-white'
    },
    {
      icon: FileText,
      title: 'Prontuário com IA',
      subtitle: 'Prontuário eletrônico inteligente',
      color: 'from-blue-100 via-blue-50 to-white'
    },
    {
      icon: DollarSign,
      title: 'Gestão Financeira',
      subtitle: 'Controle total das finanças',
      color: 'from-green-100 via-green-50 to-white'
    },
    {
      icon: Sparkles,
      title: 'Agente de IA',
      subtitle: 'Assistente inteligente 24/7',
      color: 'from-purple-100 via-purple-50 to-white'
    },
    {
      icon: Users,
      title: 'CRM',
      subtitle: 'Gestão completa de relacionamento',
      color: 'from-orange-100 via-orange-50 to-white'
    },
    {
      icon: Smartphone,
      title: 'Teleconsultas',
      subtitle: 'Atendimento online integrado',
      color: 'from-cyan-100 via-cyan-50 to-white'
    },
    {
      icon: FileSignature,
      title: 'Assinatura Digital',
      subtitle: 'Documentos assinados com segurança',
      color: 'from-indigo-100 via-indigo-50 to-white'
    },
    {
      icon: TrendingUp,
      title: 'Gestão Financeira',
      subtitle: 'Lucratividade e previsibilidade',
      color: 'from-emerald-100 via-emerald-50 to-white'
    },
    {
      icon: BarChart3,
      title: 'Power BI',
      subtitle: 'Dashboards e análises avançadas',
      color: 'from-yellow-100 via-yellow-50 to-white'
    },
    {
      icon: Network,
      title: 'Redes e Franquias',
      subtitle: 'Gestão de múltiplas unidades',
      color: 'from-pink-100 via-pink-50 to-white'
    }
  ]

  const badges = [
    { icon: Calendar, text: 'Agenda Online' },
    { icon: MessageSquare, text: 'WhatsApp' },
    { icon: FileText, text: 'Prontuário Eletrônico' },
    { icon: FileSignature, text: 'Assinatura Digital' },
    { icon: Smartphone, text: 'Telemedicina' },
    { icon: DollarSign, text: 'Convênios' },
    { icon: FileText, text: 'Emissão NFs-e' },
    { icon: TrendingUp, text: 'Gestão financeira' },
    { icon: Package, text: 'Estoque' },
    { icon: Sparkles, text: 'Agente de IA' },
    { icon: FileSignature, text: 'Contratos' },
    { icon: Users, text: 'Marketing e CRM' },
    { icon: BarChart3, text: 'Power BI' },
    { icon: Network, text: 'Redes e Franquias' },
    { icon: Zap, text: '+30 recursos' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const CurrentIcon = slides[currentSlide].icon

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-20 pb-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo à esquerda */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 mr-2" />
              Sistema completo para gestão de clínicas
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up leading-tight">
              Você cuida dos pacientes.{' '}
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                O OnDoctor cuida do resto.
              </span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed">
              Financeiro, agenda, prontuário e relacionamento em uma única plataforma. 
              Junte-se a milhares de profissionais da saúde que transformaram sua gestão.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="https://web.ondoctor.app/signup" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="group">
                  Quero testar agora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link to="/precos">
                <Button variant="secondary" size="lg">
                  Conheça os planos
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {badges.slice(0, 6).map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center lg:justify-start gap-2 px-3 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-primary-300 transition-all duration-200"
                >
                  <badge.icon className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  <span className="text-xs font-medium text-gray-700 truncate">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Carrossel de Imagens à direita */}
          <div className="relative lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                {slides.map((slide, index) => {
                  const SlideIcon = slide.icon
                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 bg-gradient-to-br ${slide.color} flex items-center justify-center transition-all duration-700 ease-in-out ${
                        index === currentSlide
                          ? 'translate-x-0 opacity-100'
                          : index < currentSlide
                          ? '-translate-x-full opacity-0'
                          : 'translate-x-full opacity-0'
                      }`}
                    >
                      <div className="text-center p-8">
                        <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-all duration-500 hover:scale-110">
                          <SlideIcon className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{slide.title}</h3>
                        <p className="text-gray-600">{slide.subtitle}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Controles de navegação */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                aria-label="Próximo slide"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-primary-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-300 rounded-full blur-3xl opacity-50"></div>
            
            {/* Badges flutuantes */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg px-4 py-2 border border-primary-200 animate-fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-gray-900">10K+ Profissionais</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg px-4 py-2 border border-primary-200 animate-fade-in">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-gray-900">IA Integrada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuickNav() {
  const navItems = [
    { icon: Calendar, label: 'Agenda Online', href: '#agenda' },
    { icon: MessageSquare, label: 'CRM', href: '#crm' },
    { icon: Sparkles, label: 'Agente de IA', href: '#ia' },
    { icon: FileText, label: 'Prontuário com IA', href: '#prontuario' },
    { icon: Smartphone, label: 'Teleconsultas', href: '#tele' },
    { icon: FileSignature, label: 'Assinatura Digital', href: '#assinatura' },
    { icon: DollarSign, label: 'Gestão Financeira', href: '#financeiro' },
    { icon: BarChart3, label: 'Power BI', href: '#bi' },
  ]

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-8 font-medium">
          Clique abaixo e acesse direto o que mais te interessa
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function EnhancedStats() {
  const stats = [
    { value: '10.000+', label: 'Profissionais de Saúde', description: 'Já transformam a rotina de suas clínicas' },
    { value: '27', label: 'Estados Brasileiros', description: 'O Brasil ama o OnDoctor 💚' },
    { value: 'R$ 730M+', label: 'Movimentados na Plataforma', description: 'Confiados através da nossa plataforma' },
    { value: '100K+', label: 'Mensagens Enviadas', description: 'Via WhatsApp intermediadas pelo OnDoctor' },
    { value: '3M+', label: 'Pacientes', description: 'Cadastrados pelas clínicas que confiam' },
    { value: '9M+', label: 'Agendamentos', description: 'Realizados com sucesso' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos números falam por si
          </h2>
          <p className="text-xl text-primary-100">
            Confiança de milhares de profissionais em todo o Brasil
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-primary-100 mb-2">{stat.label}</div>
              <div className="text-sm text-primary-200">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    {
      name: 'Dra. Marina Amarante',
      role: 'Cirurgiã Dentista',
      content: 'O OnDoctor me trouxe organização e controle total sobre minha clínica. Não consigo mais imaginar trabalhar sem ele!',
      rating: 5,
    },
    {
      name: 'Dr. Diego Tarta',
      role: 'Administrador - OralClinic',
      content: 'Se eu tivesse que definir o OnDoctor com uma palavra ela seria: EXCELÊNCIA! Transformou completamente nossa gestão.',
      rating: 5,
    },
    {
      name: 'Dra. Juliana Santos',
      role: 'Psicóloga',
      content: 'A agenda inteligente e os lembretes automáticos reduziram drasticamente as faltas. Minha produtividade aumentou 40%!',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Histórias reais de clientes apaixonados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como clínicas e consultórios estão transformando sua rotina e crescendo mais rápido com o OnDoctor
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">⭐⭐⭐⭐⭐ Quem usa confia, ótima avaliação no Google!</p>
          <Button variant="secondary" size="md">
            Leia mais histórias
          </Button>
        </div>
      </div>
    </section>
  )
}

function AIFeatures() {
  const features = [
    {
      icon: Sparkles,
      title: 'Agente de IA',
      subtitle: 'Sua aliada 24h por dia, 7 dias por semana',
      description: 'Converse naturalmente e veja tudo acontecer: agende consultas, lance despesas, acesse prontuários - tudo pelo WhatsApp.',
      benefits: [
        'Sua amiga no WhatsApp',
        'Agenda pacientes 24/7',
        'Lançamento automático de despesas',
        'Entende comandos de voz',
      ],
    },
    {
      icon: Brain,
      title: 'Prontuário com IA',
      subtitle: 'Não escreva, não digite',
      description: 'Preenche automaticamente prontuários e planos de tratamento com base na conversa com o paciente.',
      benefits: [
        'Preenchimento por voz',
        'Resumos automáticos',
        'Prescrições inteligentes',
        'Zero papel',
      ],
    },
  ]

  return (
    <section id="ia" className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Inteligência Artificial
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dê adeus ao trabalho manual
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utilize o poder da IA para automatizar tarefas e focar no que realmente importa: seus pacientes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-gradient-to-br from-white to-primary-50 border-2 border-primary-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                    {feature.title === 'Agente de IA' && (
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                        Em breve
                      </span>
                    )}
                  </div>
                  <p className="text-primary-700 font-medium">{feature.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{feature.description}</p>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function ComparisonTable() {
  const features = [
    { name: 'Agente de IA', ondoctor: true, others: false },
    { name: 'Prontuário com IA', ondoctor: true, others: false },
    { name: 'WhatsApp Integrado', ondoctor: true, others: 'Limitado' },
    { name: 'Armazenamento Ilimitado', ondoctor: true, others: false },
    { name: 'Telemedicina Incluída', ondoctor: true, others: 'Pago à parte' },
    { name: 'Assinatura Digital', ondoctor: true, others: 'Pago à parte' },
    { name: 'Power BI Integrado', ondoctor: true, others: false },
    { name: 'White-Label', ondoctor: true, others: false },
    { name: 'Gestão de Franquias', ondoctor: true, others: false },
    { name: 'Conciliação bancária', ondoctor: true, others: false },
    { name: 'Suporte via whatsapp', ondoctor: true, others: 'Horário comercial' },
    { name: 'Atualizações Gratuitas', ondoctor: true, others: false },
    { name: 'APIs Abertas', ondoctor: true, others: 'Limitado' },
    { name: 'Outros recursos exclusivos', ondoctor: true, others: false },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por que escolher o mais barato, se você pode ter o melhor?
          </h2>
          <p className="text-xl text-gray-600">
            OnDoctor x Outras Soluções
          </p>
        </div>

        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-primary-600 to-primary-700">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-semibold">Recursos</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">OnDoctor</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Outros</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {features.map((feature, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-medium">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      {feature.ondoctor === true ? (
                        <CheckCircle className="w-6 h-6 text-primary-600 mx-auto" />
                      ) : (
                        <span className="text-sm text-gray-600">{feature.ondoctor}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.others === true ? (
                        <CheckCircle className="w-6 h-6 text-gray-400 mx-auto" />
                      ) : feature.others === false ? (
                        <X className="w-6 h-6 text-red-400 mx-auto" />
                      ) : (
                        <span className="text-sm text-gray-600">{feature.others}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Venha para o melhor. Não fique preso a métodos ultrapassados.
          </p>
          <a href="https://web.ondoctor.app/signup" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg">
              Começar agora gratuitamente
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

function Specialties() {
  const specialties = [
    { icon: Stethoscope, name: 'Clínicos Gerais' },
    { icon: Activity, name: 'Odontologia' },
    { icon: Heart, name: 'Cardiologia' },
    { icon: Eye, name: 'Oftalmologia' },
    { icon: Brain, name: 'Psicologia' },
    { icon: Activity, name: 'Fisioterapia' },
    { icon: Sparkles, name: 'Estética e saúde' },
    { icon: Users, name: '+50 especialidades' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O sistema ideal para sua especialidade
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Atendemos profissionais de diversas áreas da saúde
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <Card key={index} hover className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <specialty.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">{specialty.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      icon: Calendar,
      title: 'Agenda Prática e Completa',
      description: 'Gerencie agendamentos, envie lembretes automáticos via SMS e WhatsApp e otimize o tempo da sua equipe.',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: FileText,
      title: 'Prontuário Eletrônico',
      description: 'PEP fácil de personalizar, prescrições inteligentes e registros centralizados acessíveis de qualquer lugar.',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: DollarSign,
      title: 'Gestão Financeira',
      description: 'Controle completo das finanças com lucratividade e previsibilidade para sua clínica crescer.',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: Cloud,
      title: 'Armazenamento Ilimitado',
      description: 'Salve documentos e imagens sem limites. Tudo seguro na nuvem e acessível quando precisar.',
      color: 'from-orange-500 to-orange-700',
    },
    {
      icon: Smartphone,
      title: 'Telemedicina',
      description: 'Atenda seus pacientes remotamente com segurança e qualidade, de qualquer lugar.',
      color: 'from-pink-500 to-pink-700',
    },
    {
      icon: Shield,
      title: 'Segurança LGPD',
      description: 'Totalmente adequado à Lei Geral de Proteção de Dados com máxima segurança.',
      color: 'from-indigo-500 to-indigo-700',
    },
  ]

  return (
    <section id="recursos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recursos que transformam sua clínica
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para gerenciar sua clínica de forma profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover className="p-8">
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function AgendaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              Agenda Inteligente
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Agenda Prática e Completa
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Com a agenda online do OnDoctor, sua equipe gerencia os agendamentos, diminui as faltas 
              por meio do envio de lembretes automáticos via SMS e WhatsApp e ganha tempo para realizar 
              o que realmente importa: o atendimento ao paciente.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Mais de 1 milhão de agendamentos</h4>
                  <p className="text-gray-600">Realizados com sucesso em nossa plataforma</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Confirmações via WhatsApp</h4>
                  <p className="text-gray-600">Envio automático de lembretes de consultas e retornos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Anamnese no celular</h4>
                  <p className="text-gray-600">Pacientes respondem questionários antes ou durante a consulta</p>
                </div>
              </div>
            </div>

            <a href="https://web.ondoctor.app/signup" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">
                Começar agora
              </Button>
            </a>
          </div>

          <div className="relative group">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-100 to-primary-200 transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105">
              <img 
                src="/agenda.png" 
                alt="Interface da Agenda Online do OnDoctor - Sistema de agendamento inteligente para clínicas" 
                loading="lazy"
                className="w-full h-auto object-cover opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProntuarioSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative group">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-100 to-green-200 transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105">
              <img 
                src="/telemedicine.png" 
                alt="Prontuário Eletrônico com IA e Telemedicina OnDoctor - Atendimento online integrado" 
                loading="lazy"
                className="w-full h-auto object-cover opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              <FileText className="w-4 h-4 mr-2" />
              Prontuário Digital
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Prontuário eletrônico e Telemedicina personalizado
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Receba acesso a um PEP fácil de personalizar, protocolos de atendimento simplificados, 
              prescrições inteligentes de medicamentos, incluindo imagens e arquivos, registros de 
              histórico centralizados e ferramentas exclusivas para telemedicina!
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">100% seguro</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Acesso remoto</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Prescrições inteligentes</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Telemedicina integrada</span>
              </div>
            </div>

            <Link to="/precos">
              <Button variant="primary" size="lg">
                Ver planos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinanceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              Gestão Financeira
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gestão financeira com lucratividade e previsibilidade
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Tenha controle total sobre as finanças da sua clínica. Acompanhe receitas, despesas, 
              fluxo de caixa e tome decisões baseadas em dados reais.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 bg-gradient-to-br from-primary-50 to-white border-primary-200">
                <TrendingUp className="w-10 h-10 text-primary-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Aumente a lucratividade</h4>
                <p className="text-sm text-gray-600">Identifique oportunidades de crescimento</p>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-primary-50 to-white border-primary-200">
                <BarChart3 className="w-10 h-10 text-primary-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Diminua custos</h4>
                <p className="text-sm text-gray-600">Otimize despesas e recursos</p>
              </Card>
            </div>

            <Button variant="primary" size="lg">
              Conhecer recursos
            </Button>
          </div>

          <div className="relative group">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-100 to-primary-200 transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105">
              <img 
                src="/finance-dashboard.jpg" 
                alt="Dashboard de Gestão Financeira OnDoctor - Controle completo de receitas e despesas da clínica" 
                loading="lazy"
                className="w-full h-auto object-cover opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="aspect-square flex items-center justify-center p-8"><svg class="w-64 h-64 text-primary-600 opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/></svg></div>';
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DocumentsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Salve tudo. Documentos e imagens ilimitadas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Assine e solicite assinatura online de contratos e outros documentos com total segurança jurídica
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card hover className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Armazenamento Ilimitado</h3>
            <p className="text-gray-600">Guarde todos os documentos e imagens sem se preocupar com espaço</p>
          </Card>

          <Card hover className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileSignature className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Assinatura Digital</h3>
            <p className="text-gray-600">Assine e solicite assinaturas com validade jurídica</p>
          </Card>

          <Card hover className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">100% Seguro</h3>
            <p className="text-gray-600">Criptografia de ponta a ponta e conformidade com LGPD</p>
          </Card>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que é o OnDoctor
          </h2>
          <p className="text-2xl text-gray-600 mb-8">
            Muito mais que um Software Médico
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            OnDoctor é uma plataforma totalmente em nuvem voltada para otimizar o tempo do médico 
            e modernizar os processos de atendimento dentro do consultório ou clínica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8">
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Simples de usar e sem complicações</h3>
            <p className="text-gray-600">
              Voltada para otimizar o tempo do médico e modernizar os processos de atendimento 
              dentro do consultório ou clínica.
            </p>
          </Card>

          <Card className="p-8">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Adequado à LGPD</h3>
            <p className="text-gray-600">
              Com todas as solicitações de tratamento de dados pessoais, identificação de dados 
              sensíveis e autorização para envio de mensagens.
            </p>
          </Card>

          <Card className="p-8">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Cloud className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Acesse em qualquer lugar</h3>
            <p className="text-gray-600">
              Acesse o OnDoctor do seu computador pessoal, notebook, tablet ou smartphone e 
              tenha o melhor sistema para clínica.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

function ResourcesSection() {
  const resources = [
    {
      icon: Calendar,
      title: 'Agenda Completa',
      description: 'Organize, amplie e informatize a agenda do seu consultório com facilidade e eficiência.',
      features: ['Agenda Simples e Call Center', 'Sincronização com Google agenda', 'Lembretes inteligentes (WhatsApp)', 'Visualização por período']
    },
    {
      icon: FileText,
      title: 'Prontuário Eletrônico',
      description: 'Tenha mais clareza sobre os quadros clínicos de todos os seus pacientes do sistema.',
      features: ['Histórico completo', 'Busca avançada', 'Assistente com IA', 'Modelos pré-definidos']
    },
    {
      icon: MessageSquare,
      title: 'Lembretes Inteligentes',
      description: 'Reduza o no-show com automações via WhatsApp.',
      features: ['Confirmações automáticas', 'Envio de protocolos', 'Campanhas de marketing', 'Pesquisa de satisfação']
    },
    {
      icon: Smartphone,
      title: 'Anamnese Digital',
      description: 'Envie questionário direto pro celular do paciente.',
      features: ['Paciente responde no celular ou tablet', 'Envio com antecedência', 'Solicitar assinatura digital', 'Registro direto na ficha']
    },
    {
      icon: FileSignature,
      title: 'Assinatura Digital',
      description: 'Assine documentos direto na plataforma.',
      features: ['Autenticada e segura', 'Contratos, laudos e termos', 'Com certificado ou modo avançado', 'Envie com 1 click']
    },
    {
      icon: FileText,
      title: 'Modelos de Documentos',
      description: 'Padronize e ganhe tempo no dia a dia.',
      features: ['Criação de contratos, laudos, atestados', 'Pronto pra envio', 'Assinatura integrada', 'Registro na ficha do paciente']
    },
    {
      icon: DollarSign,
      title: 'Controle Financeiro',
      description: 'Gestão completa do seu caixa.',
      features: ['Caixa individual por atendente', 'Bancos e saldos', 'Plano de contas e centro de custo', 'DRE, fluxo de caixa e relatórios']
    },
    {
      icon: Package,
      title: 'Controle de Estoque',
      description: 'Monitore seus insumos com precisão.',
      features: ['Entradas e saídas', 'Baixa automática em procedimentos', 'Relatórios de reposição', 'Pedidos e transferência']
    },
    {
      icon: TrendingUp,
      title: 'Sistema de Marketing',
      description: 'Conquiste e fidelize seus pacientes.',
      features: ['Mensagens personalizadas', 'Campanhas por segmento', 'Promoções e aniversários', 'Datas especiais']
    },
    {
      icon: Users,
      title: 'CRM',
      description: 'Organize seu funil de vendas.',
      features: ['Criação de Funis', 'Tarefas e interações', 'Etapas e etiquetas', 'Ganho e perdas']
    },
    {
      icon: FileText,
      title: 'Convênio - Faturamento TISS',
      description: 'Processo simplificado e integrado.',
      features: ['Diversas tabelas', 'Controle de lotes', 'XML automático', 'Gestão de glosas']
    },
    {
      icon: DollarSign,
      title: 'Repasses e Comissões',
      description: 'Controle produtividades e repasses.',
      features: ['Regras configuráveis', 'Visão do profissional', 'Descontos automáticos', 'Dashboards e relatórios']
    },
    {
      icon: Network,
      title: 'Multi Empresa',
      description: 'Controle matriz e filiais.',
      features: ['Gestão centralizada', 'Plano de contas único', 'Centro de custos', 'Relatórios cruzados']
    },
    {
      icon: Network,
      title: 'Franquias',
      description: 'Ideal para redes clínicas.',
      features: ['Controle de franquiados', 'Visão franqueadora', 'Metas e definições', 'Relatórios e painéis BI']
    },
    {
      icon: Users,
      title: 'Multiusuário',
      description: 'Segurança e controle total.',
      features: ['Planos de senha', 'Permissão por grupo', 'Registro de alterações', 'Auditoria completa']
    },
    {
      icon: FileText,
      title: 'Nota Fiscal Eletrônica',
      description: 'Automatize a emissão de NFS-e.',
      features: ['Emissão por profissional', 'Status automático', 'Envio direto ao cliente', 'Integração completa']
    },
    {
      icon: DollarSign,
      title: 'Boletos Integrados',
      description: 'Facilite o pagamento dos seus serviços.',
      features: ['Emissão automática', '+22 bancos', 'Remessa e retorno direto', 'Baixa automática']
    },
    {
      icon: Cloud,
      title: 'Armazenamento em Nuvem',
      description: 'Guarde tudo de forma segura.',
      features: ['Upload de arquivos', 'Solicite arquivos ao paciente', 'Envio direto pelo celular', 'Comparador de imagens']
    },
    {
      icon: BarChart3,
      title: 'Relatórios Gerenciais',
      description: 'Tome decisões com base em dados.',
      features: ['Centenas de relatórios', 'Filtros diversos', 'Exportação personalizada', 'Análises detalhadas']
    },
    {
      icon: Smartphone,
      title: 'Painel de Atendimento',
      description: 'Experiência moderna na sala de espera.',
      features: ['Chamada por voz/texto', 'Vídeos institucionais', 'IA na locução', 'Interface moderna']
    },
    {
      icon: Smartphone,
      title: 'Teleconsulta',
      description: 'Consultas online com prontuário visível.',
      features: ['Link automático', 'Compartilhamento de tela', 'Prontuário integrado', 'Gravação de consultas']
    },
    {
      icon: Shield,
      title: 'Auditoria',
      description: 'Monitore tudo que acontece no sistema.',
      features: ['Registro de alterações', 'Hora, data e usuário', 'Filtros e histórico detalhado', 'Segurança total']
    },
    {
      icon: BarChart3,
      title: 'Plataforma de BI',
      description: 'Exclusiva plataforma de BI com painéis e visualizações de dados em tempo real.',
      features: ['Painéis de dados', 'Dashboard interativo', 'Várias visualizações', 'Rápido e prático']
    },
    {
      icon: DollarSign,
      title: 'OnDoctor Pay',
      description: 'Sistema de pagamento exclusivo com geração de boletos, cartão de crédito, com baixa automática e banco digital.',
      features: ['Emissão de boletos', 'Venda no cartão', 'Baixa automática', 'Banco digital']
    }
  ]

  return (
    <section id="recursos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conheça os recursos que vão revolucionar seu consultório
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra funcionalidades poderosas que simplificam sua rotina médica e melhoram o atendimento aos pacientes.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-primary-600 mb-2">10K+</div>
            <div className="text-sm text-gray-600">Profissionais Ativos</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-primary-600 mb-2">500K+</div>
            <div className="text-sm text-gray-600">Consultas Agendadas</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
            <div className="text-sm text-gray-600">Uptime Garantido</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Dados Em Nuvem</div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            Recursos que fazem a diferença
          </h3>
          <p className="text-lg text-gray-600">
            Cada funcionalidade foi pensada para otimizar seu tempo e melhorar a experiência dos seus pacientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} hover className="p-6">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-4">
                <resource.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h4>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <ul className="space-y-2 mb-4">
                {resource.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="sm" className="w-full">
                Saiba Mais
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para transformar sua clínica?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Experimente gratuitamente e descubra como o OnDoctor pode revolucionar sua gestão
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://web.ondoctor.app/signup" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  Experimente Grátis
                </Button>
              </a>
              <Link to="/contato">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Agendar Demonstração
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'O OnDoctor é adequado para o meu tipo de clínica?',
      answer: 'Sim! O OnDoctor atende clínicas médicas, odontológicas, psicológicas, fisioterapia, nutrição, estética e diversas outras especialidades. Nossa plataforma é flexível e se adapta às necessidades específicas de cada área da saúde.'
    },
    {
      question: 'Preciso instalar algum software no meu computador?',
      answer: 'Não! O OnDoctor é 100% online (cloud). Você acessa de qualquer lugar através do navegador, sem necessidade de instalação. Funciona em computadores, tablets e smartphones.'
    },
    {
      question: 'Meus dados estão seguros?',
      answer: 'Absolutamente! Utilizamos criptografia de ponta a ponta, servidores seguros e fazemos backups automáticos diários. Estamos em conformidade com a LGPD (Lei Geral de Proteção de Dados) e seguimos as melhores práticas de segurança da informação.'
    },
    {
      question: 'Posso testar antes de contratar?',
      answer: 'Sim! Oferecemos um período de teste gratuito para você conhecer todas as funcionalidades do sistema. Não é necessário cartão de crédito para começar.'
    },
    {
      question: 'Como funciona o suporte técnico?',
      answer: 'Oferecemos suporte via chat, e-mail e WhatsApp em horário comercial. Também temos uma base de conhecimento completa com tutoriais em vídeo e artigos para ajudá-lo a aproveitar ao máximo o sistema.'
    },
    {
      question: 'Posso importar dados do meu sistema atual?',
      answer: 'Sim! Nossa equipe auxilia na migração dos seus dados do sistema anterior para o OnDoctor, garantindo que nenhuma informação seja perdida no processo.'
    },
    {
      question: 'O sistema emite notas fiscais?',
      answer: 'Sim! O OnDoctor possui integração para emissão de NFS-e (Nota Fiscal de Serviço Eletrônica) de forma automática após cada atendimento ou pagamento.'
    },
    {
      question: 'Quantos usuários podem acessar o sistema?',
      answer: 'Depende do plano contratado. Temos opções desde profissionais autônomos até clínicas com múltiplos profissionais e unidades. Entre em contato para conhecer o plano ideal para você.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <section className="py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o OnDoctor
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-primary-300 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Não encontrou a resposta que procurava?</p>
          <Button variant="outline" size="lg">
            Entre em contato conosco
          </Button>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="precos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Tenha em sua clínica ou consultório, um sistema de gestão que entrega produtividade e agilidade
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          Conheça os planos do OnDoctor e comece a transformar sua clínica hoje mesmo
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://web.ondoctor.app/signup" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg" className="group">
              Quero começar com a versão gratuita
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <Link to="/precos">
            <Button variant="secondary" size="lg">
              Conheça todos os planos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/ondoctorapp', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ondoctorapp', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ondoctorapp', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/c/ondoctor', label: 'YouTube' },
  ]

  return (
    <footer id="contato" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <img src="/ondoctor-logo.png" alt="OnDoctor" className="h-10" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Sistema para Clínica completo e fácil de usar. Transforme a gestão da sua clínica 
              com tecnologia de ponta.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">
                <strong className="text-white">Email:</strong> contato@ondoctor.app
              </p>
              <p className="text-gray-400">
                <strong className="text-white">WhatsApp:</strong> (61) 4042-0123
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/recursos" className="hover:text-primary-400 transition-colors">Recursos</Link></li>
              <li><Link to="/precos" className="hover:text-primary-400 transition-colors">Preços</Link></li>
              <li><a href="https://ondoctor.app/blog/" className="hover:text-primary-400 transition-colors">Blog</a></li>
              <li><Link to="/contato" className="hover:text-primary-400 transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            OnDoctor - Sistema para Clinica © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default App
