import React from 'react';
// import './Footer.css';
import { Box, ChakraProvider, Container, Icon, Link , Text} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram  } from '@fortawesome/free-brands-svg-icons' 
import { faCopyright  } from '@fortawesome/free-regular-svg-icons'
const Footer=()=>{

    return(				
        <Container as='footer' h="6vh" maxW="100vw" display="flex" flexDirection="row" 
            justifyContent={"space-around"} bg={'rgb(134, 141, 127)'}
            alignItems={'center'} fontSize={{base:'9',sm:'12',md:'18'}}>
                <Box fontFamily={'Rockwell'}>{<strong><FontAwesomeIcon icon={faCopyright} /> Copyright - <Link _hover={{color:'white', textDecoration:'none'}}> AF desarrollos</Link> - 2023 </strong>}</Box>
                <Box display="flex" flexDirection="row" justifyContent={'space-around'} 
                alignItems={'center'}>
                    <Link p='2' color={'whitesmoke'} fontFamily={'Rockwell'} _hover={{color: 'blue'}}><FontAwesomeIcon icon={faFacebook}  fontSize={'20'} /></Link> 
                    <Link p='2' color={'whitesmoke'} fontFamily={'Rockwell'} _hover={{color: 'red'}}><FontAwesomeIcon icon={faInstagram}  fontSize={'20'}/></Link>
                    </Box>  
        </Container> 
    );   

}

export {Footer};