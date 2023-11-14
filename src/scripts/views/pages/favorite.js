import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div class="content">
          <h2 class="content__heading">Your Like Restaurant</h2>
          <div id="restaurants" class="restaurants">
   
          </div>
        </div>
      `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      console.log(restaurant);
    });
  },
};

export default Favorite;
