class ProductService {
    constructor () {
        if (!ProductService._instance) ProductService._instance = this;
        return ProductService._instance;
    }
    async getProducts() {
        if (!this.products) {
            this.products = await (await fetch('products.json')).json();
        } return this.products;
    } 
    async getProductsById (id) {
        const products = await this.getProducts();
        return products.find(product => product.id === id);
    }
}