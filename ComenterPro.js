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
            width: 400px;
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
                        <div style="color: #bdc3c7; font-size: 10px;">Digitação inteligente</div>
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
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">⚙️ Configurações</h3>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">⏱️ Intervalo entre comentários (segundos):</label>
                        <input type="number" id="comenterInterval" value="15" min="10" max="60" 
                            style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                    </div>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">⌨️ Estratégia de digitação:</label>
                        <select id="typingStrategy" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="chunks">Blocos de texto (mais seguro)</option>
                            <option value="words">Palavra por palavra</option>
                            <option value="letters">Letra por letra</option>
                        </select>
                    </div>

                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">🛡️ Modo anti-detecção:</label>
                        <select id="antiDetection" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="high">Alta (recomendado)</option>
                            <option value="medium">Média</option>
                            <option value="low">Baixa</option>
                        </select>
                    </div>
                </div>

                <!-- Seção de Mensagens -->
                <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">💬 Mensagens</h3>
                    <textarea id="comenterMessages" rows="4" placeholder="Digite cada mensagem em uma linha..."
                        style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white; resize: vertical; font-size: 12px;">Que conteúdo incrível! 👏
Gostei muito deste vídeo!
Muito obrigado por compartilhar! 😊</textarea>
                    <div style="color: #bdc3c7; font-size: 10px; margin-top: 5px;">💡 Use mensagens curtas e naturais</div>
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
                    ⚡ Pronto para usar! Configure as opções acima.
                </div>

                <!-- Rodapé -->
                <div style="text-align: center; margin-top: 15px; padding-top: 10px; border-top: 1px solid #34495e;">
                    <p style="color: #7f8c8d; font-size: 10px; margin: 0;">
                        F2: Ocultar/Mostrar | Estratégia anti-detecção ativa
                    </p>
                </div>
            </div>

            <!-- Versão minimizada -->
            <div id="minimizedPanel" style="display: none; text-align: center; padding: 10px;">
                <div style="color: #3498db; font-weight: bold; font-size: 14px;">COMENTER PRO</div>
                <div style="color: #bdc3c7; font-size: 10px; margin: 5px 0;" id="minimizedStatus">Bot parado</div>
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
        
        // Reduzir tamanho quando minimizado
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
        
        // Restaurar tamanho original
        document.getElementById('comenterProPanel').style.width = '400px';
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

    // ========== FUNÇÕES DO BOT - DIGITAÇÃO INTELIGENTE ==========
    window.startComenterBot = async function() {
        if (window.comenterRunning) {
            updateStatus('⚠️ Bot já está rodando!', '#f39c12');
            return;
        }

        const interval = parseInt(document.getElementById('comenterInterval').value) * 1000;
        const messages = document.getElementById('comenterMessages').value.split('\n').filter(m => m.trim());
        const typingStrategy = document.getElementById('typingStrategy').value;
        const antiDetection = document.getElementById('antiDetection').value;

        if (messages.length === 0) {
            updateStatus('❌ Digite pelo menos uma mensagem!', '#e74c3c');
            return;
        }

        if (interval < 10000) {
            updateStatus('❌ Intervalo muito curto! Use pelo menos 10 segundos.', '#e74c3c');
            return;
        }

        window.comenterRunning = true;
        window.messageCount = 0;

        updateStatus(`🚀 Bot iniciado! ${messages.length} mensagens`, '#27ae60');
        updateStatus('🛡️ Modo anti-detecção ativo...', '#3498db');

        let messageIndex = 0;

        window.comenterIntervalId = setInterval(async () => {
            if (!window.comenterRunning) return;

            const message = messages[messageIndex % messages.length];
            updateStatus(`📝 Preparando comentário...`, '#3498db');
            
            const success = await sendCommentSmart(message, typingStrategy, antiDetection);

            if (success) {
                window.messageCount++;
                updateStatus(`✅ ${window.messageCount} comentários enviados`, '#27ae60');
                
                // Atualizar painel minimizado
                if (window.isMinimized) {
                    const minimizedText = document.getElementById('minimizedStatus');
                    if (minimizedText) {
                        minimizedText.textContent = `${window.messageCount} comentários`;
                    }
                }
            } else {
                updateStatus('❌ Falha ao enviar comentário', '#e74c3c');
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
        
        // Atualizar painel minimizado
        if (window.isMinimized) {
            const minimizedText = document.getElementById('minimizedStatus');
            if (minimizedText) {
                minimizedText.textContent = `Parado - ${window.messageCount} comentários`;
            }
        }
    };

    // ========== DIGITAÇÃO INTELIGENTE - SEM BUGS ==========
    async function sendCommentSmart(message, strategy, antiDetection) {
        try {
            // 1. Encontrar campo de comentário de forma inteligente
            const commentField = await findCommentFieldSmart();
            if (!commentField) {
                updateStatus('❌ Campo de comentário não encontrado!', '#e74c3c');
                return false;
            }

            updateStatus('🎯 Campo encontrado, preparando...', '#3498db');

            // 2. Estratégia de preparação do campo
            const prepared = await prepareField(commentField, antiDetection);
            if (!prepared) {
                updateStatus('❌ Não foi possível preparar o campo', '#e74c3c');
                return false;
            }

            // 3. DIGITAÇÃO INTELIGENTE (sem bugs)
            updateStatus('⌨️ Escrevendo comentário...', '#3498db');
            const typed = await typeMessageSmart(commentField, message, strategy, antiDetection);
            if (!typed) {
                updateStatus('❌ Erro ao digitar', '#e74c3c');
                return false;
            }

            // 4. Verificar se o texto ficou no campo
            await delay(1000);
            const currentText = getFieldText(commentField);
            if (!currentText || currentText.length < message.length / 2) {
                updateStatus('⚠️ Texto foi apagado, tentando novamente...', '#f39c12');
                return false;
            }

            // 5. Enviar comentário
            updateStatus('📤 Enviando comentário...', '#3498db');
            const sent = await sendMessageSmart(commentField);
            
            if (sent) {
                updateStatus('✅ Comentário enviado com sucesso!', '#27ae60');
                await delay(2000);
                return true;
            }
            
            return false;
            
        } catch (error) {
            console.error('Erro ao enviar comentário:', error);
            updateStatus('❌ Erro inesperado', '#e74c3c');
            return false;
        }
    }

    async function findCommentFieldSmart() {
        // Estratégia: esperar um pouco e tentar múltiplas vezes
        for (let attempt = 0; attempt < 3; attempt++) {
            // Tentar elemento ativo primeiro
            const activeElement = document.activeElement;
            if (activeElement && isEditableElement(activeElement) && isVisible(activeElement)) {
                return activeElement;
            }

            // Procurar campos de comentário com seletores específicos
            const selectors = [
                'textarea',
                'input[type="text"]',
                '[contenteditable="true"]',
                '[role="textbox"]',
                '.comment-input',
                '.comment-field',
                '[data-testid="tweetTextarea"]',
                '#comment',
                '.ytd-comment-simplebox-renderer #contenteditable-root',
                'div[contenteditable="true"]',
                'input[placeholder*="comment" i]',
                'textarea[placeholder*="comment" i]',
                'input[placeholder*="tweet" i]',
                'textarea[placeholder*="tweet" i]',
                'input[placeholder*="post" i]',
                'textarea[placeholder*="post" i]'
            ];

            for (const selector of selectors) {
                const elements = document.querySelectorAll(selector);
                for (const element of elements) {
                    if (isVisible(element) && isEditableElement(element)) {
                        // Verificar se está na área de comentários
                        if (isInCommentsArea(element)) {
                            return element;
                        }
                    }
                }
            }

            await delay(1000);
        }
        return null;
    }

    async function prepareField(field, antiDetection) {
        try {
            // Clicar suavemente no campo
            field.click();
            await delay(800 + Math.random() * 400);

            // Focar no campo
            field.focus();
            await delay(600 + Math.random() * 300);

            // Limpar campo de forma segura
            await clearFieldSafe(field);
            await delay(500 + Math.random() * 200);

            // Verificar se o campo está pronto
            const isReady = await isFieldReady(field);
            if (!isReady) {
                return false;
            }

            return true;
        } catch (error) {
            return false;
        }
    }

    async function clearFieldSafe(field) {
        // Método mais seguro para limpar - não dispara muitos eventos
        if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
            field.value = '';
        } else if (field.isContentEditable) {
            field.textContent = '';
        }
        
        // Apenas um evento de input
        setTimeout(() => {
            const inputEvent = new Event('input', { bubbles: true });
            field.dispatchEvent(inputEvent);
        }, 100);
        
        await delay(300);
    }

    async function isFieldReady(field) {
        // Verificar se o campo está realmente pronto para receber texto
        const text = getFieldText(field);
        return text === '' || text.length === 0;
    }

    async function typeMessageSmart(field, message, strategy, antiDetection) {
        try {
            // ESTRATÉGIA 1: Blocos de texto (mais seguro)
            if (strategy === 'chunks') {
                return await typeInChunks(field, message, antiDetection);
            }
            // ESTRATÉGIA 2: Palavra por palavra
            else if (strategy === 'words') {
                return await typeWordByWord(field, message, antiDetection);
            }
            // ESTRATÉGIA 3: Letra por letra
            else {
                return await typeLetterByLetter(field, message, antiDetection);
            }
        } catch (error) {
            return false;
        }
    }

    async function typeInChunks(field, message, antiDetection) {
        // Dividir a mensagem em chunks menores
        const chunks = splitIntoChunks(message);
        let currentText = '';
        
        for (const chunk of chunks) {
            if (!window.comenterRunning) return false;
            
            currentText += chunk;
            setFieldText(field, currentText);
            
            // Delay entre chunks (baseado no modo anti-detecção)
            const chunkDelay = getTypingDelay(antiDetection) * 3;
            await delay(chunkDelay + Math.random() * 200);
            
            // Verificar se o texto ainda está lá
            const actualText = getFieldText(field);
            if (actualText !== currentText) {
                // Texto foi modificado, tentar recuperar
                setFieldText(field, currentText);
                await delay(500);
            }
        }
        
        return true;
    }

    async function typeWordByWord(field, message, antiDetection) {
        const words = message.split(' ');
        let currentText = '';
        
        for (let i = 0; i < words.length; i++) {
            if (!window.comenterRunning) return false;
            
            const word = words[i];
            currentText += (i === 0 ? '' : ' ') + word;
            setFieldText(field, currentText);
            
            // Delay entre palavras
            const wordDelay = getTypingDelay(antiDetection) * 2;
            await delay(wordDelay + Math.random() * 150);
        }
        
        return true;
    }

    async function typeLetterByLetter(field, message, antiDetection) {
        let currentText = '';
        
        for (let i = 0; i < message.length; i++) {
            if (!window.comenterRunning) return false;
            
            currentText += message[i];
            setFieldText(field, currentText);
            
            // Delay entre letras
            const letterDelay = getTypingDelay(antiDetection);
            await delay(letterDelay + Math.random() * 50);
        }
        
        return true;
    }

    function splitIntoChunks(text) {
        // Dividir texto em chunks de 2-4 palavras
        const words = text.split(' ');
        const chunks = [];
        
        for (let i = 0; i < words.length; i += 2 + Math.floor(Math.random() * 2)) {
            const chunk = words.slice(i, i + 2 + Math.floor(Math.random() * 2)).join(' ');
            if (chunk) chunks.push(chunk + (i + 2 + Math.floor(Math.random() * 2) < words.length ? ' ' : ''));
        }
        
        return chunks;
    }

    function getTypingDelay(antiDetection) {
        switch(antiDetection) {
            case 'high': return 150 + Math.random() * 100; // 150-250ms
            case 'medium': return 100 + Math.random() * 50; // 100-150ms
            case 'low': return 50 + Math.random() * 30; // 50-80ms
            default: return 120 + Math.random() * 80;
        }
    }

    function setFieldText(field, text) {
        if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
            field.value = text;
        } else {
            field.textContent = text;
        }
        
        // Disparar eventos de forma controlada
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

    async function sendMessageSmart(field) {
        // Tentar botão enviar primeiro
        const buttonSent = await findAndClickSendButtonSmart();
        if (buttonSent) return true;
        
        // Tentar tecla Enter
        const enterSent = await pressEnterSmart(field);
        return enterSent;
    }

    async function findAndClickSendButtonSmart() {
        const buttonSelectors = [
            'button[type="submit"]',
            'button:contains("Enviar")',
            'button:contains("Comment")',
            'button:contains("Post")',
            'button:contains("Publicar")',
            'button:contains("Send")',
            'button:contains("Publicar")',
            '[data-testid="tweetButton"]',
            '[role="button"]:contains("Tweet")',
            '.ytd-comment-simplebox-renderer #submit-button',
            'input[type="submit"]'
        ];

        for (const selector of buttonSelectors) {
            try {
                const buttons = document.querySelectorAll(selector);
                for (const button of buttons) {
                    if (isVisible(button) && !button.disabled) {
                        button.click();
                        await delay(1000);
                        return true;
                    }
                }
            } catch (error) {
                continue;
            }
        }
        return false;
    }

    async function pressEnterSmart(field) {
        try {
            const enterEvent = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true
            });
            
            return field.dispatchEvent(enterEvent);
        } catch (error) {
            return false;
        }
    }

    function isEditableElement(element) {
        return element.tagName === 'TEXTAREA' || 
               element.tagName === 'INPUT' || 
               element.isContentEditable ||
               element.getAttribute('contenteditable') === 'true' ||
               element.getAttribute('role') === 'textbox';
    }

    function isVisible(element) {
        return element.offsetWidth > 0 && 
               element.offsetHeight > 0 && 
               element.style.visibility !== 'hidden' && 
               element.style.display !== 'none';
    }

    function isInCommentsArea(element) {
        // Verificar se o elemento está provavelmente na área de comentários
        const container = element.closest('[id*="comment"], [class*="comment"], [data-testid*="comment"]');
        return container !== null;
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
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
        // Ctrl+Q - Transparência
        if (e.ctrlKey && e.key === 'q') {
            e.preventDefault();
            window.toggleTransparency();
        }
        // Ctrl+W - Minimizar/Maximizar
        else if (e.ctrlKey && e.key === 'w') {
            e.preventDefault();
            if (window.isMinimized) {
                window.maximizePanel();
            } else {
                window.minimizePanel();
            }
        }
        // Ctrl+E - Fechar
        else if (e.ctrlKey && e.key === 'e') {
            e.preventDefault();
            window.closePanel();
        }
        // F2 - Mostrar/Ocultar
        else if (e.key === 'F2') {
            e.preventDefault();
            window.togglePanel();
        }
        // ESC - Fechar
        else if (e.key === 'Escape') {
            window.closePanel();
        }
    });

    // Configurar botões e funcionalidades
    setTimeout(() => {
        const panel = document.getElementById('comenterProPanel');
        makeDraggable(panel);
        
        document.getElementById('transparentBtn').onclick = window.toggleTransparency;
        document.getElementById('minimizeBtn').onclick = window.minimizePanel;
        document.getElementById('closeBtn').onclick = window.closePanel;
    }, 100);

    console.log('🚀 COMENTER PRO carregado com sucesso!');
    console.log('🎯 Digitação inteligente ativada - sem bugs');
})();
