import React, { useState } from 'react'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { userInformationUpdate } from '../../redux/actions/form';

import Layout from '../../layouts/LayoutDefault'
import { Container, Row, Col } from 'react-bootstrap';
import Input from "../../components/Input";
import ButtonForm from "../../components/ButtonForm";

const Form = () => {


    const userName = useSelector(s => s.form.userName)
    const userSurname = useSelector(s => s.form.userSurname)
    const userMail = useSelector(s => s.form.userMail)
    const userCity = useSelector(s => s.form.userCity)
    const userDistrict = useSelector(s => s.form.userDistrict)


    // const dispatch = useDispatch()

    // const [newName, setNewName] = useState('')

    return (
        <Layout>
            <Container>
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-4" src="vercel.svg" alt="vercel" width="130"></img>
                    <h2>Checkout form</h2>
                    <p>{userName}, {userSurname}, {userMail}, {userCity}, {userDistrict}</p>
                    <p className="lead">Below is  an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                </div>
                <form>
                    <Row>
                        <Col>
                            <Input
                                label="İsim"
                                type="text"
                                uniqueId="formName"
                                placeholder="İsim giriniz."
                                error=''
                                value={userName}
                                required={false}
                            // handleChange={(e) => setName(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Input
                                label="Soyisim"
                                type="text"
                                uniqueId="formSurname"
                                placeholder="Soyisim giriniz."
                                error=''
                                value={userSurname}
                                required={false}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                                label="E-Mail"
                                type="mail"
                                uniqueId="formEmail"
                                placeholder="deneme@deneme.com"
                                error=''
                                value={userMail}
                                required={false}
                            />
                        </Col>
                        <Col>
                            <Input
                                label="Şehir"
                                type="text"
                                uniqueId="formCity"
                                error=''
                                value={userCity}
                                required={false}
                            />
                        </Col>
                        <Col>
                            <Input
                                label="İlçe"
                                type="text"
                                uniqueId="formDistrict"
                                error=''
                                value={userDistrict}
                                required={false}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>
                            <ButtonForm text="Gönder" block={true} disabled={false} />
                        </Col>
                    </Row>
                </form>
            </Container>

        </Layout>
    )
}

export default Form