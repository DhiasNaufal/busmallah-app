import { useState, useEffect, ReactDOM } from 'react';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import './TiketTerbeli'
import { Link } from 'react-router-dom';
import './App.css';
import { render } from '@testing-library/react';

function HomePage() {
  const [busList, setBusList] = useState([])
  const busListCollectionRef = collection(db, "BusList")

  useEffect(() => {

    const getBusList = async() => {
      const data = await getDocs(busListCollectionRef)
      setBusList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getBusList()
  }, [])

  return (
    <body>
<section id="menu">
        <nav class="navbar fixed-top transparent-bg align-items-center">
            <div class="menu-content-top">
                <div class="menu-logo">
                    <div class="navbar-brand">
                        <span class="navbar-logo">
                            <a href="index.html">
                                <img class="navbar-logo-img" src="/Users/bimoajif/Documents/Projects/busmallah/src/assets/busmallah-logo.png" alt="Busmallah"/>
                            </a>
                        </span>
                        <span class="navbar-caption-wrap">
                            <a class="brand-name" href="index.html">
                                <span id="brand"> Busmallah </span>
                                <span class="doa" id="tagline"> Insya'allah sampai tujuan~ </span>
                            </a>
                        </span>
                    </div>
                </div>
                <div class="menu-content">
                    <div class="navbar-btn">
                        <a class="btn btn-primary">
                            <span>
                                Beli Tiket Sekarang <i class="icofont-rounded-right icon-white"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </section>
    <section id="hero">
        <div class="hero-overlay"></div>
        <div class="container">
            <h1 class="section-title">Mau berlibur kemana?</h1>
            <h3 class="section-subtitle doa">Insya'allah ada jalannya</h3>
            <div class="row justify-content-center align-center">
                <div class="media-container-column col-lg-12 col-md-10 col-sm-12 align-center">
                    <form action="#" method="post">
                        <div class="row">
                            <div class="relative col-lg-3 col-md-12 pdr-50px">
                                <input type="text" class="form-control input" name="tujuan" rows="7" placeholder="Kota Tujuan"/>
                                <div class="icon hero-search">
                                    <i class="icofont-building-alt"></i>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="relative col-lg-3 col-md-12 pdr-50px">
                                <input type="text" class="form-control input" name="asal" rows="7" placeholder="Kota Keberangkatan"/>
                                <div class="icon hero-search">
                                    <i class="icofont-building-alt"></i>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="relative col-lg-3 col-md-12 pdr-50px">
                                <input type="text" class="form-control input" name="jumlah" rows="7" placeholder="Jumlah Penumpang"/>
                                <div class="icon hero-search">
                                    <i class="icofont-user"></i>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="relative col-lg-3 col-md-12">
                              <Link to='/TiketTerbeli'>
                                <button type="submit" class="btn form-control input btn-primary">
                                    Pesan
                                </button>
                              </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <section id="popular">
        <div class="container">
            <h1 class="section-title">Destinasi Wisata Populer</h1>
            <div class="container popular-card">
                <div class="image"></div>
                <div class="details">
                    <h2 class="card-title"> Assalamualaikum Paris </h2>
                    <div class="metadata-wrapper">
                        <span class="metadata-small flex">
                            <div>
                                <i class="icofont-ui-rate-blank"></i>
                            </div>
                            <div class="pdl-1rm">
                                5
                            </div>
                        </span>
                        <span class="metadata-small flex">
                            <div>
                                <i class="icofont-phone"></i>
                            </div>
                            <div class="pdl-1rm">
                                +62 22 7310799
                            </div>
                        </span>
                        <span class="metadata-small flex">
                            <div>
                                <i class="icofont-dollar"></i>
                            </div>
                            <div class="pdl-1rm">
                                $65,000 - $250,000
                            </div>
                        </span>
                    </div>
                    <span class="metadata-big flex">
                        <div>
                            <i class="icofont-ui-email"></i>
                        </div>
                        <div class="pdl-1rm">
                            info-paris@assalamualai.com
                        </div>
                    </span>
                    <span class="metadata-big flex">
                        <div>
                            <i class="icofont-location-pin"></i>
                        </div>
                        <div class="pdl-1rm">
                             Jl. Gatot Subroto No.83 The Papandayan Hotel, Bandung 40262 Indonesia
                        </div>
                    </span>
                    <span>
                        <p>
                            Paris the city of love
                        </p>
                    </span>
                </div>
            </div>
        </div>
    </section>
    </body>
    
  )
}

export default HomePage;
