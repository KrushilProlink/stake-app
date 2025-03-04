
import React from 'react';
import Slider from 'react-slick';
import CircleIcon from '@mui/icons-material/Circle';
import { Card, CardContent, Typography, Box, CardMedia } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const games = [
  { name: 'DICE', img: "https://mediumrare.imgix.net/30688668d7d2d48d472edd0f1e2bca0758e7ec51cbab8c04d8b7f157848640e0?w=360&h=472&fit=min&auto=format", players: 3717 },
  { name: 'MINES', img: "https://mediumrare.imgix.net/15a51a2ae2895872ae2b600fa6fe8d7f8d32c9814766b66ddea2b288d04ba89c?w=360&h=472&fit=min&auto=format", players: 5696 },
  { name: 'PLINKO', img: "https://mediumrare.imgix.net/5cbb2498c956527e6584c6af216489b85bbb7a909c7d3c4e131a3be9bd1cc6bf?w=360&h=472&fit=min&auto=format", players: 2166 },
  { name: 'KENO', img: "https://mediumrare.imgix.net/c06ffbd9ac77f592824e0393517914beab310640bcba1cca51731c141d8fa566?w=360&h=472&fit=min&auto=format", players: 1217 },
  { name: 'NINE TO FIVE', img: "https://mediumrare.imgix.net/e0a4131a16c28a1c1516958c93ec90c6f0f1bb00f41de87f72f6800c535b9c6f?w=360&h=472&fit=min&auto=format", players: 10 },
  { name: 'WHEEL', img: "https://mediumrare.imgix.net/f95b3adf9d28d57496dd8da909c0cb97515104194924c5abb4cc9ad792f35dfe?w=360&h=472&fit=min&auto=format", players: 634 },
  { name: 'SWEET BONANZA', img: "https://mediumrare.imgix.net/356614c3d116d7c261248b0263986cae24e69a0807cb2d974ade9141820fa85c?w=360&h=472&fit=min&auto=format", players: 92 },
];

const GameCard = ({ game }) => {
  return (
    <Card sx={{ width: '100%', backgroundColor: "transparent", borderRadius: 3, boxShadow: 0 }}>
      <CardContent sx={{ padding: 0 }}>
        <CardMedia
          component="img"
          sx={{ width: '100%' ,borderRadius:3,height: 'auto', objectFit: 'cover' }}
          image={game.img}
          alt={game.name}
          className="gameCard"
        />
        <span className='text-white d-flex align-items-center'><CircleIcon style={{ fontSize: "10px", color: "#1fff20", marginRight: "5px" }} />{game?.players}<span style={{ color: "#b1bad3",marginLeft:"5px" }}>playing</span> </span>
      </CardContent>
    </Card>
  );
};
const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return <div className={`${className} custom-next-arrow`} onClick={onClick}></div>;
};

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return <div className={`${className} custom-prev-arrow`} onClick={onClick}></div>;
};

const GameSlider = ({ title, icon }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2}>
        <span className='d-flex align-items-center'>{icon} <span className='ps-1'>{title}</span> </span>
      </Typography>
      <Slider {...settings}>
        {games.map((game, index) => (
          <Box key={index} px={1}>
            <GameCard game={game} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default GameSlider;
