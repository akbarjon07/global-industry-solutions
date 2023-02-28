import "./provider.css";
import Prov from "../../assets/images/provider-bg.png";

export const Provider = () => {
    return (
        <section className="provider-section">
            <div className="container provider-section__container">
                <h1 className="provider-section__title">Незаменимый поставщик <span className="provider-section__span">промышленного оборудования</span></h1>

                <img className="provider-section__img" src={Prov} alt="img" width={660} height={706}/>
            </div>
        </section>
    )
}