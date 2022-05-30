
import React from 'react';
import {connect} from 'react-redux';
import {active} from '../../store/products';

function Categories (props){
    return (
        <section>
            <h1> Browes Our Categories</h1>
            <ul>
                {
                    props.categories.categories.map(category =>
                        
                        {
                        return (
                            <li key = {category.name} onClick={()=> props.active(category.name)}>

                                {category.displayName}

                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}


const mapStateToProps = (state) =>{
    return {categories : state.Categories}
} 
const mapDispatchToProps = { active } 
export default connect(mapStateToProps ,mapDispatchToProps )(Categories)