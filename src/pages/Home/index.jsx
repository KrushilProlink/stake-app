import { Box, Card, CardActionArea, CardContent, CardMedia, LinearProgress, Typography } from "@mui/material";
import React from "react";
import CasinoImg from "../../assets/images/explore-casino-en.avif";
import SportImg from "../../assets/images/explore-sports-en.avif";
import GameSlider from "./components/GameCard";
import HistoryIcon from '@mui/icons-material/History';
import RacesCard from "./components/RacesCard";
const Home = () => {
    return (
        <Box className="container" mt={4}>
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" gap={2}>
                <Box width={{ xs: '100%', md: '50%' }}>
                    <Card sx={{ backgroundColor: '#1E2539', color: '#fff' }}>
                        <CardContent>
                            <Typography variant="h6">Krushil3</Typography>
                            <Typography variant="body2" sx={{ marginBottom: '0.5rem', marginTop: '20px' }}>Your VIP Progress</Typography>
                            <LinearProgress variant="determinate" value={1.62} sx={{ height: 10, borderRadius: 5, backgroundColor: '#2C3648', '& .MuiLinearProgress-bar': { backgroundColor: '#14C38E' } }} />
                            <Typography variant="body2" sx={{ marginTop: '0.5rem' }}>1.62%</Typography>
                            <Typography variant="body2">None <span style={{ color: '#FFD700' }}>Bronze</span></Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent={{ xs: "center", md: "flex-end" }} gap={2} width="100%">
                    <Card sx={{ maxWidth: { xs: '100%', sm: 300 }, background: "#213743" }} className="mainCard">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                sx={{ height: 'auto', objectFit: 'cover' }}
                                image={CasinoImg}
                                alt="casino"
                            />
                            <CardContent>
                                <Typography gutterBottom sx={{ color: "white" }}>
                                    Casino
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: { xs: '100%', sm: 300 }, background: "#213743" }}  className="mainCard">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                sx={{ height: 'auto', objectFit: 'cover' }}
                                image={SportImg}
                                alt="sportsbook"
                            />
                            <CardContent>
                                <Typography gutterBottom sx={{ color: "white" }}>
                                    Sportsbook
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Box>
            <Box mt={2}>
                <GameSlider title="Continue Playing" icon={<HistoryIcon />} />
            </Box>
            <Box mt={2}>
                <GameSlider title="Trending Games" />
            </Box>
            <Box mt={2}>
                <GameSlider title="Trending Sports" />
            </Box>
            <Box mt={2}>
                <RacesCard title="Trending Sports" />
            </Box>
        </Box>
    );
};

export default Home;
