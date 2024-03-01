import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  formData = {
    fullname: '',
    email: '',
    password: '',
    phoneno: '',
    birthdate: '',
    address: ''
  };
 
products:any = ['Fruits','Vegatables','Pineapple','Banana','Tomato','Potato','Green Chillies','Strawberry','Cucumber']
isvalid = true;
onchange(val:any){
  this.isvalid = val;
}
constructor(private router: Router) {}
submit(){
  this.router.navigate(['/home']); 
}
submitForm(){
  
}
}
