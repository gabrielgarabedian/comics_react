import * as React from 'react';
import {Typography,Card,CardActions,CardContent,CardMedia,Button} from '@mui/material';
import "./Item.css"


/*const Item = ({ data }) => {
  return (
    data.map((per, i )=>
    
      
      <Card sx={{ maxWidth: 345 }} className='tarjeta' key={per.id}>
        <CardMedia
          sx={{ height: 400 }}
          image={per.imageUrl}
          title={per.firstName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {per.firstName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {per.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Comprar</Button>
          <Button size="small">Más Info</Button>
        </CardActions>
      </Card>
      
      )
  );
};

export default Item;*/

const Item = ({data}) => {
  return (
    
      
      <Card sx={{ maxWidth: 345 }} className='tarjeta' >
        <CardMedia
          sx={{ height: 350 }}
          image={data.imageUrl}
          title={data.firstName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {data.firstName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Comprar</Button>
          <Button size="small">Más Info</Button>
        </CardActions>
      </Card>
      
      )
  
};

export default Item;



