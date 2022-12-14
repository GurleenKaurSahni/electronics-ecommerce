import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'
const ShippingScreen = ({ history }) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/payment')
    }
    return (
        <Container  className='mt-5 pt-5'>
        <FormContainer>
            <CheckoutSteps step1 />
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler} >
                <Form.Group className='mb-3' controlId='address' >
                    <Form.Label>Address</Form.Label>
                    <Form.Control type='text' required value={address} onChange={e => setAddress(e.target.value)} ></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='address'>
                    <Form.Label>City</Form.Label>
                    <Form.Control type='text' required label='Enter city' value={city} onChange={e => setCity(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='address'>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type='text' required label='Enter postal code' value={postalCode} onChange={e => setPostalCode(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='address'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type='text' required label='Enter country' value={country} onChange={e => setCountry(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='outline-primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
        </Container>
    )
}

export default ShippingScreen
