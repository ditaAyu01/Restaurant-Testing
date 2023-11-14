/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked Restaurants', ({ I }) => {
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  // pause();

  I.seeElement('.movie__title a');
  const firstRestaurant = locate('.movie__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const LikedRestaurantName = await I.grabTextFrom('.restaurant-item');

  assert.strictEqual(firstRestaurantName, LikedRestaurantName);
});
