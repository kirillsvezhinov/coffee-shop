import { IBasketProduct } from "../../types/basketTypes";
import { ICategoryWithProducts, IProduct } from "../../types/catalogTypes";

interface ISelectAllCategories {
    catalog: {
        categories: ICategoryWithProducts[];
    };
}

interface ISelectActiveCategory {
    catalog: {
        activeCategory: string;
    };
}

interface ISelectActiveShop {
    shops: {
        activeShop: string;
    }
}

interface ISelectProduct {
    product: {
        product: IProduct;
    };
}

interface ISelectActiveProduct {
    product: {
        activeProduct: string;
    };
}

interface ISelectBasketProducts {
    basket: {
        products: IBasketProduct[];
    };
}

interface ISelectBasketShop {
    basket: {
        shop: string;
    }
}

export { 
    ISelectActiveCategory, 
    ISelectActiveProduct, 
    ISelectActiveShop,
    ISelectAllCategories, 
    ISelectBasketProducts,
    ISelectBasketShop,
    ISelectProduct,
};
