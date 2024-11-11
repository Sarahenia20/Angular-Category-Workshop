import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../../Models/Categorie';
import { ShortList } from '../../Models/ShortList'; // Import the ShortList model

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  constructor(private router: Router) {}

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

  // Shortlist array to store shortlisted items
  shortList: ShortList[] = [];

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

  // Add category to shortlist with explicit mapping
  addToShortList(category: Categorie) {
    const shortListItem: ShortList = {
        idUser: 1,                
        idElement: category.id,    
        typeElement: 'category',   
        id: category.id,          
        title: category.title,    
        image: category.image,    
        description: category.description, 
        available: category.available
    };
    // Avoid duplicates in the shortlist
    const isAlreadyInShortlist = this.shortList.some(item => item.idElement === shortListItem.idElement);
    if (!isAlreadyInShortlist) {
      this.shortList.push(shortListItem);
      console.log('Added to shortlist:', shortListItem);
    } else {
      console.log('Category is already in shortlist');
    }
  }

  // Example alert for description
  alert(description: string) {
    alert(description);
  }
}
