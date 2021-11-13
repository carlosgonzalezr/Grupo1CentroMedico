import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AgendaCrudService } from './../services/agenda-crud.service';

@Component({
  selector: 'app-update-hora',
  templateUrl: './update-hora.page.html',
  styleUrls: ['./update-hora.page.scss'],
})
export class UpdateHoraPage implements OnInit {
  updateAgendaFg: FormGroup;
  id: any;

  constructor(private agendaCrudService: AgendaCrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router) { this.id = this.activatedRoute.snapshot.paramMap.get('id');}

  ngOnInit() {
    this.fetchAgenda(this.id);
    this.updateAgendaFg = this.formBuilder.group({
      paciente: [''],
      medico: [''],
      especialidad: [''],
      fecha: [''],
      hora: [''],
      sucursal: ['']
    })
  }

  fetchAgenda(id) {
    this.agendaCrudService.getAgenda(id).subscribe((data) => {
      this.updateAgendaFg.setValue({
        paciente: data['data']['paciente'],
        medico: data['data']['medico'],
        especialidad: data['data']['especialidad'],
        fecha: data['data']['fecha'],
        hora: data['data']['hora'],
        sucursal: data['data']['sucursal']
      });
    });
  }

  onSubmit() {
    if (!this.updateAgendaFg.valid) {
      return false;
    } else {
      this.agendaCrudService.updateAgenda(this.id, this.updateAgendaFg.value)
        .subscribe(() => {
          this.updateAgendaFg.reset();
          this.router.navigate(['/horas']);
        })
    }
  }

}
