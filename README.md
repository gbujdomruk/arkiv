# 🗄 Arkiv

> Application web personnelle pour gérer toute votre médiathèque.
> A personal web app to manage your entire media library.

---

## 🇫🇷 Français

Arkiv est une application web progressive (PWA) pour cataloguer et retrouver facilement vos médias physiques et numériques.

### Médias supportés

- 🎵 **Musique** — CDs, vinyles, MP3 et autres formats audio
- 🎬 **Vidéo** — DVDs, Blu-ray et autres supports vidéo
- 📚 **Livres** — BD, manga, romans, livres numériques

### Fonctionnalités

- 📷 **Scanner de code-barres** — identifiez un média en pointant la caméra, les informations sont récupérées automatiquement via Discogs
- 📂 **Import MusicBuddy / Discogs** — chargez votre collection existante en un clic via export CSV
- 🖼 **Pochettes & visuels** — images récupérées automatiquement depuis Discogs
- 🔍 **Recherche & filtres** — recherche instantanée, filtres par genre et type de média
- ⭐ **Favoris** — marquez vos médias préférés
- 📊 **Statistiques** — vue d'ensemble de votre collection
- 💾 **Sauvegarde locale** — vos données restent sur votre appareil, aucun compte requis
- 📱 **PWA installable** — fonctionne comme une app native sur iPhone et Android

### Installation sur iPhone / Android

1. Ouvrez l'URL dans **Safari** (iPhone) ou **Chrome** (Android)
2. Appuyez sur **Partager** → **Sur l'écran d'accueil** (iPhone) ou **Installer l'application** (Android)
3. Arkiv s'installe avec sa propre icône, sans passer par l'App Store

### Connexion Discogs

Arkiv utilise l'API Discogs via OAuth — vous vous connectez avec votre propre compte Discogs, aucun token n'est stocké dans le code.

---

## 🇬🇧 English

Arkiv is a progressive web app (PWA) to catalogue and easily browse your physical and digital media collection.

### Supported media

- 🎵 **Music** — CDs, vinyl records, MP3s and other audio formats
- 🎬 **Video** — DVDs, Blu-rays and other video formats
- 📚 **Books** — comics, manga, novels, e-books

### Features

- 📷 **Barcode scanner** — point your camera at any barcode to identify a release; metadata is fetched automatically from Discogs
- 📂 **MusicBuddy / Discogs import** — load your existing collection in one tap via CSV export
- 🖼 **Cover artwork** — images loaded automatically from Discogs
- 🔍 **Search & filters** — instant search, genre and media-type filters
- ⭐ **Favourites** — mark your favourite items
- 📊 **Statistics** — overview of your entire collection
- 💾 **Local storage** — your data stays on your device, no account required
- 📱 **Installable PWA** — works like a native app on iPhone and Android

### Install on iPhone / Android

1. Open the URL in **Safari** (iPhone) or **Chrome** (Android)
2. Tap **Share** → **Add to Home Screen** (iPhone) or **Install app** (Android)
3. Arkiv installs with its own icon, no App Store needed

### Discogs connection

Arkiv uses the Discogs API via OAuth — you sign in with your own Discogs account, no token is ever stored in the source code.

---

## Technologies

Plain HTML / CSS / JavaScript — no framework, no backend, no account required.
Authentication via [Discogs OAuth](https://www.discogs.com/developers/) proxied through a Cloudflare Worker.
Barcode detection via the native [BarcodeDetector API](https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector).
Metadata from [Discogs](https://www.discogs.com) · [MusicBrainz](https://musicbrainz.org) · [Cover Art Archive](https://coverartarchive.org).
