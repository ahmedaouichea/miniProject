import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public signInForm !: FormGroup;
  constructor(private productService : ProductService,private formBuilder : FormBuilder, private http:HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      username:[''],
      password:['']
    })
  }

  login(){
      const username = this.signInForm.value.username;
      const pass =this.signInForm.value.password;

        this.productService.loginFunc(username,pass).subscribe(res =>{
          const user = res.find((a:any)=> {
            return a.username === this.signInForm.value.username && a.password === this.signInForm.value.password ;
        });

        if(user){
          alert("login success");
          localStorage.setItem("isLogged","true");
          this.productService.setState(true);
          this.signInForm.reset();
          this.router.navigate(['products']);
        }
        else {
          alert("user not found");
        }

      },err=>{
        alert("something went wrong "+err)
      })

  }


  }

