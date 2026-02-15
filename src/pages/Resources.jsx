import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Calendar, 
  FileText, 
  DollarSign, 
  Cloud, 
  Smartphone, 
  Shield,
  CheckCircle,
  MessageSquare,
  FileSignature,
  BarChart3,
  Network,
  Package,
  TrendingUp,
  Users,
  Activity,
  Tv,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'

function ResourcesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
      features: ['Confirmações automáticas', 'Envio de protocolos', 'Campanhas de marketing', 'Pesquisa de satisfação'],
      customIcon: true
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
      icon: Tv,
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

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/ondoctorapp', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ondoctorapp', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ondoctorapp', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/c/ondoctor', label: 'YouTube' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
              <Link to="/recursos" className="text-primary-600 font-medium">Recursos</Link>
              <Link to="/precos" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Preços</Link>
              <Link to="/contato" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Contato</Link>
              <Button variant="primary" size="sm">
                Sou Cliente
              </Button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <Link to="/" className="block text-gray-700 hover:text-primary-600 font-medium transition-colors">Home</Link>
              <Link to="/recursos" className="block text-primary-600 font-medium">Recursos</Link>
              <Link to="/precos" className="block text-gray-700 hover:text-primary-600 font-medium transition-colors">Preços</Link>
              <Link to="/contato" className="block text-gray-700 hover:text-primary-600 font-medium transition-colors">Contato</Link>
              <Button variant="primary" size="sm">
                Sou Cliente
              </Button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Conheça os recursos que vão revolucionar seu consultório
            </h1>
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://web.ondoctor.app/signup" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">
                Experimente Grátis
              </Button>
            </a>
            <Link to="/contato">
              <Button variant="secondary" size="lg">
                Agendar Demonstração
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Recursos que fazem a diferença
            </h2>
            <p className="text-lg text-gray-600">
              Cada funcionalidade foi pensada para otimizar seu tempo e melhorar a experiência dos seus pacientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} hover className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-4">
                  {resource.customIcon && resource.title === 'Lembretes Inteligentes' ? (
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  ) : (
                    <resource.icon className="w-7 h-7 text-white" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para transformar sua clínica?
            </h2>
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
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
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
                  <strong className="text-white">Telefone:</strong> (11) 99999-9999
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="/site/" className="hover:text-primary-400 transition-colors">Home</a></li>
                <li><a href="/site/recursos.html" className="hover:text-primary-400 transition-colors">Recursos</a></li>
                <li><a href="/site/#precos" className="hover:text-primary-400 transition-colors">Preços</a></li>
                <li><a href="/site/#contato" className="hover:text-primary-400 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 OnDoctor. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ResourcesPage
