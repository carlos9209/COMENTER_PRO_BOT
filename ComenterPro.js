// COMENTER PRO BOT - Versão SUPER SIMPLES CORRIGIDA
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
                        <div style="color: #bdc3c7; font-size: 10px;">TEXTO EXATO - SEM MISTURAS - CORRIGIDO</div>
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
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">🎯 Método:</label>
                        <select id="typingMethod" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="exact">TEXTO EXATO (RECOMENDADO)</option>
                            <option value="simple">Simples</option>
                        </select>
                    </div>

                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">🔒 Segurança:</label>
                        <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                            <label style="font-size: 11px; display: flex; align-items: center;">
                                <input type="checkbox" id="exactText" checked> Texto EXATO
                            </label>
                            <label style="font-size: 11px; display: flex; align-items: center;">
                                <input type="checkbox" id="noMistake" checked> Sem erros
                            </label>
                        </div>
                    </div>
                </div>

                <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">💬 Mensagens</h3>
                    <textarea id="comenterMessages" rows="4" placeholder="Digite cada mensagem em uma linha"
                        style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white; resize: vertical; font-size: 12px;">Olá
Teste
Mensagem simples</textarea>
                    <div style="color: #bdc3c7; font-size: 10px; margin-top: 5px;">💡 Texto inserido EXATAMENTE como está</div>
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
                    ✅ Texto EXATO - PRONTO - CORRIGIDO
                </div>

                <div style="text-align: center; margin-top: 15px; padding-top: 10px; border-top: 1px solid #34495e;">
                    <p style="color: #7f8c8d; font-size: 10px; margin: 0;">
                        F2: Ocultar/Mostrar | SEM MISTURAS | TEXTO COMPLETO
                    </p>
                </div>
            </div>

            <div id="minimizedPanel" style="display: none; text-align: center; padding: 10px;">
                <div style="color: #3498db; font-weight: bold; font-size: 14px;">COMENTER PRO</div>
                <div style="color: #bdc3c7; font-size: 10px; margin: 5px 0;" id="minimizedStatus">Texto exato corrigido</div>
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

    // ========== SISTEMA DE TEXTO EXATO CORRIGIDO ==========
    window.startComenterBot = async function() {
        if (window.comenterRunning) {
            updateStatus('⚠️ Bot já está rodando!', '#f39c12');
            return;
        }

        const interval = parseInt(document.getElementById('comenterInterval').value) * 60000;
        const messages = document.getElementById('comenterMessages').value.split('\n').filter(m => m.trim());

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
            
            const success = await exactTextInsert(message);

            if (success) {
                window.messageCount++;
                updateStatus(`✅ ${window.messageCount} comentários enviados`, '#27ae60');
                
                if (window.isMinimized) {
                    const minimizedText = document.getElementById('minimizedStatus');
                    if (minimizedText) {
                        minimizedText.textContent = `${window.messageCount} enviados`;
                    }
                }
            } else {
                updateStatus(`❌ Falha no comentário ${messageIndex + 1}`, '#e74c3c');
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

    // ========== INSERÇÃO DE TEXTO EXATO CORRIGIDA ==========
    async function exactTextInsert(message) {
        try {
            console.log('=== INICIANDO INSERÇÃO EXATA CORRIGIDA ===');
            console.log('Mensagem original:', message);
            
            // 1. Encontrar campo
            const field = await findCommentField();
            if (!field) {
                updateStatus('❌ Campo não encontrado!', '#e74c3c');
                return false;
            }

            // 2. Foco COMPLETO no campo
            field.focus();
            field.click(); // Clica também para garantir foco
            await delay(300);

            // 3. LIMPEZA COMPLETA E CORRETA
            console.log('Limpando campo...');
            if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
                // Método correto para limpar
                field.select(); // Seleciona todo o texto
                document.execCommand('delete'); // Deleta seleção
                field.value = ''; // Garante que está vazio
                
                // Dispara eventos de limpeza
                field.dispatchEvent(new Event('input', { bubbles: true }));
                field.dispatchEvent(new Event('change', { bubbles: true }));
            } else if (field.isContentEditable) {
                // Para campos contenteditable
                field.textContent = '';
                field.innerHTML = ''; // Limpa HTML também
            }
            
            await delay(200);

            // 4. INSERIR TEXTO EXATO - MÚLTIPLOS MÉTODOS
            console.log('Inserindo texto EXATO...');
            
            let insertionSuccess = false;
            
            // Tenta método principal primeiro
            insertionSuccess = await insertTextMethod1(field, message);
            
            // Se falhar, tenta método alternativo
            if (!insertionSuccess) {
                console.log('Método 1 falhou, tentando método 2...');
                insertionSuccess = await insertTextMethod2(field, message);
            }
            
            // Se ainda falhar, tenta digitação
            if (!insertionSuccess) {
                console.log('Método 2 falhou, tentando digitação...');
                insertionSuccess = await simulateTyping(field, message);
            }

            // 5. VERIFICAÇÃO FINAL
            const finalText = getFieldText(field);
            console.log('Texto final inserido:', finalText);
            console.log('Texto esperado:', message);
            
            if (finalText !== message) {
                console.log('❌ Falha na inserção!');
                return false;
            }

            // 6. Enviar
            console.log('📤 Enviando comentário...');
            const sent = await advancedSend(field);
            
            if (sent) {
                console.log('✅ Comentário enviado com sucesso!');
                return true;
            }
            
            return false;
            
        } catch (error) {
            console.error('❌ Erro crítico:', error);
            return false;
        }
    }

    // MÉTODO 1: Inserção direta com eventos
    async function insertTextMethod1(field, message) {
        try {
            if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
                field.value = message;
            } else if (field.isContentEditable) {
                field.textContent = message;
            }
            
            // Dispara TODOS os eventos necessários
            const events = ['input', 'change', 'keydown', 'keyup', 'keypress', 'focus', 'blur'];
            for (const eventType of events) {
                field.dispatchEvent(new Event(eventType, { bubbles: true }));
                await delay(10);
            }
            
            await delay(200);
            return getFieldText(field) === message;
        } catch (error) {
            return false;
        }
    }

    // MÉTODO 2: Usando execCommand (para campos rich text)
    async function insertTextMethod2(field, message) {
        try {
            // Foca no campo
            field.focus();
            await delay(200);
            
            // Seleciona todo o conteúdo
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(field);
            selection.removeAllRanges();
            selection.addRange(range);
            
            // Usa execCommand para inserir (funciona em muitos editores)
            document.execCommand('insertText', false, message);
            
            await delay(300);
            
            return getFieldText(field) === message;
        } catch (error) {
            return false;
        }
    }

    // MÉTODO 3: Simulação de digitação caractere por caractere
    async function simulateTyping(field, text) {
        try {
            // Limpa o campo novamente
            if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
                field.value = '';
            } else {
                field.textContent = '';
            }
            
            await delay(100);

            // Insere caractere por caractere (mais lento mas mais confiável)
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                
                if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
                    field.value += char;
                } else {
                    field.textContent += char;
                }
                
                // Dispara evento de input a cada caractere
                field.dispatchEvent(new Event('input', { bubbles: true }));
                await delay(30); // Pequeno delay entre caracteres
            }
            
            await delay(200);
            return getFieldText(field) === text;
        } catch (error) {
            return false;
        }
    }

    // ========== FUNÇÕES BÁSICAS CORRIGIDAS ==========
    function getFieldText(field) {
        if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
            return field.value || '';
        } else if (field.isContentEditable) {
            return field.textContent || field.innerText || '';
        }
        return '';
    }

    // Sistema de envio melhorado
    async function advancedSend(field) {
        // Tentar vários métodos de envio
        
        // Método 1: Botão de enviar
        const buttonSent = await findAndClickSendButton();
        if (buttonSent) return true;
        
        // Método 2: Enter com eventos completos
        const enterSent = await simulateCompleteEnter(field);
        if (enterSent) return true;
        
        // Método 3: Submit do formulário
        const formSent = await findAndSubmitForm(field);
        if (formSent) return true;
        
        // Método 4: Click no campo e Enter
        const clickEnterSent = await clickAndEnter(field);
        if (clickEnterSent) return true;
        
        return false;
    }

    // Enter melhorado
    async function simulateCompleteEnter(field) {
        try {
            await delay(500);
            
            // Dispara todos os eventos do Enter
            const events = ['keydown', 'keypress', 'keyup'];
            for (const eventType of events) {
                const event = new KeyboardEvent(eventType, {
                    key: 'Enter',
                    code: 'Enter',
                    keyCode: 13,
                    which: 13,
                    bubbles: true,
                    cancelable: true
                });
                field.dispatchEvent(event);
                await delay(50);
            }
            
            await delay(1000);
            return true;
        } catch (error) {
            return false;
        }
    }

    // Click e Enter alternativo
    async function clickAndEnter(field) {
        try {
            field.click();
            await delay(300);
            
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

    // Encontrar e submeter formulário
    async function findAndSubmitForm(field) {
        try {
            let element = field;
            // Encontrar o formulário pai
            while (element && element !== document.body) {
                if (element.tagName === 'FORM') {
                    element.submit();
                    await delay(1500);
                    return true;
                }
                element = element.parentElement;
            }
            return false;
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
            '.public-DraftEditor-content',
            '[data-text="true"]',
            '.editable',
            '.richEditor'
        ];

        for (const selector of selectors) {
            const elements = document.querySelectorAll(selector);
            for (const element of elements) {
                if (isVisible(element) && isEditableElement(element)) {
                    console.log('Campo encontrado:', selector, element);
                    return element;
                }
            }
        }
        
        // Tentar encontrar por atributos
        const elementsByAttr = document.querySelectorAll('[contenteditable], [role="textbox"], [data-mentionable]');
        for (const element of elementsByAttr) {
            if (isVisible(element) && isEditableElement(element)) {
                console.log('Campo encontrado por atributo:', element);
                return element;
            }
        }
        
        return null;
    }

    async function findAndClickSendButton() {
        const buttonSelectors = [
            'button[type="submit"]',
            'button:contains("Enviar")',
            'button:contains("Comment")',
            'button:contains("Post")',
            'button:contains("Publicar")',
            'button:contains("Send")',
            'button[aria-label*="comment"]',
            'button[aria-label*="post"]',
            'button[aria-label*="send"]',
            '.comment-submit',
            '.post-button',
            '.send-button'
        ];

        for (const selector of buttonSelectors) {
            try {
                // Para seletores com :contains (jQuery-like)
                if (selector.includes(':contains(')) {
                    const text = selector.match(/:contains\("([^"]+)"\)/)[1];
                    const buttons = document.querySelectorAll('button');
                    for (const button of buttons) {
                        if (isVisible(button) && !button.disabled && 
                            (button.textContent.includes(text) || button.innerText.includes(text))) {
                            button.click();
                            await delay(1500);
                            return true;
                        }
                    }
                } else {
                    // Para seletores CSS normais
                    const buttons = document.querySelectorAll(selector);
                    for (const button of buttons) {
                        if (isVisible(button) && !button.disabled) {
                            button.click();
                            await delay(1500);
                            return true;
                        }
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
               element.getAttribute('role') === 'textbox' ||
               element.classList.contains('editable');
    }

    function isVisible(element) {
        if (!element) return false;
        const style = window.getComputedStyle(element);
        return style.display !== 'none' && 
               style.visibility !== 'hidden' && 
               element.offsetWidth > 0 && 
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

    console.log('🚀 COMENTER PRO - Texto EXATO CORRIGIDO ativado!');
})();
