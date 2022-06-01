import { useState,useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

export default function BusList() {
    const [busList, setBusList] = useState([])
    const busListCollectionRef = collection(db, "BusList")
    const [newBusName, setNewBusName] = useState("")
    const [newAsal, setNewAsal] = useState('')
    const [newPenumpang, setPenumpang] = useState(1)
    const [newStatusPembayaran, setNewStatusPembayaran] = useState(0)
    const [newHarga, setNewHarga] = useState(0)
    const [newTujuan, setNewTujuan] = useState('')

    const createTicket = async () => {

    }

    useEffect(() => {

        const getBusList = async() => {
        const data = await getDocs(busListCollectionRef)
        setBusList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getBusList()
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
        <h1 className='title'>Tiket Bus Yang Tersedia</h1>
        <p className='subtitle'><i>Pilih Tiket untuk lanjut pemesanan</i></p>
        <div className='row justify-content-center'>
            {busList.map((buslist) => {
                return (
                    <a className='ticket light' href='https://www.google.com' target='_blank'>
                        <div className='ticket-head text-center'>
                            <div className='from-to'>
                                {buslist.asal}
                                <h3 className='arrow'>→</h3>
                                {buslist.tujuan}
                            </div>
                        </div>
                        <div className='ticket-body'>
                            <div className='nama-bus'>
                                <p className='ticket-info-p'>Nama Bus</p>
                                <h2 className='ticket-info-top'>{buslist.namaBus}</h2>
                            </div>
                            <div className='ticket-info'>
                                <p className='ticket-info-p'>Harga Tiket</p>
                                <h2 className='ticket-info-bottom'>Rp.{buslist.harga}</h2>
                            </div>
                        </div>
                    </a>
                )
            })}
        </div>
    </div>
  )
}