import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@mui/icons-material';
import accounting from 'accounting';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ListItemIcon from '@mui/material/ListItemIcon';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';





const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Evento(props) {
  const {data}= props;
  const [expanded, setExpanded] = React.useState(false);
  const [available, setAvailable] = React.useState(true);
  const [disponibles, setDisponibles] = React.useState(10000);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const comprarBoleta= ()=>{
    if (available===false) {
      //decir que no hay boletas
    }else{
      setDisponibles(disponibles-1)
      if (disponibles===0) {
        setAvailable(false)
      }
    }    
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            //className={classes.action}
            variant = 'h5'
            color = 'textSecondary'
          >
             {accounting.formatMoney(data.precio, { symbol: "COP", format:"%v %s"})}
          </Typography>
        }
        title={data.nombre}
        subheader={data.fecha}
      />
      <CardMedia
        component="img"
        height="250"
        image={data.imglink}
        alt="Event Poster"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Añadir al carrito">
          <AddShoppingCart fontSize='large' />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary={"Lugar: "+data.lugar}/>
        </ListItem>
        <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary={"Ciudad: "+data.ciudad} />
        </ListItem>
        <ListItem>
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary={"Fecha: "+data.fecha} />
        </ListItem>
        <ListItem>
              <ListItemIcon>
                <ScheduleIcon />
              </ListItemIcon>
              <ListItemText primary={"Hora: "+ data.hora} />
        </ListItem>
        </CardContent>
      </Collapse>
    </Card>
  );
}