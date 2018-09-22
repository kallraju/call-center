import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AgentModule } from './agent/agent.module';
import { AgentQueueModule } from './agent-queue/agent-queue.module';
import { MISModule } from './mis/mis.module';
import { QueueModule } from './queue/queue.module';
import { HttpTokenInterceptService } from './http-token-intercept.service';
import { MainModule } from './main/main.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    AgentModule,
    AgentQueueModule,
    MISModule,
    QueueModule,
    MainModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
