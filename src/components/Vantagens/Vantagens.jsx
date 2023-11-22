import {} from "react";
import './style.css'

const Vantagens = () => {
        return(
                <main className="container-pai">
                        <h1>VANTAGENS</h1>
                <article className="container-vantagens">
                        <div className="card-vantagens">
                                <h2>01</h2>
                                <p>Monitoramento 24/7 garante vigilância constante sobre a saúde do usuário.!</p>
                        </div>
                        <div className="card-vantagens">
                                <h2>02</h2>
                                <p>Alertas automáticos proporcionam respostas rápidas a condições de saúde críticas.
</p>
                        </div>
                        <div className="card-vantagens">
                                <h2>03</h2>
                                <p>Análise de IA promove intervenções médicas proativas e personalizadas.</p>
                        </div>
                </article>
        </main>
)
}

export default Vantagens

