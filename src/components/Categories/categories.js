
import React from 'react';
import {connect} from 'react-redux';
import {active} from '../../store/products';
import Box from '@mui/material/Box';

let style1={ display: "flex", listStyle: "none", fontFamily: 'Cursive',color:"#ffb6c1",
justifyContent:"center",fontSize:"20px" ,margin: "3em 40em",padding:0,cursor:"pointer"}

function Categories (props){
    return (
        <section>
            <h1 style={{color:"grey"}}> Browes Our Categories</h1>
            <ul style={style1}>
                {
                    props.categories.categories.map(category =>
                        
                        {
                        return (
                            <>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                            <li  style ={{boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",backgroundColor:"grey"}} key = {category.name} onClick={()=> props.active(category.name)}>

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