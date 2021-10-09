import { WelcomeComponent } from "./home/welcome.component";

export const routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'}
]