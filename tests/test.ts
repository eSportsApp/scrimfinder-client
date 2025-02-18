// test.ts
import ScrimFinder from '../src';

const apiKey = 'public-9536b09aa7899ac3f71fa470e4ef98dc44459e35'; 
const scrimFinder = new ScrimFinder(apiKey);

const searchMessage = {
    type: "search",
    game: "r6",
    guildId: "507710031664250891",
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
    guildId: "507710031664250891",
    SearchId: "671f5d493f4d0b0a6ee52cf3"
  };

//* delay to simulate user input
setTimeout(() => {
    //* Programm code
}, 2000); // 2 Sekunden warten

