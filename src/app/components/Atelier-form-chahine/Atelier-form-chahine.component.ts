import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtelierService } from '../../services/Atelier.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Atelier-form',
  templateUrl: './Atelier-form-chahine.component.html',  // ✅ chemin corrigé
  styleUrl: './Atelier-form-chahine.component.css'       // ✅ chemin corrigé
})
export class AtelierFormComponent implements OnInit {
  AtelierForm!: FormGroup;
  id!: string;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: AtelierService,
    public router: Router,           // ✅ public
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.AtelierForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      mailFormateur: ['', [Validators.required, Validators.email]],
      nbrParticipant: [0, [Validators.required, Validators.min(1)]],
      Statut: [false]
    });

    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      this.isEditMode = true;
      this.service.getById(this.id).subscribe({
        next: (data) => {
          this.AtelierForm.patchValue({
            nom: data.nom,
            mailFormateur: data.mailFormateur,
            nbrParticipant: data.nbrParticipant,
            Statut: data.Statut
          });
        },
        error: (err) => console.error('Erreur chargement atelier :', err)
      });
    }
  }

  onSubmit(): void {
    if (this.AtelierForm.invalid) {
      this.AtelierForm.markAllAsTouched();
      return;
    }
    const formValue = this.AtelierForm.value;
    if (this.isEditMode) {
      this.service.update(this.id, formValue).subscribe({
        next: () => this.router.navigate(['/list']),
        error: (err) => console.error('Erreur mise à jour :', err)
      });
    } else {
      this.service.add(formValue).subscribe({
        next: () => this.router.navigate(['/list']),
        error: (err) => console.error('Erreur ajout :', err)
      });
    }
  }

  get nom() { return this.AtelierForm.get('nom'); }
  get mailFormateur() { return this.AtelierForm.get('mailFormateur'); }
  get nbrParticipant() { return this.AtelierForm.get('nbrParticipant'); }
}