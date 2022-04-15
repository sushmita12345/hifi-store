import React from 'react';
import './Header.css';
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from 'axios';
import {CategoryCardApi} from "./CategoryCardApi";
import {CategoryPage} from "./CategoryPage";
import {useProduct} from "../../Context/productContext";




export function Header() {
    const {catProduct} = CategoryCardApi()
    const navigate = useNavigate();
    const {filterDispatch} = useProduct();
    console.log(catProduct)
    
    return (

        <div className="header-wrapper">
            <div className="cat-card-container">
                {
                    catProduct && catProduct.map(({category, img}) => {
                        return (
                            <div onClick={() => {
                                    filterDispatch({type: "CLEAR_FILTER"});
                                    filterDispatch({type: category.toUpperCase()});
                                    navigate("/product")
                                }}>
                                <div className="upper-section-1" >
                                <img className="upper-image" src={img} alt="category"/>
                                    <div className="upper-btn">{category}</div>
                                </div>
                            </div>

                        )
                    })
                }       
            </div>
            
            <CategoryPage />    
                        
        </div>
    )
}