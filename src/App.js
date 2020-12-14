import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch } from "react-router-dom";

export default function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Switch>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box width="100%">Hi i am aniket</Box>
          </Box>
        </Switch>
      </BrowserRouter>
    </CssBaseline>
  );
}
