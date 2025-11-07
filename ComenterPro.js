// COMENTER PRO BOT - Remote Bookmarklet Version
// GitHub: https://github.com/carlos9209/COMENTER_PRO_BOT

(function() {
    if (window.comenterProLoaded) {
        alert('COMENTER PRO já está carregado!');
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
        background: rgba(0,0,0,0.5);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const botUI = document.createElement('div');
    botUI.innerHTML = `
        <div id="comenterProPanel" style="
            background: #2c3e50;
            color: white;
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 0 30px rgba(0,0,0,0.7);
            width: 90%;
            max-width: 500px;
            font-family: Arial, sans-serif;
            border: 2px solid #3498db;
            max-height: 90vh;
            overflow-y: auto;
        ">
            <div style="text-align: center; margin-bottom: 20px; border-bottom: 1px solid #34495e; padding-bottom: 15px;">
                <div style="font-size: 24px; margin-bottom: 5px;">💬</div>
                <h2 style="color: #3498db; margin: 0; font-size: 18px;">COMENTER PRO BOT</h2>
                <p style="color: #bdc3c7; font-size: 11px; margin: 5px 0;">Solução Profissional de Automação</p>
            </div>
            
            <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">🎯 Configuração</h3>
                
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

            <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">💬 Mensagens</h3>
                <textarea id="comenterMessages" rows="4" placeholder="Digite cada mensagem em uma linha..."
                    style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white; resize: vertical; font-size: 12px;">Comentário automático do COMENTER PRO
Segunda mensagem automática
Terceiro comentário</textarea>
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
                ⚡ Pronto para usar! Configure as opções acima.
            </div>

            <div style="text-align: center; margin-top: 15px; padding-top: 10px; border-top: 1px solid #34495e;">
                <p style="color: #7f8c8d; font-size: 10px; margin: 0;">
                    COMENTER PRO ® 2024 | Pressione ESC para fechar
                </p>
            </div>
        </div>
    `;
    
    overlay.appendChild(botUI);
    document.body.appendChild(overlay);

    window.comenterRunning = false;
    window.comenterIntervalId = null;
    window.messageCount = 0;

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
    };

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

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            window.stopComenterBot();
            overlay.remove();
            window.comenterProLoaded = false;
        }
    });

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            window.stopComenterBot();
            overlay.remove();
            window.comenterProLoaded = false;
        }
    });

    console.log('🚀 COMENTER PRO carregado com sucesso!');
})();
