declare module '@esportsapp/client' {
    import WebSocket from 'ws';

    interface SearchMessage {
        type: string;
        game: string;
        guildId: string;
        platform: string;
        region: string;
        user: {
            id: string;
            displayName: string;
            avatar: string;
        }
        best_of: number;
        date: string;
        time: string;
        extrainfo?: string;
        openSearch?: boolean;
        searchid?: string;
    }

    interface CloseRequest {
        type: string,
        guildId: string;
        userid: string,
        SearchId: string
    }

    class ScrimFinder {
        private ws: WebSocket;
        private retries: number;
        private readonly MAX_RETRIES: number;
        private readonly RETRY_INTERVAL: number;

        constructor(apiKey: string);

        private connect(apiKey: string): void;

        openSearch(search: SearchMessage): void;
        closeSearch(closeRequest: CloseRequest): void;
        close(): void;
    }

    export default ScrimFinder;
}