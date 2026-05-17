/**
 * Módulo de Gestão e Automação de Ativos
 * Simula a leitura de QR Codes e envio assíncrono de dados para uma API corporativa (ex: Integração via webhook).
 */

class InventoryManager {
    constructor(departmentName) {
        this.department = departmentName;
        this.scannedAssets = [];
    }

    // Simula a leitura de um QR Code que retorna um JSON estruturado
    scanQRCode(qrData) {
        try {
            const parsedData = JSON.parse(qrData);
            if (!parsedData.id || !parsedData.type) {
                throw new Error("QR Code inválido. Faltam metadados essenciais.");
            }
            
            const asset = {
                ...parsedData,
                department: this.department,
                scannedAt: new Date().toISOString(),
                status: 'VERIFIED'
            };

            this.scannedAssets.push(asset);
            console.log(`📦 [SCAN SUCESSO] ${asset.type} (ID: ${asset.id}) registrado localmente.`);
            return asset;

        } catch (error) {
            console.error(`❌ [ERRO DE SCAN] Falha ao processar código: ${error.message}`);
        }
    }

    // Simula o envio dos dados via requisição assíncrona (ex: Fetch API para um backend Spring Boot ou webhook)
    async syncWithCloud(asset) {
        console.log(`⏳ Sincronizando ativo ${asset.id} com a base de dados central...`);
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulando 90% de chance de sucesso na rede
                const isNetworkStable = Math.random() > 0.1;
                
                if (isNetworkStable) {
                    console.log(`✅ [SYNC SUCESSO] Ativo ${asset.id} gravado no banco corporativo.`);
                    resolve({ statusCode: 201, message: 'Criado com sucesso' });
                } else {
                    console.error(`⚠️ [TIMEOUT] Falha ao comunicar com a API. Tentando novamente mais tarde.`);
                    reject({ statusCode: 503, message: 'Serviço Indisponível' });
                }
            }, 1500); // delay de 1.5s simulando rede
        });
    }

    // Fluxo principal de execução
    async processAsset(qrString) {
        const asset = this.scanQRCode(qrString);
        if (asset) {
            try {
                await this.syncWithCloud(asset);
            } catch (error) {
                // Em um cenário real, aqui entraria a lógica de salvar offline para tentar dnv depois
                console.log(`🔄 Movendo ativo ${asset.id} para a fila de espera offline.`);
            }
        }
    }
}

// ==========================================
// Testando a aplicação (Execução do Script)
// ==========================================

// Instancia o gerenciador apontando para um setor específico
const assetManager = new InventoryManager("Inteligência e Automação");

// Simulando dados vindo de um leitor de QR Code (String JSON)
const qrMock1 = JSON.stringify({ id: "IT-BRB-9901", type: "Monitor Dell 24 pol", condition: "Novo" });
const qrMock2 = JSON.stringify({ id: "IT-BRB-8832", type: "Notebook Lenovo ThinkPad", condition: "Usado" });
const qrMockErro = "{ id: 'IT-000', falha no json }"; // Simulando QR code zoado

// Executando as leituras de forma assíncrona
async function runSystem() {
    console.log("--- INICIANDO SISTEMA DE INVENTÁRIO ---");
    await assetManager.processAsset(qrMock1);
    await assetManager.processAsset(qrMock2);
    await assetManager.processAsset(qrMockErro); // Vai disparar o tratamento de erro
    console.log("--- FIM DO PROCESSAMENTO ---");
}

runSystem();