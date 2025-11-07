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
                        <div style="color: #bdc3c7; font-size: 10px;">Digitação humana ultra-realista</div>
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
                        <input type="number" id="comenterInterval" value="20" min="15" max="120" 
                            style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                    </div>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">👤 Personalidade de digitação:</label>
                        <select id="typingPersonality" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="slow">Digitador Cuidadoso (mais lento)</option>
                            <option value="normal" selected>Digitador Normal (recomendado)</option>
                            <option value="fast">Digitador Rápido</option>
                            <option value="random">Aleatório (mais realista)</option>
                        </select>
                    </div>

                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">🎯 Estratégia para textos longos:</label>
                        <select id="longTextStrategy" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="ultraReal">Ultra-realista (recomendado)</option>
                            <option value="paragraphs">Parágrafos</option>
                            <option value="sentences">Frases</option>
                        </select>
                    </div>
                </div>

                <!-- Seção de Mensagens -->
                <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">💬 Mensagens</h3>
                    <textarea id="comenterMessages" rows="6" placeholder="Digite cada mensagem em uma linha. Pode usar textos longos!"
                        style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white; resize: vertical; font-size: 12px;">Olá! Estou testando este bot de comentários e estou impressionado com como ele funciona de forma tão natural. A digitação parece realmente humana, letra por letra, com pausas realistas entre palavras e frases. Muito bom mesmo! 👏

Segunda mensagem de teste. Este é um comentário mais longo para verificar como o bot lida com textos extensos sem ser detectado pelos sistemas de segurança das plataformas.

Terceira mensagem: O COMENTER PRO é incrível! 🤖✨</textarea>
                    <div style="color: #bdc3c7; font-size: 10px; margin-top: 5px;">💡 Pode usar textos longos - o bot digita naturalmente</div>
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
                    ⚡ Pronto para digitação ultra-realista!
                </div>

                <!-- Rodapé -->
                <div style="text-align: center; margin-top: 15px; padding-top: 10px; border-top: 1px solid #34495e;">
                    <p style="color: #7f8c8d; font-size: 10px; margin: 0;">
                        F2: Ocultar/Mostrar | Digitação letra por letra como humano
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

    // ========== FUNÇÕES DO BOT - DIGITAÇÃO ULTRA-REALISTA ==========
    window.startComenterBot = async function() {
        if (window.comenterRunning) {
            updateStatus('⚠️ Bot já está rodando!', '#f39c12');
            return;
        }

        const interval = parseInt(document.getElementById('comenterInterval').value) * 1000;
        const messages = document.getElementById('comenterMessages').value.split('\n').filter(m => m.trim());
        const typingPersonality = document.getElementById('typingPersonality').value;
        const longTextStrategy = document.getElementById('longTextStrategy').value;

        if (messages.length === 0) {
            updateStatus('❌ Digite pelo menos uma mensagem!', '#e74c3c');
            return;
        }

        if (interval < 15000) {
            updateStatus('❌ Intervalo muito curto! Use pelo menos 15 segundos.', '#e74c3c');
            return;
        }

        window.comenterRunning = true;
        window.messageCount = 0;

        updateStatus(`🚀 Bot iniciado! ${messages.length} mensagens`, '#27ae60');
        updateStatus('👤 Digitação ultra-realista ativada...', '#3498db');

        let messageIndex = 0;

        window.comenterIntervalId = setInterval(async () => {
            if (!window.comenterRunning) return;

            const message = messages[messageIndex % messages.length];
            updateStatus(`📝 Preparando comentário...`, '#3498db');
            
            const success = await typeLikeHuman(message, typingPersonality, longTextStrategy);

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

    // ========== DIGITAÇÃO ULTRA-REALISTA COMO HUMANO ==========
    async function typeLikeHuman(fullMessage, personality, strategy) {
        try {
            // 1. Encontrar campo de comentário
            const field = await findCommentField();
            if (!field) {
                updateStatus('❌ Campo de comentário não encontrado!', '#e74c3c');
                return false;
            }

            updateStatus('🎯 Campo encontrado, preparando...', '#3498db');

            // 2. Preparar campo de forma humana
            await humanFieldPreparation(field);
            if (!window.comenterRunning) return false;

            // 3. DIGITAÇÃO LETRA POR LETRA - ULTRA REALISTA
            updateStatus('⌨️ Digitando como humano...', '#3498db');
            
            let success;
            if (strategy === 'ultraReal') {
                success = await ultraRealisticTyping(field, fullMessage, personality);
            } else if (strategy === 'paragraphs') {
                success = await typeByParagraphs(field, fullMessage, personality);
            } else {
                success = await typeBySentences(field, fullMessage, personality);
            }

            if (!success || !window.comenterRunning) {
                return false;
            }

            // 4. Pequena pausa final como humano
            updateStatus('💭 Revisando...', '#3498db');
            await humanPause(2000, 3000);

            // 5. Enviar comentário
            updateStatus('📤 Enviando...', '#3498db');
            const sent = await humanSend(field);
            
            if (sent) {
                updateStatus('✅ Comentário enviado com sucesso!', '#27ae60');
                await humanPause(1500, 2500);
                return true;
            }
            
            return false;
            
        } catch (error) {
            console.error('Erro:', error);
            updateStatus('❌ Erro inesperado', '#e74c3c');
            return false;
        }
    }

    async function ultraRealisticTyping(field, text, personality) {
        const typingProfile = getTypingProfile(personality);
        let currentText = '';
        
        // Dividir texto em partes menores para melhor controle
        const characters = text.split('');
        
        updateStatus(`👤 Modo: ${typingProfile.name}`, '#3498db');
        
        for (let i = 0; i < characters.length; i++) {
            if (!window.comenterRunning) return false;
            
            const char = characters[i];
            currentText += char;
            
            // Atualizar campo letra por letra
            setFieldText(field, currentText);
            
            // Comportamento humano realista
            await humanTypingBehavior(char, typingProfile, i, characters);
            
            // Atualizar progresso ocasionalmente
            if (i % 30 === 0) {
                const progress = Math.round((i / characters.length) * 100);
                updateStatus(`⌨️ Digitando... ${progress}%`, '#3498db');
            }
        }
        
        return true;
    }

    function getTypingProfile(personality) {
        const profiles = {
            slow: {
                name: "Cuidadoso",
                baseDelay: 120,
                variation: 80,
                mistakeChance: 0.02,
                pauseChance: 0.08,
                pauseLength: [800, 2000]
            },
            normal: {
                name: "Normal", 
                baseDelay: 80,
                variation: 60,
                mistakeChance: 0.015,
                pauseChance: 0.05,
                pauseLength: [500, 1500]
            },
            fast: {
                name: "Rápido",
                baseDelay: 50,
                variation: 40,
                mistakeChance: 0.01,
                pauseChance: 0.03,
                pauseLength: [300, 1000]
            },
            random: {
                name: "Aleatório",
                baseDelay: 60 + Math.random() * 80,
                variation: 50 + Math.random() * 60,
                mistakeChance: 0.01 + Math.random() * 0.02,
                pauseChance: 0.04 + Math.random() * 0.04,
                pauseLength: [400, 1800]
            }
        };
        
        return personality === 'random' ? profiles.random : profiles[personality];
    }

    async function humanTypingBehavior(char, profile, index, allChars) {
        // Delay base entre letras
        let delay = profile.baseDelay + (Math.random() * profile.variation);
        
        // Comportamentos humanos específicos
        if (char === ' ') {
            // Pausa um pouco mais longa após espaços
            delay *= 1.3;
        } else if (char === '.' || char === '!' || char === '?') {
            // Pausa mais longa após pontuação
            delay *= 2.5;
        } else if (char === ',') {
            // Pequena pausa após vírgula
            delay *= 1.8;
        }
        
        // Simular erros ocasionais (como um humano)
        if (Math.random() < profile.mistakeChance) {
            await humanMistakeBehavior();
        }
        
        // Pausas pensativas ocasionais
        if (Math.random() < profile.pauseChance) {
            const pauseTime = profile.pauseLength[0] + Math.random() * (profile.pauseLength[1] - profile.pauseLength[0]);
            await delayMs(pauseTime);
        }
        
        // Variação de velocidade em palavras longas
        if (index > 0 && allChars[index - 1] !== ' ') {
            // Acelera um pouco em meio a palavras
            delay *= 0.9;
        }
        
        await delayMs(delay);
    }

    async function humanMistakeBehavior() {
        // Simular um erro de digitação humano
        const mistakeDelay = 200 + Math.random() * 300;
        await delayMs(mistakeDelay);
        
        // Às vezes backspace (30% das vezes)
        if (Math.random() < 0.3) {
            await delayMs(100 + Math.random() * 150);
        }
    }

    async function humanFieldPreparation(field) {
        // Comportamento humano ao preparar campo
        updateStatus('👆 Clicando no campo...', '#3498db');
        
        // Clicar de forma humana (não precisa ser exato)
        const clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        field.dispatchEvent(clickEvent);
        
        await humanPause(800, 1200);
        
        // Focar no campo
        field.focus();
        await humanPause(500, 800);
        
        // Limpar campo se necessário (como humano faria - Backspace)
        await clearFieldLikeHuman(field);
    }

    async function clearFieldLikeHuman(field) {
        const currentText = getFieldText(field);
        if (currentText && currentText.length > 0) {
            updateStatus('⌫ Limpando campo...', '#3498db');
            
            // Simular humano pressionando Backspace
            for (let i = 0; i < currentText.length; i++) {
                if (!window.comenterRunning) return;
                
                // Remover um caractere por vez
                const newText = currentText.substring(0, currentText.length - i - 1);
                setFieldText(field, newText);
                
                await delayMs(50 + Math.random() * 30);
                
                // Ocasionalmente pausa durante limpeza
                if (Math.random() < 0.1) {
                    await humanPause(200, 400);
                }
            }
            
            await humanPause(300, 600);
        }
    }

    async function typeByParagraphs(field, text, personality) {
        const paragraphs = text.split('\n\n').filter(p => p.trim());
        const profile = getTypingProfile(personality);
        
        for (let p = 0; p < paragraphs.length; p++) {
            if (!window.comenterRunning) return false;
            
            const paragraph = paragraphs[p];
            await ultraRealisticTyping(field, paragraph, personality);
            
            // Pausa entre parágrafos
            if (p < paragraphs.length - 1) {
                await humanPause(1000, 2000);
                setFieldText(field, getFieldText(field) + '\n\n');
            }
        }
        
        return true;
    }

    async function typeBySentences(field, text, personality) {
        const sentences = text.split(/[.!?]+/).filter(s => s.trim());
        const profile = getTypingProfile(personality);
        let currentText = '';
        
        for (let s = 0; s < sentences.length; s++) {
            if (!window.comenterRunning) return false;
            
            const sentence = sentences[s].trim();
            if (sentence) {
                const sentenceWithPunct = sentence + (text.includes(sentence + '.') ? '.' : 
                                                text.includes(sentence + '!') ? '!' : 
                                                text.includes(sentence + '?') ? '?' : '.');
                
                await ultraRealisticTyping(field, sentenceWithPunct + ' ', personality);
                
                // Pausa entre frases
                if (s < sentences.length - 1) {
                    await humanPause(800, 1500);
                }
            }
        }
        
        return true;
    }

    async function humanSend(field) {
        // Tentar enviar como humano (botão primeiro)
        const buttonSent = await findAndClickSendButton();
        if (buttonSent) return true;
        
        // Se não encontrar botão, tentar Enter
        const enterSent = await pressEnterLikeHuman(field);
        return enterSent;
    }

    async function pressEnterLikeHuman(field) {
        try {
            // Pausa antes de enviar
            await humanPause(500, 1000);
            
            // Simular humano pressionando Enter
            const enterDown = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true,
                cancelable: true
            });
            
            field.dispatchEvent(enterDown);
            
            await delayMs(50);
            
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

    async function findAndClickSendButton() {
        const buttonSelectors = [
            'button[type="submit"]',
            'button:contains("Enviar")',
            'button:contains("Comment")',
            'button:contains("Post")',
            'button:contains("Publicar")',
            'button:contains("Send")',
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
                        // Clicar como humano (com pequena pausa)
                        await humanPause(200, 400);
                        button.click();
                        return true;
                    }
                }
            } catch (error) {
                continue;
            }
        }
        return false;
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
                '#comment',
                '.ytd-comment-simplebox-renderer #contenteditable-root'
            ];

            for (const selector of selectors) {
                const elements = document.querySelectorAll(selector);
                for (const element of elements) {
                    if (isVisible(element) && isEditableElement(element)) {
                        return element;
                    }
                }
            }

            await delayMs(1000);
        }
        return null;
    }

    function setFieldText(field, text) {
        if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
            field.value = text;
        } else {
            field.textContent = text;
        }
        
        // Disparar evento de input
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
               element.isContentEditable ||
               element.getAttribute('contenteditable') === 'true';
    }

    function isVisible(element) {
        return element.offsetWidth > 0 && 
               element.offsetHeight > 0 && 
               element.style.visibility !== 'hidden' && 
               element.style.display !== 'none';
    }

    async function humanPause(min, max) {
        const pauseTime = min + Math.random() * (max - min);
        await delayMs(pauseTime);
    }

    function delayMs(ms) {
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

    console.log('🚀 COMENTER PRO carregado com sucesso!');
    console.log('🎯 Digitação ultra-realista ativada');
})();
