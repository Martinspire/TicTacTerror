import { Schema, type } from "@colyseus/schema";

export class GameRoomState extends Schema {

  @type("boolean") allowReconnect: boolean;
  @type("number") gridSize: number;
  @type("number") maxPlayers: number;

  constructor() {
    super();
    this.allowReconnect = true;
    this.gridSize = 3;
    this.maxPlayers = 4;
  }
}
