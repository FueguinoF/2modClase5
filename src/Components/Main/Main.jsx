import { Container } from '@chakra-ui/react';
import React from 'react';
import { ContadorResponsive } from '../ContadorResponsive/ContadorResponsive';
// import './Main.css' 


const Main=()=>{

    return(				
        <Container minH="80vh" maxW="100vw" display={'flex'} flexDirection={'column'} alignItems={'center'} 
            justifyContent={'center'}  > 

                <ContadorResponsive/>

        </Container> 
    );   

}

export {Main};