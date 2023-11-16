import { Button, Container, Text } from '@chakra-ui/react';
import {React ,  useState } from 'react';
// import './ContadorResponsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';  
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';

const ContadorResponsive=()=>{

    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1);
    }

    const restar = () => {
        setContador(contador - 1);
    }
    
    const borrar = () => {
        setContador(0);
    }

    return(				
        <Container display={'flex'} flexDirection={'column'} alignItems={"center"} variant='elevated'
            justifyContent={'space-around'} maxH={'500'} minH={'200'}>
            <Container display={'flex'} flexDirection={'column'} alignItems={"center"} gap={'4'} fontFamily={'"seven segment" , sans-serif'}>
                <Text fontSize={{base:'70', sm:'140', md:'200'}}>{contador}</Text>
                <Text fontSize={{base:'16', sm:'24', md:'32'}}> Número </Text>
            </Container>
            <Container display={'flex'} flexDirection={{base:'column-reverse' , sm:'row'}} alignItems={"center"} justifyContent={'space-around'} minH={{base:'200px', sm:'100px'}}>
                <Button onClick={restar} padding={'10px 30px'} borderRadius={'10px'} bg={'white'} outlineOffset={'2'} outlineColor={'red'} color={'red'} _hover={{bg:'rgb(236, 94, 69)', color:'white'}} isDisabled={contador <= 0}><FontAwesomeIcon icon={faSquareMinus} fontSize={'35'}  /></Button>
                <Button onClick={borrar} padding={'10px 30px'} borderRadius={'10px'} bg={'white'} outlineOffset={'2'} outlineColor={'gray'} color={'gray'} _hover={{bg:'gray', color:'white'}}><FontAwesomeIcon icon={faTrashCan} beatFade fontSize={'30'} /></Button>
                <Button onClick={sumar} padding={'10px 30px'} borderRadius={'10px'} bg={'white'} outlineOffset={'2'} outlineColor={'green'} color={'green'} _hover={{bg:'rgb(152, 236, 69)', color:'white'}}><FontAwesomeIcon icon={faSquarePlus} fontSize={'35'}/></Button>
            </Container>

        </Container> 
    );   

}

export {ContadorResponsive};