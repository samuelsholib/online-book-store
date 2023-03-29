import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { RiPencilLine } from "react-icons/ri";
import axios from 'axios';
import { useSelector } from 'react-redux';

const AccountPage = () => {
    const userid = useSelector((state) => state.login.value.userid);

    const [profile, setProfile] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/userbyid/${userid}`).then((res) => {
            res.data.registrationDate = dateToString(res.data.registrationDate);
            res.data.lastLogin = dateTimeToString(res.data.lastLogin);
            setProfile(res.data);
        });
    }, []);

    const dateToString = (date) => {
        date = date.map(dt => dt>10 ? dt:`0${dt}`);
        const [year,month,day] =  date;
        return `${month}/${day}/${year}`;
    }
    const dateTimeToString = (dateTime) => {
    dateTime = dateTime.map(dt => dt>10 ? dt:`0${dt}`);
    let [year,month,day,hour,min,sec] = dateTime;
    return `${month}/${day}/${year} ${hour}:${min}:${sec}`;
    }  

    let navigate = useNavigate();

    return (
        <Container className="account-page">
            <Row className="justify-content-md-center mb-4">
                <Col md={6}>
                    <Card >
                        <Card.Header as="h5" bsPrefix="account-header">
                            Account Details
                        </Card.Header>
                        <Card.Body className='userbody'>
                            <Row>
                                <p><b>First name:</b> {profile.firstName}</p>
                            </Row>

                            <Row>
                                <p><b>Last name:</b> {profile.lastName}</p>
                            </Row>
                            <Row>
                                <p><b>Username:</b> {profile.username}</p>
                            </Row>
                            <Row>
                                <p><b>Email:</b> {profile.email}</p>
                            </Row>
                            <Row>
                                <p><b>Registration date:</b> {profile.registrationDate}</p>
                            </Row>
                            <Row>
                                <p><b>Last login:</b> {profile.lastLogin}</p>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>

    );
};

export default AccountPage;