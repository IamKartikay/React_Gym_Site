import React, { useContext, Link } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import Loader from './Loader';
import HorizontalScrollbar from "./HorizontalScrollbar";

const SimilarExercises = ({ similarExercises, similarequipments, targetedbodyPart,}) => {

  return (
    <Box sx={{ marginTop: { lg: "50px", xs: "0" }, p: "20px", ml: "30px", mb:'100px' }}>
      

      <Typography variant="h3" mb="33px">
        Similar Exercises for{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {targetedbodyPart}
        </span>{" "}
      </Typography>

      <Stack position= 'relative' >
        {similarExercises.length ? <HorizontalScrollbar data={similarExercises}/> : <Loader/>}
      </Stack>


      <Typography variant="h3" mb="33px" mt='100px'>
        Exercises with similar{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          equipment
        </span>{" "}
      </Typography>

      <Stack position= 'relative' >
        {similarequipments.length ? <HorizontalScrollbar data={similarequipments}/> : <Loader/>}
      </Stack>


    </Box>
  );
};

export default SimilarExercises;
