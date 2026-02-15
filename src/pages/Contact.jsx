import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  TrendingUp,
  Star,
  Search,
  ArrowRight,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'

function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
              <Link to="/precos" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Preços</Link>
              <Link to="/contato" className="text-primary-600 font-medium">Contato</Link>
              <Button variant="primary" size="sm">
                Sou Cliente
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Home</Link>
              <Link to="/recursos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Recursos</Link>
              <Link to="/precos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Preços</Link>
              <Link to="/contato" className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 bg-primary-50">Contato</Link>
              <Button variant="primary" size="sm" className="w-full mt-2">
                Sou Cliente
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Fale com a gente
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Estamos aqui para ajudar você a ter a melhor experiência com a OnDoctor.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Sales Card */}
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Quero falar com o time de vendas
              </h2>
              <p className="text-gray-600 mb-8">
                Conheça a OnDoctor e tire dúvidas sobre nossa solução com nosso time especialista.
              </p>
              <Button variant="outline" size="lg" className="group">
                Fale com a gente
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>

            {/* Support Card */}
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-primary-500">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Já sou cliente
              </h2>
              <p className="text-gray-600 mb-8">
                Tire dúvidas sobre seu contrato e nossa solução pela central de ajuda.
              </p>
              <Button variant="primary" size="lg" className="group">
                Acessar central de ajuda
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          </div>

          {/* Other Topics Card */}
          <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Outros assuntos
                  </h2>
                  <p className="text-gray-600">
                    Não fique com dúvidas! Entre em contato com a gente para ter ajuda.
                  </p>
                </div>
              </div>
              <Button variant="outline" size="lg" className="group md:flex-shrink-0">
                Fale com a gente
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Outras formas de contato
            </h2>
            <p className="text-lg text-gray-600">
              Escolha a melhor forma de falar conosco
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Telefone</h3>
              <p className="text-gray-600 mb-4">
                Ligue para nossa central de atendimento
              </p>
              <a href="tel:+556140420123" className="text-primary-600 font-semibold hover:text-primary-700">
                (61) 4042-0123
              </a>
            </Card>

            {/* Email */}
            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
              <p className="text-gray-600 mb-4">
                Envie sua mensagem para nosso email
              </p>
              <a href="mailto:contato@ondoctor.app" className="text-primary-600 font-semibold hover:text-primary-700">
                contato@ondoctor.app
              </a>
            </Card>

            {/* WhatsApp */}
            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Fale conosco pelo WhatsApp
              </p>
              <a href="https://api.whatsapp.com/send?phone=556140420123" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold hover:text-primary-700">
                Iniciar conversa
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ainda tem dúvidas?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Nossa equipe está pronta para ajudar você a encontrar a melhor solução
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://web.ondoctor.app/signup" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="group">
                Começar Teste Grátis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link to="/recursos">
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20">
                Ver Recursos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
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

export default ContactPage
