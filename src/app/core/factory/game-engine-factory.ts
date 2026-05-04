import { ToditoEngine } from '../models/ToditoEngine';

export class GameEngineFactory {

  static create(gameId: string) {

    switch (gameId) {

      case 'todito':
        return new ToditoEngine();

      /* case 'truth_or_dare':
        return new TruthOrDareEngine(); */

      default:
        throw new Error('Juego no soportado');
    }
  }
}