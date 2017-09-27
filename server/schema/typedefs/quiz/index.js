// Sample home schema
const Dimension = `
type Dimension {
  id: ID!
  name: String!
  answers: [String!]
}`;
// const Quiz = `
// type Quiz {
//   dimensions: [Dimension]
// }
// `;

export default [Dimension];
