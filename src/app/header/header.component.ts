import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../features/recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  authSub: Subscription;

  collapsed = true;
  isAuthenticated = false;

  constructor(
    private recipeService: RecipeService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }

  onSaveRecipes() {
    this.recipeService.saveRecipes();
  }

  onFetchRecipes() {
    this.recipeService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
