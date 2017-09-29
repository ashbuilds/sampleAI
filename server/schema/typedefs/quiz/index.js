// Sample home schema


const Dimension = `
type Dimension {
  id: ID!
  name: String!
  answers: [String!]
}`;

const Answer = `
type Answer {
index: ID!
answer: String!
}`;

const DimensionAnswer = `
type DimensionAnswer {
 id:ID
 name: String!
 answers:[Answer]
}`;

export default [Dimension, Answer, DimensionAnswer];
