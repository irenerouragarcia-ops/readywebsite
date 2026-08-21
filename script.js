// script.js

// --- 1. Content Data (Bilingual) ---
const translations = {
    en: {
        nav: { about: "About", sessions: "Sessions", results: "Testimonials", resources: "Resources", book: "Book", shop: "Shop", contact: "Contact" },
        hero: {
            title: "Irene Roura García",
            subtitle: "Nurse · Wellbeing Coach · Hypnotherapist · FND Specialist",
            cta: "Book Discovery Call",
            tools_link: "FND Care Guide",
            stories_link: "Read more →"
        },
        home: {
            quotes_title: "Testimonials",
            consult_cta: "Consultation",
            // DRAFT COPY (Aug 2026 SEO pass) — Irene to put in her own voice. Keep in step with index.html.
            intro_title: "Specialist support for FND",
            intro_html: "<p>I'm Irene Roura Garc\u00eda, a nurse specialised in mental health, a wellbeing coach, a hypnotherapist and an FND specialist. I spent four years on an NHS inpatient neuropsychiatry ward alongside people living with Functional Neurological Disorder, and I have worked with the condition ever since.</p><p>I work online with people living with FND, and with their carers and families, in English and in Spanish, one to one, in groups, and through courses.</p>",
            work_title: "How I can help",
            work_html: "<p><strong>Sessions.</strong> One-to-one wellbeing coaching, hypnotherapy and FND support, plus group sessions and courses. <a href=\"sessions.html\" class=\"highlight-link\">See the sessions and prices</a>.</p><p><strong>The book.</strong> The <em>FND Care Guide</em>, written with people living with FND. <a href=\"book.html\" class=\"highlight-link\">About the book</a>.</p><p><strong>The free FND care guide.</strong> Tools, lived experience and support links shared by the FND community. <a href=\"https://fndcareguide.com\" target=\"_blank\" rel=\"noopener\" class=\"highlight-link\">Visit fndcareguide.com</a>.</p>"
        },
        about: {
            title: "Nurse, coach & hypnotherapist.\nFND Specialist",
            full_text: "<p>I am a nurse specialised in mental health, a hypnotherapist, a wellbeing coach and a Functional Neurological Disorder (FND) specialist. I have worked as a nurse on NHS mental health, neurology and neuropsychiatry wards. I spent four years on an inpatient neuropsychiatric ward supporting people living with FND, where I first met the condition and where my commitment to supporting people living with it began.</p><p>From early in my training I was drawn to approaches that support the mind–body connection and the regulation of the nervous system. I now bring my clinical experience together with hypnotherapy, mindfulness and polyvagal-informed practices. I believe meaningful and lasting change comes from a holistic approach, and from focusing on practical, helpful steps that can be adapted to each person's circumstances and energy.</p><p>Today I work with people living with FND around the world. I offer one-to-one sessions, I run group sessions and programmes, and I collaborate with FND charities to deliver courses. I work in English and in Spanish, and often with families as well as with the person who has the diagnosis.</p><p>I am the author of the <em>FND Care Guide</em>, written in collaboration with people who have lived experience of FND, and a member of the FND UK Network, where I represent the Royal College of Nursing. Whether you are newly diagnosed, still waiting for answers, or years into living with FND, you are welcome to book a free consultation and talk things through with me.</p>",
            credentials_title: "Credentials & trust",
            credentials_html: "<ul class=\"credentials-list\"><li>Registered General Nurse, specialised in Mental Health — NHS experience in mental health, neurology and neuropsychiatry, etc. (<a href=\"certificates/nursing-certificate.pdf\" target=\"_blank\" class=\"highlight-link\">view certificate</a>)</li><li>Hypnotherapist (view credentials: <a href=\"certificates/hpd-nch.pdf\" target=\"_blank\" class=\"highlight-link\">HPD — NCH</a> · <a href=\"certificates/hpd-uk-academy.pdf\" target=\"_blank\" class=\"highlight-link\">HPD — UK Academy</a>)</li><li>Wellbeing Coach</li><li>Member of the <a href=\"https://ukfndnetwork.org/\" target=\"_blank\" rel=\"noopener\" class=\"highlight-link\">FND UK Network</a> — representing the Royal College of Nursing</li><li>Author of the <a href=\"https://fnd-care.myshopify.com/products/pre-order-fnd-care-guide-book-1st-edition?utm_source=site&utm_medium=aboutpage\" target=\"_blank\" rel=\"noopener\" class=\"highlight-link\"><em>FND Care Guide</em></a></li></ul>",
            approach_title: "My approach",
            approach_html: "<p>I combine clinical experience with mindfulness, CBT-informed and polyvagal-informed practices, and hypnotherapy, amongst other practices that support nervous system regulation and overall wellbeing — always translated into practical, sustainable steps adapted to each person's circumstances, needs and energy.</p><p>My approach is gentle and compassionate: first, I will hear you. From there, I will suggest a path and a plan for us to explore together as we move towards the life you want to live.</p>"
        },
        sessions: {
            title: "FND Support Sessions, Coaching and Hypnotherapy",
            intro_html: "<p>I offer support in a range of formats, including one-to-one sessions, regular group meetings and educational programmes.</p><p>Below, you can find examples of some of the support packages that have worked well for other clients. Each package can be tailored to your individual needs, goals and circumstances.</p><p>When you book your discovery call we can meet and explore the type of support that may be most helpful for you.</p>",
            offer1_title: "Wellbeing coaching",
            offer1_text: "Personalised sessions designed to support your wellbeing and the management of your symptoms — using practical, sustainable tools from mindfulness, CBT, polyvagal-informed and other nervous system regulation approaches, to help you rebuild safety, control and inner resources in everyday life.",
            offer2_title: "Hypnotherapy for FND",
            offer2_text: "Subconscious-focused (similar to relaxation-based) work to reframe unhelpful patterns and support long-standing conditions and associated symptoms such as anxiety and low mood. Sessions use personalised scripts tailored to what helps you feel calm, safe, and supported.",
            offer3_title: "FND support sessions",
            offer3_text: "Specialist guidance for people living with Functional Neurological Disorder. Support focused on understanding and managing your symptoms, building confidence, improving well-being and reclaiming a sense of control in your life.",
            btn: "Book Discovery Call",
            // DRAFT COPY (Aug 2026 SEO pass) — Irene to reword; keep in step with sessions.html.
            faq_title: "Questions people often ask",
            faq_html: "<h3>How long is a session?</h3><p>Most sessions are one hour. There is also a longer 1.5-hour session that includes a personalised hypnotherapy audio recording for you to keep. Prices for single sessions and for packages are listed above.</p><h3>What happens in a wellbeing coaching session?</h3><p>We start from what is going on for you, and work with practical, sustainable tools drawn from mindfulness, CBT-informed and polyvagal-informed approaches. Sessions inside a package are weekly, and I send handouts and resources by email after each one.</p><h3>What is a hypnotherapy session like?</h3><p>It is subconscious-focused work, very similar to relaxation. The scripts are personalised to what helps you feel calm, safe and supported, and some sessions include a recording you can listen to at home.</p><h3>Do you run group sessions and courses?</h3><p>Yes — weekly closed group sessions and regular open monthly ones, plus two courses: Mindfulness for Positive Self-coaching, and FND Self-care and the Nervous System. You can join the groups and get the course material through my Patreon.</p><h3>Can we work in Spanish, and how do we start?</h3><p>I work in English and in Spanish. The first step is a free discovery call, where we talk about what is going on for you and what kind of support might suit you best.</p>",

            sessions_footer_note: "*All sessions within the packages are weekly, one hour long and include follow-up emails with handouts and additional resources after each session.",

            opt1_title: "1:1 sessions and packages",
            opt1_item1: "1 hour session",
            opt1_item1_note: "(wellbeing coaching)",
            opt1_item2: "1.5 hour session + hypnotherapy recording",
            opt1_item2_note: "(wellbeing coaching + hypnotherapy)",
            opt1_group1_title: "Wellbeing Coaching Packs",
            opt1_pack3: "3 sessions pack",
            opt1_pack3_note: "(wellbeing coaching)",
            opt1_pack6: "6 sessions pack",
            opt1_pack6_note: "(includes 1 hypnotherapy session)",
            opt1_group2_title: "Coaching & Hypnotherapy Packs",
            opt1_special_html: "<ul class=\"package-features\"><li>6 × 1-hour weekly sessions</li><li>3 hypnotherapy sessions integrated within the process</li><li>Handouts and resources after each session</li><li>2 personalised audio recordings to use between sessions and afterwards</li></ul>",
            opt1_special_total: "Total",
            opt1_group3_title: "Family Packs",
            opt1_family_link: "Get in touch to tailor yours",
            opt1_note: "*All sessions within the packages are weekly, one hour long and include follow-up emails with handouts and additional resources after each session.",
            opt2_title: "Group sessions and courses (English and Spanish)",
            opt2_courses_title: "Courses:",
            opt2_courses_html: "<ul class=\"package-features\"><li>Mindfulness for Positive Self-coaching</li><li>FND Self-care and the Nervous System</li></ul>",
            opt2_groups_text: "I also run weekly closed group sessions and regular open monthly group sessions.",
            opt2_signup_text: "You can sign up to join groups and get access to my course material via my Patreon.",
            opt2_collab_text: "Open to working with community groups, clinical sites and charities to deliver existing courses and programs and to develop new ones.",
            opt2_collab_btn: "Get in touch",
            opt2_patreon_btn: "Join my Patreon",

            q1: "I listen to her hypnosis every night, and it helps me feel calmer, more positive, and more in control. Over time, I've noticed that my confidence has grown, and I've learned better ways to manage my symptoms.",
            q1_attr: "1:1 client",
            q5: "The individual sessions supported me in every way: I felt understood and always received practical tools that helped me.",
            q5_attr: "1:1 client",
            q2: "As her mum, I just wanted to share how much improvement we have seen since our session with Irene. The positive changes in our daughter have been wonderful to see. She seems much calmer, more confident, and better able to manage the challenges she faces day to day. The hypnotherapy recordings have become an important part of our routine. Not only does our daughter benefit from listening to them, but my husband and I do too. We often listen to the hypnotherapy at night, and it helps us relax and sleep much better. It's rare to find someone who even knows about FND, let alone specialises in it. We feel blessed that we found Irene!",
            q2_attr: "Parent of a 1:1 client",
            q3: "I met people I truly felt understood my experience... Irene's soft and soothing nature and wealth of experience means you are in the right hands. This is an extremely special thing Irene has created for FND patients.",
            q3_attr: "Group member - Patreon",
            q4: "Every week I look forward to Wednesday. It has been so comforting to meet people who share the same condition and to feel understood — guided by Irene: warm, human, and a true professional.",
            q4_attr: "Group member - Patreon"
        },
        resources: {
            title: "Free FND resources",
            text: "Free guides, FND care tools, and mindfulness exercises to calm your mind.",
            item1: "FND Useful Links",
            item2: "Grounding Exercise",
            item3: "FND Care Whatsapp Group",
            item4: "Personalized Hypnotherapy Audio",
            // DRAFT COPY (Aug 2026 SEO pass) — Irene to reword; keep in step with resources.html.
            item1_desc: "A shared document collecting links to FND organisations, explanations of the condition, and places to look for support.",
            item2_desc: "A short grounding exercise you can try in a couple of minutes, shared as a post on my Instagram.",
            item3_desc: "A WhatsApp group where I share news and updates.",
            item4_desc: "A hypnotherapy recording made for you, with a script based on what helps you feel calm and supported. This one is paid. The link opens a secure Stripe checkout.",
            more_coming: "More resources coming up soon",
            community_btn: "FND Community and Support",
            viz_title: "FND Keywords and Concepts",
            view_btn: "View Link",
            join_btn: "Join Group",
            btn: "View Library →"
        },
        shop: {
            title: "Shop",
            text: "Products coming up soon.",
            btn: "Visit Full Shop"
        },
        results: {
            title: "What people say about working with Irene",
            f_all: "All",
            f_1to1: "1:1 sessions",
            f_group: "Courses / Group Sessions",
            disclaimer: "Participant-reported experiences from anonymous program/courses surveys. Support is educational and complementary — not a substitute for medical care.",
            load_error: "Stories are temporarily unavailable — please refresh the page, or get in touch."
        },
        book: {
            title: "FND Care Guide Book",
            tagline: "Written in collaboration with people living with FND and created with care, clarity, and intention, this guide is a compassionate, practical handbook designed to share with you what has helped other people living with FND manage their symptoms, feel more in control, and improve their wellbeing — and what might help you, too. It has been shaped by the insights and voices of the FND community.",
            inside_title: "What's inside",
            inside_html: "<ul class=\"book-features-list\"><li>Practical tools to help you manage symptoms and feel more in control</li><li>Everyday practices to support your body and mind</li><li>Lived experiences and shared wisdom from the FND community</li><li>Guidance for navigating FND and building your personal toolkit</li><li>A reminder that improvement, connection, and hope are possible</li><li>Messages of support from the community</li></ul>",
            who_title: "Who it's for",
            who_html: "<ul class=\"book-features-list\"><li>People living with FND</li><li>Their families</li><li>Healthcare professionals</li><li>And everyone else</li></ul>",
            buy_btn: "First Special Edition",
            amazon_btn: "Get it on Amazon",
            reviews_title: "Book Reviews"
        },
        support: {
            pro_title: "Collaboration",
            pro_text: "Talks, conferences, training and collaborations.",
            pro_cta: "GET IN TOUCH",
            pro_cta_contact: "Get in touch"
        },
        signup: {
            title: "Get gentle, practical FND tools and latest news in your inbox",
            btn: "Join the newsletter",
            audio_title: "Get your free relaxation audio",
            audio_btn: "Get the audio"
        },
        contact: {
            title: "Contact",
            text: "Subscribe to the newsletter or get in touch below.",
            email_btn: "Send Email",
            news_title: "Newsletter",
            news_text: "Stay updated with latest news and resources.",
            news_btn: "Subscribe",
            insta_title: "Instagram",
            insta_text: "Daily insights and content.",
            insta_btn: "Follow"
        },
        footer: {
            rights: "All rights reserved."
        }
    },
    es: {
        nav: { about: "Sobre mí", sessions: "Sesiones", results: "Testimonios", resources: "Recursos", book: "Libro", shop: "Tienda", contact: "Contacto" },
        hero: {
            title: "Irene Roura García",
            subtitle: "Enfermera · Coach de Bienestar · Hipnoterapeuta · Especialista TNF",
            cta: "Reservar Llamada de Descubrimiento",
            tools_link: "Guía de Cuidado TNF",
            stories_link: "Lee más →"
        },
        home: {
            quotes_title: "Testimonios",
            consult_cta: "Consulta",
            // BORRADOR (revision SEO agosto 2026) — Irene: ponlo en tus palabras.
            intro_title: "Apoyo especializado Trastorno Neurológico Funcional (TNF)",
            intro_html: "<p>Soy Irene Roura Garc\u00eda, enfermera especializada en salud mental, coach de bienestar, hipnoterapeuta y especialista en Trastorno Neurol\u00f3gico Funcional (TNF). Trabaj\u00e9 durante cuatro a\u00f1os en una unidad de hospitalizaci\u00f3n de neuropsiquiatr\u00eda del NHS junto a personas que viven con TNF, y desde entonces sigo trabajando con esta condici\u00f3n.</p><p>Acompa\u00f1o online a personas con TNF y a sus familiares y cuidadores, en ingl\u00e9s y en espa\u00f1ol, de forma individual, en grupo y a trav\u00e9s de cursos.</p>",
            work_title: "C\u00f3mo puedo ayudarte",
            work_html: "<p><strong>Sesiones.</strong> Sesiones individuales de coaching de bienestar, hipnoterapia y apoyo TNF, adem\u00e1s de sesiones grupales y cursos. <a href=\"sesiones.html\" class=\"highlight-link\">Ver las sesiones y los precios</a>.</p><p><strong>El libro.</strong> <em>FND Care Guide</em>, escrita junto a personas que viven con TNF. Pr\u00f3ximamente en espa\u00f1ol. <a href=\"libro.html\" class=\"highlight-link\">Sobre el libro</a>.</p><p><strong>La gu\u00eda gratuita.</strong> Herramientas, experiencias vividas y enlaces de apoyo compartidos por la comunidad TNF. <a href=\"https://guiadecuidadotnf.com\" target=\"_blank\" rel=\"noopener\" class=\"highlight-link\">Visita guiadecuidadotnf.com</a>.</p>"
        },
        about: {
            title: "Enfermera, coach e hipnoterapeuta.\nEspecialista en TNF",
            full_text: "<p>Soy enfermera especializada en salud mental, hipnoterapeuta, coach de bienestar y especialista en Trastorno Neurológico Funcional (TNF). He trabajado como enfermera en unidades de salud mental, neurología y neuropsiquiatría del NHS (el sistema público de salud en Inglaterra). Pasé cuatro años en una unidad de hospitalización de neuropsiquiatría apoyando a personas que viven con TNF, donde conocí esta condición por primera vez y donde nació mi compromiso de acompañar a quienes viven con ella.</p><p>Desde el inicio de mi formación me interesaron los enfoques que apoyan la conexión mente-cuerpo y la regulación del sistema nervioso. Hoy combino mi experiencia clínica con hipnoterapia, mindfulness y prácticas basadas en la teoría polivagal. Creo que el cambio profundo y duradero surge de un enfoque holístico y de centrarse en pasos prácticos y útiles, adaptados a las circunstancias y a la energía de cada persona.</p><p>Actualmente acompaño a personas que viven con TNF en distintos países del mundo, ayudándoles a recuperar su autonomía, control, bienestar y regulación. Ofrezco sesiones individuales, facilito sesiones y programas de grupo, y colaboro con organizaciones benéficas de TNF impartiendo cursos. Trabajo en inglés y en español, y a menudo también con las familias y cuidadores.</p><p>Soy autora del libro <em>FND Care Guide</em> (escrito en colaboración con personas con experiencia vivida de TNF) y miembro de la FND UK Network, donde represento al Royal College of Nursing.</p><p>Tanto si acabas de recibir el diagnóstico, como si sigues esperando respuestas o llevas años viviendo con TNF, te animo a contactar conmigo y reservar una consulta gratuita, independientemente de los síntomas. He conocido y apoyado a muchas personas con síntomas diferentes. Estaré encantada de conocerte.</p>",
            credentials_title: "Credenciales y confianza",
            credentials_html: "<ul class=\"credentials-list\"><li>Enfermera, especializada en Salud Mental — experiencia en el NHS en salud mental, neurología y neuropsiquiatría, etc. (<a href=\"../certificates/nursing-certificate.pdf\" target=\"_blank\" class=\"highlight-link\">Certificado</a>)</li><li>Hipnoterapeuta (ver credenciales: <a href=\"../certificates/hpd-nch.pdf\" target=\"_blank\" class=\"highlight-link\">HPD — NCH</a> · <a href=\"../certificates/hpd-uk-academy.pdf\" target=\"_blank\" class=\"highlight-link\">HPD — UK Academy</a>)</li><li>Coach de bienestar</li><li>Miembro de la <a href=\"https://ukfndnetwork.org/\" target=\"_blank\" rel=\"noopener\" class=\"highlight-link\">FND UK Network</a> — en representación del Real Colegio de Enfermería en UK</li><li>Autora del libro <a href=\"https://fnd-care.myshopify.com/products/pre-order-fnd-care-guide-book-1st-edition?utm_source=site&utm_medium=aboutpage\" target=\"_blank\" rel=\"noopener\" class=\"highlight-link\"><em>FND Care Guide</em></a></li></ul>",
            approach_title: "Mi enfoque",
            approach_html: "<p>Combino la experiencia clínica con mindfulness, prácticas informadas por la TCC y la teoría polivagal, e hipnoterapia, entre otras prácticas que apoyan la regulación del sistema nervioso y el bienestar general — siempre traducido en pasos prácticos y sostenibles, adaptados a las circunstancias, necesidades y energía de cada persona.</p><p>Mi enfoque es amable y compasivo: primero, te escucho y te entiendo. A partir de ahí, te propongo un camino y un plan para explorar junt@s mientras avanzamos hacia la vida que quieres vivir.</p>"
        },
        sessions: {
            title: "Sesiones de apoyo TNF, coaching e hipnoterapia",
            intro_html: "<p>Ofrezco apoyo en diversos formatos, incluyendo sesiones individuales, reuniones grupales y programas educativos.</p><p>A continuación encontrarás ejemplos de algunos de los paquetes de apoyo que han funcionado bien para otros clientes. Cada paquete puede adaptarse a tus necesidades, objetivos y circunstancias individuales.</p><p>Reserva una llamada de descubrimiento conmigo para que podamos hablar del tipo de apoyo que puede ser más útil para ti.</p>",
            offer1_title: "Coaching de bienestar",
            offer1_text: "Sesiones personalizadas diseñadas para apoyar tu bienestar y el manejo de tus síntomas — utilizando herramientas prácticas y sostenibles basadas en mindfulness, TCC, la teoría polivagal y otros enfoques de regulación del sistema nervioso, para ayudarte a reconstruir seguridad, control y recursos internos en tu vida diaria.",
            offer2_title: "Hipnoterapia para el TNF",
            offer2_text: "Trabajo enfocado en el subconsciente (similar a la relajación) para reencuadrar patrones poco útiles y apoyar condiciones de larga duración y síntomas asociados como ansiedad y bajo estado de ánimo. Las sesiones utilizan guiones personalizados adaptados a lo que te ayuda a sentir calma, seguridad y apoyo.",
            offer3_title: "Sesiones de apoyo TNF",
            offer3_text: "Acompañamiento especializado para personas que viven con Trastorno Neurológico Funcional. Un apoyo centrado en comprender tus síntomas, fortalecer la confianza y recuperar una sensación de control sobre tu vida. (Sesiones de grupo e individuales)",
            btn: "Reservar Llamada",
            // BORRADOR (revision SEO agosto 2026) — Irene: ponlo en tus palabras.
            faq_title: "Preguntas frecuentes",
            faq_html: "<h3>¿Cuánto dura una sesión?</h3><p>La mayoría de las sesiones duran una hora. También hay una sesión más larga, de 1,5 horas, que incluye una grabación de hipnoterapia personalizada para que la conserves. Los precios de las sesiones sueltas y de los packs están más arriba.</p><h3>¿Qué ocurre en una sesión de coaching de bienestar?</h3><p>Partimos de lo que te está pasando y trabajamos con herramientas prácticas y sostenibles basadas en mindfulness y en enfoques informados por la TCC y la teoría polivagal. Las sesiones dentro de un pack son semanales, y después de cada una te envío material y recursos por correo.</p><h3>¿Cómo es una sesión de hipnoterapia?</h3><p>Es un trabajo enfocado en el subconsciente, más cercano a una relajación profunda que a nada espectacular. Los guiones se personalizan según lo que te ayuda a sentir calma, seguridad y apoyo, y algunas sesiones incluyen una grabación que puedes escuchar en casa.</p><h3>¿Facilitas sesiones de grupo y cursos?</h3><p>Sí — sesiones grupales semanales en grupo cerrado y sesiones abiertas mensuales, además de dos cursos: Mindfulness para el Autocoaching Positivo, y Autocuidado TNF y el Sistema Nervioso. Puedes unirte a los grupos y acceder al material de los cursos a través de mi Patreon.</p><h3>¿Podemos trabajar en español? ¿Cómo empezamos?</h3><p>Trabajo en inglés y en español. El primer paso es una llamada de descubrimiento gratuita, en la que hablamos de lo que te está pasando y del tipo de apoyo que puede encajar mejor contigo.</p>",

            sessions_footer_note: "*Todas las sesiones dentro de los paquetes son semanales, de una hora de duración e incluyen correos de seguimiento con folletos y recursos adicionales después de cada sesión.",

            opt1_title: "Sesiones 1:1 y packs",
            opt1_item1: "Sesión 1 hora",
            opt1_item1_note: "(coaching de bienestar)",
            opt1_item2: "Sesión 1.5 horas + grabación de hipnoterapia",
            opt1_item2_note: "(coaching de bienestar + hipnoterapia)",
            opt1_group1_title: "Packs de Coaching de Bienestar",
            q5: "Las sesiones individuales me apoyaron en todos los sentidos: me sentí comprendida y siempre recibí herramientas prácticas que me ayudaron.",
            q5_attr: "Cliente 1:1",
            opt1_pack3: "Pack 3 sesiones",
            opt1_pack3_note: "(coaching de bienestar)",
            opt1_pack6: "Pack 6 sesiones",
            opt1_pack6_note: "(incluye 1 sesión de hipnoterapia)",
            opt1_group2_title: "Packs de Coaching e Hipnoterapia",
            opt1_special_html: "<ul class=\"package-features\"><li>6 sesiones semanales de 1 hora</li><li>3 sesiones de hipnoterapia integradas en el proceso</li><li>Material y recursos después de cada sesión</li><li>2 grabaciones de audio personalizadas para usar entre sesiones y después</li></ul>",
            opt1_special_total: "Total",
            opt1_group3_title: "Packs Familiares",
            opt1_family_link: "Ponte en contacto para adaptar el tuyo",
            opt1_note: "*Todas las sesiones de los paquetes son semanales, de una hora de duración e incluyen correos de seguimiento con material y recursos adicionales después de cada sesión",
            opt2_title: "Sesiones grupales y cursos (inglés y español)",
            opt2_courses_title: "Cursos:",
            opt2_courses_html: "<ul class=\"package-features\"><li>Mindfulness para el Autocoaching Positivo</li><li>Autocuidado TNF y el Sistema Nervioso</li></ul>",
            opt2_groups_text: "También facilito sesiones grupales semanales en grupo cerrado y sesiones grupales abiertas mensuales.",
            opt2_signup_text: "Puedes inscribirte para unirte a los grupos y acceder al material de mis cursos a través de mi Patreon.",
            opt2_collab_text: "Abierta a colaborar con grupos comunitarios, centros clínicos y organizaciones benéficas para impartir cursos y programas existentes y desarrollar nuevos.",
            opt2_collab_btn: "Ponte en contacto",
            opt2_patreon_btn: "Únete a mi Patreon",

            q1: "Escucho su hipnosis cada noche y me ayuda a sentirme más tranquila, más positiva y con más control. Con el tiempo he notado que mi confianza ha crecido y he aprendido mejores formas de manejar mis síntomas.",
            q1_attr: "Cliente 1:1",
            q2: "Como su madre, solo quería compartir la gran mejoría que hemos visto desde nuestra sesión con Irene. Los cambios positivos en nuestra hija han sido maravillosos de ver. Se la ve mucho más tranquila, con más confianza y más capaz de afrontar los retos del día a día. Las grabaciones de hipnoterapia se han convertido en una parte importante de nuestra rutina. No solo se beneficia nuestra hija al escucharlas: mi marido y yo también. A menudo escuchamos la hipnoterapia por la noche y nos ayuda a relajarnos y dormir mucho mejor. Es raro encontrar a alguien que siquiera conozca el TNF, y más aún que se especialice en él. ¡Nos sentimos muy afortunados de haber encontrado a Irene!",
            q2_attr: "Madre de una cliente 1:1",
            q3: "Conocí a personas que realmente sentí que entendían mi experiencia... La naturaleza suave y reconfortante de Irene y su gran experiencia hacen que estés en muy buenas manos. Esto que Irene ha creado para las personas con TNF es algo verdaderamente especial.",
            q3_attr: "Miembro del grupo - Patreon",
            q4: "Cada semana tengo ganas de que llegue el miércoles. Ha sido muy reconfortante conocer a personas que comparten el mismo trastorno y sentirme comprendida... de la mano de Irene: cercana, humana y una gran profesional.",
            q4_attr: "Miembro del grupo - Patreon"
        },
        resources: {
            title: "Recursos gratuitos sobre TNF",
            text: "Guías gratuitas, herramientas de cuidado para TNF y ejercicios de mindfulness para calmar tu mente.",
            item1: "Enlaces FND útiles",
            item2: "Ejercicio de Grounding",
            item3: "Grupo de WhatsApp FND Care",
            item4: "Audio de Hipnoterapia Personalizada",
            // BORRADOR (revision SEO agosto 2026) — Irene: ponlo en tus palabras.
            item1_desc: "Un documento compartido con enlaces a organizaciones de TNF, explicaciones de la condición y lugares donde buscar apoyo.",
            item2_desc: "Un ejercicio corto de grounding que puedes probar en un par de minutos, publicado en mi Instagram.",
            item3_desc: "Un grupo de WhatsApp donde comparto novedades y noticias.",
            item4_desc: "Una grabación de hipnoterapia hecha para ti, con un guion basado en lo que te ayuda a sentir calma y apoyo. Este recurso es de pago. El enlace abre un pago seguro con Stripe.",
            more_coming: "Más recursos próximamente",
            community_btn: "Comunidad y Apoyo TNF",
            viz_title: "Palabras clave y conceptos - Visualización Interactiva",
            view_btn: "Ver enlace",
            join_btn: "Unirse al grupo",
            btn: "Ver Biblioteca →"
        },
        shop: {
            title: "Tienda",
            text: "Próximamente nuevos productos.",
            btn: "Visitar Tienda Completa"
        },
        results: {
            title: "Lo que dicen las personas que han trabajado con Irene",
            f_all: "Todos",
            f_1to1: "Sesiones 1:1",
            f_group: "Cursos / Sesiones Grupales",
            disclaimer: "Experiencias reportadas por participantes en encuestas anónimas de los programas y cursos. El apoyo es educativo y complementario — no sustituye la atención médica.",
            load_error: "Los testimonios no están disponibles temporalmente — actualiza la página o escríbeme."
        },
        book: {
            title: "FND Care Guide Libro",
            tagline: "Escrita en colaboración con personas que viven con TNF y creada con cuidado, claridad e intención, esta guía es un manual compasivo y práctico diseñado para compartir contigo lo que ha ayudado a otras personas que viven con TNF a manejar sus síntomas, sentirse más en control y mejorar su bienestar — y lo que también podría ayudarte a ti. Ha sido moldeada por las voces y experiencias de la comunidad TNF.\n\nPróximamente en Español.",
            inside_title: "Qué encontrarás",
            inside_html: "<ul class=\"book-features-list\"><li>Herramientas prácticas para ayudarte a manejar síntomas y sentirte más en control</li><li>Prácticas cotidianas para cuidar tu cuerpo y tu mente</li><li>Experiencias vividas y sabiduría compartida de la comunidad TNF</li><li>Orientación para navegar el TNF y construir tu kit de herramientas personal</li><li>Un recordatorio de que la mejoría, la conexión y la esperanza son posibles</li><li>Mensajes de apoyo de la comunidad</li></ul>",
            who_title: "Para quién es",
            who_html: "<ul class=\"book-features-list\"><li>Personas que viven con TNF</li><li>Sus familias</li><li>Profesionales de la salud</li><li>Y todas las demás personas</li></ul>",
            buy_btn: "Primera Edición Especial",
            amazon_btn: "Cómpralo en Amazon",
            reviews_title: "Reseñas del Libro"
        },
        support: {
            pro_title: "Colaboración",
            pro_text: "Charlas, congresos, formación y colaboraciones.",
            pro_cta: "PONTE EN CONTACTO",
            pro_cta_contact: "Ponte en contacto"
        },
        signup: {
            title: "Recibe herramientas prácticas y amables para el TNF y las últimas novedades en tu correo",
            btn: "Suscríbete al boletín",
            audio_title: "Consigue tu audio de relajación gratuito",
            audio_btn: "Conseguir el audio"
        },
        contact: {
            title: "Contacto",
            text: "Suscríbete al boletín o ponte en contacto abajo.",
            email_btn: "Enviar Email",
            news_title: "Boletín",
            news_text: "Mantente al día con novedades y recursos.",
            news_btn: "Suscribirse",
            insta_title: "Instagram",
            insta_text: "Información diaria y contenido.",
            insta_btn: "Seguir"
        },
        footer: {
            rights: "Todos los derechos reservados."
        }
    }
};

const shopItems = [
    { id: 1, title_en: "Hypnotherapy Audio Pack", title_es: "Pack Audio Hipnoterapia", icon: "headphones" },
    { id: 2, title_en: "FND Care Affirmation Tee", title_es: "Camiseta Afirmación TNF", icon: "shirt" },
    { id: 3, title_en: "Mindzing Notebook", title_es: "Cuaderno Mindzing", icon: "book" },
];

const testimonials = [
    {
        en: "All correspondence was quickly replied to with thoughtful personalised answers to my conditions and situations, even financial.",
        es: "Toda la correspondencia fue respondida rápidamente con respuestas personalizadas y consideradas a mis condiciones y situaciones, incluso las financieras."
    },
    {
        en: "I loved the programme. I had been on my own for a long time with everything that FND involves, and being able to share and listen to other people with the same condition helped me understand it better.",
        es: "Me encantó el programa. Llevaba mucho tiempo sola con todo lo que implica el TNF, y poder compartir y escuchar a otras personas con la misma condición me ayudó a entenderlo mejor."
    },
    {
        en: "Irene is knowledgeable, supportive and kind. Feeling understood, believed and heard was a big help to me.",
        es: "Irene tiene mucho conocimiento, es solidaria y amable. Sentirme comprendida, creída y escuchada fue una gran ayuda para mí."
    },
    {
        en: "My experience in the programme was much better than I expected.",
        es: "Mi experiencia en el programa fue mucho mejor de lo que esperaba."
    },
    {
        en: "The individual sessions supported me in every way: I felt understood and always received practical tools that helped me.",
        es: "Las sesiones individuales me apoyaron en todos los sentidos: me sentí comprendida y siempre recibí herramientas prácticas que me ayudaron."
    },
    {
        en: "It helped me to take care of myself, to feel valued, to learn breathing techniques I didn’t know before, and above all to realise that I’m not always the only one in pain or feeling unwell.",
        es: "Me ayudó a cuidarme, a sentirme valorada, a aprender técnicas de respiración que no conocía, y sobre todo a darme cuenta de que no siempre soy la única que siente dolor o malestar."
    },
    {
        en: "Thank you, Irene.",
        es: "Gracias, Irene."
    },
    {
        en: "The weekly group sessions make Wednesdays feel very special, and we have created a wonderful community.",
        es: "Las sesiones semanales en grupo hacen que los miércoles se sientan muy especiales, y hemos creado una comunidad maravillosa."
    },
    {
        en: "I am very grateful to my fellow participants and, above all, to Irene for making the journey much easier.",
        es: "Estoy muy agradecida a mis compañeras participantes y, sobre todo, a Irene por hacer el camino mucho más fácil."
    },
    {
        en: "This programme has been incredibly useful for me.",
        es: "Este programa ha sido increíblemente útil para mí."
    },
    {
        en: "Irene’s gentle and comforting nature, together with her great experience, means you are in very good hands.",
        es: "La naturaleza suave y reconfortante de Irene, junto con su gran experiencia, significa que estás en muy buenas manos."
    },
    {
        en: "Being with the other women and getting to know other cases helped me a lot, regardless of age.",
        es: "Estar con las otras mujeres y conocer otros casos me ayudó mucho, independientemente de la edad."
    },
    {
        en: "The hypnotherapy audio I received was personal from suggestions I gave, it is amazing and I enjoy it regularly.",
        es: "El audio de hipnoterapia que recibí fue personalizado a partir de sugerencias que di, es increíble y lo disfruto regularmente."
    },
    {
        en: "My experience as part of the group was enormously positive and enriching.",
        es: "Mi experiencia como parte del grupo fue enormemente positiva y enriquecedora."
    },
    {
        en: "I highly recommend this programme, both for the support network that is created and for Irene’s knowledge and guidance.",
        es: "Recomiendo encarecidamente este programa, tanto por la red de apoyo que se crea como por el conocimiento y la guía de Irene."
    },
    {
        en: "I met people who I truly felt understood my experience, and we supported each other, encouraging one another and lifting morale when needed.",
        es: "Conocí a personas que realmente sentí que entendían mi experiencia, y nos apoyamos mutuamente, animándonos y levantando la moral cuando era necesario."
    },
    {
        en: "What Irene has created for people with FND is something truly special.",
        es: "Lo que Irene ha creado para las personas con TNF es algo verdaderamente especial."
    },
    {
        en: "Together we learned wonderful techniques, very useful, calming, and relaxing for the nervous system, which in my personal case have been very valuable in everyday life.",
        es: "Juntas aprendimos técnicas maravillosas, muy útiles, calmantes y relajantes para el sistema nervioso, que en mi caso personal han sido muy valiosas en la vida diaria."
    },
    {
        en: "I am grateful to Irene for her wonderful work as both a professional and a person, for guiding us with empathy and wisdom.",
        es: "Estoy agradecida a Irene por su maravilloso trabajo tanto como profesional y como persona, por guiarnos con empatía y sabiduría."
    },
    {
        en: "This programme didn’t just give me tools, but also a safe space where vulnerability became strength.",
        es: "Este programa no solo me dio herramientas, sino también un espacio seguro donde la vulnerabilidad se convirtió en fortaleza."
    },
    {
        en: "And to my peers for their courage in sharing their experiences.",
        es: "Y a mis compañeras por su valentía al compartir sus experiencias."
    },
    {
        en: "This programme is a lighthouse for those of us navigating through the fog of FND.",
        es: "Este programa es un faro para aquellos de nosotros que navegamos a través de la niebla del TNF."
    },
    {
        en: "The course has helped me get to know myself, learn how to care for myself, and above all to prioritise myself and listen to my body — something I never thought I would be capable of doing.",
        es: "El curso me ha ayudado a conocerme a mí misma, aprender a cuidarme y sobre todo a priorizarme y escuchar a mi cuerpo, algo que nunca pensé que sería capaz de hacer."
    },
    {
        en: "The practices we learned have made everyday life much more manageable, even on the most difficult days.",
        es: "Las prácticas que aprendimos han hecho que la vida diaria sea mucho más manejable, incluso en los días más difíciles."
    },
    {
        en: "I really look forward to seeing where she takes this work next and, if possible, being part of it again.",
        es: "Tengo muchas ganas de ver a dónde lleva este trabajo y, si es posible, volver a formar parte de él."
    },
    {
        en: "Having recently been diagnosed with FND and receiving no information from the specialist about what to expect or how to manage my symptoms, I was incredibly grateful to come across this course with Irene.",
        es: "Habiendo sido diagnosticada recientemente con TNF y sin recibir información del especialista sobre qué esperar o cómo manejar mis síntomas, estuve increíblemente agradecida de encontrar este curso con Irene."
    },
    {
        en: "I now have a much better understanding of how my thoughts, emotions, and behaviours are interconnected, and how I can work with them — whether that means changing them, accepting them, or learning to find joy in whatever kind of day I’m having.",
        es: "Ahora tengo una mejor comprensión de cómo mis pensamientos, emociones y comportamientos están interconectados, y cómo puedo trabajar con ellos, ya sea cambiándolos, aceptándolos o aprendiendo a encontrar alegría en cualquier tipo de día que tenga."
    },
    {
        en: "I’ve started to include meditation and regular check-ins in my daily routine, which has been very beneficial and has also helped with pacing.",
        es: "He empezado a incluir la meditación y chequeos regulares en mi rutina diaria, lo cual ha sido muy beneficioso y también me ha ayudado con el ritmo."
    },
    {
        en: "Taking part in this course has allowed me to become a better version of myself and to take back control of my life, my thoughts, and my happiness",
        es: "Participar en este curso me ha permitido convertirme en una mejor versión de mí misma y recuperar el control de mi vida, mis pensamientos y mi felicidad."
    }
];

// Curated slider for home & about pages — alternating 1:1 and course/programme voices,
// starting with (and giving more weight to) 1:1 clients.
const homeTestimonials = [
    {
        en: "I listen to her hypnosis every night, and it helps me feel calmer, more positive, and more in control. Over time, I've noticed that my confidence has grown, and I've learned better ways to manage my symptoms.",
        es: "Escucho su hipnosis cada noche y me ayuda a sentirme más tranquila, más positiva y con más control. Con el tiempo he notado que mi confianza ha crecido y he aprendido mejores formas de manejar mis síntomas.",
        attr_en: "1:1 client", attr_es: "Cliente 1:1"
    },
    {
        en: "I have got more support for my FND journey in 3 weeks with Irene than I have in the 6 months since I was rushed to hospital.",
        es: "He recibido más apoyo en mi camino con el TNF en 3 semanas con Irene que en los 6 meses desde que me ingresaron de urgencia en el hospital.",
        attr_en: "Course participant", attr_es: "Participante de curso"
    },
    {
        en: "Irene opened my eyes and mind in ways to get in tune with my mind and body. She taught me a mindfulness pack specially catered to me and I had results that I never expected.",
        es: "Irene me abrió los ojos y la mente a formas de conectar con mi mente y mi cuerpo. Me enseñó un pack de mindfulness hecho especialmente para mí y obtuve resultados que nunca esperé.",
        attr_en: "1:1 client", attr_es: "Cliente 1:1"
    },
    {
        en: "Taking part in this course has allowed me to become a better version of me and to be able to take back control of my life, my thoughts and my happiness.",
        es: "Participar en este curso me ha permitido convertirme en una mejor versión de mí misma y recuperar el control de mi vida, mis pensamientos y mi felicidad.",
        attr_en: "Course participant", attr_es: "Participante de curso"
    },
    {
        en: "The positive changes in our daughter have been wonderful to see. She seems much calmer, more confident, and better able to manage the challenges she faces day to day. It's rare to find someone who even knows about FND, let alone specialises in it.",
        es: "Los cambios positivos en nuestra hija han sido maravillosos de ver. Se la ve mucho más tranquila, con más confianza y más capaz de afrontar los retos del día a día. Es raro encontrar a alguien que siquiera conozca el TNF, y más aún que se especialice en él.",
        attr_en: "Parent of a 1:1 client", attr_es: "Madre/padre de una cliente 1:1"
    },
    {
        en: "Every week I looked forward to Wednesday. It has been so comforting to meet people who share the same condition and to feel understood — guided by Irene: warm, human, and a true professional.",
        es: "Cada semana tenía ganas de que llegara el miércoles. Ha sido muy reconfortante conocer a personas que comparten el mismo trastorno y sentirme comprendida... de la mano de Irene: cercana, humana y una gran profesional.",
        attr_en: "Course participant", attr_es: "Participante de curso"
    },
    {
        en: "The individual sessions supported me in every way: I felt understood and always received practical tools that helped me.",
        es: "Las sesiones individuales me apoyaron en todos los sentidos: me sentí comprendida y siempre recibí herramientas prácticas que me ayudaron.",
        attr_en: "1:1 client", attr_es: "Cliente 1:1"
    },
    {
        en: "The course has helped me get to know myself, learn how to care for myself, and above all to prioritise myself and listen to my body — something I never thought I would be capable of doing.",
        es: "El curso me ha ayudado a conocerme a mí misma, aprender a cuidarme y sobre todo a priorizarme y escuchar a mi cuerpo, algo que nunca pensé que sería capaz de hacer.",
        attr_en: "Course participant", attr_es: "Participante de curso"
    }
];

// Book reviews (from the Feedback Book document) — shown one by one on book.html.
// Order: starts with lived experience, alternating with professionals where possible.
const bookReviews = [
    {
        en: "I feel like this book will definitely help those with FND or newly diagnosed with this condition, as there is a lot of useful information and practices.",
        es: "Siento que este libro sin duda ayudará a quienes viven con TNF o acaban de recibir el diagnóstico, ya que contiene mucha información y prácticas útiles.",
        attr_en: "Jasmine Marballie (person with lived experience of FND)", attr_es: "Jasmine Marballie (persona con experiencia vivida de TNF)"
    },
    {
        en: "A useful, accessible, and compassionate guide for people with Functional Neurological Disorder and their carers. Full of practical tools, insights, and encouragement for both those newly diagnosed and those navigating long-term challenges.",
        es: "Una guía útil, accesible y compasiva para personas con Trastorno Neurológico Funcional y quienes las cuidan. Llena de herramientas prácticas, ideas y ánimo, tanto para quienes acaban de recibir el diagnóstico como para quienes afrontan retos a largo plazo.",
        attr_en: "Dr Alan Kellas, Psychiatrist (MBBS, MRCPsych)", attr_es: "Dr Alan Kellas, Psiquiatra (MBBS, MRCPsych)"
    },
    {
        en: "There are a variety of helpful practices throughout the book, which allows people to trial what best suits them and their symptoms to find relief.",
        es: "Hay una gran variedad de prácticas útiles a lo largo del libro, que permiten a cada persona probar lo que mejor se adapta a ella y a sus síntomas para encontrar alivio.",
        attr_en: "Amber Flavia (person with lived experience of FND)", attr_es: "Amber Flavia (persona con experiencia vivida de TNF)"
    },
    {
        en: "For people with FND, feeling seen and understood can be rare. This book will bring clarity, comfort, and hope to many.",
        es: "Para las personas con TNF, sentirse vistas y comprendidas puede ser poco común. Este libro traerá claridad, consuelo y esperanza a muchas personas.",
        attr_en: "Penny Crawley, RMN, Senior Lecturer in Mental Health Nursing", attr_es: "Penny Crawley, RMN, Profesora Titular de Enfermería de Salud Mental"
    },
    {
        en: "Unlike any other FND resource I've seen, this guide offers personalised strategies for calming the nervous system, while highlighting the human side of self-management and hope.",
        es: "A diferencia de cualquier otro recurso sobre TNF que haya visto, esta guía ofrece estrategias personalizadas para calmar el sistema nervioso, destacando el lado humano del autocuidado y la esperanza.",
        attr_en: "Jason Kreuzman, MOT, OTR/L", attr_es: "Jason Kreuzman, MOT, OTR/L"
    },
    {
        en: "It is a useful and practical book that helps us enhance our treatment plans for patients with FND... What I love is that all these strategies have been tested by patients with FND, which makes it even more valuable.",
        es: "Es un libro útil y práctico que nos ayuda a mejorar los planes de tratamiento de pacientes con TNF... Lo que más me gusta es que todas estas estrategias han sido probadas por pacientes con TNF, lo que lo hace aún más valioso.",
        attr_en: "Ivonne Castellanos Vázquez, Physical Therapist", attr_es: "Ivonne Castellanos Vázquez, Fisioterapeuta"
    }
];

const sliderSources = { home: homeTestimonials, book: bookReviews };

function sliderData() {
    const track = document.querySelector('.testimonial-track');
    if (!track) return [];
    return sliderSources[track.dataset.source || 'home'] || homeTestimonials;
}

let sliderInterval;
let currentSlide = 0;

function initTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    if (!track) return;

    // Render slides
    renderSlides();

    // Event Listeners for arrows
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            resetSliderInterval();
            moveSlide(-1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            resetSliderInterval();
            moveSlide(1);
        });
    }

    startSliderInterval();
}

function renderSlides() {
    const track = document.querySelector('.testimonial-track');
    if (!track) return;

    // Clear existing
    track.innerHTML = '';

    sliderData().forEach((t, index) => {
        const slide = document.createElement('div');
        slide.className = 'testimonial-slide';
        if (index === currentSlide) slide.classList.add('active');

        const quoteText = currentLang === 'en' ? t.en : (t.es || t.en);
        const attr = currentLang === 'en' ? t.attr_en : (t.attr_es || t.attr_en);

        slide.innerHTML = `<p>"${quoteText}"</p>` + (attr ? `<span class="slide-attr">${attr}</span>` : '');
        track.appendChild(slide);
    });
}

function moveSlide(direction) {
    const slides = document.querySelectorAll('.testimonial-slide');
    if (slides.length === 0) return;

    const current = slides[currentSlide];

    // Fade out
    current.classList.add('exiting');

    // Wait for fade out, then switch
    setTimeout(() => {
        current.classList.remove('active', 'exiting');

        currentSlide = (currentSlide + direction + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
    }, 1000); // Wait 1s (match CSS animation)
}

function startSliderInterval() {
    if (sliderInterval) clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
        moveSlide(1);
    }, 10000);
}

function resetSliderInterval() {
    clearInterval(sliderInterval);
    startSliderInterval();
}

// --- 2. Translation & Persistence ---
let currentLang = localStorage.getItem('siteLang') || 'en';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('siteLang', lang); // Save preference

    // Update Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update Body Class
    document.body.className = document.body.className.replace(/lang-\w+/, `lang-${lang}`);

    // Update Text Elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const keys = key.split('.');
        let text = keys.reduce((obj, k) => obj && obj[k], translations[lang]);

        if (text) {
            // Handle HTML content if specified (e.g., full_text, features)
            if (key.includes('full_text') || key.includes('features') || key.includes('html')) {
                el.innerHTML = text;
            } else {
                el.innerText = text;
            }
        }
    });

    // Re-initialize icons after DOM updates
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Refresh Shop Grid Titles if present
    const shopGrid = document.getElementById('shop-grid');
    if (shopGrid) renderShopGrid();

    // Refresh Testimonials
    renderSlides();
}

// --- 3. Render Shop Grid ---
function renderShopGrid() {
    const grid = document.getElementById('shop-grid');
    if (!grid) return;

    grid.innerHTML = shopItems.map(item => `
        <div class="shop-item-card">
            <div class="shop-item-img-placeholder"></div>
            <div class="shop-item-title">${currentLang === 'en' ? item.title_en : item.title_es}</div>
        </div>
    `).join('');
}


// --- 4. Initialization & Events ---
document.addEventListener('DOMContentLoaded', () => {

    // Initial Load
    updateLanguage(currentLang);
    initTestimonialSlider();

    // Language Toggle
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => updateLanguage(btn.dataset.lang));
    });

    // Modal Logic
    const modalOverlay = document.getElementById('modal-overlay');

    if (modalOverlay) {
        const modalBody = document.getElementById('modal-body');
        const closeBtn = document.querySelector('.modal-close');

        window.openModal = function (content) {
            modalBody.innerHTML = content;
            modalOverlay.classList.remove('hidden');
        }

        function closeModal() {
            modalOverlay.classList.add('hidden');
        }

        closeBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });

        // Action Buttons
        document.querySelectorAll('[data-action]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.dataset.action;
                if (action === 'book-now') {
                    window.openModal(`<h2>${currentLang === 'en' ? 'Book a Session' : 'Reservar Sesión'}</h2><p>Calendly Integration would load here.</p>`);
                }
            });
        });
    }

    // Navbar Scroll (Visual only)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });
    // --- 6. Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Keyboard support for Menu Toggle
    if (menuToggle) {
        menuToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                menuToggle.click(); // Reuse click handler
            }
        });
    }
});

// --- 5. Session Options Toggle ---
function toggleSessionOption(headerElement) {
    const card = headerElement.parentElement;
    card.classList.toggle('expanded');
}

// --- 6. Session Text Hover/Click Logic ---
function initSessionTextToggles() {
    const sections = document.querySelectorAll('.session-text-group');

    sections.forEach(group => {
        const trigger = group.querySelector('.session-text-trigger');
        if (!trigger) return;

        // Click to toggle "fixed" state
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();

            // Accordion behavior: Close others first
            document.querySelectorAll('.session-text-group.fixed-active').forEach(el => {
                if (el !== group) {
                    el.classList.remove('fixed-active');
                }
            });

            group.classList.toggle('fixed-active');
        });

        // Add keyboard support
        trigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                group.classList.toggle('fixed-active');
            }
        });
    });

    // Optional: Close on click outside? 
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.session-text-group')) {
            document.querySelectorAll('.session-text-group.fixed-active').forEach(el => {
                el.classList.remove('fixed-active');
            });
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initSessionTextToggles();
});
