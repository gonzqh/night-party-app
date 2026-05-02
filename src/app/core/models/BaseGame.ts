import { GameSession } from "./GameSession";
import { Punishment } from "./Punishments";
import { TurnResult } from "./TurnResult";

export abstract class BaseGame {
  abstract generateTurn(session: GameSession): TurnResult;

  protected filterPunishments(session: GameSession, all: Punishment[]) {
    return all.filter(p =>
      p.difficulties.includes(session.setup.difficultyId) &&
      session.setup.players.length >= p.minPlayers &&
      session.setup.players.length <= p.maxPlayers
    );
  }
}