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
                <Image src="/images/logo.png" width={200} height={200} alt="" className={LandingPageStyle.logoImg} />
                </div>
                <Link href="/">
                    <div className={LandingPageStyle.wrapper}>
                        <marquee width="100%" direction="left" height="80px" behavior='scroll'>
                            <div className="marquee-content">
                                <Image priority={true} src="/images/extra-deposit.png" width={200} height={200} alt="" />
                                <Image priority={true} src="/images/instant-withdrawal.png" width={200} height={200} alt="" />
                                <Image priority={true} src="/images/Instant-Deposit.png" width={200} height={200} alt="" />
                                <Image priority={true} src="/images/refer-bonus.png" width={200} height={200} alt="" />
                            </div>
                        </marquee>
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