/* In this index.js is the reference for the component of the components.
To export to the different components or call in the project.
The format to export is 
import Component from "./Component", reference to the same path.

and

export{
    Component,
    Header,
    Main,
    Footer,
    EtcComponent,
}
*/

import Header from "./Header";
import SignIn from "./SignIn";
import NavBar from "./NavBar.jsx"
import Welcome from "./Welcome";
import Carousel from "./Carousel";

export {
    Header,
    SignIn,
    NavBar,
    Welcome,
    Carousel,
}