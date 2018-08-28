import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AgentModule } from './agent/agent.module';
import { AgentQueueModule } from './agent-queue/agent-queue.module';
import { MISModule } from './mis/mis.module';
import { QueueModule } from './queue/queue.module';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
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
    QueueModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
