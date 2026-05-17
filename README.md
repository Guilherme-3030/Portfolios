# 🛠️ Detalhamento dos Projetos

Este repositório reúne projetos focados em desenvolvimento web, automação de processos e arquitetura de software, divididos entre soluções utilitárias e automações corporativas.

---

## 💻 Projeto 01: FitTrack Pro — Dashboard de Alta Performance

*   **Natureza:** Projeto Pessoal / Utilitário Fitness
*   **Interface Visual:** Hospedada diretamente via GitHub Pages

### 📝 Descrição
Uma interface web responsiva projetada para o gerenciamento de rotinas de musculação e monitoramento de carga. O sistema fornece ao usuário uma visão consolidada do Treino A (Push) e integra uma ferramenta analítica de progressão de carga.

### ⚙️ Funcionalidades e Lógica Computacional

*   **Calculadora de Volume de Carga Total:** Implementação de algoritmo em JavaScript Vanilla que computa a tonelagem total levantada por exercício baseando-se na fórmula:
    
    $$\text{Volume} = (\text{Carga por lado} \times 2) \times \text{Séries} \times \text{Repetições}$$

*   **Manipulação Avançada de DOM:** Captura assíncrona de eventos de formulário (`submit`) com prevenção de comportamento padrão (`preventDefault`) para atualização instantânea dos resultados em tela, proporcionando uma experiência estilo SPA (Single Page Application).
*   **Feedback de Interface:** Reinicialização dinâmica de animações CSS (`@keyframes`) via quebra e reinserção de classes utilitárias no fluxo da DOM.
*   **Estilização Moderna:** Construído inteiramente com Tailwind CSS, fazendo uso de gradientes dinâmicos, grids responsivos para transição entre desktop/mobile e estados de interação refinados (`hover`, `focus`).

---

## 📦 Projeto 02: Core de Inventário — Módulo de Gestão de Ativos

*   **Natureza:** Projeto de Automação Corporativa
*   **Ambiente de Execução:** Terminal (Node.js) ou Console do Navegador

### 📝 Descrição
Módulo lógico estruturado em Programação Orientada a Objetos (POO) que simula o pipeline de captura, validação e sincronização na nuvem de equipamentos tecnológicos (ativos de TI) a partir de leituras de códigos QR.

### 📐 Arquitetura e Recursos Técnicos

*   **Arquitetura de Classes (ES6+):** Utilização da classe `InventoryManager` para encapsular o estado dos lotes processados e os escopos dos métodos de processamento.
*   **Validação Rígida de Dados (Parsing):** Tratamento de strings JSON simuladas com blocos `try/catch` de alta resiliência, isolando e reportando strings corrompidas ou metadados ausentes sem interromper o fluxo da aplicação.
*   **Simulação Assíncrona e Controle de Concorrência:** Uso extensivo de estruturas `async/await` e `Promises` nativas para simular a latência de rede corporativa (atraso programado de 1500ms).
*   **Tratamento de Instabilidade de Rede:** Lógica probabilística que simula quedas de conexão ou indisponibilidade de serviço (status HTTP 503), preparando o sistema para o roteamento de ativos em filas locais (*offline buffers*).
