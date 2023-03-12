import "./layout.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { About } from "../Pages/About/About";
import { Projects } from "../Pages/Projects/Projects";
import { New } from "../Pages/New/New";
import {Contact} from "../Pages/Contact/Contact";
import { Article } from "../Pages/Article/Article";
import { CompanyInfo } from "../Pages/CompanyInfo/CompanyInfo";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { News } from "../components/News/News";
import {NewsArticle} from "../components/NewsArticle/NewsArticle";
import {NewsLongread} from "../components/NewsLongread/NewsLongread";
import Atlas from "../components/Brand/Atlas";
import Rosen from "../components/Brand/Rosen";
import Grab from "../components/Brand/Grab";
import Tli from "../components/Brand/Tli";






export const Layout = () => {

    return (
        <>
            <Header/>

            <main>
                <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="activity" element={<Projects/>}>
                            <Route path="atlas" element={<Atlas/>}/>
                            <Route path="rosenbauer" element={<Rosen/>}/>
                            <Route path="graboplast" element={<Grab/>}/>
                            <Route path="tli" element={<Tli/>}/>
                        </Route>
                        <Route path="news" element={<New/>}>
                            <Route path="all" element={<News/>}/>
                            <Route path="articles" element={<NewsArticle/>}/>
                            <Route path="longreads" element={<NewsLongread/>}/>
                        </Route>
                        <Route path="/contacts" element={<Contact/>}/>
                        <Route path="/article" element={<Article/>}/>
                        <Route path="/company" element={<CompanyInfo/>}/>
                </Routes>
            </main>

            <Footer/>
        </>
    )
}