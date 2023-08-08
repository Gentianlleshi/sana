import React from "react";
interface GoToSecondButtonViewProps {
  onGoBack: () => void;
}
const CamomillaButtonView: React.FC<GoToSecondButtonViewProps> = ({
  onGoBack,
}) => {
  return (
    <div>
      <div>CamomillaButtonView</div>
      <button onClick={onGoBack}>Go Back</button>
    </div>
  );
};

export default CamomillaButtonView;
