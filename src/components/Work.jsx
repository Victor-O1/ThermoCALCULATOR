import React, { useEffect, useState } from 'react'
import Field from './Field';
import Card from './Card';
import Given from './Given';

const Work = () => {
    const [pro, setpro] = useState("none");
    const [n, setn] = useState("");
    const [t, sett] = useState("");
    const [it, setit] = useState("");
    const [ft, setft] = useState("");
    const [p, setp] = useState("");
    const [ip, setip] = useState("");
    const [fp, setfp] = useState("");
    const [v, setv] = useState("");
    const [iv, setiv] = useState("");
    const [fv, setfv] = useState("");
    const [cp, setcp] = useState("");
    const [cv, setcv] = useState("");
    const [g, setg] = useState("");
    const [s, sets] = useState("");
    const [h, seth] = useState("");
    const [work, setwork] = useState("");
    const [text, settext] = useState("");


    useEffect(() => {
        if (cv) { setcp(Number(cv) + 8.314); setg(cp / cv) }
        else {
            setcp("");
            setg("");
        }
    }, [cv])
    useEffect(() => {
        if (cp) { setcv(Number(cp) - 8.314); setg(cp / cv) }
        else {
            setcv("");
            setg("");
        }
    }, [cp])
    useEffect(() => {
        if (pro == "isothermal") {
            if (iv && fv) {
                setwork((-1) * (n) * (8.314) * (t) * (Math.log(fv / iv)))
                sets((n) * 8.314 * (Math.log(fv / iv)))
            }
            else { setwork((-1) * (n) * (8.314) * (t) * (Math.log(ip / fp))) }
        }
        else if (pro == "isobaric") {
            sets((n) * (cp) * Math.log(ft / it));
            if (iv && fv) {
                setwork((p) * (fv - iv))
            }
            else { setwork((n) * (8.314) * (ft - it)) }
        }
        else if (pro == "isochoric") { setwork(0); sets((n) * (cv) * Math.log(ft / it)); }
        else if (pro == "adiabatic") {
            sets(0)
            setwork((n) * (cv) * (ft - it))
            seth((n) * (cp) * (ft - it))
        }

    },
        [n, t, it, ft, p, ip, fp, v, iv, fv, pro, cp, cv, g, s]
    )
    const handlesubmit = (e) => {
        e.preventDefault();
        if (pro == "isothermal") {
            settext((prev) => <>{prev}
                <Given n={n} t={t} it={it} ft={ft} p={p} ip={ip} fp={fp} v={v} iv={iv} fv={fv} cp={cp} cv={cv} g={g} />
                <Card head="Solution">
                    △U = 0 (since, △U = q<sub>v</sub> = nC<sub>v</sub>△T and △T = 0)<br />
                    △H = 0 (since, △H = q<sub>p</sub> = nC<sub>p</sub>△T and △T = 0)<br />
                    So, as per 1st law of Thermodynamics, <br />W = q =
                    {iv && fv ?
                        <>-nRT ln(V2/V1) = -{n}*{8.314}*{t}*ln({fv}/{iv}) = {work} J<br />Change in entropy for isothermal process is
                            △S = nR ln(V2/v1) = {n} * 8.314 * ln({fv}/{iv}) = {s} J/K</> : <>(-nRT ln(P1/P2) = -{n}*{8.314}*{t}*ln({ip}/{fp}) = {work} J)</>}
                    <br />
                    <br />


                </Card>

            </>)
        }
        if (pro == "isobaric") {
            setwork((-1) * (n) * (8.314) * (t) * (Math.log(fv / iv)))
            console.log("change in internal energy is 0 and change in enthaply is 0", work);
            settext((prev) => <>{prev}        <Given n={n} t={t} it={it} ft={ft} p={p} ip={ip} fp={fp} v={v} iv={iv} fv={fv} cp={cp} cv={cv} g={g} />

                <Card head="Solution">
                    In isobaric process, △P = 0 and so, <br />
                    W = p△V = nR△T<br />
                    Also, q<sub>p</sub> = △H = nC<sub>p</sub>△T<br />

                </Card>

            </>)
        }
        if (pro == "isochoric") {
            setwork((-1) * (n) * (8.314) * (t) * (Math.log(fv / iv)))
            console.log("change in internal energy is 0 and change in enthaply is 0", work);
            settext((prev) => <>{prev}
                <Given n={n} t={t} it={it} ft={ft} p={p} ip={ip} fp={fp} v={v} iv={iv} fv={fv} cp={cp} cv={cv} g={g} />

                <Card head="Solution">
                    W = 0<br />
                    q<sub>v</sub> = △H = nC<sub>v</sub>△T<br />
                    Change in entropy △S = {s}
                </Card>

            </>)
        }
        if (pro == "adiabatic") {
            setwork((-1) * (n) * (8.314) * (t) * (Math.log(fv / iv)))
            console.log("change in internal energy is 0 and change in enthaply is 0", work);
            settext((prev) => <>{prev}
                <Given n={n} t={t} it={it} ft={ft} p={p} ip={ip} fp={fp} v={v} iv={iv} fv={fv} cp={cp} cv={cv} g={g} />

                <Card head="Solution">
                    In adiabatic processes, no heat exchange takes place, therefore, q=0<br />
                    So, as per 1st law of Thermodynamics, W = △U <br />
                    {cv && it && ft && n ? <>W = △U = nC<sub>v</sub>△T = {n}x{cv}x{ft - it} = {work}</> : null}

                </Card>

            </>)
        }


    }
    return (
        <>
            <div className="bg-gray-600 min-h-screen flex  justify-left">
                <form onSubmit={handlesubmit}>
                    <div className="bg-gradient-to-tl from-red-300 to-orange-400 p-8 rounded-3xl shadow-md w-full sm:w-96 m-2">
                        <h2 className="text-2xl font-semibold mb-4 text-center">ThermoCALCULATOR</h2>
                        <div className='mb-4'>
                            <select value={pro} onChange={(e) => {
                                setpro(e.target.value);
                                setn("");
                                sett("");
                                setit("");
                                setft("");
                                setp("");
                                setip("");
                                setfp("");
                                setv("");
                                setiv("");
                                setfv("");
                                setcp("");
                                setcv("");
                                setg("");

                                if (e.target.value == "isothermal") {
                                    settext(<Card img="isot" head="Isothermal process">An isothermal process is a thermodynamic process in which the temperature of a system remains constant. The transfer of heat into or out of the system happens so slowly that thermal equilibrium is maintained. At a particular constant temperature, the change of a substance, object or system is known as the Isothermal Process. Usually, there are two phenomena under which this process can take place. If a system is in contact with a thermal reservoir from outside, then, to maintain thermal equilibrium, the system slowly adjusts itself with the temperature of the reservoir through heat exchange. In contrast, in another phenomenon, no heat transfer occurs between a system and its surrounding. In this process, the temperature of the system is changed in order to keep the heat constant. This process is known as the Adiabatic Process.</Card>)
                                }
                                else if (e.target.value == "isobaric") {
                                    settext(<Card img="isob" head="Isotbaric process">Isobaric process refers to constant pressure, when other factors like temperature or volume can change in a system. Let’s take one real-life example, imagine a soda can that is at normal room temperature. You put it inside the refrigerator for an hour. Throughout this process of changing the temperature of the soda, the pressure inside the soda can remains the same. Whenever pressure is constant and other factors change, we refer to it as an isobaric process.                                    Although temperature, volume, and internal energy may differ, pressure remains constant throughout the process. In equilibrium thermodynamics, which deals with the transfer of energy from one state to another, the Isobaric process plays a vital role in understanding the behavior to analyze any system.</Card>)
                                }
                                else if (e.target.value == "isochoric") {
                                    settext(<Card img="isoc" head="Isochoric process">Isochoric process is also known as a constant-volume process. It is a thermodynamic process where the total volume of the system remains constant and so the work done in this process is zero.

                                        An example of an isochoric process is when air is heated or called in a closed container its volume always remains constant.

                                        Isochoric Process Formula
                                        Isochoric process is defined as the thermodynamic proess in which the volume of the system remained constant so the the change in volume is zero and hence the work done by the gas is zero. For Isochoric Process, change in Volume(△V) = 0
                                        <br />
                                        Now, work done by the gas is,
                                        W = P.△V = P.0 = 0
                                    </Card>)
                                }
                                else if (e.target.value == "adiabatic") {
                                    settext(<Card img="adia" head="Adiabatic process">An adiabatic process is defined as

                                        The thermodynamic process in which there is no exchange of heat from the system to its surrounding neither during expansion nor during compression.

                                        The adiabatic process can be either reversible or irreversible. Following are the essential conditions for the adiabatic process to take place:

                                        The system must be perfectly insulated from the surrounding.
                                        The process must be carried out quickly so that there is a sufficient amount of time for heat transfer to take place.Following is the adiabatic process equation:

                                        PVγ = constant
                                        Where,

                                        P is the pressure of the system
                                        V is the volume of the system
                                        γ is the adiabatic index and is defined as the ratio of heat capacity at constant pressure Cp to heat capacity at constant volume Cv</Card>)
                                }

                            }}
                                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="none" selected disabled hidden>Select a process</option>
                                <option value="isothermal">Isothermal</option>
                                <option value="isobaric">Isobaric</option>
                                <option value="isochoric">Isochoric</option>
                                <option value="adiabatic">Adiabatic</option>
                            </select>
                        </div>

                        <Field label="Number of moles:">
                            <input className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" type="text" value={n} onChange={(e) => setn(e.target.value)} />
                        </Field>

                        {pro != "isothermal" ?
                            <>
                                <Field label="Initial temperature">
                                    <input className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" type="text" value={it} onChange={(e) => setit(e.target.value)} />
                                </Field>
                                <Field label="Final temperature">
                                    <input className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" type="text" value={ft} onChange={(e) => setft(e.target.value)} />
                                </Field>
                            </>
                            :
                            <>
                                <Field label="Constant Temperature" hl={1}>
                                    <input className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none bg-red-100 focus:border-blue-500" type="text" value={t} onChange={(e) => sett(e.target.value)} />
                                </Field>
                            </>}
                        {pro != "isobaric" ?
                            <>
                                <Field label="Initial pressure">
                                    <input className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" type="text" value={ip} onChange={(e) => setip(e.target.value)} />
                                </Field>
                                <Field label="Final pressure">
                                    <input className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" type="text" value={fp} onChange={(e) => setfp(e.target.value)} />
                                </Field>
                            </>
                            :
                            <>
                                <Field label="Constant pressure" hl={1}>
                                    <input className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none bg-red-100 focus:border-blue-500" type="text" value={p} onChange={(e) => setp(e.target.value)} />
                                </Field>
                            </>}

                        {pro != "isochoric" ?
                            <>
                                <Field label="Initial Volume" >
                                    <input className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" type="text" value={iv} onChange={(e) => setiv(e.target.value)} />
                                </Field>
                                <Field label="Final Volume" >
                                    <input className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" type="text" value={fv} onChange={(e) => setfv(e.target.value)} />
                                </Field>

                            </>
                            :
                            <>
                                <Field label="Constant volume" hl={1}>
                                    <input className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none bg-red-100 focus:border-blue-500" type="text" value={v} onChange={(e) => setv(e.target.value)} />
                                </Field>
                            </>}

                        <Field label="Heat Capacity at constant volume" >
                            <input className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" type="text" value={cv} onChange={(e) => setcv(e.target.value)} />
                        </Field>
                        <Field label="Heat Capacity at constant pressure" >
                            <input className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" type="text" value={cp} onChange={(e) => setcp(e.target.value)} />
                        </Field>
                        <Field label="Heat Capacity Ratio γ " >
                            <input className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none  focus:border-blue-500" type="text" disabled value={g} onChange={(e) => setg(e.target.value)} />
                        </Field>

                        {/* {pro == "adiabatic" ?
                <>
                    <h1 className=''>Initial volume:</h1>
                    <input type="text" className='bg-red-400' value={iv} onChange={(e) => setiv(e.target.value)} />
                    <h1 className=''>Final volume:</h1>
                    <input type="text" className='bg-red-400' value={fv} onChange={(e) => setfv(e.target.value)} />
                </>
                :
                <>
                    <h1 className=''>Constant volume given:</h1>
                    <input type="text" className='bg-red-400' value={v} onChange={(e) => setv(e.target.value)} />
                </>} */}
                        <div className='w-full flex '>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 rounded-md text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline w-full"
                                type="submit"
                            >
                                Submit
                            </button>

                        </div>

                        <button onClick={(e) => {
                            setn(1);
                            sett(273);
                            setit(273);
                            setft(373);
                            setp(200);
                            setip(200);
                            setfp(400);
                            setv(200);
                            setiv(200);
                            setfv(400);
                        }}>.</button>
                    </div>
                </form>
                <div className="bg-red-300 p-8 rounded-3xl shadow-md w-full  m-2 ">
                    {text}
                </div>

            </div>
        </>
    )
}

export default Work