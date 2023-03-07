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






export const Layout = () => {

    return (
        <>
            <Header/>

            <main>
                <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/activity" element={<Projects/>}/>
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