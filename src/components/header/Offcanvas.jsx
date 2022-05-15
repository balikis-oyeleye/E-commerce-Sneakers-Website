import { useState } from "react";
import { Badge, Offcanvas, Nav } from "react-bootstrap";
import { useGlobalContext } from "../../context/Context";
import { BsCart } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

function Sidebar() {
  const { itemCount } = useGlobalContext();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="sidebar">
      <button className="btn-show" onClick={handleShow}>
        <BiMenu size={27} />
      </button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <div className="cart">
            <BsCart size={25} />
            <Badge pill bg="warning">
              {itemCount}
            </Badge>
          </div>
          <Offcanvas.Title>Sneakers</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Item>
              <Nav.Link>New Arrivals</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Sandal Shop</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Summer Shop</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Shoes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Watches</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Children</Nav.Link>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Sidebar;
