import { Server } from 'socket.io';
import { DatabaseService } from 'src/database/database.service';
import { ConnectionService } from './connection.service';
export declare class GameService {
    private readonly database;
    private readonly connectionService;
    private logger;
    private width;
    private height;
    private framePerSeconds;
    private loop;
    private target;
    private leftPlayer;
    private rightPlayer;
    private ball;
    private gameId;
    private server;
    private room;
    winner: string | null;
    private players;
    isGameStarted: boolean;
    private isGamePaused;
    private isCancelledGame;
    private playerWidthPercentage;
    private playerHeightPercentage;
    private fractionForSpeed;
    private ballSizePercentage;
    private ballSpeedFactor;
    private ballSpeed;
    private ballVelocity;
    private ballSize;
    constructor(database: DatabaseService, connectionService: ConnectionService);
    createGame(): Promise<void>;
    updateGameState(): Promise<void>;
    initGameEntities(): Promise<void>;
    setServer(server: Server, roomId: string, players: string[]): void;
    private updateGameScores;
    startGame(): Promise<void>;
    update(): void;
    endGame(): Promise<void>;
    private disconnectClients;
    handlePlayerMovement(player: number, direction: 'up' | 'down'): void;
    private handleBallCollision;
    getGameState(): any;
    private clearGameState;
    pauseGameExecution(): void;
    setIsCancelledGame(): void;
    isGameScoresChanged(): boolean;
    setWinner(userId: string): void;
}
