import "./home.css";
import { Top } from "../../components/Top/Top";
import { Hero } from "../../components/Hero/Hero";
import { Activity } from "../../components/Activity/Activity";
import { Delivery } from "../../components/Delivery/Delivery";
import { Works } from "../../components/Works/Works";
import { Partner } from "../../components/Partner/Partner";
import { Quota } from "../../components/Quota/Quota";
import { Footer } from "../../components/Footer/Footer";


export const Home = () => {

    return (
        <>
            <Top/>
            <Hero/>
            <Activity/>
            <Delivery/>
            <Works/>
            <Partner/>
            <Quota/>
            <Footer/>
        </>
    )
}