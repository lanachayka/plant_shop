class ProductList {
    constructor(cart) {
      this.cart = cart;
      this.productService = new ProductsService();
      this.category = 'evergreens';
      this.productService
        .getProducts()
        .then(() => this.renderProducts())
        .then(() => this.addEventListeners());    
    }
    async renderProducts() {
      document.querySelector('.pick-of-the-month-boxes').innerHTML = '';
      let productListDomString = '';
      if (this.category === 'evergreens') {
        productListDomString += `<div class="pick-of-the-month-box">
        <a href="floral-moss.html"><img src="img/plants_of_the_month1.png" alt="Floral Moss"></a>
        <p class="pick-of-the-month-name">Floral Moss</p>
        <p class="pick-of-the-month-price">$33,00</p>
        <nav class="green-nav">
            <a data-id="1" class="buy-link">ORDER NOW</a>
        </nav>
      </div>
      <div class="pick-of-the-month-box">
        <a href="areca-palm.html"><img src="img/plants_of_the_month2.png" alt="Areca Palm"></a> 
        <p class="pick-of-the-month-name">Areca Palm</p>
        <p class="pick-of-the-month-price">$22,00</p>
        <nav class="green-nav">
            <a data-id="2" class="buy-link">ORDER NOW</a>
        </nav>
      </div>
      <div class="pick-of-the-month-box">
        <a href="monstera-obliqua.html"><img src="img/plants_of_the_month3.jfif" alt="Monstera Obliqua"></a>
        <p class="pick-of-the-month-name">Monstera Obliqua</p>
        <p class="pick-of-the-month-price">$45,00</p>
        <nav class="green-nav">
            <a data-id="3" class="buy-link">ORDER NOW</a>
        </nav>
      </div>
      <div class="pick-of-the-month-box">
        <a href="sansevieria-trifasciata.html"><img src="img/plants_of_the_month4.jfif" alt="Sansevieria Trifasciata"></a>
        <p class="pick-of-the-month-name">Sansevieria Trifasciata</p>
        <p class="pick-of-the-month-price">$36,00</p>
        <nav class="green-nav">
            <a data-id="4" class="buy-link">ORDER NOW</a>
        </nav>
      </div>`
      } else if (this.category === 'succulents') {
        productListDomString += `
        <div class="pick-of-the-month-box">
        <a href="graptosedum-darley.html"><img src="img/graptosedum.png" alt="Graptosedum Darley"></a>
        <p class="pick-of-the-month-name">Graptosedum Darley</p>
        <p class="pick-of-the-month-price">$32,00</p>
        <nav class="green-nav">
            <a data-id="5" class="buy-link">ORDER NOW</a>
        </nav>
      </div>
      <div class="pick-of-the-month-box">
        <a href="haworthia-venosa.html"><img src="img/venosa.png" alt="Haworthia Venosa"></a> 
        <p class="pick-of-the-month-name">Haworthia Venosa</p>
        <p class="pick-of-the-month-price">$48,00</p>
        <nav class="green-nav">
            <a data-id="6" class="buy-link">ORDER NOW</a>
        </nav>
      </div>
      <div class="pick-of-the-month-box">
        <a href="silver-torch.html"><img src="img/torch.png" alt="Silver Torch"></a>
        <p class="pick-of-the-month-name">Silver Torch</p>
        <p class="pick-of-the-month-price">$24,00</p>
        <nav class="green-nav">
        <a data-id="7" class="buy-link">ORDER NOW</a>
      </nav>
      </div>
      <div class="pick-of-the-month-box">
        <a href="notocactus-roseoluteus.html"><img src="img/roseoluteus.png" alt="Notocactus Roseoluteus"></a>
        <p class="pick-of-the-month-name">Notocactus Roseoluteus</p>
        <p class="pick-of-the-month-price">$33,00</p>
        <nav class="green-nav">
            <a data-id="8" class="buy-link">ORDER NOW</a>
        </nav>
      </div>`
      } document.querySelector('.pick-of-the-month-boxes').innerHTML += productListDomString;
    }
    async addEventListeners() {
      document
        .querySelectorAll('.buy-link')
        .forEach(link =>
          link.addEventListener('click', event =>
            this.handleProductBuyClick(event)
          )
        );
      document.querySelector('.ever').addEventListener('click', async () => {
          this.category = 'evergreens';
          await this.renderProducts();
          this.addEventListeners();
      });
      document.querySelector('.succ').addEventListener('click', async () => {
          this.category = 'succulents';
          await this.renderProducts();
          this.addEventListeners();
      });
    }
    handleProductBuyClick(event) {
      const link = event.target;
      const id = link.dataset.id;
      this.cart.addProduct(id);
    }
  }

    
 