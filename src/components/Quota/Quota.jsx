import "./quota.css";
import Quote from "../../assets/images/quote.svg";
import Quote2 from "../../assets/images/quotte.svg";


export const Quota = () => {

    return (
        <section className="quota-section">
            <div className="container">
                <img className="quota-section__img" src={Quote} alt="quote" width={1350} height={96}/>

                <img className="quota-section__img-res" src={Quote2} alt="quote" width={340} height={280}/>
            </div>
        </section>
    )
}