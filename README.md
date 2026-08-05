# Fiskaregården – presentation

Statisk webbpresentation. `index.html` i roten, alla resurser ligger i `uploads/` och `_ds/`.
Porträtt och projektbilder som dragits in i presentationen är inbakade direkt i `index.html`.

## Uppdatera ett befintligt repo (GitHub i webbläsaren)
1. Öppna repot → **Add file → Upload files**.
2. Dra in **innehållet** i den här mappen (inte mappen i sig).
3. GitHub skriver över filer med samma namn — bekräfta med **Commit changes**.
4. Netlify bygger om automatiskt inom ett par minuter.

Vid en uppdatering räcker det oftast med `index.html`, `image-slot.js`, `support.js` och `deck-stage.js` — `uploads/` och `_ds/` behöver bara laddas upp när nya bilder eller videor tillkommit.

## Första gången (Netlify via GitHub)
1. Skapa repo och ladda upp innehållet i mappen så att `index.html` ligger i roten.
2. Netlify: **Add new site → Import an existing project → GitHub**.
3. Build command: tomt. Publish directory: `.`
4. Deploy.
