interface ICategory {
    slug: string;
    name: string;
    mainIcon: string;
    secondIcon: string;
}

interface IProduct {
    id: number;
    slug: string;
    name: string;
    price: number;
}

interface ICategoryWithProducts extends ICategory {
    products: IProduct[];
}

export { ICategory, ICategoryWithProducts, IProduct };
