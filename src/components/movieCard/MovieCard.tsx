import React, {FC} from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import style from './movieCard.module.css'
import Box from "@mui/material/Box";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import IconButton from "@mui/material/IconButton";
import StarIcon from '@mui/icons-material/Star';
import {NavLink} from "react-router-dom";
import {MovieImg} from "./MovieImg";

type MovieCardType = {
    title: string
    imDbRating: string
    image: string
}

export const MovieCard: FC<MovieCardType> = (props) => {
    return (
        <Grid item className={style.movieBloc}>
            <Card>
                <NavLink to={'/movie'}>
                    <Box className={style.movieImg}>
                        <MovieImg height={'250'} image={props.image}/>
                        <div className={style.play}>
                            <IconButton size={"large"}>
                                <PlayCircleOutlineIcon/>
                            </IconButton>
                        </div>
                    </Box>
                </NavLink>
                <CardContent className={style.movieBody}>
                    <Typography gutterBottom variant="h5" component="div" className={style.movieName}>
                        {props.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" className={style.movieRating}>
                        <StarIcon/>
                        <Box component={"span"}>
                            {props.imDbRating}
                        </Box>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

