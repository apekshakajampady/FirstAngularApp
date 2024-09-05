import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { error } from 'console';
import { ProductsService } from 'src/service/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private _product:ProductsService) { }
  productForm!: FormGroup;
  ngOnInit(): void {
    this.productForm=new FormGroup({
      'productName': new FormControl(""),
      'productPrice': new FormControl("")
    })
  }  
  myProducts:{productName:string; productPrice:string} []=[];
  onPushData(){   
    const productName = this.productForm.get('productName')?.value;
    const productPrice = this.productForm.get('productPrice')?.value;
    if(productName && productPrice){
    this.myProducts.push({
      productName:productName,
      productPrice:productPrice
    })
  }
  console.log(productName,productPrice);  
  console.log("Data Submitted",this.myProducts);
  this._product.saveProduct(this.myProducts)
  .subscribe(sub=>{
    console.log(sub);    
  },
  error =>{console.log(error);
  }
)
  }
}


