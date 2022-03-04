import { Heading } from '@chakra-ui/react';
import { createClient } from 'urql';
import { useEffect } from 'react';

const query = `
  query {
    tokens {
      id
      tokenID
      contentURI
      metadataURI
    }
  }
`
const API_KEY = `https://gateway.thegraph.com/api/${process.env.NEXT_PUBLIC_RADICLE_API_KEY}/subgraphs/id/8rp4W6dGKdfYTf3So7xFpdd58gCaNbKwmm6Sketd4XvX`;

const client = createClient({
  url: API_KEY
})
export default function TrackerPage() {
  useEffect(() => {
    fetchData();
  }, [])
  async function fetchData() {
    const response = await client.query(query).toPromise();
    // Handle data returned from query
    console.log(response);
  }
  return (
    <Heading size='lg' p={2} color='teal.100'>
      Drip Tracker
    </Heading>
  )
}