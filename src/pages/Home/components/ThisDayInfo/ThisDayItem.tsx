import React from 'react';
import {Item} from "./ThisDayInfo";
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";
import s from './ThisDayInfo.module.sass'
import {IndicatorSvgSelector} from "../../../../assets/icons/indicators/IndicatorSvgSelector";
interface Props {
    item: Item
}

export const ThisDayItem = ({item}: Props) => {
    const {icon_id,name,value} = item
    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <IndicatorSvgSelector id={icon_id}/>
            </div>
            <div className={s.indicator_name}>{name}</div>
            <div className={s.indicator_value}>{value}</div>
        </div>
    );
};
