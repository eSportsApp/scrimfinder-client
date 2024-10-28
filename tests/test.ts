// test.ts
import ScrimFinder from '../src/client';

const apiKey = 'af18fa24-cb09-46b6-8a90-ebdd2a8104b1'; 
const scrimFinder = new ScrimFinder(apiKey);

const searchMessage = {
    type: "search",
    game: "r6",
    platform: "pc",
    region: "emea",
    userid: "507710031664250891",
    username: "testuser",
    best_of: 3,
    date: "1.10",
    time: "14:00", 
};

const closeRequest = {
    type: "closerequest",
    userid: "507710031664250891",
    SearchId: "671f5d493f4d0b0a6ee52cf3"
  };

//* delay to simulate user input
setTimeout(() => {
    //* Programm code
    scrimFinder.closeSearch(closeRequest);
}, 2000); // 2 Sekunden warten
