import {} from 'react'
import './style.css'

const Sobre = () => {
    return (
        <main className="container-sobre">
            <div className="header-and-card">
                <h1>MediSensi</h1>
                <aside className='card-sobre'>
                    <p>A MediSensi integra wearables e IA para monitoramento em tempo real e análise preditiva de sinais vitais, visando saúde personalizada.</p>
                </aside>
            </div>
            <button className='button-sobre'>Saiba Mais</button>
        </main>
    )
}

export default Sobre
