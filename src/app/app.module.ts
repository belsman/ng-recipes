import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RecipeModule } from './features/recipes/recipes.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingListService } from './features/shopping/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './features/recipes/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { ShoppingModule } from './features/shopping/shopping.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecipeModule,
    ShoppingModule,
    AuthModule,
    CoreModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
