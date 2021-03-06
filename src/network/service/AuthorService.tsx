import {Author} from "../../data/model/Author";
import Config from "../../core/Config";
import NetworkInterceptor from "../interceptors/NetworkInterceptor";

export class AuthorService {
    private static baseUrl: string = Config.BASE_URL + "/authors/"

    static async addAuthor(author: Author): Promise<any> {
        return NetworkInterceptor.network().post(this.baseUrl + "add/").send(author).then()
    }

    static async loadAuthors(): Promise<Author[]> {
        return NetworkInterceptor.network().get(this.baseUrl).then(res => {
                let listAuthor: Author[] = res.body
                return listAuthor
            }
        )
    }

    static async updateAuthor(author: Author): Promise<any> {
        return NetworkInterceptor.network().post(this.baseUrl + "update/").send(author).then()
    }

    static async deleteAuthor(author: Author): Promise<any> {
        return NetworkInterceptor.network().delete(this.baseUrl + "delete/").send({id: author.id}).then()
    }

    static async countAuthors(): Promise<number> {
        return NetworkInterceptor.network().get(this.baseUrl + "count/").then(res => {
            return res.body
        })
    }

    static async authorWithMostQuotes(): Promise<Author> {
        return NetworkInterceptor.network().get(this.baseUrl + "top").then(res => {
            return res.body
        })
    }
}