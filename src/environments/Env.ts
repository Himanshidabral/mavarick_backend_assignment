export interface Environment{
    nodeEnv?: string,
    dbUrl: string;
    jwtSecret?: string;
    baseUrl?:string;
}


export function env():Environment{
    return{
        nodeEnv: process.env.NODE_ENV,
        dbUrl: process.env.DB_URL??'' ,
        jwtSecret: process.env.JWT_SECRET,
        baseUrl: process.env.BASE_URL,
 
    }
}