import "./about.css";
import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import { Provider } from "../../components/Provider/Provider";
import { Foundation } from "../../components/Foundation/Foundation";
import { Values } from "../../components/Values/Values";
import { Mission } from "../../components/Mission/Mission";


export const About = () => {

    return (
        <>
            <Header/>
            <Provider/>
            <Foundation/>
            <Values/>
            <Mission/>
            <Footer/>
        </>
    )
}