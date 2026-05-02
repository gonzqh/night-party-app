import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'players',
    loadComponent: () => import('./pages/players/players.page').then( m => m.PlayersPage)
  },
  {
    path: 'game-selection',
    loadComponent: () => import('./pages/game-selection/game-selection.page').then( m => m.GameSelectionPage)
  },
  {
    path: 'punishments',
    loadComponent: () => import('./pages/punishments/punishments.page').then( m => m.PunishmentsPage)
  },
  {
    path: 'difficulty',
    loadComponent: () => import('./pages/difficulty/difficulty.page').then( m => m.DifficultyPage)
  },
  {
    path: 'in-game-settings',
    loadComponent: () => import('./pages/in-game-settings/in-game-settings.page').then( m => m.InGameSettingsPage)
  },
  {
    path: 'gameplay',
    loadComponent: () => import('./pages/gameplay/gameplay.page').then( m => m.GameplayPage)
  },
];