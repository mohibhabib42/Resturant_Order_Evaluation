import React , {useState, useEffect} from 'react'

import { colors } from '../Colors/Color'

import { ListItem, Button, Typography } from '@mui/material'
import { Box } from '@mui/system';
import { AppBar } from '@mui/material';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import BackBtn from '@mui/icons-material/KeyboardBackspaceOutlined';

function Sidebar({active , Back}) {

    const Active = {
        padding: '1.5em 1vw 1.5em 1vw',
        fontSize: '1em',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        alignItems: 'center',
        color: colors.white,
        backgroundColor: colors.primary
    }
    const NonActive = {
        padding: '1.5em 1vw 1.5em 1vw',
        fontSize: '1em',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        alignItems: 'center',
        color: colors.light_black,
        backgroundColor: colors.white
    }

    const [Style1, setStyle1] = useState(Active)
    const [Style2, setStyle2] = useState(Active)
    const [ShowBack, setShowBack] = useState(false)

    useEffect(() => {
        if(active == 1){

            setStyle2(NonActive)
            setStyle1(Active)
            setShowBack(false)
    
        }else{
            
            setStyle1(NonActive)
            setStyle2(Active)
            setShowBack(true)
    
        }    
    }, [active])

    const backButton = () => {
    
        Back()
    
    }

    return (
        <Box 
        id="SideBar"
        style={{
            height: '100vh',
            width: 'fit-content',
            backgroundColor: colors.white,
            opacity : '0.9',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '2px 3px 5px 2px #888888'
        }}
        >   
            {
                ShowBack ?
                <Button onClick={ backButton } variant="light" >
                    <BackBtn/>
                </Button> :
                <>
                    <Button>

                    </Button>
                </>
            }

            <ul>
                <ListItem
                sx={Style1}>
                    <PersonOutlineOutlinedIcon/>
                    User
                </ListItem>

                <ListItem
                sx={Style2}>
                    <RestaurantMenuOutlinedIcon/>
                    Menu
                </ListItem>
            </ul>
        </Box>
    )
}

export default Sidebar
