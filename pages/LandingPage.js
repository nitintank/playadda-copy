import React from 'react'
import Image from 'next/image'
import LandingPageStyle from '@/styles/LandingPage.module.css'
import Link from 'next/link'
import Head from 'next/head'

const LandingPage = () => {
    return (
        <>
            <Head>
                <title>Best Free Online Game</title>
            </Head>
            <div className={LandingPageStyle.body2}>
                <div className={LandingPageStyle.head}>

                </div>
                <Link href="/">
                    <div className={LandingPageStyle.box}>
                        <h2>GET 10% BONUS ON EVERY DEPOSIT<br />{`INDIA'S OWN EXCHANGE`}</h2>
                        <hr className={LandingPageStyle.gradientLine}></hr>
                    </div>
                </Link>
                <Link href="/">
                    <div className={LandingPageStyle.box3}>
                        <h2>GET SPORTS PREDICTION</h2>
                        <div className={LandingPageStyle.tab}>
                            <Image width={100} height={100} src="/images/right-arrow.png" alt="" />
                        </div>
                    </div>
                </Link>
                <Link href="/">
                    <div className={LandingPageStyle.box3}>
                        <h2>24X7 SUPPORT</h2>
                        <div className={LandingPageStyle.tab}>
                            <Image width={100} height={100} src="/images/right-arrow.png" alt="" />
                        </div>
                    </div>
                </Link>
                <Link href="/">
                    <div className={LandingPageStyle.box3}>
                        <h2>ALL PREMIUM PANEL</h2>
                        <div className={LandingPageStyle.tab}>
                            <Image width={100} height={100} src="/images/right-arrow.png" alt="" />
                        </div>
                    </div>
                </Link>
                <Link href="/">
                    <div className={LandingPageStyle.box3}>
                        <h2>TRUSTED SINCE 2009</h2>
                        <div className={LandingPageStyle.tab}>
                            <Image width={100} height={100} src="/images/right-arrow.png" alt="" />
                        </div>
                    </div>
                </Link>
                <Link href="/">
                    <div className={LandingPageStyle.box3}>
                        <h2>GET YOUR ID NOW</h2>
                        <div className={LandingPageStyle.tab}>
                            <Image width={100} height={100} src="/images/right-arrow.png" alt="" />
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default LandingPage