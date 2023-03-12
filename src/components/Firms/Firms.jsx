import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./firms.css";
import Atlas from "../../assets/images/firm-gb.png";
import Graboplast from "../../assets/images/graboplast-bg.jpeg";
import Rosen from "../../assets/images/rosen-bg.jpeg";
import Global from "../../assets/images/global-bg.jpeg";


export const Firms = () => {

    return (
        <section className="firms-section">

            <div className="firms-section__img-wrapper">
                    <Link to="atlas">
                        <img className="firms-section__img" src={Atlas} alt="img"/>
                    </Link>

                    <Link to="graboplast">
                        <img className="firms-section__img" src={Graboplast} alt="img"/>
                    </Link>

                    <Link to="rosenbauer">
                        <img className="firms-section__img" src={Rosen} alt="img"/>
                    </Link>

                    <Link to="tli">
                        <img className="firms-section__img" src={Global} alt="img"/>
                    </Link>
            </div>

           <Outlet/>

        </section>
    )
}