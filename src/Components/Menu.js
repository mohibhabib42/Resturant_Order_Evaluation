

import React ,{useState, useEffect} from 'react'
  
import { colors } from '../Colors/Color'

import { Container, Grid ,Typography, FormLabel, Box, Button } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Item from './Item'


function Menu({Profile}) {

    const [Cart, setCart] = useState([])
    const [Trigger, setTrigger] = useState(true)
    const [Total, setTotal] = useState(0)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        if(Total < 1){
            alert("Please add something to Cart")
        }else{
            setOpen(true);
        }
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const AddtoCart = (item) => {

        let obj = Cart.find((product, i) => {
            if (product.id == item.id) {
                Cart[i].quantity = Cart[i].quantity+1 ;
                return true; // stop searching
            }
        });

        if(!obj){
            Cart.push({
                title: item.title,
                quantity: 1,
                price: item.price,
                id: item.id
            })
        }
        
        let CloneTotal = 0;
        Cart.map((item) => {
            CloneTotal += item.price * item.quantity;
        })
        setTotal(CloneTotal);

        setTrigger(!Trigger)

    }

    useEffect(() => {

    }, [Trigger])

    const MenuItems = [
        {
            img: "/images/food1.jpg",
            title: "Cake",
            id: "1",
            price: 100
        },
        {
            img: "/images/food2.jpg",
            title: "Ice Creme",
            id:"2",
            price: 200
        },
        {
            img: "/images/food3.jpg",
            title: "Salad",
            id:"3",
            price: 500
        },
        {
            img: "/images/food4.jpg",
            title: "Burger",
            id:"4",
            price: 800
        },
        {
            img: "/images/food5.jpg",
            title: "Steak",
            id:"5",
            price: 1500
        }

    ]


    return (
        <>
            <Container
            id="Menu"
            style={{
                alignSelf: 'center',
                justifySelf: 'center',
                height: '90vh',
                minHeight: '500px',
                width: '50vw',
                minWidth:'280px',
                backgroundColor: 'transparent',
                borderRadius: '5px',
                boxSizing: 'content-box',
                overflow: 'auto',
            }}
            >

                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        MenuItems.map((item , i) => {
                            return(
                            
                                <Item 
                                key={i}
                                Data={item}
                                Add={AddtoCart}
                                />
                        
                            );
                        })
                    }
                </Grid>

            </Container>

            <Container
            id="Bill"
            style={{
                alignSelf: 'center',
                justifySelf: 'center',
                height:'80vh',
                width: '25vw',
                minWidth:'280px',
                backgroundColor: colors.white,
                opacity: '0.9',
                borderRadius: '5px',
                padding: '1vw',
                boxShadow: '2px 3px 5px 5px #888888',
            }}
            >
                <Container>
                    <Typography variant="h5" >
                        Customer Info
                    </Typography>
                    <br/>
                    <Typography>
                        Name: {Profile.Name}
                    </Typography>
                    <Typography>
                        Phone: {Profile.Phone}
                    </Typography>
                </Container>

                <br/>

                <Box 
                    sx={{
                        maxHeight: '300px',height:'40vh',
                        overflowY:'auto'
                    }}
                >
                    {
                        Cart.map((item , i) => {
                            return(
                                <Container 
                                    key= {i}
                                    style={{
                                        display:'flex',
                                        justifyContent:'space-between',
                                        alignItems:'center'
                                    }}
                                >
                                    <FormLabel>{item.title}</FormLabel>
                                    <Box>
                                        <FormLabel>{ item.price}</FormLabel>
                                        <FormLabel
                                            sx={{
                                                backgroundColor: 'lightgray',
                                                padding: '0 0.5em 0 0.5em',
                                                borderRadius : '20px',
                                                marginLeft: '5px'
                                            }}
                                        >{item.quantity}</FormLabel>
                                    </Box>
                                </Container>
                            );
                        })
                    }
                </Box>

                <br/>
                
                <Container 
                style={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center'
                }}>
                    <FormLabel>Total</FormLabel>
                    <FormLabel sx={{color:'black'}}>{Total} PKR</FormLabel>
                </Container>
                
                <Container sx={{
                    textAlign:'center',
                    marginTop: '0.5em'
                }}>
                    <Button onClick={handleClickOpen} variant="contained">
                        Done
                    </Button>
                </Container>

            </Container>

            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    {"Confirm?"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Please confirm your order
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} autoFocus>
                        Confirm
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}

export default Menu
