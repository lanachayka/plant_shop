class Cart {
    constructor () {
        this.productService = new ProductService();
        this.cartContainer = document.querySelector('#cartModal');
        this.cart = JSON.parse(localStorage['cart'] || '{}');
        this.addEventListeners();
        this.updateBadge();
    }
    addEventListeners() {
        document
        .querySelector('.openCartLink')
        .addEventListener('click', () => this.renderCart());
        this.cartContainer
        .querySelector('.order')
        .addEventListener('click', ev => this.order(ev));
    }
    saveCart() {
        localStorage['cart'] = JSON.stringify(this.cart);
    }
    async renderCart() {
        let total = 0;
        let cartDomSting = `
        `
    }
}