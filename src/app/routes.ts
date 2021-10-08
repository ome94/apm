import { WelcomeComponent } from "./home/welcome.component";
import { ProductDetailComponent } from "./products/product-detail.component";
import { ProductListComponent } from "./products/product-list.component";

export const routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'welcome', component: WelcomeComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'}
]