import { Text } from "@chakra-ui/react";

const formatTime = (time) => {
    const format = (value) => (value < 10 ? `0${value}`: value)
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    return `${format(minutes)}:${format(seconds)}`
}

export default function Time({ currentTime }) {

    return (
        <Text 
        fontWeight={"bold"}
        fontSize={{ base: "5xl", md:"7xl", lg:"9xl" }}
        color={"white"}
        letterSpacing={"wider"}
        fontFamily={"montserrat"}
        >
            {formatTime(currentTime)}
        </Text>
    )

}