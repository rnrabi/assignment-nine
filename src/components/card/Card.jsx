import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({residential}) => {
    // console.log(residential)
    const {id , image , title , status , area , location , price ,segment_name} =residential;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {title}
                        <div className="badge badge-secondary">{status}</div>
                    </h2>
                    <div className='flex justify-between mb-6'>
                        <div className='mb-5'> 
                            <h3>Area : {area}sq ft</h3>
                            <h3>Location:{location}</h3>
                        </div>
                        <div>
                            <h3>{segment_name}</h3>
                            <h3>Price:{price}Tk</h3>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                       <Link to={`/details/${id}`}> <button className="btn btn-secondary btn-outline">View Property</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
Card.propTypes = {
    residential: PropTypes.object.isRequired
}