import React , { useState, useEffect } from 'react'

import { colors } from '../Colors/Color'

import { Container, FormControl } from '@mui/material'
import { Input } from '@mui/material'
import { Select } from '@mui/material'
import { MenuItem } from '@mui/material'
import { InputLabel } from '@mui/material'
import { Box, padding } from '@mui/system'
import Button from '@mui/material/Button';

function UserProfile({Next}) {

    const [enable, setenable] = useState(false)

    const [Customer, setCustomer] = useState(
        {
            Name: '',
            Phone: '',
            Email: '',
            State: '',
            City: ''
        })
    
    const States = {
        NewYork: {
            city1 : 'Albany',
            city2 : 'Amsterdam',
            city3 : 'Auburn'
        },
        Pennsylvania: {
            city1 : 'Aliquippa',
            city2 : 'Allentown',
            city3 : 'Altoona'
        },
        Ohio: {
            city1 : 'Akron',
            city2 : 'Alliance',
            city3 : 'Alliance'
        }
        
    }; 
    
    const ChangeHandler = (event) => {

        setCustomer({
            ...Customer,
           [event.target.name]: event.target.value
        })

    }

    useEffect(() => {

        if(Customer.State != '')
        setenable(true)

    }, [Customer])

    const NextHandler = (event) => {

        event.preventDefault();

        if(Customer.City == '' || Customer.State == ''){
            alert("Choose State and City")            
        }else if(isValid(Customer.Phone)){
            Next(Customer)
        }else{
            alert("Enter Valid Number")
        }


    }

    function isValid(p) {
        var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
        var digits = p.replace(/\D/g, "");
        return phoneRe.test(digits);
    }

    return (
        <Container
            id="UserForm"
            style={{
                alignSelf: 'center',
                justifySelf: 'center',
                height:'fit-content',
                width: '50vw',
                minWidth:'280px',
                backgroundColor: colors.white,
                opacity: '0.9',
                borderRadius: '5px',
                padding: '3vw',
                boxSizing: 'content-box',
                boxShadow: '2px 3px 5px 5px #888888'
            }}
        >
            <form onSubmit= {NextHandler}>
                <FormControl 
                    style={{
                        minWidth: '100px',
                        margin:'1em'
                    }}
                >
                    <Input
                        placeholder= "Customer Name"
                        type= "text"
                        name= "Name"
                        value= {Customer.Name}
                        onChange= {ChangeHandler}
                        required
                    />
                </FormControl>

                <FormControl 
                    style={{
                        minWidth: '100px',
                        margin:'1em'
                    }}
                >
                    <Input
                        placeholder= "Phone"
                        type= "tel"
                        name= "Phone"
                        value= {Customer.Phone}
                        onChange= {ChangeHandler}
                        required
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    />
                </FormControl>

                <br/>

                <FormControl 
                    style={{
                        minWidth: '100px',
                        margin:'1em'
                    }}
                >
                    <Input
                        placeholder= "Email"
                        type= "email"
                        name= "Email"
                        value= {Customer.Email}
                        onChange= {ChangeHandler}
                        required
                    />
                </FormControl>

                <br/>

                <FormControl 
                    sx={{
                        minWidth: '100px',
                        margin: '1em'
                    }}
                >
                    <InputLabel id="demo-simple-select-label">State</InputLabel>
                    <Select 
                        labelId="demo-simple-select-label"
                        name="State"
                        onChange= {ChangeHandler}
                        required
                        >
                        <MenuItem value="NewYork" >New York</MenuItem>
                        <MenuItem value="Pennsylvania">Pennsylvania</MenuItem>
                        <MenuItem value="Ohio">Ohio</MenuItem>
                    </Select>
                </FormControl>

                <FormControl
                    sx={{
                        minWidth: '100px',
                        margin: '1em'
                        }}
                >
                    <InputLabel id="demo-simple-select-labe2">City</InputLabel>
                    <Select 
                        labelId="demo-simple-select-labe2"
                        name="City"
                        onChange= {ChangeHandler}
                        required
                        >
                        <MenuItem value={ enable ? States[Customer.State]['city1'] : "" } >{ enable ? States[Customer.State]['city1'] : "" }</MenuItem>
                        <MenuItem value={ enable ? States[Customer.State]['city2'] : "" } >{ enable ? States[Customer.State]['city2'] : "" }</MenuItem>
                        <MenuItem value={ enable ? States[Customer.State]['city3'] : "" } >{ enable ? States[Customer.State]['city2'] : "" }</MenuItem>
                    </Select>
                </FormControl>

                <br/>

                <FormControl
                    style={{
                        margin: '1em',
                        float: 'right'
                    }}
                >
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Next
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default UserProfile
