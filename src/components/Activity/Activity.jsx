import "./activity.css"
import Gis from "../../assets/images/gis.svg";

export const Activity = () => {

    return (
        <section className="activity-section">
            <div className="container">
                <div className="activity-section__desc-wrapper">
                    <i class="bi bi-octagon-fill"></i>

                    <p className="activity-section__desc">Лучший поставщик промышленного оборудования</p>
                </div>

                <h2 className="activity-section__title">Мы предлагаем Нашим Клиентам Лучшие Промышленные Решения</h2>

                <div className="activity-section__wrapper">
                    <span className="activity-section__span"></span>

                    <p className="activity-section__description">Global Industrial Solutions поставляет промышленное оборудование, запасные части, материалы и комплектующие для промышленного оборудования и машин, а также химическую продукцию для различных отраслей промышленности. Наша профессиональная команда оперативно подберет и предложит Клиенту оборудование и материалы ведущих мировых компаний в соответствии с предпочтениями Клиента.</p>
                </div>
            </div>

            <div className="activity-section__animation">
                <img className="activity-section__animation-text" src={Gis} alt="gis" />
            </div>
        </section>
    )
}