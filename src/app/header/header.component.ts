import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {


  redirectFunc(){
    const redirectButton = document.getElementById('redirectButton');

    if (redirectButton) {
        redirectButton.addEventListener('click', () => {
            window.location.href = 'https://github.com/chiaraferrara'; 
        });
    }
}

@Input() toggle !: boolean;


  }


