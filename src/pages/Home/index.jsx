import logo_chat from "./../../assets/icon-chat.png"
import logo_money from "./../../assets/icon-money.png"
import logo_security from "./../../assets/icon-security.png"

import Feature from './../../components/Feature'

import './style.css'

function Home() {
    const features = [
        {
            logo: logo_chat,
            title: `You are our #1 priority`,
            texte: `Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.`
        },
        {
            logo: logo_money,
            title: `More savings means higher rates`,
            texte: `The more you save with us, the higher your interest rate will be!`
        },
        {
            logo: logo_security,
            title: `Security you can trust`,
            texte: `We use top of the line encryption to make sure your data and money is always safe.`
        }
    ];

    return (
        <div className='home'>
            <div className="banner">
                <div className="container">
                    <h2>
                        No fees.<br />
                        No minimum deposit.<br />
                        High interest rates.
                    </h2>
                    <p>Open a savings account with Argent Bank today!</p>
                </div>
            </div>

            <section className="sect-features">
                {features.map((feature, idx) =>
                    <Feature
                        key={idx}
                        feature={feature}
                    />
                )}
            </section>
        </div>
    )
}

export default Home;