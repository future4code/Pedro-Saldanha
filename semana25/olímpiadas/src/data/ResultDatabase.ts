import { CustomError } from "../error/CustomError";
import { Result } from "../model/Result";
import { BaseDatabase } from "./BaseDatabase";

export class ResultDatabase extends BaseDatabase {
    private static TABLE_NAME = "olympic_results"

    async create(newResult: Result): Promise<void> {
        try {
            await BaseDatabase.connection(ResultDatabase.TABLE_NAME)
                .insert({
                    competition: newResult.getCompetition(),
                    athlete: newResult.getAthlete(),
                    value: newResult.getValue(),
                    unity: newResult.getUnity()
                })
        } catch (error:any) {
            throw new CustomError(400, error.sqlMessage)
        }

    }

    public async findPositionByCompetition(competition: string, order: string): Promise<Result | undefined> {

        const result = await BaseDatabase.connection(ResultDatabase.TABLE_NAME)
            .select('*')
            .where({ competition: competition })
            .orderBy(`${order}`)
        return result[0] && Result.toResultModel(result[0]);
    }


}