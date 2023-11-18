import {} from 'react';
import './style.css';
import Header from '../Header/Header';
import Main from '../Main/Main'
import Sobre from '../Sobre/Sobre'
import Cards from '../Cards/Cards'

const Home = () =>{
        return(
                <main className='home'>
                        <div className='box-header'><Header /></div>
                        <div className='box-main'><Main /></div>
                        <div className='box-sobre'><Sobre /></div>
                        <div className="box-aside"><Cards /></div>
                </main>
                )
}

export default Home