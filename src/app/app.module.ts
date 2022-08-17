import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';
import { DataTablesModule } from 'angular-datatables';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './theme/admin/admin.component';
import { NavigationComponent } from './theme/navigation/navigation.component';
import { NavBarComponent } from './theme/nav-bar/nav-bar.component';
import { NavContentComponent } from './theme/nav-content/nav-content.component';
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import { NavGroupComponent } from './theme/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/nav-content/nav-item/nav-item.component';
import { CardComponent } from './theme/shared/card/card.component';
import { NavLeftComponent } from './theme/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/nav-search/nav-search.component';
import { NavRightComponent } from './theme/nav-bar/nav-right/nav-right.component';
import { BreadcrumbComponent } from './theme/shared/breadcrumb/breadcrumb.component';
import { LoginComponent } from './login/login.component';
import { ProductServicesComponent } from './catalogos/product-services/product-services.component';
import { NavigationItem } from './theme/navigation/navigation';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavigationComponent,
    NavBarComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    CardComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    BreadcrumbComponent,
    ProductServicesComponent,
    LoginComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PerfectScrollbarModule,
        NgbModule,
        ClickOutsideModule,
        BrowserAnimationsModule,
        NgbDropdownModule,
        NgbTooltipModule,
        NgbButtonsModule,
        DataTablesModule,
        HttpClientModule,
        MatSnackBarModule,
        FormsModule
    ],
  providers: [NavigationItem,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
