import config from './config';
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime";
const cheerio = require('cheerio');

const { Pool, Client } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: '192.168.10.151',
    database: 'draft',
    password: '63n0c1d3!',
    port: 5432,
})
const nflProspectBaseUrl = "https://thedraftnetwork.com/player/chase-young"
// https://www.cbssports.com/nfl/draft/prospect-rankings/

const fetchData = async () => {
    const result = await axios.get(nflProspectBaseUrl);
    return cheerio.load(result.data);
};

fetchData()
    .then(($) => {
        const elem=$(".player-profile-commentary>p")[0];
        console.log($(elem).html());
        // console.log($.html());
    })

//
// for(elem of (".css-1fwlqa")){
//     console.log($(elem).attr("href"))
// }
