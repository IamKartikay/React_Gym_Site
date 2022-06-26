import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";

import { fetchData, exerciseOptions } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ bodyPart, exercises, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const LastExerciseIndex = exercisesPerPage * currentPage;
  const FirstExerciseIndex = LastExerciseIndex - exercisesPerPage;
  const ExercisesOnAPage = exercises.slice(
    FirstExerciseIndex,
    LastExerciseIndex
  );

  useEffect(() => {
    const fetchExercisesViaBodyPart = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesViaBodyPart();
  }, [bodyPart]);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1718, behavior: "smooth" });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="45px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {ExercisesOnAPage.map((exercise, index) => (
          <ExerciseCard exercise={exercise} key={index} />
        ))}
      </Stack>
      <Stack mt="140px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            variant="outlined"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            defaultPage={1}
            page={currentPage}
            onChange={paginate} //mui will return the value(page no) on its own
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
