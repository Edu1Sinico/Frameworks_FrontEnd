import { Component } from '@angular/core';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  usuario: Usuario = {
    nome: '',

    email: ''
  };

  onSubmit() {
    // Aqui, você pode armazenar os dados em um arquivo JSON
    // Por exemplo, usando o serviço HttpClient ou localStorage
    console.log('Dados do usuário:',
      this.usuario);
  }
}
