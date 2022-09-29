import { Container, Box } from "@mui/material";
import Compcount from "./components/compcount";

function App() {
  return (
    <Box sx={{ background: "#434343" }}>
      <Container
        maxWidth="md"
        sx={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Compcount />
      </Container>
    </Box>
  );
}

export default App;
