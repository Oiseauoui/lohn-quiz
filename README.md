# Lohn und Gehalt Quiz

Ein interaktiver Quiz-Trainer für deutsches Lohn- und Gehaltsrecht (2026).

## 🚀 Deployment auf GitHub Pages

### Methode 1: GitHub CLI (empfohlen)

```bash
# Repository initialisieren
cd lohn-quiz
git init
git add .
git commit -m "Initial commit"

# GitHub Repository erstellen
gh repo create lohn-quiz --public --source=.

# GitHub Pages aktivieren
gh repo view --web
# Gehe zu Settings > Pages > Source: main branch
```

### Methode 2: Manuelles Deployment

1. **Repository erstellen:**
   - Gehe zu [github.com/new](https://github.com/new)
   - Repository Name: `lohn-quiz`
   - Public oder Private wählen
   - "Initialize this repository with a README" deaktivieren

2. **Dateien hochladen:**
   ```bash
   cd lohn-quiz
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/DEIN_USERNAME/lohn-quiz.git
   git push -u origin main
   ```

3. **GitHub Pages aktivieren:**
   - Gehe zum Repository
   - Settings > Pages
   - Source: `Deploy from a branch`
   - Branch: `main` / `root`
   - Klicke auf "Save"

4. **Warten:**
   - Nach 1-2 Minuten ist die Seite unter `https://DEIN_USERNAME.github.io/lohn-quiz/` verfügbar

## 📁 Dateistruktur

```
lohn-quiz/
├── index.html      # Hauptseite mit Quiz-Interface
├── questions.js    # Quiz-Daten (50 Fragen)
└── README.md       # Diese Datei
```

## 🎯 Features

- 50 Fragen zum deutschen Lohn- und Gehaltsrecht
- Sofortige Rückmeldung bei jeder Antwort
- Detaillierte Erklärungen in deutscher Sprache
- Fortschrittsanzeige
- Responsive Design für Mobile und Desktop
- Keine Server-Abhängigkeit (statisches HTML/JS)

## 🛠️ Lokal testen

Öffne einfach `index.html` in einem Browser, oder:

```bash
# Mit Python
python -m http.server 8000

# Mit Node.js
npx serve
```

Dann öffne: `http://localhost:8000`

## 📝 Fragen hinzufügen

Bearbeite `questions.js` und füge neue Fragen im folgenden Format hinzu:

```javascript
{
    "id": 51,
    "question": "Deine Frage?",
    "options": ["A) Option 1", "B) Option 2", "C) Option 3", "D) Option 4"],
    "correct_letter": "B",
    "explanation": "Deine Erklärung..."
}
```
