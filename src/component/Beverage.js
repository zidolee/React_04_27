import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Beverage extends Component {
    static defaultProps = {
        id : 0,
        url : "",
        name : "",
        price : 0
    }
    render() {
        const {url, name, price} = this.props;
        return (
            <Card >
                <CardActionArea>
                    <img width="120" height="150" src={url}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    {price}
                    </Typography>
                </CardContent>
                </CardActionArea>
                
          </Card>
        )
    }
}

export default Beverage;