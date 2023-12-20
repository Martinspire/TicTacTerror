import { monitor } from '@colyseus/monitor';
import { playground } from '@colyseus/playground';
import config from '@colyseus/tools';

/**
 * Import your Room files
 */
import { LobbyRoom, RelayRoom } from '@colyseus/core';
import { GameRoom } from './rooms/GameRoom';
import { MyRoom } from './rooms/MyRoom';

export default config({

    initializeGameServer: (gameServer) => {
        /**
         * Define your room handlers:
         */
        gameServer.define('my_room', MyRoom);
        gameServer.define('game', GameRoom);
        gameServer.define('gameRelay', RelayRoom, {
            maxClients: 4,
            allowReconnectionTime: 120
        });
        gameServer.define('lobby', LobbyRoom);
    },

    initializeExpress: (app) => {
        /**
         * Bind your custom express routes here:
         * Read more: https://expressjs.com/en/starter/basic-routing.html
         */
        app.get('/christmas', (req, res) => {
            res.send('Keep the holiday spirit!');
        });
        app.get('/cake', (req, res) => {
            res.send('The cake is a lie!');
        });

        /**
         * Use @colyseus/playground
         * (It is not recommended to expose this route in a production environment)
         */
        if (process.env.NODE_ENV !== 'production') {
            app.use('/', playground);
        }

        /**
         * Use @colyseus/monitor
         * It is recommended to protect this route with a password
         * LOL Yolo
         * Read more: https://docs.colyseus.io/tools/monitor/#restrict-access-to-the-panel-using-a-password
         */
        app.use('/colyseus', monitor());
    },


    beforeListen: () => {
        /**
         * Before before gameServer.listen() is called.
         */
    }
});
