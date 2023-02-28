import "./feature.css";
import New from "../../assets/images/news-bg.png";

export const Feature = () => {

    return (
        <section className="feature-section">
            <div className="container">

                <img className="feature-section__img" src={New} alt="image" width={1350} height={520}/>

                {/* <div className="feature-section__wrapper">
                    <p className="feature-section__desc">featured</p>

                    <h2 className="feature-section__title">Фирмы и инновации в новой промышленной парадигме цифровой трансформации</h2>
                </div> */}
            </div>
        </section>
    )
}