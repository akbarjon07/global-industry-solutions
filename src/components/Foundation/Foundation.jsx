import "./foundation.css";
import FoundLogo from "../../assets/images/found-logo.png"

export const Foundation = () => {

    return (
        <section className="foundation-section">
            <div className="container">
                <div className="foundation-section__top">
                    <i class="bi bi-hexagon-fill"></i>

                    <p className="foundation-section__top-desc">ОСНОВАНА В ЛОС-АНДЖЕЛЕСЕ В 1989 ГОДУ</p>
                </div>

                <div className="foundation-section__wrapper">
                    <div className="foundation-section__left">
                        <h2 className="foundation-section__left-title">Отличная технология, лучшие услуги</h2>

                        <img className="foundation-section__left-img" src={FoundLogo} alt="FoundLogo" width={366} height={421}/>
                    </div>

                    <div className="foundation-section__right">
                        <span className="foundation-section__right-span"></span>

                        <p className="foundation-section__right-desc">Global Industrial Solutions поставляет промышленное оборудование, запасные части, материалы и комплектующие для промышленного оборудования и машин, а также химическую продукцию для различных отраслей промышленности.
                        <br/>
                        <br/>
                        Наша профессиональная команда оперативно подберет и предложит Клиенту оборудование и материалы ведущих мировых компаний в соответствии с предпочтениями Клиента.
                        <br/>
                        <br/>
                        В то же время наша деятельность не ограничивается только поставками, мы можем предложить нашим клиентам комплексные решения - от поиска требуемого оборудования/ материалов до доставки его в согласованный пункт. Такой подход предполагает сотрудничество нашей команды с Клиентом в части разработки технического задания (заявки), выбора технологии. Затем мы сотрудничаем с нашими партнерами, чтобы предложить оборудование в полном соответствии со спецификацией. Как только решение Клиента принято, мы обеспечиваем полный цикл доставки на сайт Клиента. Кроме того, мы и наши партнеры можем предложить клиенту услуги по вводу в эксплуатацию, послепродажному обслуживанию и обучению персонала.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}