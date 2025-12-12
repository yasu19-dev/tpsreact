
import PropTypes from 'prop-types'


function Lists(props){
    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li> //Affiche avec la condition de filter
    )
    return (<>
    <h3 className="list-category">{category}</h3>
    <ul className="list-items">{listItems}</ul>
    </>);
}

Lists.propTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number}))
}
Lists.defaultProps = {
    category: 'Category',
    items: [],
}


export default Lists