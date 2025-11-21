# Andrea D'Aguì DJ Landing Page

Questo progetto è una landing page per Andrea D'Aguì, un DJ specializzato in musica per matrimoni. L'applicazione è costruita utilizzando React JS per il frontend e PHP MVC per il backend, con un database MySQL per la registrazione dei contatti.

## Struttura del Progetto

La struttura del progetto è la seguente:

```
andrea-dagui-dj-landing
├── backend
│   ├── app
│   │   ├── config
│   │   │   └── database.php
│   │   ├── controllers
│   │   │   └── ContactController.php
│   │   ├── models
│   │   │   └── Contact.php
│   │   └── core
│   │       ├── App.php
│   │       └── Controller.php
│   ├── public
│   │   ├── index.php
│   │   └── .htaccess
│   └── composer.json
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── Button.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   └── Navbar.jsx
│   │   ├── assets
│   │   │   └── styles
│   │   │       └── index.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── database
│   └── schema.sql
└── README.md
```

## Installazione

### Prerequisiti

Assicurati di avere installato:

- PHP >= 7.4
- Composer
- Node.js >= 14
- MySQL

### Configurazione del Backend

1. Naviga nella cartella `backend` e installa le dipendenze con Composer:

   ```
   cd backend
   composer install
   ```

2. Configura il file `app/config/database.php` con le tue credenziali MySQL.

3. Esegui lo script SQL presente in `database/schema.sql` per creare le tabelle necessarie.

### Configurazione del Frontend

1. Naviga nella cartella `frontend` e installa le dipendenze con npm:

   ```
   cd frontend
   npm install
   ```

2. Avvia il server di sviluppo:

   ```
   npm run dev
   ```

## Utilizzo

Visita `http://localhost:3000` per visualizzare la landing page. Puoi utilizzare il modulo di contatto per inviare richieste e registrare i tuoi dati.

## Contribuire

Se desideri contribuire a questo progetto, sentiti libero di aprire una pull request o segnalare problemi.

## Licenza

Questo progetto è sotto licenza MIT.