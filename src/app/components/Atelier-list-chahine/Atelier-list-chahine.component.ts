import { Component, OnInit } from '@angular/core';
import { Atelier } from '../../models/Atelier';
import { AtelierService } from '../../services/Atelier.service';

@Component({
  selector: 'app-Atelier-list',
  templateUrl: './Atelier-list-chahine.component.html',  // ✅ chemin corrigé
  styleUrl: './Atelier-list-chahine.component.css'       // ✅ chemin corrigé
})
export class AtelierListComponent implements OnInit {
  Ateliers: Atelier[] = [];

  constructor(private service: AtelierService) { }

  ngOnInit(): void {
    this.loadAteliers();
  }

  loadAteliers() {
    this.service.getAll().subscribe({
      next: (data) => this.Ateliers = data,
      error: (err) => console.error('Erreur chargement :', err)
    });
  }

  deleteAtelier(id: string) {
    if (confirm('Confirmer la suppression ?')) {
      this.service.delete(id).subscribe({
        next: () => this.Ateliers = this.Ateliers.filter(a => a.id !== id),
        error: (err) => console.error('Erreur suppression :', err)
      });
    }
  }

  getEmoji(statut: boolean): string {
    return statut ? '🌻' : '🍂';
  }
}