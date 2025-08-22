import { NgModule } from "@angular/core";
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        // AppComponent,
        // HeaderLayoutComponent,
        // SidebarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppComponent,
        HeaderLayoutComponent,
        SidebarComponent,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}