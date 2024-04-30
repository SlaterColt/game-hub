import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function AverageVote({ score }: Props) {
  const formattedScore = Math.round(score * 10);

  const color =
    formattedScore > 75 ? "green" : formattedScore > 60 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize={14} paddingX={2} borderRadius={"4px"}>
      {formattedScore}
    </Badge>
  );
}

export default AverageVote;
