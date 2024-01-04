import './style.css'

function Feature({ feature }) {
    return (
        <div className='feature'>
            <img src={feature.logo} alt="Logo" />
            <h3>{feature.title}</h3>
            <p>{feature.texte}</p>
        </div>
    )
}

export default Feature;