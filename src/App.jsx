import { Heading, Flex, Button } from '@chakra-ui/react'

function App() {

  return (
    <Flex
      minH="100vh"
      justifyContent="Center"
      alignItems="Center"
      flexDirection="column"
      gap={6}
      bgGradient='linear(to-tl, red.800, red.900)'
    >
      <Heading>
        pomodoro
      </Heading>
    </Flex>
  )
}

export default App
