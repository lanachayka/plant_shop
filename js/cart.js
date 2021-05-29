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
        let cartDomSting = `<div class="container">
        <div class="row"> 
        </div>
        </div>
        `;
        for (const id in this.cart) {
            const product = await thss.ProductService.getProductById(id);
            total += product.price * this.cart[id];
            cartDomSting += `<div class="row data-id="${id}"> 
            <img src="${product.img}" alt="${product.name}">
            <div class="cart-product-title">${product.name}<div>
            <div class="cart-product-price">${product.price}<div>
            <div>${this.cart[id]}</div>
            <div class="plus-minus"><button data-id=${id} class="btn btn-sm plus">+</button></div>
            <div class="plus-minus"><button data-id=${id} class="btn btn-sm minus">-</button></div>
            </div>`;
        }
        cartDomSting += `
        <div class="cart-row">
        <div class = "cart-title">TOTAL<div>
        <div class = "cart-title">$${total.toFixed(2)}<div>
        </div>
        `;
        this.cartContainer.querySelector('.cart-product-list-container').innerHTML = cartDomSting;
        this.cartContainer
            .querySelectorAll('.plus')
            .forEach(el =>
                el.addEventListener('click', ev =>
                this.changeQuantity(ev, this.addProduct))
        );
        this.cartContainer
            .querySelectorAll('.minus')
            .forEach(el =>
                el.addEventListener('click', ev =>
                this.changeQuantity(ev, this.deleteProduct))
        );
    }
    changeQuantity(ev, operation) {
        const button = ev.target;
        const id = button.dataset.id;
        operation.call(this.id);
        this.renderCart();
    }
    addProduct(id) {
        this.cart[id] = (this.cart[id] || 0) + 1;
        this.saveCart();
        this.updateBadge();
    }
    deleteProduct(id) {
        if (this.cart[id] > 1) {
            this.cart[id] -= 1;
        } else {
            delete this.cart[id];
        }
        this.saveCart();
        this.updateBadge();
    }
    async updateBadge() {
        const {count, cost} = await this.cartLengthAndCost();
        if (count>0) document.querySelector('.cart-badge').innerHTML=`${count}`;
    }
    async cartLengthAndCost() {
        let count = 0;
        let cost = 0;
        for (const key in this.cart) {
            const product = await this.productService.getProductById(key);
            const quantity = this.cart[key];
            count += quantity;
            cost += quantity.product.price;
        }
        return {
            count, cost
        };
    }
}