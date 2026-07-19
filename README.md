# Fiskaregården – presentation

Statisk webbpresentation. `index.html` i roten, alla resurser ligger i `uploads/` och `_ds/`.

## Publicera på Netlify via GitHub
1. Skapa ett nytt repo på GitHub och ladda upp **allt innehåll i den här mappen** (inte mappen i sig — `index.html` ska ligga i repots rot).
2. I Netlify: **Add new site → Import an existing project → GitHub** och välj repot.
3. Bygginställningar: lämna **Build command** tomt och sätt **Publish directory** till `.` (punkt).
4. Deploy.

Ingen byggprocess behövs — det är rena statiska filer.
