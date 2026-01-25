# Design System - Guia Rápido

## 🚀 Início Rápido

### Importar Tokens

```javascript
import tokens from '@/design-system/tokens'
```

### Usar com Tailwind (Recomendado)

```jsx
// Cores
<div className="bg-primary-600 text-white">
<div className="bg-secondary-500 text-white">
<div className="bg-accent-600 text-white">

// Espaçamento
<div className="p-4 m-8 gap-6">

// Tipografia
<h1 className="text-5xl font-bold">
<p className="text-base leading-relaxed">

// Sombras
<div className="shadow-lg hover:shadow-primary">

// Border Radius
<div className="rounded-lg">
<div className="rounded-2xl">

// Animações
<div className="animate-fade-in">
<div className="animate-slide-up">
```

## 📦 Estrutura de Arquivos

```
src/design-system/
├── tokens.js              # Todos os tokens de design
├── DESIGN_SYSTEM.md       # Documentação completa
└── README.md             # Este arquivo (guia rápido)
```

## 🎨 Paleta de Cores

### Primary (Teal)
```jsx
primary-50   // #f0fdfa - Backgrounds muito claros
primary-100  // #ccfbf1 - Backgrounds claros
primary-500  // #14b8a6 - Cor base
primary-600  // #0d9488 - Cor principal (botões, links)
primary-700  // #0f766e - Hover states
primary-900  // #134e4a - Textos escuros
```

### Cores Semânticas
```jsx
success-600  // Verde - Confirmações
warning-600  // Amarelo - Avisos
error-600    // Vermelho - Erros
neutral-600  // Cinza - Textos neutros
```

## 📝 Tipografia

```jsx
// Títulos
text-7xl  // 72px - Display
text-6xl  // 60px - Hero
text-5xl  // 48px - H1
text-4xl  // 36px - H2
text-3xl  // 30px - H3
text-2xl  // 24px - H4

// Corpo
text-xl   // 20px - Subtítulos
text-lg   // 18px - Destaque
text-base // 16px - Padrão
text-sm   // 14px - Secundário
text-xs   // 12px - Labels

// Pesos
font-light     // 300
font-normal    // 400
font-medium    // 500
font-semibold  // 600
font-bold      // 700
font-extrabold // 800
```

## 📏 Espaçamento

```jsx
// Múltiplos de 4px
p-1   // 4px
p-2   // 8px
p-3   // 12px
p-4   // 16px (base)
p-6   // 24px
p-8   // 32px
p-12  // 48px
p-16  // 64px
p-20  // 80px
```

## 🔘 Componentes

### Button

```jsx
import { Button } from '@/components/Button'

// Variantes
<Button variant="primary" size="md">Primário</Button>
<Button variant="secondary" size="md">Secundário</Button>
<Button variant="outline" size="md">Outline</Button>

// Tamanhos
<Button size="sm">Pequeno</Button>
<Button size="md">Médio</Button>
<Button size="lg">Grande</Button>
```

### Card

```jsx
import { Card, CardHeader, CardContent } from '@/components/Card'

<Card hover className="p-8">
  <CardHeader>
    <h3 className="text-xl font-bold">Título</h3>
  </CardHeader>
  <CardContent>
    <p>Conteúdo do card</p>
  </CardContent>
</Card>
```

## 🎭 Estados Interativos

```jsx
// Hover
hover:bg-primary-700
hover:shadow-lg
hover:scale-105

// Focus
focus:ring-2
focus:ring-primary-500
focus:ring-offset-2

// Active
active:bg-primary-800

// Disabled
disabled:opacity-50
disabled:cursor-not-allowed
```

## 🌈 Gradientes

```jsx
// Teal gradient
bg-gradient-to-r from-primary-600 to-primary-800
bg-gradient-to-br from-primary-500 to-primary-700

// Multi-color
bg-gradient-to-br from-primary-50 via-white to-primary-50
```

## 📱 Responsividade

```jsx
// Mobile first
<div className="text-base md:text-lg lg:text-xl">

// Breakpoints
sm:   // 640px
md:   // 768px
lg:   // 1024px
xl:   // 1280px
2xl:  // 1536px
```

## ⚡ Transições

```jsx
// Duração
transition-fast   // 150ms
transition        // 200ms (padrão)
transition-slow   // 300ms

// Timing
ease-in
ease-out
ease-in-out

// Exemplo completo
className="transition-all duration-base ease-in-out hover:scale-105"
```

## 🎬 Animações

```jsx
animate-fade-in    // Fade in
animate-slide-up   // Slide up
animate-slide-down // Slide down
animate-scale-in   // Scale in
animate-pulse      // Pulse (infinite)
```

## 🔍 Z-Index

```jsx
z-dropdown       // 1000
z-sticky         // 1100
z-fixed          // 1200
z-modalBackdrop  // 1300
z-modal          // 1400
z-popover        // 1500
z-tooltip        // 1600
```

## ✅ Checklist de Uso

Ao criar um novo componente:

- [ ] Usar cores da paleta (primary, secondary, etc.)
- [ ] Usar espaçamentos do sistema (múltiplos de 4px)
- [ ] Seguir hierarquia tipográfica
- [ ] Adicionar estados hover/focus/active
- [ ] Testar responsividade
- [ ] Verificar contraste de cores (WCAG AA)
- [ ] Adicionar animações suaves
- [ ] Usar border-radius consistente

## 📚 Documentação Completa

Para mais detalhes, consulte: `DESIGN_SYSTEM.md`

## 🆘 Suporte

Dúvidas? Entre em contato:
- Email: design@ondoctor.app
