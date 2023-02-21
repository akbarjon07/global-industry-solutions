import "./articleHero.css";
import Bg from "../../assets/images/article-bg.jpeg"

export const ArticleHero = () => {

    return (
        <section className="articlehero-section">
            <div className="container">
                <p className="articlehero-section__date">13 декабря 2022 года</p>

                <h2 className="articlehero-section__title">Фирмы и инновации в новой промышленной парадигме цифровой трансформации</h2>

                <img className="articlehero-section___img" src={Bg} alt="img" width={1400} height={740} />
            </div>
        </section>
    )
}