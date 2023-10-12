import { Button, IconButton } from "@chakra-ui/react";
import { RxPause, RxPlay, RxStop } from "react-icons/rx"

// eslint-disable-next-line react/prop-types
function PlayButton({ isStarted, currentTime, handleClick }) {

    return (
        <IconButton
            title="Play o Paausa"
            colorScheme="blackAlpha"
            icon={!isStarted ? <RxPlay /> : currentTime === 0 ? <RxStop /> : <RxPause />
            }
            onClick={handleClick}
        />
    )

}

export default PlayButton
