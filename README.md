# Portfólio | Iarley Gadelha

Portfólio pessoal de **Iarley Gadelha**, desenvolvedor web com foco em automação de processos. O site tem visual moderno, tema escuro e layout responsivo.

## Seções

- **Início:** apresentação e cargo
- **Sobre:** desenvolvimento web e automação de processos
- **Projetos:** aplicações publicadas, com link para cada uma
- **Habilidades técnicas:** tecnologias organizadas por categoria
- **Objetivo profissional**

## Projetos em destaque

| Projeto | Descrição | Link |
|---|---|---|
| Calculadora | Cálculos matemáticos com interface simples e funcional | [Abrir](https://calculadora-cyan-iota.vercel.app/) |
| Ficha de Inscrição | Formulário para coletar e organizar inscrições | [Abrir](https://ficha-de-inscricao.vercel.app/) |
| Sistema de Login e Senha | Autenticação de usuários e gerenciamento de acesso | [Abrir](https://login-e-senha-lemon.vercel.app/) |

## Tecnologias

- HTML5, CSS3 e JavaScript puro (sem frameworks ou dependências)
- Fontes: Space Grotesk e DM Sans, via Google Fonts

## Estrutura

```
/
├── index.html   # estrutura e conteúdo da página
├── style.css    # estilos, cores e responsividade
└── script.js    # menu mobile, texto digitado e animações
```

## Como usar

1. Coloque os três arquivos na mesma pasta.
2. Abra o `index.html` no navegador com dois cliques.

Para rodar com um servidor local:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Publicação na Vercel

1. Suba a pasta para um repositório no GitHub.
2. Na [Vercel](https://vercel.com), clique em **Add New > Project** e importe o repositório.
3. Mantenha as configurações padrão (projeto estático, sem build) e clique em **Deploy**.

Também funciona no Netlify: arraste a pasta para o painel de deploy.

## Personalização

- **Cores:** variáveis no início do `style.css` (`--accent`, `--accent-2`, `--bg`, entre outras)
- **Cargos digitados no topo:** lista `roles` no `script.js`
- **Projetos:** blocos `<article class="card">` no `index.html`

## Autor

**Iarley Gadelha**, Desenvolvedor Web | Automação de Processos
