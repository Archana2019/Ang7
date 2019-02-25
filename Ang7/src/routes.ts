import { SectionOrdersComponent } from './app/section/section-orders/section-orders.component';
import { SectionHealthComponent } from './app/section/section-health/section-health.component';
import { SalesVolumeComponent } from './app/section/sales-volume/sales-volume.component';
import { Routes } from '@angular/router';
export const appRoutes: Routes = [
    {path:'sales',component:SalesVolumeComponent},
    {path:'orders',component:SectionOrdersComponent},
    {path:'health',component:SectionHealthComponent},
    {path:'',redirectTo:'/sales',pathMatch:'full'}

]
