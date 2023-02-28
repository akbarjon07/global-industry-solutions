import "./company.css";
// import Com from "../../assets/images/company-bg.jpeg";
import Rec from "../../assets/images/company-rec.jpeg";



export const Company = () => {
    return (
        <section className="company-section">
            <div className="container company-section__container">

            {/* <video autoplay muted loop id="myVideo">
                <source src={Com} type="video/mp4"/>
            </video> */}

                <h3 className="company-section__title">пожарная продукция</h3>

                <p className="company-section__desc">Мы рады предложить Вам поставку полного спектра, продукта высшего качества в области пожаротушения, а именно:</p>

                <ul className="company-section__list">
                    <li className="company-section__item">муниципальные пожарные машины;</li>
                    <li className="company-section__item">подъемные лестницы;</li>
                    <li className="company-section__item">гидравлические платформы;</li>
                    <li className="company-section__item">транспортные средства для аэропортов;</li>
                    <li className="company-section__item">специальные транспортные средства;</li>
                    <li className="company-section__item">системы пожаротушения;</li>
                    <li className="company-section__item">противопожарные оборудования;</li>
                    <li className="company-section__item">стационарные системы пожаротушения и решения для управления транспортными средствами и управления операциями в области телематики;</li>
                    <li className="company-section__item">промышленные транспортные средства;</li>
                </ul>

                <div className="company-section__image-wrapper">
                    <img src={Rec} alt="img" width={345} height={460}/>
                    <img src={Rec} alt="img" width={345} height={460}/>
                    <img src={Rec} alt="img" width={345} height={460}/>
                    <img src={Rec} alt="img" width={345} height={460}/>
                    <img src={Rec} alt="img" width={345} height={460}/>
                    <img src={Rec} alt="img" width={345} height={460}/>
                    <img src={Rec} alt="img" width={345} height={460}/>
                    <img src={Rec} alt="img" width={345} height={460}/>
                    <img src={Rec} alt="img" width={345} height={460}/>
                    <img src={Rec} alt="img" width={345} height={460}/>
                    <img src={Rec} alt="img" width={345} height={460}/>
                    <img src={Rec} alt="img" width={345} height={460}/>
                </div>
            </div>
        </section>
    )
}
