import { Tooltip } from "react-tooltip";
import theme from "../../styles/theme";

interface ToolTipProps {
  id: string;
  title: string;
  backgroundColor?: string;
}

const ToolTipCustom = ({ id, title, backgroundColor }: ToolTipProps) => {
  const tooltipStyle = {
    backgroundColor: theme.colors.redF3A,
    color: theme.colors.redF63,
    fontFamily: theme.fonts.fontOpenSans,
    fontSize: 14,
    borderRadius: 6,
    maxWidth: 230,
    zIndex: 999,
    "--rt-opacity": 1,
  };

  return (
    <>
      <Tooltip
        id={id}
        style={tooltipStyle}
        place="top"
        globalCloseEvents={{ scroll: true, escape: true, resize: true }}
        content={title}
      />
    </>
  );
};

export default ToolTipCustom;
