import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import taya from "../assets/img/taya.png"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                <h1>{`Hi! I'm Taya.`}</h1>
                <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer" ]'><span className="wrap">{text}</span></span></h1>
                 <p> I moved to the United States after I graduated from college, and like everyone else, I had my American dream—to live a life doing something I enjoyed. 

I self-studied coding for months before attending Fullstack Academy. I am excited to start working in the tech industry. Feel free to connect with me on LinkedIn or send me an email! I look forward to chatting with you. </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
                  <img src={taya} alt="Header Img" id="header-img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
