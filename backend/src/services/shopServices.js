const {shop: Shop, category: Category, product: Product} = require("../models");

class ShopServices {
    async getAllShops() {
        const shops = await Shop.findAll({
            include: {
                model: Category,
            },
        });
        
        return await this.getFormatShopList(shops);
    }
    
    async getShopCategories(shop) {
        const categories = await Shop.findOne({
            where: { slug: shop },
            include: {
                model: Category,
                include: Product,
            },
        });
        
        return await this.getSortedCategories(categories);
    }
    
    getSortedCategories(shop) {
        return shop.categories.sort((a, b) => a.id - b.id)
    }
    
    getFormatShopList(shopList) {
        return shopList.reduce((acc, shop) => {
            const {
                id,
                slug,
                name,
                address,
                photos,
                mainColor,
                secondColor,
                transparency,
                bc,
                weekdaysEnd,
                weekdaysStart,
                weekendsEnd,
                weekendsStart,
                categories,
            } = shop;

            acc.push({
                id,
                name,
                slug,
                address,
                photos,
                schedule: {
                    weekdays: {
                        start: weekdaysStart,
                        end: weekdaysEnd,
                    },
                    weekends: {
                        start: weekendsStart,
                        end: weekendsEnd,
                    },
                },
                style: {
                    mainColor,
                    secondColor,
                    transparency,
                    bc,
                },
                categories,
            });

            return acc;
        }, []);
    }
}

module.exports = new ShopServices();
