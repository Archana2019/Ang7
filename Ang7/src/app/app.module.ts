import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartsModule } from 'ng2-charts';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SalesVolumeComponent } from './section/sales-volume/sales-volume.component';
import { SectionOrdersComponent } from './section/section-orders/section-orders.component';
import { SectionHealthComponent } from './section/section-health/section-health.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/Routes';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SalesVolumeComponent,
    SectionOrdersComponent,
    SectionHealthComponent,
    PieChartComponent,
    BarChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
