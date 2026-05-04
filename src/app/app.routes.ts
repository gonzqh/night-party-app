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
  /* {
    path: 'todito',
    loadComponent: () => import('./pages/games/todito/todito.page').then( m => m.ToditoPage)
  }, */
  {
    path: 'caminitos',
    loadComponent: () => import('./pages/games/caminitos/caminitos.page').then( m => m.CaminitosPage)
  },
  {
    path: 'ludo',
    loadComponent: () => import('./pages/games/ludo/ludo.page').then( m => m.LudoPage)
  },
  {
    path: 'shotoreto',
    loadComponent: () => import('./pages/games/shotoreto/shotoreto.page').then( m => m.ShotoretoPage)
  },
];