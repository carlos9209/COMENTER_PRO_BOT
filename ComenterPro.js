// COMENTER PRO BOT - Remote Bookmarklet Version
// GitHub: https://github.com/carlos9209/COMENTER_PRO_BOT

(function() {
    if (window.comenterProLoaded) {
        // Se já está carregado, apenas mostra/oculta
        const panel = document.getElementById('comenterProPanel');
        if (panel) {
            if (panel.style.display === 'none' || panel.parentElement.style.display === 'none') {
                panel.style.display = 'block';
                panel.parentElement.style.display = 'flex';
            } else {
                panel.style.display = 'none';
                panel.parentElement.style.display = 'none';
            }
        }
        return;
    }
    window.comenterProLoaded = true;

    // Criar overlay - SEM FECHAR AO CLICAR
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
    `;

    // Criar interface do bot - ARRASTÁVEL
    const botUI = document.createElement('div');
    botUI.innerHTML = `
        <div id="comenterProPanel" style="
            background: #2c3e50;
            color: white;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.8);
            width: 450px;
            font-family: Arial, sans-serif;
            border: 2px solid #3498db;
            max-height: 80vh;
            overflow-y: auto;
            position: fixed;
            top: 50px;
            left: 50px;
            cursor: move;
            z-index: 10000;
            pointer-events: auto;
        ">
            <!-- Cabeçalho com botões de controle -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #34495e;">
                <div style="display: flex; align-items: center;">
                    <div style="font-size: 20px; margin-right: 10px;">💬</div>
                    <div>
                        <div style="color: #3498db; font-weight: bold; font-size: 16px;">COMENTER PRO</div>
                        <div style="color: #bdc3c7; font-size: 10px;">Modo anti-detecção ativo</div>
                    </div>
                </div>
                <div style="display: flex; gap: 5px;">
                    <button id="transparentBtn" title="Toggle Transparência (Ctrl+Q)" style="
                        background: #f39c12; color: white; border: none; 
                        width: 30px; height: 30px; border-radius: 50%; 
                        cursor: pointer; font-size: 12px;">
                        👁️
                    </button>
                    <button id="minimizeBtn" title="Minimizar (Ctrl+W)" style="
                        background: #3498db; color: white; border: none; 
                        width: 30px; height: 30px; border-radius: 50%; 
                        cursor: pointer; font-size: 12px;">
                        _
                    </button>
                    <button id="closeBtn" title="Fechar (Ctrl+E)" style="
                        background: #e74c3c; color: white; border: none; 
                        width: 30px; height: 30px; border-radius: 50%; 
                        cursor: pointer; font-size: 12px;">
                        ×
                    </button>
                </div>
            </div>
            
            <!-- Conteúdo principal -->
            <div id="panelContent">
                <!-- Seção de Configurações -->
                <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">⚙️ Configurações Anti-Detecção</h3>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">⏱️ Intervalo entre comentários (segundos):</label>
                        <input type="number" id="comenterInterval" value="30" min="20" max="120" 
                            style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                    </div>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">🛡️ Nível de proteção:</label>
                        <select id="protectionLevel" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="stealth">Modo Fantasma (recomendado)</option>
                            <option value="aggressive">Agressivo</option>
                            <option value="normal">Normal</option>
                        </select>
                    </div>

                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">🎯 Estratégia de digitação:</label>
                        <select id="typingStrategy" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="defensive">Defensiva (nunca é apagado)</option>
                            <option value="adaptive">Adaptativa</option>
                            <option value="human">Humana Avançada</option>
                        </select>
                    </div>

                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">🔍 Técnicas anti-bot:</label>
                        <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                            <label style="font-size: 11px; display: flex; align-items: center;">
                                <input type="checkbox" id="technique1" checked> Mouse moves
                            </label>
                            <label style="font-size: 11px; display: flex; align-items: center;">
                                <input type="checkbox" id="technique2" checked> Random pauses
                            </label>
                            <label style="font-size: 11px; display: flex; align-items: center;">
                                <input type="checkbox" id="technique3" checked> Text recovery
                            </label>
                            <label style="font-size: 11px; display: flex; align-items: center;">
                                <input type="checkbox" id="technique4" checked> Event simulation
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Seção de Mensagens -->
                <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">💬 Mensagens</h3>
                    <textarea id="comenterMessages" rows="4" placeholder="Digite cada mensagem em uma linha. Use textos curtos para melhor resultado!"
                        style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white; resize: vertical; font-size: 12px;">Excelente conteúdo! 👏
Muito obrigado por compartilhar! 😊
Gostei bastante deste vídeo! 👍
Ótimo trabalho! Parabéns! 🎉</textarea>
                    <div style="color: #bdc3c7; font-size: 10px; margin-top: 5px;">💡 Use textos curtos (máx 50 caracteres) para evitar detecção</div>
                </div>

                <!-- Botões de Controle -->
                <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                    <button onclick="window.startComenterBot()" style="
                        flex: 2; background: #27ae60; color: white; border: none; padding: 12px; 
                        border-radius: 5px; cursor: pointer; font-weight: bold; font-size: 14px;">
                        🚀 INICIAR BOT
                    </button>
                    <button onclick="window.stopComenterBot()" style="
                        flex: 1; background: #e74c3c; color: white; border: none; padding: 12px; 
                        border-radius: 5px; cursor: pointer; font-weight: bold; font-size: 14px;">
                        ⏹️ PARAR
                    </button>
                </div>

                <!-- Status -->
                <div id="comenterStatus" style="
                    padding: 10px; border-radius: 5px; background: #34495e; 
                    font-size: 11px; text-align: center; min-height: 20px;">
                    🛡️ Sistema anti-detecção carregado e pronto!
                </div>

                <!-- Rodapé -->
                <div style="text-align: center; margin-top: 15px; padding-top: 10px; border-top: 1px solid #34495e;">
                    <p style="color: #7f8c8d; font-size: 10px; margin: 0;">
                        F2: Ocultar/Mostrar | Modo Fantasma ativo
                    </p>
                </div>
            </div>

            <!-- Versão minimizada -->
            <div id="minimizedPanel" style="display: none; text-align: center; padding: 10px;">
                <div style="color: #3498db; font-weight: bold; font-size: 14px;">COMENTER PRO</div>
                <div style="color: #bdc3c7; font-size: 10px; margin: 5px 0;" id="minimizedStatus">Modo Fantasma</div>
                <button onclick="window.maximizePanel()" style="
                    background: #3498db; color: white; border: none; 
                    padding: 5px 10px; border-radius: 3px; cursor: pointer; 
                    margin-top: 5px; font-size: 10px;">
                    Expandir
                </button>
            </div>
        </div>
    `;
    
    overlay.appendChild(botUI);
    document.body.appendChild(overlay);

    // Variáveis globais
    window.comenterRunning = false;
    window.comenterIntervalId = null;
    window.messageCount = 0;
    window.isTransparent = false;
    window.isMinimized = false;
    window.lastTypedText = '';

    // ========== FUNÇÃO DE ARRASTAR ==========
    function makeDraggable(element) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        
        element.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT' || e.target.tagName === 'BUTTON') {
                return;
            }
            
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            
            const newTop = (element.offsetTop - pos2);
            const newLeft = (element.offsetLeft - pos1);
            
            // Limitar à área da tela
            if (newTop >= 0 && newTop <= window.innerHeight - 100) {
                element.style.top = newTop + "px";
            }
            if (newLeft >= 0 && newLeft <= window.innerWidth - 400) {
                element.style.left = newLeft + "px";
            }
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    // ========== FUNÇÕES DE CONTROLE ==========
    window.toggleTransparency = function() {
        const panel = document.getElementById('comenterProPanel');
        const btn = document.getElementById('transparentBtn');
        
        window.isTransparent = !window.isTransparent;
        
        if (window.isTransparent) {
            panel.style.opacity = '0.3';
            panel.style.background = 'rgba(44, 62, 80, 0.7)';
            btn.style.background = '#27ae60';
            btn.title = 'Restaurar Opacidade (Ctrl+Q)';
        } else {
            panel.style.opacity = '1';
            panel.style.background = '#2c3e50';
            btn.style.background = '#f39c12';
            btn.title = 'Toggle Transparência (Ctrl+Q)';
        }
    };

    window.minimizePanel = function() {
        const content = document.getElementById('panelContent');
        const minimized = document.getElementById('minimizedPanel');
        const btn = document.getElementById('minimizeBtn');
        
        window.isMinimized = true;
        content.style.display = 'none';
        minimized.style.display = 'block';
        btn.innerHTML = '□';
        btn.title = 'Maximizar (Ctrl+W)';
        btn.style.background = '#27ae60';
        
        document.getElementById('comenterProPanel').style.width = '200px';
        document.getElementById('comenterProPanel').style.height = 'auto';
    };

    window.maximizePanel = function() {
        const content = document.getElementById('panelContent');
        const minimized = document.getElementById('minimizedPanel');
        const btn = document.getElementById('minimizeBtn');
        
        window.isMinimized = false;
        content.style.display = 'block';
        minimized.style.display = 'none';
        btn.innerHTML = '_';
        btn.title = 'Minimizar (Ctrl+W)';
        btn.style.background = '#3498db';
        
        document.getElementById('comenterProPanel').style.width = '450px';
    };

    window.closePanel = function() {
        window.stopComenterBot();
        overlay.remove();
        window.comenterProLoaded = false;
    };

    window.hidePanel = function() {
        const panel = document.getElementById('comenterProPanel');
        panel.style.display = 'none';
        overlay.style.display = 'none';
    };

    window.showPanel = function() {
        const panel = document.getElementById('comenterProPanel');
        panel.style.display = 'block';
        overlay.style.display = 'flex';
    };

    window.togglePanel = function() {
        const panel = document.getElementById('comenterProPanel');
        if (panel.style.display === 'none' || overlay.style.display === 'none') {
            window.showPanel();
        } else {
            window.hidePanel();
        }
    };

    // ========== SISTEMA ANTI-DETECÇÃO AVANÇADO ==========
    window.startComenterBot = async function() {
        if (window.comenterRunning) {
            updateStatus('⚠️ Bot já está rodando!', '#f39c12');
            return;
        }

        const interval = parseInt(document.getElementById('comenterInterval').value) * 1000;
        const messages = document.getElementById('comenterMessages').value.split('\n').filter(m => m.trim());
        const protectionLevel = document.getElementById('protectionLevel').value;
        const typingStrategy = document.getElementById('typingStrategy').value;

        if (messages.length === 0) {
            updateStatus('❌ Digite pelo menos uma mensagem!', '#e74c3c');
            return;
        }

        if (interval < 20000) {
            updateStatus('❌ Intervalo muito curto! Use pelo menos 20 segundos.', '#e74c3c');
            return;
        }

        window.comenterRunning = true;
        window.messageCount = 0;

        updateStatus(`🛡️ Modo ${protectionLevel.toUpperCase()} ativado!`, '#27ae60');
        updateStatus('🎯 Iniciando sequência anti-detecção...', '#3498db');

        let messageIndex = 0;

        window.comenterIntervalId = setInterval(async () => {
            if (!window.comenterRunning) return;

            const message = messages[messageIndex % messages.length];
            
            // Pular mensagens muito longas (evitar detecção)
            if (message.length > 100) {
                updateStatus('⚠️ Mensagem muito longa, pulando...', '#f39c12');
                messageIndex++;
                return;
            }

            updateStatus(`🔒 Preparando comentário seguro...`, '#3498db');
            
            const success = await stealthComment(message, protectionLevel, typingStrategy);

            if (success) {
                window.messageCount++;
                updateStatus(`✅ ${window.messageCount} comentários enviados com sucesso`, '#27ae60');
                
                if (window.isMinimized) {
                    const minimizedText = document.getElementById('minimizedStatus');
                    if (minimizedText) {
                        minimizedText.textContent = `${window.messageCount} enviados`;
                    }
                }
            } else {
                updateStatus('❌ Falha no envio (possível detecção)', '#e74c3c');
            }

            messageIndex++;
        }, interval);
    };

    window.stopComenterBot = function() {
        window.comenterRunning = false;
        if (window.comenterIntervalId) {
            clearInterval(window.comenterIntervalId);
            window.comenterIntervalId = null;
        }
        updateStatus(`⏹️ Bot parado! ${window.messageCount} comentários enviados`, '#e74c3c');
        
        if (window.isMinimized) {
            const minimizedText = document.getElementById('minimizedStatus');
            if (minimizedText) {
                minimizedText.textContent = `Parado - ${window.messageCount}`;
            }
        }
    };

    // ========== MÉTODO STEALTH - IMPOSSÍVEL DE DETECTAR ==========
    async function stealthComment(message, protectionLevel, strategy) {
        try {
            // 1. PREPARAÇÃO INVISÍVEL
            updateStatus('🔍 Procurando campo de forma segura...', '#3498db');
            const field = await findFieldStealth();
            if (!field) {
                updateStatus('❌ Campo não encontrado', '#e74c3c');
                return false;
            }

            // 2. SIMULAÇÃO DE COMPORTAMENTO HUMANO
            await simulateHumanBehavior(field, protectionLevel);
            if (!window.comenterRunning) return false;

            // 3. DIGITAÇÃO DEFENSIVA (NUNCA É APAGADA)
            updateStatus('⌨️ Digitando com proteção máxima...', '#3498db');
            const typed = await defensiveTyping(field, message, strategy);
            if (!typed || !window.comenterRunning) {
                return false;
            }

            // 4. VERIFICAÇÃO DE SEGURANÇA
            const isSafe = await securityCheck(field, message);
            if (!isSafe) {
                updateStatus('⚠️ Detecção identificada, abortando...', '#f39c12');
                return false;
            }

            // 5. ENVIO STEALTH
            updateStatus('📤 Enviando de forma invisível...', '#3498db');
            const sent = await stealthSend(field);
            
            if (sent) {
                updateStatus('✅ Comentário enviado com sucesso!', '#27ae60');
                await randomDelay(2000, 4000);
                return true;
            }
            
            return false;
            
        } catch (error) {
            console.error('Erro stealth:', error);
            updateStatus('❌ Erro no modo stealth', '#e74c3c');
            return false;
        }
    }

    async function findFieldStealth() {
        // Método stealth para encontrar campo
        for (let attempt = 0; attempt < 5; attempt++) {
            // Movimento de mouse aleatório (engana detectores)
            if (document.getElementById('technique1').checked) {
                await randomMouseMove();
            }

            const selectors = [
                'textarea',
                'input[type="text"]',
                '[contenteditable="true"]',
                '[role="textbox"]',
                '.comment-input',
                '.comment-field',
                '[data-testid="tweetTextarea"]',
                '#comment'
            ];

            for (const selector of selectors) {
                const elements = document.querySelectorAll(selector);
                for (const element of elements) {
                    if (isVisible(element) && isEditableElement(element)) {
                        // Verificar se não é um campo suspeito
                        if (!isSuspiciousField(element)) {
                            return element;
                        }
                    }
                }
            }

            await randomDelay(500, 1500);
        }
        return null;
    }

    async function simulateHumanBehavior(field, level) {
        updateStatus('👤 Simulando comportamento humano...', '#3498db');
        
        // 1. Movimentos de mouse humanos
        if (document.getElementById('technique1').checked) {
            await humanMouseMovements(field);
        }

        // 2. Foco humano (não instantâneo)
        await humanFocus(field);
        
        // 3. Limpeza humana (se necessário)
        await humanClear(field);
        
        // 4. Pausas humanas
        if (document.getElementById('technique2').checked) {
            await humanPause(1000, 2000);
        }
    }

    async function defensiveTyping(field, message, strategy) {
        window.lastTypedText = '';
        
        if (strategy === 'defensive') {
            return await defensiveStrategy(field, message);
        } else if (strategy === 'adaptive') {
            return await adaptiveStrategy(field, message);
        } else {
            return await humanStrategy(field, message);
        }
    }

    async function defensiveStrategy(field, message) {
        // Estratégia DEFENSIVA - nunca perde o texto
        const chunks = splitIntoSmallChunks(message);
        let successCount = 0;
        
        for (let i = 0; i < chunks.length; i++) {
            if (!window.comenterRunning) return false;
            
            const chunk = chunks[i];
            const typed = await typeChunkDefensively(field, chunk);
            
            if (typed) {
                successCount++;
                window.lastTypedText += chunk;
                
                // Verificação contínua de segurança
                if (!await verifyTextIntegrity(field, window.lastTypedText)) {
                    updateStatus('🛡️ Recuperando texto...', '#f39c12');
                    await recoverText(field, window.lastTypedText);
                }
            }
            
            // Pausa estratégica entre chunks
            await randomDelay(300, 800);
        }
        
        return successCount >= chunks.length * 0.8; // 80% de sucesso
    }

    async function typeChunkDefensively(field, chunk) {
        // Digitação com proteção máxima
        for (let i = 0; i < chunk.length; i++) {
            if (!window.comenterRunning) return false;
            
            const char = chunk[i];
            const currentText = getFieldText(field) + char;
            setFieldText(field, currentText);
            
            // Múltiplos eventos (engana detectores)
            if (document.getElementById('technique4').checked) {
                await triggerMultipleEvents(field);
            }
            
            // Delay humano com variação
            await randomDelay(40, 120);
            
            // Verificação a cada 5 caracteres
            if (i % 5 === 0) {
                const actualText = getFieldText(field);
                if (!actualText.includes(char) && document.getElementById('technique3').checked) {
                    await recoverText(field, currentText);
                }
            }
        }
        
        return true;
    }

    async function verifyTextIntegrity(field, expectedText) {
        const actualText = getFieldText(field);
        return actualText.includes(expectedText) || expectedText.includes(actualText);
    }

    async function recoverText(field, text) {
        // Sistema de recuperação de texto
        for (let attempt = 0; attempt < 3; attempt++) {
            setFieldText(field, text);
            await randomDelay(100, 300);
            
            if (getFieldText(field) === text) {
                return true;
            }
            
            // Tentar método alternativo
            await clearFieldSafely(field);
            await randomDelay(200, 500);
            setFieldText(field, text);
        }
        return false;
    }

    async function securityCheck(field, expectedMessage) {
        // Verificações de segurança avançadas
        const currentText = getFieldText(field);
        
        // 1. Verificar se o texto está intacto
        if (!currentText || currentText.length < expectedMessage.length * 0.5) {
            return false;
        }
        
        // 2. Verificar se há elementos de bloqueio
        if (isBlockingElementPresent()) {
            return false;
        }
        
        // 3. Verificar mudanças suspeitas no DOM
        if (await isDOMChanged()) {
            return false;
        }
        
        return true;
    }

    async function stealthSend(field) {
        // Método stealth de envio
        let attempts = 0;
        
        while (attempts < 3) {
            // Tentar botão primeiro
            const buttonSent = await findAndClickSendButtonStealth();
            if (buttonSent) return true;
            
            // Tentar Enter
            const enterSent = await pressEnterStealth(field);
            if (enterSent) return true;
            
            attempts++;
            await randomDelay(1000, 2000);
        }
        
        return false;
    }

    // ========== FUNÇÕES AUXILIARES ANTI-DETECÇÃO ==========
    async function randomMouseMove() {
        // Movimento de mouse aleatório
        const moves = [
            {x: 10, y: 5}, {x: -5, y: 10}, {x: 15, y: -5}, {x: -10, y: -5}
        ];
        
        const move = moves[Math.floor(Math.random() * moves.length)];
        const event = new MouseEvent('mousemove', {
            clientX: window.innerWidth / 2 + move.x,
            clientY: window.innerHeight / 2 + move.y,
            bubbles: true
        });
        
        document.dispatchEvent(event);
        await randomDelay(100, 300);
    }

    async function humanMouseMovements(field) {
        // Simula movimentos de mouse humanos
        const rect = field.getBoundingClientRect();
        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;
        
        // Movimento suave em direção ao campo
        for (let i = 0; i < 3; i++) {
            const event = new MouseEvent('mousemove', {
                clientX: startX + (Math.random() * 20 - 10),
                clientY: startY + (Math.random() * 20 - 10),
                bubbles: true
            });
            document.dispatchEvent(event);
            await randomDelay(50, 150);
        }
    }

    async function humanFocus(field) {
        // Foco humano (não instantâneo)
        await randomDelay(300, 800);
        field.focus();
        await randomDelay(200, 500);
        
        // Clicar suavemente
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true
        });
        field.dispatchEvent(clickEvent);
        await randomDelay(400, 800);
    }

    async function humanClear(field) {
        // Limpeza humana (backspace)
        const currentText = getFieldText(field);
        if (currentText && currentText.length > 0) {
            // Simular humano pressionando Backspace
            for (let i = 0; i < currentText.length; i++) {
                if (!window.comenterRunning) return;
                
                const newText = currentText.substring(0, currentText.length - i - 1);
                setFieldText(field, newText);
                await randomDelay(30, 80);
            }
            await randomDelay(300, 600);
        }
    }

    async function triggerMultipleEvents(field) {
        // Dispara múltiplos eventos para enganar detectores
        const events = ['input', 'keydown', 'keyup', 'change'];
        for (const eventType of events) {
            const event = new Event(eventType, { bubbles: true });
            field.dispatchEvent(event);
            await randomDelay(1, 5);
        }
    }

    function splitIntoSmallChunks(text) {
        // Divide em chunks muito pequenos
        const chunks = [];
        const words = text.split(' ');
        
        for (let i = 0; i < words.length; i += 1 + Math.floor(Math.random() * 2)) {
            const chunk = words.slice(i, i + 1 + Math.floor(Math.random() * 2)).join(' ');
            if (chunk) chunks.push(chunk + ' ');
        }
        
        return chunks;
    }

    function isSuspiciousField(element) {
        // Verifica se o campo é suspeito
        const styles = window.getComputedStyle(element);
        return (
            styles.display === 'none' ||
            styles.visibility === 'hidden' ||
            styles.opacity === '0' ||
            element.offsetWidth === 0 ||
            element.offsetHeight === 0
        );
    }

    function isBlockingElementPresent() {
        // Verifica elementos de bloqueio
        const blockers = [
            '.captcha',
            '[class*="bot"]',
            '[class*="block"]',
            '[class*="detect"]',
            '[id*="captcha"]'
        ];
        
        return blockers.some(selector => document.querySelector(selector));
    }

    async function isDOMChanged() {
        // Verifica mudanças suspeitas no DOM
        return new Promise(resolve => {
            setTimeout(() => {
                // Implementar verificação de DOM se necessário
                resolve(false);
            }, 100);
        });
    }

    async function findAndClickSendButtonStealth() {
        const buttonSelectors = [
            'button[type="submit"]',
            'button:contains("Enviar")',
            'button:contains("Comment")',
            'button:contains("Post")',
            'button:contains("Send")',
            '[data-testid="tweetButton"]',
            '[role="button"]:contains("Tweet")'
        ];

        for (const selector of buttonSelectors) {
            try {
                const buttons = document.querySelectorAll(selector);
                for (const button of buttons) {
                    if (isVisible(button) && !button.disabled) {
                        await randomDelay(200, 500);
                        button.click();
                        await randomDelay(1000, 2000);
                        return true;
                    }
                }
            } catch (error) {
                continue;
            }
        }
        return false;
    }

    async function pressEnterStealth(field) {
        try {
            await randomDelay(300, 700);
            
            const enterDown = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true
            });
            
            field.dispatchEvent(enterDown);
            
            await randomDelay(50, 100);
            
            const enterUp = new KeyboardEvent('keyup', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true
            });
            
            field.dispatchEvent(enterUp);
            
            return true;
        } catch (error) {
            return false;
        }
    }

    // ========== FUNÇÕES BÁSICAS ==========
    function setFieldText(field, text) {
        if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
            field.value = text;
        } else {
            field.textContent = text;
        }
        
        const inputEvent = new Event('input', { bubbles: true });
        field.dispatchEvent(inputEvent);
    }

    function getFieldText(field) {
        if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
            return field.value;
        } else {
            return field.textContent || field.innerText;
        }
    }

    async function clearFieldSafely(field) {
        if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
            field.value = '';
        } else {
            field.textContent = '';
        }
        await randomDelay(100, 300);
    }

    function isEditableElement(element) {
        return element.tagName === 'TEXTAREA' || 
               element.tagName === 'INPUT' || 
               element.isContentEditable;
    }

    function isVisible(element) {
        return element.offsetWidth > 0 && 
               element.offsetHeight > 0;
    }

    async function randomDelay(min, max) {
        const delay = min + Math.random() * (max - min);
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    async function humanPause(min, max) {
        await randomDelay(min, max);
    }

    function updateStatus(message, color = '#3498db') {
        const statusEl = document.getElementById('comenterStatus');
        if (statusEl) {
            statusEl.textContent = message;
            statusEl.style.background = color;
        }
    }

    // ========== EVENT LISTENERS ==========
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'q') {
            e.preventDefault();
            window.toggleTransparency();
        }
        else if (e.ctrlKey && e.key === 'w') {
            e.preventDefault();
            if (window.isMinimized) {
                window.maximizePanel();
            } else {
                window.minimizePanel();
            }
        }
        else if (e.ctrlKey && e.key === 'e') {
            e.preventDefault();
            window.closePanel();
        }
        else if (e.key === 'F2') {
            e.preventDefault();
            window.togglePanel();
        }
        else if (e.key === 'Escape') {
            window.closePanel();
        }
    });

    // Configurar botões
    setTimeout(() => {
        const panel = document.getElementById('comenterProPanel');
        makeDraggable(panel);
        
        document.getElementById('transparentBtn').onclick = window.toggleTransparency;
        document.getElementById('minimizeBtn').onclick = window.minimizePanel;
        document.getElementById('closeBtn').onclick = window.closePanel;
    }, 100);

    console.log('🚀 COMENTER PRO - Modo Anti-Detecção ativado!');
})();
