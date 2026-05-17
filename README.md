# TechAsset — Painel Corporativo de Gestão de Ativos 📦⚙️

> **Status do Projeto:** 🚀 Concluído (Versão 1.1.0)  
> **Hospedagem Oficial:** [Acesse a demonstração no GitHub Pages](URL_DA_SUA_PAGINA_AQUI)

---

## 📌 Descrição do Projeto

O **TechAsset** é uma interface web corporativa (Front-End) desenvolvida para otimizar e automatizar o controle de estoque e inventário de equipamentos de TI. O sistema foi projetado sob a ótica de usabilidade para equipes de **Inteligência e Automação**, permitindo o registro ágil e o acompanhamento do estado de conservação de ativos tecnológicos (como monitores, notebooks e periféricos).

A plataforma atua como uma **Single Page Application (SPA)**, simulando em tempo real a captura de dados via leitura de QR Codes e preparando as informações para sincronização assíncrona com bancos de dados estruturados ou Google Sheets.

---

## ⚡ Principais Funcionalidades

* **Navegação Fluida (SPA):** Alternância instantânea entre os módulos de *Visão Geral*, *Relatórios* e *Configurações* sem a necessidade de recarregamento de página, garantindo uma experiência de usuário (UX) ágil.
* **Métricas Dinâmicas:** Contadores em tempo real que monitoram o volume de ativos registrados e sincronizados durante a sessão atual.
* **Gerenciamento do Inventário Local:** Formulação e validação de novos registros com inserção imediata no topo da tabela de logs.
* **Animações e Microinterações:** Feedback visual por meio de transições suaves (`fade-in`) e indicadores de status pulsantes (*Status do Banco: Online*).
* **Módulo de Relatórios:** Painel preparado para parametrização e simulação de download de relatórios em múltiplos formatos (`.xlsx`, `.csv`, `.pdf`).
* **Configurações de Integração:** Área dedicada para parametrização de endpoints de API (Webhooks) e tokens de autenticação corporativa.
* **Layout Responsivo:** Sidebar retrátil e grids adaptáveis otimizados para visualização em desktops, tablets e dispositivos móveis.

---

## 🛠️ Tecnologias e Técnicas Empregadas

O projeto foi construído utilizando práticas modernas de desenvolvimento web focado em performance e semântica:

* **HTML5 Semântico:** Estruturação limpa utilizando tags acessíveis (`<aside>`, `<main>`, `<header>`, `<nav>`).
* **Tailwind CSS (via CDN):** Estilização utilitária avançada, fazendo uso intensivo de sistemas de layout **Flexbox** e **CSS Grid**, além de variações de estados (`hover`, `focus`, `peer`).
* **Vanilla JavaScript (ES6+):** * Manipulação avançada da árvore DOM para inserção e exclusão dinâmica de nós (`createElement`, `insertBefore`, `remove`).
    * Tratamento e captura de eventos de formulários (`addEventListener`, `preventDefault`).
    * Formatação nativa de strings e objetos de data/hora local (`toLocaleTimeString`).
* **CSS3 Customizado:** Implementação de animações baseadas em `@keyframes` para suavização de interface.
