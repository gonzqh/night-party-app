export interface PunishmentCategory {
  id: string;
  title: string;
  selectionType: 'single' | 'multiple'; // radio vs checklist
}