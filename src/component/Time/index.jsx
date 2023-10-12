import { Text } from "@chakra-ui/react";
import formatTime from "../utils";


// eslint-disable-next-line react/prop-types
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