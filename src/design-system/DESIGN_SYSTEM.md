# OnDoctor Design System

## 📋 Índice

1. [Introdução](#introdução)
2. [Princípios de Design](#princípios-de-design)
3. [Tokens de Design](#tokens-de-design)
4. [Cores](#cores)
5. [Tipografia](#tipografia)
6. [Espaçamento](#espaçamento)
7. [Componentes](#componentes)
8. [Guia de Uso](#guia-de-uso)

---

## Introdução

O Design System do OnDoctor é um conjunto de padrões, componentes e diretrizes que garantem consistência visual e funcional em toda a plataforma. Este documento serve como referência única para designers e desenvolvedores.

### Objetivos

- **Consistência**: Manter uma experiência visual uniforme
- **Eficiência**: Acelerar o desenvolvimento com componentes reutilizáveis
- **Escalabilidade**: Facilitar a manutenção e evolução do produto
- **Acessibilidade**: Garantir que todos possam usar a plataforma

---

## Princípios de Design

### 1. Clareza
Interface limpa e objetiva, focada na experiência do profissional de saúde.

### 2. Confiança
Design profissional que transmite segurança e credibilidade.

### 3. Eficiência
Fluxos otimizados que economizam tempo do usuário.

### 4. Acessibilidade
Seguir WCAG 2.1 nível AA para garantir inclusão.

---

## Tokens de Design

Todos os valores de design estão centralizados em `src/design-system/tokens.js`.

### Como usar

```javascript
import tokens from '@/design-system/tokens'

// Exemplo de uso
const primaryColor = tokens.colors.primary[600]
const spacing = tokens.spacing[4]
```

---

## Cores

### Paleta Principal

#### Primary (Teal)
Cor principal do OnDoctor, usada em CTAs, links e elementos interativos.

- **50**: `#f0fdfa` - Backgrounds muito claros
- **100**: `#ccfbf1` - Backgrounds claros
- **200**: `#99f6e4` - Borders e divisores
- **300**: `#5eead4` - Hover states suaves
- **400**: `#2dd4bf` - Elementos secundários
- **500**: `#14b8a6` - **Cor base** (uso geral)
- **600**: `#0d9488` - **Cor principal** (botões, links)
- **700**: `#0f766e` - Hover states
- **800**: `#115e59` - Estados ativos
- **900**: `#134e4a` - Textos escuros

#### Secondary (Purple)
Para destaques secundários e elementos de suporte.

#### Accent (Orange)
Para CTAs importantes e elementos que precisam de atenção.

### Cores Semânticas

- **Success**: Verde - Confirmações e sucessos
- **Warning**: Amarelo - Avisos e atenções
- **Error**: Vermelho - Erros e validações
- **Neutral**: Cinza - Textos e backgrounds

### Contraste e Acessibilidade

Todas as combinações de cores seguem WCAG 2.1:
- Texto normal: mínimo 4.5:1
- Texto grande: mínimo 3:1
- Elementos UI: mínimo 3:1

---

## Tipografia

### Família de Fontes

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Escala Tipográfica

| Nome | Tamanho | Uso |
|------|---------|-----|
| xs | 12px | Labels pequenos, metadados |
| sm | 14px | Textos secundários |
| base | 16px | Corpo de texto padrão |
| lg | 18px | Textos destacados |
| xl | 20px | Subtítulos pequenos |
| 2xl | 24px | Subtítulos |
| 3xl | 30px | Títulos de seção |
| 4xl | 36px | Títulos de página |
| 5xl | 48px | Títulos hero |
| 6xl | 60px | Títulos grandes |
| 7xl | 72px | Display titles |

### Pesos de Fonte

- **Light (300)**: Textos decorativos
- **Normal (400)**: Corpo de texto
- **Medium (500)**: Ênfase suave
- **Semibold (600)**: Subtítulos
- **Bold (700)**: Títulos
- **Extrabold (800)**: Títulos hero

### Hierarquia Tipográfica

```jsx
// H1 - Título Principal
<h1 className="text-5xl md:text-6xl font-bold">

// H2 - Título de Seção
<h2 className="text-4xl md:text-5xl font-bold">

// H3 - Subtítulo
<h3 className="text-2xl md:text-3xl font-semibold">

// Body - Texto padrão
<p className="text-base leading-relaxed">

// Small - Texto secundário
<p className="text-sm text-gray-600">
```

---

## Espaçamento

### Sistema de Espaçamento (múltiplos de 4px)

| Token | Valor | Uso |
|-------|-------|-----|
| 1 | 4px | Espaçamentos mínimos |
| 2 | 8px | Espaçamentos pequenos |
| 3 | 12px | Gaps entre elementos |
| 4 | 16px | **Espaçamento base** |
| 6 | 24px | Espaçamentos médios |
| 8 | 32px | Espaçamentos grandes |
| 12 | 48px | Seções |
| 16 | 64px | Seções grandes |
| 20 | 80px | Margens de página |

### Diretrizes

- Use múltiplos de 4px para manter consistência
- Espaçamento interno (padding): 4, 6, 8
- Espaçamento externo (margin): 4, 8, 12, 16
- Seções: 20, 24, 32

---

## Componentes

### Button

#### Variantes

**Primary**
```jsx
<Button variant="primary" size="md">
  Botão Primário
</Button>
```
- Background: `primary-600`
- Hover: `primary-700`
- Texto: branco
- Shadow: `primary`

**Secondary**
```jsx
<Button variant="secondary" size="md">
  Botão Secundário
</Button>
```
- Background: branco
- Border: `primary-600`
- Texto: `primary-600`
- Hover: `primary-50`

**Outline**
```jsx
<Button variant="outline" size="md">
  Botão Outline
</Button>
```
- Background: transparente
- Border: `gray-300`
- Texto: `gray-700`

#### Tamanhos

- **sm**: 32px altura, padding 0.5rem 1rem
- **md**: 40px altura, padding 0.75rem 1.5rem
- **lg**: 48px altura, padding 1rem 2rem

### Card

```jsx
<Card hover className="p-8">
  <CardHeader>
    <h3>Título</h3>
  </CardHeader>
  <CardContent>
    Conteúdo do card
  </CardContent>
</Card>
```

**Propriedades:**
- Border radius: `1rem`
- Shadow: `sm`
- Hover shadow: `xl`
- Border: `gray-200`

### Input

```jsx
<input 
  className="h-10 px-4 rounded-lg border border-gray-300 focus:border-primary-600"
  type="text"
/>
```

**Estados:**
- Default: border `gray-300`
- Focus: border `primary-600`, ring `primary-500`
- Error: border `error-500`
- Disabled: background `gray-100`, cursor not-allowed

---

## Guia de Uso

### 1. Importar Tokens

```javascript
import tokens from '@/design-system/tokens'
```

### 2. Usar em Componentes

```jsx
// Exemplo com styled-components ou CSS-in-JS
const Button = styled.button`
  background-color: ${tokens.colors.primary[600]};
  padding: ${tokens.spacing[4]};
  border-radius: ${tokens.borderRadius.lg};
  font-size: ${tokens.typography.fontSize.base};
  transition: all ${tokens.transitions.duration.base} ${tokens.transitions.timing.easeInOut};
  
  &:hover {
    background-color: ${tokens.colors.primary[700]};
    box-shadow: ${tokens.shadows.primary};
  }
`
```

### 3. Usar com Tailwind

O Tailwind já está configurado para usar os tokens. Use as classes normalmente:

```jsx
<div className="bg-primary-600 text-white p-4 rounded-lg shadow-primary">
  Conteúdo
</div>
```

### 4. Criar Novos Componentes

Sempre baseie-se nos tokens existentes:

```jsx
import tokens from '@/design-system/tokens'

function MyComponent() {
  return (
    <div style={{
      padding: tokens.spacing[6],
      backgroundColor: tokens.colors.primary[50],
      borderRadius: tokens.borderRadius.xl,
    }}>
      Meu componente
    </div>
  )
}
```

---

## Boas Práticas

### ✅ Fazer

- Usar tokens de design em vez de valores hardcoded
- Manter consistência com a paleta de cores
- Seguir a hierarquia tipográfica
- Usar espaçamentos do sistema (múltiplos de 4px)
- Testar contraste de cores para acessibilidade

### ❌ Evitar

- Criar cores customizadas fora da paleta
- Usar valores de espaçamento aleatórios
- Misturar diferentes escalas tipográficas
- Ignorar estados de hover/focus/disabled
- Criar componentes sem seguir os padrões

---

## Acessibilidade

### Contraste de Cores

Sempre verifique o contraste:
- Texto normal: mínimo 4.5:1
- Texto grande (18px+): mínimo 3:1

### Foco Visível

Todos os elementos interativos devem ter estado de foco visível:

```jsx
<button className="focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
  Botão
</button>
```

### Semântica HTML

Use elementos HTML semânticos:
- `<button>` para ações
- `<a>` para navegação
- `<input>` para campos de formulário
- Headings (`h1`-`h6`) em ordem hierárquica

---

## Versionamento

**Versão atual**: 1.0.0

### Changelog

#### v1.0.0 (2025-01-25)
- Design System inicial
- Tokens de cores, tipografia e espaçamento
- Componentes base: Button, Card, Input
- Documentação completa

---

## Suporte

Para dúvidas ou sugestões sobre o Design System:
- Email: design@ondoctor.app
- Documentação: [Link para docs]

---

**Última atualização**: Janeiro 2025
