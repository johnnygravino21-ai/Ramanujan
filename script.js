// ==========================================================================
// 1. BASE DE DADOS DOS CURSOS (Dados oficiais e limpos)
// ==========================================================================
const cursos = {
    matematica: {
        titulo: "Licenciatura em Matemática",
        descricao: "A Licenciatura em Matemática proporciona uma formação sólida em raciocínio lógico, modelação matemática, análise de dados e resolução de problemas complexos. O curso prepara profissionais para atuar no ensino, investigação científica, tecnologia, finanças e outras áreas que exigem pensamento analítico avançado.",
        importancia: "A Matemática é a linguagem universal da ciência. Está presente em praticamente todas as áreas do conhecimento, desde a engenharia e a informática até à economia e à medicina. O desenvolvimento tecnológico, a investigação científica e a tomada de decisões baseadas em dados dependem fortemente dos conhecimentos matemáticos.",
        programa: [
            "Álgebra Linear",
            "Cálculo Diferencial e Integral",
            "Geometria",
            "Estatística",
            "Análise Matemática",
            "Didática da Matemática"
        ],
        custo: "150.000 Kz por semestre"
    },
    informatica: {
        titulo: "Licenciatura em Informática",
        descricao: "A Licenciatura em Informática forma profissionais capazes de desenvolver software, criar aplicações, administrar sistemas informáticos e implementar soluções tecnológicas inovadoras. O curso combina conhecimentos teóricos e práticos para responder às exigências do mundo digital.",
        importancia: "A Informática é um dos principais motores da transformação digital. Empresas, governos e instituições dependem de sistemas informáticos para operar de forma eficiente. Os profissionais desta área desempenham um papel fundamental na inovação tecnológica, na automação de processos e na segurança da informação.",
        programa: [
            "Programação",
            "Base de Dados",
            "Redes de Computadores",
            "Inteligência Artificial",
            "Desenvolvimento Web",
            "Segurança Informática"
        ],
        custo: "180.000 Kz por semestre"
    },
    gestao: {
        titulo: "Licenciatura em Gestão de Empresas",
        descricao: "A Licenciatura em Gestão de Empresas prepara profissionais para planear, organizar e dirigir organizações públicas e privadas. O curso desenvolve competências em liderança, finanças, marketing, empreendedorismo e gestão estratégica.",
        importancia: "As organizações necessitam de gestores qualificados para utilizar recursos de forma eficiente e alcançar os seus objetivos. A Gestão de Empresas contribui para o crescimento económico, a criação de empregos e o desenvolvimento sustentável das instituições e da sociedade.",
        programa: [
            "Economia",
            "Contabilidade",
            "Marketing",
            "Gestão Financeira",
            "Empreendedorismo",
            "Recursos Humanos"
        ],
        custo: "170.000 Kz por semestre"
    },
    educacao: {
        titulo: "Licenciatura em Educação",
        descricao: "A Licenciatura em Educação forma profissionais comprometidos com o desenvolvimento humano e a transformação social através do ensino. O curso aborda metodologias pedagógicas modernas, psicologia da aprendizagem e tecnologias educacionais.",
        importancia: "A educação é um dos pilares fundamentais do progresso de qualquer sociedade. Professores e educadores desempenham um papel decisivo na formação de cidadãos conscientes, críticos e preparados para enfrentar os desafios do mundo contemporâneo.",
        programa: [
            "Psicologia da Educação",
            "Didática",
            "Avaliação Educacional",
            "Tecnologias Educacionais",
            "Currículo",
            "Metodologia de Ensino"
        ],
        custo: "140.000 Kz por semestre"
    }
};

// ==========================================================================
// 2. FUNÇÕES GLOBAIS (Chamadas diretamente pelos botões e cliques no HTML)
// ==========================================================================

// --- Controlo da Janela Modal de Cursos ---
function abrirCurso(nome) {
    const curso = cursos[nome];
    if (!curso) return;

    document.getElementById("tituloCurso").innerText = curso.titulo;
    document.getElementById("descricaoCurso").innerText = curso.descricao;
    document.getElementById("importanciaCurso").innerText = curso.importancia;
    document.getElementById("custoCurso").innerText = curso.custo;

    const lista = document.getElementById("programaCurso");
    lista.innerHTML = "";
    
    curso.programa.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        lista.appendChild(li);
    });

    document.getElementById("modalCurso").style.display = "block";
}

// --- Fechar a Janela Modal de Cursos ---
function fecharCurso() {
    const modal = document.getElementById("modalCurso");
    if (modal) {
        modal.style.display = "none";
    }
}

// --- Controlo da Lightbox da Galeria ---
function abrirLightbox(src, legenda) {
    const lightbox = document.getElementById("lightboxGaleria");
    const imgElement = document.getElementById("imgLightbox");
    const captionElement = document.getElementById("legendaLightbox");

    if (lightbox && imgElement && captionElement) {
        imgElement.src = src;
        captionElement.innerText = legenda;
        lightbox.style.display = "flex"; // Exibe como Flexbox para centrar perfeitamente a imagem na tela
    }
}

// --- Fechar a Lightbox da Galeria ---
function fecharLightbox() {
    const lightbox = document.getElementById("lightboxGaleria");
    if (lightbox) {
        lightbox.style.display = "none";
    }
}

// ==========================================================================
// 3. INICIALIZAÇÃO DE EVENTOS INTERATIVOS (Executados ao carregar a página)
// ==========================================================================
document.addEventListener("DOMContentLoaded", function () {
    
    // --- 3.1. Modal da Equipa / Autor (João Gravino) ---
    const modalEquipa = document.getElementById("modalEquipa");
    const btnEquipa = document.getElementById("btnEquipa");
    const fecharModalEquipa = document.getElementById("fecharModal");

    if (btnEquipa && modalEquipa) {
        btnEquipa.addEventListener("click", () => {
            modalEquipa.style.display = "block";
        });
    }

    if (fecharModalEquipa && modalEquipa) {
        fecharModalEquipa.addEventListener("click", () => {
            modalEquipa.style.display = "none";
        });
    }

    // --- 3.2. Fechar Modais Automaticamente ao Clicar no Fundo Escuro ---
    window.addEventListener("click", function (event) {
        const modalCurso = document.getElementById("modalCurso");
        
        if (event.target === modalEquipa) {
            modalEquipa.style.display = "none";
        }
        if (event.target === modalCurso) {
            modalCurso.style.display = "none";
        }
    });

    // --- 3.3. Menu Responsivo (Hambúrguer em Dispositivos Móveis) ---
    const menuToggle = document.getElementById("menu-toggle");
    const navList = document.querySelector(".nav-list");

    if (menuToggle && navList) {
        menuToggle.addEventListener("click", () => {
            navList.classList.toggle("active");
        });
    }

    // --- 3.4. Botão Inteligente "Voltar ao Topo" ---
    const btnTopo = document.getElementById("btnTopo");
    
    window.addEventListener("scroll", function () {
        // Exibe o botão se o utilizador descer mais de 400 píxeis, caso contrário oculta
        if (window.scrollY > 400) {
            if (btnTopo) btnTopo.style.display = "flex";
        } else {
            if (btnTopo) btnTopo.style.display = "none";
        }
    });

    if (btnTopo) {
        btnTopo.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // --- 3.5. Sistema de Alternância e Guardado do Modo Escuro ---
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    
    // Restaura o tema escolhido na sessão anterior do utilizador
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        if (darkModeToggle) darkModeToggle.innerText = "☀️";
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            const temaAtual = document.documentElement.getAttribute("data-theme");
            
            if (temaAtual === "dark") {
                document.documentElement.removeAttribute("data-theme");
                darkModeToggle.innerText = "🌙";
                localStorage.setItem("tema", "light");
            } else {
                document.documentElement.setAttribute("data-theme", "dark");
                darkModeToggle.innerText = "☀️";
                localStorage.setItem("tema", "dark");
            }
        });
    }

    // --- 3.6. Animações Inteligentes ao Aparecer com o Scroll (Intersection Observer) ---
    const elementosAnimados = document.querySelectorAll(".scroll-anima");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Dispara a animação assim que 15% da secção estiver visível no ecrã
            if (entry.isIntersecting) {
                entry.target.classList.add("visivel");
                observer.unobserve(entry.target); // Desliga o observador para animar apenas uma vez
            }
        });
    }, {
        threshold: 0.15 
    });

    elementosAnimados.forEach(elemento => {
        observer.observe(elemento);
    });
});