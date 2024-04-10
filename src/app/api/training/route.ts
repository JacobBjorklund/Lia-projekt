import { db } from '../../../utils/db'

export async function GET(res: Response) {
    // const data = await fetch('http://10.111.3.78:3001/api/mega')
    //const response = await data.json()
    //console.log(response.length);
    // for (let i = 0; i < 10000; i++) {
    //   await db.query('INSERT INTO tabellfan(url, api) VALUES(?,?)', [response[i].id, response[i].productid])
    //}
    const response = await db.query('SELECT * FROM tabellfan ORDER BY id DESC LIMIT 500')
    return new Response(JSON.stringify(response))

}