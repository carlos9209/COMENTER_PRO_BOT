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

    // Criar overlay
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
        ">
            <!-- Cabeçalho com botões de controle -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #34495e;">
                <div style="display: flex; align-items: center;">
                    <div style="font-size: 20px; margin-right: 10px;">💬</div>
                    <div>
                        <div style="color: #3498db; font-weight: bold; font-size: 16px;">COMENTER PRO</div>
                        <div style="color: #bdc3c7; font-size: 10px;">Clique e arraste para mover</div>
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
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">⏱️ Intervalo (segundos):</label>
                        <input type="number" id="comenterInterval" value="3" min="1" max="60" 
                            style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                    </div>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">🎯 Modo de Envio:</label>
                        <select id="comenterMode" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="auto">Auto-detect (Recomendado)</option>
                            <option value="enter">Tecla ENTER</option>
                            <option value="button">Botão Enviar</option>
                        </select>
                    </div>
                </div>

                <!-- Seção de Mensagens -->
                <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">💬 Mensagens</h3>
                    <textarea id="comenterMessages" rows="4" placeholder="Digite cada mensagem em uma linha..."
                        style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white; resize: vertical; font-size: 12px;">Comentário automático do COMENTER PRO
Segunda mensagem automática
Terceiro comentário</textarea>
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
                        Ctrl+Q: Transparência | Ctrl+W: Minimizar | Ctrl+E: Fechar
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

    // ========== FUNÇÕES DO BOT ==========
    window.startComenterBot = function() {
        if (window.comenterRunning) {
            updateStatus('⚠️ Bot já está rodando!', '#f39c12');
            return;
        }

        const interval = parseInt(document.getElementById('comenterInterval').value) * 1000;
        const messages = document.getElementById('comenterMessages').value.split('\n').filter(m => m.trim());
        const mode = document.getElementById('comenterMode').value;

        if (messages.length === 0) {
            updateStatus('❌ Digite pelo menos uma mensagem!', '#e74c3c');
            return;
        }

        window.comenterRunning = true;
        window.messageCount = 0;

        updateStatus(`🚀 Bot iniciado! ${messages.length} mensagens | ${interval/1000}s intervalo`, '#27ae60');
        updateStatus('⏳ Aguardando 3 segundos para posicionar...', '#3498db');

        let messageIndex = 0;

        setTimeout(() => {
            window.comenterIntervalId = setInterval(() => {
                if (!window.comenterRunning) return;

                const message = messages[messageIndex % messages.length];
                const success = sendCommentAutomatically(message, mode);

                if (success) {
                    window.messageCount++;
                    updateStatus(`📤 ${window.messageCount} mensagens enviadas | "${message.substring(0, 20)}..."`, '#27ae60');
                    
                    // Atualizar painel minimizado
                    if (window.isMinimized) {
                        const minimizedText = document.getElementById('minimizedStatus');
                        if (minimizedText) {
                            minimizedText.textContent = `${window.messageCount} msgs enviadas`;
                        }
                    }
                } else {
                    updateStatus('❌ Clique no campo de comentário!', '#e74c3c');
                }

                messageIndex++;
            }, interval);
        }, 3000);
    };

    window.stopComenterBot = function() {
        window.comenterRunning = false;
        if (window.comenterIntervalId) {
            clearInterval(window.comenterIntervalId);
            window.comenterIntervalId = null;
        }
        updateStatus(`⏹️ Bot parado! ${window.messageCount} mensagens enviadas`, '#e74c3c');
        
        // Atualizar painel minimizado
        if (window.isMinimized) {
            const minimizedText = document.getElementById('minimizedStatus');
            if (minimizedText) {
                minimizedText.textContent = `Parado - ${window.messageCount} msgs`;
            }
        }
    };

    // ========== FUNÇÕES AUXILIARES ==========
    function sendCommentAutomatically(message, mode) {
        const activeElement = document.activeElement;
        
        if (!activeElement || !isEditableElement(activeElement)) {
            const commentFields = document.querySelectorAll('textarea, input[type="text"], [contenteditable="true"]');
            if (commentFields.length > 0) {
                commentFields[0].focus();
            } else {
                return false;
            }
        }

        const currentElement = document.activeElement;
        
        clearElement(currentElement);
        typeMessage(currentElement, message);
        
        return sendMessage(currentElement, mode);
    }

    function isEditableElement(element) {
        return element.tagName === 'TEXTAREA' || 
               element.tagName === 'INPUT' || 
               element.isContentEditable ||
               element.getAttribute('contenteditable') === 'true';
    }

    function clearElement(element) {
        if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
            element.value = '';
        } else {
            element.textContent = '';
        }
        triggerEvent(element, 'input');
    }

    function typeMessage(element, message) {
        if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
            element.value = message;
        } else {
            element.textContent = message;
        }
        triggerEvent(element, 'input');
    }

    function sendMessage(element, mode) {
        let sent = false;

        if (mode === 'enter' || mode === 'auto') {
            const enterEvent = new KeyboardEvent('keydown', {
                key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true
            });
            element.dispatchEvent(enterEvent);
            
            const form = element.closest('form');
            if (form) {
                form.dispatchEvent(new Event('submit', { bubbles: true }));
                sent = true;
            }
        }

        if ((mode === 'button' || mode === 'auto') && !sent) {
            const buttons = document.querySelectorAll('button, [type="submit"], [role="button"]');
            const sendButton = Array.from(buttons).find(btn => {
                const text = (btn.textContent || btn.value || btn.innerHTML || '').toLowerCase();
                return text.includes('enviar') || text.includes('comment') || 
                       text.includes('post') || text.includes('publicar') ||
                       text.includes('send') || text.includes('submit') ||
                       text.includes('tw-tweet') || text.includes('public');
            });
            
            if (sendButton) {
                sendButton.click();
                sent = true;
            }
        }

        return sent;
    }

    function triggerEvent(element, eventName) {
        const event = new Event(eventName, { bubbles: true });
        element.dispatchEvent(event);
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

    // Fechar clicando no overlay (mas não no panel)
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
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
    console.log('🎯 Controles: F2 (Mostrar/Ocultar) | Ctrl+Q (Transparência) | Ctrl+W (Minimizar) | Ctrl+E (Fechar)');
})();
