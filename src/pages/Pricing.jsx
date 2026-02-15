import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Check, 
  X,
  Sparkles,
  Menu,
  X as CloseIcon,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Zap,
  Users,
  Building2,
  Crown
} from 'lucide-react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'

function PricingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const plans = [
    {
      name: 'CONSULTÓRIO',
      subtitle: 'Ideal para consultório',
      icon: Zap,
      monthlyPrice: '29,90',
      pricePrefix: 'R$',
      priceSuffix: 'por usuário/mês',
      color: 'primary',
      badge: null,
      features: [
        { name: 'Pacientes ilimitados', included: true },
        { name: 'Agenda Simples', included: true },
        { name: 'Prontuário Simples', included: true },
        { name: 'Lembretes por WhatsApp*', included: true, hasInfo: true }
      ],
      cta: 'COMEÇAR A USAR',
      ctaSubtext: 'Não requer cartão de crédito',
      popular: false
    },
    {
      name: 'PREMIUM',
      subtitle: 'Recomendado para Clínica',
      icon: Crown,
      monthlyPrice: '79,90',
      pricePrefix: 'R$',
      priceSuffix: 'por usuário/mês',
      color: 'primary',
      badge: 'Recomendado',
      features: [
        { name: 'Pacientes ilimitados', included: true },
        { name: 'Convênios ilimitados', included: true },
        { name: 'Agenda Completa', included: true },
        { name: 'Prontuários completos', included: true },
        { name: 'Receitas, Laudos e Atestados', included: true },
        { name: 'Anexo de Imagens do Paciente', included: true },
        { name: 'Armazenamento em Nuvem', included: true, hasInfo: true },
        { name: 'Lembretes por WhatsApp*', included: true, hasInfo: true },
        { name: 'Geração de Termos e Contratos', included: true },
        { name: 'Gestão de Convênio e Preço', included: true },
        { name: 'Múltiplas Agendas por Sala', included: true },
        { name: 'Repasses e Comissões', included: true },
        { name: 'Campanhas de Marketing', included: true },
        { name: 'Controle de Estoque', included: true },
        { name: 'Emissão de NFS-e*', included: true, hasInfo: true },
        { name: 'Financeiro Completo', included: true },
        { name: 'DRE - Demonstrativo de Resultado', included: true },
        { name: 'Pesquisa de Satisfação (NPS)', included: true, hasInfo: true },
        { name: 'Assinatura Digital', included: true, hasInfo: true },
        { name: 'TeleConsulta', included: true, hasInfo: true },
        { name: 'Página de Perfil Profissional', included: true, hasInfo: true },
        { name: 'Anamnese personalizada', included: true, hasInfo: true }
      ],
      cta: 'TESTAR 7 DIAS',
      ctaSubtext: 'Plano Mensal',
      popular: true
    },
    {
      name: 'ENTERPRISE',
      subtitle: 'Rede de Clínicas e Franquias',
      icon: Building2,
      monthlyPrice: 'Consulte',
      pricePrefix: 'R$',
      priceSuffix: 'por usuário/mês',
      color: 'primary',
      badge: null,
      features: [
        { name: 'Recursos Premium +', included: true },
        { name: 'Gestão Multi-Empresa', included: true },
        { name: 'Faturamento TISS', included: true },
        { name: 'Gestão de Franqueados*', included: true, hasInfo: true },
        { name: 'Agenda Call-Center', included: true, hasInfo: true },
        { name: 'Gestão de Reembolsos', included: true, hasInfo: true },
        { name: 'CRM - Captação de Clientes', included: true, hasInfo: true }
      ],
      cta: 'CONTATE-NOS',
      ctaSubtext: 'Plano Mensal',
      popular: false
    },
    {
      name: 'PERSONALIZADO',
      subtitle: 'Acima de 10 usuários',
      icon: Users,
      monthlyPrice: 'COTAR',
      pricePrefix: 'R$',
      priceSuffix: 'ACIMA DE 10 USUÁRIOS',
      color: 'primary',
      badge: null,
      features: [
        { name: 'Recursos Premium +', included: true },
        { name: 'Recursos Enterprise +', included: true },
        { name: 'Integração com Power-BI', included: true },
        { name: 'Possibilidade White Label*', included: true, hasInfo: true },
        { name: 'OnDoctorPay', included: true, hasInfo: true },
        { name: 'Gerente de Conta Dedicado', included: true }
      ],
      cta: 'COTAR PLANO',
      ctaSubtext: 'Solicite proposta',
      popular: false
    }
  ]

  const faqs = [
    {
      question: 'Posso testar antes de assinar?',
      answer: 'Sim! Oferecemos 14 dias de teste grátis em todos os planos, sem necessidade de cartão de crédito.'
    },
    {
      question: 'Posso mudar de plano depois?',
      answer: 'Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas imediatamente.'
    },
    {
      question: 'Como funciona o pagamento?',
      answer: 'Aceitamos cartão de crédito, boleto bancário e PIX. O pagamento é mensal ou anual, conforme sua escolha.'
    },
    {
      question: 'Há taxa de setup ou cancelamento?',
      answer: 'Não! Não cobramos taxa de setup, implementação ou cancelamento. Você pode cancelar quando quiser.'
    },
    {
      question: 'Os dados são seguros?',
      answer: 'Sim! Utilizamos criptografia de ponta a ponta e seguimos todas as normas da LGPD. Seus dados estão 100% seguros.'
    },
    {
      question: 'Qual o suporte oferecido?',
      answer: 'Oferecemos suporte via WhatsApp, email e chat. Planos Enterprise têm suporte prioritário e gerente dedicado.'
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/ondoctorapp', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ondoctor.app', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ondoctorapp', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/c/ondoctor', label: 'YouTube' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src="/ondoctor-logo.png" alt="OnDoctor" className="h-10" />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Home</Link>
              <Link to="/recursos" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Recursos</Link>
              <Link to="/precos" className="text-primary-600 font-medium">Preços</Link>
              <Link to="/contato" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Contato</Link>
              <Button variant="primary" size="sm">
                Sou Cliente
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              >
                {mobileMenuOpen ? <CloseIcon className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Home</Link>
              <Link to="/recursos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Recursos</Link>
              <Link to="/precos" className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 bg-primary-50">Preços</Link>
              <Link to="/contato" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Contato</Link>
              <Button variant="primary" size="sm" className="w-full mt-2">
                Sou Cliente
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Planos para todos os tamanhos
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Sistema para clínicas com o{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              plano certo
            </span>
            {' '}para você
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Junte-se a milhares de profissionais de todo o Brasil e transforme a gestão da sua clínica com o OnDoctor
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative p-6 ${plan.popular ? 'border-2 border-primary-500 shadow-xl' : 'border border-gray-200'}`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 -right-3 bg-primary-600 text-white px-4 py-1 rounded-full text-xs font-semibold transform rotate-12">
                    {plan.badge}
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-block bg-primary-600 text-white px-4 py-1 rounded text-sm font-bold mb-4">
                    {plan.name}
                  </div>
                  <p className="text-xs text-gray-600 mb-4">{plan.subtitle}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm text-gray-600">{plan.pricePrefix}</span>
                      <span className="text-4xl font-bold text-primary-600">{plan.monthlyPrice}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{plan.priceSuffix}</p>
                  </div>

                  <a href="https://web.ondoctor.app/signup" target="_blank" rel="noopener noreferrer" className="block">
                    <Button 
                      variant="primary"
                      size="sm" 
                      className="w-full mb-2"
                    >
                      {plan.cta}
                    </Button>
                  </a>
                  <p className="text-xs text-gray-500">{plan.ctaSubtext}</p>
                </div>

                <ul className="space-y-2 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-700">
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Todos os planos incluem: Armazenamento ilimitado • Atualizações gratuitas • Suporte via WhatsApp
            </p>
            <p className="text-sm text-gray-500">
              * Recursos com custo adicional ou limitações. Consulte nossa equipe para mais informações.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600">
              Tire suas dúvidas sobre nossos planos e serviços
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para transformar sua clínica?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Comece seu teste grátis hoje e veja como o OnDoctor pode revolucionar sua gestão
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://web.ondoctor.app/signup" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="group">
                Começar Teste Grátis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link to="/contato">
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20">
                Falar com Vendas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="mb-6">
                <img src="/ondoctor-logo.png" alt="OnDoctor" className="h-10 brightness-0 invert" />
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
              <h3 className="text-lg font-semibold text-white mb-4">Navegação</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/recursos" className="text-gray-400 hover:text-white transition-colors">Recursos</Link></li>
                <li><Link to="/precos" className="text-gray-400 hover:text-white transition-colors">Preços</Link></li>
                <li><Link to="/contato" className="text-gray-400 hover:text-white transition-colors">Contato</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Social</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-gray-400 hover:text-white transition-colors">
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} OnDoctor. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PricingPage
