import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function InfoBox({ info }){
    const INIT_URL='https://images.unsplash.com/photo-1621260938401-7bdad0aec8fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHl8ZW58MHx8MHx8fDA%3D';

    return(
        <>
        <Card sx={{ maxWidth: 345 }}>

            <CardMedia
                sx={{ height: 140 }}
                image={INIT_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                </Typography>
                <br></br>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Temperature: {info.temp}°C
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Country: {info.country}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Visibility: {info.visibility} m
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Wind Speed: {info.wind} m/s

                </Typography>
            </CardContent>
            
        </Card>
    </>
    )
}
export default InfoBox
