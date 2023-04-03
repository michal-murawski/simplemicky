import {ThemeProvider} from "next-themes";

function Providers({children}) {
    return <ThemeProvider attribute="class" defaultTheme='dark'>{children}</ThemeProvider>;
}

export {Providers};