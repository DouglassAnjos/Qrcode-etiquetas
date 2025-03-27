$(document).ready(() => {
    function changeImageHome() {
        let images = [];
        let titleTextImage = [];
        let contentTextImage = [];
        let i = 0;

        images[0] = "/public/section-home-2.jpg";
        titleTextImage[0] = "Acesse de onde estiver";
        contentTextImage[0] = `Você acessa o sistema para marcenaria da IntProcess de qualquer dispositivo: Computador, notebook, celular ou tablet. Sem instalações e sem complicação. Faça a gestão da sua marcenaria aonde estiver, e controle sua equipe de qualquer lugar do mundo e veja seu empreendimento crescer. Tudo isso e muito mais.`;

        images[1] = "/public/section-home-3.jpg";
        titleTextImage[1] = "ERP para sua marcenaria";
        contentTextImage[1] = `Estamos prontos para colocar nossas soluções e experiência adaptadas à indústria moveleira para trabalhar com você.`;

        images[2] = "/public/section-home-4.jpg";
        titleTextImage[2] = "Produção e PCP";
        contentTextImage[2] = `Simplifique seu processo de orçamento, gerando automaticamente em um contrato com apenas um toque. Mantenha o controle sobre sua produção e acompanhamento do PCP. Tudo isso, de forma fácil e eficiente.`;

        images[3] = "/public/section-home-1.jpg";
        titleTextImage[3] = "Gestão para sua marcenaria";
        contentTextImage[3] = `Olá dono de marcenaria... Nossa plataforma veio para otimizar seus processos e garantir uma produção mais eficiente. Entre em contato conosco para conhecer melhor e fazer seu negócio alavancar de vez.`;

        setTimeout(() => {
            changePicture();
        }, 5000);

        function changePicture() {
            $("#section-home").css(
                "background-image",
                "url" + "(" + images[i] + ")"
            );

            setTimeout(() => {
                $(".title-text-image-section-home").html(titleTextImage[i]);
                $(".content-text-image-section-home").html(contentTextImage[i]);
            }, 2000);

            if (i < images.length - 1) {
                i++;
            } else {
                i = 0;
            }

            setTimeout(changePicture, 5000);
        }
    }

    changeImageHome();

    let sliderPerViewDinamic = 3;

    if (window.screen.width <= 1000) {
        sliderPerViewDinamic = 2;
        if (window.screen.width <= 700) {
            sliderPerViewDinamic = 1;
        }
    }

    const swiper = new Swiper(".swiper", {
        direction: "horizontal",
        slidesPerView: sliderPerViewDinamic,
        spaceBetween: 20,
        navigation: {
            nextEl: ".fa-chevron-right",
            prevEl: ".fa-chevron-left",
        },
    });
});

$(".btn-zap-fixed").click(function () {
    window.open(
        "https://api.whatsapp.com/send?phone=5537999110157&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20mais%20sobre%20a%20plataforma%20IntProcess."
    );
});

$("#btn-more-informations-plan-basic").click(function () {
    window.open(
        "https://wa.me/5537999110157?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+as+funcionalidades+do+plano+Basic."
    );
});

$("#btn-more-informations-plan-standard").click(function () {
    window.open(
        "https://wa.me/5537999110157?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+as+funcionalidades+do+plano+Standard."
    );
});

$("#btn-more-informations-plan-plus").click(function () {
    window.open(
        "https://wa.me/5537999110157?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+as+funcionalidades+do+plano+Plus."
    );
});

// Inicialização do AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Função para fechar o menu mobile
function closeNavbar() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
        document.querySelector('.navbar-toggler').click();
    }
}

// Fecha o menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeNavbar);
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (e) => {
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const togglerButton = document.querySelector('.navbar-toggler');
    
    if (!navbar.contains(e.target) || (!navbarCollapse.contains(e.target) && !togglerButton.contains(e.target))) {
        if (navbarCollapse.classList.contains('show')) {
            closeNavbar();
        }
    }
});

// Configuração do Swiper para o carrossel de benefícios
const beneficiosSwiper = new Swiper('.beneficios-swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    speed: 800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 'auto',
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 'auto',
            spaceBetween: 25,
        },
    },
    on: {
        init: function() {
            setTimeout(() => {
                this.update();
            }, 100);
        }
    }
});

// Efeito de scroll no header com gradiente
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.background = 'var(--gradient-secondary)';
        header.classList.remove('scrolled');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scrolled')) {
        header.style.background = 'rgba(0, 49, 255, 0.95)';
        header.classList.add('scrolled');
    } else if (currentScroll < lastScroll && header.classList.contains('scrolled')) {
        header.style.background = 'var(--gradient-secondary)';
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Manipulação do formulário de contato
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simular envio do formulário
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        // Simular delay de envio
        setTimeout(() => {
            // Aqui você pode adicionar a lógica real de envio do formulário
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada!';
            
            // Resetar formulário após 2 segundos
            setTimeout(() => {
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }, 1500);
    });
}

// Animação dos cards de planos com efeito de borda
const planCards = document.querySelectorAll('.plano-card');
planCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0, 49, 255, 0.2)';
        if (!card.classList.contains('featured')) {
            card.style.borderColor = '#0031ff';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        if (!card.classList.contains('featured')) {
            card.style.borderColor = 'rgba(0, 49, 255, 0.1)';
        }
    });
});

// Botão do WhatsApp
const whatsappBtn = document.querySelector('.btn-whatsapp');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
        window.open('https://wa.me/5537999110157?text=Ol%C3%A1,%20gostaria%20de%20conhecer%20mais%20sobre%20a%20plataforma%20IntProcess.', '_blank');
    });
}

// Validação de campos do formulário
const formInputs = document.querySelectorAll('.form-control');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });
});

// Função para animação de contagem de preço
function animatePrice(element, finalPrice) {
    let currentPrice = 0;
    const duration = 2000; // 2 segundos
    const steps = 60;
    const increment = finalPrice / steps;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
        currentPrice += increment;
        if (currentPrice >= finalPrice) {
            currentPrice = finalPrice;
            clearInterval(interval);
        }
        element.textContent = `R$ ${currentPrice.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    }, stepDuration);
}

// Iniciar animação de preços quando os elementos estiverem visíveis
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const priceElements = entry.target.querySelectorAll('.valor');
            priceElements.forEach(element => {
                const finalPrice = parseFloat(element.getAttribute('data-price'));
                animatePrice(element, finalPrice);
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.plano-card').forEach(card => {
    observer.observe(card);
});

// Função para scroll suave até as seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Funções para o Modal de Planos
function openModal() {
    document.getElementById('modalPlanos').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalPlanos').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function selectPlan(plano) {
    const mensagens = {
        'start': 'Olá! Tenho interesse no Plano Start da IntProcess. Pode me dar mais informações?',
        'standard': 'Olá! Gostaria de saber mais sobre o Plano Standard da IntProcess.',
        'plus': 'Olá! Estou interessado no Plano Plus da IntProcess. Pode me ajudar?'
    };
    
    window.open(`https://wa.me/553799110157?text=${encodeURIComponent(mensagens[plano])}`, '_blank');
    closeModal();
}

// Adicionar eventos aos botões de contratação
document.addEventListener('DOMContentLoaded', function() {
    // Botão geral de contratação
    const btnContratar = document.querySelectorAll('.btn-contratar');
    btnContratar.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    // Botões específicos dos planos
    const btnPlanos = document.querySelectorAll('.plano-card .btn-primary');
    btnPlanos.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const plano = this.closest('.plano-card').getAttribute('data-plano');
            if (plano) {
                selectPlan(plano);
            } else {
                openModal();
            }
        });
    });

    // Fechar modal ao clicar fora
    window.onclick = function(event) {
        const modal = document.getElementById('modalPlanos');
        if (event.target == modal) {
            closeModal();
        }
    }
});

// Atualizar classes dos botões
document.querySelectorAll('.formas-pagamento .btn-primary').forEach(btn => {
    btn.classList.add('btn-contratar');
});
    
