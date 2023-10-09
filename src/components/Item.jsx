import PropTypes from 'prop-types';

const Item = ({ shoe }) => {
    console.log(shoe)
    return (
        <>
            <div >
                <img src={shoe.url} alt={shoe.url} className=' max-h-60 ' />
                {shoe.name}
            </div>
        </>
    )
}

Item.propTypes = {
    shoe: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        // description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
    }).isRequired,
};

export default Item;