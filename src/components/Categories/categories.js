
import React from 'react';
import {connect} from 'react-redux';
import {active} from '../../store/products';
import Box from '@mui/material/Box';

function Categories (props){
    return (
        <section>
            <h1 style={{color:"grey"}}> Browes Our Categories</h1>
            <ul>
                {
                    props.categories.categories.map(category =>
                        
                        {
                        return (
                            <>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                            <li key = {category.name} onClick={()=> props.active(category.name)}>

                                {category.displayName}

                            </li>
                            </Box>
                            </>
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