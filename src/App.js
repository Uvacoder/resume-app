import React from 'react';
import {Helmet} from "react-helmet";
import { myNewTheme } from './Theme.js';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  ButtonGroup,
  Image
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { emojisplosion, emojisplosions } from "emojisplosion";


function App() {
  return (
    <ChakraProvider resetCSS theme={myNewTheme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mike Martin</title>
        <link rel="canonical" href="mikemartin.xyz" />
        <meta name="description" content="My Resume Page" />
      </Helmet>
      <Box textAlign="center" fontSize="xl" bg='primary' textColor='white'>        
        <Grid minH="100vh" p={3}>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <VStack spacing={8}>
            <Image
              borderRadius='full'
              boxSize='300px'
              src='../assets/mikeportrait.jpeg'
              alt='Mike Martin'
              onMouseOver={emojisplosion({emojis: ["✨", "✨",  "✨", "✨", "✨", "✨", "✨", "✨", "✨", "✨"],})}
            />
            
            <Text>
              Mike Martin
            </Text>         
       
            <ButtonGroup variant='outline' spacing='6'>
              <Link href="https://www.linkedin.com/in/michael-martin-3231b512a/" target="_blank"><Button colorScheme='twitter' leftIcon={<FaLinkedin />}>LinkedIn</Button></Link>
              <Link href="https://github.com/michaelmartin9937" target="_blank"><Button colorScheme='twitter' leftIcon={<FaGithub />}>GitHub</Button></Link>
              <Link href="https://docs.google.com/document/d/1i7QTKKO_dwiCb2wy4U6LQvkwjF5kajaiatSnCAnnyl0/edit?usp=sharing" target="_blank"><Button colorScheme='blue'>Resume</Button></Link>
            </ButtonGroup>        

            <hr></hr>

            <Text>My Projects</Text>
            <Link href="https://broken-hall-1854.on.fleek.co/" target="_blank" color="#D25A59">Cryptocurrency Exchange</Link>
            <Link href="https://sparkling-dawn-1591.on.fleek.co/" target="_blank" color="#D25A59">ENS Marketplace</Link>
            <Link href="https://orange-smoke-9788.on.fleek.co/" target="_blank" color="#D25A59">NFT Project</Link>
            <Link href="https://github.com/michaelmartin9937/Chainlink-Node" target="_blank" color="#D25A59">Chainlink Node</Link>

            
            
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
     
  );
 
}

export default App;
