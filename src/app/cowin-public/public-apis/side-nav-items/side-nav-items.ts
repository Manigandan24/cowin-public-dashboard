import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { SideNavItem } from "../../../model/nav.item";
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
    selector:'side-menu-list',
    templateUrl:'./side-nav-items.html',
    styleUrls:['./side-nav-items.css'],
    animations: [
        trigger('indicatorRotate', [
          state('collapsed', style({transform: 'rotate(0deg)'})),
          state('expanded', style({transform: 'rotate(180deg)'})),
          transition('expanded <=> collapsed',
            animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
          ),
        ])
      ]
})
export class NavItems{
    expanded: boolean
    @Input() item:SideNavItem;
    @Input() depth: number
    @Input() i :number
    selectedItem:number = null;

    classStyler = {
      active0: false,
      active1: false
    }

    constructor(public router:Router){
        if (this.depth === undefined) {
            this.depth = 0;
          }
    }

    onItemSelected(item: SideNavItem, i: number){

      if (!item.children || !item.children.length){
        this.router.navigate([item.route])
        this.selectedItem = i;
      }
        if(item.children && item.children.length){
            this.expanded=!this.expanded
        }
    }

}