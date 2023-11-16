import React from 'react';
// import './Header.css'
import { Box, Link, Heading, textDecoration , Container } from "@chakra-ui/react";
// import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faArrowUp91, faArrowDown91 } from '@fortawesome/free-solid-svg-icons'; 

const Header=()=>{

    return(				
        <Container as='header' h={{base:'10vh',md:'14vh'}} maxW="100vw" display="flex" flexDirection="row" 
            justifyContent={"space-around"} bg={'rgb(134, 141, 127)'}
            alignItems={'center'}>
                <Box display="flex"  flexDirection="row" alignItems={'center'} justifyContent={"space-around"} 
                ><Heading as='h1' fontFamily={'Rockwell'} fontSize={{base:'16',sm:'20',md:'36'}} textColor={'white'}><Link  _hover={{color:'rgba(253, 240, 123, 0.986)', textDecoration:'none'}}><FontAwesomeIcon icon={faArrowUp91} /><FontAwesomeIcon icon={faArrowDown91} /> Contador Responsive  </Link></Heading></Box>
                <Box as='nav' display="flex" flexDirection="column" alignItems={'start'} columnGap={{base:'0.5' ,sm:'1'}} textColor={'white'}>
                    <Link py='0.8' fontFamily={'Rockwell'} fontSize={{base:'10',sm:'12',md:'18'}} _hover={{color:'blue', textDecoration:'none'}}><FontAwesomeIcon icon={faThumbsUp} /> Me gusta! </Link></Box> 
        </Container>
    );   

}

export {Header};