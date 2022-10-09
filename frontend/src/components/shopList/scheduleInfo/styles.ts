import styled from "styled-components";

import { COLORS } from "../../../styles/vars";

const Schedule = styled.div`
    padding-top: 16px;

    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const ScheduleWrapper = styled.div`
    display: flex;
    gap: 12px;

    color: ${COLORS["blackLight"]};
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
`;

const Days = styled.p`
    width: 54px;

    border-right: 1px solid ${COLORS["gray"]};
`;

const Time = styled.p`
    font-weight: 800;
`;

export { Days, Schedule, ScheduleWrapper, Time };
