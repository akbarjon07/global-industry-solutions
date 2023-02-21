import "./mission.css";

export const Mission = () => {

    return (
        <section className="mission-section">
            <div className="container">
                <div className="mission-section__wrapper">
                    <div className="mission-section__left box">
                        <i class="bi bi-bullseye eye"></i>

                        <h2 className="mission-section__left-title heading">Наша миссия</h2>

                        <p className="mission-section__left-desc description">Мы стремимся разрабатывать наиболее оптимальные решения для наших клиентов.</p>
                    </div>

                    <div className="mission-section__right box">
                        <i class="bi bi-eye eye"></i>

                        <h2 className="mission-section__right-title heading">Наше видение</h2>

                        <p className="mission-section__right-desc description">Наша цель - быть лидером на каждом рынке, который мы обслуживаем, на благо наших клиентов.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}