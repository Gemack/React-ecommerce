import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height:30px;
    background-color: rgb(0, 255, 0);
    color: white;
    display:flex;
    align-items:center;
    justify-content:center;
`


const Announcement = () => {
    return (
        <Container>
            Free Delivery To Your Door..
        </Container>
    )
}

export default  Announcement