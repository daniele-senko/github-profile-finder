# GitHub Profile Finder

Um aplicativo React moderno para buscar e visualizar perfis do GitHub de forma rápida e intuitiva.

## 🚀 Funcionalidades

- **Busca de Perfis**: Pesquise qualquer usuário do GitHub pelo nome de usuário
- **Exibição de Perfil**: Visualize informações detalhadas do perfil, incluindo avatar, nome, bio
- **Design Responsivo**: Interface moderna com Tailwind CSS que se adapta a diferentes tamanhos de tela
- **Feedback Visual**: Indicadores de carregamento e mensagens de erro claras
- **Ícones React**: Integração com react-icons para uma experiência visual aprimorada

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool rápida e moderna
- **Tailwind CSS** - Framework CSS utilitário
- **React Icons** - Biblioteca de ícones para React
- **ESLint** - Ferramenta de linting para código JavaScript

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão recomendada: 18.x ou superior)
- npm ou yarn como gerenciador de pacotes

## 🔧 Instalação

1. Clone este repositório:
```bash
git clone <url-do-repositorio>
cd github-profile-finder
```

2. Instale as dependências:
```bash
npm install
```

## 🚀 Como Usar

### Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

### Build de Produção

Crie uma build otimizada para produção:

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

### Preview da Build

Visualize a build de produção localmente:

```bash
npm run preview
```

### Linting

Execute a verificação de código:

```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
github-profile-finder/
├── src/
│   ├── assets/          # Imagens e recursos estáticos
│   ├── components/      # Componentes React reutilizáveis
│   │   ├── layout/      # Componentes de layout
│   │   └── ui/          # Componentes de interface
│   ├── App.jsx          # Componente principal da aplicação
│   ├── main.jsx         # Ponto de entrada da aplicação
│   └── index.css        # Estilos globais
├── index.html           # HTML base
├── package.json         # Dependências e scripts
├── vite.config.js       # Configuração do Vite
├── tailwind.config.js   # Configuração do Tailwind CSS
└── eslint.config.js     # Configuração do ESLint
```

## 🎨 Personalização

### Tailwind CSS

Para personalizar o tema do Tailwind, edite o arquivo `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Adicione suas personalizações aqui
    },
  },
  plugins: [],
}
```