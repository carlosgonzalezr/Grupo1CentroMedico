import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import {PagoCrudService} from './../services/pago-crud.service'
import { RouterModule } from '@angular/router';
 

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  pagoForm:FormGroup;

  constructor(
    
    private router: Router,
    public formBuilder: FormBuilder,
    private zone:NgZone,
    private PagoCrudService: PagoCrudService) { 
    this.pagoForm = this.formBuilder.group({
        tipo:[''],
        agenda:[''],
        fecha:[''],
        monto:['']
        
      })
  }

  ngOnInit() {}

  onSubmit() {
    if (!this.pagoForm.valid) {
      return false;
    } else {
      this.PagoCrudService.createPago(this.pagoForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.pagoForm.reset();
            this.router.navigate(['/list']);
          })
        });
    }
  }

}




