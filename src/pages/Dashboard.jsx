import { Box, Container, Stack } from "@mui/material";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import Feed from "../components/Feed";
import RightBar from "../components/RightBar";

const Dashboard = () => {
  return (
    <Box>
      <TopBar />
      <Container maxWidth="xl">
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar />
          <Feed />
          <RightBar />
        </Stack>
      </Container>
    </Box>
  );
};

export default Dashboard;
