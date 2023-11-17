import { Button, Container, Divider, Grid, GridItem, Text } from '@chakra-ui/react';
import {React ,  useState } from 'react';
// import './ContadorResponsive.css';
import { motion , useSpring } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';  
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';

const ContadorResponsive=()=>{

    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1);
    }

    const restar = () => {
        if(contador>0){
            setContador(contador - 1);       
        }
    }
    
    const borrar = () => {
        setContador(0);
    }

    const animCont = () => {
        
    }


    document.onkeydown = function(e) {
        if(!e.repeat && e.key === 'ArrowUp'){
                sumar()
        } else if(e.repeat && e.key === 'ArrowRight'){
            setInterval(sumar(),1500);
        } else if(!e.repeat && e.key === 'ArrowDown'){
                restar()
        } else if(e.repeat && e.key === 'ArrowLeft'){
            setInterval(restar(),1500);
        } 
    }

    return(				
        <Container display={'flex'} flexDirection={'column'} alignItems={"center"} variant='elevated'
             maxH={'700'} minH={'200'} maxW={{base:'300' ,md:'350'}}>
            <Container display={'flex'} flexDirection={'column'} alignItems={"center"} fontFamily={'"seven segment" , sans-serif'} minH={'100'}>
            <motion.div className="box">
                <Text fontSize={{base:'150', sm:'160', md:'200'}}>{contador}</Text></motion.div>
                <Text fontSize={{base:'28', sm:'30', md:'36'}}> Número </Text>
            </Container>
            {/* <Container display={'flex'} flexDirection={{base:'column-reverse' , sm:'row'}} alignItems={"center"} justifyContent={'space-around'} minH={{base:'200px', sm:'100px'}}>
                <Button onClick={restar} padding={'10px 25px'} borderRadius={'10px'} bg={'white'} outlineOffset={'2'} outlineColor={'red'} color={'red'} _hover={{bg:'rgb(248, 134, 114)', color:'white'}} isDisabled={contador <= 0}><FontAwesomeIcon icon={faSquareMinus} fontSize={'35'}  /></Button>
                <Button onClick={borrar} padding={'10px 25px'} borderRadius={'10px'} bg={'white'} outlineOffset={'2'} outlineColor={'gray'} color={'gray'} _hover={{bg:'rgb(184, 184, 184)', color:'white'}}><FontAwesomeIcon icon={faTrashCan} beatFade fontSize={'30'} /></Button>
                <Button onClick={sumar} padding={'10px 25px'} borderRadius={'10px'} bg={'white'} outlineOffset={'2'} outlineColor={'green'} color={'green'} _hover={{bg:'rgb(125, 196, 55)', color:'white'}}><FontAwesomeIcon icon={faSquarePlus} fontSize={'35'}/></Button>
            </Container> */}
            <Container  minH={{base:'200px', sm:'100px'}} mt={{base:'10px', md:'20px'}}>
                <Grid templateColumns={{base:'repeat(2,1fr)',md:'repeat(3,1fr)'}} rowGap={4} gap={4}>
                    <GridItem colSpan={1}>  
                    <motion.div className="box" whileTap={{scale: 1.3}} whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }} >  
                        <Button  w={'full'} onClick={restar} padding={'10px 25px'} borderRadius={'10px'} bg={'white'} outlineOffset={'2'} 
                        outlineColor={'red'} color={'red'} _hover={{bg:'rgb(248, 134, 114)', color:'white'}} isDisabled={contador <= 0}><FontAwesomeIcon icon={faSquareMinus} fontSize={'35'}  /></Button>
                        </motion.div></GridItem>
                    <GridItem colSpan={{base:2 ,md:1}} order={{base:2 ,md:1}}>
                    <motion.div className="box" whileTap={{scale: 1.3}} whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }} >     
                        <Button w={'full'}  onClick={borrar} padding={'10px 25px'} borderRadius={'10px'} 
                        bg={'white'} outlineOffset={'2'} outlineColor={'gray'} color={'gray'} _hover={{bg:'rgb(184, 184, 184)', color:'white'}} isDisabled={contador <= 0}><FontAwesomeIcon icon={faTrashCan} beatFade fontSize={'30'} /></Button>
                        </motion.div></GridItem>
                    <GridItem colSpan={1} order={{base:1 ,md:2}}>    
                    <motion.div className="box" whileTap={{scale: 1.3}} whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }} >
                       <Button w={'full'}  onClick={sumar} padding={'10px 25px'} borderRadius={'10px'} bg={'white'} outlineOffset={'2'} outlineColor={'green'} color={'green'} _hover={{bg:'rgb(139, 224, 53)', color:'white'}}><FontAwesomeIcon icon={faSquarePlus} fontSize={'35'}/></Button>
                       </motion.div></GridItem>
                </Grid> 
            </Container>
            

        </Container> 
    );   

}

export {ContadorResponsive};