import React from "react";
import { Link } from "react-router-dom";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise, key }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            backgroundColor: "#ffa9a9",
            borderRadius: "20px",
            color: "#fff",
            fontSize: "14px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            backgroundColor: "#fcc757",
            borderRadius: "20px",
            color: "#fff",
            fontSize: "14px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        fontSize='22px'
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
