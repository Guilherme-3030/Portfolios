// ==========================================
// Lógica de Navegação do Menu (SPA)
// ==========================================
const btnVisao = document.getElementById('btn-visao');
const btnRelatorios = document.getElementById('btn-relatorios');
const btnConfiguracoes = document.getElementById('btn-configuracoes');

const telaVisao = document.getElementById('tela-visao');
const telaRelatorios = document.getElementById('tela-relatorios');
const telaConfiguracoes = document.getElementById('tela-configuracoes');

const tituloPagina = document.getElementById('titulo-pagina');

function resetarBotoes() {
    const estiloInativo = "w-full text-left block p-3 hover:bg-slate-800 rounded-lg text-sm font-medium transition text-slate-300";
    btnVisao.className = estiloInativo;
    btnRelatorios.className = estiloInativo;
    btnConfiguracoes.className = estiloInativo;
    
    telaVisao.classList.add('hidden');
    telaRelatorios.classList.add('hidden');
    telaConfiguracoes.classList.add('hidden');
}

btnVisao.addEventListener('click', () => {
    resetarBotoes();
    btnVisao.className = "w-full text-left block p-3 bg-blue-600 rounded-lg text-sm font-medium transition text-white";
    telaVisao.classList.remove('hidden');
    tituloPagina.innerText = "Registro Rápido de Inventário";
});

btnRelatorios.addEventListener('click', () => {
    resetarBotoes();
    btnRelatorios.className = "w-full text-left block p-3 bg-blue-600 rounded-lg text-sm font-medium transition text-white";
    telaRelatorios.classList.remove('hidden');
    tituloPagina.innerText = "Relatórios de Operação";
});

btnConfiguracoes.addEventListener('click', () => {
    resetarBotoes();
    btnConfiguracoes.className = "w-full text-left block p-3 bg-blue-600 rounded-lg text-sm font-medium transition text-white";
    telaConfiguracoes.classList.remove('hidden');
    tituloPagina.innerText = "Configurações";
});

// ==========================================
// Lógica de Inserção de Dados na Tabela
// ==========================================
let contagemTotal = 0;

document.getElementById('formAtivo').addEventListener('submit', function(e) {
    e.preventDefault();

    const id = document.getElementById('ativoId').value.toUpperCase();
    const nome = document.getElementById('ativoNome').value;
    const estado = document.getElementById('ativoEstado').value;
    
    const dataAtual = new Date();
    const horaFormatada = dataAtual.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second:'2-digit' });

    const linhaVazia = document.getElementById('linhaVazia');
    if (linhaVazia) linhaVazia.remove();

    const tbody = document.getElementById('tabelaCorpo');
    const novaLinha = document.createElement('tr');
    novaLinha.className = 'border-b border-slate-100 hover:bg-slate-50 transition fade-in';
    
    let corEstado = estado === 'Novo' ? 'bg-green-100 text-green-700' : 
                    estado === 'Em Uso' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700';

    novaLinha.innerHTML = `
        <td class="p-3 font-mono text-sm text-slate-600">${id}</td>
        <td class="p-3 text-sm font-medium text-slate-800">${nome}</td>
        <td class="p-3 text-sm"><span class="px-2 py-1 rounded-md text-xs font-semibold ${corEstado}">${estado}</span></td>
        <td class="p-3 text-sm text-slate-500">${horaFormatada}</td>
        <td class="p-3 text-sm text-green-600 flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Sincronizado</td>
    `;

    tbody.insertBefore(novaLinha, tbody.firstChild);

    contagemTotal++;
    document.getElementById('contadorDia').innerText = contagemTotal;
    document.getElementById('contadorSync').innerText = contagemTotal;

    document.getElementById('formAtivo').reset();
    document.getElementById('ativoId').focus();
});

document.getElementById('limparTabela').addEventListener('click', function() {
    document.getElementById('tabelaCorpo').innerHTML = `
        <tr id="linhaVazia">
            <td colspan="5" class="p-8 text-center text-slate-400 text-sm">
                Nenhum ativo registrado nesta sessão.
            </td>
        </tr>
    `;
    contagemTotal = 0;
    document.getElementById('contadorDia').innerText = '0';
    document.getElementById('contadorSync').innerText = '0';
});