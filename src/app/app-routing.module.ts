import { CadastroComponent } from './cadastro/cadastro.component';
import { ListarComponent } from './listar/listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'listar', component: ListarComponent },
  { path: '', component: CadastroComponent },
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
