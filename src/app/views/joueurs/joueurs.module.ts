import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JoueurListeComponent} from './joueur-liste/joueur-liste.component';
import {JoueursRoutingModule} from './joueurs-routing.module';
import {TableModule} from 'primeng/table';
import {MaterialModule} from '../../app-material.module';
import {JoueurEditComponent} from './joueur-edit/joueur-edit.component';
import {PanelModule} from 'primeng/panel';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';
import {ShareModule} from '../../share/share.module';
import {BasketModule} from '../../share/components/basket/basket.module';


@NgModule({
  declarations: [JoueurListeComponent, JoueurEditComponent],
    imports: [
        CommonModule,
        JoueursRoutingModule,
        ShareModule,
        TableModule,
        MaterialModule,
        PanelModule,
        FormsModule,
        ReactiveFormsModule,
        TabViewModule,
        AccordionModule,
        BasketModule,
    ]
})
export class JoueursModule { }
