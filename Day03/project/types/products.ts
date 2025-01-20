import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Product {
    imageUrl: string | StaticImport;
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
    description : string;

}

