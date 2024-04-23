import React from 'react'
import Card from './Card'

const Given = ({ n, t, it, ft, p, ip, fp, v, iv, fv, cp, cv, g }) => {
    return (
        <Card head="Given,">

            {n ? <>number of moles = {n} mol<br /></> : null}
            {t ? <>Constant temperature = {t} K<br /></> : null}
            {it ? <>Initial temperature = {it} K<br /></> : null}
            {ft ? <>Final temperature = {ft} K<br /></> : null}
            {p ? <>Constant pressure = {p} atm<br /></> : null}
            {ip ? <>Initial pressure = {ip} atm<br /></> : null}
            {fp ? <>Final pressure = {fp} atm<br /></> : null}
            {v ? <>Constant volume = {v} l<br /></> : null}
            {iv ? <>Initial volume = {iv} l<br /></> : null}
            {fv ? <>Final volume = {fv} l<br /></> : null}
            {cp ? <>Final volume = {cp} l<br /></> : null}
            {cv ? <>Final volume = {cv} l<br /></> : null}
            {g ? <>Final volume = {g} l<br /></> : null}


        </Card>
    )
}

export default Given