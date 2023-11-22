import {} from 'react';
import './style.css';
import Header from '../Header/Header';
import Main from '../Main/Main'
import Sobre from '../Sobre/Sobre'
import Cards from '../Cards/Cards'
import Vantagens from '../Vantagens/Vantagens';

const Home = () =>{
        return(
                <main className='home'>
                        <div className='box-header'><Header /></div>
                        <div className='box-main'><Main /></div>
                        <div className='box-sobre'><Sobre /></div>
                        <div className='box-aside'><Cards /></div>
                        <div className='box-vantagens'><Vantagens /></div>
                </main>
                )
}

export default Home