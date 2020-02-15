import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {AreaChart, XAxis, YAxis, Tooltip, Area, CartesianGrid} from 'recharts';

export default function Forecast(){
    const {cityID} = useParams();
    const url = `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&id=${cityID}`;
    const [cityInfo, setCityInfo] = useState({});
    
    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(res.ok){
                return res.json();
            }
            throw new Error("Not found!");
        })
        .then(setCityInfo)
    }, [url]);

    return (
        <div>
            <Link to="/">Go Back</Link>
            <AreaChart width={730} height={250} data={cityInfo.list}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="temp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="dt_txt" />
            <YAxis dataKey="main.temp" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" name="Temp" dataKey="main.temp" stroke="#8884d8" fillOpacity={1} fill="url(#temp)" />
            </AreaChart>
        </div>
    )
}