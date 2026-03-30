const presence = new Presence({
  clientId: "1487970474255319151"
});

interface RadioData {
  radioName?: string;
  tmb?: string;
  image?: string;
  artist?: string;
  listening?: boolean;
}

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "https://avatars.githubusercontent.com/u/189441456?s=200&v=4",
    smallImageKey: "https://avatars.githubusercontent.com/u/189441456?s=200&v=4",
    state: "Signacord en listening",
    details: "Écoutant la radio"
  };

  try {
    // Fetch les données du serveur Signacord
    const response = await fetch("https://dc.signabroam.ovh/api/current");
    
    if (response.ok) {
      const data: RadioData = await response.json();
      
      // Récupère le nom de la radio et l'affiche en description
      if (data.radioName) {
        presenceData.details = data.radioName;
      }
      
      // Affiche l'image "tmb" en grande image
      if (data.tmb) {
        presenceData.largeImageKey = data.tmb;
      } else if (data.image) {
        presenceData.largeImageKey = data.image;
      }
      
      // Avatar GitHub en mini image
      presenceData.smallImageKey = "https://avatars.githubusercontent.com/u/189441456?s=200&v=4";
      
      // Titre avec le nom de l'artiste si disponible
      if (data.artist) {
        presenceData.state = `${data.artist} - Signacord en listening`;
      } else {
        presenceData.state = "Signacord en listening";
      }
    }
  } catch (error) {
    console.error("Erreur lors du fetch des données Signacord:", error);
  }

  presence.setActivity(presenceData);
});
