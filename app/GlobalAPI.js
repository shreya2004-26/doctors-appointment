//it contains all API
import { gql, request } from 'graphql-request'
const MASTER_URL = process.env.NEXT_PUBLIC_MASTER_BACKEND_URL
// console.log(MASTER_URL)
export const getAllCategories = async () => {
  const query = gql`
    query MyQuery {
  categories {
    id
    slug
    title
    icon {
      url
    }
  }
}`
  const res = await request(MASTER_URL, query)
  // console.log(res);
  return res;

}

export const getAllDoctors = async () => {
  const query = gql`
  query MyQuery {
  doctors {
    about
    address
    closingTime
    name
    openingTime
    image {
      url
    }
    categories {
      title
    }
  }
}
  `
  const res = await request(MASTER_URL, query)
  // console.log("42 ", res);
  return res;
}
