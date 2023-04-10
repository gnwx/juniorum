import { Box, Typography } from "@mui/material";
import { theme } from "../../helpers/theme";

const Title = () => (
  <Box>
    <Typography variant="h1">Juniorum</Typography>
    <Typography variant="h6" color={theme.palette.text.secondary}>
      Empowering juniors and interns to land their dream jobs!
    </Typography>
  </Box>
);

export default Title;
