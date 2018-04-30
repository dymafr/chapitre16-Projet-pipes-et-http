import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PanierService } from './shared/services/panier.service';
import { AppComponent } from './app.component';
import { CocktailsListComponent } from './cocktail-container/cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { HeaderComponent } from './header/header.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { PanierComponent } from './panier/panier.component';
import { IngredientsListComponent } from './panier/ingredients-list/ingredients-list.component';
import { AppRouting } from './app.routing';
import { CocktailEditComponent } from './cocktail-container/cocktail-edit/cocktail-edit.component';
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CocktailsListComponent,
    CocktailDetailsComponent,
    HeaderComponent,
    CocktailContainerComponent,
    ActiveDirective,
    PanierComponent,
    IngredientsListComponent,
    CocktailEditComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ PanierService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
