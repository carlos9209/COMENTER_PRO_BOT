// COMENTER PRO BOT - Versão com Limpeza Total Antes de Digitar
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
                        <div style="color: #bdc3c7; font-size: 10px;">LIMPESA TOTAL + DIGITAÇÃO</div>
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
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">⚙️ Configurações</h3>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">⏱️ Intervalo (minutos):</label>
                        <input type="number" id="comenterInterval" value="3" min="2" max="10" 
                            style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                    </div>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">🧹 Limpeza:</label>
                        <select id="cleanMethod" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="aggressive">Agressiva (RECOMENDADO)</option>
                            <option value="normal">Normal</option>
                            <option value="light">Leve</option>
                        </select>
                    </div>

                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">✅ Verificação:</label>
                        <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                            <label style="font-size: 11px; display: flex; align-items: center;">
                                <input type="checkbox" id="preClean" checked> Limpeza ANTES de cada mensagem
                            </label>
                            <label style="font-size: 11px; display: flex; align-items: center;">
                                <input type="checkbox" id="postVerify" checked> Verificar DEPOIS de digitar
                            </label>
                        </div>
                    </div>
                </div>

                <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">💬 Mensagens</h3>
                    <textarea id="comenterMessages" rows="4" placeholder="Digite cada mensagem em uma linha"
                        style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white; resize: vertical; font-size: 12px;">Olá
Teste
Mensagem 3
Última mensagem</textarea>
                    <div style="color: #bdc3c7; font-size: 10px; margin-top: 5px;">💡 Cada mensagem é LIMPA + DIGITADA do zero</div>
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
                    ✅ Limpeza total ativada - PRONTO
                </div>

                <div style="text-align: center; margin-top: 15px; padding-top: 10px; border-top: 1px solid #34495e;">
                    <p style="color: #7f8c8d; font-size: 10px; margin: 0;">
                        F2: Ocultar/Mostrar | LIMPEZA GARANTIDA
                    </p>
                </div>
            </div>

            <div id="minimizedPanel" style="display: none; text-align: center; padding: 10px;">
                <div style="color: #3498db; font-weight: bold; font-size: 14px;">COMENTER PRO</div>
                <div style="color: #bdc3c7; font-size: 10px; margin: 5px 0;" id="minimizedStatus">Limpando + Digitando</div>
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

    // ========== SISTEMA COM LIMPEZA TOTAL ==========
    window.startComenterBot = async function() {
        if (window.comenterRunning) {
            updateStatus('⚠️ Bot já está rodando!', '#f39c12');
            return;
        }

        const interval = parseInt(document.getElementById('comenterInterval').value) * 60000;
        const messages = document.getElementById('comenterMessages').value.split('\n').filter(m => m.trim());
        const cleanMethod = document.getElementById('cleanMethod').value;

        if (messages.length === 0) {
            updateStatus('❌ Digite pelo menos uma mensagem!', '#e74c3c');
            return;
        }

        window.comenterRunning = true;
        window.messageCount = 0;

        updateStatus(`🚀 Bot iniciado! ${messages.length} mensagens`, '#27ae60');

        let messageIndex = 0;

        window.comenterIntervalId = setInterval(async () => {
            if (!window.comenterRunning) return;

            const message = messages[messageIndex % messages.length];
            
            const success = await cleanAndType(message, cleanMethod);

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

    // ========== LIMPEZA TOTAL + DIGITAÇÃO ==========
    async function cleanAndType(message, cleanMethod) {
        try {
            updateStatus('🔍 Procurando campo...', '#3498db');
            
            // 1. Encontrar campo NOVO a cada mensagem
            const field = await findCommentField();
            if (!field) {
                updateStatus('❌ Campo não encontrado!', '#e74c3c');
                return false;
            }

            // 2. Foco COMPLETO no campo
            await completeFocus(field);
            if (!window.comenterRunning) return false;

            // 3. LIMPEZA TOTAL OBRIGATÓRIA
            updateStatus('🧹 LIMPANDO campo...', '#f39c12');
            const cleanSuccess = await completeClean(field, cleanMethod);
            
            if (!cleanSuccess) {
                updateStatus('❌ Falha na limpeza', '#e74c3c');
                return false;
            }

            // 4. VERIFICAR se campo está VAZIO
            const currentText = getFieldText(field);
            if (currentText.length > 0) {
                updateStatus('🔄 Campo não vazio, limpando novamente...', '#f39c12');
                await completeClean(field, 'aggressive');
            }

            // 5. DIGITAR mensagem NOVA do ZERO
            updateStatus('⌨️ Digitando MENSAGEM NOVA...', '#3498db');
            await delay(500);

            const typeSuccess = await freshType(field, message);
            
            if (!typeSuccess) {
                updateStatus('❌ Falha na digitação', '#e74c3c');
                return false;
            }

            // 6. VERIFICAÇÃO FINAL
            if (document.getElementById('postVerify').checked) {
                const finalText = getFieldText(field);
                if (finalText !== message) {
                    updateStatus('🔄 Texto errado, corrigindo...', '#f39c12');
                    await completeClean(field, 'aggressive');
                    await freshType(field, message);
                }
            }

            // 7. Enviar
            updateStatus('📤 Enviando...', '#3498db');
            const sent = await realSend(field);
            
            if (sent) {
                updateStatus('✅ Comentário enviado!', '#27ae60');
                return true;
            }
            
            return false;
            
        } catch (error) {
            console.error('Erro:', error);
            updateStatus('❌ Erro no processo', '#e74c3c');
            return false;
        }
    }

    // ========== LIMPEZA COMPLETA ==========
    async function completeClean(field, method) {
        try {
            // MÉTODO AGRESSIVO (RECOMENDADO)
            if (method === 'aggressive') {
                // 1. Selecionar TODO o texto
                field.select();
                field.setSelectionRange(0, 99999);
                
                // 2. Limpar de MÚLTIPLAS formas
                if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
                    field.value = '';
                    field.defaultValue = '';
                }
                
                if (field.isContentEditable) {
                    field.textContent = '';
                    field.innerHTML = '';
                }
                
                // 3. Disparar TODOS os eventos possíveis
                const events = ['select', 'input', 'change', 'keydown', 'keyup', 'keypress', 'cut', 'copy'];
                events.forEach(eventType => {
                    try {
                        if (eventType.startsWith('key')) {
                            const event = new KeyboardEvent(eventType, { bubbles: true });
                            field.dispatchEvent(event);
                        } else {
                            const event = new Event(eventType, { bubbles: true });
                            field.dispatchEvent(event);
                        }
                    } catch (e) {}
                });
                
                // 4. Backspace para garantir
                await simulateBackspace(field);
                
            } else if (method === 'normal') {
                // Método normal
                if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
                    field.value = '';
                } else if (field.isContentEditable) {
                    field.textContent = '';
                }
                triggerInputEvents(field);
                
            } else {
                // Método leve
                if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
                    field.value = '';
                } else if (field.isContentEditable) {
                    field.textContent = '';
                }
            }
            
            await delay(300);
            return true;
            
        } catch (error) {
            console.error('Erro na limpeza:', error);
            return false;
        }
    }

    async function simulateBackspace(field) {
        // Simular Backspace para limpar
        const backspaceEvent = new KeyboardEvent('keydown', {
            key: 'Backspace',
            code: 'Backspace',
            keyCode: 8,
            which: 8,
            bubbles: true
        });
        field.dispatchEvent(backspaceEvent);
        await delay(50);
    }

    // ========== DIGITAÇÃO FRESCA ==========
    async function freshType(field, message) {
        try {
            // INSERÇÃO DIRETA e SIMPLES
            if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
                field.value = message;
            } else if (field.isContentEditable) {
                field.textContent = message;
            }
            
            // Apenas eventos ESSENCIAIS
            triggerInputEvents(field);
            await delay(200);
            
            return true;
        } catch (error) {
            console.error('Erro na digitação:', error);
            return false;
        }
    }

    function triggerInputEvents(field) {
        // Apenas eventos necessários
        const inputEvent = new Event('input', { bubbles: true });
        field.dispatchEvent(inputEvent);
        
        const changeEvent = new Event('change', { bubbles: true });
        field.dispatchEvent(changeEvent);
    }

    // ========== FUNÇÕES AUXILIARES ==========
    async function completeFocus(field) {
        // Foco COMPLETO no campo
        field.focus();
        field.click();
        
        const focusEvent = new FocusEvent('focus', { bubbles: true });
        field.dispatchEvent(focusEvent);
        
        await delay(400);
    }

    function getFieldText(field) {
        if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
            return field.value || '';
        } else if (field.isContentEditable) {
            return field.textContent || field.innerText || '';
        }
        return '';
    }

    async function realSend(field) {
        // Tentar botão primeiro
        const buttonSent = await findAndClickSendButton();
        if (buttonSent) return true;
        
        // Tentar Enter
        return await simulateEnterKey(field);
    }

    async function simulateEnterKey(field) {
        try {
            await delay(500);
            
            const enterEvent = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true
            });
            field.dispatchEvent(enterEvent);
            
            await delay(1000);
            return true;
        } catch (error) {
            return false;
        }
    }

    async function findCommentField() {
        const selectors = [
            'textarea',
            'input[type="text"]',
            'input[type="search"]',
            '[contenteditable="true"]',
            '[role="textbox"]',
            '.comment-input',
            '.comment-field',
            '[data-testid="tweetTextarea"]',
            '#comment',
            'input:not([type])'
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

    async function findAndClickSendButton() {
        const buttonSelectors = [
            'button[type="submit"]',
            'input[type="submit"]',
            'button:contains("Enviar")',
            'button:contains("Comment")',
            'button:contains("Post")',
            'button:contains("Send")',
            '[data-testid="tweetButton"]',
            'button[class*="comment"]',
            'button[class*="send"]',
            'button[class*="post"]'
        ];

        for (const selector of buttonSelectors) {
            try {
                const buttons = document.querySelectorAll(selector);
                for (const button of buttons) {
                    if (isVisible(button) && !button.disabled) {
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

    function isEditableElement(element) {
        return element.tagName === 'TEXTAREA' || 
               element.tagName === 'INPUT' || 
               element.isContentEditable ||
               element.getAttribute('role') === 'textbox';
    }

    function isVisible(element) {
        return element.offsetWidth > 0 && 
               element.offsetHeight > 0 &&
               element.style.display !== 'none' &&
               element.style.visibility !== 'hidden';
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

    console.log('🚀 COMENTER PRO - Limpeza TOTAL ativada!');
})();
