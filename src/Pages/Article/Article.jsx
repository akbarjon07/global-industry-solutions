import "./article.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import {ArticleHero} from "../../components/ArticleHero/ArticleHero";
import { Description } from '../../components/Description/Description';

export const Article = () => {
  return (
    <>
      <Header/>
      <ArticleHero/>
      <Description/>
      <Footer/>
    </>
  )
}
