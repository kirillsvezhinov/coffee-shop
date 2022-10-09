import React from "react";
import { useNavigate } from "react-router-dom";

import ButtonColored from "../../../shared/UI/buttons/buttonColored/index";
import { COLORS } from "../../../styles/vars";
import photo from "../../productDetail/photo";
import CatalogInfo from "../catalogInfo/index";
import ScheduleInfo from "../scheduleInfo/index";
import { Card, DetailInfoStyled } from "./styles";
import { IDetailInfo } from "./types";

const DetailInfo: React.FC<IDetailInfo> = ({ color, slug, schedule, photos, categories }) => {
    const navigate = useNavigate();

    function handleButton() {
        navigate(`/shop-list/${slug}/breakfast`, { replace: true });
    }
    
    return (
        <DetailInfoStyled>
            <Card>
                <CatalogInfo
                    color={color}
                    categories={categories}
                />
                <ScheduleInfo schedule={schedule} />
            </Card>
            {photos.length !== 0 && (
                <div>
                    <p>Фотографии заведения</p>
                </div>
            )}
            <ButtonColored
                clr={COLORS["white"]}
                position={"absolute"}
                right={22}
                bottom={-20}
                bc={color}
                click={handleButton}
            >
                Выбрать
            </ButtonColored>
        </DetailInfoStyled>
    );
};

export default DetailInfo;
