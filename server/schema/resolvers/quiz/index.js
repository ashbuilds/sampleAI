import axios from 'axios';
import dimension from './dimension';

// As we know, we have static data, we dont need this function to run in every user call.
// using output in client Quiz component
let pairs = [];
// eslint-disable-next-line no-unused-vars
function generatePair(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i; j < numbers.length - 1; j++) {
      pairs.push([numbers[i], [numbers[j + 1]]]);
    }
  }
}

// generatePair(Object.keys(indexWithName))
// Output is pre-generated
// Using values in client Quiz component
pairs = [
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [2, 3],
  [2, 4],
  [2, 5],
  [2, 6],
  [3, 4],
  [3, 5],
  [3, 6],
  [4, 5],
  [4, 6],
  [5, 6],
];

function randomExcluded(min, max, excluded) {
  let n = Math.floor((Math.random() * (max - min)) + min);
  if (excluded && n >= excluded) n = n + 1;
  return n;
}

const mutations = {
  getDimension(obj, { dimensionId }) {
    return dimension.get(dimensionId);
  },
  getAnswers(obj, { dimensionId1, dimensionId2 }) {
    return axios.all([dimension.get(dimensionId1),
      dimension.get(dimensionId2)]).then(res => res.reduce((newItem, item) => {
        const randomAnswer1 = randomExcluded(0, item.answers.length);
        const randomAnswer2 = randomExcluded(0, item.answers.length, randomAnswer1);
        newItem.push({
          id: item.id,
          name: item.name,
          answers: [
            {
              index: randomAnswer1,
              answer: item.answers[randomAnswer1],
            },
            {
              index: randomAnswer2,
              answer: item.answers[randomAnswer2],
            }],
        });
        return newItem;
      }, []));
  },
};

const resolvers = {

};

export default { resolvers, mutations };
