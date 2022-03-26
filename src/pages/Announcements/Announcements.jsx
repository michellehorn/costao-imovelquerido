import { WarningIcon } from "./styles";
import { Aligner, Text } from "../../styles";
import { colors,fontSize, weight} from "../../theme";

const Announcements = () => {
  return (
    <Aligner direction="center" flex>
      <Text weight={weight.bold} padding="0 10px 15px 0" fontSize={fontSize.label} color={colors.secondary} textAlign="center">
        Avisos
      </Text>
      <WarningIcon width="15px" height="15px" />
    </Aligner>
  );
};

export default Announcements;
