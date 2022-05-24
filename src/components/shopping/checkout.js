import React, { useState } from 'react';
import { Grid, Box, Paper, styled, Typography, Dialog, DialogTitle, DialogContent, FormControl, TextField, DialogActions, FormControlLabel, Checkbox, Divider } from '@mui/material';
import '../../styles/checkout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';
import { defaultEqualityCheck } from 'reselect';
import { Container } from '@mui/system';
import PaymentInputs from './paymentInputs';
import { splitDate } from '../../models/constants';
import { useDispatch, useSelector } from 'react-redux';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { actions } from '../../features/shoppingcartReducer';
import { Link, useNavigate } from 'react-router-dom';
import Getdata from './getData';


const Checkout = ({device}) => {

    let cartProducts = useSelector(state => state.shoppingCart);

    let dispatch = useDispatch();

    let navigate = useNavigate();

    const handleRemove = (movieId) => {
        dispatch(actions.removeMovie(movieId))
    };

    const StyledPaper = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(2),
        maxWidth: 400,
        color: theme.palette.text.primary
    }));

  //Shipping Adress -- Open select Dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen =() => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const shippingAdress = `Shipping Adress`;
  const shipmentInfo = `Shipping Info`;
  const payment = `Payment`;
  const summary = `Order Summary`;

  // GET DATA
  const [value, setValue] = useState("");
  const handleChange = e => {
      console.log(`Typed => ${e.target.value}`);
  }

    return (device === "web") ? (

        <div className='all_checkout'>
            
            <Box sx={{ flexGrow: 1 }} className= "checkout_container">
               
               <br/>
               <br/>
                
                <div className='info_container'>
                   <StyledPaper 
                     sx={{
                         bgcolor: '#2E2E2E',
                         color: '#FFFFFF',
                         my:3,
                         p:2
                      }}
                    >
                        <Grid container >
                            
                            <Grid item xs>
                                <Typography className='typ_info' variant="h6" noWrap>
                                  {shippingAdress}
                                </Typography>
                                <br/>
                                <div>
                                    <Button className='btn_input_checkout'            
                                     size="large"
                                     color="error"
                                     variant="contained"
                                     onClick={handleClickOpen}> + 
                                    </Button>
                                    
                                    
                                    <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                                        <DialogTitle> Please fill with your details: </DialogTitle>
                                        <DialogContent>
                                            <Box component= "form" >
                                                <FormControl sx={{ m:1, minWidth:520 }}>

                                                    <TextField
                                                     name='fname'
                                                     id="outlined-basic"
                                                     color="error"
                                                     label="First Name"
                                                     variant="outlined"
                                                     
                                                     onChange={handleChange} 
                                                     
                                                    />

                                                    <TextField
                                                     name="lname"
                                                     id="outlined-basic"
                                                     color="error"
                                                     label="Last Name"
                                                     margin="normal"
                                                     variant="outlined"
                                                     onChange={handleChange} 
                                                     >
                                                    </TextField>

                                                    <TextField
                                                     helperText="Please enter your Email" 
                                                     id="outlined-basic"
                                                     margin="normal"
                                                     color= "error"
                                                     variant="outlined"
                                                     onChange={handleChange} 
                                                     >
                                                    </TextField>

                                                    <TextField
                                                     helperText="Please enter your Adress"
                                                     color="error"
                                                     id="outlined-basic"
                                                     margin="normal"
                                                     variant="outlined"
                                                     onChange={handleChange} 
                                                     
                                                     >
                                                    </TextField>
                                                </FormControl>
                                            </Box>
                                        </DialogContent>
                                        
                                        <DialogActions>
                                            <Button variant="outlined" color="error" onClick={handleClose}>Cancel</Button>
                                            <Button variant="contained" color='error' onClick={handleClose}>OK</Button> 
                                        </DialogActions>
                                    </Dialog>
                                </div>
                            </Grid>
                        </Grid>
                   </StyledPaper>
                </div>

                <div className='shipment-info_container'>
                   <StyledPaper  
                      sx={{
                         bgcolor: '#2E2E2E',
                         color: '#FFFFFF',
                         my:3,
                         p:2
                      }}  
                    >
                       <Grid item xs>
                           <Typography variant='h6'>{shipmentInfo}</Typography>
                           <br/>
                           <Typography variant='subtitle'>
                                <div>
                                  <FormControlLabel
                                    control={<Checkbox defaultChecked color='error' />}
                                    label="3-5 Business Days" />
                                </div>{" "}
                                <br/>
                                <br/>
                                Free Shipping
                            </Typography>
                            
                            <Typography variant="subtitle2">Movie Collector Express</Typography>    
                       </Grid>
                   </StyledPaper>
                </div>

                <div className='payment_container'>
                    <StyledPaper sx={{
                         bgcolor: '#2E2E2E',
                         color: '#FFFFFF',
                         my:3,
                         p:2
                      }}  
                    >
                        <Grid item xs>
                        
                            <Typography variant='h6'>{payment}</Typography>
                           
                           <br/>
                           <div className='details_card_payment'>
                               <div className='Add_card'>
                                   <Grid item xs>
                                       <Typography className='add_card_title'></Typography>
                                       <PaymentInputs />
                                   </Grid>
                               </div>
                           </div>  
                        </Grid>
                    </StyledPaper>
                </div>

                <div className='shopping_bag'>
                   <StyledPaper sx={{
                         bgcolor: '#2E2E2E',
                         color: '#FFFFFF',
                         my:3,
                         p:2
                      }}  
                    >

                        <Grid item xs>
                            <Typography variant='h6'>Shopping Bag</Typography>
                        </Grid>
                        <br/>
                        <span>You have {cartProducts.length} items in your Shopping Bag</span>
                        <br/>
                        <ul className='cart_item_container checkout'>
                        {cartProducts.map(movie => (
                        <li key={movie.id} className='cart_item checkout'>

                            <img className='cart_item_image' src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}/>

                            <div className='cart_item_name'>
                              <span>{movie.title} <span style={{color: 'rgb(203, 203, 203)', fontWeight: 'lighter'}}>({splitDate(movie.release_date)})</span></span>
                              <span style={{fontWeight: 'lighter'}}>$8</span>
                            </div>

                            <aside className='cart_item_remove'>


                              <i onClick={() => handleRemove(movie.id)}>
                                 <FontAwesomeIcon icon={faXmark}/>
                              </i>
                              <br/>
                            </aside>
                        </li>
                        ))}
                        </ul>
                   </StyledPaper>
                </div>
            </Box>

            <Box className='order_summary_container'>
                    <StyledPaper sx={{
                         bgcolor: '#2E2E2E',
                         color: '#FFFFFF',
                         my:1,
                         p:3
                      }}
                    >
                        <Grid container >
                            <Grid item xs>
                                <Typography className='typ_info' variant="h6" >
                                  {summary}
                                </Typography>
                                <hr/>
                                <br/>
                                <Typography>Subtotal: ${cartProducts.length * 8}</Typography>
                                <br/>
                                <Typography>Shipment Charge: 0$</Typography>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <Typography>Grand Total: ${cartProducts.length * 8}</Typography>
                                <br/>
                                {/* <Link to="/orderConfirmation" className='cart_checkout_btn checkout'>PAY NOW</Link> */}
                                <button className='cart_checkout_btn checkout' onClick={() => navigate("/orderConfirmation")}>PAY NOW</button>
                            </Grid>
                        </Grid>
                   </StyledPaper>
            </Box>

        </div>
    )
    :
    (
        <div className='checkout_infos_mobile'>
            <br/>
            <br/>
              <div className='info_container'>
                   <StyledPaper 
                     sx={{
                         bgcolor: '#2E2E2E',
                         color: '#FFFFFF',
                         my:3,
                         p:2
                      }}
                    >
                        <Grid container >
                            
                            <Grid item xs>
                                <Typography className='typ_info' variant="h6" noWrap>
                                  {shippingAdress}
                                </Typography>
                                <br/>
                                <div>
                                    <Button className='btn_input_checkout'            
                                     size="large"
                                     color="error"
                                     variant="contained"
                                     onClick={handleClickOpen}> + 
                                    </Button>
                                    <br/>
                                    <h4>Name:  </h4>
                                    <h4>Email:</h4>
                                    <h4>Adress:</h4>
                                    
                                    
                                    <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                                        <DialogTitle> Please fill with your details: </DialogTitle>
                                        <DialogContent>
                                            <Box component= "form" >
                                                <FormControl sx={{ m:1, minWidth:280 }}>

                                                    <TextField
                                                     
                                                     id="fname"
                                                     color="error"
                                                     label="First Name"
                                                     variant="outlined"
                                                     
                                                     onChange={handleChange} 
                                                     
                                                    />

                                                    <TextField
                                                     
                                                     id="lname"
                                                     color="error"
                                                     label="Last Name"
                                                     margin="normal"
                                                     variant="outlined"
                                                     >
                                                    </TextField>

                                                    <TextField
                                                     helperText="Please enter your Email" 
                                                     id="email"
                                                     margin="normal"
                                                     color= "error"
                                                     variant="outlined"
                                                     >
                                                    </TextField>

                                                    <TextField
                                                     helperText="Please enter your Adress"
                                                     color="error"
                                                     id="adress"
                                                     margin="normal"
                                                     variant="outlined"
                                                     
                                                     >
                                                    </TextField>
                                                </FormControl>
                                            </Box>
                                        </DialogContent>
                                        
                                        <DialogActions>
                                            <Button variant="outlined" color="error" onClick={handleClose}>Cancel</Button>
                                            <Button variant="contained" color='error' onClick={handleClose}>OK</Button> 
                                        </DialogActions>
                                    </Dialog>
                                </div>
                            </Grid>
                        </Grid>
                   </StyledPaper>
                </div>

                <div className='shipment-info_container'>
                   <StyledPaper  
                      sx={{
                         bgcolor: '#2E2E2E',
                         color: '#FFFFFF',
                         my:3,
                         p:2
                      }}  
                    >
                       <Grid item xs>
                           <Typography variant='h6'>{shipmentInfo}</Typography>
                           <br/>
                           <Typography variant='subtitle'>
                                <div>
                                  <FormControlLabel
                                    control={<Checkbox defaultChecked color='error' />}
                                    label="3-5 Business Days" />
                                </div>{" "}
                                <br/>
                                <br/>
                                Free Shipping
                            </Typography>
                            
                            <Typography variant="subtitle2">Movie Collector Express</Typography>    
                       </Grid>
                   </StyledPaper>
                </div>

                <div className='payment_container'>
                    <StyledPaper sx={{
                         bgcolor: '#2E2E2E',
                         color: '#FFFFFF',
                         my:3,
                         p:2
                      }}  
                    >
                        <Grid item xs>
                        
                            <Typography variant='h6'>{payment}</Typography>
                           
                           <br/>
                           <div className='details_card_payment'>
                               <div className='Add_card'>
                                   <Grid item xs>
                                       <Typography className='add_card_title'></Typography>
                                       <PaymentInputs />
                                   </Grid>
                               </div>
                           </div>  
                        </Grid>
                    </StyledPaper>
                </div>

                <div className='shopping_bag'>
                   <StyledPaper sx={{
                         bgcolor: '#2E2E2E',
                         color: '#FFFFFF',
                         my:3,
                         p:2
                      }}  
                    >

                        <Grid item xs>
                            <Typography variant='h6'>Shopping Bag</Typography>
                        </Grid>
                        <br/>
                        <span>You have {cartProducts.length} items in your Shopping Bag</span>
                        <br/>
                        <ul className='cart_item_container checkout'>
                        {cartProducts.map(movie => (
                        <li key={movie.id} className='cart_item checkout'>

                            <img className='cart_item_image' src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}/>

                            <div className='cart_item_name'>
                              <span>{movie.title} <span style={{color: 'rgb(203, 203, 203)', fontWeight: 'lighter'}}>({splitDate(movie.release_date)})</span></span>
                              <span style={{fontWeight: 'lighter'}}>$8</span>
                            </div>

                            <aside className='cart_item_remove'>


                              <i onClick={() => handleRemove(movie.id)}>
                                 <FontAwesomeIcon icon={faXmark}/>
                              </i>
                              <br/>
                            </aside>
                        </li>
                        ))}
                        </ul>
                   </StyledPaper>
                </div>                

                <div className= "checkout_container_mobile">
                
                <div className='order_summary_container_mobile'>
                    <StyledPaper sx={{
                         bgcolor: '#2E2E2E',
                         color: '#FFFFFF',
                         my:1,
                         p:3
                      }}
                    >
                        <Grid container >
                            <Grid item xs>
                                <Typography className='typ_info' variant="h6" >
                                  {summary}
                                </Typography>
                                <hr/>
                                <br/>
                                <Typography>Subtotal: ${cartProducts.length * 8}</Typography>
                                <br/>
                                <Typography>Shipment Charge: 0$</Typography>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <Typography>Grand Total: ${cartProducts.length * 8}</Typography>
                                <br/>
                                {/* <Link to="/orderConfirmation" className='cart_checkout_mobile'>PAY NOW</Link> */}
                                <button className='cart_checkout_btn checkout' onClick={() => navigate("/orderConfirmation")}>PAY NOW</button>
                            </Grid>     
                        </Grid>
                    </StyledPaper>
                </div>
            </div>
        </div>
    )

}

export default Checkout;