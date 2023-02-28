import "./home.css";
import { Hero } from "../../components/Hero/Hero";
import { Activity } from "../../components/Activity/Activity";
import { Delivery } from "../../components/Delivery/Delivery";
import { Works } from "../../components/Works/Works";
import { Partner } from "../../components/Partner/Partner";
import { Quota } from "../../components/Quota/Quota";


export const Home = () => {

    return (
        <>
            <Hero/>
            <Activity/>
            <Delivery/>
            <Works/>
            <Partner/>
            <Quota/>
        </>
    )
}