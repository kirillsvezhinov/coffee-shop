import React from "react";

import { Days, Schedule, ScheduleWrapper, Time } from "./styles";
import { IScheduleInfo } from "./types";

const ScheduleInfo: React.FC<IScheduleInfo> = ({ schedule }) => {
    const { weekdays, weekends } = schedule;

    return (
        <Schedule>
            <ScheduleWrapper>
                <Days>Пн-Пт</Days>
                <Time>
                    {weekdays.start} - {weekdays.end}
                </Time>
            </ScheduleWrapper>
            <ScheduleWrapper>
                <Days>Сб-Вс</Days>
                <Time>
                    {weekends.start} - {weekends.end}
                </Time>
            </ScheduleWrapper>
        </Schedule>
    );
};

export default ScheduleInfo;
