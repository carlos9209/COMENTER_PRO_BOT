// COMENTER PRO BOT - Remote Bookmarklet Version
// GitHub: https://github.com/carlos9209/COMENTER_PRO_BOT

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
                        <div style="color: #bdc3c7; font-size: 10px;">TECLADO REAL simulado</div>
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
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">⚙️ Teclado Real</h3>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">⏱️ Intervalo (minutos):</label>
                        <input type="number" id="comenterInterval" value="3" min="2" max="10" 
                            style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                    </div>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">⌨️ Simulação de teclado:</label>
                        <select id="keyboardSimulation" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="full">Completa (recomendado)</option>
                            <option value="basic">Básica</option>
                        </select>
                    </div>

                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">🎯 Eventos de teclado:</label>
                        <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                            <label style="font-size: 11px; display: flex; align-items: center;">
                                <input type="checkbox" id="eventKeydown" checked> KeyDown
                            </label>
                            <label style="font-size: 11px; display: flex; align-items: center;">
                                <input type="checkbox" id="eventKeypress" checked> KeyPress
                            </label>
                            <label style="font-size: 11px; display: flex; align-items: center;">
                                <input type="checkbox" id="eventKeyup" checked> KeyUp
                            </label>
                            <label style="font-size: 11px; display: flex; align-items: center;">
                                <input type="checkbox" id="eventInput" checked> Input
                            </label>
                            <label style="font-size: 11px; display: flex; align-items: center;">
                                <input type="checkbox" id="eventChange" checked> Change
                            </label>
                        </div>
                    </div>
                </div>

                <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">💬 Mensagens</h3>
                    <textarea id="comenterMessages" rows="4" placeholder="Digite cada mensagem em uma linha"
                        style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white; resize: vertical; font-size: 12px;">Gostei muito! Parabéns 👏
Excelente conteúdo! Obrigado 😊
Muito bom! Aprendi bastante 👍</textarea>
                    <div style="color: #bdc3c7; font-size: 10px; margin-top: 5px;">💡 O bot vai simular TECLADO REAL</div>
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
                    ⌨️ Teclado real simulado - PRONTO
                </div>

                <div style="text-align: center; margin-top: 15px; padding-top: 10px; border-top: 1px solid #34495e;">
                    <p style="color: #7f8c8d; font-size: 10px; margin: 0;">
                        F2: Ocultar/Mostrar | Eventos REAIS de teclado
                    </p>
                </div>
            </div>

            <div id="minimizedPanel" style="display: none; text-align: center; padding: 10px;">
                <div style="color: #3498db; font-weight: bold; font-size: 14px;">COMENTER PRO</div>
                <div style="color: #bdc3c7; font-size: 10px; margin: 5px 0;" id="minimizedStatus">Teclado ativo</div>
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

    // ========== SIMULAÇÃO DE TECLADO REAL ==========
    window.startComenterBot = async function() {
        if (window.comenterRunning) {
            updateStatus('⚠️ Bot já está rodando!', '#f39c12');
            return;
        }

        const interval = parseInt(document.getElementById('comenterInterval').value) * 60000;
        const messages = document.getElementById('comenterMessages').value.split('\n').filter(m => m.trim());
        const keyboardSimulation = document.getElementById('keyboardSimulation').value;

        if (messages.length === 0) {
            updateStatus('❌ Digite pelo menos uma mensagem!', '#e74c3c');
            return;
        }

        window.comenterRunning = true;
        window.messageCount = 0;

        updateStatus(`🚀 Bot iniciado! ${messages.length} mensagens`, '#27ae60');
        updateStatus('⌨️ Simulando TECLADO REAL...', '#3498db');

        let messageIndex = 0;

        window.comenterIntervalId = setInterval(async () => {
            if (!window.comenterRunning) return;

            const message = messages[messageIndex % messages.length];
            
            const success = await realKeyboardTyping(message, keyboardSimulation);

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

    // ========== TECLADO REAL - EVENTOS COMPLETOS ==========
    async function realKeyboardTyping(message, simulationType) {
        try {
            // 1. Encontrar campo
            const field = await findCommentField();
            if (!field) {
                updateStatus('❌ Campo não encontrado!', '#e74c3c');
                return false;
            }

            // 2. Foco real no campo
            await realFocus(field);
            if (!window.comenterRunning) return false;

            // 3. SIMULAR TECLADO REAL letra por letra
            updateStatus('⌨️ Teclando como HUMANO...', '#3498db');
            await delay(1000);

            const characters = message.split('');
            
            for (let i = 0; i < characters.length; i++) {
                if (!window.comenterRunning) return false;

                const char = characters[i];
                
                // SIMULAR PRESSIONAR TECLA (como teclado real)
                await simulateKeyPress(field, char);
                
                // Pausa entre letras (como humano)
                await delay(120 + Math.random() * 80);
                
                // Pausa ocasional (respirando/pensando)
                if (i > 0 && i % 5 === 0 && Math.random() < 0.3) {
                    updateStatus('💭 Pensando...', '#f39c12');
                    await delay(800 + Math.random() * 400);
                }
            }

            // 4. Enviar
            updateStatus('📤 Enviando...', '#3498db');
            const sent = await realSend(field);
            
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

    async function simulateKeyPress(field, char) {
        const key = char;
        const code = getKeyCode(char);
        const keyCode = getKeyCodeValue(char);
        const which = keyCode;
        
        // OBTER ELEMENTO ATIVO (pode mudar durante a digitação)
        const activeElement = document.activeElement;
        if (!activeElement) return;
        
        // SEQUÊNCIA COMPLETA DE EVENTOS DE TECLADO
        if (document.getElementById('eventKeydown').checked) {
            const keyDownEvent = new KeyboardEvent('keydown', {
                key: key,
                code: code,
                keyCode: keyCode,
                which: which,
                bubbles: true,
                cancelable: true,
                composed: true,
                charCode: 0,
                keyIdentifier: key,
                location: 0
            });
            activeElement.dispatchEvent(keyDownEvent);
            await delay(1);
        }

        if (document.getElementById('eventKeypress').checked) {
            const keyPressEvent = new KeyboardEvent('keypress', {
                key: key,
                code: code,
                keyCode: keyCode,
                which: which,
                bubbles: true,
                cancelable: true,
                composed: true,
                charCode: key.charCodeAt(0),
                keyIdentifier: key,
                location: 0
            });
            activeElement.dispatchEvent(keyPressEvent);
            await delay(1);
        }

        // ATUALIZAR VALOR DO CAMPO (como o navegador faria)
        if (activeElement.tagName === 'TEXTAREA' || activeElement.tagName === 'INPUT') {
            activeElement.value += char;
        } else if (activeElement.isContentEditable) {
            activeElement.textContent += char;
        }

        if (document.getElementById('eventInput').checked) {
            const inputEvent = new Event('input', {
                bubbles: true,
                cancelable: true,
                composed: true
            });
            activeElement.dispatchEvent(inputEvent);
            await delay(1);
        }

        if (document.getElementById('eventKeyup').checked) {
            const keyUpEvent = new KeyboardEvent('keyup', {
                key: key,
                code: code,
                keyCode: keyCode,
                which: which,
                bubbles: true,
                cancelable: true,
                composed: true,
                charCode: 0,
                keyIdentifier: key,
                location: 0
            });
            activeElement.dispatchEvent(keyUpEvent);
            await delay(1);
        }

        if (document.getElementById('eventChange').checked) {
            const changeEvent = new Event('change', {
                bubbles: true,
                cancelable: true,
                composed: true
            });
            activeElement.dispatchEvent(changeEvent);
            await delay(1);
        }

        // EVENTOS ADICIONAIS PARA SITES MAIS RESTRITIVOS
        if (Math.random() < 0.2) { // 20% de chance
            const compositionStart = new CompositionEvent('compositionstart', {
                bubbles: true,
                cancelable: true,
                composed: true,
                data: char
            });
            activeElement.dispatchEvent(compositionStart);
            
            await delay(2);
            
            const compositionEnd = new CompositionEvent('compositionend', {
                bubbles: true,
                cancelable: true,
                composed: true,
                data: char
            });
            activeElement.dispatchEvent(compositionEnd);
        }
    }

    function getKeyCode(char) {
        // Mapear caracteres para códigos de tecla
        const keyMap = {
            ' ': 'Space',
            '!': 'Digit1',
            '@': 'Digit2',
            '#': 'Digit3',
            '$': 'Digit4',
            '%': 'Digit5',
            '^': 'Digit6',
            '&': 'Digit7',
            '*': 'Digit8',
            '(': 'Digit9',
            ')': 'Digit0',
            '-': 'Minus',
            '_': 'Minus',
            '=': 'Equal',
            '+': 'Equal',
            '[': 'BracketLeft',
            ']': 'BracketRight',
            '{': 'BracketLeft',
            '}': 'BracketRight',
            ';': 'Semicolon',
            ':': 'Semicolon',
            "'": 'Quote',
            '"': 'Quote',
            '\\': 'Backslash',
            '|': 'Backslash',
            ',': 'Comma',
            '<': 'Comma',
            '.': 'Period',
            '>': 'Period',
            '/': 'Slash',
            '?': 'Slash',
            '`': 'Backquote',
            '~': 'Backquote'
        };

        if (keyMap[char]) {
            return keyMap[char];
        }

        if (/[a-z]/.test(char)) {
            return 'Key' + char.toUpperCase();
        }

        if (/[A-Z]/.test(char)) {
            return 'Key' + char.toUpperCase();
        }

        if (/[0-9]/.test(char)) {
            return 'Digit' + char;
        }

        return 'Key' + char.toUpperCase();
    }

    function getKeyCodeValue(char) {
        // Retorna keyCode tradicional
        return char.charCodeAt(0);
    }

    async function realFocus(field) {
        // Foco REAL no campo com eventos completos
        updateStatus('🎯 Focando no campo...', '#3498db');
        
        // Evento de mouse down
        const mouseDown = new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
            composed: true,
            clientX: field.getBoundingClientRect().left + 10,
            clientY: field.getBoundingClientRect().top + 10
        });
        field.dispatchEvent(mouseDown);
        await delay(50);

        // Evento de focus
        const focusEvent = new FocusEvent('focus', {
            bubbles: true,
            cancelable: true,
            composed: true
        });
        field.dispatchEvent(focusEvent);
        await delay(50);

        // Evento de mouse up
        const mouseUp = new MouseEvent('mouseup', {
            bubbles: true,
            cancelable: true,
            composed: true
        });
        field.dispatchEvent(mouseUp);
        await delay(50);

        // Evento de click
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            composed: true
        });
        field.dispatchEvent(clickEvent);
        await delay(100);

        // Focar programaticamente
        field.focus();
        await delay(200);

        // Evento de focusin
        const focusIn = new FocusEvent('focusin', {
            bubbles: true,
            cancelable: true,
            composed: true
        });
        field.dispatchEvent(focusIn);
        await delay(100);
    }

    async function realSend(field) {
        // Tentar botão primeiro
        const buttonSent = await findAndClickSendButton();
        if (buttonSent) return true;
        
        // Se não, simular ENTER real
        return await simulateEnterKey(field);
    }

    async function simulateEnterKey(field) {
        try {
            await delay(500);
            
            // Sequência completa de eventos ENTER
            const enterDown = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true,
                cancelable: true,
                composed: true
            });
            field.dispatchEvent(enterDown);
            await delay(10);

            const enterPress = new KeyboardEvent('keypress', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true,
                cancelable: true,
                composed: true
            });
            field.dispatchEvent(enterPress);
            await delay(10);

            const enterUp = new KeyboardEvent('keyup', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true,
                cancelable: true,
                composed: true
            });
            field.dispatchEvent(enterUp);
            await delay(10);

            return true;
        } catch (error) {
            return false;
        }
    }

    // ========== FUNÇÕES AUXILIARES ==========
    async function findCommentField() {
        for (let attempt = 0; attempt < 3; attempt++) {
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

            await delay(1000);
        }
        return null;
    }

    async function findAndClickSendButton() {
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
                        // Simular click real
                        const mouseDown = new MouseEvent('mousedown', { bubbles: true });
                        button.dispatchEvent(mouseDown);
                        await delay(50);
                        
                        const mouseUp = new MouseEvent('mouseup', { bubbles: true });
                        button.dispatchEvent(mouseUp);
                        await delay(50);
                        
                        const click = new MouseEvent('click', { bubbles: true });
                        button.dispatchEvent(click);
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

    console.log('🚀 COMENTER PRO - Teclado REAL simulado!');
})();
