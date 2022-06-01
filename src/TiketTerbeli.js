import { useState, useEffect, ReactDOM } from 'react';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import { Link } from 'react-router-dom';
import './TiketTerbeli.css';

export default function TiketTerbeli() {
  const [ticketList, setTicketList] = useState([])
  const ticketListCollectionRef = collection(db, "Tickets")

  useEffect(() => {

    const getTicketList = async() => {
      const data = await getDocs(ticketListCollectionRef)
      setTicketList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getTicketList()
  }, [])

    return (
    <div className="card-page">
        <section id="menu">
            <nav class="navbar fixed-top transparent-bg align-items-center">
                <div class="menu-content-top">
                    <div class="menu-logo">
                        <div class="navbar-brand">
                            <span class="navbar-logo">
                                <a href="index.html">
                                    <img class="navbar-logo-img" src="./assets/busmallah-logo" alt="Busmallah"/>
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
        <h1 className='title'>Tiket Pesanan Anda</h1>
        <p className='subtitle'><i>Pilih Tiket untuk tindakan lebih lanjut</i></p>
        <div className='row justify-content-center'>
            {ticketList.map((ticketlist) => {
                let statusPembayaran
                ticketlist.statusPembayaran == 0 ? statusPembayaran = 'Belum Dibayar' : statusPembayaran = 'Lunas'
                if(statusPembayaran == 'Lunas'){
                    return (
                        <a className='ticket light' href='https://aditydcp.github.io/busmallah-view/post-order' target='_blank'>
                            <div className='ticket-head text-center'>
                                <div className='from-to'>
                                    {ticketlist.asal}
                                    <h3 className='arrow'>→</h3>
                                    {ticketlist.tujuan}
                                </div>
                            </div>
                            <div className='ticket-body'>
                                <div className='nama-bus'>
                                    <p className='ticket-info-p'>Nama Bus</p>
                                    <h2 className='ticket-info-top'>{ticketlist.namaBus}</h2>
                                </div>
                                <div className='ticket-info'>
                                    <p className='ticket-info-p'>Jumlah Penumpang</p>
                                    <h2 className='ticket-info-bottom'>{ticketlist.jumlahPenumpang}</h2>
                                </div>
                            </div>
                        </a>
                        
                    )
                } else if(statusPembayaran == 'Belum Dibayar') {
                    return (
                    <a className='ticket light' href='http://demo-payment-iai.herokuapp.com/' target='_blank'>
                        <div className='ticket-head text-center'>
                            <div className='from-to'>
                                {ticketlist.asal}
                                <h3 className='arrow'>→</h3>
                                {ticketlist.tujuan}
                            </div>
                        </div>
                        <div className='ticket-body'>
                            <div className='nama-bus'>
                                <p className='ticket-info-p'>Nama Bus</p>
                                <h2 className='ticket-info-top'>{ticketlist.namaBus}</h2>
                            </div>
                            <div className='ticket-info'>
                                <p className='ticket-info-p'>Jumlah Penumpang</p>
                                <h2 className='ticket-info-top'>{ticketlist.jumlahPenumpang}</h2>
                            </div>
                            <div className='total-pembayaran'>
                                <p className='ticket-info-p'>Total Harga</p>
                                <h2 className='ticket-info-top'>Rp.{ticketlist.harga}</h2>
                            </div>
                            <div className='status-pembayaran'>
                                <p className='ticket-info-p'>Status Pembayaran</p>
                                <h2 className='ticket-info-bottom-pembayaran'>{statusPembayaran}</h2>
                            </div>
                        </div>
                    </a>
                    )
                }
            })}
        </div>
    </div>
  )
}
