import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";


import styles from "assets/jss/material-kit-react/views/loginPage.js";
import CardHeader from "components/Card/CardHeader";

import image from "assets/img/signup.jpg";

const useStyles = makeStyles(styles);


export default function SelectCampagne(props) {



    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                absolute
                color="transparent"
                brand="Esport-Influence"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 100,
                    color: "dark"
                }}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>                                       
                              <CardHeader className={classes.CardHeader}>
                                        <h2 className={classes.title}>Campaign Selection</h2>
                                    </CardHeader>
                                    <Card style={{display:"flex", flexDirection: 'column', marginBottom:'5px' ,justifyContent:'space-between', width: "20rem"}}>
                                            <img
                                                style={{height: "180px", width: "100%", display: "block"}}
                                                className={classes.imgCardTop}
                                                src="..."
                                                alt="Card-img-cap"
                                            />
                                    <CardBody>
                                        <h4 className={classes.cardTitle}>Card title</h4>
                                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Button color="primary">Select</Button>  
                                    </CardBody>
                                    </Card>
                                    <Card style={{display:"flex", flexDirection: 'column', marginBottom:'5px' ,justifyContent:'space-between', width: "20rem"}}>
                                            <img
                                                style={{height: "180px", width: "100%", display: "block"}}
                                                className={classes.imgCardTop}
                                                src="..."
                                                alt="Card-img-cap"
                                            />
                                    <CardBody>
                                        <h4 className={classes.cardTitle}>Card title</h4>
                                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Button color="primary">Select</Button>  
                                    </CardBody>
                                    </Card>
                                    <CardFooter className={classes.cardFooter}>
                                    </CardFooter>                    
                    
                </div>

            </div>
        </div>


    );
}