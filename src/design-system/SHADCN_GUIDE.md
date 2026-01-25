# Guia de Uso - shadcn/ui no OnDoctor

## 📦 Componentes Instalados

Os seguintes componentes shadcn/ui estão disponíveis no projeto:

- **Button** - Botões com variantes e tamanhos
- **Card** - Cards para conteúdo
- **Input** - Campos de entrada
- **Badge** - Badges e tags
- **Dialog** - Modais e diálogos
- **Dropdown Menu** - Menus dropdown

## 🎨 Integração com Design System OnDoctor

O shadcn/ui foi configurado para usar as cores teal do OnDoctor através de variáveis CSS.

### Cores Principais

```css
--primary: 172 66% 50%        /* Teal #14b8a6 */
--ring: 172 66% 50%           /* Teal para focus rings */
```

## 🚀 Como Usar os Componentes

### Button

```jsx
import { Button } from "@/components/ui/button"

// Variantes
<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Tamanhos
<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>
```

### Card

```jsx
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição do card</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Conteúdo principal do card</p>
  </CardContent>
  <CardFooter>
    <Button>Ação</Button>
  </CardFooter>
</Card>
```

### Input

```jsx
import { Input } from "@/components/ui/input"

<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Senha" />
<Input disabled placeholder="Desabilitado" />
```

### Badge

```jsx
import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

### Dialog

```jsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button>Abrir Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Título do Dialog</DialogTitle>
      <DialogDescription>
        Descrição do dialog
      </DialogDescription>
    </DialogHeader>
    <div>Conteúdo do dialog</div>
  </DialogContent>
</Dialog>
```

### Dropdown Menu

```jsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Abrir Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Perfil</DropdownMenuItem>
    <DropdownMenuItem>Configurações</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Sair</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## 🎯 Boas Práticas

### 1. Sempre use os componentes shadcn/ui

Em vez de criar botões HTML nativos, use os componentes shadcn/ui:

❌ **Evite:**
```jsx
<button className="bg-primary-600 text-white px-4 py-2 rounded">
  Clique aqui
</button>
```

✅ **Prefira:**
```jsx
import { Button } from "@/components/ui/button"

<Button>Clique aqui</Button>
```

### 2. Use variantes semânticas

```jsx
// Para ações principais
<Button variant="default">Salvar</Button>

// Para ações secundárias
<Button variant="secondary">Cancelar</Button>

// Para ações destrutivas
<Button variant="destructive">Excluir</Button>

// Para ações sutis
<Button variant="ghost">Fechar</Button>
```

### 3. Combine com Design Tokens

Você pode combinar componentes shadcn/ui com os tokens do Design System:

```jsx
import { Button } from "@/components/ui/button"
import tokens from "@/design-system/tokens"

<div style={{ padding: tokens.spacing[8] }}>
  <Button>Botão com espaçamento do Design System</Button>
</div>
```

### 4. Personalize quando necessário

Os componentes shadcn/ui podem ser personalizados com classes Tailwind:

```jsx
<Button className="w-full bg-gradient-to-r from-primary-600 to-primary-800">
  Botão Customizado
</Button>
```

## 📚 Adicionar Mais Componentes

Para adicionar novos componentes shadcn/ui ao projeto:

```bash
pnpm dlx shadcn@latest add [component-name]
```

Exemplos:
```bash
pnpm dlx shadcn@latest add accordion
pnpm dlx shadcn@latest add alert
pnpm dlx shadcn@latest add avatar
pnpm dlx shadcn@latest add checkbox
pnpm dlx shadcn@latest add select
pnpm dlx shadcn@latest add tabs
pnpm dlx shadcn@latest add toast
```

## 🎨 Customização de Cores

As cores do shadcn/ui estão sincronizadas com o Design System OnDoctor através de variáveis CSS em `src/index.css`:

```css
:root {
  --primary: 172 66% 50%;        /* Teal OnDoctor */
  --ring: 172 66% 50%;           /* Focus ring teal */
  /* ... outras variáveis ... */
}
```

Para alterar cores globalmente, edite essas variáveis CSS.

## 🔗 Recursos

- [Documentação shadcn/ui](https://ui.shadcn.com)
- [Componentes Disponíveis](https://ui.shadcn.com/docs/components)
- [Temas](https://ui.shadcn.com/themes)
- [Exemplos](https://ui.shadcn.com/examples)

## ⚡ Atalhos de Importação

Graças aos aliases configurados, você pode importar facilmente:

```jsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import tokens from "@/design-system/tokens"
import { cn } from "@/lib/utils"
```

## 🎭 Modo Escuro (Dark Mode)

O projeto está configurado para suportar dark mode. Para ativar:

```jsx
// Adicione a classe "dark" ao elemento html
<html className="dark">
```

As variáveis CSS em `src/index.css` já incluem suporte para dark mode com as cores teal do OnDoctor.

---

**Última atualização**: Janeiro 2025
