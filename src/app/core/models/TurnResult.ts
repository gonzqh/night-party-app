export interface TurnResult {
  playerId: string;
  punishmentId: string;
  targetPlayerIds: string[];

  timestamp: number;
}