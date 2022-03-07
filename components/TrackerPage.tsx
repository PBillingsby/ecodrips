import { Heading, Box } from '@chakra-ui/react';
import { createClient } from 'urql';
import { useEffect, useState } from 'react';
import TrackerTable from './TrackerTable'
const query = `
  {
    orgs(first: 5) {
      id
      owner
      safe {
        id
      }
      creator
    }
  }
`
const API_KEY = `https://gateway.thegraph.com/api/${process.env.NEXT_PUBLIC_RADICLE_API_KEY}/subgraphs/id/8rp4W6dGKdfYTf3So7xFpdd58gCaNbKwmm6Sketd4XvX`;

const client = createClient({
  url: API_KEY
})

export default function TrackerPage() {
  const [dripData, setDripData] = useState({})

  useEffect(() => {
    fetchData();
  }, [])
  async function fetchData() {
    // const response = await client.query(query).toPromise();
    // if (!response.error) {
      // This line below is using hard-coded data for testing
    setDripData(dripsData)
    // }
  }

  return (
    <>
      <Heading size='lg' p={2} color='teal.100'>
        Drip Tracker
      </Heading>
      <Box p={0}>
      {Object.keys(dripsData).length && <TrackerTable dripData={dripsData} />}
      </Box>
    </>
  )
}


export const dripsData = {
  data: {
    orgs: [
      {
        id: '0X0000000000000000000000000000000000000000',
        creator: '0X0000000000000000000000000000000000000000',
        owner: '0X0000000000000000000000000000000000000000'
      },
      {
        id: '0X0000000000000000000000000000000000000000',
        creator: '0X0000000000000000000000000000000000000000',
        owner: '0X0000000000000000000000000000000000000000'
      },
      {
        id: '0X0000000000000000000000000000000000000000',
        creator: '0X0000000000000000000000000000000000000000',
        owner: '0X0000000000000000000000000000000000000000'
      },
      {
        id: '0X0000000000000000000000000000000000000000',
        creator: '0X0000000000000000000000000000000000000000',
        owner: '0X0000000000000000000000000000000000000000'
      },
      {
        id: '0X0000000000000000000000000000000000000000',
        creator: '0X0000000000000000000000000000000000000000',
        owner: '0X0000000000000000000000000000000000000000'
      },
      {
        id: '0X0000000000000000000000000000000000000000',
        creator: '0X00000000000000000000000000000000000000001',
        owner: '0X0000000000000000000000000000000000000000'
      },
      {
        id: '0X0000000000000000000000000000000000000000',
        creator: '0X0000000000000000000000000000000000000000',
        owner: '0X0000000000000000000000000000000000000000'
      },
      {
        id: '0X0000000000000000000000000000000000000000',
        creator: '0X0000000000000000000000000000000000000000',
        owner: '0X0000000000000000000000000000000000000000'
      },
      {
        id: '0X0000000000000000000000000000000000000000',
        creator: '0X0000000000000000000000000000000000000000',
        owner: '0X0000000000000000000000000000000000000000'
      },
      {
        id: '0X0000000000000000000000000000000000000000',
        creator: '0X0000000000000000000000000000000000000000',
        owner: '0X0000000000000000000000000000000000000000'
      },
      {
        id: '0X0000000000000000000000000000000000000000',
        creator: '0X0000000000000000000000000000000000000000',
        owner: '0X0000000000000000000000000000000000000000'
      },
      {
        id: '0X0000000000000000000000000000000000000000',
        creator: '0X0000000000000000000000000000000000000000',
        owner: '0X0000000000000000000000000000000000000000'
      }
    ]
  }
}