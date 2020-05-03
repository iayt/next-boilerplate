import Layout from '../../layouts/LayoutDefault'
import { Container, Row, Col } from 'react-bootstrap';
import Input from "../../components/Input";
import ButtonForm from "../../components/ButtonForm";

const Form = () => {

    return (
        <Layout>
            <Container>
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-4" src="vercel.svg" alt="vercel" width="130"></img>
                    <h2>Checkout form</h2>
                    <p className="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
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
                                required={false}
                            />
                        </Col>
                        <Col>
                            <Input
                                label="Şehir"
                                type="text"
                                uniqueId="formCity"
                                error=''
                                required={false}
                            />
                        </Col>
                        <Col>
                            <Input
                                label="İlçe"
                                type="text"
                                uniqueId="formDistrict"
                                error=''
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