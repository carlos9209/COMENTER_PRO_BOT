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
                        <div style="color: #bdc3c7; font-size: 10px;">Digitação humana REAL</div>
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
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">⚙️ Configurações Humanas</h3>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">⏱️ Intervalo (segundos):</label>
                        <input type="number" id="comenterInterval" value="45" min="30" max="120" 
                            style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                    </div>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">👤 Tipo de digitador:</label>
                        <select id="humanType" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="beginner">Iniciante (muitos erros)</option>
                            <option value="normal" selected>Normal (alguns erros)</option>
                            <option value="expert">Experiente (poucos erros)</option>
                        </select>
                    </div>

                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">📖 Tamanho do "caderno":</label>
                        <select id="notebookSize" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="small">Pequeno (2-3 palavras)</option>
                            <option value="medium" selected>Médio (4-6 palavras)</option>
                            <option value="large">Grande (7-10 palavras)</option>
                        </select>
                    </div>
                </div>

                <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">💬 Mensagens</h3>
                    <textarea id="comenterMessages" rows="4" placeholder="Digite cada mensagem em uma linha"
                        style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white; resize: vertical; font-size: 12px;">Gostei muito deste conteúdo! Parabéns pelo trabalho 👏
Excelente explicação, muito obrigado por compartilhar 😊
Que vídeo incrível! Aprendi bastante com suas dicas 👍</textarea>
                    <div style="color: #bdc3c7; font-size: 10px; margin-top: 5px;">💡 O bot vai "ler do caderno" e digitar como humano</div>
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
                    👀 Bot vai "ler do caderno" e digitar como humano real
                </div>

                <div style="text-align: center; margin-top: 15px; padding-top: 10px; border-top: 1px solid #34495e;">
                    <p style="color: #7f8c8d; font-size: 10px; margin: 0;">
                        F2: Ocultar/Mostrar | Digitação humana autêntica
                    </p>
                </div>
            </div>

            <div id="minimizedPanel" style="display: none; text-align: center; padding: 10px;">
                <div style="color: #3498db; font-weight: bold; font-size: 14px;">COMENTER PRO</div>
                <div style="color: #bdc3c7; font-size: 10px; margin: 5px 0;" id="minimizedStatus">Lendo do caderno...</div>
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

    // ========== DIGITAÇÃO HUMANA REAL ==========
    window.startComenterBot = async function() {
        if (window.comenterRunning) {
            updateStatus('⚠️ Bot já está rodando!', '#f39c12');
            return;
        }

        const interval = parseInt(document.getElementById('comenterInterval').value) * 1000;
        const messages = document.getElementById('comenterMessages').value.split('\n').filter(m => m.trim());
        const humanType = document.getElementById('humanType').value;
        const notebookSize = document.getElementById('notebookSize').value;

        if (messages.length === 0) {
            updateStatus('❌ Digite pelo menos uma mensagem!', '#e74c3c');
            return;
        }

        window.comenterRunning = true;
        window.messageCount = 0;

        updateStatus(`🚀 Bot iniciado! ${messages.length} mensagens`, '#27ae60');
        updateStatus('📖 Lendo do "caderno"...', '#3498db');

        let messageIndex = 0;

        window.comenterIntervalId = setInterval(async () => {
            if (!window.comenterRunning) return;

            const message = messages[messageIndex % messages.length];
            
            const success = await humanLikeTyping(message, humanType, notebookSize);

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

    // ========== COMPORTAMENTO HUMANO REAL ==========
    async function humanLikeTyping(fullMessage, humanType, notebookSize) {
        try {
            // 1. Encontrar campo
            const field = await findCommentField();
            if (!field) {
                updateStatus('❌ Campo não encontrado!', '#e74c3c');
                return false;
            }

            // 2. Preparar campo como humano
            await humanFieldPreparation(field);
            if (!window.comenterRunning) return false;

            // 3. "LER DO CADERNO" E DIGITAR
            updateStatus('👀 Lendo do "caderno"...', '#3498db');
            await delay(1000 + Math.random() * 1000); // Tempo lendo

            const chunks = getNotebookChunks(fullMessage, notebookSize);
            let currentText = '';

            for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex++) {
                if (!window.comenterRunning) return false;

                const chunk = chunks[chunkIndex];
                updateStatus(`📝 Lendo: "${chunk}"`, '#3498db');
                
                // Tempo "lendo" o pedaço do caderno
                await delay(500 + Math.random() * 700);

                // Digitar o chunk com erros humanos
                const typedChunk = await typeWithHumanErrors(chunk, humanType, field, currentText);
                currentText += typedChunk;

                // Olhar para o "caderno" de novo
                if (chunkIndex < chunks.length - 1) {
                    updateStatus('👀 Voltando a ler...', '#3498db');
                    await delay(300 + Math.random() * 500);
                }
            }

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

    function getNotebookChunks(text, size) {
        // Divide o texto em "pedaços do caderno"
        const words = text.split(' ');
        let chunkSize;
        
        switch(size) {
            case 'small': chunkSize = 2; break;
            case 'medium': chunkSize = 4; break;
            case 'large': chunkSize = 6; break;
            default: chunkSize = 4;
        }

        const chunks = [];
        for (let i = 0; i < words.length; i += chunkSize) {
            const chunk = words.slice(i, i + chunkSize).join(' ');
            chunks.push(chunk);
        }
        
        return chunks;
    }

    async function typeWithHumanErrors(chunk, humanType, field, currentText) {
        const words = chunk.split(' ');
        let typedResult = '';
        let errorStats = getErrorStats(humanType);

        for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
            if (!window.comenterRunning) return typedResult;

            const word = words[wordIndex];
            let typedWord = '';

            // Digitar palavra com possíveis erros
            for (let i = 0; i < word.length; i++) {
                if (!window.comenterRunning) return typedResult;

                let char = word[i];
                
                // Chance de erro de digitação
                if (Math.random() < errorStats.mistakeChance) {
                    char = getTypo(char);
                    updateStatus('⌨️ Corrigindo erro...', '#f39c12');
                    
                    // Digitar caractere errado
                    currentText += char;
                    setFieldText(field, currentText);
                    await delay(80 + Math.random() * 50);
                    
                    // Corrigir o erro (como humano faria)
                    await delay(200 + Math.random() * 200);
                    currentText = currentText.slice(0, -1); // Backspace
                    setFieldText(field, currentText);
                    await delay(100 + Math.random() * 50);
                    
                    // Digitar caractere correto
                    char = word[i];
                }

                currentText += char;
                typedWord += char;
                setFieldText(field, currentText);
                
                // Delay entre letras (humano)
                await delay(60 + Math.random() * 40);
            }

            typedResult += (wordIndex === 0 ? '' : ' ') + typedWord;

            // Espaço entre palavras
            if (wordIndex < words.length - 1) {
                currentText += ' ';
                setFieldText(field, currentText);
                await delay(100 + Math.random() * 50);
            }

            // Pausa entre palavras (olhando para teclado/tela)
            if (Math.random() < 0.3) {
                await delay(200 + Math.random() * 300);
            }
        }

        return typedResult;
    }

    function getErrorStats(humanType) {
        switch(humanType) {
            case 'beginner': 
                return { mistakeChance: 0.08, correctionDelay: 300 };
            case 'normal': 
                return { mistakeChance: 0.04, correctionDelay: 200 };
            case 'expert': 
                return { mistakeChance: 0.02, correctionDelay: 150 };
            default: 
                return { mistakeChance: 0.04, correctionDelay: 200 };
        }
    }

    function getTypo(correctChar) {
        // Gera erros de digitação realistas
        const keyboard = {
            'a': ['q', 's', 'z', 'w'],
            'e': ['w', 'r', 'd', 's'],
            'i': ['u', 'o', 'k', 'j'],
            'o': ['i', 'p', 'l', 'k'],
            's': ['a', 'd', 'w', 'x'],
            'd': ['s', 'f', 'e', 'c'],
            'f': ['d', 'g', 'r', 'v'],
            'g': ['f', 'h', 't', 'b'],
            'h': ['g', 'j', 'y', 'n'],
            'j': ['h', 'k', 'u', 'm'],
            'k': ['j', 'l', 'i', ','],
            'l': ['k', 'ç', 'o', '.'],
        };

        if (keyboard[correctChar]) {
            return keyboard[correctChar][Math.floor(Math.random() * keyboard[correctChar].length)];
        }
        return correctChar; // Se não encontrar, mantém o caractere
    }

    async function humanFieldPreparation(field) {
        // Comportamento humano ao preparar campo
        updateStatus('👆 Clicando no campo...', '#3498db');
        
        // Clicar de forma humana (não precisa ser exato)
        field.click();
        await delay(600 + Math.random() * 400);
        
        // Focar no campo
        field.focus();
        await delay(400 + Math.random() * 300);
        
        // Limpar campo se necessário (como humano faria)
        const currentText = getFieldText(field);
        if (currentText && currentText.length > 0) {
            updateStatus('⌫ Limpando campo...', '#3498db');
            // Simular humano pressionando Backspace
            for (let i = 0; i < currentText.length; i++) {
                if (!window.comenterRunning) return;
                await delay(40 + Math.random() * 30);
            }
            setFieldText(field, '');
            await delay(300 + Math.random() * 200);
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
                        await delay(300 + Math.random() * 200);
                        button.click();
                        await delay(1500);
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
            await delay(500 + Math.random() * 300);
            
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

    console.log('🚀 COMENTER PRO - Digitação humana real ativada!');
})();
