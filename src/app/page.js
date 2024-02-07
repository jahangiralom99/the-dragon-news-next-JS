import LatesNews from "@/components/ui/LatestNews/LatesNews";
import SideBar from "@/components/ui/SideBar/SideBar";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <LatesNews/>
      </Grid>
      <Grid item xs={4}>
        <SideBar />
      </Grid>
    </Grid>
  </>
  );
};

export default HomePage;