import "./works.css"
import Wt1 from "../../assets/images/work-1.jpeg";
import Wt2 from "../../assets/images/work-2.jpeg";
import Wt3 from "../../assets/images/work-3.jpeg";
import Wt4 from "../../assets/images/work-4.jpeg";
import Wt5 from "../../assets/images/work-5.jpeg";
import Wt6 from "../../assets/images/work-6.jpeg";
import Wt7 from "../../assets/images/work-7.jpeg";
import Wt8 from "../../assets/images/work-8.jpeg";
import Wt9 from "../../assets/images/work-9.jpeg";

export const Works = () => {

    return (
        <section className="works-section">
            <div className="container">
                <h2 className="works-section__title">Наша комплексная консолидирующая компания специализируется в
                <span className="works-section__title-span"> девяти основных областях;</span></h2>
            </div>


            <div className="works-section__first-list">
                <div className="works-section__item">
                    <img className="works-section__img" src={Wt1} alt="img" width={350} height={550}/>

                    <p className="works-section__desc">Гидравлическое оборудование</p>
                </div>

                <div className="works-section__item">
                    <img className="works-section__img" src={Wt2} alt="img" width={350} height={550}/>

                    <p className="works-section__desc">Пневматическое оборудование</p>
                </div>

                <div className="works-section__item">
                    <img className="works-section__img" src={Wt3} alt="img" width={715} height={550}/>

                    <p className="works-section__desc big">Электрооборудование и запасные части</p>
                </div>
            </div>


            <div className="works-section__second-list">
                <div className="works-section__item">
                    <img className="works-section__img item" src={Wt4} alt="img" width={715} height={550}/>

                    <p className="works-section__desc big">Насосы, электродвигатели и компрессоры</p>
                </div>

                <div className="works-section__item">
                    <img className="works-section__img" src={Wt5} alt="img" width={350} height={550}/>
                    <p className="works-section__desc">Электрокары, мопеды и скутеры</p>
                </div>

                <div className="works-section__item">
                    <img className="works-section__img" src={Wt6} alt="img" width={350} height={550}/>

                    <p className="works-section__desc">Химические продукты</p>
                </div>
            </div>


            <div className="works-section__first-list">
                <div className="works-section__item">
                    <img className="works-section__img" src={Wt7} alt="img" width={350} height={550}/>

                    <p className="works-section__desc bottom">Автозапчасти</p>
                </div>

                <div className="works-section__item">
                    <img className="works-section__img" src={Wt8} alt="img" width={350} height={550}/>

                    <p className="works-section__desc small">Напольные покрытия</p>
                </div>

                <div className="works-section__item">
                    <img className="works-section__img" src={Wt9} alt="img" width={715} height={550}/>

                    <p className="works-section__desc big bottom">Продукты и Техника Пожаротушения</p>
                </div>
            </div>
        </section>
    )
}