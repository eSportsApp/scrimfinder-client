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
    private ws!: WebSocket;
    private retries = 0;
    private readonly MAX_RETRIES = 10;
    private readonly RETRY_INTERVAL = 3000;


    constructor(apiKey: string) {
        this.connect(apiKey);
    }

    private connect(apiKey: string) {
        this.ws = new WebSocket(`ws://localhost:3333/network?apikey=${apiKey}`);

        this.ws.on('open', () => {
            console.log('Client successfully connected to the Scrimfinder Network 🙂');
            this.retries = 0;
        });

        this.ws.on('message', (message: string) => {
        });

        this.ws.on('error', (error: Error) => {
            console.error('Network error:', error);
        });

        this.ws.on('close', () => {
            console.log('❌ Connection got closed. Reconnecting...');
            if (this.retries < this.MAX_RETRIES) {
                this.retries++;
                console.log(`Reconnecting connection try (${this.retries}/${this.MAX_RETRIES})...`);
                setTimeout(() => this.connect(apiKey), this.RETRY_INTERVAL);
            } else {
                console.error('You got rate limited. Please check your ApiKey and try again Manually');
            }
        });
    }

    openSearch(search: SearchMessage) {
        if (this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(search));
        } else {
            console.error('You are not connected to the Scrimfinder Network. Unable to send message.');
        }
    }

    closeSearch(closeRequest: CloseRequest) {
        if (this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(closeRequest));
        } else {
            console.error('You are not connected to the Scrimfinder Network. Unable to send message.');
        }
    }

    close() {
        this.ws.close();
    }

    
}


export default ScrimFinder;