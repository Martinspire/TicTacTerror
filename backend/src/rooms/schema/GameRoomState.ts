import { Schema, type } from "@colyseus/schema";
import { RulesInterface } from '../../interfaces/rules.interface';

export class GameRoomState extends Schema {

  @type("string") rules: RulesInterface = {
    allowReconnect: true,
    gridSize: 3,
    maxPlayers: 2
  };
}
