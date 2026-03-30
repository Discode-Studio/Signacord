const presence = new Presence({
  clientId: "1000000000000000000" // Remplacer avec votre Client ID Discord
});

presence.on("UpdateData", async () => {
  const presenceData = {
    largeImageKey: "https://avatars.githubusercontent.com/u/189441456?s=200&v=4",
    smallImageKey: "https://avatars.githubusercontent.com/u/189441456?s=200&v=4",
    state: "Signacord en listening",
    details: "Écoutant la radio"
  };

  try {
    // Fetch les données du serveur Signacord
    const response = await fetch("https://dc.signabroam.ovh/api/current");
    
    if (response.ok) {
      const data = await response.json();
      
      // Récupère le nom de la radio et l'image
      if (data.radioName) {
        presenceData.details = data.radioName;
      }
      
      if (data.tmb || data.image) {
        presenceData.largeImageKey = data.tmb || data.image;
      }
      
      if (data.artist) {
        presenceData.state = `${data.artist} - Signacord`;
      }
    }
  } catch (error) {
    console.error("Erreur lors du fetch:", error);
  }

  presence.setActivity(presenceData);
});
