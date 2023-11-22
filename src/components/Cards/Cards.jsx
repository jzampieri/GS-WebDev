import {} from 'react'
import './style.css'

const Cards = () => {
        return(
                <main className='container'>
                        <div className="card-aside">
                                <h1>O que propomos?</h1>
                                <p>Um sistema de análise de dados de saúde em tempo real usando IA para prever tendências de saúde e identificar precocemente potenciais condições médicas através de wearables.</p>
                        </div>
                        <div className="div-container">
                                <hr className="hr-style"></hr>
                        </div>

                        <div className="card-aside">
                                <h1>O que faremos?</h1>
                                <p>A MediSensi desenvolverá um software de IA para interpretar dados de wearables, fornecendo análises preditivas e insights de saúde personalizados para usuários e profissionais de saúde.</p>
                        </div>
                        <div className="div-container">
                                <hr className="hr-style"></hr>
                        </div>
                        <div className="card-aside">
                                <h1>Como funcionamos?</h1>
                                <p>Ao implementar nosso sistema em um Smartwatch nossa IA começará a coletar suas informações, tais como, qualidade de sono, frequência cardíaca, pressão sanguínea. Caso algo fuja do padrão, os familiares serão notificados e, se necessário, uma ambulância será enviada a residência.</p>
                        </div>
                </main>
        )
}

export default Cards