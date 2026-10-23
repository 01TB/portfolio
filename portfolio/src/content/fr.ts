import type { Dictionary } from './types'

export const fr: Dictionary = {
  locale: 'fr',
  meta: {
    title: 'Tsitohaina Berthin RAMANANKIRAHINA – Développeur Full Stack Java & React',
    description:
      'Développeur Full Stack & Mobile à Antananarivo, spécialisé en Java (Spring Boot) et React. Applications web et mobiles, API REST et intégrations sur mesure.',
    keywords: [
      'Tsitohaina Berthin RAMANANKIRAHINA',
      'développeur full stack',
      'développeur Java Spring Boot',
      'développeur React',
      'développeur mobile React Native',
      'développeur web Madagascar',
      'développeur Antananarivo',
      'API REST',
      'TypeScript',
      'freelance Madagascar',
    ],
    ogAlt: 'Tsitohaina Berthin RAMANANKIRAHINA – Développeur Full Stack & Mobile, Java (Spring Boot) et React',
    ogTagline: 'Applications web & mobiles · API REST · Intégrations',
  },
  nav: {
    services: 'Services',
    about: 'À propos',
    skills: 'Compétences',
    experience: 'Expérience',
    projects: 'Projets',
    education: 'Formation',
    contact: 'Contact',
    cv: 'CV',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    mainNav: 'Navigation principale',
    skipToContent: 'Aller au contenu',
    switchLang: 'EN',
    switchLangLabel: 'View this site in English',
    toggleTheme: 'Basculer entre thème clair et sombre',
    home: 'Accueil',
  },
  hero: {
    availability: 'Ouvert aux nouvelles opportunités et projets',
    role: 'Développeur Full Stack & Mobile',
    specialty: 'Spécialisé en Java (Spring Boot) et React',
    currentPrefix: 'Actuellement',
    currentRole: 'stagiaire Développeur Mobile',
    currentAt: 'chez',
    currentCompany: 'Orange Madagascar',
    pitch:
      "Je conçois des applications web et mobiles, des API REST et des intégrations entre systèmes : fiables, sécurisées et pensées pour celles et ceux qui les utilisent au quotidien.",
    ctaProjects: 'Voir mes projets',
    ctaCv: 'Télécharger mon CV',
    ctaContact: 'Me contacter',
    location: 'Antananarivo, Madagascar',
    photoAlt: 'Portrait de Tsitohaina Berthin RAMANANKIRAHINA, développeur Full Stack & Mobile',
    stats: [
      { value: '10+', label: 'projets réalisés' },
      { value: 'Web · Mobile', label: 'du back-end à l’application' },
      { value: 'FR · EN', label: 'langues de travail' },
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'Ce que je peux faire pour vous',
    intro:
      'Que vous soyez une entreprise, une startup ou une équipe technique, je vous accompagne de la conception à la mise en production.',
    items: [
      {
        icon: 'web',
        title: 'Applications web sur mesure',
        description:
          'Des applications métier complètes, du back-end Java / Spring Boot à l’interface React / TypeScript, responsives et faciles à faire évoluer.',
        tags: ['Spring Boot', 'React', 'TypeScript'],
      },
      {
        icon: 'mobile',
        title: 'Applications mobiles',
        description:
          'Des applications Android et multiplateformes avec React Native ou Ionic, y compris 100 % hors ligne pour les équipes sur le terrain.',
        tags: ['React Native', 'Ionic', 'SQLite'],
      },
      {
        icon: 'api',
        title: 'API REST & intégrations',
        description:
          'Des API sécurisées (JWT) et la connexion de vos outils existants (GLPI, PrestaShop), avec import et validation de données CSV / ZIP.',
        tags: ['REST', 'JWT', 'Web Services'],
      },
      {
        icon: 'dashboard',
        title: 'Back-offices & tableaux de bord',
        description:
          'RH, finances, stocks, ventes : des outils de gestion qui centralisent vos données et les rendent lisibles, avec des requêtes SQL optimisées.',
        tags: ['PostgreSQL', 'MySQL', 'Dashboards'],
      },
    ],
  },
  about: {
    eyebrow: 'À propos',
    title: 'Un développeur polyvalent, du serveur jusqu’au mobile',
    paragraphs: [
      'Développeur Full Stack & Mobile basé à Antananarivo, je suis spécialisé en Java (Spring Boot) et React / TypeScript. Je conçois des applications, des API REST et des intégrations de données entre systèmes, avec une attention particulière à la sécurité, à la performance et aux tests.',
      'Je suis actuellement stagiaire Développeur Mobile chez Orange Madagascar, où je développe une application Android 100 % hors ligne destinée aux techniciens de maintenance télécom. J’ai également mené de bout en bout plusieurs projets complets : plateforme cloud de signalement routier, gestion d’un complexe cinématographique, e-commerce headless, intégration à GLPI…',
      'Curieux et rigoureux, j’aime comprendre le métier avant d’écrire la première ligne de code. Fondateur d’un club d’éloquence, je sais aussi expliquer clairement des sujets techniques à des interlocuteurs qui ne le sont pas.',
    ],
    highlightsTitle: 'Pourquoi travailler avec moi',
    highlights: [
      { icon: 'shield', title: 'Sécurité', text: 'Authentification JWT, contrôle des accès et validation des données.' },
      { icon: 'gauge', title: 'Performance', text: 'Requêtes SQL optimisées (vues, requêtes natives) et architecture claire.' },
      { icon: 'check', title: 'Qualité', text: 'Tests d’intégration avec Postman, Git, Docker et CI/CD.' },
      { icon: 'message', title: 'Communication', text: 'Échanges clairs, documentation et manuels utilisateurs livrés avec le code.' },
    ],
    softSkillsTitle: 'Savoir-être',
    softSkills: ['Esprit d’analyse', 'Résolution de problèmes', 'Goût d’apprendre', 'Rigueur', 'Travail en équipe'],
    languagesTitle: 'Langues',
    languages: [
      { name: 'Français', level: 'bilingue' },
      { name: 'Anglais', level: 'avancé' },
    ],
    interestsTitle: 'Centres d’intérêt',
    interests: ['Musique (guitare)', 'Sport automobile', 'Volleyball', 'Finances'],
  },
  skills: {
    eyebrow: 'Compétences',
    title: 'Ma boîte à outils technique',
    intro: 'Un socle Java et React solide, complété par l’écosystème mobile, les bases de données et les outils de déploiement.',
    coreTitle: 'Stack principale',
    core: ['Java', 'Spring Boot', 'React', 'TypeScript', 'React Native'],
    groups: [
      {
        title: 'Back-end',
        items: ['Java', 'Spring Boot', 'JPA / Hibernate', 'Node.js / NestJS', 'PHP', 'Laravel', 'Django', 'C#'],
      },
      {
        title: 'Front-end & mobile',
        items: ['React', 'TypeScript', 'JavaScript', 'Angular', 'Vue.js', 'React Native', 'Ionic Vue', 'Thymeleaf', 'HTML / CSS'],
      },
      {
        title: 'API & intégration',
        items: ['API REST', 'JWT', 'Web Services XML', 'GLPI', 'PrestaShop', 'Import CSV / ZIP'],
      },
      {
        title: 'Bases de données',
        items: ['PostgreSQL / PostGIS', 'MySQL', 'SQLite', 'MongoDB', 'Optimisation SQL'],
      },
      {
        title: 'Qualité & déploiement',
        items: ['Git', 'Postman', 'Docker', 'CI/CD', 'Firebase'],
      },
      {
        title: 'Méthodes & systèmes',
        items: ['Agile Scrum', 'Architecture MVC', 'Linux Red Hat', 'Windows Server'],
      },
    ],
  },
  experience: {
    eyebrow: 'Expérience',
    title: 'Mon parcours professionnel',
    intro: 'Des projets concrets, avec de vrais utilisateurs et de vrais livrables.',
    currentLabel: 'En cours',
    items: [
      {
        role: 'Développeur Mobile (stagiaire)',
        company: 'Orange Madagascar',
        location: 'Antananarivo',
        period: 'Sept. 2026 – aujourd’hui',
        current: true,
        points: [
          'Développement d’une application Android 100 % hors ligne (React Native, SQLite) pour la maintenance télécom.',
          'Checklists guidées, traitement photo (filigrane automatique, compression), génération locale de PDF et partage natif (WhatsApp, e-mail).',
          'Livrables : application (APK), documentation du code source et manuel d’utilisation pour les techniciens.',
        ],
        stack: ['React Native', 'SQLite', 'Android'],
      },
      {
        role: 'Président fondateur – M’ITeny',
        company: 'Club de communication de l’IT University',
        location: 'Antananarivo',
        period: 'Mars 2026 – aujourd’hui',
        current: true,
        points: [
          'Création et présidence d’un club dédié à la prise de parole en public et à l’éloquence.',
          'Objectif : faire de l’éloquence un levier de réussite professionnelle et une force de conviction.',
        ],
      },
      {
        role: 'Stagiaire – service Transit & atelier Bosch Car Service',
        company: 'MATERAUTO',
        location: 'Antananarivo',
        period: 'Janv. – févr. 2018',
        points: [
          'Instruction des dossiers, déclaration des produits, classement et archivage au sein du service transit.',
          'Réception des livraisons et contrôle de cohérence entre stock physique et informatique (Excel).',
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Projets',
    title: 'Réalisations sélectionnées',
    intro: 'Des applications complètes, conçues de la base de données jusqu’à l’interface et au déploiement.',
    othersTitle: 'Autres projets',
    othersIntro: 'Applications métier, e-commerce et logiciels desktop réalisés au fil de mon parcours.',
    live: 'Voir le site',
    previous: 'Image précédente',
    next: 'Image suivante',
    goTo: 'Afficher l’image',
    screenshot: 'capture d’écran',
    ctaText: 'Envie de voir le code ?',
    ctaGithub: 'Mon GitHub',
    items: {
      roadwork: {
        title: 'RoadWork – Signalement routier multi-plateforme',
        category: 'Cloud · Web · Mobile',
        summary:
          'Plateforme cloud de signalement géolocalisé des dégradations routières, sur le web et sur mobile, de la conception de la base de données jusqu’au déploiement.',
        highlights: [
          'API REST Spring Boot 3.4 sécurisée par JWT',
          'Données géospatiales PostGIS et cartes Leaflet (TileServer hors ligne)',
          'Web en Angular 17, mobile en Ionic Vue 3',
          'Firebase (Firestore, Cloud Functions, notifications FCM) et Docker',
        ],
      },
      cinema: {
        title: 'Absolute Cinema – Gestion de complexe cinématographique',
        category: 'Application web métier',
        summary:
          'Application web modulaire qui pilote l’activité opérationnelle, tarifaire et financière d’un cinéma : parcours client (achat, abonnements) et administration.',
        highlights: [
          'Films, séances, réservations et abonnements',
          'Statistiques financières : billetterie, régie publicitaire, produits',
          'Architecture MVC, JPA / Hibernate et API REST',
        ],
      },
      glpi: {
        title: 'Intégration GLPI – Module d’import de données',
        category: 'Intégration · Outil IT',
        summary:
          'Application React / TypeScript connectée à GLPI 11 (gestion de services IT) via son API REST, pour alimenter la plateforme en masse.',
        highlights: [
          'Import multi-fichiers CSV / ZIP : actifs, utilisateurs, tickets, coûts et documents',
          'Parsing typé des CSV avec Papa Parse',
          'Service d’orchestration séparant logique métier et interface, documentation',
        ],
      },
      newapp: {
        title: 'NewApp – E-commerce headless & dashboard analytics',
        category: 'E-commerce · Analytics',
        summary:
          'Architecture e-commerce découplée sur PrestaShop 8.2, avec un front React et un suivi des stocks et des ventes en temps réel.',
        highlights: [
          'Tunnel d’achat, back-office sécurisé, import et validation de données (CSV / ZIP)',
          'Endpoints PHP sur mesure via les Web Services PrestaShop (états de commande, synchro des stocks)',
          'Tests d’intégration et validation des schémas d’API avec Postman',
        ],
      },
      hris: {
        title: 'Système de gestion RH & paie',
        category: 'Logiciel d’entreprise',
        summary: 'Automatisation du cycle RH, du suivi des temps à l’édition des bulletins de paie conformes aux normes légales.',
        highlights: ['Congés & absences', 'Pointage & présences', 'Reporting RH'],
      },
      ats: {
        title: 'ATS – Plateforme de recrutement',
        category: 'Logiciel d’entreprise',
        summary: 'Automatisation complète du processus de recrutement, du dépôt de CV jusqu’à l’embauche.',
        highlights: ['Sourcing & candidatures', 'Tri et filtrage des profils', 'Suivi recruteur'],
      },
      sotrobe: {
        title: 'Sotrobe – Livraison de repas',
        category: 'Application web',
        summary: 'Plateforme de livraison de repas pour entreprises et particuliers, avec suivi des commandes en temps réel.',
        highlights: ['Gestion des commandes', 'Temps réel'],
      },
      budget: {
        title: 'Gestion budgétaire multi-départements',
        category: 'Logiciel d’entreprise',
        summary: 'Gestion des finances d’une entreprise par département, avec tableau de bord interactif et reporting.',
        highlights: ['Multi-départements', 'Tableau de bord', 'Reporting'],
      },
      farm: {
        title: 'Marketplace d’animaux de ferme',
        category: 'E-commerce',
        summary: 'Boutique en ligne spécialisée, avec gestion des stocks et interface responsive.',
        highlights: ['Gestion des stocks', 'Responsive'],
      },
      tournament: {
        title: 'Gestionnaire de tournois',
        category: 'Application desktop',
        summary: 'Application desktop pour organiser des tournois sportifs, avec système d’élimination.',
        highlights: ['Système d’élimination', 'Interface Qt'],
      },
      dashboard: {
        title: 'Tableau de bord automobile',
        category: 'Visualisation de données',
        summary: 'Interface de monitoring en temps réel pour véhicules : jauges numériques, visualisation de données et alertes.',
        highlights: ['Temps réel', 'Jauges numériques'],
      },
    },
  },
  education: {
    eyebrow: 'Formation',
    title: 'Formation',
    items: [
      {
        degree: 'Licence en Informatique (Bac+3) – Parcours Développement',
        school: 'IT University',
        location: 'Antananarivo, Madagascar',
        period: '2023 – 2026',
        detail: 'Développement web et logiciel, bases de données, architectures système et méthodes agiles.',
      },
      {
        degree: 'Classe préparatoire intégrée – Ingénierie du transport, spécialité automobile',
        school: 'ESTACA',
        location: 'Montigny-le-Bretonneux, France',
        period: '2021 – 2023',
        detail: 'Socle scientifique en mathématiques et en physique, et rigueur de la démarche d’ingénieur.',
      },
      {
        degree: 'Baccalauréat général, mention Bien',
        school: 'Lycée Français de Tananarive',
        location: 'Antananarivo, Madagascar',
        period: '2021',
        detail: 'Spécialités Mathématiques et Physique-Chimie, option Mathématiques expertes.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Parlons de votre projet',
    intro:
      'Un projet d’application, une mission ou un poste à pourvoir ? Écrivez-moi, je vous réponds rapidement.',
    emailLabel: 'E-mail',
    phoneLabel: 'Téléphone',
    locationLabel: 'Localisation',
    socialTitle: 'Retrouvez-moi aussi sur',
    form: {
      title: 'Envoyer un message',
      name: 'Nom complet',
      email: 'E-mail',
      subject: 'Objet',
      message: 'Message',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'vous@exemple.com',
      subjectPlaceholder: 'Projet, mission, poste…',
      messagePlaceholder: 'Décrivez votre besoin en quelques lignes…',
      submit: 'Envoyer le message',
      note: 'Le bouton ouvre votre messagerie avec le message prérempli.',
      bodyName: 'Nom',
      bodyEmail: 'E-mail',
    },
  },
  footer: {
    tagline: 'Développeur Full Stack & Mobile, spécialisé en Java (Spring Boot) et React. Basé à Antananarivo, Madagascar.',
    rights: 'Tous droits réservés.',
    builtWith: 'Conçu avec Next.js et Tailwind CSS',
    backToTop: 'Retour en haut',
    navTitle: 'Navigation',
    contactTitle: 'Contact',
  },
}
