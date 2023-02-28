import "./about.css";
import { Provider } from "../../components/Provider/Provider";
import { Foundation } from "../../components/Foundation/Foundation";
import { Values } from "../../components/Values/Values";
import { Mission } from "../../components/Mission/Mission";


export const About = () => {

    return (
        <>
            <Provider/>
            <Foundation/>
            <Values/>
            <Mission/>
        </>
    )
}