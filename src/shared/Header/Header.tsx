import React, {useEffect} from 'react';
import s from './Header.module.sass'
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import Select from 'react-select'
import {useTheme} from "../../hooks/useTheme";
import {changeCssRootVariables} from "../../model/ChangeCssRootVariables";
import {Theme} from "../../context/ThemeContext";

interface Props {
}

export const Header = (props: Props) => {
    const theme = useTheme()
    const options = [
        {value: 'city-1', label: 'Санк-Петербург'},
        {value: 'city-2', label: 'Москва'},
        {value: 'city-3 ', label: 'Новгород '},
    ]



    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === 'dark' ? '#4f4f4f' : 'rgba(71,147,255,0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === 'dark' ? '#fff' : '#000',
        })
    }


    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT )
    }



    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id={'header-logo'}/></div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id={'change-theme'}/>
                </div>
                <Select options={options} styles={colourStyles} defaultValue={options[0]}/>
            </div>
        </header>
    );
};
