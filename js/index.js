(function () {
    const plantsOffers = document.querySelector(".plants-offers");
    function changeFlowers(flowersType = "changeInd") {
        plantsOffers.innerHTML = "";
        if (flowersType === "changeInd") {
          plantsOffers.innerHTML += `
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
              </div>`;
        }
        if (flowersType === "changeOut") { 
            plantsOffers.innerHTML += `
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
              </div>`;
        }
      }
      
      const btnInd = document.querySelector(".ind");
      btnInd.addEventListener("click", changeFlowersInd);
      
      function changeFlowersInd() {
        changeFlowers("changeInd");
      }
      
      const btnOut = document.querySelector(".out");
      btnOut.addEventListener("click", changeFlowersOut);
      
      function changeFlowersOut() {
        changeFlowers("changeOut");
      }

});

