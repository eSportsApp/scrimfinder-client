import WebSocket from 'ws';

interface SearchMessage {
    type: string;
    game: string;
    guildId: string;
    platform: string;
    region: string;
    userid: string;
    username: string;
    best_of: number;
    date: string;
    time: string;
}

interface CloseRequest {
    type: string,
    guildId: string;
    userid: string,
    SearchId: string
}

class ScrimFinder {
    private ws: WebSocket;

    constructor(apiKey: string) {
        this.ws = new WebSocket(`ws://api.esportsapp.gg/network?apikey=${apiKey}`);

        this.ws.on('open', () => {
            console.log('WebSocket connection established.');
        });

        this.ws.on('message', (message: string) => {
            console.log('Received message:', JSON.parse(message));
        });

        this.ws.on('error', (error: Error) => {
            console.error('WebSocket error:', error);
        });

        this.ws.on('close', () => {
            console.log('WebSocket connection closed.');
        });
    }

    openSearch(search: SearchMessage) {
        if (this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(search));
            console.log('Sent search message:', search);
        } else {
            console.error('WebSocket is not open. Unable to send message.');
        }
    }

    closeSearch(closeRequest: CloseRequest) {
        if (this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(closeRequest));
            console.log('Sent close request:', closeRequest);
        } else {
            console.error('WebSocket is not open. Unable to send message.');
        }
    }

    close() {
        this.ws.close();
    }

    
}


export default ScrimFinder;