import { createMuiTheme } from "@material-ui/core/styles";
import { backgroundColor, primaryColor, secondaryColor } from "./colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "white"
        },
        secondary: {
            main: secondaryColor,
            contrastText: "white"
        },
        background: {
            main: backgroundColor,
        },
    },
})

export default theme