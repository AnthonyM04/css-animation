import { Container, Row, Col } from "react-bootstrap";

export default function Page1() {
    return(
        <Container>
            <Row>
                <Col>H2: Element</Col>
            </Row>

            <Row>
                <Col>
                    <div className="box scale">
                        <p className="text-center text-white">Box-Scale</p>
                    </div>
                </Col>
                <Col>
                    <div className="box scale-x">
                        <p className="text-center text-white">Scale-x</p>
                    </div>
                </Col>
                <Col>
                    <div className="box rotate">
                        <p className="text-center text-white">rotate</p>
                    </div>
                </Col>
                <Col>
                    <div className="box skew">
                        <p className="text-center text-white">Skew</p>
                    </div>
                </Col>
                <Col>
                    <div className="box skew2">
                        <p className="text-center text-white">Skew2</p>
                    </div>
                </Col>
                <Col>
                    <div className="box translate">
                        <p className="text-center text-white">Translate</p>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                <div className="box1 bgcolor1">
                        <p className="text-center text-white">bgcolor 1</p>
                    </div>
                </Col>
                <Col>
                <div className="box2 bgcolor2">
                        <p className="text-center text-white">bgcolor 2</p>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                <div className="boxrace race1">Linear</div>
                <div className="boxrace race2">Ease</div>
                <div className="boxrace race3">Ease-in</div>
                <div className="boxrace race4">Ease-out</div>
                <div className="boxrace race5">Ease-in-out</div>
                </Col>
            </Row>
        </Container>
    )
}