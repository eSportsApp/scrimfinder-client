// test.ts
import ScrimFinder from './client';

const apiKey = 'af18fa24-cb09-46b6-8a90-ebdd2a8104b1'; // Ersetze dies mit deinem tatsächlichen API-Key
const scrimFinder = new ScrimFinder(apiKey);

// Beispiel für eine search-Nachricht
const searchMessage = {
    type: "search",
    game: "r6",
    platform: "pc",
    region: "emea",
    userid: "507710031664250891",
    username: "testuser",
    best_of: 3,
    date: "1.10",
    time: "14:00", // Beispiel für die Uhrzeit
};

// Warte einige Sekunden, um sicherzustellen, dass die WebSocket-Verbindung hergestellt ist, bevor die Nachricht gesendet wird
setTimeout(() => {
    scrimFinder.openSearch(searchMessage);
}, 2000); // 2 Sekunden warten
