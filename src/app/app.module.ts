import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GrowlModule, ConfirmationService, ConfirmDialogModule, MegaMenuModule } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';

// services
import {ConstantService} from './shared/service/constant-service';
import {NotificationService} from './shared/service/notification.service';
import {DataService} from './shared/service/data.service';
import {Logger} from './shared/service/default-log.service';
import {ConsoleLogService} from './shared/service/log.service';
import {TokenService} from './shared/service/token.service';
import {NotificationEmitterService} from './shared/service/notification-emitter.service';
import {appRoutes} from './app.route';
import {CommonGuard} from './shared/guard/common.guard';
import {SaveFormsGuard} from './shared/guard/save-forms.guard';
import {EmitterService} from './shared/service/emitter.service';
import {ErrorService} from './shared/service/error-service';

import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {EmployeeModule} from './employee/employee.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ConfirmDialogModule,
    MegaMenuModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    GrowlModule,
    BrowserAnimationsModule,
    EmployeeModule,
    HttpModule
  ],
  providers: [
    NotificationService,
    ConstantService,
    DataService,
    { provide: Logger, useClass: ConsoleLogService },
    TokenService,
    NotificationEmitterService,
    CommonGuard,
    SaveFormsGuard,
    EmitterService,
    ErrorService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
