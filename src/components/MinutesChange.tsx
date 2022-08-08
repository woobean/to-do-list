import React from "react";
import { useRecoilState } from "recoil";
import { minutesState, hourSelect } from "../atoms";

function MinutesChange() {
  const [minutes, setMinutes] = useRecoilState(minutesState);
  const [hours, setHours] = useRecoilState(hourSelect);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hours}
        onChange={onHoursChange}
        type="number"
        placeholder="Hours"
      />
    </div>
  );
}

export default MinutesChange;
