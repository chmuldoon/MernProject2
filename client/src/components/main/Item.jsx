import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from '../../actions/cocktail_actions'
import { Card, Badge, Popover, OverlayTrigger } from "react-bootstrap";
import Tequila from "../major/Tequila";
import Vodka from "../major/Vodka";
import Gin from "../major/Gin";
import TripleSec from "../major/TripleSec";
const Item = ({ mustHave, favorites,favoritesPage, using, drink, addFavorite, removeFavorite}) => {
   const [show, setShow] = useState(false);
   const [target, setTarget] = useState(null);
   const ref = useRef(null);
  const _isMustHave = (item) => {
    return mustHave.includes(item.toLowerCase().trim())
      ? "#fca103"
      : "#4CA64C";
  }
  
  
  const checkedNum = () => {
    let count  = 0
    drink.using2.forEach(el => {
      if(using.includes(el)) count++
    })
    return count
  }
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );

  if (!drink) {
    return null;
  }
  return (
    <div style={{ marginLeft: "20px", marginRight: "20px", marginBottom: "20px" }}>
      <OverlayTrigger trigger="hover" placement="auto" overlay={popover}>
      <Card style={{ width: "18rem", border: "none"}}>
        <Link to={`/cocktails/${drink._id}`}>
          <Card.Img
            variant="top"
            src={`https://www.thecocktaildb.com/images/media/drink/${drink.photo}`}
          />
        </Link>
        <Card.Body>
          <Link to={`/cocktails/${drink._id}`}>
            <Card.Title style={{overflow:"hidden"}}>{drink.name.slice(0, 25)}
            {drink.name.length > 25 && "..."}
            </Card.Title>
          </Link>
          {drink.using2.includes("5e9d51a19a6bb767c4002b9e") && <Vodka
            dimension="30px"
            used={true}
          />}
          <Gin
            dimension="30px"
            used={drink.using2.includes("5e9d51a19a6bb767c4002b9f")}
          />
          <TripleSec
            dimension="30px"
            used={drink.using2.includes("5e9d51a29a6bb767c4002d24")}
          />
          <Tequila
            dimension="30px"
            used={drink.using2.includes("5e9d51a19a6bb767c4002ba1")}
          />
          <Card.Text>
            {checkedNum()} out of {drink.using2.length} ingredients
          </Card.Text>

        </Card.Body>

        {/* <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup> */}
      </Card>
        </OverlayTrigger>
    </div>
    // <div className="drinkCard">

    //   <div>
    //     {/* <p>{drink.strCategory}</p> */}
    //     <img
    //       src={`https://www.thecocktaildb.com/images/media/drink/${drink.photo}`}
    //       style={{ width: "100%", marginBottom: "10px" }}
    //       alt=""
    //     />

    //     <Link to={`/cocktails/${drink._id}`}>
    //       <p
    //         className="drinkTitle"
    //         style={{ width: "100%", textAlign: "center" }}
    //       >
    //         {drink.name}
    //       </p>
    //     </Link>
    //   </div>
    //   {renderIngredients(drink)}
    // </div>
  );
}




export const DrinkCard = styled.div`
  width: 260px;
  height: 530px;
  // border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 20px;
  margin-bottom: 20px;
  background-color: white;
  .drinkTitle {
    font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-size: 1.233333rem;
    font-weight: 500;
    padding: 0, 10px, 0, 10px;
  }


`;


export default connect(null, {addFavorite, removeFavorite})(Item);