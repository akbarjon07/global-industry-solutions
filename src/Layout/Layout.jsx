import { Footer } from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Top } from "../components/Top/Top";
import "./layout.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { About } from "../Pages/About/About";
import { Projects } from "../Pages/Projects/Projects";
import { New } from "../Pages/New/New";
import {Contact} from "../Pages/Contact/Contact";
import { Article } from "../Pages/Article/Article";
import { CompanyInfo } from "../Pages/CompanyInfo/CompanyInfo";




export const Layout = () => {

    return (
        <>
            <main>
                <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/activity" element={<Projects/>}/>
                        <Route path="/news" element={<New/>}/>
                        <Route path="/contacts" element={<Contact/>}/>
                        <Route path="/article" element={<Article/>}/>
                        <Route path="/company" element={<CompanyInfo/>}/>
                </Routes>
            </main>
        </>
    )
}