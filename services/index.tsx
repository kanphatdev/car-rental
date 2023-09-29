import request,{gql} from "graphql-request"


export const getCarList = async () => {
    const query = gql`query CarLists {
        carLists {
          carAvg
          createdAt
          id
          name
          price
          publishedAt
          seat
          updatedAt
          image {
            url
          }
          carType
          carBrand
        }
      }`
    const result = await request('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clmxgcg821irm01up4fo2e0kj/master',query);
    return result;
}