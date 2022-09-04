import { KeyboardEvent, useEffect, useState } from "react";
import classes from "./KeyCodes.module.css";

type keyCodeInfo = {
  key: string;
  keyCode: number | any;
  code: string;
};

const KeyCodes = () => {
  const [keyInfo, setKeyInfo] = useState<keyCodeInfo>({
    key: "",
    keyCode: "",
    code: "",
  });

  const handleKeyDown = (e: KeyboardEvent | any) => {
    const event = e as KeyboardEvent;
    setKeyInfo({ key: event.key, keyCode: event.keyCode, code: event.code });
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, true);
  }, []);

  return (
    <div className={classes.container}>
      {keyInfo.code.length !== 0 && (
        <>
          <div className={classes.key}>
            <small>event.key</small>
            {keyInfo.key}
          </div>
          <div className={classes.key}>
            <small>event.keyCode</small>
            {keyInfo.keyCode}
          </div>
          <div className={classes.key}>
            <small>event.code</small>
            {keyInfo.code}
          </div>
        </>
      )}
      {keyInfo.code.length === 0 && (
        <div className={classes.key}>Press any key to get the keyCode</div>
      )}
    </div>
  );
};
export default KeyCodes;
