import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';


const TicketResultUsed = () => {
    return (
        <div>
            <div><Header2></Header2></div>
            <main className='overlay-ticket-result'>
        <div className='ticket-result overlay-white'>
            <div>Proof of Payment</div>
            <div className='overlay-ticket'>
                <div className='left-side-ticket'>
                    <div className='header-ticket'>
                        <div>
                            <img src='./Asset/HomePage/logo-white.png' alt='tickitz' />
                        </div>
                        <div>Admit One</div>
                    </div>
                    <div className='detail-ticket'>
                        <div>
                            <div>Movie</div>
                            <div>Spider-Man: Homecoming</div>
                        </div>
                    </div>
                    <div className='detail-ticket'>
                        <div>
                            <div>Date</div>
                            <div>07 July</div>
                        </div>
                        <div>
                            <div>Time</div>
                            <div>02:00pm</div>
                        </div>
                        <div>
                            <div>Category</div>
                            <div>Action</div>
                        </div>
                    </div>
                    <div className='detail-ticket'>
                        <div>
                            <div>Count</div>
                            <div>3 pieces</div>
                        </div>
                        <div>
                            <div>Seats</div>
                            <div>C4, C5, C6</div>
                        </div>
                        <div className='price-detail-ticket'>
                            <div>Price</div>
                            <div>$30.00</div>
                        </div>
                    </div>

                </div>
                <div className='right-side-ticket'>
                    <div className='header-ticket'>
                        <div>
                            <img src='./Asset/HomePage/logo-white.png' alt='tickitz' />
                        </div>
                    </div>
                    <div className='overlay-qr'>
                        <div className='qr-code'>
                            <img src={require('../assets/images/QR Code 1.png')} alt="QR Code 1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
            <div><Footer></Footer></div>
        </div>
    )
};


export default TicketResultUsed;