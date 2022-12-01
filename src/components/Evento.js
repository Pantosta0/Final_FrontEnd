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

export default function Evento() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            //className={classes.action}
            variant = 'h5'
            color = 'textSecondary'
          >
             {accounting.formatMoney(199900, { symbol: "COP", format:"%v %s"})}
          </Typography>
        }
        title="Kings of Convenience"
        subheader="Jueves, 01 de Diciembre"
      />
      <CardMedia
        component="img"
        height="250"
        image="https://tuboleta.com/imagenes/62cc801d74bc7.png"
        alt="Event Poster"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Después de doce años de silencio el dúo noruego regresó con el celebrado disco Peace or Love y Bogotá será testigo de este reencuentro el 1ro de diciembre en el Teatro Jorge Eliécer Gaitán para una velada acústica y desprendida de uno de los corazones originales del indie folk como Kings of Convenience.
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
              <ListItemText primary="Lugar: Teatro Jorge Eliécer Gaitán" />
        </ListItem>
        <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Ciudad: Bogotá" />
        </ListItem>
        <ListItem>
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary="Fecha: 2022-12-01" />
        </ListItem>
        <ListItem>
              <ListItemIcon>
                <ScheduleIcon />
              </ListItemIcon>
              <ListItemText primary="Hora: 9:30pm" />
        </ListItem>
        </CardContent>
      </Collapse>
    </Card>
  );
}