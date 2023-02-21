import "./delivery.css";
import Del from "../../assets/images/delivery-bg.png"

export const Delivery = () => {

    return (
        <section className="delivery-section">
            <div className="container delivery-section__container">
                <img className="delivery-section__img" src={Del} alt="img" width={588} height={674}/>

                <div className="delivery-section__wrapper">
                    <h2 className="delivery-section__title">Доставка из ОАЭ в страны СНГ нашим партнером «AL NAJIM AL FIDHI GENERAL TRADING LLC»</h2>

                    <span className="delivery-section__span"></span>

                    <p className="delivery-section__desc">Global Industrial Solutions поставляет промышленное оборудование, запасные части, материалы и комплектующие для промышленного оборудования и машин, а также химическую продукцию для различных отраслей промышленности. Наша профессиональная команда оперативно подберет и предложит Клиенту оборудование и материалы ведущих мировых компаний в соответствии с предпочтениями Клиента.</p>
                </div>
            </div>
        </section>
    )
}