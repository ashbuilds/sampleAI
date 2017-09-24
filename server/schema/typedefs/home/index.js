// Sample home schema
const Text = `
type Text {
  text: String!
  isButton: Boolean
}`;
const Home = `
type Home {
  id:ID!
  title: String!
  quote: [Text]
}
`;

export default [Home, Text];
