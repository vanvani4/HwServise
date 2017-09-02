import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ProductService } from '../product.service';

@Component( {
    selector: 'about-app',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    providers: [ProductService]
})
export class AboutComponent implements OnDestroy {

    aboutTitle = 'About Product';
    private prod: string;
    private aboutProduct: string;
    private productName: string;
    private querySubscription: Subscription;
    

    constructor (private product: ProductService, private route: ActivatedRoute) { 
        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                this.aboutProduct = queryParam['aboutProduct'];
                this.productName = queryParam['productName'];
            }
        );       
    }

    ngOnDestroy() {
        this.querySubscription.unsubscribe();
    }
}