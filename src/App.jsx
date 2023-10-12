import { Heading, Flex, Button, useToast } from '@chakra-ui/react'
import { initialTimer } from './component/InitialTime/index'
import { useState, useEffect } from 'react'
import Time from './component/Time/index'
import PlayButton from './component/Button/PlayButton'
import formatTime from './component/utils'

function App() {

  const [time, setTime] = useState(0)
  const [timerStart, setTimerStart] = useState(false)

  const toast = useToast()

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1)
      } else if (time === 0 && timerStart) {
        toast({
          title: "el temporizador se detubo",
          status: "error",
          position: "top-right"
        })
        clearInterval(interval)
      }
    }, 1000)

    document.title = `${formatTime(time)} - Remaining `

    return () => clearInterval(interval)
  }, [timerStart, time, toast])


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
        <Time currentTime={time} />
        <Flex alignItems={'center'} gap={2}>
          <PlayButton isStarted={timerStart} currentTime={time}

            handleClick={() => {
              !time ? alert("configura el temporizados") : setTimerStart(!timerStart)
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App
