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
                        <div style="color: #bdc3c7; font-size: 10px;">Velocidade humana REAL</div>
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
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">⚙️ Velocidade Humana</h3>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">⏱️ Intervalo entre comentários (minutos):</label>
                        <input type="number" id="comenterInterval" value="2" min="1" max="10" 
                            style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                        <div style="color: #bdc3c7; font-size: 10px; margin-top: 3px;">💡 Use 2+ minutos para parecer mais humano</div>
                    </div>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">🐌 Velocidade de digitação:</label>
                        <select id="typingSpeed" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="verySlow">Muito Lenta (200-400ms/letra)</option>
                            <option value="slow" selected>Lenta (150-300ms/letra)</option>
                            <option value="normal">Normal (100-200ms/letra)</option>
                        </select>
                    </div>

                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">💭 Pausas humanas:</label>
                        <select id="pauseFrequency" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="frequent">Frequentes (como humano cansado)</option>
                            <option value="normal" selected>Normais (pensando no que escrever)</option>
                            <option value="rare">Raras (digitador experiente)</option>
                        </select>
                    </div>
                </div>

                <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">💬 Mensagens</h3>
                    <textarea id="comenterMessages" rows="4" placeholder="Digite cada mensagem em uma linha"
                        style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white; resize: vertical; font-size: 12px;">Gostei muito do conteúdo! Parabéns 👏
Excelente explicação, obrigado! 😊
Vídeo muito bom, aprendi bastante! 👍</textarea>
                    <div style="color: #bdc3c7; font-size: 10px; margin-top: 5px;">💡 Mensagens curtas funcionam melhor</div>
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
                    🐌 Velocidade humana lenta ativada
                </div>

                <div style="text-align: center; margin-top: 15px; padding-top: 10px; border-top: 1px solid #34495e;">
                    <p style="color: #7f8c8d; font-size: 10px; margin: 0;">
                        F2: Ocultar/Mostrar | Digitação MUITO lenta como humano
                    </p>
                </div>
            </div>

            <div id="minimizedPanel" style="display: none; text-align: center; padding: 10px;">
                <div style="color: #3498db; font-weight: bold; font-size: 14px;">COMENTER PRO</div>
                <div style="color: #bdc3c7; font-size: 10px; margin: 5px 0;" id="minimizedStatus">Digitando lentamente...</div>
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

    // ========== DIGITAÇÃO MUITO LENTA - HUMANA REAL ==========
    window.startComenterBot = async function() {
        if (window.comenterRunning) {
            updateStatus('⚠️ Bot já está rodando!', '#f39c12');
            return;
        }

        const interval = parseInt(document.getElementById('comenterInterval').value) * 60000; // Converter para minutos
        const messages = document.getElementById('comenterMessages').value.split('\n').filter(m => m.trim());
        const typingSpeed = document.getElementById('typingSpeed').value;
        const pauseFrequency = document.getElementById('pauseFrequency').value;

        if (messages.length === 0) {
            updateStatus('❌ Digite pelo menos uma mensagem!', '#e74c3c');
            return;
        }

        window.comenterRunning = true;
        window.messageCount = 0;

        updateStatus(`🚀 Bot iniciado! ${messages.length} mensagens`, '#27ae60');
        updateStatus('🐌 Digitando MUITO devagar...', '#3498db');

        let messageIndex = 0;

        window.comenterIntervalId = setInterval(async () => {
            if (!window.comenterRunning) return;

            const message = messages[messageIndex % messages.length];
            
            const success = await ultraSlowHumanTyping(message, typingSpeed, pauseFrequency);

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

    // ========== DIGITAÇÃO ULTRA LENTA COMO HUMANO ==========
    async function ultraSlowHumanTyping(message, speed, pauseFreq) {
        try {
            // 1. Encontrar campo
            const field = await findCommentField();
            if (!field) {
                updateStatus('❌ Campo não encontrado!', '#e74c3c');
                return false;
            }

            // 2. Preparação BEM lenta
            await verySlowFieldPreparation(field);
            if (!window.comenterRunning) return false;

            // 3. DIGITAÇÃO MUITO LENTA
            updateStatus('🐌 Começando a digitar...', '#3498db');
            await humanPause(2000, 4000); // Pausa antes de começar

            const words = message.split(' ');
            let currentText = '';

            for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
                if (!window.comenterRunning) return false;

                const word = words[wordIndex];
                
                // PAUSA ANTES DE CADA PALAVRA (humano pensando)
                if (wordIndex > 0) {
                    await pauseBetweenWords(pauseFreq);
                }

                updateStatus(`📝 Escrevendo: "${word}"`, '#3498db');

                // Digitar palavra letra por letra MUITO devagar
                for (let i = 0; i < word.length; i++) {
                    if (!window.comenterRunning) return false;

                    const char = word[i];
                    currentText += char;
                    setFieldText(field, currentText);

                    // DELAY MUITO LONGO entre letras
                    await delayBetweenLetters(speed);

                    // PAUSA OCASIONAL no meio da palavra (como humano distraído)
                    if (i > 0 && Math.random() < 0.1) {
                        updateStatus('💭 Pensando...', '#f39c12');
                        await humanPause(800, 1500);
                    }
                }

                // Espaço após palavra
                if (wordIndex < words.length - 1) {
                    currentText += ' ';
                    setFieldText(field, currentText);
                    await delay(200 + Math.random() * 200); // Delay para espaço
                }

                // PAUSA LONGA após algumas palavras (respirando/pensando)
                if ((wordIndex + 1) % 3 === 0) {
                    await longThinkingPause(pauseFreq);
                }
            }

            // PAUSA FINAL antes de enviar (revisando)
            updateStatus('👀 Revisando o texto...', '#3498db');
            await humanPause(3000, 6000);

            // 4. Enviar
            updateStatus('📤 Enviando...', '#3498db');
            const sent = await humanSend(field);
            
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

    async function delayBetweenLetters(speed) {
        // DELAYS MUITO MAIS LONGOS entre letras
        switch(speed) {
            case 'verySlow':
                await delay(200 + Math.random() * 200); // 200-400ms
                break;
            case 'slow':
                await delay(150 + Math.random() * 150); // 150-300ms  
                break;
            case 'normal':
                await delay(100 + Math.random() * 100); // 100-200ms
                break;
            default:
                await delay(150 + Math.random() * 150);
        }
    }

    async function pauseBetweenWords(pauseFreq) {
        // Pausas entre palavras
        switch(pauseFreq) {
            case 'frequent':
                if (Math.random() < 0.7) { // 70% de chance de pausa
                    await humanPause(500, 1200);
                }
                break;
            case 'normal':
                if (Math.random() < 0.4) { // 40% de chance de pausa
                    await humanPause(400, 800);
                }
                break;
            case 'rare':
                if (Math.random() < 0.2) { // 20% de chance de pausa
                    await humanPause(300, 600);
                }
                break;
        }
    }

    async function longThinkingPause(pauseFreq) {
        // Pausas longas para "pensar/respirar"
        switch(pauseFreq) {
            case 'frequent':
                updateStatus('💭 Pensando no que escrever...', '#f39c12');
                await humanPause(2000, 4000);
                break;
            case 'normal':
                if (Math.random() < 0.6) {
                    updateStatus('💭 Pensando...', '#f39c12');
                    await humanPause(1500, 3000);
                }
                break;
            case 'rare':
                if (Math.random() < 0.3) {
                    updateStatus('💭 Pensando...', '#f39c12');
                    await humanPause(1000, 2000);
                }
                break;
        }
    }

    async function verySlowFieldPreparation(field) {
        // Preparação MUITO lenta do campo
        updateStatus('👆 Clicando no campo...', '#3498db');
        
        await humanPause(1000, 2000);
        field.click();
        await humanPause(800, 1500);
        
        field.focus();
        await humanPause(600, 1200);
        
        // Limpar campo BEM devagar (como humano)
        const currentText = getFieldText(field);
        if (currentText && currentText.length > 0) {
            updateStatus('⌫ Apagando texto anterior...', '#3498db');
            // Simular humano apagando devagar
            for (let i = 0; i < currentText.length; i++) {
                if (!window.comenterRunning) return;
                await delay(80 + Math.random() * 60); // Backspace lento
            }
            setFieldText(field, '');
            await humanPause(500, 1000);
        }
    }

    async function humanSend(field) {
        // Tentar botão de enviar
        const buttonSent = await findAndClickSendButton();
        if (buttonSent) return true;
        
        // Tentar Enter
        const enterSent = await pressEnter(field);
        return enterSent;
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
                        await humanPause(500, 1000);
                        button.click();
                        await humanPause(1500, 3000);
                        return true;
                    }
                }
            } catch (error) {
                continue;
            }
        }
        return false;
    }

    async function pressEnter(field) {
        try {
            await humanPause(800, 1500);
            
            const enterEvent = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true
            });
            
            field.dispatchEvent(enterEvent);
            
            return true;
        } catch (error) {
            return false;
        }
    }

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

    async function humanPause(min, max) {
        const pauseTime = min + Math.random() * (max - min);
        await delay(pauseTime);
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

    console.log('🚀 COMENTER PRO - Velocidade humana MUITO lenta ativada!');
})();
