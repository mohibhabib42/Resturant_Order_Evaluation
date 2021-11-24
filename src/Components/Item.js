import React from 'react'

import { colors } from '../Colors/Color'
import { ViewColumn } from '@mui/icons-material'
import { Card, CardMedia, CardContent, Typography, Button, CardActions, Grid} from '@mui/material'

function Item({Data , Add}) {
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card
                sx={{
                    padding: '0.5em'
                }}>
                    <CardMedia 
                    className="Itemimg"
                    sx={{
                        height: '150px',
                        objectFit: 'contain'
                    }} 
                    component="img"
                    alt="img"
                    image={ process.env.PUBLIC_URL + `${Data.img}`} rounded='true' />
                
                    <Typography
                        gutterBottom variant="h5" component="div"
                    > 
                        {Data.title} 
                    </Typography>

                    <Typography 
                        variant="body2" color="text.secondary"
                    > 
                        {Data.price} PKR 
                    </Typography>
                                                    
                    <Button 
                        onClick={() => Add(Data) }
                        target= "_blank" 
                        variant= "light" 
                        style={
                                {
                                backgroundColor: colors.primary,
                                color: colors.white
                                }
                            }>
                                Add
                    </Button>
            </Card>
        </Grid> 
    )
}

export default Item
