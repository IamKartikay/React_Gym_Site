import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData, YTOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideosDetail, setExerciseVideosDetail] = useState([]);
  const [similarExercises, setSimilarExercises] = useState([])
  const [similarequipments, setSimilarEquipments] = useState([])

  useEffect(() => {
   window.scrollTo(0,0);
  }, [])
  

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDBurl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDBurl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      const similarExercisesData = await fetchData(`${exerciseDBurl}/exercises/bodyPart/${exerciseDetailData.bodyPart}`,
      exerciseOptions)

      const similarEquipmentData = await fetchData(`${exerciseDBurl}/exercises/equipment/${exerciseDetailData.equipment}`,
      exerciseOptions)
      
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        YTOptions
      );

      console.log(similarExercisesData);
      setExerciseDetail(exerciseDetailData);
      setExerciseVideosDetail(exerciseVideosData.contents);
      setSimilarExercises(similarExercisesData);
      setSimilarEquipments(similarEquipmentData)

    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideosDetail={exerciseVideosDetail}
        name={exerciseDetail.name}
      />
      <SimilarExercises similarExercises={similarExercises} similarequipments={similarequipments} targetedbodyPart={exerciseDetail.bodyPart}/>  
    </Box>
  );
};

export default ExerciseDetail;
