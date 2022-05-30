
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';       

export default function Footer() {
  return (
    <footer>
      <Box
      >
        <Container maxWidth="10">
          <Box textAlign="center"  style={{
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",
            backgroundColor: "grey",
            color: "white",
            textDecorationStyle:"double",
         }}>
            <p> NEVEEN ABUROMMAN &reg; {new Date().getFullYear()} </p>

          </Box>
          
        </Container>
      </Box>
    </footer>
  );
}