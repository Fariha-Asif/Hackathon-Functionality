import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Product {
    _id : string;
    name : string;
    _type : "products";
    image? : {
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    price : number;
    description? : string;
    slug: {
        _type : 'slug',
        current: string
    };
    new: any;
    sizes: any;
    colors: any;
    discountPercent: any;
    imageUrl: string | StaticImport;
    inventory: number;
}

