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
        id: '0X000000000000000000000000000004329904209',
        creator: '0x411aAFb355F3911f1d45bad3029ac3f6ff50F775',
        owner: '0xfd9730a30DaE1DEbf5e5fAe8569190dEbEC1745C'
      },
      {
        id: '0X00000000000000000000000000005438237777',
        creator: '0x48Dbf7A136Bd52fC193f50B4850eA3905a7c9619',
        owner: '0xFDFF8e5A5F359fafae197D227de365aFbc74c12a'
      },
      {
        id: '0X0000000000000000000000000000000000000000',
        creator: '0x2C9860ec8d7bb707845167A122Ac1104Eb30ba36',
        owner: '0x1E2Aa08D99F2fff6ef6D48C9A4d83B2D32eD41ed'
      },
      {
        id: '0X0000000000000000000000000000000000000000',
        creator: '0x2d029C9d4b6f4246919657e2dCE4236118F30B12',
        owner: '0x48Dbf7A136Bd52fC193f50B4850eA3905a7c9619'
      },
      {
        id: '0X0000000000000000000000000000000000000000',
        creator: '0x854104F632f8170569Ba4Fc7C8df41DC94b8976f',
        owner: '0x7EC3d7dC2529609007d3B3Ed71Ef1a1d4B9cA6aB'
      },
      {
        id: '0X0000000000000000000000000000000000000000',
        creator: '0x544DEf066e08eF64047B52A7F49fc23862C3324c',
        owner: '0x9027f9440Bf644CDA9C12E3D28D1B53Da3288556'
      },
      {
        id: '0X0000000000000000000000000000000000000000',
        creator: '0xB2Ec3FC4243253aDf18Bf4a2CA91a93e47394458',
        owner: '0x8268FAA3c662cd6f43b9698261A88E1E354f3034'
      }
    ]
  }
}