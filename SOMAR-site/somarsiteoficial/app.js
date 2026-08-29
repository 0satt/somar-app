(function () {
    'use strict';

    // ----------------- DATA LAYER & CONSTANTES ----------------- 
    
    const CAUSES = [
        'Educação', 'Saúde', 'Meio Ambiente', 'Animais', 'Crianças',
        'Idosos', 'Cultura', 'Direitos Humanos', 'Esporte', 'Alimentação', 'Vulnerabilidade'
    ];
    // Aqui só precisa de SP, porque só coloquei ONGs de SP, mas futuramente pode-se adicionar mais cidades, TALVEZ...
    const CITIES = [
        'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador',
        'Brasília', 'Curitiba', 'Porto Alegre', 'Recife', 'Fortaleza', 'Manaus'
    ];
    // Terminar a parte abaixo! 
    const LANGUAGES = {
        pt: { label: 'PT', name: 'Português' },
        en: { label: 'EN', name: 'English' },
        es: { label: 'ES', name: 'Español' }
    };

    const i18n = {
        pt: {
            greeting: 'Olá',
            subtext: 'Explore causas sociais e encontre oportunidades perto de você.',
            points: 'pontos',
            searchPlaceholder: 'Buscar ONGs, causas ou projetos...',
            allCauses: 'Todas as causas',
            allCities: 'Todas as cidades',
            filter: 'Filtrar',
            favorites: 'Favoritas',
            back: 'Voltar',
            volunteer: 'Voluntariado',
            donation: 'Doação',
            schedule: 'Agendar Visita',
            share: 'Compartilhar',
            donate: 'Doar agora',
            confirm: 'Confirmar',
            cancel: 'Cancelar',
            save: 'Salvar',
            edit: 'Editar',
            delete: 'Excluir',
            logout: 'Sair',
            login: 'Entrar',
            register: 'Cadastre-se',
            about: 'Sobre',
            noNotifications: 'Nenhuma notificação',
            profile: 'Meu Perfil',
            confirmTitle: 'Tudo certo!',
            confirmMsg: 'Sua ação foi registrada com sucesso.',
            searchNoResults: 'Nenhuma ONG encontrada para esta busca.',
            loadMore: 'Carregar mais',
            name: 'Nome completo',
            email: 'E-mail',
            phone: 'Telefone',
            password: 'Senha',
            confirmPwd: 'Confirmar senha',
            acceptTerms: 'Aceito os Termos de Uso e Política de Privacidade',
            forgotPwd: 'Esqueci a senha',
            remember: 'Lembrar',
            alreadyAccount: 'Já tem conta?',
            noAccount: 'Não tem conta?',
            loginTitle: 'Entrar',
            registerTitle: 'Criar conta',
            quizTitle: 'Descubra suas causas',
            quizSub: 'Responda rapidamente para encontrar ONGs ideais para você',
            next: 'Próximo',
            previous: 'Anterior',
            finish: 'Finalizar',
            quizDone: 'Quiz concluído! Você ganhou +50 pontos.',
            donateTitle: 'Fazer Doação',
            donationMethod: 'Método de pagamento',
            pix: 'PIX',
            card: 'Cartão',
            debit: 'Débito',
            credit: 'Crédito',
            value: 'Valor da doação',
            otherValue: 'Outro valor',
            pixKey: 'Chave PIX',
            copyPix: 'Copiar chave',
            cardNumber: 'Número do cartão',
            cardName: 'Nome no cartão',
            cardExpiry: 'Validade',
            cardCvv: 'CVV',
            donationSuccess: 'Doação simulada realizada com sucesso!',
            scheduleTitle: 'Agendar Visita',
            scheduleDate: 'Data',
            scheduleTime: 'Horário',
            scheduleMsg: 'Mensagem (opcional)',
            scheduleSuccess: 'Visita agendada e confirmada com sucesso!',
            profileTitle: 'Meu Perfil',
            savedFavs: 'Favoritos salvos',
            savedDonations: 'Doações realizadas (Demonstração)',
            savedVisits: 'Visitas agendadas',
            savedVolunteers: 'Voluntariados',
            darkMode: 'Modo escuro',
            language: 'Idioma',
            appName: 'SOMAR',
            appDesc: 'Conectando pessoas a causas sociais'
        },
        en: {
            greeting: 'Hello',
            subtext: 'Explore social causes and find opportunities near you.',
            points: 'points',
            searchPlaceholder: 'Search NGOs, causes or projects...',
            allCauses: 'All causes',
            allCities: 'All cities',
            filter: 'Filter',
            favorites: 'Favorites',
            back: 'Back',
            volunteer: 'Volunteer',
            donation: 'Donation',
            schedule: 'Schedule Visit',
            share: 'Share',
            donate: 'Donate now',
            confirm: 'Confirm',
            cancel: 'Cancel',
            save: 'Save',
            edit: 'Edit',
            delete: 'Delete',
            logout: 'Logout',
            login: 'Login',
            register: 'Sign up',
            about: 'About',
            noNotifications: 'No notifications',
            profile: 'My Profile',
            confirmTitle: 'All set!',
            confirmMsg: 'Your action has been recorded successfully.',
            searchNoResults: 'No NGOs found for this search.',
            loadMore: 'Load more',
            name: 'Full name',
            email: 'Email',
            phone: 'Phone',
            password: 'Password',
            confirmPwd: 'Confirm password',
            acceptTerms: 'I accept the Terms of Use and Privacy Policy',
            forgotPwd: 'Forgot password',
            remember: 'Remember me',
            alreadyAccount: 'Already have an account?',
            noAccount: "Don't have an account?",
            loginTitle: 'Login',
            registerTitle: 'Sign up',
            quizTitle: 'Discover your causes',
            quizSub: 'Answer quickly to find ideal NGOs for you',
            next: 'Next',
            previous: 'Previous',
            finish: 'Finish',
            quizDone: 'Quiz completed! You earned +50 points.',
            donateTitle: 'Make a Donation',
            donationMethod: 'Payment method',
            pix: 'PIX',
            card: 'Card',
            debit: 'Debit',
            credit: 'Credit',
            value: 'Donation amount',
            otherValue: 'Other amount',
            pixKey: 'PIX Key',
            copyPix: 'Copy key',
            cardNumber: 'Card number',
            cardName: 'Name on card',
            cardExpiry: 'Expiry',
            cardCvv: 'CVV',
            donationSuccess: 'Simulated donation successful!',
            scheduleTitle: 'Schedule Visit',
            scheduleDate: 'Date',
            scheduleTime: 'Time',
            scheduleMsg: 'Message (optional)',
            scheduleSuccess: 'Visit scheduled and confirmed!',
            profileTitle: 'My Profile',
            savedFavs: 'Saved favorites',
            savedDonations: 'Donations made (Demo)',
            savedVisits: 'Scheduled visits',
            savedVolunteers: 'Volunteerings',
            darkMode: 'Dark mode',
            language: 'Language',
            appName: 'SOMAR',
            appDesc: 'Connecting people to social causes'
        },
        es: {
            greeting: 'Hola',
            subtext: 'Explora causas sociales y encuentra oportunidades cerca de ti.',
            points: 'puntos',
            searchPlaceholder: 'Buscar ONGs, causas o proyectos...',
            allCauses: 'Todas las causas',
            allCities: 'Todas las ciudades',
            filter: 'Filtrar',
            favorites: 'Favoritas',
            back: 'Volver',
            volunteer: 'Voluntariado',
            donation: 'Donación',
            schedule: 'Agendar Visita',
            share: 'Compartir',
            donate: 'Donar ahora',
            confirm: 'Confirmar',
            cancel: 'Cancelar',
            save: 'Guardar',
            edit: 'Editar',
            delete: 'Eliminar',
            logout: 'Salir',
            login: 'Iniciar sesión',
            register: 'Registrarse',
            about: 'Acerca de',
            noNotifications: 'Sin notificaciones',
            profile: 'Mi Perfil',
            confirmTitle: '¡Todo listo!',
            confirmMsg: 'Tu acción ha sido registrada con éxito.',
            searchNoResults: 'No se encontraron ONGs para esta búsqueda.',
            loadMore: 'Cargar más',
            name: 'Nombre completo',
            email: 'Correo electrónico',
            phone: 'Teléfono',
            password: 'Contraseña',
            confirmPwd: 'Confirmar contraseña',
            acceptTerms: 'Acepto los Términos de Uso y Política de Privacidad',
            forgotPwd: 'Olvidé mi contraseña',
            remember: 'Recordarme',
            alreadyAccount: '¿Ya tienes cuenta?',
            noAccount: '¿No tienes cuenta?',
            loginTitle: 'Iniciar sesión',
            registerTitle: 'Registrarse',
            quizTitle: 'Descubre tus causas',
            quizSub: 'Responde rápidamente para encontrar ONGs ideales para ti',
            next: 'Siguiente',
            previous: 'Anterior',
            finish: 'Finalizar',
            quizDone: '¡Quiz completado! Has ganado +50 puntos.',
            donateTitle: 'Hacer Donación',
            donationMethod: 'Método de pago',
            pix: 'PIX',
            card: 'Tarjeta',
            debit: 'Débito',
            credit: 'Crédito',
            value: 'Valor de la donación',
            otherValue: 'Otro valor',
            pixKey: 'Clave PIX',
            copyPix: 'Copiar clave',
            cardNumber: 'Número de tarjeta',
            cardName: 'Nombre en la tarjeta',
            cardExpiry: 'Vencimiento',
            cardCvv: 'CVV',
            donationSuccess: '¡Donación simulada exitosa!',
            scheduleTitle: 'Agendar Visita',
            scheduleDate: 'Fecha',
            scheduleTime: 'Horario',
            scheduleMsg: 'Mensaje (opcional)',
            scheduleSuccess: '¡Visita agendada y confirmada con éxito!',
            profileTitle: 'Mi Perfil',
            savedFavs: 'Favoritos guardados',
            savedDonations: 'Donaciones realizadas (Demo)',
            savedVisits: 'Visitas agendadas',
            savedVolunteers: 'Voluntariados',
            darkMode: 'Modo oscuro',
            language: 'Idioma',
            appName: 'SOMAR',
            appDesc: 'Conectando personas a causas sociales'
        }
    };
    const NGO_LIST = [
        { id: 'ngo1', name: 'Cabelegria', cause: 'Saúde', city: 'São Paulo', description: 'A Cabelegria é uma ONG que arrecada doações de cabelo para produzir e distribuir perucas gratuitas a crianças e mulheres com câncer e outras condições que causam queda de cabelo, como alopécia e escalpelamento.', image: 'https://agenciasunhaus.com.br/wp-content/uploads/2024/11/logo_cabelegria_og-1024x561.png', rating: 5.0, volunteers: 120, donations: 45000 },
        { id: 'ngo2', name: 'Instituto C.', cause: 'Vulnerabilidade', city: 'São Paulo', description: 'O Instituto C é uma organização sem fins lucrativos que, desde 2011, apoia famílias com crianças e adolescentes em situação de vulnerabilidade social por meio de acolhimento e desenvolvimento social.', image: 'https://institutoc.org.br/wp-content/uploads/2020/09/Logo_Instituto-C-01-Personalizado.png', rating: 5.0, volunteers: 89, donations: 32000 },
        { id: 'ngo3', name: 'Instituto Resgatando Vidas', cause: 'Vulnerabilidade', city: 'São Paulo', description: 'Promove transformação social por meio de educação, esporte e capacitação profissional com foco em jovens na Zona Norte de São Paulo.', image: 'https://static.wixstatic.com/media/66d9e3_97566d0620b84642aabf423e8d606d33~mv2.jpg/v1/fit/w_2500,h_1330,al_c/66d9e3_97566d0620b84642aabf423e8d606d33~mv2.jpg', rating: 5.0, volunteers: 210, donations: 78000 },
        { id: 'ngo4', name: 'Anjos da Leste', cause: 'Vulnerabilidade', city: 'São Paulo', description: 'Atua na Zona Leste de São Paulo acolhendo pessoas em situação de rua e desenvolvendo projetos esportivos e educativos com crianças.', image: 'https://storage.googleapis.com/atados-v3/user-uploaded/images/9dfa530c-1b22-4eee-981b-8622071e58b8.jpg', rating: 5.0, volunteers: 150, donations: 52000 },
        { id: 'ngo5', name: 'Ameo-associação da medula óssea', cause: 'Saúde', city: 'São Paulo', description: 'Atua na conscientização sobre a doação de medula óssea, apoio a pacientes do REDOME e hospedagem solidária.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThSrIc-BMxuq-5niP5PzwYt8HMYWKJz348LS-q1SYN&s=10', rating: 5.0, volunteers: 95, donations: 28000 },
        { id: 'ngo6', name: 'Sorrir para a vida', cause: 'Saúde', city: 'São Paulo', description: 'Oferece assistência clínico-odontológica gratuita e especializada com equipe 100% voluntária a pessoas em vulnerabilidade.', image: 'https://storage.googleapis.com/atados-v3/nonprofit/institutosorrirparavida.png', rating: 5.0, volunteers: 72, donations: 19000 },
        { id: 'ngo7', name: 'Instituto Caramelo', cause: 'Animais', city: 'São Paulo', description: 'Foca no resgate, reabilitação e encaminhamento para adoção de animais em situação de maus-tratos ou abandono.', image: 'https://static.tildacdn.net/tild6631-3561-4130-b836-313664623131/ILM-InstitutoCaramel.png', rating: 5.0, volunteers: 68, donations: 35000 },
        { id: 'ngo8', name: 'Conectas', cause: 'Direitos Humanos', city: 'São Paulo', description: 'Promove, protege e amplia os direitos humanos e o Estado Democrático de Direito combatendo as desigualdades.', image: 'https://guiadefontes.msf.org.br/wp-content/uploads/2018/01/conectas.png', rating: 5.0, volunteers: 55, donations: 22000 },
        { id: 'ngo9', name: 'Instituto cades', cause: 'Esporte', city: 'São Paulo', description: 'Democratiza o acesso ao esporte e o utiliza como ferramenta de inclusão social e cidadania.', image: 'https://institutocades.org.br/wp-content/uploads/2024/01/LOGO-1-cor-scaled-e1771007787401.png', rating: 5.0, volunteers: 130, donations: 41000 },
        { id: 'ngo10', name: 'Banco de Alimentos', cause: 'Alimentação', city: 'São Paulo', description: 'Combate o desperdício de alimentos e minimiza os efeitos da fome por meio de colheita urbana.', image: 'https://bancodealimentos.org.br/wp-content/uploads/2021/11/cropped-OBA-Assinatura-Horizontal.png', rating: 5.0, volunteers: 200, donations: 65000 },
        { id: 'ngo11', name: 'Fundação Lemann', cause: 'Educação', city: 'São Paulo', description: 'Garante uma educação pública de qualidade e apoia líderes comprometidos com a transformação do país.', image: 'https://velezreyesmas.com/wp-content/uploads/2024/07/LOGOS-fundacao-LEMANN.png', rating: 5.0, volunteers: 88, donations: 31000 },
        { id: 'ngo12', name: 'Velho Amigo', cause: 'Idosos', city: 'São Paulo', description: 'Promove a longevidade saudável, a inclusão social e os direitos da pessoa idosa em situação de vulnerabilidade.', image: 'https://captadores.org.br/wp-content/uploads/2025/07/velhoamigo.png', rating: 5.0, volunteers: 77, donations: 24000 }
    ];

    const QUIZ_QUESTIONS = [
        {
            question: 'Qual área mais te motiva?',
            options: [
                { text: 'Cuidar de pessoas', causes: ['Saúde', 'Idosos', 'Direitos Humanos'] },
                { text: 'Proteger o planeta', causes: ['Meio Ambiente', 'Animais'] },
                { text: 'Educar e transformar', causes: ['Educação', 'Crianças', 'Cultura'] },
                { text: 'Combater a fome', causes: ['Alimentação', 'Direitos Humanos'] }
            ]
        },
        {
            question: 'Quanto tempo pode dedicar por mês?',
            options: [
                { text: 'Até 4 horas', causes: [] },
                { text: '4 a 10 horas', causes: [] },
                { text: '10 a 20 horas', causes: [] },
                { text: 'Mais de 20 horas', causes: [] }
            ]
        },
        {
            question: 'Prefere atuar em qual ambiente?',
            options: [
                { text: 'Presencial na cidade', causes: [] },
                { text: 'Online / Remoto', causes: [] },
                { text: 'Ao ar livre / natureza', causes: ['Meio Ambiente', 'Animais'] },
                { text: 'Eventos e ações pontuais', causes: ['Cultura', 'Esporte'] }
            ]
        },
        {
            question: 'Que tipo de contribuição prefere?',
            options: [
                { text: 'Doação financeira', causes: [] },
                { text: 'Trabalho voluntário', causes: [] },
                { text: 'Doação de materiais', causes: [] },
                { text: 'Qualquer tipo', causes: [] }
            ]
        },
        {
            question: 'Qual público você gostaria de atender?',
            options: [
                { text: 'Crianças e jovens', causes: ['Crianças', 'Educação', 'Esporte'] },
                { text: 'Adultos e famílias', causes: ['Saúde', 'Direitos Humanos', 'Alimentação'] },
                { text: 'Idosos', causes: ['Idosos'] },
                { text: 'Animais', causes: ['Animais'] }
            ]
        }
    ];

    const DEFAULT_NOTIFICATIONS = [
        { id: 'n1', text: 'Bem-vindo ao SOMAR! Complete seu quiz para recomendações.', read: false, icon: 'bi-info-circle', time: 'agora' },
        { id: 'n2', text: 'Nova ONG cadastrada em São Paulo.', read: false, icon: 'bi-building', time: '1 hora atrás' },
        { id: 'n3', text: 'Você tem novas ONGs recomendadas com base no seu perfil.', read: false, icon: 'bi-star', time: '2 horas atrás' }
    ];


    // ESTADO E HELPERS


    let currentUser = null;
    let currentLang = 'pt';
    let currentPage = 'login';
    let quizStep = 0;
    let quizAnswers = [];
    let currentNgo = null;
    let selectedDonationMethod = null;
    let selectedDonationValue = 0;
    let scheduleNgoId = null;

    const DB_KEY = 'somar_data';

    function getDB() {
        try {
            const raw = localStorage.getItem(DB_KEY);
            if (raw) return JSON.parse(raw);
        } catch (e) { /* ignore */ }
        return { users: [], donations: [], appointments: [], favorites: [], notifications: [], settings: {} };
    }

    function saveDB(db) { localStorage.setItem(DB_KEY, JSON.stringify(db)); }
    function getUsers() { return getDB().users || []; }
    function getDonations() { return getDB().donations || []; }
    function getAppointments() { return getDB().appointments || []; }
    function getFavorites() { return getDB().favorites || []; }
    function getNotifications() { return getDB().notifications || []; }
    function getSettings() { return getDB().settings || {}; }

    function saveUsers(u) { const db = getDB(); db.users = u; saveDB(db); }
    function saveDonations(d) { const db = getDB(); db.donations = d; saveDB(db); }
    function saveAppointments(a) { const db = getDB(); db.appointments = a; saveDB(db); }
    function saveFavorites(f) { const db = getDB(); db.favorites = f; saveDB(db); }
    function saveNotifications(n) { const db = getDB(); db.notifications = n; saveDB(db); }
    function saveSettings(s) { const db = getDB(); db.settings = s; saveDB(db); }

    function generateId() { return Date.now().toString(36) + Math.random().toString(36).substr(2, 5); }

    function t(key) {
        const dict = i18n[currentLang] || i18n.pt;
        return dict[key] || key;
    }

    function showToast(message, type = 'success') {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        const id = 'toast-' + generateId();
        const bg = type === 'success' ? 'bg-success' : type === 'error' ? 'bg-danger' : type === 'warning' ? 'bg-warning text-dark' : 'bg-info';
        const icon = type === 'success' ? 'bi-check-circle' : type === 'error' ? 'bi-exclamation-circle' : type === 'warning' ? 'bi-exclamation-triangle' : 'bi-info-circle';
        const html = `
            <div class="toast" id="${id}" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3500">
                <div class="toast-header ${bg} text-white">
                    <i class="bi ${icon} me-2"></i>
                    <strong class="me-auto">SOMAR</strong>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Fechar"></button>
                </div>
                <div class="toast-body">${message}</div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
        const el = document.getElementById(id);
        if (el) {
            const bsToast = new bootstrap.Toast(el);
            bsToast.show();
            el.addEventListener('hidden.bs.toast', () => el.remove());
        }
    }

    function addNotification(text, icon = 'bi-bell') {
        const notifs = getNotifications();
        notifs.unshift({ id: generateId(), text, read: false, icon, time: 'agora' });
        saveNotifications(notifs);
        renderNotifications();
        updateNotifBadge();
    }

    function renderNotifications() {
        const list = document.getElementById('notifList');
        if (!list) return;
        const notifs = getNotifications();
        if (notifs.length === 0) {
            list.innerHTML = `<li class="dropdown-item-text text-muted text-center py-2">${t('noNotifications')}</li>`;
            return;
        }
        list.innerHTML = notifs.map(n => `
            <li class="dropdown-item notif-item ${n.read ? 'opacity-75' : 'fw-semibold'}" data-notif-id="${n.id}" style="cursor:pointer;">
                <div class="d-flex align-items-start gap-2">
                    <i class="bi ${n.icon} text-primary mt-1"></i>
                    <div>
                        <div style="font-size:0.85rem;">${n.text}</div>
                        <small class="text-muted" style="font-size:0.75rem;">${n.time}</small>
                    </div>
                </div>
            </li>
        `).join('');
    }

    function updateNotifBadge() {
        const notifs = getNotifications();
        const unread = notifs.filter(n => !n.read).length;
        const badge = document.getElementById('notifBadge');
        if (badge) {
            badge.textContent = unread;
            badge.style.display = unread > 0 ? 'inline' : 'none';
        }
    }

    function getLangLabel() {
        return LANGUAGES[currentLang] ? LANGUAGES[currentLang].label : 'PT';
    }

    
    // --------------- RENDERIZADORES -----------------

    function renderNav(items) {
        return items.map(i =>
            `<li class="nav-item">
                <a class="nav-link ${i.active ? 'active fw-semibold' : ''}" href="#" data-page="${i.page}" aria-current="${i.active ? 'page' : 'false'}">
                    <i class="bi ${i.icon} me-1"></i> ${i.label}
                </a>
            </li>`
        ).join('');
    }

    function renderNgoCards(items, favorites = []) {
        if (!items || items.length === 0) {
            return `<div class="col-12 empty-state"><i class="bi bi-search"></i><p class="text-muted mt-2">${t('searchNoResults')}</p></div>`;
        }
        return items.map(ngo => {
            const isFav = favorites.includes(ngo.id);
            const stars = '<i class="bi bi-star-fill text-warning"></i>'.repeat(Math.round(ngo.rating || 5));
            return `
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div class="card shadow-soft h-100 ngo-card position-relative" data-ngo-id="${ngo.id}">
                        <img src="${ngo.image}" alt="${ngo.name}" class="ngo-img" loading="lazy">
                        <button class="fav-btn ${isFav ? 'text-danger' : 'text-muted'}" data-fav="${ngo.id}" aria-label="${isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">
                            <i class="bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}"></i>
                        </button>
                        <div class="card-body d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-start mb-1">
                                <h3 class="h6 mb-0 fw-semibold">${ngo.name}</h3>
                                <span class="badge bg-primary-soft text-primary rounded-pill" style="font-size:0.65rem;">${ngo.cause}</span>
                            </div>
                            <p class="small text-muted mt-1 mb-2" style="line-height:1.4;">${ngo.description.substring(0, 80)}...</p>
                            <div class="d-flex justify-content-between align-items-center mt-auto">
                                <small class="text-muted"><i class="bi bi-geo-alt me-1"></i>${ngo.city}</small>
                                <small class="text-warning">${ngo.rating || 5.0} ${stars}</small>
                            </div>
                            <button class="btn btn-sm btn-outline-primary rounded-pill mt-2 w-100" data-ngo-detail="${ngo.id}">Ver detalhes</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    function renderQuizSteps(current, total) {
        let html = '';
        for (let i = 0; i < total; i++) {
            if (i > 0) html += `<div class="ps-line ${i <= current ? 'done' : ''}"></div>`;
            const cls = i === current ? 'active' : i < current ? 'done' : '';
            html += `<div class="ps-step ${cls}">${i + 1}</div>`;
        }
        return html;
    }

    function renderQuizQuestion(step, questions) {
        const q = questions[step];
        if (!q) return '<p class="text-muted">Carregando...</p>';
        const currentSelected = quizAnswers[step];
        const optionsHtml = q.options.map((opt, idx) => `
            <div class="quiz-option d-flex align-items-center gap-3 ${currentSelected === idx ? 'selected' : ''}" data-quiz-opt="${idx}" style="cursor:pointer;">
                <div class="form-check mb-0">
                    <input class="form-check-input" type="radio" name="quizOpt" value="${idx}" id="qopt_${idx}" ${currentSelected === idx ? 'checked' : ''}>
                </div>
                <label class="form-check-label flex-grow-1 mb-0" style="cursor:pointer;" for="qopt_${idx}">${opt.text}</label>
            </div>
        `).join('');
        const progress = ((step + 1) / questions.length) * 100;
        return `
            <h5 class="mb-3">${q.question}</h5>
            <div class="progress-bar-custom mb-4">
                <div class="fill" style="width:${progress}%;"></div>
            </div>
            <div class="d-flex flex-column gap-2">${optionsHtml}</div>
        `;
    }

    function renderNgoDetail(ngo) {
        if (!ngo) return '<p class="text-muted">ONG não encontrada.</p>';
        const stars = '<i class="bi bi-star-fill text-warning"></i>'.repeat(Math.round(ngo.rating || 5));
        const userFavs = currentUser ? (getFavorites().find(f => f.userId === currentUser.id)?.ids || []) : [];
        const isFav = userFavs.includes(ngo.id);
        const favIcon = isFav ? 'bi-heart-fill text-danger' : 'bi-heart';

        // Verificação se o usuário já tem visita agendada/confirmada com esta ONG
        const userVisits = currentUser ? getAppointments().filter(a => a.userId === currentUser.id && a.ngoId === ngo.id) : [];
        const visitNoticeHtml = userVisits.length > 0 ? `
            <div class="alert alert-success d-flex align-items-center gap-2 mt-3 mb-0" role="alert">
                <i class="bi bi-check-circle-fill fs-5 text-success"></i>
                <div>
                    <strong>Visita Confirmada!</strong> Você possui agendamento para <strong>${userVisits[0].date} às ${userVisits[0].time}</strong>.
                    <span class="badge bg-success ms-1">Status: Confirmada</span>
                </div>
            </div>
        ` : '';

        return `
            <div class="card shadow-soft overflow-hidden">
                <img src="${ngo.image}" alt="${ngo.name}" class="w-100" style="height:240px; object-fit:cover;">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start">
                        <div>
                            <h3 class="h4 mb-1">${ngo.name}</h3>
                            <span class="badge bg-primary-soft text-primary rounded-pill">${ngo.cause}</span>
                            <span class="badge bg-secondary-soft text-secondary rounded-pill ms-1"><i class="bi bi-geo-alt"></i> ${ngo.city}</span>
                        </div>
                        <button class="btn btn-sm btn-outline-danger rounded-pill" data-fav="${ngo.id}" aria-label="${isFav ? 'Remover favorito' : 'Adicionar favorito'}">
                            <i class="bi ${favIcon}"></i>
                        </button>
                    </div>
                    <p class="mt-3">${ngo.description}</p>
                    <div class="row g-2 mb-3">
                        <div class="col-4 text-center">
                            <small class="text-muted d-block">Avaliação</small>
                            <strong>${ngo.rating || 5.0} ${stars}</strong>
                        </div>
                        <div class="col-4 text-center">
                            <small class="text-muted d-block">Voluntários</small>
                            <strong>${ngo.volunteers}</strong>
                        </div>
                        <div class="col-4 text-center">
                            <small class="text-muted d-block">Arrecadado</small>
                            <strong>R$ ${(ngo.donations || 0).toLocaleString('pt-BR')}</strong>
                        </div>
                    </div>
                    ${visitNoticeHtml}
                    <div class="d-flex flex-wrap gap-2 mt-3">
                        <button class="btn btn-primary btn-ripple" data-schedule="${ngo.id}"><i class="bi bi-calendar-check me-1"></i>${t('schedule')}</button>
                        <button class="btn btn-accent btn-ripple text-white" data-donate="${ngo.id}"><i class="bi bi-gift me-1"></i>${t('donate')}</button>
                        <button class="btn btn-outline-secondary btn-ripple" data-share="${ngo.id}"><i class="bi bi-share me-1"></i>${t('share')}</button>
                    </div>
                </div>
            </div>
        `;
    }

    function renderScheduleForm(ngoId) {
        const ngo = NGO_LIST.find(n => n.id === ngoId);
        if (!ngo) return '<p class="text-muted">ONG não encontrada.</p>';
        return `
            <div class="card shadow-soft p-4">
                <h3 class="h5 mb-3"><i class="bi bi-calendar-check me-2" style="color:var(--primary);"></i>${t('scheduleTitle')}</h3>
                <p class="text-muted small">Agende uma visita para conhecer a ONG <strong>${ngo.name}</strong>.</p>
                <form id="scheduleForm" novalidate>
                    <div class="mb-3">
                        <label for="schedDate" class="form-label">${t('scheduleDate')} *</label>
                        <input type="date" class="form-control" id="schedDate" required aria-required="true" min="${new Date().toISOString().split('T')[0]}">
                        <div class="invalid-feedback">Selecione uma data válida.</div>
                    </div>
                    <div class="mb-3">
                        <label for="schedTime" class="form-label">${t('scheduleTime')} *</label>
                        <select class="form-select" id="schedTime" required aria-required="true">
                            <option value="">Selecione um horário</option>
                            <option value="08:00">08:00</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                        </select>
                        <div class="invalid-feedback">Selecione um horário.</div>
                    </div>
                    <div class="mb-3">
                        <label for="schedMsg" class="form-label">${t('scheduleMsg')}</label>
                        <textarea class="form-control" id="schedMsg" rows="3" placeholder="Deixe uma mensagem para a ONG..."></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary w-100 btn-ripple"><i class="bi bi-check2-circle me-1"></i> Confirmar Agendamento</button>
                </form>
            </div>
        `;
    }

    function renderDonationForm(ngoId) {
        const ngo = NGO_LIST.find(n => n.id === ngoId);
        if (!ngo) return '<p class="text-muted">ONG não encontrada.</p>';
        const values = [25, 50, 100, 200, 500];
        const valuesHtml = values.map(v =>
            `<button class="btn btn-outline-primary rounded-pill donation-value-btn ${selectedDonationValue === v ? 'active' : ''}" data-value="${v}">R$ ${v}</button>`
        ).join('');
        return `
            <div class="card shadow-soft p-4">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h3 class="h5 mb-0"><i class="bi bi-gift me-2" style="color:var(--accent);"></i>${t('donateTitle')}</h3>
                    <span class="badge bg-secondary-soft text-secondary rounded-pill px-2 py-1" style="font-size:0.75rem;"><i class="bi bi-shield-lock me-1"></i>Simulação Fictícia</span>
                </div>
                <p class="text-muted small">Contribua simbolicamente com <strong>${ngo.name}</strong> para apoiar seus projetos.</p>
                <div id="donationMethodStep">
                    <label class="form-label fw-semibold">${t('donationMethod')}</label>
                    <div class="row g-2 mb-4">
                        <div class="col-6">
                            <div class="donation-method ${selectedDonationMethod === 'pix' ? 'selected' : ''}" data-method="pix">
                                <i class="bi bi-qr-code-scan fs-2 d-block mb-1" style="color:var(--secondary);"></i>
                                <small class="fw-medium">${t('pix')}</small>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="donation-method ${selectedDonationMethod === 'card' ? 'selected' : ''}" data-method="card">
                                <i class="bi bi-credit-card fs-2 d-block mb-1" style="color:var(--primary);"></i>
                                <small class="fw-medium">${t('card')}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label fw-semibold">${t('value')}</label>
                    <div class="d-flex flex-wrap gap-2 mb-2">${valuesHtml}</div>
                    <div class="input-group">
                        <span class="input-group-text">R$</span>
                        <input type="number" class="form-control" id="donationOtherValue" placeholder="${t('otherValue')}" min="1" step="1" value="${selectedDonationValue > 0 && !values.includes(selectedDonationValue) ? selectedDonationValue : ''}">
                    </div>
                </div>
                <div id="donationPixArea" class="${selectedDonationMethod === 'pix' ? '' : 'd-none'}">
                    <div class="pix-area text-center">
                        <i class="bi bi-qr-code fs-1 mb-2 d-block" style="color:var(--secondary);"></i>
                        <p class="mb-1 small text-muted">Escaneie o QR Code ou copie a chave PIX fictícia de teste</p>
                        <div class="input-group mb-2">
                            <input type="text" class="form-control text-center" readonly value="somar@ong.org.br" id="pixKeyInput">
                            <button class="btn btn-secondary" id="copyPixBtn"><i class="bi bi-clipboard"></i> ${t('copyPix')}</button>
                        </div>
                        <small class="text-muted">Chave PIX Simulada: CNPJ 00.000.000/0001-00</small>
                    </div>
                </div>
                <div id="donationCardArea" class="${selectedDonationMethod === 'card' ? '' : 'd-none'}">
                    <div class="card-form">
                        <div class="mb-2">
                            <label class="form-label small">${t('cardNumber')}</label>
                            <input type="text" class="form-control" placeholder="0000 0000 0000 0000" maxlength="19" id="cardNumber">
                        </div>
                        <div class="mb-2">
                            <label class="form-label small">${t('cardName')}</label>
                            <input type="text" class="form-control" placeholder="Nome no cartão" id="cardName">
                        </div>
                        <div class="row g-2 mb-2">
                            <div class="col-6">
                                <label class="form-label small">${t('cardExpiry')}</label>
                                <input type="text" class="form-control" placeholder="MM/AA" maxlength="5" id="cardExpiry">
                            </div>
                            <div class="col-6">
                                <label class="form-label small">${t('cardCvv')}</label>
                                <input type="text" class="form-control" placeholder="123" maxlength="4" id="cardCvv">
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn btn-accent w-100 btn-ripple mt-3 text-white fw-semibold" id="confirmDonationBtn" ${!selectedDonationMethod ? 'disabled' : ''}>
                    <i class="bi bi-heart-fill me-1"></i> ${t('donate')}
                </button>
            </div>
        `;
    }

    function renderConfirmation(type, data) {
        const isDonation = type === 'donation';
        const icon = isDonation ? 'bi-gift' : 'bi-calendar-check';
        const color = isDonation ? 'var(--accent)' : 'var(--secondary)';
        const title = isDonation ? t('donationSuccess') : t('scheduleSuccess');
        const msg = isDonation
            ? `Sua doação fictícia de <strong>R$ ${Number(data.value).toFixed(2)}</strong> para <strong>${data.ngo}</strong> foi registrada no sistema!`
            : `Sua visita na ONG <strong>${data.ngo}</strong> foi confirmada para <strong>${data.date} às ${data.time}</strong>!`;

        const badgeHtml = isDonation
            ? `<div class="mb-3"><span class="badge bg-secondary-soft text-secondary rounded-pill px-3 py-1"><i class="bi bi-stars me-1"></i> Transação Simulada / Demonstração</span></div>`
            : `<div class="mb-3"><span class="badge bg-success rounded-pill px-3 py-1"><i class="bi bi-check-circle-fill me-1"></i> Status: Confirmada</span></div>`;

        return `
            <div class="card shadow-soft p-5 text-center" style="animation: slideUp 0.5s ease;">
                <div class="mb-2">
                    <i class="bi ${icon}" style="font-size:4rem; color:${color}; animation: pulse 1.2s infinite alternate; display:inline-block;"></i>
                </div>
                ${badgeHtml}
                <h3 class="h4 mt-2 mb-2">${title}</h3>
                <p class="text-muted mb-4">${msg}</p>
                <div class="d-flex justify-content-center gap-2 mt-2 flex-wrap">
                    <button class="btn btn-primary btn-ripple" data-page="dashboard"><i class="bi bi-house me-1"></i> Dashboard</button>
                    <button class="btn btn-outline-secondary btn-ripple" data-page="profile"><i class="bi bi-person me-1"></i> ${t('profile')}</button>
                </div>
            </div>
        `;
    }

    function renderProfile(user) {
        if (!user) return '<p class="text-muted">Usuário não encontrado.</p>';
        const donations = getDonations().filter(d => d.userId === user.id);
        const appointments = getAppointments().filter(a => a.userId === user.id);
        const favs = getFavorites().find(f => f.userId === user.id);
        const favIds = favs ? favs.ids : [];
        const favNgos = favIds.map(id => NGO_LIST.find(n => n.id === id)).filter(Boolean);
        const totalDonated = donations.reduce((acc, d) => acc + (d.value || 0), 0);

        const favHtml = favNgos.length > 0 ?
            favNgos.map(n => `<span class="badge bg-primary-soft text-primary rounded-pill me-1 mb-1">${n.name}</span>`).join('') :
            '<small class="text-muted">Nenhuma favorita ainda.</small>';

        const donationRows = donations.slice(0, 5).map(d => {
            const ngo = NGO_LIST.find(n => n.id === d.ngoId);
            return `<tr>
                <td data-label="ONG">${ngo ? ngo.name : '—'}</td>
                <td data-label="Valor">R$ ${(d.value || 0).toFixed(2)}</td>
                <td data-label="Data">${d.date || '—'}</td>
                <td data-label="Tipo"><span class="badge bg-secondary-soft text-secondary">Simulada</span></td>
            </tr>`;
        }).join('') || '<tr><td colspan="4" class="text-muted text-center py-3">Nenhuma doação realizada.</td></tr>';

        const appointmentRows = appointments.slice(0, 5).map(a => {
            const ngo = NGO_LIST.find(n => n.id === a.ngoId);
            return `<tr>
                <td data-label="ONG">${ngo ? ngo.name : '—'}</td>
                <td data-label="Data">${a.date || '—'}</td>
                <td data-label="Horário">${a.time || '—'}</td>
                <td data-label="Status"><span class="badge bg-success"><i class="bi bi-check-circle me-1"></i>${a.status || 'Confirmada'}</span></td>
            </tr>`;
        }).join('') || '<tr><td colspan="4" class="text-muted text-center py-3">Nenhum agendamento realizado.</td></tr>';

        return `
            <div class="row g-4">
                <div class="col-12 col-md-4">
                    <div class="card shadow-soft p-4 text-center">
                        <i class="bi bi-person-circle" style="font-size:4rem; color:var(--primary);"></i>
                        <h4 class="h5 mt-2">${user.name}</h4>
                        <p class="text-muted small">${user.email}</p>
                        <p class="text-muted small"><i class="bi bi-phone me-1"></i>${user.phone || '—'}</p>
                        <span class="badge bg-secondary-soft text-secondary rounded-pill px-3 py-2 fs-6"><i class="bi bi-star-fill text-warning me-1"></i> ${user.points || 0} ${t('points')}</span>
                    </div>
                </div>
                <div class="col-12 col-md-8">
                    <div class="card shadow-soft p-4">
                        <h5 class="mb-3"><i class="bi bi-heart me-2" style="color:#e74c3c;"></i>${t('savedFavs')}</h5>
                        <div class="mb-3">${favHtml}</div>
                        <hr>
                        <h5 class="mb-3"><i class="bi bi-gift me-2" style="color:var(--accent);"></i>${t('savedDonations')} <small class="text-muted">(Total: R$ ${totalDonated.toFixed(2)})</small></h5>
                        <div class="table-responsive">
                            <table class="table table-sm table-hover table-responsive-cards align-middle">
                                <thead><tr><th>ONG</th><th>Valor</th><th>Data</th><th>Tipo</th></tr></thead>
                                <tbody>${donationRows}</tbody>
                            </table>
                        </div>
                        <hr>
                        <h5 class="mb-3"><i class="bi bi-calendar-check me-2" style="color:var(--secondary);"></i>${t('savedVisits')}</h5>
                        <div class="table-responsive">
                            <table class="table table-sm table-hover table-responsive-cards align-middle">
                                <thead><tr><th>ONG</th><th>Data</th><th>Horário</th><th>Status</th></tr></thead>
                                <tbody>${appointmentRows}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }


    // ----------------- CONTROLES DE MONTAGEM -----------------

    function mountNav() {
        const items = [
            { label: 'Dashboard', icon: 'bi-house', page: 'dashboard', active: currentPage === 'dashboard' },
            { label: 'Sobre', icon: 'bi-info-circle', page: 'about', active: currentPage === 'about' }
        ];
        const navList = document.getElementById('navList');
        if (navList) navList.innerHTML = renderNav(items);
    }

    function mountNgoGrid(filter = {}) {
        const favs = currentUser ? (getFavorites().find(f => f.userId === currentUser.id)?.ids || []) : [];
        let list = [...NGO_LIST];
        if (filter.search) {
            const s = filter.search.toLowerCase();
            list = list.filter(n => n.name.toLowerCase().includes(s) || n.cause.toLowerCase().includes(s) || n.description.toLowerCase().includes(s) || n.city.toLowerCase().includes(s));
        }
        if (filter.category) list = list.filter(n => n.cause === filter.category);
        if (filter.city) list = list.filter(n => n.city === filter.city);
        if (filter.favorites) list = list.filter(n => favs.includes(n.id));

        const grid = document.getElementById('ngoGrid');
        if (grid) grid.innerHTML = renderNgoCards(list, favs);
    }

    function mountQuiz() {
        const total = QUIZ_QUESTIONS.length;
        const stepsEl = document.getElementById('quizSteps');
        const contentEl = document.getElementById('quizContent');
        const prevBtn = document.getElementById('quizPrev');
        const nextBtn = document.getElementById('quizNext');

        if (stepsEl) stepsEl.innerHTML = renderQuizSteps(quizStep, total);
        if (contentEl) contentEl.innerHTML = renderQuizQuestion(quizStep, QUIZ_QUESTIONS);
        if (prevBtn) prevBtn.disabled = quizStep === 0;
        if (nextBtn) nextBtn.textContent = (quizStep === total - 1) ? t('finish') : t('next');
    }

    function mountNgoDetail(ngoId) {
        currentNgo = NGO_LIST.find(n => n.id === ngoId);
        const detailEl = document.getElementById('ngoDetailContent');
        if (detailEl) detailEl.innerHTML = renderNgoDetail(currentNgo);
        document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' });
    }

    function mountSchedule(ngoId) {
        scheduleNgoId = ngoId;
        const schedEl = document.getElementById('scheduleContent');
        if (schedEl) schedEl.innerHTML = renderScheduleForm(ngoId);
    }

    function mountDonation(ngoId) {
        currentNgo = NGO_LIST.find(n => n.id === ngoId);
        selectedDonationMethod = null;
        selectedDonationValue = 0;
        const donEl = document.getElementById('donationContent');
        if (donEl) donEl.innerHTML = renderDonationForm(ngoId);
    }

    function mountConfirmation(type, data) {
        const confEl = document.getElementById('confirmationContent');
        if (confEl) confEl.innerHTML = renderConfirmation(type, data);
    }

    function mountProfile() {
        const profEl = document.getElementById('profileContent');
        if (profEl) profEl.innerHTML = renderProfile(currentUser);
    }

    function mountDashboard() {
        if (!currentUser) return;

        const favs = getFavorites().find(f => f.userId === currentUser.id)?.ids || [];
        const donations = getDonations().filter(d => d.userId === currentUser.id);
        const appointments = getAppointments().filter(a => a.userId === currentUser.id);

        // CORREÇÃO DOS PONTOS NO DASHBOARD
        const dashPoints = document.getElementById('dashPoints');
        if (dashPoints) dashPoints.textContent = currentUser.points || 0;

        const statVol = document.getElementById('statVoluntCount');
        if (statVol) statVol.textContent = currentUser.volunteerCount || 0;

        const statDon = document.getElementById('statDonationCount');
        if (statDon) statDon.textContent = donations.length;

        const statFav = document.getElementById('statFavCount');
        if (statFav) statFav.textContent = favs.length;

        const statVis = document.getElementById('statVisitCount');
        if (statVis) statVis.textContent = appointments.length;

        const catSelect = document.getElementById('filterCategory');
        const citySelect = document.getElementById('filterCity');
        if (catSelect && citySelect) {
            const currentCat = catSelect.value;
            const currentCity = citySelect.value;
            catSelect.innerHTML = `<option value="">${t('allCauses')}</option>` + CAUSES.map(c => `<option value="${c}">${c}</option>`).join('');
            citySelect.innerHTML = `<option value="">${t('allCities')}</option>` + CITIES.map(c => `<option value="${c}">${c}</option>`).join('');
            catSelect.value = currentCat || '';
            citySelect.value = currentCity || '';
        }

        mountNgoGrid();

        const hour = new Date().getHours();
        const greet = hour < 12 ? 'Bom dia' : hour < 18 ? 'Boa tarde' : 'Boa noite';
        const firstName = (currentUser.name || 'Usuário').split(' ')[0];

        const greetingEl = document.getElementById('dashGreeting');
        if (greetingEl) {
            greetingEl.innerHTML = `${greet}, <span id="dashUserName">${firstName}</span>!`;
        }
    }

    // ----------------- NAVEGAÇÃO ENTRE PÁGINAS -----------------

    function showPage(pageId, data) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const page = document.getElementById('page-' + pageId);
        if (!page) return;
        page.classList.add('active');
        currentPage = pageId;

        const isAuth = pageId === 'login' || pageId === 'register';
        const mainNav = document.getElementById('mainNav');
        if (isAuth && mainNav) mainNav.classList.remove('scrolled');

        switch (pageId) {
            case 'dashboard': mountDashboard(); break;
            case 'quiz': mountQuiz(); break;
            case 'ngo-detail': if (data) mountNgoDetail(data); break;
            case 'schedule': if (data) mountSchedule(data); break;
            case 'donation': if (data) mountDonation(data); break;
            case 'confirmation': if (data) mountConfirmation(data.type, data.data); break;
            case 'profile': mountProfile(); break;
            case 'about': break;
        }

        mountNav();
        document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' });
    }

    // -----------------AUTENTICAÇÃO E SESSÃO (Corrigir cadastro.) -----------------
    

    function doLogin(email, password) {
        const cleanEmail = (email || '').trim().toLowerCase();
        const cleanPassword = (password || '').trim();
        const users = getUsers();
        const user = users.find(u => (u.email || '').trim().toLowerCase() === cleanEmail && u.password === cleanPassword);
        
        if (user) {
            currentUser = user;
            sessionStorage.setItem('somar_userId', user.id);
            const userSettings = getSettings()[currentUser.id] || {};
            if (!userSettings.quizDone) {
                quizStep = 0;
                quizAnswers = [];
                showPage('quiz');
            } else {
                showPage('dashboard');
            }
            renderNotifications();
            updateNotifBadge();
            showToast(`Bem-vindo(a), ${user.name}!`);
            return true;
        }
        return false;
    }

    function doRegister(name, email, phone, password) {
        const cleanEmail = (email || '').trim().toLowerCase();
        const cleanName = (name || '').trim();
        const cleanPhone = (phone || '').trim();
        const cleanPassword = (password || '').trim();
        const users = getUsers();

        if (users.some(u => (u.email || '').trim().toLowerCase() === cleanEmail)) {
            showToast('E-mail já cadastrado. Por favor, faça login.', 'error');
            return false;
        }

        const newUser = {
            id: generateId(),
            name: cleanName,
            email: cleanEmail,
            phone: cleanPhone,
            password: cleanPassword,
            points: 0,
            volunteerCount: 0,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        saveUsers(users);
        currentUser = newUser;
        sessionStorage.setItem('somar_userId', newUser.id);

        const favs = getFavorites();
        favs.push({ userId: newUser.id, ids: [] });
        saveFavorites(favs);

        const settings = getSettings();
        settings[newUser.id] = { quizDone: false, darkMode: false, lang: 'pt' };
        saveSettings(settings);

        // Cria apenas uma única notificação de boas-vindas para o novo usuário - não sei se é a melhor forma, mas é o que dá pra fazer com o localStorage
        const notifs = getNotifications();
        notifs.unshift({
            id: generateId(),
            userId: newUser.id,
            text: 'Bem-vindo ao SOMAR! Responda o quiz para descobrir causas compatíveis.',
            read: false,
            icon: 'bi-info-circle',
            time: 'agora'
        });
        saveNotifications(notifs);

        renderNotifications();
        updateNotifBadge();
        showToast('Conta criada com sucesso!');
        quizStep = 0;
        quizAnswers = [];
        showPage('quiz');
        return true;
    }

    function doLogout() {
        currentUser = null;
        sessionStorage.removeItem('somar_userId');
        showPage('login');
        showToast('Você saiu da sua conta.');
    }

    // ----------------- EVENT LISTENERS & DELEGAÇÃO DE EVENTOS -----------------

    document.addEventListener('click', function (e) {
        // Seleção de opção do quiz ao clicar no card inteiro
        const quizOptCard = e.target.closest('.quiz-option');
        if (quizOptCard) {
            const idx = parseInt(quizOptCard.getAttribute('data-quiz-opt'));
            const radio = quizOptCard.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;
            quizAnswers[quizStep] = idx;
            document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
            quizOptCard.classList.add('selected');
        }

        const target = e.target.closest('[data-page], [data-fav], [data-ngo-detail], [data-schedule], [data-donate], [data-share], [data-method], [data-value], #ngoBackBtn, #scheduleBackBtn, #donationBackBtn, #quizPrev, #quizNext, #goToRegister, #goToLogin, #logoutBtn, #searchBtn, #viewFavorites, #confirmDonationBtn, #copyPixBtn, #forgotPwd, #profileBtn');
        if (!target) return;
        e.preventDefault();

        const page = target.getAttribute('data-page');
        if (page) {
            if (page === 'login' || page === 'register') {
                if (page === 'login' && currentUser) return;
                showPage(page);
            } else {
                showPage(page);
            }
            const navCollapse = document.getElementById('navbarContent');
            if (navCollapse && navCollapse.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navCollapse)?.hide();
            }
            return;
        }

        const ngoDetail = target.getAttribute('data-ngo-detail');
        if (ngoDetail) { showPage('ngo-detail', ngoDetail); return; }

        const sched = target.getAttribute('data-schedule');
        if (sched) { showPage('schedule', sched); return; }

        const donate = target.getAttribute('data-donate');
        if (donate) { showPage('donation', donate); return; }

        const share = target.getAttribute('data-share');
        if (share) {
            const ngo = NGO_LIST.find(n => n.id === share);
            if (ngo && navigator.share) {
                navigator.share({ title: ngo.name, text: ngo.description, url: window.location.href });
            } else {
                navigator.clipboard.writeText(window.location.href + '?ong=' + share);
                showToast('Link copiado para compartilhar!');
            }
            return;
        }

        const fav = target.getAttribute('data-fav');
        if (fav) {
            if (!currentUser) { showToast('Faça login para favoritar.', 'warning'); return; }
            const favs = getFavorites();
            let entry = favs.find(f => f.userId === currentUser.id);
            if (!entry) { entry = { userId: currentUser.id, ids: [] }; favs.push(entry); }
            const idx = entry.ids.indexOf(fav);
            if (idx > -1) {
                entry.ids.splice(idx, 1);
                showToast('Removido dos favoritos.');
            } else {
                entry.ids.push(fav);
                showToast('Adicionado aos favoritos!', 'success');
            }
            saveFavorites(favs);
            if (currentPage === 'dashboard') mountDashboard();
            else if (currentPage === 'ngo-detail' && currentNgo) mountNgoDetail(currentNgo.id);
            return;
        }

        const method = target.getAttribute('data-method');
        if (method) {
            selectedDonationMethod = method;
            document.querySelectorAll('.donation-method').forEach(el => el.classList.remove('selected'));
            target.classList.add('selected');
            if (currentNgo) mountDonation(currentNgo.id);
            return;
        }

        const value = target.getAttribute('data-value');
        if (value) {
            selectedDonationValue = parseInt(value);
            document.querySelectorAll('.donation-value-btn').forEach(el => el.classList.remove('active'));
            target.classList.add('active');
            const otherInput = document.getElementById('donationOtherValue');
            if (otherInput) otherInput.value = '';
            return;
        }

        // FLUXO DE DOAÇÃO COM ANIMAÇÃO SIMULADA ( não ta funcionando direito, mas é só uma simulação mesmo)
        if (target.id === 'confirmDonationBtn') {
            if (!currentUser || !currentNgo) {
                showToast('Faça login para realizar uma doação.', 'warning');
                return;
            }
            const otherVal = document.getElementById('donationOtherValue')?.value;
            const finalValue = otherVal ? parseFloat(otherVal) : selectedDonationValue;
            if (!finalValue || finalValue <= 0) { showToast('Selecione ou informe um valor válido.', 'warning'); return; }
            if (!selectedDonationMethod) { showToast('Selecione um método de pagamento.', 'warning'); return; }

            // Exibir animação de simulação
            const overlay = document.getElementById('loadingOverlay');
            if (overlay) {
                overlay.style.display = 'flex';
                overlay.innerHTML = `
                    <div class="text-center text-white p-4 rounded-4" style="background: rgba(22, 33, 62, 0.85); backdrop-filter: blur(8px); max-width: 320px;">
                        <div class="spinner-border text-light mb-3" style="width: 3rem; height: 3rem;" role="status"></div>
                        <h5 class="fw-bold mb-1">Processando Doação</h5>
                        <p class="small text-white-50 mb-0"><i class="bi bi-info-circle me-1"></i> Simulação de demonstração</p>
                    </div>
                `;
            }

            setTimeout(() => {
                if (overlay) {
                    overlay.style.display = 'none';
                    overlay.innerHTML = '<div class="spinner" aria-hidden="true"></div>';
                }

                const donations = getDonations();
                donations.push({
                    id: generateId(),
                    userId: currentUser.id,
                    ngoId: currentNgo.id,
                    value: finalValue,
                    method: selectedDonationMethod,
                    status: 'Confirmada (Fictícia)',
                    date: new Date().toLocaleDateString('pt-BR'),
                    timestamp: Date.now()
                });
                saveDonations(donations);

                const users = getUsers();
                const u = users.find(user => user.id === currentUser.id);
                if (u) {
                    u.points = (u.points || 0) + Math.floor(finalValue / 10);
                    saveUsers(users);
                    currentUser = u;
                }

                addNotification(`Doação simulada de R$ ${finalValue.toFixed(2)} para ${currentNgo.name} confirmada!`, 'bi-gift');
                showToast(t('donationSuccess'));
                showPage('confirmation', { type: 'donation', data: { value: finalValue, ngo: currentNgo.name } });
            }, 1500);
            return;
        }

        if (target.id === 'copyPixBtn') {
            const key = document.getElementById('pixKeyInput')?.value;
            if (key) {
                navigator.clipboard.writeText(key).then(() => showToast('Chave PIX copiada!')).catch(() => showToast('Erro ao copiar.', 'error'));
            }
            return;
        }

        // -----------------QUIZ (esse funcionou)-----------------
        if (target.id === 'quizNext') {
            const selected = document.querySelector('input[name="quizOpt"]:checked');
            if (!selected) { showToast('Selecione uma opção para continuar.', 'warning'); return; }
            quizAnswers[quizStep] = parseInt(selected.value);

            if (quizStep < QUIZ_QUESTIONS.length - 1) {
                quizStep++;
                mountQuiz();
            } else {
                // Finalização do Quiz
                if (currentUser) {
                    const settings = getSettings();
                    settings[currentUser.id] = settings[currentUser.id] || {};
                    settings[currentUser.id].quizDone = true;
                    saveSettings(settings);

                    const users = getUsers();
                    const u = users.find(user => user.id === currentUser.id);
                    if (u) {
                        u.points = (u.points || 0) + 50;
                        saveUsers(users);
                        currentUser = u;
                    }
                    addNotification('Quiz concluído! Você ganhou 50 pontos.', 'bi-star');
                }
                showToast(t('quizDone'));
                showPage('dashboard');
            }
            return;
        }

        if (target.id === 'quizPrev') {
            if (quizStep > 0) {
                const selected = document.querySelector('input[name="quizOpt"]:checked');
                if (selected) quizAnswers[quizStep] = parseInt(selected.value);
                quizStep--;
                mountQuiz();
            }
            return;
        }

        if (target.id === 'goToRegister') { showPage('register'); return; }
        if (target.id === 'goToLogin') { showPage('login'); return; }
        if (target.id === 'forgotPwd') { showToast('Funcionalidade em desenvolvimento.', 'warning'); return; }
        if (target.id === 'logoutBtn') { doLogout(); return; }
        if (target.id === 'profileBtn') { showPage('profile'); return; }

        if (target.id === 'ngoBackBtn' || target.id === 'scheduleBackBtn' || target.id === 'donationBackBtn') {
            showPage('dashboard');
            return;
        }

        if (target.id === 'searchBtn') {
            const search = document.getElementById('searchInput')?.value;
            const category = document.getElementById('filterCategory')?.value;
            const city = document.getElementById('filterCity')?.value;
            mountNgoGrid({ search, category, city });
            return;
        }

        if (target.id === 'viewFavorites') {
            const category = document.getElementById('filterCategory')?.value;
            const city = document.getElementById('filterCity')?.value;
            mountNgoGrid({ category, city, favorites: true });
            return;
        }
    });

    // Sub do Login
    document.getElementById('loginForm')?.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!this.checkValidity()) { this.classList.add('was-validated'); return; }
        const email = document.getElementById('loginEmail')?.value;
        const password = document.getElementById('loginPassword')?.value;
        if (!doLogin(email, password)) {
            showToast('E-mail ou senha incorretos.', 'error');
            this.classList.add('was-validated');
        }
    });

    // Sub do Cadastro
    document.getElementById('registerForm')?.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!this.checkValidity()) { this.classList.add('was-validated'); return; }
        const name = document.getElementById('regName')?.value;
        const email = document.getElementById('regEmail')?.value;
        const phone = document.getElementById('regPhone')?.value;
        const password = document.getElementById('regPassword')?.value;
        const confirm = document.getElementById('regConfirm')?.value;
        if (password !== confirm) { showToast('As senhas não coincidem.', 'error'); return; }
        doRegister(name, email, phone, password);
    });

    // Sub do Agendamento (correção do bug de não salvar o agendamento. Não tirar.)
    document.addEventListener('submit', function (e) {
        const form = e.target.closest('#scheduleForm');
        if (!form) return;
        e.preventDefault();
        if (!form.checkValidity()) { form.classList.add('was-validated'); return; }
        const date = document.getElementById('schedDate')?.value;
        const time = document.getElementById('schedTime')?.value;
        const msg = document.getElementById('schedMsg')?.value;
        if (!currentUser) { showToast('Faça login para agendar uma visita.', 'warning'); return; }

        const appointments = getAppointments();
        appointments.push({
            id: generateId(),
            userId: currentUser.id,
            ngoId: scheduleNgoId,
            date,
            time,
            message: msg,
            status: 'Confirmada',
            timestamp: Date.now()
        });
        saveAppointments(appointments);

        const users = getUsers();
        const u = users.find(user => user.id === currentUser.id);
        if (u) {
            u.points = (u.points || 0) + 20;
            u.volunteerCount = (u.volunteerCount || 0) + 1;
            saveUsers(users);
            currentUser = u;
        }

        const ngo = NGO_LIST.find(n => n.id === scheduleNgoId);
        addNotification(`Visita agendada e confirmada para ${date} às ${time} na ONG ${ngo ? ngo.name : ''}.`, 'bi-calendar-check');
        showToast(t('scheduleSuccess'));
        showPage('confirmation', { type: 'schedule', data: { date, time, ngo: ngo ? ngo.name : 'ONG' } });
    });
    
    
    // ----------------- NOTIFICAÇÕES (VINCULADAS AO USUÁRIO ATUAL) ----------------- 
   

    function addNotification(text, icon = 'bi-bell') {
        if (!currentUser) return;
        const notifs = getNotifications();
        // Adiciona a notificação vinculada exclusivamente ao ID do usuário atual
        notifs.unshift({
            id: generateId(),
            userId: currentUser.id,
            text,
            read: false,
            icon,
            time: 'agora'
        });
        // Mantém apenas as 30 mais recentes para evitar acúmulo - agora mantém 4, pq eu quero.
        saveNotifications(notifs.slice(0, 50));
        renderNotifications();
        updateNotifBadge();
    }

    function renderNotifications() {
        const list = document.getElementById('notifList');
        if (!list) return;

        if (!currentUser) {
            list.innerHTML = `<li class="dropdown-item-text text-muted text-center py-2">${t('noNotifications')}</li>`;
            return;
        }

        // Filtra apenas as notificações pertencentes ao usuário logado
        const userNotifs = getNotifications().filter(n => n.userId === currentUser.id);

        if (userNotifs.length === 0) {
            list.innerHTML = `<li class="dropdown-item-text text-muted text-center py-2">${t('noNotifications')}</li>`;
            return;
        }

        list.innerHTML = userNotifs.slice(0, 10).map(n => `
            <li class="dropdown-item notif-item ${n.read ? 'opacity-75' : 'fw-semibold'}" data-notif-id="${n.id}" style="cursor:pointer;">
                <div class="d-flex align-items-start gap-2">
                    <i class="bi ${n.icon} text-primary mt-1"></i>
                    <div>
                        <div style="font-size:0.85rem;">${n.text}</div>
                        <small class="text-muted" style="font-size:0.75rem;">${n.time}</small>
                    </div>
                </div>
            </li>
        `).join('');
    }

    function updateNotifBadge() {
        const badge = document.getElementById('notifBadge');
        if (!badge) return;

        if (!currentUser) {
            badge.textContent = '0';
            badge.style.display = 'none';
            return;
        }

        const userNotifs = getNotifications().filter(n => n.userId === currentUser.id);
        const unread = userNotifs.filter(n => !n.read).length;
        badge.textContent = unread;
        badge.style.display = unread > 0 ? 'inline' : 'none';
    }

    // Busca & Sugestões
    document.getElementById('searchInput')?.addEventListener('input', function () {
        const val = this.value.toLowerCase().trim();
        const box = document.getElementById('suggestionsBox');
        if (!box) return;
        if (val.length < 2) { box.classList.add('d-none'); return; }
        const matches = NGO_LIST.filter(n => n.name.toLowerCase().includes(val) || n.cause.toLowerCase().includes(val) || n.city.toLowerCase().includes(val)).slice(0, 5);
        if (matches.length === 0) { box.classList.add('d-none'); return; }
        box.innerHTML = matches.map(m => `<div class="suggestion-item" data-search="${m.name}"><i class="bi bi-building me-2"></i>${m.name} <small class="text-muted">- ${m.cause}, ${m.city}</small></div>`).join('');
        box.classList.remove('d-none');
    });

    document.addEventListener('click', function (e) {
        const item = e.target.closest('.suggestion-item');
        if (item) {
            const name = item.getAttribute('data-search');
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.value = name;
            document.getElementById('suggestionsBox')?.classList.add('d-none');
            mountNgoGrid({ search: name });
            return;
        }
        if (!e.target.closest('#searchInput') && !e.target.closest('.suggestions-box')) {
            document.getElementById('suggestionsBox')?.classList.add('d-none');
        }
    });

    // Modo escuro e Idioma ( isso pode ser retirado)
    document.getElementById('darkToggle')?.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        const darkIcon = document.getElementById('darkIcon');
        if (darkIcon) darkIcon.className = isDark ? 'bi bi-sun' : 'bi bi-moon-stars';
        if (currentUser) {
            const settings = getSettings();
            settings[currentUser.id] = settings[currentUser.id] || {};
            settings[currentUser.id].darkMode = isDark;
            saveSettings(settings);
        }
    });

    document.getElementById('langToggle')?.addEventListener('click', function () {
        const langs = ['pt', 'en', 'es'];
        currentLang = langs[(langs.indexOf(currentLang) + 1) % langs.length];
        const langLabel = document.getElementById('langLabel');
        if (langLabel) langLabel.textContent = getLangLabel();
        if (currentUser) {
            const settings = getSettings();
            settings[currentUser.id] = settings[currentUser.id] || {};
            settings[currentUser.id].lang = currentLang;
            saveSettings(settings);
        }
        showPage(currentPage);
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.placeholder = t('searchPlaceholder');
        showToast(`Idioma alterado para ${LANGUAGES[currentLang].name}`);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') document.getElementById('suggestionsBox')?.classList.add('d-none');
    });

    window.addEventListener('scroll', function () {
        const nav = document.getElementById('mainNav');
        if (nav) {
            if (window.scrollY > 30) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');
        }
    });

    document.addEventListener('click', function (e) {
        const btn = e.target.closest('.btn-ripple');
        if (!btn) return;
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        btn.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
    });

    
    // -----------------  INICIALIZAÇÃO DA APLICAÇÃO ----------------- 
    

    function init() {
        const savedUserId = sessionStorage.getItem('somar_userId');
        if (savedUserId) {
            const users = getUsers();
            const user = users.find(u => u.id === savedUserId);
            if (user) {
                currentUser = user;
                const userSettings = getSettings()[currentUser.id] || {};
                if (userSettings.darkMode) {
                    document.body.classList.add('dark-mode');
                    const darkIcon = document.getElementById('darkIcon');
                    if (darkIcon) darkIcon.className = 'bi bi-sun';
                }
                currentLang = userSettings.lang || 'pt';
                const langLabel = document.getElementById('langLabel');
                if (langLabel) langLabel.textContent = getLangLabel();

                setTimeout(() => {
                    showPage(userSettings.quizDone ? 'dashboard' : 'quiz');
                }, 250);

                renderNotifications();
                updateNotifBadge();
                return;
            }
        }
        setTimeout(() => { showPage('login'); }, 250);
    }

    setTimeout(init, 2500);

})();