import { Movie } from "../hooks/useMovies";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import AverageVote from "./AverageVote";

interface Props {
  movie: Movie;
}

const getPosterURL = (posterpath: string) => {
  return `https://media.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
};

const MovieCard = ({ movie }: Props) => {
  console.log(movie);

  return (
    <Card>
      <Image src={getPosterURL(movie.poster_path)} />
      <CardBody>
        <Heading fontSize="2xl">{movie.title}</Heading>
        <HStack justifyContent="space-between" paddingTop={"10px"}>
          <AverageVote score={movie.vote_average} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
