// Вынести кнопки навигации.

import { Link } from "react-router-dom";

import { Button } from "../../../../shared/componets/Button/Button";

export const NavigateButtons = () => {
  return (
    <div>
      <Link to="/start">
      <Button
          title={"Страница 1"}
          btnClass="reset-button__settings-button"
          spanClass="reset-button__settings-button"
        />
      </Link>
      <Link to="/third">
        <Button
          title={"Страница 3"}
          btnClass="reset-button__settings-button"
          spanClass="reset-button__settings-button"
        />
      </Link>
    </div>
  );
};
