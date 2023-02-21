import "./projects.css";
import { WorkType } from "../../components/WorkType/WorkType";
import {Firms} from "../../components/Firms/Firms";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export const Projects = () => {

    return (
        <>
            <Header/>
            <WorkType/>
            <Firms/>
            <Footer/>
        </>
    )
}