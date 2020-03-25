/* becodeorg/stream
 *
 * /src/components/root.js - Root Component
 *
 * coded by leny@BeCode
 * started at 25/03/2020
 */

import React, {useState, useCallback} from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import classnames from "classnames";

const RootComponent = () => {
    const [showMe, setShowMe] = useState(false);

    const handleShowMe = useCallback(() => setShowMe(true), [setShowMe]);

    let $content;

    if (showMe) {
        $content = <p>{"I will, I will."}</p>;
    } else {
        $content = (
            <div className={classnames("mt-3", "text-center")}>
                <Button variant={"outline-primary"} onClick={handleShowMe}>
                    {"No, show me!"}
                </Button>
            </div>
        );
    }

    return (
        <Container className={"my-3"}>
            <Row>
                <Col sm={{span: 4, offset: 4}}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{"Hello!"}</Card.Title>
                            <Card.Text>{"Do you know who I am?"}</Card.Text>
                            {$content}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default RootComponent;
