class ProductList {
    constructor(cart) {
      this.cart = cart;
      this.productService = new ProductsService();
      this.addEventListeners();    
    }
    async addEventListeners() {
      document
        .querySelectorAll('.buy-link')
        .forEach(link =>
          link.addEventListener('click', event =>
            this.handleProductBuyClick(event)
          )
        );
    }
    handleProductBuyClick(event) {
      const link = event.target;
      const id = link.dataset.id;
      this.cart.addProduct(id);
    }
  }

    
 