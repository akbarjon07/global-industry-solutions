import "./new.css";
import { Feature } from '../../components/Feature/Feature';
import { Navigation } from '../../components/Navigation/Navigation';
import { News } from '../../components/News/News';
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export const New = () => {
    return (
        <>
            <Header/>
            <Feature/>
            <Navigation/>
            <News/>
            <Footer/>
        </>
    )
}