import { db } from '../../../utils/db'

export async function GET(res: Response) {
    const data = await fetch('https://www.freetogame.com/api/games')
    const response = await data.json()
    console.log(response)
    response.map(async r => {
        console.log(r);
        await db.query('INSERT INTO games(title, thumbnail, gameurl) VALUES(?,?,?)', [r.title, r.thumbnail, r.game_url])
    })

}