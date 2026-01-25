import React, { useState } from 'react'
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
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react'
import { Button } from './components/Button'
import { Card, CardHeader, CardContent } from './components/Card'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
              <img src="/ondoctor-logo.svg" alt="OnDoctor" className="h-8" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Home</a>
            <a href="#recursos" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Recursos</a>
            <a href="#precos" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Preços</a>
            <a href="#contato" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Contato</a>
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
            <a href="#home" className="block text-gray-700 hover:text-primary-600 font-medium">Home</a>
            <a href="#recursos" className="block text-gray-700 hover:text-primary-600 font-medium">Recursos</a>
            <a href="#precos" className="block text-gray-700 hover:text-primary-600 font-medium">Preços</a>
            <a href="#contato" className="block text-gray-700 hover:text-primary-600 font-medium">Contato</a>
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

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-20 pb-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            Sistema completo para gestão de clínicas
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
            Você cuida dos pacientes.{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              O OnDoctor cuida do resto.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Financeiro, agenda, prontuário e relacionamento em uma única plataforma. 
            Junte-se a milhares de profissionais da saúde que transformaram sua gestão.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="primary" size="lg" className="group">
              Quero testar agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg">
              Conheça os planos
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-primary-300 transition-all duration-200"
              >
                <badge.icon className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <span className="text-xs font-medium text-gray-700 truncate">{badge.text}</span>
              </div>
            ))}
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
    { value: '100K+', label: 'Mensagens por dia', description: 'Via WhatsApp intermediadas pelo OnDoctor' },
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
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{feature.title}</h3>
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
    { name: 'Agente de IA 24/7', ondoctor: true, others: false },
    { name: 'Prontuário com IA', ondoctor: true, others: false },
    { name: 'WhatsApp Integrado', ondoctor: true, others: 'Limitado' },
    { name: 'Armazenamento Ilimitado', ondoctor: true, others: false },
    { name: 'Telemedicina Incluída', ondoctor: true, others: 'Pago à parte' },
    { name: 'Assinatura Digital', ondoctor: true, others: 'Pago à parte' },
    { name: 'Power BI Integrado', ondoctor: true, others: false },
    { name: 'Suporte 24/7', ondoctor: true, others: 'Horário comercial' },
    { name: 'Atualizações Gratuitas', ondoctor: true, others: false },
    { name: 'APIs Abertas', ondoctor: true, others: 'Limitado' },
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
          <Button variant="primary" size="lg">
            Começar agora gratuitamente
          </Button>
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

            <Button variant="primary" size="lg">
              Começar agora
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl p-8 flex items-center justify-center">
              <Calendar className="w-64 h-64 text-primary-600 opacity-20" />
            </div>
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
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 flex items-center justify-center">
              <FileText className="w-64 h-64 text-green-600 opacity-20" />
            </div>
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

            <Button variant="primary" size="lg">
              Ver planos
            </Button>
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
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
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
              <Card className="p-6 bg-gradient-to-br from-purple-50 to-white border-purple-200">
                <TrendingUp className="w-10 h-10 text-purple-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Aumente a lucratividade</h4>
                <p className="text-sm text-gray-600">Identifique oportunidades de crescimento</p>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-purple-50 to-white border-purple-200">
                <BarChart3 className="w-10 h-10 text-purple-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Diminua custos</h4>
                <p className="text-sm text-gray-600">Otimize despesas e recursos</p>
              </Card>
            </div>

            <Button variant="primary" size="lg">
              Conhecer recursos
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 flex items-center justify-center">
              <DollarSign className="w-64 h-64 text-purple-600 opacity-20" />
            </div>
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
          <Button variant="primary" size="lg" className="group">
            Quero começar com a versão gratuita
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary" size="lg">
            Conheça todos os planos
          </Button>
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
              <img src="/ondoctor-logo.svg" alt="OnDoctor" className="h-8 brightness-0 invert" />
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
              <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#recursos" className="hover:text-primary-400 transition-colors">Recursos</a></li>
              <li><a href="#precos" className="hover:text-primary-400 transition-colors">Preços</a></li>
              <li><a href="https://ondoctor.app/blog/" className="hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#contato" className="hover:text-primary-400 transition-colors">Contato</a></li>
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
