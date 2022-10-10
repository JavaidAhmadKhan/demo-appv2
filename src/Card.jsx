import './card-list.css';

const Card = ({ name, email, phone, img, key }) => {
    return (
        <div>
            <div className="card" >
                <div className="top">
                    <p>{key}</p>
                    <h2 className='name'>{name}</h2>
                    <img className='circle-img'
                        src={img}
                        alt=""
                    />
                </div>
                <div className="bottom">
                    <p className='info'>{phone}</p>
                    <p className='info'>{email}</p>
                </div>
            </div>
        </div>
    );
}



export default Card;
