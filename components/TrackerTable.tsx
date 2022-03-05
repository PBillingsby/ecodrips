import { Table, Tr, Thead, Td, Th, Tbody, Button, Box, Center } from '@chakra-ui/react';
import { Copy, Coin } from 'tabler-icons-react';
import { DropletHalf } from 'tabler-icons-react';

interface TrackerProps {
  dripData: any
}

export default function TrackerTable(props: TrackerProps) {
  const splitAddress = (address: string) => {
    return (`${address.slice(0, 10)}...${address.slice(address.length - 4)}`)
  }

  return (
    <Box overflow='scroll' w='80vw' m='auto'>
      <Table>
        <Thead color='white'>
          <Tr color='white'>
            <Th>ID</Th>
            <Th>Creator</Th>
            <Th>Owner</Th>
            <Th>CashOut</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.dripData.data.orgs.map((obj: any) => {
            return (
              <Tr color='white' key={obj.id}>
                <Td>{splitAddress(obj.id)}</Td>
                <Td>{splitAddress(obj.creator)}</Td>
                <Td>{splitAddress(obj.owner)}</Td>
                <Td>
                  <Button size='xxs' ml={6}><Coin
                    size={20}
                    strokeWidth={2}
                    color={'black'}
                  /></Button>
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </Box >
  )
}