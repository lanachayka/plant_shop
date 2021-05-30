(function () {
    const indoorHTML = `
    <div class="plants-offer-box">
        <div class="plants-offer-ornamental"></div>
        <h3 class="plants-offer-title">Ornamental Plants</h3>
        <p class="plants-offer-text">Such plants will fit on any windowsill, decorate your home or work table. Chlorophytum, money plants, aglaonema are not demanding in care but very beautiful.</p>
    </div>
    <div class="plants-offer-box">
        <div class="plants-offer-trees"></div>
        <h3 class="plants-offer-title">Indoor Trees</h3>
        <p class="plants-offer-text">It's a beautiful and original option for a large room. A small indoor tree will add some zest to the office or a large living room. Large dracaena, ficus, alocasia will be a great option for your space.</p>
     </div>
    <div class="plants-offer-box">
        <div class="plants-offer-florarium"></div>
        <h3 class="plants-offer-title">Plants in Florarium</h3>
        <p class="plants-offer-text">These are neatly planted compositions of succulents, grassroots, decorative ferns. Plants are selected so that they are in perfect harmony. Order your unique set of plants!</p>
    </div>
    <div class="plants-offer-box">
        <div class="plants-offer-big-ornamental"></div>
        <h3 class="plants-offer-title">Big Ornamental Plants</h3>
        <p class="plants-offer-text">Charming pachypodium, yucca, monstera will become a stunning decoration of your room or office. These plants will make a great impression on your guests.</p>
    </div>`
    const outdoorHTML = `
    <div class="plants-offer-box">
        <div class="plants-offer-outdoor-flowers"></div>
        <h3 class="plants-offer-title">Outdoor Flowers</h3>
        <p class="plants-offer-text">Flowers form the basis of the exterior and are the first to catch the eye. Charming anemones, freesia, lilies will provide brightness and a pleasant aroma. Choose your outdoor flower!</p>
    </div>
    <div class="plants-offer-box">
        <div class="plants-offer-succulents"></div>
            <h3 class="plants-offer-title">Succulents</h3>
        <p class="plants-offer-text">Succulents do not require constant care, perfectly take root in any yard, look nice, and stylish. We will help you to create the optimal composition of succulents in your garden.</p>
    </div>
    <div class="plants-offer-box">
        <div class="plants-offer-moss"></div>
        <h3 class="plants-offer-title">Decorative Moss</h3>
        <p class="plants-offer-text">Decorative moss and lichen will make the garden truly special. Thanks to their density, coloring, and appearance, you can create a unique picture on the site.</p>
    </div>
    <div class="plants-offer-box">
        <div class="plants-offer-conifers"></div>
        <h3 class="plants-offer-title">Decorative Conifers</h3>
        <p class="plants-offer-text">The real decoration of any yard is decorative coniferous trees. Thuja, mountain pines, cedar pines will charm anyone! These are unpretentious, but very beautiful trees.</p>
    </div>`
    const evergreensHTML = `
    <div class="pick-of-the-month-box">
    <a href="floral-moss.html"><img src="img/plants_of_the_month1.png" alt="Floral Moss"></a>
    <p class="pick-of-the-month-name">Floral Moss</p>
    <p class="pick-of-the-month-price">$33,00</p>
    <nav class="green-nav">
        <a data-id="1" class="openCartLink" href="#cartModal">ORDER NOW</a>
    </nav>
</div>
<div class="pick-of-the-month-box">
    <a href="areca-palm.html"><img src="img/plants_of_the_month2.png" alt="Areca Palm"></a> 
    <p class="pick-of-the-month-name">Areca Palm</p>
    <p class="pick-of-the-month-price">$22,00</p>
    <nav class="green-nav">
        <a data-id="2" class="openCartLink" href="#cartModal">ORDER NOW</a>
    </nav>
</div>
<div class="pick-of-the-month-box">
    <a href="monstera-obliqua.html"><img src="img/plants_of_the_month3.jfif" alt="Monstera Obliqua"></a>
    <p class="pick-of-the-month-name">Monstera Obliqua</p>
    <p class="pick-of-the-month-price">$45,00</p>
    <nav class="green-nav">
        <a data-id="3" class="openCartLink" href="#cartModal">ORDER NOW</a>
    </nav>
</div>
<div class="pick-of-the-month-box">
    <a href="sansevieria-trifasciata.html"><img src="img/plants_of_the_month4.jfif" alt="Sansevieria Trifasciata"></a>
    <p class="pick-of-the-month-name">Sansevieria Trifasciata</p>
    <p class="pick-of-the-month-price">$36,00</p>
    <nav class="green-nav">
        <a data-id="4" class="openCartLink" href="#cartModal">ORDER NOW</a>
    </nav>
</div>`
    const succulentsHTML = `
    <div class="pick-of-the-month-box">
    <a href="graptosedum-darley.html"><img src="img/graptosedum.png" alt="Graptosedum Darley"></a>
    <p class="pick-of-the-month-name">Graptosedum Darley</p>
    <p class="pick-of-the-month-price">$32,00</p>
    <nav class="green-nav">
        <a href="#cart">ORDER NOW</a>
    </nav>
</div>
<div class="pick-of-the-month-box">
    <a href="haworthia-venosa.html"><img src="img/venosa.png" alt="Haworthia Venosa"></a> 
    <p class="pick-of-the-month-name">Haworthia Venosa</p>
    <p class="pick-of-the-month-price">$48,00</p>
    <nav class="green-nav">
        <a href="#cart">ORDER NOW</a>
    </nav>
</div>
<div class="pick-of-the-month-box">
    <a href="silver-torch.html"><img src="img/torch.png" alt="Silver Torch"></a>
    <p class="pick-of-the-month-name">Silver Torch</p>
    <p class="pick-of-the-month-price">$24,00</p>
    <nav class="green-nav">
        <a href="#cart">ORDER NOW</a>
    </nav>
</div>
<div class="pick-of-the-month-box">
    <a href="notocactus-roseoluteus.html"><img src="img/roseoluteus.png" alt="Notocactus Roseoluteus"></a>
    <p class="pick-of-the-month-name">Notocactus Roseoluteus</p>
    <p class="pick-of-the-month-price">$33,00</p>
    <nav class="green-nav">
        <a href="#cart">ORDER NOW</a>
    </nav>
</div>`
    const plantsOffers = document.querySelector(".plants-offers");
    const pickOfTheMonth = document.querySelector(".pick-of-the-month-boxes");
    function changeFlowers(flowersType) {
        
        if (flowersType === "changeInd") {
            plantsOffers.innerHTML = "";
            plantsOffers.innerHTML += indoorHTML;
        }

        if (flowersType === "changeOut") {
            plantsOffers.innerHTML = "";
            plantsOffers.innerHTML += outdoorHTML;
        }
        
        if (flowersType === "changeEver") {
            pickOfTheMonth.innerHTML = "";
            pickOfTheMonth.innerHTML += evergreensHTML;
        }
        if (flowersType === "changeSucc") {
            pickOfTheMonth.innerHTML = "";
            pickOfTheMonth.innerHTML += succulentsHTML;
        }
      }
      
      const btnInd = document.querySelector(".ind");
      btnInd.addEventListener("click", changeInd);
      
      function changeInd() {
        changeFlowers("changeInd");
      }
      
      const btnOut = document.querySelector(".out");
      btnOut.addEventListener("click", changeOut);
      
      function changeOut() {
        changeFlowers("changeOut");
      }

      const btnEver = document.querySelector(".ever");
      btnEver.addEventListener("click", changeEver);
      
      function changeEver() {
        changeFlowers("changeEver");
      }
      
      const btnSucc = document.querySelector(".succ");
      btnSucc.addEventListener("click", changeSucc);
      
      function changeSucc() {
        changeFlowers("changeSucc");
      }

}) ();

