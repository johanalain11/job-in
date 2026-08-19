# 💼 JOB-in

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge\&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge\&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=for-the-badge\&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge\&logo=javascript)
![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**JOB-in** est une plateforme web de mise en relation entre **candidats et entreprises**, conçue pour faciliter la recherche d'opportunités professionnelles, la gestion des candidatures et la publication d'offres d'emploi.

L'application propose une **vitrine publique** ainsi que deux espaces distincts :

* 👤 **Espace candidat** — recherche d'opportunités, suivi des candidatures et gestion du profil ;
* 🏢 **Espace entreprise** — publication d'offres, gestion des candidatures et présence de l'entreprise sur la plateforme.

---

## 📖 Description

**JOB-in** a été conçu comme une solution permettant de centraliser les interactions entre les chercheurs d'emploi et les recruteurs au sein d'une même plateforme.

L'application distingue clairement les fonctionnalités selon le type d'utilisateur.

### 👤 Candidat

Le candidat peut :

* 🔎 Rechercher des offres d'emploi ;
* 📄 Consulter les détails d'une offre ;
* 📤 Postuler à des opportunités ;
* 📊 Suivre l'état de ses postulats ;
* 🏢 Consulter un annuaire d'entreprises ;
* 📰 Consulter des publications ;
* 👤 Gérer son profil ;
* ⚙️ Configurer ses paramètres ;
* ❓ Accéder à une section d'aide.

### 🏢 Entreprise

L'entreprise peut :

* 📊 Consulter son tableau de bord ;
* 📢 Gérer ses offres d'emploi ;
* 👥 Consulter et suivre les candidatures ;
* 📰 Publier et gérer des contenus ;
* 🏢 Gérer son profil entreprise ;
* ⚙️ Configurer ses paramètres ;
* ❓ Accéder à une section d'aide.

---

## 🚀 Fonctionnalités

### 🌐 Espace public

L'espace public constitue la vitrine de JOB-in et permet aux visiteurs de découvrir la plateforme avant de rejoindre l'un des deux espaces.

Fonctionnalités principales :

* 🏠 Page d'accueil ;
* 🔎 Présentation des domaines et métiers populaires ;
* ⭐ Section d'avis utilisateurs ;
* ❓ FAQ interactive ;
* 📱 Navigation responsive ;
* 👤 Accès à l'espace candidat ;
* 🏢 Accès à l'espace entreprise.

---

### 👤 Espace candidat

Le tableau de bord candidat centralise les fonctionnalités liées à la recherche d'emploi et au suivi professionnel.

#### 📊 Tableau de bord

* Vue synthétique de l'activité du candidat ;
* Accès rapide aux principales fonctionnalités ;
* Suivi des postulats.

#### 🔎 Recherche d'emploi

* Recherche d'opportunités ;
* Consultation des offres ;
* Accès aux informations détaillées d'une offre.

#### 📋 Postulats

* Consultation des candidatures ;
* Suivi de leur évolution ;
* Gestion des opportunités auxquelles le candidat a postulé.

#### 📰 Publications

* Consultation des publications ;
* Accès aux pages de détail ;
* Navigation entre les différents contenus.

#### 🏢 Entreprises

* Annuaire des entreprises ;
* Consultation des informations disponibles sur les entreprises.

#### 👤 Profil et paramètres

* Gestion du profil candidat ;
* Paramétrage du compte ;
* Accès à l'aide.

---

### 🏢 Espace entreprise

L'espace entreprise fournit les outils nécessaires à la gestion du recrutement.

#### 📊 Tableau de bord

* Vue globale de l'activité ;
* Accès rapide aux offres et candidatures ;
* Suivi des principales informations de recrutement.

#### 📢 Gestion des offres

* Consultation des offres ;
* Gestion des offres publiées ;
* Organisation des opportunités proposées aux candidats.

#### 👥 Gestion des candidatures

* Consultation des candidatures ;
* Suivi des candidats ;
* Gestion du processus de recrutement.

#### 📰 Publications

* Gestion des publications de l'entreprise ;
* Consultation et organisation des contenus.

#### 🏢 Profil et paramètres

* Gestion du profil entreprise ;
* Configuration du compte ;
* Accès à l'aide.

---

## 🛠️ Technologies utilisées

| Technologie          | Utilisation                                           |
| -------------------- | ----------------------------------------------------- |
| ⚛️ **React**         | Construction de l'interface utilisateur               |
| ⚡ **Vite**           | Environnement de développement et build de production |
| 🧭 **React Router**  | Gestion de la navigation et du routage                |
| 🎨 **Tailwind CSS**  | Mise en forme et design responsive                    |
| 🎬 **Framer Motion** | Animations et transitions                             |
| 🧩 **Radix UI**      | Composants d'interface accessibles                    |
| 🔷 **React Icons**   | Bibliothèque d'icônes                                 |

---

## 📦 Prérequis

Avant d'installer le projet, assurez-vous de disposer de :

* [Node.js](https://nodejs.org/) — version LTS recommandée ;
* npm — installé avec Node.js ;
* Git — pour cloner le dépôt.

---

## 🚀 Installation

### 1. Cloner le projet

```bash
git clone https://github.com/johanalain11/job-in.git
```

### 2. Accéder au répertoire

```bash
cd job-in
```

### 3. Installer les dépendances

```bash
npm install
```

---

## ▶️ Lancer le projet

Démarrez le serveur de développement avec :

```bash
npm run dev
```

Vite affichera l'adresse locale de l'application dans le terminal.

Par défaut, l'application est généralement accessible à :

```text
http://localhost:3000
```

---

## 🏗️ Construire pour la production

Pour générer une version optimisée de l'application :

```bash
npm run build
```

Les fichiers de production sont générés dans le dossier :

```text
dist/
```

Pour prévisualiser le build de production localement :

```bash
npm run preview
```

---

## 🧭 Routes principales

### 🌐 Espace public

| Route | Description    |
| ----- | -------------- |
| `/`   | Page d'accueil |

### 👤 Espace candidat

| Route           | Description              |
| --------------- | ------------------------ |
| `/dashboard`    | Tableau de bord candidat |
| `/recherche`    | Recherche d'emploi       |
| `/postulats`    | Suivi des postulats      |
| `/publications` | Publications             |
| `/entreprises`  | Annuaire des entreprises |

### 🏢 Espace entreprise

| Route             | Description                |
| ----------------- | -------------------------- |
| `/dashboard-E`    | Tableau de bord entreprise |
| `/offres-E`       | Gestion des offres         |
| `/candidatures-E` | Gestion des candidatures   |
| `/publications-E` | Publications entreprise    |

> Les routes peuvent évoluer avec l'ajout de nouvelles fonctionnalités à la plateforme.

---

## 📂 Structure du projet

```text
/job-in
├── public/
│
├── src/
│   ├── assets/          # Images, logos et ressources graphiques
│   │
│   ├── components/      # Composants de l'espace public
│   │
│   ├── elements/        # Composants de l'espace candidat
│   │
│   ├── elements2/       # Composants de l'espace entreprise
│   │
│   ├── pages/           # Pages publiques et pages candidat
│   │
│   ├── pages2/          # Pages de l'espace entreprise
│   │
│   ├── App.jsx          # Configuration principale et routes
│   └── main.jsx         # Point d'entrée de l'application
│
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🎨 Architecture de l'interface

JOB-in est organisé autour de trois niveaux d'expérience utilisateur :

```text
                         JOB-in
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
       Public           Candidat         Entreprise
          │                │                │
          │                ├── Dashboard   ├── Dashboard
          │                ├── Recherche   ├── Offres
          │                ├── Postulats   ├── Candidatures
          │                ├── Publications├── Publications
          │                ├── Entreprises └── Profil
          │                └── Profil
          │
          ├── Accueil
          ├── Métiers
          ├── Avis
          └── FAQ
```

Cette organisation permet de séparer les responsabilités et de proposer une expérience adaptée au profil de chaque utilisateur.

---

## 🔄 Exemple de parcours utilisateur

### Candidat

```text
Accueil
   ↓
Accès espace candidat
   ↓
Tableau de bord
   ↓
Recherche d'emploi
   ↓
Consultation d'une offre
   ↓
Postulation
   ↓
Suivi du postulat
```

### Entreprise

```text
Accueil
   ↓
Accès espace entreprise
   ↓
Tableau de bord
   ↓
Création / gestion d'une offre
   ↓
Réception des candidatures
   ↓
Suivi des candidats
```

---

## 🔮 Améliorations futures

Plusieurs évolutions peuvent être envisagées pour transformer progressivement JOB-in en une plateforme de recrutement complète :

* 🔐 Mise en place d'une authentification complète ;
* 👥 Gestion des rôles et permissions ;
* 🔗 Connexion à une API backend ;
* 🗄️ Intégration d'une base de données ;
* 🔎 Recherche avancée et filtres des offres ;
* 📄 Système de CV et gestion des documents ;
* 🔔 Notifications en temps réel ;
* 💬 Messagerie candidat ↔ entreprise ;
* 📊 Statistiques et tableaux de bord avancés ;
* 📱 Optimisation progressive pour les appareils mobiles ;
* 🌍 Internationalisation de l'application ;
* 🧪 Mise en place de tests automatisés ;
* 🚀 Déploiement et intégration continue (CI/CD).

---

## 👨‍💻 Auteur

**Johan Alain**

GitHub : [@johanalain11](https://github.com/johanalain11)

LinkedIn : [linkedin.com/in/johanalain11](https://www.linkedin.com/in/johanalain11)

---

## 📜 Licence

Ce projet est distribué sous licence **MIT**.

---

⭐ Si ce projet vous intéresse, n'hésitez pas à consulter le dépôt, à proposer des améliorations ou à contribuer à son évolution.
