# somar-app

Instruções para Teste Rápido
Abra o arquivo app.html em qualquer navegador web moderno.

Na tela de login, insira qualquer e-mail e senha fictícios (Ex: ms2@gmail.com e 1234).

app.html (Estrutura e Conteúdo)

Centraliza as visões/telas da aplicação através de containers do tipo .page.

Inclui navegação responsiva (Bootstrap), tela de splash, overlays de carregamento, toasts e seções dinâmicas.

app.js (Comportamento e Inteligência)

Organizado no padrão IIFE ((function () { ... })()) para evitar poluição do escopo global.

Contém a camada de dados simulada (DB_KEY = 'somar_data'), dicionário i18n, renderizadores dinâmicos e listeners de delegação de eventos (document.addEventListener('click', ...)).

stylesapp.css (Visual e Design)

Variáveis CSS no :root para gerenciamento centralizado de cores e transições.

Estilização completa do Dark Mode, cards com efeito hover, barra de progresso do quiz e responsividade ajustada para cartões em telas pequenas (@media (max-width: 768px)).

🛠️ Arquitetura e Fluxo de Dados
Plaintext
[ Entrada do Usuário ]
          │
          ▼
┌───────────────────┐      Salva / Lê      ┌───────────────────┐
│     app.html      │ ◄──────────────────► │    app.js (DOM)   │
└───────────────────┘                      └─────────┬─────────┘
                                                     │
                                         Manipula DB │ localStorage /
                                         e Sessão    │ sessionStorage
                                                     ▼
                                           ┌───────────────────┐
                                           │  JSON DB Local    │
                                           │   'somar_data'    │
                                           └───────────────────┘
🚀 Tecnologias Utilizadas
HTML5: Marcação semântica e acessibilidade (aria-*, skip-link).

CSS3 & CSS Variables: Layout responsivo, animações, Dark Mode e customização.

JavaScript (ES6+): Manipulação nativa do DOM, Delegação de Eventos, LocalStorage API e IIFE.

Bootstrap 5.3 & Bootstrap Icons: Grid responsiva, componentes de modal, toast e ícones SVG.

Google Fonts (Poppins): Tipografia padrão da interface.

🧪 Instruções para Teste Rápido
Abra o arquivo app.html em qualquer navegador web moderno.

Na tela de login, insira qualquer e-mail e senha fictícios (Ex: ms2@gmail.com e 1234).

Responda ao Quiz inicial para receber os primeiros 50 pontos de bonificação.

Navegue pelo Dashboard, filtre por causas como Saúde ou Animais, agende visitas ou simule uma doação via PIX.
"""

with open("README.md", "w", encoding="utf-8") as f:
f.write(readme_content)

print("README.md criado com sucesso!")


```text?code_stdout&code_event_index=1
README.md criado com sucesso!

Seu arquivo README.md para a plataforma SOMAR foi gerado com sucesso!

[file-tag: code-generated-file-e8f717d8-9210-491a-9e1f-bf8b75d5dd21]

Conteúdo do README.md
🤝 SOMAR — Conectando Pessoas a Causas Sociais
Plataforma web interativa desenvolvida para conectar cidadãos a Organizações Não Governamentais (ONGs), facilitando o trabalho voluntário, a realização de doações simuladas e o agendamento de visitas presenciais.

📌 Sumário
Visão Geral

Funcionalidades Principais

Estrutura de Arquivos

Arquitetura e Fluxo de Dados

Tecnologias Utilizadas

Instruções para Teste Rápido

💬 Visão Geral
O SOMAR é um Single Page Application (SPA) em JavaScript puro e HTML/CSS que simplifica a descoberta e o engajamento com ONGs. A aplicação oferece um fluxo completo que vai desde um Quiz interativo de perfil até o gerenciamento de pontos, agendamentos e doações fictícias.

ℹ️ Modo de Teste / Demonstração:

Para autenticação rápida e testes, não é necessário criar uma conta real. É possível inserir qualquer e-mail e senha no formulário de login (Exemplo: E-mail: ms2@gmail.com | Senha: 1234).

⭐ Funcionalidades Principais
🔐 Autenticação & Gestão de Sessão:

Login e cadastro simulado salvos localmente (sessionStorage e localStorage).

Persistência de preferências de usuário, pontos e dados de perfil.

🎯 Quiz de Afinidade Social:

Questionário dinâmico em 5 etapas para identificar causas e públicos de interesse do voluntário.

Gamificação: Conclusão do quiz garante +50 pontos no perfil do usuário.

🔍 Dashboard & Busca com Filtros:

Catálogo de ONGs com busca em tempo real e caixa de sugestões automáticas.

Filtros por Causa/Categoria (Saúde, Educação, Animais, etc.) e Cidade.

Sistema de Favoritos para salvar ONGs no perfil.

📅 Agendamento de Visitas:

Formulário de marcação de visita às sedes das ONGs com escolha de data, horário e mensagem.

Recompensas por engajamento: +20 pontos por agendamento confirmado.

💳 Doações Simuladas:

Fluxo demonstrativo de doação via PIX (com funcionalidade de copiar chave) ou Cartão de Crédito.

Conversão de doações em pontos de engajamento comunitário.

🔔 Sistema de Notificações Unificado:

Notificações individuais vinculadas à conta do usuário atual com badge dinâmico de não lidas.

🌗 Personalização & Internacionalização (i18n):

Suporte nativo a Modo Escuro (Dark Mode).

Multi-idioma integrado: Português (PT), Inglês (EN) e Espanhol (ES).

📂 Estrutura de Arquivos
Plaintext
.
├── app.html         # Estrutura principal da interface (Single Page Application)
├── app.js           # Lógica do sistema, manipulação do DOM, i18n e localStorage
├── stylesapp.css    # Estilização global, temas (Light/Dark), animações e utilitários
└── index.html       # Página institucional/landing page externa de retorno
Detalhamento das Camadas
app.html (Estrutura e Conteúdo)

Centraliza as visões/telas da aplicação através de containers do tipo .page.

Inclui navegação responsiva (Bootstrap), tela de splash, overlays de carregamento, toasts e seções dinâmicas.

app.js (Comportamento e Inteligência)

Organizado no padrão IIFE ((function () { ... })()) para evitar poluição do escopo global.

Contém a camada de dados simulada (DB_KEY = 'somar_data'), dicionário i18n, renderizadores dinâmicos e listeners de delegação de eventos (document.addEventListener('click', ...)).

stylesapp.css (Visual e Design)

Variáveis CSS no :root para gerenciamento centralizado de cores e transições.

Estilização completa do Dark Mode, cards com efeito hover, barra de progresso do quiz e responsividade ajustada para cartões em telas pequenas (@media (max-width: 768px)).

🛠️ Arquitetura e Fluxo de Dados
Plaintext
[ Entrada do Usuário ]
          │
          ▼
┌───────────────────┐      Salva / Lê      ┌───────────────────┐
│     app.html      │ ◄──────────────────► │    app.js (DOM)   │
└───────────────────┘                      └─────────┬─────────┘
                                                     │
                                         Manipula DB │ localStorage /
                                         e Sessão    │ sessionStorage
                                                     ▼
                                           ┌───────────────────┐
                                           │  JSON DB Local    │
                                           │   'somar_data'    │
                                           └───────────────────┘
🚀 Tecnologias Utilizadas
HTML5: Marcação semântica e acessibilidade (aria-*, skip-link).

CSS3 & CSS Variables: Layout responsivo, animações, Dark Mode e customização.

JavaScript (ES6+): Manipulação nativa do DOM, Delegação de Eventos, LocalStorage API e IIFE.

Bootstrap 5.3 & Bootstrap Icons: Grid responsiva, componentes de modal, toast e ícones SVG.

Google Fonts (Poppins): Tipografia padrão da interface.

🧪 Instruções para Teste Rápido
Abra o arquivo app.html em qualquer navegador web moderno.

Na tela de login, insira qualquer e-mail e senha fictícios (Ex: ms2@gmail.com e 1234).

Responda ao Quiz inicial para receber os primeiros 50 pontos de bonificação.

Navegue pelo Dashboard, filtre por causas como Saúde ou Animais, agende visitas ou simule uma doação via PIX.
