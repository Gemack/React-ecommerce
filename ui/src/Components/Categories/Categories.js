import React from 'react'
import styled from 'styled-components';
import { categories } from '../../Data/data';
import CategoryItems from './CategoryItem';

const Container = styled.div`
    margin-top:2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 0.2rem;
    
`
const Categories = () => {
    return (
        <Container>
            {
             categories.map(item=>(
                <CategoryItems item={item} key ={item.id}/>
                ))
            }
        </Container>
    )
}

export default Categories
