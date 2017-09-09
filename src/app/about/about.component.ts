import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ProductService } from '../product.service';

@Component( {
    selector: 'about-app',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    providers: [ProductService]
})
export class AboutComponent {

    aboutTitle = 'About Product';
    private id: number;
    private activeItem: any;
    

    constructor (private product: ProductService, private route: ActivatedRoute) { 
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.activeItem = this.product.getProductList()[this.id];
        });
    }

    changeStyle(activeItem) {
        this.product.change(activeItem);
    }
}