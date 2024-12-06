import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LegoService } from '../../services/lego.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-lego-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './lego-form.component.html',
  styleUrl: './lego-form.component.scss'
})
export class LegoFormComponent {
  private legoService: LegoService;
  private router: Router;
  private snackBar: MatSnackBar;
  legoForm: FormGroup;

  constructor() {
    this.legoService = inject(LegoService);
    this.router = inject(Router);
    this.snackBar = inject(MatSnackBar);

    this.legoForm = new FormGroup({
      title: new FormControl('', Validators.required),
      platform: new FormControl('', Validators.required),
      imageLink: new FormControl('', [Validators.required, ]),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      description: new FormControl('', [Validators.required, ]),
      availableInStock: new FormControl(0, [Validators.required, ]),
    });
  }

  submitForm(){
    if (this.legoForm.invalid) {
      this.snackBar.open("Formulário possui campos inválidos!", "Fechar");
      return;
    }

    console.log("Formulário foi submetido!");
    console.log(this.legoForm.value);
    

    this.legoService.createLego(this.legoForm.value).subscribe({
      next: () => {
        this.snackBar.open("Lego adicionado com sucesso!", "Fechar");
        this.router.navigate(['lego']);
      },
      error: () => {
        this.snackBar.open("Erro interno do servidor. Contate o suporte para mais informações!", "Fechar");
      }
    });
  }
}
