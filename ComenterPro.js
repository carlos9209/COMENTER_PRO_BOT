// COMENTER PRO BOT - Remote Bookmarklet Version
// GitHub: https://ratonixxx.github.io/COMENTER_PRO_BOT

(function() {
    if (window.comenterProLoaded) {
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
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #34495e;">
                <div style="display: flex; align-items: center;">
                    <div style="font-size: 20px; margin-right: 10px;">💬</div>
                    <div>
                        <div style="color: #3498db; font-weight: bold; font-size: 16px;">COMENTER PRO</div>
                        <div style="color: #bdc3c7; font-size: 10px;">Modo RÁPIDO e COMPLETO</div>
                    </div>
                </div>
                <div style="display: flex; gap: 5px;">
                    <button id="transparentBtn" title="Toggle Transparência" style="
                        background: #f39c12; color: white; border: none; 
                        width: 30px; height: 30px; border-radius: 50%; 
                        cursor: pointer; font-size: 12px;">
                        👁️
                    </button>
                    <button id="minimizeBtn" title="Minimizar" style="
                        background: #3498db; color: white; border: none; 
                        width: 30px; height: 30px; border-radius: 50%; 
                        cursor: pointer; font-size: 12px;">
                        _
                    </button>
                    <button id="closeBtn" title="Fechar" style="
                        background: #e74c3c; color: white; border: none; 
                        width: 30px; height: 30px; border-radius: 50%; 
                        cursor: pointer; font-size: 12px;">
                        ×
                    </button>
                </div>
            </div>
            
            <div id="panelContent">
                <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">⚙️ Configurações Rápidas</h3>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">⏱️ Intervalo (segundos):</label>
                        <input type="number" id="comenterInterval" value="60" min="30" max="300" 
                            style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                    </div>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">⚡ Velocidade:</label>
                        <select id="typingSpeed" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="fast">Rápida (60-120ms)</option>
                            <option value="normal" selected>Normal (80-150ms)</option>
                            <option value="slow">Lenta (100-200ms)</option>
                        </select>
                    </div>

                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">🎯 Garantir texto completo:</label>
                        <select id="textCompletion" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="guaranteed" selected>SIM - Digita TUDO (recomendado)</option>
                            <option value="normal">Normal</option>
                        </select>
                    </div>
                </div>

                <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">💬 Mensagens</h3>
                    <textarea id="comenterMessages" rows="4" placeholder="Digite cada mensagem em uma linha"
                        style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white; resize: vertical; font-size: 12px;">Excelente conteúdo! Parabéns pelo trabalho 👏
Muito obrigado por compartilhar conhecimento de qualidade! 😊
Adorei o vídeo, as explicações são muito claras! 👍</textarea>
                    <div style="color: #bdc3c7; font-size: 10px; margin-top: 5px;">💡 Digita TUDO até o final automaticamente</div>
                </div>

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

                <div id="comenterStatus" style="
                    padding: 10px; border-radius: 5px; background: #34495e; 
                    font-size: 11px; text-align: center; min-height: 20px;">
                    ⚡ Modo RÁPIDO - Digita TUDO automaticamente
                </div>

                <div style="text-align: center; margin-top: 15px; padding-top: 10px; border-top: 1px solid #34495e;">
                    <p style="color: #7f8c8d; font-size: 10px; margin: 0;">
                        F2: Ocultar/Mostrar | Início rápido + Texto completo
                    </p>
                </div>
            </div>

            <div id="minimizedPanel" style="display: none; text-align: center; padding: 10px;">
                <div style="color: #3498db; font-weight: bold; font-size: 14px;">COMENTER PRO</div>
                <div style="color: #bdc3c7; font-size: 10px; margin: 5px 0;" id="minimizedStatus">Modo rápido</div>
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
        } else {
            panel.style.opacity = '1';
            panel.style.background = '#2c3e50';
            btn.style.background = '#f39c12';
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
        btn.style.background = '#27ae60';
        
        document.getElementById('comenterProPanel').style.width = '200px';
    };

    window.maximizePanel = function() {
        const content = document.getElementById('panelContent');
        const minimized = document.getElementById('minimizedPanel');
        const btn = document.getElementById('minimizeBtn');
        
        window.isMinimized = false;
        content.style.display = 'block';
        minimized.style.display = 'none';
        btn.innerHTML = '_';
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

    // ========== MODO RÁPIDO E COMPLETO ==========
    window.startComenterBot = async function() {
        if (window.comenterRunning) {
            updateStatus('⚠️ Bot já está rodando!', '#f39c12');
            return;
        }

        const interval = parseInt(document.getElementById('comenterInterval').value) * 1000; // Segundos
        const messages = document.getElementById('comenterMessages').value.split('\n').filter(m => m.trim());
        const typingSpeed = document.getElementById('typingSpeed').value;
        const textCompletion = document.getElementById('textCompletion').value;

        if (messages.length === 0) {
            updateStatus('❌ Digite pelo menos uma mensagem!', '#e74c3c');
            return;
        }

        window.comenterRunning = true;
        window.messageCount = 0;

        updateStatus(`🚀 Bot iniciado RAPIDAMENTE! ${messages.length} mensagens`, '#27ae60');

        let messageIndex = 0;

        // INICIAR IMEDIATAMENTE (sem esperar primeiro intervalo)
        setTimeout(async () => {
            if (!window.comenterRunning) return;

            const message = messages[messageIndex % messages.length];
            const success = await fastCompleteTyping(message, typingSpeed, textCompletion);

            if (success) {
                window.messageCount++;
                updateStatus(`✅ ${window.messageCount} comentários enviados`, '#27ae60');
            }

            messageIndex++;
        }, 1000); // Apenas 1 segundo para iniciar

        // Configurar intervalo para próximas mensagens
        window.comenterIntervalId = setInterval(async () => {
            if (!window.comenterRunning) return;

            const message = messages[messageIndex % messages.length];
            const success = await fastCompleteTyping(message, typingSpeed, textCompletion);

            if (success) {
                window.messageCount++;
                updateStatus(`✅ ${window.messageCount} comentários enviados`, '#27ae60');
                
                if (window.isMinimized) {
                    const minimizedText = document.getElementById('minimizedStatus');
                    if (minimizedText) {
                        minimizedText.textContent = `${window.messageCount} enviados`;
                    }
                }
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

    // ========== DIGITAÇÃO RÁPIDA E COMPLETA ==========
    async function fastCompleteTyping(message, speed, completion) {
        try {
            // 1. Encontrar campo RAPIDAMENTE
            updateStatus('🔍 Procurando campo...', '#3498db');
            const field = await findCommentFieldFast();
            if (!field) {
                updateStatus('❌ Campo não encontrado!', '#e74c3c');
                return false;
            }

            // 2. Foco RÁPIDO
            await fastFocus(field);
            if (!window.comenterRunning) return false;

            // 3. DIGITAR TUDO ATÉ O FINAL
            updateStatus('⚡ Digitando TUDO...', '#3498db');
            
            const success = await typeCompleteMessage(field, message, speed, completion);
            if (!success) return false;

            // 4. Envio RÁPIDO
            updateStatus('📤 Enviando...', '#3498db');
            const sent = await fastSend(field);
            
            if (sent) {
                updateStatus('✅ Comentário enviado!', '#27ae60');
                return true;
            }
            
            return false;
            
        } catch (error) {
            console.error('Erro:', error);
            return false;
        }
    }

    async function typeCompleteMessage(field, message, speed, completion) {
        const characters = message.split('');
        let typedCount = 0;
        
        // GARANTIR que digita TUDO
        const maxAttempts = completion === 'guaranteed' ? 3 : 1;
        
        for (let attempt = 0; attempt < maxAttempts; attempt++) {
            if (!window.comenterRunning) return false;
            
            updateStatus(`📝 Tentativa ${attempt + 1}/${maxAttempts}...`, '#3498db');
            typedCount = 0;
            
            for (let i = 0; i < characters.length; i++) {
                if (!window.comenterRunning) return false;

                const char = characters[i];
                
                // SIMULAR TECLADO RÁPIDO
                await simulateFastKeyPress(field, char, speed);
                typedCount++;
                
                // Verificar progresso
                if (i % 10 === 0) {
                    const progress = Math.round((i / characters.length) * 100);
                    updateStatus(`⚡ Digitando... ${progress}%`, '#3498db');
                }
            }
            
            // VERIFICAR se digitou TUDO
            const currentText = getFieldText(field);
            if (currentText.includes(message) || completion !== 'guaranteed') {
                updateStatus('✅ Texto COMPLETO digitado!', '#27ae60');
                return true;
            } else {
                updateStatus('🔄 Texto incompleto, tentando novamente...', '#f39c12');
                // Limpar e tentar novamente
                await clearFieldFast(field);
                await delay(500);
            }
        }
        
        return typedCount >= characters.length * 0.9; // Aceita 90% de sucesso
    }

    async function simulateFastKeyPress(field, char, speed) {
        const key = char;
        const code = getKeyCode(char);
        const keyCode = getKeyCodeValue(char);
        const which = keyCode;
        
        const activeElement = document.activeElement;
        if (!activeElement) return;
        
        // EVENTOS RÁPIDOS DE TECLADO
        const keyDownEvent = new KeyboardEvent('keydown', {
            key: key,
            code: code,
            keyCode: keyCode,
            which: which,
            bubbles: true,
            cancelable: true
        });
        activeElement.dispatchEvent(keyDownEvent);

        const keyPressEvent = new KeyboardEvent('keypress', {
            key: key,
            code: code,
            keyCode: keyCode,
            which: which,
            bubbles: true,
            cancelable: true
        });
        activeElement.dispatchEvent(keyPressEvent);

        // ATUALIZAR VALOR RAPIDAMENTE
        if (activeElement.tagName === 'TEXTAREA' || activeElement.tagName === 'INPUT') {
            activeElement.value += char;
        } else if (activeElement.isContentEditable) {
            activeElement.textContent += char;
        }

        const inputEvent = new Event('input', { bubbles: true });
        activeElement.dispatchEvent(inputEvent);

        const keyUpEvent = new KeyboardEvent('keyup', {
            key: key,
            code: code,
            keyCode: keyCode,
            which: which,
            bubbles: true,
            cancelable: true
        });
        activeElement.dispatchEvent(keyUpEvent);

        // DELAY RÁPIDO entre letras
        await getFastDelay(speed);
    }

    function getFastDelay(speed) {
        switch(speed) {
            case 'fast': return delay(60 + Math.random() * 60); // 60-120ms
            case 'normal': return delay(80 + Math.random() * 70); // 80-150ms  
            case 'slow': return delay(100 + Math.random() * 100); // 100-200ms
            default: return delay(80 + Math.random() * 70);
        }
    }

    async function findCommentFieldFast() {
        // Busca RÁPIDA do campo
        const activeElement = document.activeElement;
        if (activeElement && isEditableElement(activeElement) && isVisible(activeElement)) {
            return activeElement;
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
                    return element;
                }
            }
        }

        return null;
    }

    async function fastFocus(field) {
        // Foco RÁPIDO
        field.focus();
        
        const clickEvent = new MouseEvent('click', { bubbles: true });
        field.dispatchEvent(clickEvent);
        
        await delay(100);
    }

    async function clearFieldFast(field) {
        // Limpeza RÁPIDA
        if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
            field.value = '';
        } else {
            field.textContent = '';
        }
        await delay(50);
    }

    async function fastSend(field) {
        // Envio RÁPIDO - tentar botão primeiro
        const buttonSent = await findAndClickSendButtonFast();
        if (buttonSent) return true;
        
        // Se não, Enter rápido
        return await simulateFastEnter(field);
    }

    async function findAndClickSendButtonFast() {
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
                        button.click();
                        await delay(800);
                        return true;
                    }
                }
            } catch (error) {
                continue;
            }
        }
        return false;
    }

    async function simulateFastEnter(field) {
        try {
            await delay(200);
            
            const enterDown = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true
            });
            field.dispatchEvent(enterDown);

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

    // ========== FUNÇÕES AUXILIARES ==========
    function getKeyCode(char) {
        const keyMap = {
            ' ': 'Space',
            '!': 'Digit1', '@': 'Digit2', '#': 'Digit3', '$': 'Digit4', '%': 'Digit5',
            '^': 'Digit6', '&': 'Digit7', '*': 'Digit8', '(': 'Digit9', ')': 'Digit0',
            '-': 'Minus', '_': 'Minus', '=': 'Equal', '+': 'Equal',
            '[': 'BracketLeft', ']': 'BracketRight', '{': 'BracketLeft', '}': 'BracketRight',
            ';': 'Semicolon', ':': 'Semicolon', "'": 'Quote', '"': 'Quote',
            '\\': 'Backslash', '|': 'Backslash', ',': 'Comma', '<': 'Comma',
            '.': 'Period', '>': 'Period', '/': 'Slash', '?': 'Slash',
            '`': 'Backquote', '~': 'Backquote'
        };

        if (keyMap[char]) return keyMap[char];
        if (/[a-z]/i.test(char)) return 'Key' + char.toUpperCase();
        if (/[0-9]/.test(char)) return 'Digit' + char;
        return 'Key' + char.toUpperCase();
    }

    function getKeyCodeValue(char) {
        return char.charCodeAt(0);
    }

    function getFieldText(field) {
        if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
            return field.value;
        } else {
            return field.textContent || field.innerText;
        }
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
        if (e.key === 'F2') {
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

    console.log('🚀 COMENTER PRO - Modo RÁPIDO ativado!');
})();

(function() {
    if (window.comenterProLoaded) {
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
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #34495e;">
                <div style="display: flex; align-items: center;">
                    <div style="font-size: 20px; margin-right: 10px;">💬</div>
                    <div>
                        <div style="color: #3498db; font-weight: bold; font-size: 16px;">COMENTER PRO</div>
                        <div style="color: #bdc3c7; font-size: 10px;">Modo RÁPIDO e COMPLETO</div>
                    </div>
                </div>
                <div style="display: flex; gap: 5px;">
                    <button id="transparentBtn" title="Toggle Transparência" style="
                        background: #f39c12; color: white; border: none; 
                        width: 30px; height: 30px; border-radius: 50%; 
                        cursor: pointer; font-size: 12px;">
                        👁️
                    </button>
                    <button id="minimizeBtn" title="Minimizar" style="
                        background: #3498db; color: white; border: none; 
                        width: 30px; height: 30px; border-radius: 50%; 
                        cursor: pointer; font-size: 12px;">
                        _
                    </button>
                    <button id="closeBtn" title="Fechar" style="
                        background: #e74c3c; color: white; border: none; 
                        width: 30px; height: 30px; border-radius: 50%; 
                        cursor: pointer; font-size: 12px;">
                        ×
                    </button>
                </div>
            </div>
            
            <div id="panelContent">
                <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">⚙️ Configurações Rápidas</h3>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">⏱️ Intervalo (segundos):</label>
                        <input type="number" id="comenterInterval" value="60" min="30" max="300" 
                            style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                    </div>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">⚡ Velocidade:</label>
                        <select id="typingSpeed" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="fast">Rápida (60-120ms)</option>
                            <option value="normal" selected>Normal (80-150ms)</option>
                            <option value="slow">Lenta (100-200ms)</option>
                        </select>
                    </div>

                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">🎯 Garantir texto completo:</label>
                        <select id="textCompletion" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="guaranteed" selected>SIM - Digita TUDO (recomendado)</option>
                            <option value="normal">Normal</option>
                        </select>
                    </div>
                </div>

                <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">💬 Mensagens</h3>
                    <textarea id="comenterMessages" rows="4" placeholder="Digite cada mensagem em uma linha"
                        style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white; resize: vertical; font-size: 12px;">Excelente conteúdo! Parabéns pelo trabalho 👏
Muito obrigado por compartilhar conhecimento de qualidade! 😊
Adorei o vídeo, as explicações são muito claras! 👍</textarea>
                    <div style="color: #bdc3c7; font-size: 10px; margin-top: 5px;">💡 Digita TUDO até o final automaticamente</div>
                </div>

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

                <div id="comenterStatus" style="
                    padding: 10px; border-radius: 5px; background: #34495e; 
                    font-size: 11px; text-align: center; min-height: 20px;">
                    ⚡ Modo RÁPIDO - Digita TUDO automaticamente
                </div>

                <div style="text-align: center; margin-top: 15px; padding-top: 10px; border-top: 1px solid #34495e;">
                    <p style="color: #7f8c8d; font-size: 10px; margin: 0;">
                        F2: Ocultar/Mostrar | Início rápido + Texto completo
                    </p>
                </div>
            </div>

            <div id="minimizedPanel" style="display: none; text-align: center; padding: 10px;">
                <div style="color: #3498db; font-weight: bold; font-size: 14px;">COMENTER PRO</div>
                <div style="color: #bdc3c7; font-size: 10px; margin: 5px 0;" id="minimizedStatus">Modo rápido</div>
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
        } else {
            panel.style.opacity = '1';
            panel.style.background = '#2c3e50';
            btn.style.background = '#f39c12';
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
        btn.style.background = '#27ae60';
        
        document.getElementById('comenterProPanel').style.width = '200px';
    };

    window.maximizePanel = function() {
        const content = document.getElementById('panelContent');
        const minimized = document.getElementById('minimizedPanel');
        const btn = document.getElementById('minimizeBtn');
        
        window.isMinimized = false;
        content.style.display = 'block';
        minimized.style.display = 'none';
        btn.innerHTML = '_';
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

    // ========== MODO RÁPIDO E COMPLETO ==========
    window.startComenterBot = async function() {
        if (window.comenterRunning) {
            updateStatus('⚠️ Bot já está rodando!', '#f39c12');
            return;
        }

        const interval = parseInt(document.getElementById('comenterInterval').value) * 1000; // Segundos
        const messages = document.getElementById('comenterMessages').value.split('\n').filter(m => m.trim());
        const typingSpeed = document.getElementById('typingSpeed').value;
        const textCompletion = document.getElementById('textCompletion').value;

        if (messages.length === 0) {
            updateStatus('❌ Digite pelo menos uma mensagem!', '#e74c3c');
            return;
        }

        window.comenterRunning = true;
        window.messageCount = 0;

        updateStatus(`🚀 Bot iniciado RAPIDAMENTE! ${messages.length} mensagens`, '#27ae60');

        let messageIndex = 0;

        // INICIAR IMEDIATAMENTE (sem esperar primeiro intervalo)
        setTimeout(async () => {
            if (!window.comenterRunning) return;

            const message = messages[messageIndex % messages.length];
            const success = await fastCompleteTyping(message, typingSpeed, textCompletion);

            if (success) {
                window.messageCount++;
                updateStatus(`✅ ${window.messageCount} comentários enviados`, '#27ae60');
            }

            messageIndex++;
        }, 1000); // Apenas 1 segundo para iniciar

        // Configurar intervalo para próximas mensagens
        window.comenterIntervalId = setInterval(async () => {
            if (!window.comenterRunning) return;

            const message = messages[messageIndex % messages.length];
            const success = await fastCompleteTyping(message, typingSpeed, textCompletion);

            if (success) {
                window.messageCount++;
                updateStatus(`✅ ${window.messageCount} comentários enviados`, '#27ae60');
                
                if (window.isMinimized) {
                    const minimizedText = document.getElementById('minimizedStatus');
                    if (minimizedText) {
                        minimizedText.textContent = `${window.messageCount} enviados`;
                    }
                }
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

    // ========== DIGITAÇÃO RÁPIDA E COMPLETA ==========
    async function fastCompleteTyping(message, speed, completion) {
        try {
            // 1. Encontrar campo RAPIDAMENTE
            updateStatus('🔍 Procurando campo...', '#3498db');
            const field = await findCommentFieldFast();
            if (!field) {
                updateStatus('❌ Campo não encontrado!', '#e74c3c');
                return false;
            }

            // 2. Foco RÁPIDO
            await fastFocus(field);
            if (!window.comenterRunning) return false;

            // 3. DIGITAR TUDO ATÉ O FINAL
            updateStatus('⚡ Digitando TUDO...', '#3498db');
            
            const success = await typeCompleteMessage(field, message, speed, completion);
            if (!success) return false;

            // 4. Envio RÁPIDO
            updateStatus('📤 Enviando...', '#3498db');
            const sent = await fastSend(field);
            
            if (sent) {
                updateStatus('✅ Comentário enviado!', '#27ae60');
                return true;
            }
            
            return false;
            
        } catch (error) {
            console.error('Erro:', error);
            return false;
        }
    }

    async function typeCompleteMessage(field, message, speed, completion) {
        const characters = message.split('');
        let typedCount = 0;
        
        // GARANTIR que digita TUDO
        const maxAttempts = completion === 'guaranteed' ? 3 : 1;
        
        for (let attempt = 0; attempt < maxAttempts; attempt++) {
            if (!window.comenterRunning) return false;
            
            updateStatus(`📝 Tentativa ${attempt + 1}/${maxAttempts}...`, '#3498db');
            typedCount = 0;
            
            for (let i = 0; i < characters.length; i++) {
                if (!window.comenterRunning) return false;

                const char = characters[i];
                
                // SIMULAR TECLADO RÁPIDO
                await simulateFastKeyPress(field, char, speed);
                typedCount++;
                
                // Verificar progresso
                if (i % 10 === 0) {
                    const progress = Math.round((i / characters.length) * 100);
                    updateStatus(`⚡ Digitando... ${progress}%`, '#3498db');
                }
            }
            
            // VERIFICAR se digitou TUDO
            const currentText = getFieldText(field);
            if (currentText.includes(message) || completion !== 'guaranteed') {
                updateStatus('✅ Texto COMPLETO digitado!', '#27ae60');
                return true;
            } else {
                updateStatus('🔄 Texto incompleto, tentando novamente...', '#f39c12');
                // Limpar e tentar novamente
                await clearFieldFast(field);
                await delay(500);
            }
        }
        
        return typedCount >= characters.length * 0.9; // Aceita 90% de sucesso
    }

    async function simulateFastKeyPress(field, char, speed) {
        const key = char;
        const code = getKeyCode(char);
        const keyCode = getKeyCodeValue(char);
        const which = keyCode;
        
        const activeElement = document.activeElement;
        if (!activeElement) return;
        
        // EVENTOS RÁPIDOS DE TECLADO
        const keyDownEvent = new KeyboardEvent('keydown', {
            key: key,
            code: code,
            keyCode: keyCode,
            which: which,
            bubbles: true,
            cancelable: true
        });
        activeElement.dispatchEvent(keyDownEvent);

        const keyPressEvent = new KeyboardEvent('keypress', {
            key: key,
            code: code,
            keyCode: keyCode,
            which: which,
            bubbles: true,
            cancelable: true
        });
        activeElement.dispatchEvent(keyPressEvent);

        // ATUALIZAR VALOR RAPIDAMENTE
        if (activeElement.tagName === 'TEXTAREA' || activeElement.tagName === 'INPUT') {
            activeElement.value += char;
        } else if (activeElement.isContentEditable) {
            activeElement.textContent += char;
        }

        const inputEvent = new Event('input', { bubbles: true });
        activeElement.dispatchEvent(inputEvent);

        const keyUpEvent = new KeyboardEvent('keyup', {
            key: key,
            code: code,
            keyCode: keyCode,
            which: which,
            bubbles: true,
            cancelable: true
        });
        activeElement.dispatchEvent(keyUpEvent);

        // DELAY RÁPIDO entre letras
        await getFastDelay(speed);
    }

    function getFastDelay(speed) {
        switch(speed) {
            case 'fast': return delay(60 + Math.random() * 60); // 60-120ms
            case 'normal': return delay(80 + Math.random() * 70); // 80-150ms  
            case 'slow': return delay(100 + Math.random() * 100); // 100-200ms
            default: return delay(80 + Math.random() * 70);
        }
    }

    async function findCommentFieldFast() {
        // Busca RÁPIDA do campo
        const activeElement = document.activeElement;
        if (activeElement && isEditableElement(activeElement) && isVisible(activeElement)) {
            return activeElement;
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
                    return element;
                }
            }
        }

        return null;
    }

    async function fastFocus(field) {
        // Foco RÁPIDO
        field.focus();
        
        const clickEvent = new MouseEvent('click', { bubbles: true });
        field.dispatchEvent(clickEvent);
        
        await delay(100);
    }

    async function clearFieldFast(field) {
        // Limpeza RÁPIDA
        if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
            field.value = '';
        } else {
            field.textContent = '';
        }
        await delay(50);
    }

    async function fastSend(field) {
        // Envio RÁPIDO - tentar botão primeiro
        const buttonSent = await findAndClickSendButtonFast();
        if (buttonSent) return true;
        
        // Se não, Enter rápido
        return await simulateFastEnter(field);
    }

    async function findAndClickSendButtonFast() {
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
                        button.click();
                        await delay(800);
                        return true;
                    }
                }
            } catch (error) {
                continue;
            }
        }
        return false;
    }

    async function simulateFastEnter(field) {
        try {
            await delay(200);
            
            const enterDown = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true
            });
            field.dispatchEvent(enterDown);

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

    // ========== FUNÇÕES AUXILIARES ==========
    function getKeyCode(char) {
        const keyMap = {
            ' ': 'Space',
            '!': 'Digit1', '@': 'Digit2', '#': 'Digit3', '$': 'Digit4', '%': 'Digit5',
            '^': 'Digit6', '&': 'Digit7', '*': 'Digit8', '(': 'Digit9', ')': 'Digit0',
            '-': 'Minus', '_': 'Minus', '=': 'Equal', '+': 'Equal',
            '[': 'BracketLeft', ']': 'BracketRight', '{': 'BracketLeft', '}': 'BracketRight',
            ';': 'Semicolon', ':': 'Semicolon', "'": 'Quote', '"': 'Quote',
            '\\': 'Backslash', '|': 'Backslash', ',': 'Comma', '<': 'Comma',
            '.': 'Period', '>': 'Period', '/': 'Slash', '?': 'Slash',
            '`': 'Backquote', '~': 'Backquote'
        };

        if (keyMap[char]) return keyMap[char];
        if (/[a-z]/i.test(char)) return 'Key' + char.toUpperCase();
        if (/[0-9]/.test(char)) return 'Digit' + char;
        return 'Key' + char.toUpperCase();
    }

    function getKeyCodeValue(char) {
        return char.charCodeAt(0);
    }

    function getFieldText(field) {
        if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
            return field.value;
        } else {
            return field.textContent || field.innerText;
        }
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
        if (e.key === 'F2') {
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

    console.log('🚀 COMENTER PRO - Modo RÁPIDO ativado!');
})();
