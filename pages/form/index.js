import React, { useState } from 'react'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { userInformationUpdate } from '../../redux/actions/form';

import Layout from '../../layouts/LayoutDefault'
import { Container, Row, Col } from 'react-bootstrap';
import Input from "../../components/Input";
import ButtonForm from "../../components/ButtonForm";

const Form = () => {
    const dispatch = useDispatch()

    const userName = useSelector(s => s.form.userName)
    const userSurname = useSelector(s => s.form.userSurname)
    const userMail = useSelector(s => s.form.userMail)
    const userCity = useSelector(s => s.form.userCity)
    const userDistrict = useSelector(s => s.form.userDistrict)

    const [name, setName ] = useState('')
    const [surname, setSurname ] = useState('')
    const [mail, setMail ] = useState('')
    const [city, setCity ] = useState('')
    const [district, setDistrict ] = useState('')


   

    async function handleClickUserInfoUpdate(e) {
        e.preventDefault()
        dispatch(userInformationUpdate(name,surname,mail,city,district))
    }
    


    return (
        <Layout>
            <Container>
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-4" src="vercel.svg" alt="vercel" width="130"></img>
                    <h2>Checkout form</h2>
                    <p>{userName}, {userSurname}, {userMail}, {userCity}, {userDistrict}</p>
                    <p className="lead">Below is  an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                </div>
                <form onSubmit={handleClickUserInfoUpdate}>
                    <Row>
                        <Col>
                            <Input
                                label="İsim"
                                type="text"
                                placeholder="İsim giriniz."
                                error=''
                                required={false}
                                handleChange={e => setName(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Input
                                label="Soyisim"
                                type="text"
                                placeholder="Soyisim giriniz."
                                error=''
                                required={false}
                                handleChange={e => setSurname(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                                label="E-Mail"
                                type="mail"
                                placeholder="deneme@deneme.com"
                                error=''
                                required={false}
                                handleChange={e => setMail(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Input
                                label="Şehir"
                                type="text"
                                error=''
                                required={false}
                                handleChange={e => setCity(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Input
                                label="İlçe"
                                type="text"
                                error=''
                                required={false}
                                handleChange={e => setDistrict(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 4, offset: 4 }} >
                            <ButtonForm text="Gönder" block={true} disabled={false} />
                        </Col>
                    </Row>
                </form>
            </Container>

        </Layout>
    )
}


/*
Index.getInitialProps = async () => {
	const res = await fetch('https://api.server/deneme')
	const json = await res.json()
	return { data: json.falanfilan }
}
*/

export default Form