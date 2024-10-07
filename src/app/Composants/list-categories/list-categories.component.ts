import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the router
import { Categorie } from 'src/app/Models/Categorie';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  constructor(private router: Router) {} // Inject Router for navigation

  // Categories array
  categories: Categorie[] = [
    { id: 1, title: 'Grand électroménager', image: 'assets/images/categorie_electromenager.jpg', description: '', available: true },
    { id: 2, title: 'Petit électroménager', image: 'assets/images/categorie_petit_electromenager.jpg', description: '', available: true },
    { id: 3, title: 'Produits informatiques', image: 'assets/images/categorie_produits_informatiques.jpg', description: '', available: true },
    { id: 4, title: 'Smart Phones', image: 'assets/images/categorie_smartPhone.jpg', description: '', available: true },
    { id: 5, title: 'TV, images et son', image: 'assets/images/categorie_tv_image_son.jpg', description: '', available: true },
    { id: 6, title: 'Produits voiture', image: 'assets/images/produits_nettoyages.jpg', description: '', available: false }
  ];

  // Input field value bound to ngModel
  title: string = '';

  // Getter to return filtered categories
  get filteredCategories(): Categorie[] {
    if (!this.title) {
      return this.categories; // If no input, return all categories
    }
    // Filter categories by title (case-insensitive)
    return this.categories.filter(category =>
      category.title.toLowerCase().includes(this.title.toLowerCase())
    );
  }

  // Method to navigate to details page
  goToDetails(id: number) {
    this.router.navigate([`/category/${id}`]); // Navigates to category detail page with the category id
  }

  // Example alert for description
  alert(description: string) {
    alert(description);
  }
}
