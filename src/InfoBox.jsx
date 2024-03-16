import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";


export default function InfoBox({ info }) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1710030733154-16b30a0f944f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1469122312224-c5846569feb1?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1477468572316-36979010099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : (info.temp > 15 ? HOT_URL : COLD_URL)}
                        title="green iguana"
                    /> 
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : (info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <div>Temperature = {info.temp}&deg;C</div>
                            <div>Humidity = {info.humidity}</div>
                            <div>Min Temp = {info.tempMin}&deg;C</div>
                            <div>Max Temp = {info.tempMax}&deg;C</div>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}