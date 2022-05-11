// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        bg: string;
        elementBg: string;
        textClr: string;
        textInputClr: string;
        searchIconClr: string;
        boxShadow: string;
        inputPlaceholderClr: string;
    }
}