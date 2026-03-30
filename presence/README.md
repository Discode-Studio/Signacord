# Signacord Premid Script

Script Premid pour afficher votre écoute de Signacord sur Discord.

## Installation

1. Installez [Premid](https://premid.app/) si ce n'est pas déjà fait
2. Remplacez `1000000000000000000` par votre Client ID Discord dans `presence.ts` ou `dist/presence.js`
3. Placez ce dossier dans le dossier `presences` de Premid

## Configuration

### Client ID

Vous devez obtenir un Client ID Discord :
1. Allez sur [Discord Developer Portal](https://discord.com/developers/applications)
2. Créez une nouvelle application
3. Copiez l'ID de l'application
4. Remplacez la valeur de `clientId` dans le code

## Fonctionnalités

- **Titre :** "Signacord en listening"
- **Description :** Affiche le nom de la radio écoutée
- **Grande image :** L'image "tmb" de la station radio
- **Petite image :** Avatar GitHub de Signacord (https://avatars.githubusercontent.com/u/189441456?s=200&v=4)

## API Attendue

Le script fait un fetch sur `https://dc.signabroam.ovh/api/current` et s'attend à recevoir:

```json
{
  "radioName": "Nom de la radio",
  "tmb": "URL de l'image",
  "artist": "Artiste en cours",
  "listening": true
}
```

## Compilation

Si vous modifiez `presence.ts`, compilez en TypeScript :

```bash
npx tsc
```
