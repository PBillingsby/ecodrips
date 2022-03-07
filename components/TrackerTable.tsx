import { Table, Tr, Thead, Td, Th, Tbody, Button, Box } from '@chakra-ui/react';
import { Copy, Coin } from 'tabler-icons-react';

interface TrackerProps {
  dripData: any
}

export default function TrackerTable(props: TrackerProps) {
  const splitAddress = (address: string) => {
    return (`${address.slice(0, 6)}...${address.slice(address.length - 4)}`)
  }

  return (
    <Box overflow='scroll' w={['40vw', '80vw']} m='auto'>
      <Table textAlign='center'>
        <Thead color='white'>
          <Tr color='white'>
            <Th>Creator</Th>
            <Th>Owner</Th>
            <Th>CashOut</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.dripData.data.orgs.map((obj: any) => {
            return (
              <Tr color='white' key={obj.id}>
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