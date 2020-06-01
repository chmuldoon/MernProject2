import React, { Fragment, useEffect } from 'react'
import Navbar from '../main/Navbar';
import { getCocktail } from '../../actions/cocktail_actions';
import { connect } from 'react-redux';
const CocktailPage = ({match, drink, getCocktail, loading}) => {
  debugger
  useEffect(() => {
    debugger
    getCocktail(match.params.id)
  });

  return loading ? (
    <p>loading</p>
  ) : (
    drink && (
      <Fragment>
        <Navbar />
        <div className="mainArea">
          <div className="content">
            <b> {drink.name}</b>
            <img
              src={`https://www.thecocktaildb.com/images/media/drink/${drink.photo}`}
              alt=""
            />
            <p>{drink.instructions}</p>
          </div>
        </div>
      </Fragment>
    )
  );

}

const mapStateToProps = (state) => {
  return {
    drink: state.cocktails.cocktail,
    loading: state.cocktails.loading
  }
} ;

export default connect(mapStateToProps, {getCocktail})(CocktailPage)