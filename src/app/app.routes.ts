import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"tokens-format",
        loadComponent: () => import("./pages/tokens-format/tokens-format.component").then( c => c.TokensFormatComponent )
    },
    {
        path:"audits-format",
        loadComponent: () => import("./pages/audits-format/audits-format.component").then( c => c.AuditsFormatComponent )
    }
];
