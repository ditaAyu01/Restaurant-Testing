/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButton'),
    restaurant,
  });
  global.structuredClone = jest.fn((val) => JSON.parse(JSON.stringify(val)));
};

export { createLikeButtonPresenterWithRestaurant };
