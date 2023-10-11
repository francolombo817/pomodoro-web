import { Heading, Flex, Button } from '@chakra-ui/react'
import { initialTimer } from './component/InitialTimes'
import { useState } from 'react'
import Time from './component/Time'

function App() {

  const [time, setTime] = useState(0)
  const [timerStart, setTimerStart] = useState(false)

  console.log(time, timerStart);

  return (
    <Flex
      minH="100vh"
      justifyContent="Center"
      alignItems="Center"
      flexDirection="column"
      gap={6}
      bgGradient='linear(to-tl, red.800, red.900)'
    >
      <Heading
        color={"white"}
        fontWeight={"thin"}
        letterSpacing={"1.2px"}
        textTransform={"uppercase"}
      >
        pomodoro
      </Heading>

      <Flex bgGradient={'linear(to-b, red.700, red.900)'}
        p={{ base: 6, md: 9, lg: 12 }}
        rounded={"2xl"}
        alignItems={"center"}
        flexDirection={"column"}
        shadow={'dark-lg'}
      >
        <Flex
          gap={{ base: 2, md: 5 }}
        >
          {initialTimer.map(({ value, display }) => (

            <Button
              key={value}
              colorScheme="blackAlpha"
              textTransform={"uppercase"}
              fontWeight={"light"}
              letterSpacing={"wide"}
              fontSize={{ base: "2xl", md: "medium", lg: "3xl" }}
              size={{ base: "xs", md: "md", lg: "lg" }}
              onClick={() => {
                setTimerStart(false)
                setTime(value)
              }}
            >
              {display}
            </Button>
          ))}
        </Flex>
        <Time currentTime={time}/>

      </Flex>


    </Flex>
  )
}

export default App
